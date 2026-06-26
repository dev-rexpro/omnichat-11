function WorkerWrapper(options) {
  return new Worker(
    "" + new URL("../workers/pyodide.worker-DDg6GT8V.js", import.meta.url).href,
    {
      type: "module",
      name: options == null ? void 0 : options.name
    }
  );
}
export {
  WorkerWrapper as W
};
