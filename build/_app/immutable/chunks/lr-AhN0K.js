import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, h as comment, i as first_child, a as append, b as pop, c as child, r as reset, t as template_effect, d as set_text, x as deep_read_state, z as untrack, n as sibling, q as event, f as from_html, C as createEventDispatcher, l as get, s as setup_stores, k as set, e as store_get, m as mutable_source } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { r as remove_input_defaults, s as set_class, a as set_attribute } from "./CpNYkTX2.js";
import { b as bind_value } from "./DhE2rCDJ.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { e as each, i as index } from "./D16NL_tt.js";
import { X as XMark } from "./DBwFTtKj.js";
var root$1 = from_html(`<span class="flex items-center gap-1 px-1.5 py-[1px] rounded-full bg-gray-100/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium"><span class="line-clamp-1"> </span></span>`);
var root_1$1 = from_html(`<button type="button" class="flex items-center gap-1 px-1.5 py-[1px] rounded-full bg-gray-100/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"><span class="line-clamp-1"> </span> <!></button>`);
function TagItem($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let tag = prop($$props, "tag", 8);
  let disabled = prop($$props, "disabled", 8, false);
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          var span = root$1();
          var span_1 = child(span);
          var text = child(span_1, true);
          reset(span_1);
          reset(span);
          template_effect(() => set_text(text, (deep_read_state(tag()), untrack(() => tag().name))));
          append($$anchor3, span);
        };
        var alternate = ($$anchor3) => {
          var button = root_1$1();
          var span_2 = child(button);
          var text_1 = child(span_2, true);
          reset(span_2);
          var node_2 = sibling(span_2, 2);
          XMark(node_2, { className: "size-3", strokeWidth: "2.5" });
          reset(button);
          template_effect(() => set_text(text_1, (deep_read_state(tag()), untrack(() => tag().name))));
          event("click", button, () => {
            onDelete()();
          });
          append($$anchor3, button);
        };
        if_block(node_1, ($$render) => {
          if (disabled()) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (tag()) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
}
function TagList($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  const dispatch = createEventDispatcher();
  let tags = prop($$props, "tags", 24, () => []);
  let disabled = prop($$props, "disabled", 8, false);
  init();
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 1, tags, index, ($$anchor2, tag) => {
    TagItem($$anchor2, {
      get tag() {
        return get(tag);
      },
      get disabled() {
        return disabled();
      },
      onDelete: () => {
        dispatch("delete", get(tag).name);
      }
    });
  });
  append($$anchor, fragment);
  pop();
}
var root = from_html(`<input/>`);
var root_1 = from_html(`<div class="flex flex-wrap items-center gap-1 w-full"><!> <!></div>`);
function Tags($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let tags = prop($$props, "tags", 24, () => []);
  prop($$props, "suggestionTags", 24, () => []);
  let disabled = prop($$props, "disabled", 8, false);
  let inputValue = mutable_source("");
  const addTag = () => {
    const value = get(inputValue).trim();
    if (value !== "") {
      dispatch("add", value);
      set(inputValue, "");
    }
  };
  init();
  var div = root_1();
  var node = child(div);
  TagList(node, {
    get tags() {
      return tags();
    },
    get disabled() {
      return disabled();
    },
    $$events: {
      delete: (e) => {
        dispatch("delete", e.detail);
      }
    }
  });
  var node_1 = sibling(node, 2);
  {
    var consequent = ($$anchor2) => {
      var input = root();
      remove_input_defaults(input);
      template_effect(
        ($0) => {
          set_class(input, 1, `flex-1 min-w-24 ${(deep_read_state(tags()), untrack(() => tags().length > 0 ? "px-0.5" : "")) ?? ""} text-xs bg-transparent outline-hidden placeholder:text-gray-400 dark:placeholder:text-gray-500`);
          set_attribute(input, "placeholder", $0);
        },
        [() => ($i18n(), untrack(() => $i18n().t("Add a tag...")))]
      );
      bind_value(input, () => get(inputValue), ($$value) => set(inputValue, $$value));
      event("keydown", input, (event2) => {
        if (event2.key === "Enter" || event2.key === " ") {
          event2.preventDefault();
          addTag();
        }
      });
      append($$anchor2, input);
    };
    if_block(node_1, ($$render) => {
      if (!disabled()) $$render(consequent);
    });
  }
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  Tags as T
};
