var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _totalPages, _range, _pages, _hasPrevPage, _hasNextPage, _snippetProps, _props, _isSelected, _props2, _PaginationButtonState_instances, action_fn, _isDisabled, _props3;
import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { A as user_derived, l as get, k as set, bA as props_id, p as push, h as comment, i as first_child, a as append, b as pop, c as child, b8 as noop$1, r as reset, f as from_html, D as text, t as template_effect, d as set_text, n as sibling, z as untrack, E as next } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { e as each } from "./D16NL_tt.js";
import { p as prop, r as rest_props } from "./BFaWdt2I.js";
import { C as ChevronLeft } from "./BOwiDxgy.js";
import { C as ChevronRight } from "./B_BET3Ob.js";
import { A as ARROW_UP, k as ARROW_RIGHT, l as ARROW_LEFT, o as ARROW_DOWN, C as Context, a as attachRef, S as SPACE, E as ENTER, f as createBitsAttrs, p as END, H as HOME, h as createId, n as noop, i as boxWith, j as snippet, m as mergeProps } from "./Cu5ZNIYH.js";
import { h as attribute_effect } from "./CpNYkTX2.js";
import { u as useId } from "./BAtiHJio.js";
function getElemDirection(elem) {
  const style = window.getComputedStyle(elem);
  const direction = style.getPropertyValue("direction");
  return direction;
}
function getNextKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
    vertical: ARROW_DOWN
  }[orientation];
}
function getPrevKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
    vertical: ARROW_UP
  }[orientation];
}
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
  if (!["ltr", "rtl"].includes(dir))
    dir = "ltr";
  if (!["horizontal", "vertical"].includes(orientation))
    orientation = "horizontal";
  return {
    nextKey: getNextKey(dir, orientation),
    prevKey: getPrevKey(dir, orientation)
  };
}
const paginationAttrs = createBitsAttrs({
  component: "pagination",
  parts: ["root", "page", "prev", "next"]
});
const PaginationRootContext = new Context("Pagination.Root");
const _PaginationRootState = class _PaginationRootState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "attachment");
    __privateAdd(this, _totalPages, user_derived(() => {
      if (this.opts.count.current === 0) return 1;
      return Math.ceil(this.opts.count.current / this.opts.perPage.current);
    }));
    __privateAdd(this, _range, user_derived(() => {
      const start = (this.opts.page.current - 1) * this.opts.perPage.current;
      const end = Math.min(start + this.opts.perPage.current, this.opts.count.current);
      return { start: start + 1, end };
    }));
    __privateAdd(this, _pages, user_derived(() => getPageItems({
      page: this.opts.page.current,
      totalPages: this.totalPages,
      siblingCount: this.opts.siblingCount.current
    })));
    __privateAdd(this, _hasPrevPage, user_derived(() => this.opts.page.current > 1));
    __privateAdd(this, _hasNextPage, user_derived(() => this.opts.page.current < this.totalPages));
    __privateAdd(this, _snippetProps, user_derived(() => ({
      pages: this.pages,
      range: this.range,
      currentPage: this.opts.page.current
    })));
    __privateAdd(this, _props, user_derived(() => ({
      id: this.opts.id.current,
      "data-orientation": this.opts.orientation.current,
      [paginationAttrs.root]: "",
      ...this.attachment
    })));
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
  }
  static create(opts) {
    return PaginationRootContext.set(new _PaginationRootState(opts));
  }
  get totalPages() {
    return get(__privateGet(this, _totalPages));
  }
  set totalPages(value) {
    set(__privateGet(this, _totalPages), value);
  }
  get range() {
    return get(__privateGet(this, _range));
  }
  set range(value) {
    set(__privateGet(this, _range), value);
  }
  get pages() {
    return get(__privateGet(this, _pages));
  }
  set pages(value) {
    set(__privateGet(this, _pages), value);
  }
  get hasPrevPage() {
    return get(__privateGet(this, _hasPrevPage));
  }
  set hasPrevPage(value) {
    set(__privateGet(this, _hasPrevPage), value);
  }
  get hasNextPage() {
    return get(__privateGet(this, _hasNextPage));
  }
  set hasNextPage(value) {
    set(__privateGet(this, _hasNextPage), value);
  }
  setPage(page) {
    this.opts.page.current = page;
  }
  getPageTriggerNodes() {
    const node = this.opts.ref.current;
    if (!node) return [];
    return Array.from(node.querySelectorAll("[data-pagination-page]"));
  }
  getButtonNode(type) {
    const node = this.opts.ref.current;
    if (!node) return;
    return node.querySelector(paginationAttrs.selector(type));
  }
  prevPage() {
    this.opts.page.current = Math.max(this.opts.page.current - 1, 1);
  }
  nextPage() {
    this.opts.page.current = Math.min(this.opts.page.current + 1, this.totalPages);
  }
  get snippetProps() {
    return get(__privateGet(this, _snippetProps));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps), value);
  }
  get props() {
    return get(__privateGet(this, _props));
  }
  set props(value) {
    set(__privateGet(this, _props), value);
  }
};
_totalPages = new WeakMap();
_range = new WeakMap();
_pages = new WeakMap();
_hasPrevPage = new WeakMap();
_hasNextPage = new WeakMap();
_snippetProps = new WeakMap();
_props = new WeakMap();
let PaginationRootState = _PaginationRootState;
const _PaginationPageState = class _PaginationPageState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _isSelected, user_derived(() => this.opts.page.current.value === this.root.opts.page.current));
    __privateAdd(this, _props2, user_derived(() => ({
      id: this.opts.id.current,
      "aria-label": `Page ${this.opts.page.current.value}`,
      "data-value": `${this.opts.page.current.value}`,
      "data-selected": get(__privateGet(this, _isSelected)) ? "" : void 0,
      [paginationAttrs.page]: "",
      //
      onclick: this.onclick,
      onkeydown: this.onkeydown,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  static create(opts) {
    return new _PaginationPageState(opts, PaginationRootContext.get());
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button !== 0) return;
    this.root.setPage(this.opts.page.current.value);
  }
  onkeydown(e) {
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.root.setPage(this.opts.page.current.value);
    } else {
      handleTriggerKeydown(e, this.opts.ref.current, this.root);
    }
  }
  get props() {
    return get(__privateGet(this, _props2));
  }
  set props(value) {
    set(__privateGet(this, _props2), value);
  }
};
_isSelected = new WeakMap();
_props2 = new WeakMap();
let PaginationPageState = _PaginationPageState;
const _PaginationButtonState = class _PaginationButtonState {
  constructor(opts, root2) {
    __privateAdd(this, _PaginationButtonState_instances);
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _isDisabled, user_derived(() => {
      if (this.opts.disabled.current) return true;
      if (this.opts.type === "prev") return !this.root.hasPrevPage;
      if (this.opts.type === "next") return !this.root.hasNextPage;
      return false;
    }));
    __privateAdd(this, _props3, user_derived(() => ({
      id: this.opts.id.current,
      [paginationAttrs[this.opts.type]]: "",
      disabled: get(__privateGet(this, _isDisabled)),
      //
      onclick: this.onclick,
      onkeydown: this.onkeydown,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  static create(opts) {
    return new _PaginationButtonState(opts, PaginationRootContext.get());
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button !== 0) return;
    __privateMethod(this, _PaginationButtonState_instances, action_fn).call(this);
  }
  onkeydown(e) {
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      __privateMethod(this, _PaginationButtonState_instances, action_fn).call(this);
    } else {
      handleTriggerKeydown(e, this.opts.ref.current, this.root);
    }
  }
  get props() {
    return get(__privateGet(this, _props3));
  }
  set props(value) {
    set(__privateGet(this, _props3), value);
  }
};
_PaginationButtonState_instances = new WeakSet();
action_fn = function() {
  this.opts.type === "prev" ? this.root.prevPage() : this.root.nextPage();
};
_isDisabled = new WeakMap();
_props3 = new WeakMap();
let PaginationButtonState = _PaginationButtonState;
function handleTriggerKeydown(e, node, root2) {
  if (!node || !root2.opts.ref.current) return;
  const items = root2.getPageTriggerNodes();
  const nextButton = root2.getButtonNode("next");
  const prevButton = root2.getButtonNode("prev");
  if (prevButton) {
    items.unshift(prevButton);
  }
  if (nextButton) {
    items.push(nextButton);
  }
  const currentIndex = items.indexOf(node);
  const dir = getElemDirection(root2.opts.ref.current);
  const { nextKey, prevKey } = getDirectionalKeys(dir, root2.opts.orientation.current);
  const loop = root2.opts.loop.current;
  const keyToIndex = {
    [nextKey]: currentIndex + 1,
    [prevKey]: currentIndex - 1,
    [HOME]: 0,
    [END]: items.length - 1
  };
  let itemIndex = keyToIndex[e.key];
  if (itemIndex === void 0) return;
  e.preventDefault();
  if (itemIndex < 0 && loop) {
    itemIndex = items.length - 1;
  } else if (itemIndex === items.length && loop) {
    itemIndex = 0;
  }
  const itemToFocus = items[itemIndex];
  if (!itemToFocus) return;
  itemToFocus.focus();
}
function getPageItems({ page = 1, totalPages, siblingCount = 1 }) {
  const pageItems = [];
  const pagesToShow = /* @__PURE__ */ new Set([1, totalPages]);
  const firstItemWithSiblings = 3 + siblingCount;
  const lastItemWithSiblings = totalPages - 2 - siblingCount;
  if (firstItemWithSiblings > lastItemWithSiblings) {
    for (let i = 2; i <= totalPages - 1; i++) {
      pagesToShow.add(i);
    }
  } else if (page < firstItemWithSiblings) {
    for (let i = 2; i <= Math.min(firstItemWithSiblings, totalPages); i++) {
      pagesToShow.add(i);
    }
  } else if (page > lastItemWithSiblings) {
    for (let i = totalPages - 1; i >= Math.max(lastItemWithSiblings, 2); i--) {
      pagesToShow.add(i);
    }
  } else {
    for (let i = Math.max(page - siblingCount, 2); i <= Math.min(page + siblingCount, totalPages); i++) {
      pagesToShow.add(i);
    }
  }
  function addPage(value) {
    pageItems.push({ type: "page", value, key: `page-${value}` });
  }
  function addEllipsis() {
    const id = useId();
    pageItems.push({ type: "ellipsis", key: `ellipsis-${id}` });
  }
  let lastNumber = 0;
  for (const p of Array.from(pagesToShow).sort((a, b) => a - b)) {
    if (p - lastNumber > 1) {
      addEllipsis();
    }
    addPage(p);
    lastNumber = p;
  }
  return pageItems;
}
var rest_excludes$3 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "id",
  "count",
  "perPage",
  "page",
  "ref",
  "siblingCount",
  "onPageChange",
  "loop",
  "orientation",
  "child",
  "children"
]);
var root$4 = from_html(`<div><!></div>`);
function Pagination($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), perPage = prop($$props, "perPage", 3, 1), page = prop($$props, "page", 15, 1), ref = prop($$props, "ref", 15, null), siblingCount = prop($$props, "siblingCount", 3, 1), onPageChange = prop($$props, "onPageChange", 3, noop), loop = prop($$props, "loop", 3, false), orientation = prop($$props, "orientation", 3, "horizontal"), restProps = rest_props($$props, rest_excludes$3);
  const rootState = PaginationRootState.create({
    id: boxWith(() => id()),
    count: boxWith(() => $$props.count),
    perPage: boxWith(() => perPage()),
    page: boxWith(() => page(), (v) => {
      var _a;
      page(v);
      (_a = onPageChange()) == null ? void 0 : _a(v);
    }),
    loop: boxWith(() => loop()),
    siblingCount: boxWith(() => siblingCount()),
    orientation: boxWith(() => orientation()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, rootState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        let $0 = user_derived(() => ({ props: get(mergedProps), ...rootState.snippetProps }));
        snippet(node_1, () => $$props.child, () => get($0));
      }
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root$4();
      attribute_effect(div, () => ({ ...get(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1, () => rootState.snippetProps);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, fragment);
  pop();
}
var rest_excludes$2 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "id",
  "child",
  "children",
  "ref",
  "type",
  "disabled"
]);
var root$3 = from_html(`<button><!></button>`);
function Pagination_prev_button($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), type = prop($$props, "type", 3, "button"), disabled = prop($$props, "disabled", 3, false), restProps = rest_props($$props, rest_excludes$2);
  const prevButtonState = PaginationButtonState.create({
    type: "prev",
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v)),
    disabled: boxWith(() => Boolean(disabled()))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, prevButtonState.props, { type: type() }));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root$3();
      attribute_effect(button, () => ({ ...get(mergedProps) }));
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(button);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, fragment);
  pop();
}
var rest_excludes$1 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "id",
  "child",
  "children",
  "ref",
  "type",
  "disabled"
]);
var root$2 = from_html(`<button><!></button>`);
function Pagination_next_button($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), type = prop($$props, "type", 3, "button"), disabled = prop($$props, "disabled", 3, false), restProps = rest_props($$props, rest_excludes$1);
  const nextButtonState = PaginationButtonState.create({
    type: "next",
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v)),
    disabled: boxWith(() => Boolean(disabled()))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, nextButtonState.props, { type: type() }));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root$2();
      attribute_effect(button, () => ({ ...get(mergedProps) }));
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(button);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, fragment);
  pop();
}
var rest_excludes = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "id",
  "page",
  "child",
  "children",
  "type",
  "ref",
  "disabled"
]);
var root$1 = from_html(`<button><!></button>`);
function Pagination_page($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), type = prop($$props, "type", 3, "button"), ref = prop($$props, "ref", 15, null), disabled = prop($$props, "disabled", 3, false), restProps = rest_props($$props, rest_excludes);
  const pageState = PaginationPageState.create({
    id: boxWith(() => id()),
    page: boxWith(() => $$props.page),
    ref: boxWith(() => ref(), (v) => ref(v)),
    disabled: boxWith(() => Boolean(disabled()))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, pageState.props, { type: type() }));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate_1 = ($$anchor2) => {
      var button = root$1();
      attribute_effect(button, () => ({ ...get(mergedProps) }));
      var node_2 = child(button);
      {
        var consequent_1 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_3 = first_child(fragment_2);
          snippet(node_3, () => $$props.children ?? noop$1);
          append($$anchor3, fragment_2);
        };
        var alternate = ($$anchor3) => {
          var text$1 = text();
          template_effect(() => set_text(text$1, $$props.page.value));
          append($$anchor3, text$1);
        };
        if_block(node_2, ($$render) => {
          if ($$props.children) $$render(consequent_1);
          else $$render(alternate, -1);
        });
      }
      reset(button);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate_1, -1);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root = from_html(`<div class="text-sm font-medium text-foreground-alt">...</div>`);
var root_1 = from_html(`<div class="my-2 flex items-center"><!> <div class="flex items-center gap-2.5"></div> <!></div>`);
var root_2 = from_html(`<div class="flex justify-center"><!></div>`);
function Pagination_1($$anchor, $$props) {
  let page = prop($$props, "page", 12, 0);
  let count = prop($$props, "count", 8, 0);
  let perPage = prop($$props, "perPage", 8, 20);
  var div = root_2();
  var node = child(div);
  {
    const children = ($$anchor2, $$arg0) => {
      let pages = () => $$arg0 == null ? void 0 : $$arg0().pages;
      var div_1 = root_1();
      var node_1 = child(div_1);
      Pagination_prev_button(node_1, {
        class: "mr-[25px] inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 active:scale-98 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-700 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent",
        children: ($$anchor3, $$slotProps) => {
          ChevronLeft($$anchor3, { className: "size-4", strokeWidth: "2" });
        },
        $$slots: { default: true }
      });
      var div_2 = sibling(node_1, 2);
      each(div_2, 5, pages, (page2) => page2.key, ($$anchor3, page2, $$index, $$array) => {
        var fragment_1 = comment();
        var node_2 = first_child(fragment_1);
        {
          var consequent = ($$anchor4) => {
            var div_3 = root();
            append($$anchor4, div_3);
          };
          var alternate = ($$anchor4) => {
            Pagination_page($$anchor4, {
              get page() {
                return get(page2);
              },
              class: "inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 text-sm font-medium hover:bg-dark-10 active:scale-98 disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-transparent data-selected:bg-gray-50 data-selected:text-gray-700 data-selected:hover:bg-gray-100 dark:data-selected:bg-gray-850 dark:data-selected:text-gray-50 dark:data-selected:hover:bg-gray-800 transition",
              children: ($$anchor5, $$slotProps) => {
                next();
                var text$1 = text();
                template_effect(() => set_text(text$1, (get(page2), untrack(() => get(page2).value))));
                append($$anchor5, text$1);
              },
              $$slots: { default: true }
            });
          };
          if_block(node_2, ($$render) => {
            if (get(page2), untrack(() => get(page2).type === "ellipsis")) $$render(consequent);
            else $$render(alternate, -1);
          });
        }
        append($$anchor3, fragment_1);
      });
      reset(div_2);
      var node_3 = sibling(div_2, 2);
      Pagination_next_button(node_3, {
        class: "ml-[25px]  inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 active:scale-98 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-700 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent",
        children: ($$anchor3, $$slotProps) => {
          ChevronRight($$anchor3, { className: "size-4", strokeWidth: "2" });
        },
        $$slots: { default: true }
      });
      reset(div_1);
      append($$anchor2, div_1);
    };
    Pagination(node, {
      get count() {
        return count();
      },
      get perPage() {
        return perPage();
      },
      get page() {
        return page();
      },
      set page($$value) {
        page($$value);
      },
      children,
      $$slots: { default: true },
      $$legacy: true
    });
  }
  reset(div);
  append($$anchor, div);
}
export {
  Pagination_1 as P
};
