import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, w as legacy_pre_effect, k as set, x as deep_read_state, y as legacy_pre_effect_reset, q as event, aV as $window, i as first_child, c as child, r as reset, t as template_effect, d as set_text, l as get, a as append, n as sibling, b as pop, m as mutable_source, aW as mutate, B as tick, h as comment, z as untrack, D as text, f as from_html } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { e as each, i as index } from "./D16NL_tt.js";
import { s as slot } from "./DbvU-2C8.js";
import { t as transition } from "./CjS5To7p.js";
import { a as action } from "./22PI2KxS.js";
import { s as set_class, c as clsx, a as set_attribute } from "./CpNYkTX2.js";
import { b as bind_prop } from "./CGyv6Yf5.js";
import { b as bind_this } from "./DvKZCnQx.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { f as flyAndScale } from "./CZ-Bw2qQ.js";
var root = from_html(`<span> </span>`);
var root_1 = from_html(`<button type="button"><!></button>`);
var root_2 = from_html(`<div><!></div>`);
var root_3 = from_html(`<button type="button"><!></button> <!>`, 1);
function Select($$anchor, $$props) {
  push($$props, false);
  const selectedLabel = mutable_source();
  let value = prop($$props, "value", 12, "");
  let items = prop($$props, "items", 24, () => []);
  let placeholder = prop($$props, "placeholder", 8, "");
  let onChange = prop($$props, "onChange", 8, () => {
  });
  let triggerClass = prop($$props, "triggerClass", 8, "");
  let labelClass = prop($$props, "labelClass", 8, "");
  let contentClass = prop($$props, "contentClass", 8, "rounded-2xl min-w-[170px] p-1 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-850 dark:text-white shadow-lg");
  let itemClass = prop($$props, "itemClass", 8, "flex w-full gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl");
  let align = prop($$props, "align", 8, "start");
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let open = prop($$props, "open", 12, false);
  let triggerEl = mutable_source();
  let contentEl = mutable_source();
  function portal(node) {
    document.body.appendChild(node);
    return {
      destroy() {
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }
    };
  }
  function positionContent() {
    if (!get(triggerEl) || !get(contentEl)) return;
    const rect = get(triggerEl).getBoundingClientRect();
    mutate(contentEl, get(contentEl).style.position = "fixed");
    mutate(contentEl, get(contentEl).style.zIndex = "9999");
    mutate(contentEl, get(contentEl).style.top = `${rect.bottom + 4}px`);
    mutate(contentEl, get(contentEl).style.minWidth = `${rect.width}px`);
    if (align() === "end") {
      mutate(contentEl, get(contentEl).style.right = `${window.innerWidth - rect.right}px`);
      mutate(contentEl, get(contentEl).style.left = "auto");
    } else {
      mutate(contentEl, get(contentEl).style.left = `${rect.left}px`);
      mutate(contentEl, get(contentEl).style.right = "auto");
    }
  }
  async function toggleOpen() {
    open(!open());
    if (open()) {
      await tick();
      positionContent();
    }
  }
  function handleWindowClick(event2) {
    var _a, _b;
    if (!open()) return;
    if ((_a = get(triggerEl)) == null ? void 0 : _a.contains(event2.target)) return;
    if ((_b = get(contentEl)) == null ? void 0 : _b.contains(event2.target)) return;
    open(false);
    onClose()();
  }
  function handleKeydown(event2) {
    if (event2.key === "Escape" && open()) {
      open(false);
      onClose()();
    }
  }
  function selectItem(item) {
    value(item.value);
    open(false);
    onChange()(value());
  }
  legacy_pre_effect(
    () => (deep_read_state(items()), deep_read_state(value()), deep_read_state(placeholder())),
    () => {
      var _a;
      set(selectedLabel, ((_a = items().find((i) => i.value === value())) == null ? void 0 : _a.label) ?? placeholder());
    }
  );
  legacy_pre_effect_reset();
  var $$exports = { selectItem };
  init();
  var fragment = root_3();
  event("click", $window, handleWindowClick);
  event("keydown", $window, handleKeydown);
  event("scroll", $window, positionContent, true);
  event("resize", $window, positionContent);
  var button = first_child(fragment);
  var node_1 = child(button);
  slot(
    node_1,
    $$props,
    "trigger",
    {
      get selectedLabel() {
        return get(selectedLabel);
      },
      get open() {
        return open();
      }
    },
    ($$anchor2) => {
      var span = root();
      var text2 = child(span, true);
      reset(span);
      template_effect(() => {
        set_class(span, 1, clsx(labelClass()));
        set_text(text2, get(selectedLabel));
      });
      append($$anchor2, span);
    }
  );
  reset(button);
  bind_this(button, ($$value) => set(triggerEl, $$value), () => get(triggerEl));
  var node_2 = sibling(button, 2);
  {
    var consequent = ($$anchor2) => {
      var div = root_2();
      var node_3 = child(div);
      slot(
        node_3,
        $$props,
        "default",
        {
          get open() {
            return open();
          },
          selectItem
        },
        ($$anchor3) => {
          var fragment_1 = comment();
          var node_4 = first_child(fragment_1);
          each(node_4, 1, items, index, ($$anchor4, item) => {
            var button_1 = root_1();
            var node_5 = child(button_1);
            slot(
              node_5,
              $$props,
              "item",
              {
                get item() {
                  return get(item);
                },
                get selected() {
                  return deep_read_state(value()), get(item), untrack(() => value() === get(item).value);
                }
              },
              ($$anchor5) => {
                var text_1 = text();
                template_effect(() => set_text(text_1, (get(item), untrack(() => get(item).label))));
                append($$anchor5, text_1);
              }
            );
            reset(button_1);
            template_effect(() => set_class(button_1, 1, clsx(itemClass())));
            event("click", button_1, () => selectItem(get(item)));
            append($$anchor4, button_1);
          });
          append($$anchor3, fragment_1);
        }
      );
      reset(div);
      action(div, ($$node) => portal == null ? void 0 : portal($$node));
      bind_this(div, ($$value) => set(contentEl, $$value), () => get(contentEl));
      template_effect(() => set_class(div, 1, clsx(contentClass())));
      transition(3, div, () => flyAndScale);
      append($$anchor2, div);
    };
    if_block(node_2, ($$render) => {
      if (open()) $$render(consequent);
    });
  }
  template_effect(() => {
    set_class(button, 1, clsx(triggerClass()));
    set_attribute(button, "aria-label", placeholder());
  });
  event("click", button, toggleOpen);
  append($$anchor, fragment);
  bind_prop($$props, "selectItem", selectItem);
  return pop($$exports);
}
export {
  Select as S
};
