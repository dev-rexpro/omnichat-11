import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, i as first_child, n as sibling, c as child, r as reset, t as template_effect, x as deep_read_state, l as get, z as untrack, d as set_text, a as append, u as derived_safe_equal, D as text, q as event, b as pop, e as store_get, s as setup_stores, f as from_html } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { s as set_class } from "./CpNYkTX2.js";
import { s as stopPropagation } from "./CGgk3ROl.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { C as ChevronDown } from "./BvmxC0vK.js";
import { C as Check } from "./CeNybZIW.js";
import { X as XMark } from "./DBwFTtKj.js";
import { S as Select } from "./Cdp_Q1wl.js";
var root = from_html(`<button class="outline-none" type="button"><!></button>`);
var root_1 = from_html(`<div class="inline-flex h-input px-0.5 w-full outline-hidden bg-transparent truncate placeholder-gray-400 focus:outline-hidden capitalize"><!></div> <!>`, 1);
var root_2 = from_html(` <div><!></div>`, 1);
function TagSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let value = prop($$props, "value", 12, "");
  let placeholder = prop($$props, "placeholder", 24, () => $i18n().t("Tag"));
  let onChange = prop($$props, "onChange", 8, () => {
  });
  let items = prop($$props, "items", 24, () => []);
  init();
  Select($$anchor, {
    get items() {
      return items();
    },
    get placeholder() {
      return placeholder();
    },
    triggerClass: "relative w-full flex items-center gap-0.5 px-2.5 py-1.5 rounded-xl ",
    itemClass: "flex w-full gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl capitalize",
    onChange: () => onChange()(value()),
    get value() {
      return value();
    },
    set value($$value) {
      value($$value);
    },
    $$slots: {
      trigger: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_1();
        var div = first_child(fragment_1);
        var node = child(div);
        {
          var consequent = ($$anchor3) => {
            var text$1 = text();
            template_effect(() => set_text(text$1, value()));
            append($$anchor3, text$1);
          };
          var alternate = ($$anchor3) => {
            var text_1 = text();
            template_effect(() => set_text(text_1, placeholder()));
            append($$anchor3, text_1);
          };
          if_block(node, ($$render) => {
            if (value()) $$render(consequent);
            else $$render(alternate, -1);
          });
        }
        reset(div);
        var node_1 = sibling(div, 2);
        {
          var consequent_1 = ($$anchor3) => {
            var button = root();
            var node_2 = child(button);
            XMark(node_2, { className: "size-3.5" });
            reset(button);
            event("click", button, stopPropagation(() => {
              value("");
              onChange()(value());
            }));
            append($$anchor3, button);
          };
          var alternate_1 = ($$anchor3) => {
            ChevronDown($$anchor3, { className: " size-3.5", strokeWidth: "2.5" });
          };
          if_block(node_1, ($$render) => {
            if (value()) $$render(consequent_1);
            else $$render(alternate_1, -1);
          });
        }
        append($$anchor2, fragment_1);
      },
      item: ($$anchor2, $$slotProps) => {
        const item = derived_safe_equal(() => $$slotProps.item);
        const selected = derived_safe_equal(() => $$slotProps.selected);
        var fragment_5 = root_2();
        var text_2 = first_child(fragment_5);
        var div_1 = sibling(text_2);
        var node_3 = child(div_1);
        Check(node_3, {});
        reset(div_1);
        template_effect(
          ($0) => {
            set_text(text_2, `${$0 ?? ""} `);
            set_class(div_1, 1, `ml-auto ${get(selected) ? "" : "invisible"}`);
          },
          [
            () => (deep_read_state(get(item)), untrack(() => get(item).label.length > 32 ? `${get(item).label.slice(0, 32)}...` : get(item).label))
          ]
        );
        append($$anchor2, fragment_5);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
export {
  TagSelector as T
};
