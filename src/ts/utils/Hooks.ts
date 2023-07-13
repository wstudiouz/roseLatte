import { RefObject, useState, useCallback, useEffect } from "react";
interface Size {
  width: number | undefined;
  height: number | undefined;
}
export enum AspectRatioMode {
  widthFromHeight,
  heightFromWidth,
}

type MediaSize = {
  width: number | undefined;
  height: number | undefined;
};

export function useAspectRatio(
  aspectRatio: number,
  mode: AspectRatioMode,
  ref: RefObject<HTMLElement> | undefined
): Size {
  const [size, setSize] = useState<MediaSize>({
    width: ref?.current?.clientWidth,
    height: ref?.current?.clientHeight,
  });

  const resizeCalback = useCallback(() => {
    if (ref?.current) {
      if (mode === AspectRatioMode.heightFromWidth) {
        const width = ref.current.clientWidth;
        const finalHeight = width / aspectRatio;

        return setSize({ width: width, height: finalHeight });
      } else {
        const height = ref.current.clientHeight;
        const finalWidth = height * aspectRatio;
        return setSize({ width: finalWidth, height: height });
      }
    }
  }, [aspectRatio, mode, ref]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => resizeCalback());
    if (ref?.current) resizeObserver.observe(ref.current);
    resizeCalback();
    return () => resizeObserver.disconnect();
  }, [ref, resizeCalback]);

  return size;
}

export const useBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_BACKEND_URL || "";
};
