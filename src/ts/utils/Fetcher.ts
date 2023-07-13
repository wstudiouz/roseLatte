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
