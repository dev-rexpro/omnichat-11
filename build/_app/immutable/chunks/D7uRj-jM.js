var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _listeners, _observer, _options, _ResizeObserverSingleton_instances, getObserver_fn;
import { X as effect, z as untrack } from "./CISwU846.js";
const _ResizeObserverSingleton = class _ResizeObserverSingleton {
  /** @param {ResizeObserverOptions} options */
  constructor(options) {
    __privateAdd(this, _ResizeObserverSingleton_instances);
    /** */
    __privateAdd(this, _listeners, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    __privateAdd(this, _observer);
    /** @type {ResizeObserverOptions} */
    __privateAdd(this, _options);
    __privateSet(this, _options, options);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(element, listener) {
    var listeners = __privateGet(this, _listeners).get(element) || /* @__PURE__ */ new Set();
    listeners.add(listener);
    __privateGet(this, _listeners).set(element, listeners);
    __privateMethod(this, _ResizeObserverSingleton_instances, getObserver_fn).call(this).observe(element, __privateGet(this, _options));
    return () => {
      var listeners2 = __privateGet(this, _listeners).get(element);
      listeners2.delete(listener);
      if (listeners2.size === 0) {
        __privateGet(this, _listeners).delete(element);
        __privateGet(this, _observer).unobserve(element);
      }
    };
  }
};
_listeners = new WeakMap();
_observer = new WeakMap();
_options = new WeakMap();
_ResizeObserverSingleton_instances = new WeakSet();
getObserver_fn = function() {
  return __privateGet(this, _observer) ?? __privateSet(this, _observer, new ResizeObserver(
    /** @param {any} entries */
    (entries) => {
      for (var entry of entries) {
        _ResizeObserverSingleton.entries.set(entry.target, entry);
        for (var listener of __privateGet(this, _listeners).get(entry.target) || []) {
          listener(entry);
        }
      }
    }
  ));
};
/** @static */
__publicField(_ResizeObserverSingleton, "entries", /* @__PURE__ */ new WeakMap());
let ResizeObserverSingleton = _ResizeObserverSingleton;
var resize_observer_border_box = /* @__PURE__ */ new ResizeObserverSingleton({
  box: "border-box"
});
function bind_element_size(element, type, set) {
  var unsub = resize_observer_border_box.observe(element, () => set(element[type]));
  effect(() => {
    untrack(() => set(element[type]));
    return unsub;
  });
}
export {
  bind_element_size as b
};
