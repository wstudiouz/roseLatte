import translate from "./translate";

export const getter = async (url: string, withMeta?: boolean) => {
  const result = { ok: false, data: null, msg: "" };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${url}`
    );
    const data = await response.json();

    if (data.data) {
      result.ok = true;
      result.data = withMeta ? data : data.data;
      result.msg = "ok";
    } else {
      result.ok = false;
      result.data = null;
      result.msg = data.error.message;
    }
  } catch (error) {
    result.ok = false;
    result.data = null;
    result.msg = String(error);
  }

  return result;
};

export const sendMessage = async (message: string, lang: string) => {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
          text: message,
          parse_mode: "html",
        }),
      }
    );

    if (response.ok) {
      alert(translate("cards.success", lang));
    } else {
      alert(translate("cards.error", lang));
    }
  } catch (error) {
    alert(translate("cards.error", lang));
  }
  window.location.reload();
};
