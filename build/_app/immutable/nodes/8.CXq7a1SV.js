import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, b as pop, s as setup_stores, e as store_get } from "../chunks/CISwU846.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { t as toast } from "../chunks/C-rLN5eo.js";
import { C as Chat } from "../chunks/CzXI8vzt.js";
import { p as page } from "../chunks/B2F-VN7c.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(() => {
    if ($page().url.searchParams.get("error")) {
      toast.error($page().url.searchParams.get("error") || "An unknown error occurred.");
    }
  });
  init();
  Chat($$anchor, {});
  pop();
  $$cleanup();
}
export {
  _page as component
};
