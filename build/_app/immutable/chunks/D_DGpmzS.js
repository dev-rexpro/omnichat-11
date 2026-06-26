import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, w as legacy_pre_effect, y as legacy_pre_effect_reset, t as template_effect, a as append, b as pop, s as setup_stores, x as deep_read_state, n as sibling, f as from_html, e as store_get, c as child, r as reset, z as untrack, q as event, h as comment, i as first_child, D as text, d as set_text } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { s as slot } from "./DbvU-2C8.js";
import { t as transition, s as slide } from "./CjS5To7p.js";
import { a as set_attribute, s as set_class, c as clsx } from "./CpNYkTX2.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { d as dayjs2, r as relativeTime } from "./OO7lCI-F.js";
import "./8-FuG-sv.js";
import { d as dayjsDuration } from "./CQqKGJai.js";
import { q as quintOut } from "./CZ-Bw2qQ.js";
import { C as ChevronUp } from "./CIuYe2fp.js";
import { C as ChevronDown } from "./BvmxC0vK.js";
import { S as Spinner } from "./7N5LES1L.js";
import { v as v4 } from "./7pK2BKln.js";
var root = from_html(`<div><!></div>`);
var root_1 = from_html(`<div class="flex self-center translate-y-[1px]"><!></div>`);
var root_2 = from_html(`<div><div><!> <div><!></div> <!></div></div>`);
var root_3 = from_html(`<div class="flex self-start translate-y-1"><!></div>`);
var root_4 = from_html(`<div><div><div class="flex items-start justify-between"><!> <!></div> <!></div></div>`);
var root_5 = from_html(`<div><!> <!></div>`);
function Collapsible($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  dayjs2.extend(dayjsDuration);
  dayjs2.extend(relativeTime);
  async function loadLocale(locales) {
    if (!locales || !Array.isArray(locales)) {
      return;
    }
    for (const locale of locales) {
      try {
        dayjs2.locale(locale);
        break;
      } catch (error) {
        /* @__PURE__ */ console.error(`Could not load locale '${locale}':`, error);
      }
    }
  }
  let open = prop($$props, "open", 12, false);
  let className = prop($$props, "className", 8, "");
  let buttonClassName = prop($$props, "buttonClassName", 8, "w-fit text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition");
  let id = prop($$props, "id", 8, "");
  let title = prop($$props, "title", 8, null);
  let attributes = prop($$props, "attributes", 8, null);
  let chevron = prop($$props, "chevron", 8, false);
  let grow = prop($$props, "grow", 8, false);
  let disabled = prop($$props, "disabled", 8, false);
  let messageDone = prop($$props, "messageDone", 8, false);
  let hide = prop($$props, "hide", 8, false);
  let onChange = prop($$props, "onChange", 8, () => {
  });
  v4();
  legacy_pre_effect(() => $i18n(), () => {
    loadLocale($i18n().languages);
  });
  legacy_pre_effect(() => (deep_read_state(onChange()), deep_read_state(open())), () => {
    onChange()(open());
  });
  legacy_pre_effect_reset();
  init();
  var div = root_5();
  var node = child(div);
  {
    var consequent_10 = ($$anchor2) => {
      var div_1 = root_2();
      var div_2 = child(div_1);
      var node_1 = child(div_2);
      {
        var consequent = ($$anchor3) => {
          var div_3 = root();
          var node_2 = child(div_3);
          Spinner(node_2, { className: "size-4" });
          reset(div_3);
          append($$anchor3, div_3);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(attributes()), deep_read_state(messageDone()), untrack(() => {
            var _a, _b;
            return ((_a = attributes()) == null ? void 0 : _a.done) && ((_b = attributes()) == null ? void 0 : _b.done) !== "true" && !messageDone();
          })) $$render(consequent);
        });
      }
      var div_4 = sibling(node_1, 2);
      var node_3 = child(div_4);
      {
        var consequent_5 = ($$anchor3) => {
          var fragment = comment();
          var node_4 = first_child(fragment);
          {
            var consequent_3 = ($$anchor4) => {
              var fragment_1 = comment();
              var node_5 = first_child(fragment_1);
              {
                var consequent_1 = ($$anchor5) => {
                  var text$1 = text();
                  template_effect(($0) => set_text(text$1, $0), [
                    () => ($i18n(), untrack(() => $i18n().t("Thought for less than a second")))
                  ]);
                  append($$anchor5, text$1);
                };
                var consequent_2 = ($$anchor5) => {
                  var text_1 = text();
                  template_effect(($0) => set_text(text_1, $0), [
                    () => ($i18n(), deep_read_state(attributes()), untrack(() => $i18n().t("Thought for {{DURATION}} seconds", { DURATION: attributes().duration })))
                  ]);
                  append($$anchor5, text_1);
                };
                var alternate = ($$anchor5) => {
                  var text_2 = text();
                  template_effect(($0) => set_text(text_2, $0), [
                    () => ($i18n(), deep_read_state(dayjs2), deep_read_state(attributes()), untrack(() => $i18n().t("Thought for {{DURATION}}", {
                      DURATION: dayjs2.duration(attributes().duration, "seconds").humanize()
                    })))
                  ]);
                  append($$anchor5, text_2);
                };
                if_block(node_5, ($$render) => {
                  if (deep_read_state(attributes()), untrack(() => attributes().duration < 1)) $$render(consequent_1);
                  else if (deep_read_state(attributes()), untrack(() => attributes().duration < 60)) $$render(consequent_2, 1);
                  else $$render(alternate, -1);
                });
              }
              append($$anchor4, fragment_1);
            };
            var consequent_4 = ($$anchor4) => {
              var text_3 = text();
              template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Thought")))]);
              append($$anchor4, text_3);
            };
            var alternate_1 = ($$anchor4) => {
              var text_4 = text();
              template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Thinking...")))]);
              append($$anchor4, text_4);
            };
            if_block(node_4, ($$render) => {
              if (deep_read_state(attributes()), deep_read_state(messageDone()), untrack(() => {
                var _a, _b;
                return (((_a = attributes()) == null ? void 0 : _a.done) === "true" || messageDone()) && ((_b = attributes()) == null ? void 0 : _b.duration);
              })) $$render(consequent_3);
              else if (deep_read_state(attributes()), deep_read_state(messageDone()), untrack(() => {
                var _a;
                return ((_a = attributes()) == null ? void 0 : _a.done) === "true" || messageDone();
              })) $$render(consequent_4, 1);
              else $$render(alternate_1, -1);
            });
          }
          append($$anchor3, fragment);
        };
        var consequent_7 = ($$anchor3) => {
          var fragment_7 = comment();
          var node_6 = first_child(fragment_7);
          {
            var consequent_6 = ($$anchor4) => {
              var text_5 = text();
              template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Analyzed")))]);
              append($$anchor4, text_5);
            };
            var alternate_2 = ($$anchor4) => {
              var text_6 = text();
              template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Analyzing...")))]);
              append($$anchor4, text_6);
            };
            if_block(node_6, ($$render) => {
              if (deep_read_state(attributes()), deep_read_state(messageDone()), untrack(() => {
                var _a;
                return ((_a = attributes()) == null ? void 0 : _a.done) === "true" || messageDone();
              })) $$render(consequent_6);
              else $$render(alternate_2, -1);
            });
          }
          append($$anchor3, fragment_7);
        };
        var alternate_3 = ($$anchor3) => {
          var text_7 = text();
          template_effect(() => set_text(text_7, title()));
          append($$anchor3, text_7);
        };
        if_block(node_3, ($$render) => {
          if (deep_read_state(attributes()), untrack(() => {
            var _a;
            return ((_a = attributes()) == null ? void 0 : _a.type) === "reasoning";
          })) $$render(consequent_5);
          else if (deep_read_state(attributes()), untrack(() => {
            var _a;
            return ((_a = attributes()) == null ? void 0 : _a.type) === "code_interpreter";
          })) $$render(consequent_7, 1);
          else $$render(alternate_3, -1);
        });
      }
      reset(div_4);
      var node_7 = sibling(div_4, 2);
      {
        var consequent_9 = ($$anchor3) => {
          var div_5 = root_1();
          var node_8 = child(div_5);
          {
            var consequent_8 = ($$anchor4) => {
              ChevronUp($$anchor4, { strokeWidth: "3.5", className: "size-3.5" });
            };
            var alternate_4 = ($$anchor4) => {
              ChevronDown($$anchor4, { strokeWidth: "3.5", className: "size-3.5" });
            };
            if_block(node_8, ($$render) => {
              if (open()) $$render(consequent_8);
              else $$render(alternate_4, -1);
            });
          }
          reset(div_5);
          append($$anchor3, div_5);
        };
        if_block(node_7, ($$render) => {
          if (!disabled()) $$render(consequent_9);
        });
      }
      reset(div_2);
      reset(div_1);
      template_effect(() => {
        set_class(div_1, 1, `${buttonClassName() ?? ""} ${disabled() ? "" : "cursor-pointer"}`);
        set_class(div_2, 1, ` w-full flex items-center justify-between gap-2 ${(deep_read_state(attributes()), deep_read_state(messageDone()), untrack(() => {
          var _a, _b;
          return ((_a = attributes()) == null ? void 0 : _a.done) && ((_b = attributes()) == null ? void 0 : _b.done) !== "true" && !messageDone() ? "shimmer" : "";
        })) ?? ""}
			`);
      });
      event("pointerup", div_1, () => {
        if (!disabled()) {
          open(!open());
        }
      });
      append($$anchor2, div_1);
    };
    var alternate_6 = ($$anchor2) => {
      var div_6 = root_4();
      var div_7 = child(div_6);
      var div_8 = child(div_7);
      var node_9 = child(div_8);
      slot(node_9, $$props, "default", {}, null);
      var node_10 = sibling(node_9, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var div_9 = root_3();
          var node_11 = child(div_9);
          {
            var consequent_11 = ($$anchor4) => {
              ChevronUp($$anchor4, { strokeWidth: "3.5", className: "size-3.5" });
            };
            var alternate_5 = ($$anchor4) => {
              ChevronDown($$anchor4, { strokeWidth: "3.5", className: "size-3.5" });
            };
            if_block(node_11, ($$render) => {
              if (open()) $$render(consequent_11);
              else $$render(alternate_5, -1);
            });
          }
          reset(div_9);
          append($$anchor3, div_9);
        };
        if_block(node_10, ($$render) => {
          if (chevron()) $$render(consequent_12);
        });
      }
      reset(div_8);
      var node_12 = sibling(div_8, 2);
      {
        var consequent_14 = ($$anchor3) => {
          var fragment_15 = comment();
          var node_13 = first_child(fragment_15);
          {
            var consequent_13 = ($$anchor4) => {
              var div_10 = root();
              var node_14 = child(div_10);
              slot(node_14, $$props, "content", {}, null);
              reset(div_10);
              transition(3, div_10, () => slide, () => ({ duration: 300, easing: quintOut, axis: "y" }));
              event("pointerup", div_10, (e) => {
                e.stopPropagation();
              });
              append($$anchor4, div_10);
            };
            if_block(node_13, ($$render) => {
              if (open() && !hide()) $$render(consequent_13);
            });
          }
          append($$anchor3, fragment_15);
        };
        if_block(node_12, ($$render) => {
          if (grow()) $$render(consequent_14);
        });
      }
      reset(div_7);
      reset(div_6);
      template_effect(() => set_class(div_6, 1, `${buttonClassName() ?? ""} cursor-pointer`));
      event("click", div_6, (e) => {
        e.stopPropagation();
      });
      event("pointerup", div_6, (e) => {
        if (!disabled()) {
          open(!open());
        }
      });
      append($$anchor2, div_6);
    };
    if_block(node, ($$render) => {
      if (title() !== null) $$render(consequent_10);
      else $$render(alternate_6, -1);
    });
  }
  var node_15 = sibling(node, 2);
  {
    var consequent_16 = ($$anchor2) => {
      var fragment_16 = comment();
      var node_16 = first_child(fragment_16);
      {
        var consequent_15 = ($$anchor3) => {
          var div_11 = root();
          var node_17 = child(div_11);
          slot(node_17, $$props, "content", {}, null);
          reset(div_11);
          transition(3, div_11, () => slide, () => ({ duration: 300, easing: quintOut, axis: "y" }));
          append($$anchor3, div_11);
        };
        if_block(node_16, ($$render) => {
          if (open() && !hide()) $$render(consequent_15);
        });
      }
      append($$anchor2, fragment_16);
    };
    if_block(node_15, ($$render) => {
      if (!grow()) $$render(consequent_16);
    });
  }
  reset(div);
  template_effect(() => {
    set_attribute(div, "id", id());
    set_class(div, 1, clsx(className()));
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  Collapsible as C
};
