import MouseFollower from "mouse-follower";
import { primaryInput } from "detect-it";
import gsap from "gsap";
import { DEFAULT_CURSOR_SPEED } from "./Consts";

export class CursorManager {
  private static _instance: CursorManager;
  private isBrowser = typeof window !== "undefined";
  private _cursor?: MouseFollower;

  get cursor(): MouseFollower | undefined {
    return this._cursor;
  }

  private constructor() {
    if (primaryInput !== "touch") {
      MouseFollower.registerGSAP(gsap);
      if (this.isBrowser)
        this._cursor = new MouseFollower({
          container: document?.body,
          speed: DEFAULT_CURSOR_SPEED,
          ease: "power4.out",
          skewingMedia: 1,
          className: "mf-cursor", //turn off cursor on touch devices, because no styles for it
        });
    }
  }
  static get instance(): CursorManager {
    if (!CursorManager._instance) {
      CursorManager._instance = new CursorManager();
    }

    return CursorManager._instance;
  }
}
