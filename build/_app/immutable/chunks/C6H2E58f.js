import { _ as __vitePreload } from "./CQrtv1eE.js";
import { i as instance } from "./DfSR1r5E.js";
import { t as toPropertyKey } from "./DPvaCmkl.js";
import { b0 as writable } from "./CISwU846.js";
const __variableDynamicImportRuntimeHelper = (glob, path2, segs) => {
  const v = glob[path2];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path2 + (path2.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
var resourcesToBackend = function resourcesToBackend2(res) {
  return {
    type: "backend",
    init: function init(services, backendOptions, i18nextOptions) {
    },
    read: function read2(language, namespace, callback) {
      if (typeof res === "function") {
        if (res.length < 3) {
          try {
            var r = res(language, namespace);
            if (r && typeof r.then === "function") {
              r.then(function(data) {
                return callback(null, data && data.default || data);
              }).catch(callback);
            } else {
              callback(null, r);
            }
          } catch (err) {
            callback(err);
          }
          return;
        }
        res(language, namespace, callback);
        return;
      }
      callback(null, res && res[language] && res[language][namespace]);
    }
  };
};
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function(source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var serializeCookie = function serializeCookie2(name, val, options) {
  var opt = options || {};
  opt.path = opt.path || "/";
  var value = encodeURIComponent(val);
  var str = "".concat(name, "=").concat(value);
  if (opt.maxAge > 0) {
    var maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge)) throw new Error("maxAge should be a Number");
    str += "; Max-Age=".concat(Math.floor(maxAge));
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=".concat(opt.domain);
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=".concat(opt.path);
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=".concat(opt.expires.toUTCString());
  }
  if (opt.httpOnly) str += "; HttpOnly";
  if (opt.secure) str += "; Secure";
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
};
var cookie = {
  create: function create(name, value, minutes, domain) {
    var cookieOptions = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    if (minutes) {
      cookieOptions.expires = /* @__PURE__ */ new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1e3);
    }
    if (domain) cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
  },
  read: function read(name) {
    var nameEQ = "".concat(name, "=");
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  remove: function remove(name) {
    this.create(name, "", -1);
  }
};
var cookie$1 = {
  name: "cookie",
  lookup: function lookup(options) {
    var found;
    if (options.lookupCookie && typeof document !== "undefined") {
      var c = cookie.read(options.lookupCookie);
      if (c) found = c;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupCookie && typeof document !== "undefined") {
      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain, options.cookieOptions);
    }
  }
};
var querystring = {
  name: "querystring",
  lookup: function lookup2(options) {
    var found;
    if (typeof window !== "undefined") {
      var search = window.location.search;
      if (!window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1) {
        search = window.location.hash.substring(window.location.hash.indexOf("?"));
      }
      var query = search.substring(1);
      var params = query.split("&");
      for (var i = 0; i < params.length; i++) {
        var pos = params[i].indexOf("=");
        if (pos > 0) {
          var key = params[i].substring(0, pos);
          if (key === options.lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }
    return found;
  }
};
var hasLocalStorageSupport = null;
var localStorageAvailable = function localStorageAvailable2() {
  if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;
  try {
    hasLocalStorageSupport = window !== "undefined" && window.localStorage !== null;
    var testKey = "i18next.translate.boo";
    window.localStorage.setItem(testKey, "foo");
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }
  return hasLocalStorageSupport;
};
var localStorage = {
  name: "localStorage",
  lookup: function lookup3(options) {
    var found;
    if (options.lookupLocalStorage && localStorageAvailable()) {
      var lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng) found = lng;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage2(lng, options) {
    if (options.lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  }
};
var hasSessionStorageSupport = null;
var sessionStorageAvailable = function sessionStorageAvailable2() {
  if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;
  try {
    hasSessionStorageSupport = window !== "undefined" && window.sessionStorage !== null;
    var testKey = "i18next.translate.boo";
    window.sessionStorage.setItem(testKey, "foo");
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }
  return hasSessionStorageSupport;
};
var sessionStorage = {
  name: "sessionStorage",
  lookup: function lookup4(options) {
    var found;
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      var lng = window.sessionStorage.getItem(options.lookupSessionStorage);
      if (lng) found = lng;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage3(lng, options) {
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(options.lookupSessionStorage, lng);
    }
  }
};
var navigator$1 = {
  name: "navigator",
  lookup: function lookup5(options) {
    var found = [];
    if (typeof navigator !== "undefined") {
      if (navigator.languages) {
        for (var i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }
      if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
      }
      if (navigator.language) {
        found.push(navigator.language);
      }
    }
    return found.length > 0 ? found : void 0;
  }
};
var htmlTag = {
  name: "htmlTag",
  lookup: function lookup6(options) {
    var found;
    var htmlTag2 = options.htmlTag || (typeof document !== "undefined" ? document.documentElement : null);
    if (htmlTag2 && typeof htmlTag2.getAttribute === "function") {
      found = htmlTag2.getAttribute("lang");
    }
    return found;
  }
};
var path = {
  name: "path",
  lookup: function lookup7(options) {
    var found;
    if (typeof window !== "undefined") {
      var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (language instanceof Array) {
        if (typeof options.lookupFromPathIndex === "number") {
          if (typeof language[options.lookupFromPathIndex] !== "string") {
            return void 0;
          }
          found = language[options.lookupFromPathIndex].replace("/", "");
        } else {
          found = language[0].replace("/", "");
        }
      }
    }
    return found;
  }
};
var subdomain = {
  name: "subdomain",
  lookup: function lookup8(options) {
    var lookupFromSubdomainIndex = typeof options.lookupFromSubdomainIndex === "number" ? options.lookupFromSubdomainIndex + 1 : 1;
    var language = typeof window !== "undefined" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (!language) return void 0;
    return language[lookupFromSubdomainIndex];
  }
};
var canCookies = false;
try {
  document.cookie;
  canCookies = true;
} catch (e) {
}
var order = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
if (!canCookies) order.splice(1, 1);
function getDefaults() {
  return {
    order,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
    convertDetectedLanguage: function convertDetectedLanguage(l) {
      return l;
    }
  };
}
var Browser = /* @__PURE__ */ function() {
  function Browser2(services) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Browser2);
    this.type = "languageDetector";
    this.detectors = {};
    this.init(services, options);
  }
  return _createClass(Browser2, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var i18nOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = services || {
        languageUtils: {}
      };
      this.options = defaults(options, this.options || {}, getDefaults());
      if (typeof this.options.convertDetectedLanguage === "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1) {
        this.options.convertDetectedLanguage = function(l) {
          return l.replace("-", "_");
        };
      }
      if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      this.i18nOptions = i18nOptions;
      this.addDetector(cookie$1);
      this.addDetector(querystring);
      this.addDetector(localStorage);
      this.addDetector(sessionStorage);
      this.addDetector(navigator$1);
      this.addDetector(htmlTag);
      this.addDetector(path);
      this.addDetector(subdomain);
    }
  }, {
    key: "addDetector",
    value: function addDetector(detector) {
      this.detectors[detector.name] = detector;
      return this;
    }
  }, {
    key: "detect",
    value: function detect(detectionOrder) {
      var _this = this;
      if (!detectionOrder) detectionOrder = this.options.order;
      var detected = [];
      detectionOrder.forEach(function(detectorName) {
        if (_this.detectors[detectorName]) {
          var lookup9 = _this.detectors[detectorName].lookup(_this.options);
          if (lookup9 && typeof lookup9 === "string") lookup9 = [lookup9];
          if (lookup9) detected = detected.concat(lookup9);
        }
      });
      detected = detected.map(function(d) {
        return _this.options.convertDetectedLanguage(d);
      });
      if (this.services.languageUtils.getBestMatchFromCodes) return detected;
      return detected.length > 0 ? detected[0] : null;
    }
  }, {
    key: "cacheUserLanguage",
    value: function cacheUserLanguage4(lng, caches) {
      var _this2 = this;
      if (!caches) caches = this.options.caches;
      if (!caches) return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
      caches.forEach(function(cacheName) {
        if (_this2.detectors[cacheName]) _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
      });
    }
  }]);
}();
Browser.type = "languageDetector";
const createI18nStore = (i18n2) => {
  const i18nWritable = writable(i18n2);
  i18n2.on("initialized", () => {
    i18nWritable.set(i18n2);
  });
  i18n2.on("loaded", () => {
    i18nWritable.set(i18n2);
  });
  i18n2.on("added", () => i18nWritable.set(i18n2));
  i18n2.on("languageChanged", (lang) => {
    i18nWritable.set(i18n2);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", lang);
    }
  });
  return i18nWritable;
};
const createIsLoadingStore = (i18n2) => {
  const isLoading2 = writable(false);
  i18n2.on("loaded", (resources) => {
    isLoading2.set(Object.keys(resources).length === 0);
  });
  i18n2.on("failedLoading", () => {
    isLoading2.set(true);
  });
  return isLoading2;
};
const initI18n = (defaultLocale) => {
  const detectionOrder = defaultLocale ? ["querystring", "localStorage"] : ["querystring", "localStorage", "navigator"];
  const fallbackDefaultLocale = defaultLocale ? [defaultLocale] : ["en-US"];
  const loadResource = (language, namespace) => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./locales/ar-BH/translation.json": () => __vitePreload(() => import("./BibLw-Dn.js"), true ? [] : void 0, import.meta.url), "./locales/ar/translation.json": () => __vitePreload(() => import("./0Hn4BKwe.js"), true ? [] : void 0, import.meta.url), "./locales/az-AZ/translation.json": () => __vitePreload(() => import("./CW0n69KK.js"), true ? [] : void 0, import.meta.url), "./locales/bg-BG/translation.json": () => __vitePreload(() => import("./DnJ_6sIj.js"), true ? [] : void 0, import.meta.url), "./locales/bn-BD/translation.json": () => __vitePreload(() => import("./OH260zeX.js"), true ? [] : void 0, import.meta.url), "./locales/bo-TB/translation.json": () => __vitePreload(() => import("./CcWfMY2S.js"), true ? [] : void 0, import.meta.url), "./locales/bs-BA/translation.json": () => __vitePreload(() => import("./DpxBFo3Z.js"), true ? [] : void 0, import.meta.url), "./locales/ca-ES/translation.json": () => __vitePreload(() => import("./CpFiRrPl.js"), true ? [] : void 0, import.meta.url), "./locales/ceb-PH/translation.json": () => __vitePreload(() => import("./Kt7hCHyO.js"), true ? [] : void 0, import.meta.url), "./locales/cs-CZ/translation.json": () => __vitePreload(() => import("./DTk9jxFp.js"), true ? [] : void 0, import.meta.url), "./locales/da-DK/translation.json": () => __vitePreload(() => import("./C09f_5EY.js"), true ? [] : void 0, import.meta.url), "./locales/de-DE/translation.json": () => __vitePreload(() => import("./8LBdE9Dh.js"), true ? [] : void 0, import.meta.url), "./locales/dg-DG/translation.json": () => __vitePreload(() => import("./DnNaGd1X.js"), true ? [] : void 0, import.meta.url), "./locales/el-GR/translation.json": () => __vitePreload(() => import("./Bfv1Cv81.js"), true ? [] : void 0, import.meta.url), "./locales/en-GB/translation.json": () => __vitePreload(() => import("./WEf7QdXL.js"), true ? [] : void 0, import.meta.url), "./locales/en-US/translation.json": () => __vitePreload(() => import("./DoOOHnqr.js"), true ? [] : void 0, import.meta.url), "./locales/es-ES/translation.json": () => __vitePreload(() => import("./gsx0K5Qt.js"), true ? [] : void 0, import.meta.url), "./locales/et-EE/translation.json": () => __vitePreload(() => import("./CHgt3PLx.js"), true ? [] : void 0, import.meta.url), "./locales/eu-ES/translation.json": () => __vitePreload(() => import("./AYItnQVR.js"), true ? [] : void 0, import.meta.url), "./locales/fa-IR/translation.json": () => __vitePreload(() => import("./B4LoN8kC.js"), true ? [] : void 0, import.meta.url), "./locales/fi-FI/translation.json": () => __vitePreload(() => import("./DVA_VaoW.js"), true ? [] : void 0, import.meta.url), "./locales/fil-PH/translation.json": () => __vitePreload(() => import("./DhIVdX_b.js"), true ? [] : void 0, import.meta.url), "./locales/fr-CA/translation.json": () => __vitePreload(() => import("./CKlK7gKa.js"), true ? [] : void 0, import.meta.url), "./locales/fr-FR/translation.json": () => __vitePreload(() => import("./BmDgHiVo.js"), true ? [] : void 0, import.meta.url), "./locales/gl-ES/translation.json": () => __vitePreload(() => import("./DOM0mKWk.js"), true ? [] : void 0, import.meta.url), "./locales/he-IL/translation.json": () => __vitePreload(() => import("./CSpp-FQV.js"), true ? [] : void 0, import.meta.url), "./locales/hi-IN/translation.json": () => __vitePreload(() => import("./Da3hFZ16.js"), true ? [] : void 0, import.meta.url), "./locales/hr-HR/translation.json": () => __vitePreload(() => import("./DV8CwYqu.js"), true ? [] : void 0, import.meta.url), "./locales/hu-HU/translation.json": () => __vitePreload(() => import("./rD5Ncge0.js"), true ? [] : void 0, import.meta.url), "./locales/id-ID/translation.json": () => __vitePreload(() => import("./CW31yaxY.js"), true ? [] : void 0, import.meta.url), "./locales/ie-GA/translation.json": () => __vitePreload(() => import("./vcdbSFVA.js"), true ? [] : void 0, import.meta.url), "./locales/it-IT/translation.json": () => __vitePreload(() => import("./BkttIy5d.js"), true ? [] : void 0, import.meta.url), "./locales/ja-JP/translation.json": () => __vitePreload(() => import("./D9Aa7YBZ.js"), true ? [] : void 0, import.meta.url), "./locales/ka-GE/translation.json": () => __vitePreload(() => import("./BSV3kKvf.js"), true ? [] : void 0, import.meta.url), "./locales/kab-DZ/translation.json": () => __vitePreload(() => import("./CS48VZr-.js"), true ? [] : void 0, import.meta.url), "./locales/ko-KR/translation.json": () => __vitePreload(() => import("./Doiwql4z.js"), true ? [] : void 0, import.meta.url), "./locales/lt-LT/translation.json": () => __vitePreload(() => import("./Du62ze5J.js"), true ? [] : void 0, import.meta.url), "./locales/lv-LV/translation.json": () => __vitePreload(() => import("./CiIjym0i.js"), true ? [] : void 0, import.meta.url), "./locales/ms-MY/translation.json": () => __vitePreload(() => import("./CNhndsHZ.js"), true ? [] : void 0, import.meta.url), "./locales/nb-NO/translation.json": () => __vitePreload(() => import("./DTPJx-bu.js"), true ? [] : void 0, import.meta.url), "./locales/nl-NL/translation.json": () => __vitePreload(() => import("./CnbAFyz5.js"), true ? [] : void 0, import.meta.url), "./locales/pa-IN/translation.json": () => __vitePreload(() => import("./Cac_WvFj.js"), true ? [] : void 0, import.meta.url), "./locales/pl-PL/translation.json": () => __vitePreload(() => import("./DQW0v5qU.js"), true ? [] : void 0, import.meta.url), "./locales/pt-BR/translation.json": () => __vitePreload(() => import("./C2dSi-Ca.js"), true ? [] : void 0, import.meta.url), "./locales/pt-PT/translation.json": () => __vitePreload(() => import("./DIJewsAv.js"), true ? [] : void 0, import.meta.url), "./locales/ro-RO/translation.json": () => __vitePreload(() => import("./DIzSi-xG.js"), true ? [] : void 0, import.meta.url), "./locales/ru-RU/translation.json": () => __vitePreload(() => import("./BEp6NzRV.js"), true ? [] : void 0, import.meta.url), "./locales/sk-SK/translation.json": () => __vitePreload(() => import("./Bn7PUfFx.js"), true ? [] : void 0, import.meta.url), "./locales/sr-RS/translation.json": () => __vitePreload(() => import("./CTonfGph.js"), true ? [] : void 0, import.meta.url), "./locales/sv-SE/translation.json": () => __vitePreload(() => import("./GJSPcAA-.js"), true ? [] : void 0, import.meta.url), "./locales/ta-IN/translation.json": () => __vitePreload(() => import("./DVK-2Thp.js"), true ? [] : void 0, import.meta.url), "./locales/th-TH/translation.json": () => __vitePreload(() => import("./-NqCHHGI.js"), true ? [] : void 0, import.meta.url), "./locales/tk-TM/translation.json": () => __vitePreload(() => import("./BwtNaY_S.js"), true ? [] : void 0, import.meta.url), "./locales/tr-TR/translation.json": () => __vitePreload(() => import("./DVMXOEv5.js"), true ? [] : void 0, import.meta.url), "./locales/ug-CN/translation.json": () => __vitePreload(() => import("./Co-WTFH5.js"), true ? [] : void 0, import.meta.url), "./locales/uk-UA/translation.json": () => __vitePreload(() => import("./BaTvYxN5.js"), true ? [] : void 0, import.meta.url), "./locales/ur-PK/translation.json": () => __vitePreload(() => import("./Cnr3QbsL.js"), true ? [] : void 0, import.meta.url), "./locales/uz-Cyrl-UZ/translation.json": () => __vitePreload(() => import("./D3eXoffe.js"), true ? [] : void 0, import.meta.url), "./locales/uz-Latn-Uz/translation.json": () => __vitePreload(() => import("./BbOTMnTi.js"), true ? [] : void 0, import.meta.url), "./locales/vi-VN/translation.json": () => __vitePreload(() => import("./CwjPOIgQ.js"), true ? [] : void 0, import.meta.url), "./locales/zh-CN/translation.json": () => __vitePreload(() => import("./B9TvMuDy.js"), true ? [] : void 0, import.meta.url), "./locales/zh-TW/translation.json": () => __vitePreload(() => import("./C0ETqbQr.js"), true ? [] : void 0, import.meta.url) }), `./locales/${language}/${namespace}.json`, 4);
  instance.use(resourcesToBackend(loadResource)).use(Browser).init({
    debug: false,
    detection: {
      order: detectionOrder,
      caches: ["localStorage"],
      lookupQuerystring: "lang",
      lookupLocalStorage: "locale"
    },
    fallbackLng: {
      fr: ["fr-FR"],
      default: fallbackDefaultLocale
    },
    ns: "translation",
    returnEmptyString: false,
    interpolation: {
      escapeValue: false
      // not needed for svelte as it escapes by default
    }
  });
};
const i18n = createI18nStore(instance);
createIsLoadingStore(instance);
const getLanguages = async () => {
  const languages = (await __vitePreload(async () => {
    const { default: __vite_default__ } = await import("./DbxgkxU-.js");
    return { default: __vite_default__ };
  }, true ? [] : void 0, import.meta.url)).default;
  return languages;
};
const changeLanguage = (lang) => {
  document.documentElement.setAttribute("lang", lang);
  instance.changeLanguage(lang);
};
export {
  initI18n as a,
  changeLanguage as c,
  getLanguages as g,
  i18n as i
};
