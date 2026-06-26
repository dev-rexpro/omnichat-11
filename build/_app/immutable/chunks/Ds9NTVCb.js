import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, i as first_child, l as get, k as set, n as sibling, c as child, r as reset, t as template_effect, d as set_text, q as event, a as append, b as pop, s as setup_stores, m as mutable_source, z as untrack, x as deep_read_state, u as derived_safe_equal, h as comment, f as from_html, e as store_get, F as from_svg, E as next, aW as mutate } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { e as each } from "./D16NL_tt.js";
import { s as slot } from "./DbvU-2C8.js";
import { r as remove_input_defaults, a as set_attribute, s as set_class, c as clsx } from "./CpNYkTX2.js";
import { b as bind_value } from "./DhE2rCDJ.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { t as toast } from "./C-rLN5eo.js";
import { d as dayjs2 } from "./OO7lCI-F.js";
import { l as localizedFormat } from "./_xypnXqU.js";
import { c as calendar } from "./CvB8sZNw.js";
import { d as deleteChatById } from "./D5cOGyvj.js";
import { b as WEBUI_API_BASE_URL, a as WEBUI_BASE_URL } from "./Cjpn_aRT.js";
import { M as Modal } from "./DyXJ7eDz.js";
import { T as Tooltip } from "./ThfTFFN0.js";
import { C as ConfirmDialog } from "./B1_3tlmh.js";
import { S as Spinner } from "./7N5LES1L.js";
import { L as Loader } from "./CLJcSX52.js";
import { X as XMark } from "./DBwFTtKj.js";
import { C as ChevronUp } from "./CIuYe2fp.js";
import { C as ChevronDown } from "./BvmxC0vK.js";
import { L as LinkSlash } from "./CXEgCCO2.js";
import { C as Clipboard } from "./DmA68Asl.js";
import { b as bind_this } from "./DvKZCnQx.js";
import { m as getGravatarUrl } from "./Cbu9vZ_m.js";
import { j as generateInitialsImage, k as canvasPixelTest } from "./7pK2BKln.js";
var root$1 = from_html(`<div class="self-center pl-1.5 pr-1 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_1 = from_html(`<div class=" flex w-full space-x-2 mt-0.5 mb-1.5"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent" maxlength="500"/> <!></div></div>`);
var root_2 = from_html(`<div class="px-1.5 py-1 w-32"> </div>`);
var root_3 = from_html(`<span class="font-normal"><!></span>`);
var root_4 = from_html(`<span class="invisible"><!></span>`);
var root_5 = from_html(`<div class="flex text-xs font-medium mb-1.5"><!> <button><div class="flex gap-1.5 items-center"> <!></div></button> <button><div class="flex gap-1.5 items-center"> <!></div></button></div>`);
var root_6 = from_html(`<div class="text-xs text-gray-500 dark:text-gray-400 text-center px-5 min-h-20 w-full h-full flex justify-center items-center"> </div>`);
var root_7 = from_html(`<div> </div>`);
var root_8 = from_html(`<div class="w-32 shrink-0 flex items-center gap-2"><img class="size-5 rounded-full object-cover shrink-0"/> <span class="text-xs text-gray-600 dark:text-gray-400 truncate"> </span></div>`);
var root_9 = from_html(`<button class="self-center w-fit px-1 text-sm rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"></path></svg></button>`);
var root_10 = from_html(`<button class="self-center w-fit px-1 text-sm rounded-xl"><!></button>`);
var root_11 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg>`);
var root_12 = from_html(`<div class="flex justify-end pl-2.5 text-gray-600 dark:text-gray-300"><!> <!> <!></div>`);
var root_13 = from_html(`<!> <div class=" w-full flex items-center rounded-lg text-sm py-2 px-3 hover:bg-gray-50 dark:hover:bg-gray-850" draggable="false"><!> <a><div class="text-ellipsis line-clamp-1 w-full"> </div></a> <div><div class="hidden sm:flex text-gray-500 dark:text-gray-400 text-xs"> </div> <!></div></div>`, 1);
var root_14 = from_html(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_15 = from_html(`<div class="w-full"><!> <div class="text-left text-sm w-full mb-3 max-h-[22rem] overflow-y-scroll"><!> <!> <!></div> <!></div>`);
var root_16 = from_html(`<div class="w-full h-full flex justify-center items-center min-h-20"><!></div>`);
var root_17 = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-1"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" clip-rule="evenodd"></path></svg></button></div> <div class="flex flex-col w-full px-5 pb-4 dark:text-gray-200"><!> <div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><!></div></div></div>`);
var root_18 = from_html(`<!> <!>`, 1);
function ChatsModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(localizedFormat);
  dayjs2.extend(calendar);
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let title = prop($$props, "title", 8, "Chats");
  prop($$props, "emptyPlaceholder", 8, "");
  let shareUrl = prop($$props, "shareUrl", 8, false);
  let showUserInfo = prop($$props, "showUserInfo", 8, false);
  let showSearch = prop($$props, "showSearch", 8, true);
  let readOnly = prop($$props, "readOnly", 8, false);
  let query = prop($$props, "query", 12, "");
  let orderBy = prop($$props, "orderBy", 12, "updated_at");
  let direction = prop(
    $$props,
    "direction",
    12,
    "desc"
    // 'asc' or 'desc'
  );
  let chatList = prop($$props, "chatList", 8, null);
  let allChatsLoaded = prop($$props, "allChatsLoaded", 8, false);
  let chatListLoading = prop($$props, "chatListLoading", 8, false);
  let selectedChatId = mutable_source(null);
  let selectedIdx = mutable_source(0);
  let showDeleteConfirmDialog = mutable_source(false);
  let onUpdate = prop($$props, "onUpdate", 8, () => {
  });
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let loadHandler = prop($$props, "loadHandler", 8, null);
  let unarchiveHandler = prop($$props, "unarchiveHandler", 8, null);
  let unshareHandler = prop($$props, "unshareHandler", 8, null);
  const setSortKey = (key) => {
    if (orderBy() === key) {
      direction(direction() === "asc" ? "desc" : "asc");
    } else {
      orderBy(key);
      direction("asc");
    }
  };
  const deleteHandler = async (chatId) => {
    const res = await deleteChatById(localStorage.token, chatId).catch((error) => {
      toast.error(`${error}`);
    });
    if (res) {
      onDelete()(chatId);
    }
    onUpdate()();
  };
  init();
  var fragment = root_18();
  var node = first_child(fragment);
  ConfirmDialog(node, {
    get show() {
      return get(showDeleteConfirmDialog);
    },
    set show($$value) {
      set(showDeleteConfirmDialog, $$value);
    },
    $$events: {
      confirm: () => {
        if (get(selectedChatId)) {
          deleteHandler(get(selectedChatId));
          set(selectedChatId, null);
        }
      }
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  Modal(node_1, {
    size: "lg",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_17();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var node_2 = child(div_3);
      {
        var consequent_1 = ($$anchor3) => {
          var div_4 = root_1();
          var div_5 = child(div_4);
          var input = sibling(child(div_5), 2);
          remove_input_defaults(input);
          var node_3 = sibling(input, 2);
          {
            var consequent = ($$anchor4) => {
              var div_6 = root$1();
              var button_1 = child(div_6);
              var node_4 = child(button_1);
              XMark(node_4, { className: "size-3", strokeWidth: "2" });
              reset(button_1);
              reset(div_6);
              event("click", button_1, () => {
                query("");
                set(selectedIdx, 0);
              });
              append($$anchor4, div_6);
            };
            if_block(node_3, ($$render) => {
              if (query()) $$render(consequent);
            });
          }
          reset(div_5);
          reset(div_4);
          template_effect(($0) => set_attribute(input, "placeholder", $0), [() => ($i18n(), untrack(() => $i18n().t("Search Chats")))]);
          bind_value(input, query);
          append($$anchor3, div_4);
        };
        if_block(node_2, ($$render) => {
          if (showSearch()) $$render(consequent_1);
        });
      }
      var div_7 = sibling(node_2, 2);
      var node_5 = child(div_7);
      {
        var consequent_17 = ($$anchor3) => {
          var div_8 = root_15();
          var node_6 = child(div_8);
          {
            var consequent_7 = ($$anchor4) => {
              var div_9 = root_5();
              var node_7 = child(div_9);
              {
                var consequent_2 = ($$anchor5) => {
                  var div_10 = root_2();
                  var text_1 = child(div_10, true);
                  reset(div_10);
                  template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("User")))]);
                  append($$anchor5, div_10);
                };
                if_block(node_7, ($$render) => {
                  if (showUserInfo()) $$render(consequent_2);
                });
              }
              var button_2 = sibling(node_7, 2);
              var div_11 = child(button_2);
              var text_2 = child(div_11);
              var node_8 = sibling(text_2);
              {
                var consequent_4 = ($$anchor5) => {
                  var span = root_3();
                  var node_9 = child(span);
                  {
                    var consequent_3 = ($$anchor6) => {
                      ChevronUp($$anchor6, { className: "size-2" });
                    };
                    var alternate = ($$anchor6) => {
                      ChevronDown($$anchor6, { className: "size-2" });
                    };
                    if_block(node_9, ($$render) => {
                      if (direction() === "asc") $$render(consequent_3);
                      else $$render(alternate, -1);
                    });
                  }
                  reset(span);
                  append($$anchor5, span);
                };
                var alternate_1 = ($$anchor5) => {
                  var span_1 = root_4();
                  var node_10 = child(span_1);
                  ChevronUp(node_10, { className: "size-2" });
                  reset(span_1);
                  append($$anchor5, span_1);
                };
                if_block(node_8, ($$render) => {
                  if (orderBy() === "title") $$render(consequent_4);
                  else $$render(alternate_1, -1);
                });
              }
              reset(div_11);
              reset(button_2);
              var button_3 = sibling(button_2, 2);
              var div_12 = child(button_3);
              var text_3 = child(div_12);
              var node_11 = sibling(text_3);
              {
                var consequent_6 = ($$anchor5) => {
                  var span_2 = root_3();
                  var node_12 = child(span_2);
                  {
                    var consequent_5 = ($$anchor6) => {
                      ChevronUp($$anchor6, { className: "size-2" });
                    };
                    var alternate_2 = ($$anchor6) => {
                      ChevronDown($$anchor6, { className: "size-2" });
                    };
                    if_block(node_12, ($$render) => {
                      if (direction() === "asc") $$render(consequent_5);
                      else $$render(alternate_2, -1);
                    });
                  }
                  reset(span_2);
                  append($$anchor5, span_2);
                };
                var alternate_3 = ($$anchor5) => {
                  var span_3 = root_4();
                  var node_13 = child(span_3);
                  ChevronUp(node_13, { className: "size-2" });
                  reset(span_3);
                  append($$anchor5, span_3);
                };
                if_block(node_11, ($$render) => {
                  if (orderBy() === "updated_at") $$render(consequent_6);
                  else $$render(alternate_3, -1);
                });
              }
              reset(div_12);
              reset(button_3);
              reset(div_9);
              template_effect(
                ($0, $1) => {
                  set_class(button_2, 1, `px-1.5 py-1 cursor-pointer select-none ${showUserInfo() ? "flex-1" : "basis-3/5"}`);
                  set_text(text_2, `${$0 ?? ""} `);
                  set_class(button_3, 1, `px-1.5 py-1 cursor-pointer select-none hidden sm:flex ${showUserInfo() ? "w-28" : "sm:basis-2/5"} justify-end`);
                  set_text(text_3, `${$1 ?? ""} `);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("Title"))),
                  () => ($i18n(), untrack(() => $i18n().t("Updated at")))
                ]
              );
              event("click", button_2, () => setSortKey("title"));
              event("click", button_3, () => setSortKey("updated_at"));
              append($$anchor4, div_9);
            };
            if_block(node_6, ($$render) => {
              if (deep_read_state(chatList()), untrack(() => chatList().length > 0)) $$render(consequent_7);
            });
          }
          var div_13 = sibling(node_6, 2);
          var node_14 = child(div_13);
          {
            var consequent_8 = ($$anchor4) => {
              var div_14 = root_6();
              var text_4 = child(div_14, true);
              reset(div_14);
              template_effect(($0) => set_text(text_4, $0), [
                () => ($i18n(), untrack(() => $i18n().t("No results found")))
              ]);
              append($$anchor4, div_14);
            };
            if_block(node_14, ($$render) => {
              if (deep_read_state(chatList()), untrack(() => chatList().length === 0)) $$render(consequent_8);
            });
          }
          var node_15 = sibling(node_14, 2);
          each(node_15, 3, chatList, (chat) => chat.id, ($$anchor4, chat, idx) => {
            var fragment_5 = root_13();
            var node_16 = first_child(fragment_5);
            {
              var consequent_9 = ($$anchor5) => {
                var div_15 = root_7();
                var text_5 = child(div_15, true);
                reset(div_15);
                template_effect(
                  ($0) => {
                    set_class(div_15, 1, `w-full text-xs text-gray-500 dark:text-gray-500 font-medium ${get(idx) === 0 ? "" : "pt-5"} pb-2 px-2`);
                    set_text(text_5, $0);
                  },
                  [
                    () => ($i18n(), get(chat), untrack(() => $i18n().t(get(chat).time_range)))
                  ]
                );
                append($$anchor5, div_15);
              };
              if_block(node_16, ($$render) => {
                if (deep_read_state(get(idx)), get(chat), deep_read_state(chatList()), untrack(() => {
                  var _a;
                  return (get(idx) === 0 || get(idx) > 0 && get(chat).time_range !== chatList()[get(idx) - 1].time_range) && ((_a = get(chat)) == null ? void 0 : _a.time_range);
                })) $$render(consequent_9);
              });
            }
            var div_16 = sibling(node_16, 2);
            var node_17 = child(div_16);
            {
              var consequent_10 = ($$anchor5) => {
                var div_17 = root_8();
                var img = child(div_17);
                var span_4 = sibling(img, 2);
                var text_6 = child(span_4, true);
                reset(span_4);
                reset(div_17);
                template_effect(() => {
                  set_attribute(img, "src", `${WEBUI_API_BASE_URL ?? ""}/users/${(get(chat), untrack(() => get(chat).user_id)) ?? ""}/profile/image`);
                  set_attribute(img, "alt", (get(chat), untrack(() => get(chat).user_name || "User")));
                  set_text(text_6, (get(chat), untrack(() => get(chat).user_name || "Unknown")));
                });
                append($$anchor5, div_17);
              };
              if_block(node_17, ($$render) => {
                if (deep_read_state(showUserInfo()), get(chat), untrack(() => showUserInfo() && get(chat).user_id)) $$render(consequent_10);
              });
            }
            var a = sibling(node_17, 2);
            var div_18 = child(a);
            var text_7 = child(div_18, true);
            reset(div_18);
            reset(a);
            var div_19 = sibling(a, 2);
            var div_20 = child(div_19);
            var text_8 = child(div_20, true);
            reset(div_20);
            var node_18 = sibling(div_20, 2);
            {
              var consequent_14 = ($$anchor5) => {
                var div_21 = root_12();
                var node_19 = child(div_21);
                {
                  var consequent_11 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Unarchive Chat"))));
                      Tooltip($$anchor6, {
                        get content() {
                          return get($0);
                        },
                        children: ($$anchor7, $$slotProps2) => {
                          var button_4 = root_9();
                          event("click", button_4, async (e) => {
                            e.stopImmediatePropagation();
                            e.stopPropagation();
                            unarchiveHandler()(get(chat).id);
                          });
                          append($$anchor7, button_4);
                        },
                        $$slots: { default: true }
                      });
                    }
                  };
                  if_block(node_19, ($$render) => {
                    if (unarchiveHandler()) $$render(consequent_11);
                  });
                }
                var node_20 = sibling(node_19, 2);
                {
                  var consequent_12 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Copy Share Link"))));
                      Tooltip($$anchor6, {
                        get content() {
                          return get($0);
                        },
                        children: ($$anchor7, $$slotProps2) => {
                          var button_5 = root_10();
                          var node_21 = child(button_5);
                          Clipboard(node_21, { class: "size-4", strokeWidth: "1.5" });
                          reset(button_5);
                          event("click", button_5, async (e) => {
                            e.stopImmediatePropagation();
                            e.stopPropagation();
                            const shareUrl2 = `${window.location.origin}/s/${get(chat).share_id}`;
                            await navigator.clipboard.writeText(shareUrl2);
                            toast.success($i18n().t("Share link copied to clipboard."));
                          });
                          append($$anchor7, button_5);
                        },
                        $$slots: { default: true }
                      });
                    }
                  };
                  if_block(node_20, ($$render) => {
                    if (deep_read_state(unshareHandler()), get(chat), untrack(() => unshareHandler() && get(chat).share_id)) $$render(consequent_12);
                  });
                }
                var node_22 = sibling(node_20, 2);
                {
                  let $0 = derived_safe_equal(() => (deep_read_state(unshareHandler()), $i18n(), untrack(() => unshareHandler() ? $i18n().t("Unshare Chat") : $i18n().t("Delete Chat"))));
                  Tooltip(node_22, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps2) => {
                      var button_6 = root_10();
                      var node_23 = child(button_6);
                      {
                        var consequent_13 = ($$anchor7) => {
                          LinkSlash($$anchor7, {});
                        };
                        var alternate_4 = ($$anchor7) => {
                          var svg = root_11();
                          append($$anchor7, svg);
                        };
                        if_block(node_23, ($$render) => {
                          if (unshareHandler()) $$render(consequent_13);
                          else $$render(alternate_4, -1);
                        });
                      }
                      reset(button_6);
                      event("click", button_6, async (e) => {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        if (unshareHandler()) {
                          unshareHandler()(get(chat).id);
                        } else {
                          set(selectedChatId, get(chat).id);
                          set(showDeleteConfirmDialog, true);
                        }
                      });
                      append($$anchor6, button_6);
                    },
                    $$slots: { default: true }
                  });
                }
                reset(div_21);
                append($$anchor5, div_21);
              };
              if_block(node_18, ($$render) => {
                if (!readOnly()) $$render(consequent_14);
              });
            }
            reset(div_19);
            reset(div_16);
            template_effect(
              ($0) => {
                set_class(a, 1, clsx(showUserInfo() ? "flex-1" : "basis-3/5"));
                set_attribute(a, "href", (deep_read_state(shareUrl()), get(chat), untrack(() => shareUrl() ? `/s/${get(chat).id}` : `/c/${get(chat).id}`)));
                set_text(text_7, (get(chat), untrack(() => {
                  var _a;
                  return (_a = get(chat)) == null ? void 0 : _a.title;
                })));
                set_class(div_19, 1, `${showUserInfo() ? "w-28" : "basis-2/5"} flex items-center justify-end`);
                set_text(text_8, $0);
              },
              [
                () => ($i18n(), deep_read_state(dayjs2), get(chat), untrack(() => {
                  var _a;
                  return $i18n().t(dayjs2(((_a = get(chat)) == null ? void 0 : _a.updated_at) * 1e3).calendar(null, {
                    sameDay: "[Today]",
                    nextDay: "[Tomorrow]",
                    nextWeek: "dddd",
                    lastDay: "[Yesterday]",
                    lastWeek: "[Last] dddd",
                    sameElse: "L"
                  }));
                }))
              ]
            );
            event("click", a, () => show(false));
            append($$anchor4, fragment_5);
          });
          var node_24 = sibling(node_15, 2);
          {
            var consequent_15 = ($$anchor4) => {
              Loader($$anchor4, {
                $$events: {
                  visible: (e) => {
                    if (!chatListLoading()) {
                      loadHandler()();
                    }
                  }
                },
                children: ($$anchor5, $$slotProps2) => {
                  var div_22 = root_14();
                  var node_25 = child(div_22);
                  Spinner(node_25, { className: " size-4" });
                  var div_23 = sibling(node_25, 2);
                  var text_9 = child(div_23, true);
                  reset(div_23);
                  reset(div_22);
                  template_effect(($0) => set_text(text_9, $0), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
                  append($$anchor5, div_22);
                },
                $$slots: { default: true }
              });
            };
            if_block(node_24, ($$render) => {
              if (!allChatsLoaded() && loadHandler()) $$render(consequent_15);
            });
          }
          reset(div_13);
          var node_26 = sibling(div_13, 2);
          {
            var consequent_16 = ($$anchor4) => {
              var fragment_10 = comment();
              var node_27 = first_child(fragment_10);
              slot(node_27, $$props, "footer", {}, null);
              append($$anchor4, fragment_10);
            };
            if_block(node_26, ($$render) => {
              if (query() === "") $$render(consequent_16);
            });
          }
          reset(div_8);
          append($$anchor3, div_8);
        };
        var alternate_5 = ($$anchor3) => {
          var div_24 = root_16();
          var node_28 = child(div_24);
          Spinner(node_28, { className: "size-5" });
          reset(div_24);
          append($$anchor3, div_24);
        };
        if_block(node_5, ($$render) => {
          if (chatList()) $$render(consequent_17);
          else $$render(alternate_5, -1);
        });
      }
      reset(div_7);
      reset(div_3);
      reset(div);
      template_effect(() => set_text(text, title()));
      event("click", button, () => {
        show(false);
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root = from_html(`<input id="profile-image-input" type="file" hidden="" accept="image/*"/> <div class="flex flex-col self-start group"><div class="self-center flex"><button class="relative rounded-full dark:bg-gray-700" type="button"><img alt="profile"/> <div class="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition"><div class="p-1 rounded-full bg-white text-black border-gray-100 shadow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3"><path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z"></path></svg></div></div></button></div> <div class="flex flex-col w-full justify-center mt-2"><button class=" text-xs text-center text-gray-500 rounded-lg py-0.5 opacity-0 group-hover:opacity-100 transition-all" type="button"> </button> <button class=" text-xs text-center text-gray-800 dark:text-gray-400 rounded-lg py-0.5 opacity-0 group-hover:opacity-100 transition-all" type="button"> </button> <button class=" text-xs text-center text-gray-800 dark:text-gray-400 rounded-lg py-0.5 opacity-0 group-hover:opacity-100 transition-all" type="button"> </button></div></div>`, 1);
function UserProfileImage($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let profileImageUrl = prop($$props, "profileImageUrl", 12);
  let user = prop($$props, "user", 8, null);
  let imageClassName = prop($$props, "imageClassName", 8, "size-14 md:size-18");
  let profileImageInputElement = mutable_source();
  init();
  var fragment = root();
  var input = first_child(fragment);
  bind_this(input, ($$value) => set(profileImageInputElement, $$value), () => get(profileImageInputElement));
  var div = sibling(input, 2);
  var div_1 = child(div);
  var button = child(div_1);
  var img_1 = child(button);
  next(2);
  reset(button);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var button_1 = child(div_2);
  var text = child(button_1, true);
  reset(button_1);
  var button_2 = sibling(button_1, 2);
  var text_1 = child(button_2, true);
  reset(button_2);
  var button_3 = sibling(button_2, 2);
  var text_2 = child(button_3, true);
  reset(button_3);
  reset(div_2);
  reset(div);
  template_effect(
    ($0, $1, $2, $3) => {
      set_attribute(img_1, "src", $0);
      set_class(img_1, 1, ` rounded-full ${imageClassName() ?? ""} object-cover`);
      set_text(text, $1);
      set_text(text_1, $2);
      set_text(text_2, $3);
    },
    [
      () => (deep_read_state(profileImageUrl()), deep_read_state(generateInitialsImage), deep_read_state(user()), untrack(() => {
        var _a;
        return profileImageUrl() !== "" ? profileImageUrl() : generateInitialsImage((_a = user()) == null ? void 0 : _a.name);
      })),
      () => ($i18n(), untrack(() => $i18n().t("Remove"))),
      () => ($i18n(), untrack(() => $i18n().t("Initials"))),
      () => ($i18n(), untrack(() => $i18n().t("Gravatar")))
    ]
  );
  event("change", input, (e) => {
    const files = get(profileImageInputElement).files ?? [];
    let reader = new FileReader();
    reader.onload = (event2) => {
      let originalImageUrl = `${event2.target.result}`;
      const img = new Image();
      img.src = originalImageUrl;
      img.onload = function() {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const aspectRatio = img.width / img.height;
        let newWidth, newHeight;
        if (aspectRatio > 1) {
          newWidth = 250 * aspectRatio;
          newHeight = 250;
        } else {
          newWidth = 250;
          newHeight = 250 / aspectRatio;
        }
        canvas.width = 250;
        canvas.height = 250;
        const offsetX = (250 - newWidth) / 2;
        const offsetY = (250 - newHeight) / 2;
        ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
        const compressedSrc = canvas.toDataURL("image/webp", 0.8);
        profileImageUrl(compressedSrc);
        mutate(profileImageInputElement, get(profileImageInputElement).files = null);
      };
    };
    if (files.length > 0 && ["image/gif", "image/webp", "image/jpeg", "image/png"].includes(files[0]["type"])) {
      reader.readAsDataURL(files[0]);
    }
  });
  event("click", button, () => {
    get(profileImageInputElement).click();
  });
  event("click", button_1, async () => {
    profileImageUrl(`${WEBUI_BASE_URL}/user.png`);
  });
  event("click", button_2, async () => {
    var _a;
    if (canvasPixelTest()) {
      profileImageUrl(generateInitialsImage((_a = user()) == null ? void 0 : _a.name));
    } else {
      toast.info($i18n().t("Fingerprint spoofing detected: Unable to use initials as avatar. Defaulting to default profile image."), { duration: 1e3 * 10 });
    }
  });
  event("click", button_3, async () => {
    var _a;
    const url = await getGravatarUrl(localStorage.token, (_a = user()) == null ? void 0 : _a.email);
    profileImageUrl(url);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  ChatsModal as C,
  UserProfileImage as U
};
