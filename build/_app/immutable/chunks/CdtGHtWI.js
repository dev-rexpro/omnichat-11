import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, c as child, n as sibling, l as get, r as reset, t as template_effect, z as untrack, x as deep_read_state, q as event, k as set, a as append, b as pop, e as store_get, s as setup_stores, m as mutable_source, d as set_text, f as from_html, F as from_svg } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { r as remove_input_defaults, s as set_class, c as clsx, a as set_attribute } from "./CpNYkTX2.js";
import { b as bind_value } from "./DhE2rCDJ.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { b as settings } from "./C2d9K3Bp.js";
var root = from_html(`<label class="sr-only"> </label>`);
var root_1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="size-4"><path fill-rule="evenodd" d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l10.5 10.5a.75.75 0 1 0 1.06-1.06l-1.322-1.323a7.012 7.012 0 0 0 2.16-3.11.87.87 0 0 0 0-.567A7.003 7.003 0 0 0 4.82 3.76l-1.54-1.54Zm3.196 3.195 1.135 1.136A1.502 1.502 0 0 1 9.45 8.389l1.136 1.135a3 3 0 0 0-4.109-4.109Z" clip-rule="evenodd"></path><path d="m7.812 10.994 1.816 1.816A7.003 7.003 0 0 1 1.38 8.28a.87.87 0 0 1 0-.566 6.985 6.985 0 0 1 1.113-2.039l2.513 2.513a3 3 0 0 0 2.806 2.806Z"></path></svg>`);
var root_2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path fill-rule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"></path></svg>`);
var root_3 = from_html(`<div><!> <input/> <button type="button"><!></button></div>`);
function SensitiveInput($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let id = prop($$props, "id", 8, "password-input");
  let value = prop($$props, "value", 12, "");
  let placeholder = prop($$props, "placeholder", 8, "");
  let type = prop($$props, "type", 8, "text");
  let required = prop($$props, "required", 8, true);
  let readOnly = prop($$props, "readOnly", 8, false);
  let outerClassName = prop($$props, "outerClassName", 8, "flex flex-1 bg-transparent");
  let inputClassName = prop($$props, "inputClassName", 8, "w-full text-sm py-0.5 bg-transparent");
  let showButtonClassName = prop($$props, "showButtonClassName", 8, "pl-1.5  transition bg-transparent");
  let screenReader = prop($$props, "screenReader", 8, true);
  let autocomplete = prop($$props, "autocomplete", 8, "off");
  let name = prop($$props, "name", 8, void 0);
  let show = mutable_source(false);
  init();
  var div = root_3();
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var label = root();
      var text = child(label, true);
      reset(label);
      template_effect(
        ($0) => {
          set_attribute(label, "for", id());
          set_text(text, $0);
        },
        [
          () => (deep_read_state(placeholder()), $i18n(), untrack(() => placeholder() || $i18n().t("Password")))
        ]
      );
      append($$anchor2, label);
    };
    if_block(node, ($$render) => {
      if (screenReader()) $$render(consequent);
    });
  }
  var input = sibling(node, 2);
  remove_input_defaults(input);
  var button = sibling(input, 2);
  var node_1 = child(button);
  {
    var consequent_1 = ($$anchor2) => {
      var svg = root_1();
      append($$anchor2, svg);
    };
    var alternate = ($$anchor2) => {
      var svg_1 = root_2();
      append($$anchor2, svg_1);
    };
    if_block(node_1, ($$render) => {
      if (get(show)) $$render(consequent_1);
      else $$render(alternate, -1);
    });
  }
  reset(button);
  reset(div);
  template_effect(
    ($0) => {
      set_class(div, 1, clsx(outerClassName()));
      set_attribute(input, "id", id());
      set_class(input, 1, (deep_read_state(inputClassName()), get(show), $settings(), untrack(() => {
        var _a;
        return `${inputClassName()} ${get(show) ? "" : "password"} ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : " outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-600"}`;
      })));
      set_attribute(input, "placeholder", placeholder());
      set_attribute(input, "type", type() === "password" && !get(show) ? "password" : "text");
      set_attribute(input, "name", name());
      input.required = required() && !readOnly();
      input.disabled = readOnly();
      set_attribute(input, "autocomplete", autocomplete());
      set_class(button, 1, clsx(showButtonClassName()));
      set_attribute(button, "aria-pressed", get(show));
      set_attribute(button, "aria-label", $0);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Make password visible in the user interface")))
    ]
  );
  bind_value(input, value);
  event("click", button, (e) => {
    e.preventDefault();
    set(show, !get(show));
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  SensitiveInput as S
};
