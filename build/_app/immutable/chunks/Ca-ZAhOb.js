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
var _SwitchRootState_instances, toggle_fn, _sharedProps, _snippetProps, _props, _shouldRender, _props2, _snippetProps2, _props3;
import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, h as comment, i as first_child, l as get, a as append, b as pop, A as user_derived, f as from_html, k as set, bA as props_id, n as sibling, c as child, r as reset, b8 as noop$1, g as getContext, C as createEventDispatcher, B as tick, u as derived_safe_equal, z as untrack, e as store_get, s as setup_stores, x as deep_read_state } from "./CISwU846.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop, r as rest_props, s as spread_props } from "./BFaWdt2I.js";
import { b as settings } from "./C2d9K3Bp.js";
import { T as Tooltip } from "./ThfTFFN0.js";
import { s as styleToString, m as mergeProps, C as Context, a as attachRef, E as ENTER, S as SPACE, b as boolToEmptyStrOrUndef, g as getDataChecked, c as boolToStr, d as getAriaChecked, e as boolToTrueOrUndef, f as createBitsAttrs, h as createId, n as noop, i as boxWith, j as snippet } from "./Cu5ZNIYH.js";
import { i as if_block } from "./Cr87xL-z.js";
import { h as attribute_effect } from "./CpNYkTX2.js";
import { b as bind_value } from "./DhE2rCDJ.js";
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
const srOnlyStylesString = styleToString(srOnlyStyles);
var rest_excludes$2 = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "value"]);
var root$2 = from_html(`<input/>`);
function Hidden_input($$anchor, $$props) {
  push($$props, true);
  let value = prop($$props, "value", 15), restProps = rest_props($$props, rest_excludes$2);
  const mergedProps = user_derived(() => mergeProps(restProps, {
    "aria-hidden": "true",
    tabindex: -1,
    style: srOnlyStylesString
  }));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var input = root$2();
      attribute_effect(input, () => ({ ...get(mergedProps), value: value() }), void 0, void 0, void 0, void 0, true);
      append($$anchor2, input);
    };
    var alternate = ($$anchor2) => {
      var input_1 = root$2();
      attribute_effect(input_1, () => ({ ...get(mergedProps) }), void 0, void 0, void 0, void 0, true);
      bind_value(input_1, value);
      append($$anchor2, input_1);
    };
    if_block(node, ($$render) => {
      if (get(mergedProps).type === "checkbox") $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, fragment);
  pop();
}
const switchAttrs = createBitsAttrs({ component: "switch", parts: ["root", "thumb"] });
const SwitchRootContext = new Context("Switch.Root");
const _SwitchRootState = class _SwitchRootState {
  constructor(opts) {
    __privateAdd(this, _SwitchRootState_instances);
    __publicField(this, "opts");
    __publicField(this, "attachment");
    __privateAdd(this, _sharedProps, user_derived(() => ({
      "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
      "data-state": getDataChecked(this.opts.checked.current),
      "data-required": boolToEmptyStrOrUndef(this.opts.required.current)
    })));
    __privateAdd(this, _snippetProps, user_derived(() => ({ checked: this.opts.checked.current })));
    __privateAdd(this, _props, user_derived(() => ({
      ...this.sharedProps,
      id: this.opts.id.current,
      role: "switch",
      disabled: boolToTrueOrUndef(this.opts.disabled.current),
      "aria-checked": getAriaChecked(this.opts.checked.current),
      "aria-required": boolToStr(this.opts.required.current),
      [switchAttrs.root]: "",
      onclick: this.onclick,
      onkeydown: this.onkeydown,
      ...this.attachment
    })));
    this.opts = opts;
    this.attachment = attachRef(opts.ref);
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
  }
  static create(opts) {
    return SwitchRootContext.set(new _SwitchRootState(opts));
  }
  onkeydown(e) {
    if (!(e.key === ENTER || e.key === SPACE) || this.opts.disabled.current) return;
    e.preventDefault();
    __privateMethod(this, _SwitchRootState_instances, toggle_fn).call(this);
  }
  onclick(_) {
    if (this.opts.disabled.current) return;
    __privateMethod(this, _SwitchRootState_instances, toggle_fn).call(this);
  }
  get sharedProps() {
    return get(__privateGet(this, _sharedProps));
  }
  set sharedProps(value) {
    set(__privateGet(this, _sharedProps), value);
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
_SwitchRootState_instances = new WeakSet();
toggle_fn = function() {
  this.opts.checked.current = !this.opts.checked.current;
};
_sharedProps = new WeakMap();
_snippetProps = new WeakMap();
_props = new WeakMap();
let SwitchRootState = _SwitchRootState;
const _SwitchInputState = class _SwitchInputState {
  constructor(root2) {
    __publicField(this, "root");
    __privateAdd(this, _shouldRender, user_derived(() => this.root.opts.name.current !== void 0));
    __privateAdd(this, _props2, user_derived(() => ({
      type: "checkbox",
      name: this.root.opts.name.current,
      value: this.root.opts.value.current,
      checked: this.root.opts.checked.current,
      disabled: this.root.opts.disabled.current,
      required: this.root.opts.required.current
    })));
    this.root = root2;
  }
  static create() {
    return new _SwitchInputState(SwitchRootContext.get());
  }
  get shouldRender() {
    return get(__privateGet(this, _shouldRender));
  }
  set shouldRender(value) {
    set(__privateGet(this, _shouldRender), value);
  }
  get props() {
    return get(__privateGet(this, _props2));
  }
  set props(value) {
    set(__privateGet(this, _props2), value);
  }
};
_shouldRender = new WeakMap();
_props2 = new WeakMap();
let SwitchInputState = _SwitchInputState;
const _SwitchThumbState = class _SwitchThumbState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _snippetProps2, user_derived(() => ({ checked: this.root.opts.checked.current })));
    __privateAdd(this, _props3, user_derived(() => ({
      ...this.root.sharedProps,
      id: this.opts.id.current,
      [switchAttrs.thumb]: "",
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(opts.ref);
  }
  static create(opts) {
    return new _SwitchThumbState(opts, SwitchRootContext.get());
  }
  get snippetProps() {
    return get(__privateGet(this, _snippetProps2));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps2), value);
  }
  get props() {
    return get(__privateGet(this, _props3));
  }
  set props(value) {
    set(__privateGet(this, _props3), value);
  }
};
_snippetProps2 = new WeakMap();
_props3 = new WeakMap();
let SwitchThumbState = _SwitchThumbState;
function Switch_input($$anchor, $$props) {
  push($$props, false);
  const inputState = SwitchInputState.create();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Hidden_input($$anchor2, spread_props(() => inputState.props));
    };
    if_block(node, ($$render) => {
      if (inputState.shouldRender) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
var rest_excludes$1 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "child",
  "children",
  "ref",
  "id",
  "disabled",
  "required",
  "checked",
  "value",
  "name",
  "type",
  "onCheckedChange"
]);
var root$1 = from_html(`<button><!></button>`);
var root_1 = from_html(`<!> <!>`, 1);
function Switch($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, () => createId(uid)), disabled = prop($$props, "disabled", 3, false), required = prop($$props, "required", 3, false), checked = prop($$props, "checked", 15, false), value = prop($$props, "value", 3, "on"), name = prop($$props, "name", 3, void 0), type = prop($$props, "type", 3, "button"), onCheckedChange = prop($$props, "onCheckedChange", 3, noop), restProps = rest_props($$props, rest_excludes$1);
  const rootState = SwitchRootState.create({
    checked: boxWith(() => checked(), (v) => {
      var _a;
      checked(v);
      (_a = onCheckedChange()) == null ? void 0 : _a(v);
    }),
    disabled: boxWith(() => disabled() ?? false),
    required: boxWith(() => required()),
    value: boxWith(() => value()),
    name: boxWith(() => name()),
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, rootState.props, { type: type() }));
  var fragment = root_1();
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
      var button = root$1();
      attribute_effect(button, () => ({ ...get(mergedProps) }));
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$1, () => rootState.snippetProps);
      reset(button);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  var node_3 = sibling(node, 2);
  Switch_input(node_3, {});
  append($$anchor, fragment);
  pop();
}
var rest_excludes = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "child",
  "children",
  "ref",
  "id"
]);
var root = from_html(`<span><!></span>`);
function Switch_thumb($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, () => createId(uid)), restProps = rest_props($$props, rest_excludes);
  const thumbState = SwitchThumbState.create({
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, thumbState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        let $0 = user_derived(() => ({ props: get(mergedProps), ...thumbState.snippetProps }));
        snippet(node_1, () => $$props.child, () => get($0));
      }
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var span = root();
      attribute_effect(span, () => ({ ...get(mergedProps) }));
      var node_2 = child(span);
      snippet(node_2, () => $$props.children ?? noop$1, () => thumbState.snippetProps);
      reset(span);
      append($$anchor2, span);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Switch_1($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let state = prop($$props, "state", 12, true);
  let id = prop($$props, "id", 8, "");
  let ariaLabelledbyId = prop($$props, "ariaLabelledbyId", 8, "");
  let tooltip = prop($$props, "tooltip", 8, false);
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  init();
  {
    let $0 = derived_safe_equal(() => (deep_read_state(tooltip()), deep_read_state(state()), $i18n(), untrack(() => typeof tooltip() === "string" ? tooltip() : typeof tooltip() === "boolean" && tooltip() ? state() ? $i18n().t("Enabled") : $i18n().t("Disabled") : "")));
    Tooltip($$anchor, {
      get content() {
        return get($0);
      },
      placement: "top",
      children: ($$anchor2, $$slotProps) => {
        {
          let $02 = derived_safe_equal(() => ($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "focus:outline focus:outline-2 focus:outline-gray-800 focus:dark:outline-gray-200" : "outline outline-1 outline-gray-100 dark:outline-gray-800";
          })));
          let $1 = derived_safe_equal(() => state() ? " bg-emerald-500 dark:bg-emerald-700" : "bg-gray-200 dark:bg-transparent");
          Switch($$anchor2, {
            get id() {
              return id();
            },
            get "aria-labelledby"() {
              return ariaLabelledbyId();
            },
            get class() {
              return `flex h-[1.125rem] min-h-[1.125rem] w-8 shrink-0 cursor-pointer items-center rounded-full px-1 mx-[1px] transition  ${get($02) ?? ""} ${get($1) ?? ""}`;
            },
            onCheckedChange: async () => {
              await tick();
              dispatch("change", state());
            },
            get checked() {
              return state();
            },
            set checked($$value) {
              state($$value);
            },
            children: ($$anchor3, $$slotProps2) => {
              Switch_thumb($$anchor3, {
                class: "pointer-events-none block size-3 shrink-0 rounded-full bg-white transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini "
              });
            },
            $$slots: { default: true },
            $$legacy: true
          });
        }
      },
      $$slots: { default: true }
    });
  }
  pop();
  $$cleanup();
}
export {
  Switch_1 as S
};
