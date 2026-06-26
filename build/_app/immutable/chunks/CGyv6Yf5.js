import { aZ as teardown, a2 as get_descriptor } from "./CISwU846.js";
function bind_prop(props, prop, value) {
  var desc = get_descriptor(props, prop);
  if (desc && desc.set) {
    props[prop] = value;
    teardown(() => {
      props[prop] = null;
    });
  }
}
export {
  bind_prop as b
};
