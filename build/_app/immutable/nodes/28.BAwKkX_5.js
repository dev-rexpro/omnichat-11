import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, b as pop, s as setup_stores, e as store_get } from "../chunks/CISwU846.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { g as goto } from "../chunks/A3V7pFI8.js";
import { p as page } from "../chunks/B2F-VN7c.js";
import { d as dayjs2 } from "../chunks/OO7lCI-F.js";
import "../chunks/8-FuG-sv.js";
import { c as createNoteHandler } from "../chunks/Dw0XyAGk.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(async () => {
    const title = $page().url.searchParams.get("title") ?? dayjs2().format("YYYY-MM-DD");
    const content = $page().url.searchParams.get("content") ?? "";
    const res = await createNoteHandler(title, content);
    if (res) {
      goto(`/notes/${res.id}`);
    }
  });
  init();
  pop();
  $$cleanup();
}
export {
  _page as component
};
