import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, b as pop } from "../chunks/CISwU846.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { g as goto } from "../chunks/A3V7pFI8.js";
function _page($$anchor, $$props) {
  push($$props, false);
  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("v")) {
      const videoId = params.get("v");
      goto(`/?youtube=${encodeURIComponent(videoId)}`);
    } else {
      goto("/");
    }
  });
  init();
  pop();
}
export {
  _page as component
};
