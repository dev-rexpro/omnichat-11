import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, b as pop, s as setup_stores, n as sibling, t as template_effect, z as untrack, d as set_text, q as event, k as set, l as get, a as append, c as child, f as from_html, e as store_get, m as mutable_source, r as reset, aX as remove_textarea_child, F as from_svg } from "./CISwU846.js";
import { a as set_attribute, s as set_class, c as clsx } from "./CpNYkTX2.js";
import { b as bind_value } from "./DhE2rCDJ.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { t as toast } from "./C-rLN5eo.js";
import { b as settings } from "./C2d9K3Bp.js";
import { M as Modal } from "./DyXJ7eDz.js";
import { X as XMark } from "./DBwFTtKj.js";
import { q as isValidHttpUrl } from "./7pK2BKln.js";
var root$1 = from_html(`<div class="flex flex-col h-full"><div class="flex justify-between items-center dark:text-gray-100 px-5 pt-4 pb-1.5"><h1 class="text-lg font-medium self-center font-primary"> </h1> <button class="self-center"><!></button></div> <div class="px-5 pb-4"><form><div class="flex justify-between mb-0.5"><label for="webpage-url"> </label></div> <textarea id="webpage-url" type="text" rows="3" autocomplete="off" required=""></textarea> <div class="flex justify-end gap-2 pt-3 bg-gray-50 dark:bg-gray-900/50"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 transition rounded-full" type="submit"> </button></div></form></div></div>`);
function AttachWebpageModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let onSubmit = prop($$props, "onSubmit", 8);
  let url = mutable_source("");
  const submitHandler = () => {
    let urls = get(url).split("\n").map((u) => u.trim()).filter((u) => u !== "").filter((u) => isValidHttpUrl(u));
    urls = [...new Set(urls)];
    if (urls.length === 0) {
      toast.error($i18n().t("Please enter a valid URL."));
      return;
    }
    onSubmit()({ type: "web", data: urls });
    show(false);
    set(url, "");
  };
  init();
  Modal($$anchor, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root$1();
      var div_1 = child(div);
      var h1 = child(div_1);
      var text = child(h1, true);
      reset(h1);
      var button = sibling(h1, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var form = child(div_2);
      var div_3 = child(form);
      var label = child(div_3);
      var text_1 = child(label, true);
      reset(label);
      reset(div_3);
      var textarea = sibling(div_3, 2);
      remove_textarea_child(textarea);
      set_attribute(textarea, "placeholder", "https://example.com");
      var div_4 = sibling(textarea, 2);
      var button_1 = child(div_4);
      var text_2 = child(button_1, true);
      reset(button_1);
      reset(div_4);
      reset(form);
      reset(div_2);
      reset(div);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text, $0);
          set_attribute(button, "aria-label", $1);
          set_class(label, 1, ($settings(), untrack(() => {
            var _a;
            return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_1, $2);
          set_class(textarea, 1, ($settings(), untrack(() => {
            var _a;
            return `w-full flex-1 text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_text(text_2, $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Attach Webpage"))),
          () => ($i18n(), untrack(() => $i18n().t("Close modal"))),
          () => ($i18n(), untrack(() => $i18n().t("Webpage URLs"))),
          () => ($i18n(), untrack(() => $i18n().t("Add")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(textarea, () => get(url), ($$value) => set(url, $$value));
      event("submit", form, (e) => {
        e.preventDefault();
        submitHandler();
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6H20M22 6H20M20 6V4M20 6V8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.4 20H2.6C2.26863 20 2 19.7314 2 19.4V11H21.4C21.7314 11 22 11.2686 22 11.6V19.4C22 19.7314 21.7314 20 21.4 20Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 11V4.6C2 4.26863 2.26863 4 2.6 4H8.77805C8.92127 4 9.05977 4.05124 9.16852 4.14445L12.3315 6.85555C12.4402 6.94876 12.5787 7 12.722 7H14" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function NewFolderAlt($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  var svg = root();
  template_effect(() => set_class(svg, 0, clsx(className())));
  append($$anchor, svg);
}
export {
  AttachWebpageModal as A,
  NewFolderAlt as N
};
