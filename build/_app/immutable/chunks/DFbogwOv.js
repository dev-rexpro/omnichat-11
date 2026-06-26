const setTextScale = (scale) => {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.style.setProperty("--app-text-scale", `${scale}`);
};
export {
  setTextScale as s
};
