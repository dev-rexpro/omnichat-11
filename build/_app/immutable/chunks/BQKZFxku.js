import { az as is_array } from "./CISwU846.js";
function bubble_event($$props, event) {
  var _a;
  var events = (
    /** @type {Record<string, Function[] | Function>} */
    (_a = $$props.$$events) == null ? void 0 : _a[event.type]
  );
  var callbacks = is_array(events) ? events.slice() : events == null ? [] : [events];
  for (var fn of callbacks) {
    fn.call(this, event);
  }
}
export {
  bubble_event as b
};
