var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/ramda/es/internal/_placeholder.js
var placeholder_default = {
  "@@functional/placeholder": true
};

// node_modules/ramda/es/internal/_isPlaceholder.js
function _isPlaceholder(a) {
  return a === placeholder_default;
}
__name(_isPlaceholder, "_isPlaceholder");

// node_modules/ramda/es/internal/_curry1.js
function _curry1(fn) {
  return /* @__PURE__ */ __name(function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  }, "f1");
}
__name(_curry1, "_curry1");

// node_modules/ramda/es/internal/_curry2.js
function _curry2(fn) {
  return /* @__PURE__ */ __name(function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  }, "f2");
}
__name(_curry2, "_curry2");

// node_modules/ramda/es/internal/_concat.js
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];
  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}
__name(_concat, "_concat");

// node_modules/ramda/es/internal/_arity.js
function _arity(n2, fn) {
  switch (n2) {
    case 0:
      return function() {
        return fn.apply(this, arguments);
      };
    case 1:
      return function(a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function(a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function(a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function(a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function(a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function(a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function(a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function(a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
__name(_arity, "_arity");

// node_modules/ramda/es/internal/_curryN.js
function _curryN(length, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    var hasPlaceholder = false;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      } else {
        hasPlaceholder = true;
      }
      combinedIdx += 1;
    }
    return !hasPlaceholder && left <= 0 ? fn.apply(this, combined) : _arity(Math.max(0, left), _curryN(length, combined, fn));
  };
}
__name(_curryN, "_curryN");

// node_modules/ramda/es/curryN.js
var curryN = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function curryN2(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
}, "curryN"));
var curryN_default = curryN;

// node_modules/ramda/es/internal/_curry3.js
function _curry3(fn) {
  return /* @__PURE__ */ __name(function f3(a, b, c4) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function(_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function(_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function(_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c4) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
          return fn(_a, _b, c4);
        }) : _isPlaceholder(a) && _isPlaceholder(c4) ? _curry2(function(_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c4) ? _curry2(function(_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn(_a, b, c4);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn(a, _b, c4);
        }) : _isPlaceholder(c4) ? _curry1(function(_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c4);
    }
  }, "f3");
}
__name(_curry3, "_curry3");

// node_modules/ramda/es/adjust.js
var adjust = /* @__PURE__ */ _curry3(/* @__PURE__ */ __name(function adjust2(idx, fn, list) {
  var len = list.length;
  if (idx >= len || idx < -len) {
    return list;
  }
  var _idx = (len + idx) % len;
  var _list = _concat(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
}, "adjust"));
var adjust_default = adjust;

// node_modules/ramda/es/internal/_isArray.js
var isArray_default = Array.isArray || /* @__PURE__ */ __name(function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
}, "_isArray");

// node_modules/ramda/es/internal/_isTransformer.js
function _isTransformer(obj) {
  return obj != null && typeof obj["@@transducer/step"] === "function";
}
__name(_isTransformer, "_isTransformer");

// node_modules/ramda/es/internal/_dispatchable.js
function _dispatchable(methodNames, transducerCreator, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var obj = arguments[arguments.length - 1];
    if (!isArray_default(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === "function") {
          return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}
__name(_dispatchable, "_dispatchable");

// node_modules/ramda/es/internal/_xfBase.js
var xfBase_default = {
  init: /* @__PURE__ */ __name(function() {
    return this.xf["@@transducer/init"]();
  }, "init"),
  result: /* @__PURE__ */ __name(function(result) {
    return this.xf["@@transducer/result"](result);
  }, "result")
};

// node_modules/ramda/es/internal/_arrayFromIterator.js
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}
__name(_arrayFromIterator, "_arrayFromIterator");

// node_modules/ramda/es/internal/_includesWith.js
function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}
__name(_includesWith, "_includesWith");

// node_modules/ramda/es/internal/_functionName.js
function _functionName(f) {
  var match = String(f).match(/^function (\w*)/);
  return match == null ? "" : match[1];
}
__name(_functionName, "_functionName");

// node_modules/ramda/es/internal/_has.js
function _has(prop3, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop3);
}
__name(_has, "_has");

// node_modules/ramda/es/internal/_objectIs.js
function _objectIs(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
}
__name(_objectIs, "_objectIs");
var objectIs_default = typeof Object.is === "function" ? Object.is : _objectIs;

// node_modules/ramda/es/internal/_isArguments.js
var toString = Object.prototype.toString;
var _isArguments = /* @__PURE__ */ (function() {
  return toString.call(arguments) === "[object Arguments]" ? /* @__PURE__ */ __name(function _isArguments2(x) {
    return toString.call(x) === "[object Arguments]";
  }, "_isArguments") : /* @__PURE__ */ __name(function _isArguments2(x) {
    return _has("callee", x);
  }, "_isArguments");
})();
var isArguments_default = _isArguments;

// node_modules/ramda/es/keys.js
var hasEnumBug = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString");
var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
var hasArgsEnumBug = /* @__PURE__ */ (function() {
  "use strict";
  return arguments.propertyIsEnumerable("length");
})();
var contains = /* @__PURE__ */ __name(function contains2(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
}, "contains");
var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(/* @__PURE__ */ __name(function keys2(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}, "keys")) : /* @__PURE__ */ _curry1(/* @__PURE__ */ __name(function keys3(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop3, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && isArguments_default(obj);
  for (prop3 in obj) {
    if (_has(prop3, obj) && (!checkArgsLength || prop3 !== "length")) {
      ks[ks.length] = prop3;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop3 = nonEnumerableProps[nIdx];
      if (_has(prop3, obj) && !contains(ks, prop3)) {
        ks[ks.length] = prop3;
      }
      nIdx -= 1;
    }
  }
  return ks;
}, "keys"));
var keys_default = keys;

// node_modules/ramda/es/type.js
var type = /* @__PURE__ */ _curry1(/* @__PURE__ */ __name(function type2(val) {
  return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
}, "type"));
var type_default = type;

// node_modules/ramda/es/internal/_equals.js
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }
  __name(eq, "eq");
  return !_includesWith(function(b2, aItem) {
    return !_includesWith(eq, aItem, b2);
  }, b, a);
}
__name(_uniqContentEquals, "_uniqContentEquals");
function _equals(a, b, stackA, stackB) {
  if (objectIs_default(a, b)) {
    return true;
  }
  var typeA = type_default(a);
  if (typeA !== type_default(b)) {
    return false;
  }
  if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
    return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
  }
  if (typeof a.equals === "function" || typeof b.equals === "function") {
    return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
  }
  switch (typeA) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof a.constructor === "function" && _functionName(a.constructor) === "Promise") {
        return a === b;
      }
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof a === typeof b && objectIs_default(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case "Date":
      if (!objectIs_default(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case "Error":
      return a.name === b.name && a.message === b.message;
    case "RegExp":
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }
  switch (typeA) {
    case "Map":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case "Set":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return false;
  }
  var keysA = keys_default(a);
  if (keysA.length !== keys_default(b).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}
__name(_equals, "_equals");

// node_modules/ramda/es/equals.js
var equals = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function equals2(a, b) {
  return _equals(a, b, [], []);
}, "equals"));
var equals_default = equals;

// node_modules/ramda/es/internal/_indexOf.js
function _indexOf(list, a, idx) {
  var inf, item;
  if (typeof list.indexOf === "function") {
    switch (typeof a) {
      case "number":
        if (a === 0) {
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === "number" && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        return list.indexOf(a, idx);
      // all these types can utilise Set
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return list.indexOf(a, idx);
      case "object":
        if (a === null) {
          return list.indexOf(a, idx);
        }
    }
  }
  while (idx < list.length) {
    if (equals_default(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}
__name(_indexOf, "_indexOf");

// node_modules/ramda/es/internal/_includes.js
function _includes(a, list) {
  return _indexOf(list, a, 0) >= 0;
}
__name(_includes, "_includes");

// node_modules/ramda/es/internal/_map.js
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}
__name(_map, "_map");

// node_modules/ramda/es/internal/_quote.js
function _quote(s) {
  var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + escaped.replace(/"/g, '\\"') + '"';
}
__name(_quote, "_quote");

// node_modules/ramda/es/internal/_toISOString.js
var pad = /* @__PURE__ */ __name(function pad2(n2) {
  return (n2 < 10 ? "0" : "") + n2;
}, "pad");
var _toISOString = typeof Date.prototype.toISOString === "function" ? /* @__PURE__ */ __name(function _toISOString2(d) {
  return d.toISOString();
}, "_toISOString") : /* @__PURE__ */ __name(function _toISOString3(d) {
  return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
}, "_toISOString");
var toISOString_default = _toISOString;

// node_modules/ramda/es/internal/_complement.js
function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
}
__name(_complement, "_complement");

// node_modules/ramda/es/internal/_arrayReduce.js
function _arrayReduce(reducer, acc, list) {
  var index = 0;
  var length = list.length;
  while (index < length) {
    acc = reducer(acc, list[index]);
    index += 1;
  }
  return acc;
}
__name(_arrayReduce, "_arrayReduce");

// node_modules/ramda/es/internal/_filter.js
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}
__name(_filter, "_filter");

// node_modules/ramda/es/internal/_isObject.js
function _isObject(x) {
  return Object.prototype.toString.call(x) === "[object Object]";
}
__name(_isObject, "_isObject");

// node_modules/ramda/es/internal/_xfilter.js
var XFilter = /* @__PURE__ */ (function() {
  function XFilter2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  __name(XFilter2, "XFilter");
  XFilter2.prototype["@@transducer/init"] = xfBase_default.init;
  XFilter2.prototype["@@transducer/result"] = xfBase_default.result;
  XFilter2.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
  };
  return XFilter2;
})();
function _xfilter(f) {
  return function(xf) {
    return new XFilter(f, xf);
  };
}
__name(_xfilter, "_xfilter");

// node_modules/ramda/es/filter.js
var filter = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["fantasy-land/filter", "filter"], _xfilter, function(pred, filterable) {
  return _isObject(filterable) ? _arrayReduce(function(acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, keys_default(filterable)) : (
    // else
    _filter(pred, filterable)
  );
}));
var filter_default = filter;

// node_modules/ramda/es/reject.js
var reject = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function reject2(pred, filterable) {
  return filter_default(_complement(pred), filterable);
}, "reject"));
var reject_default = reject;

// node_modules/ramda/es/internal/_toString.js
function _toString(x, seen) {
  var recur = /* @__PURE__ */ __name(function recur2(y) {
    var xs = seen.concat([x]);
    return _includes(y, xs) ? "<Circular>" : _toString(y, xs);
  }, "recur");
  var mapPairs = /* @__PURE__ */ __name(function(obj, keys4) {
    return _map(function(k) {
      return _quote(k) + ": " + recur(obj[k]);
    }, keys4.slice().sort());
  }, "mapPairs");
  switch (Object.prototype.toString.call(x)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + _map(recur, x).join(", ") + "))";
    case "[object Array]":
      return "[" + _map(recur, x).concat(mapPairs(x, reject_default(function(k) {
        return /^\d+$/.test(k);
      }, keys_default(x)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof x === "object" ? "new Boolean(" + recur(x.valueOf()) + ")" : x.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(x.valueOf()) ? recur(NaN) : _quote(toISOString_default(x))) + ")";
    case "[object Map]":
      return "new Map(" + recur(Array.from(x)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof x === "object" ? "new Number(" + recur(x.valueOf()) + ")" : 1 / x === -Infinity ? "-0" : x.toString(10);
    case "[object Set]":
      return "new Set(" + recur(Array.from(x).sort()) + ")";
    case "[object String]":
      return typeof x === "object" ? "new String(" + recur(x.valueOf()) + ")" : _quote(x);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof x.toString === "function") {
        var repr = x.toString();
        if (repr !== "[object Object]") {
          return repr;
        }
      }
      return "{" + mapPairs(x, keys_default(x)).join(", ") + "}";
  }
}
__name(_toString, "_toString");

// node_modules/ramda/es/toString.js
var toString2 = /* @__PURE__ */ _curry1(/* @__PURE__ */ __name(function toString3(val) {
  return _toString(val, []);
}, "toString"));
var toString_default = toString2;

// node_modules/ramda/es/max.js
var max = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function max2(a, b) {
  if (a === b) {
    return b;
  }
  function safeMax(x, y) {
    if (x > y !== y > x) {
      return y > x ? y : x;
    }
    return void 0;
  }
  __name(safeMax, "safeMax");
  var maxByValue = safeMax(a, b);
  if (maxByValue !== void 0) {
    return maxByValue;
  }
  var maxByType = safeMax(typeof a, typeof b);
  if (maxByType !== void 0) {
    return maxByType === typeof a ? a : b;
  }
  var stringA = toString_default(a);
  var maxByStringValue = safeMax(stringA, toString_default(b));
  if (maxByStringValue !== void 0) {
    return maxByStringValue === stringA ? a : b;
  }
  return b;
}, "max"));
var max_default = max;

// node_modules/ramda/es/internal/_xmap.js
var XMap = /* @__PURE__ */ (function() {
  function XMap2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  __name(XMap2, "XMap");
  XMap2.prototype["@@transducer/init"] = xfBase_default.init;
  XMap2.prototype["@@transducer/result"] = xfBase_default.result;
  XMap2.prototype["@@transducer/step"] = function(result, input) {
    return this.xf["@@transducer/step"](result, this.f(input));
  };
  return XMap2;
})();
var _xmap = /* @__PURE__ */ __name(function _xmap2(f) {
  return function(xf) {
    return new XMap(f, xf);
  };
}, "_xmap");
var xmap_default = _xmap;

// node_modules/ramda/es/map.js
var map = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["fantasy-land/map", "map"], xmap_default, /* @__PURE__ */ __name(function map2(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case "[object Function]":
      return curryN_default(functor.length, function() {
        return fn.call(this, functor.apply(this, arguments));
      });
    case "[object Object]":
      return _arrayReduce(function(acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys_default(functor));
    default:
      return _map(fn, functor);
  }
}, "map")));
var map_default = map;

// node_modules/ramda/es/internal/_isInteger.js
var isInteger_default = Number.isInteger || /* @__PURE__ */ __name(function _isInteger(n2) {
  return n2 << 0 === n2;
}, "_isInteger");

// node_modules/ramda/es/internal/_isString.js
function _isString(x) {
  return Object.prototype.toString.call(x) === "[object String]";
}
__name(_isString, "_isString");

// node_modules/ramda/es/internal/_nth.js
function _nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
}
__name(_nth, "_nth");

// node_modules/ramda/es/prop.js
var prop = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function prop2(p, obj) {
  if (obj == null) {
    return;
  }
  return isInteger_default(p) ? _nth(p, obj) : obj[p];
}, "prop"));
var prop_default = prop;

// node_modules/ramda/es/pluck.js
var pluck = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function pluck2(p, list) {
  return map_default(prop_default(p), list);
}, "pluck"));
var pluck_default = pluck;

// node_modules/ramda/es/internal/_isArrayLike.js
var _isArrayLike = /* @__PURE__ */ _curry1(/* @__PURE__ */ __name(function isArrayLike(x) {
  if (isArray_default(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== "object") {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
}, "isArrayLike"));
var isArrayLike_default = _isArrayLike;

// node_modules/ramda/es/internal/_createReduce.js
var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
function _createReduce(arrayReduce, methodReduce, iterableReduce) {
  return /* @__PURE__ */ __name(function _reduce(xf, acc, list) {
    if (isArrayLike_default(list)) {
      return arrayReduce(xf, acc, list);
    }
    if (list == null) {
      return acc;
    }
    if (typeof list["fantasy-land/reduce"] === "function") {
      return methodReduce(xf, acc, list, "fantasy-land/reduce");
    }
    if (list[symIterator] != null) {
      return iterableReduce(xf, acc, list[symIterator]());
    }
    if (typeof list.next === "function") {
      return iterableReduce(xf, acc, list);
    }
    if (typeof list.reduce === "function") {
      return methodReduce(xf, acc, list, "reduce");
    }
    throw new TypeError("reduce: list must be array or iterable");
  }, "_reduce");
}
__name(_createReduce, "_createReduce");

// node_modules/ramda/es/internal/_xArrayReduce.js
function _xArrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf["@@transducer/step"](acc, list[idx]);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    idx += 1;
  }
  return xf["@@transducer/result"](acc);
}
__name(_xArrayReduce, "_xArrayReduce");

// node_modules/ramda/es/bind.js
var bind = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function bind2(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
}, "bind"));
var bind_default = bind;

// node_modules/ramda/es/internal/_xReduce.js
function _xIterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf["@@transducer/step"](acc, step.value);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    step = iter.next();
  }
  return xf["@@transducer/result"](acc);
}
__name(_xIterableReduce, "_xIterableReduce");
function _xMethodReduce(xf, acc, obj, methodName) {
  return xf["@@transducer/result"](obj[methodName](bind_default(xf["@@transducer/step"], xf), acc));
}
__name(_xMethodReduce, "_xMethodReduce");
var _xReduce = /* @__PURE__ */ _createReduce(_xArrayReduce, _xMethodReduce, _xIterableReduce);
var xReduce_default = _xReduce;

// node_modules/ramda/es/internal/_xwrap.js
var XWrap = /* @__PURE__ */ (function() {
  function XWrap2(fn) {
    this.f = fn;
  }
  __name(XWrap2, "XWrap");
  XWrap2.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  };
  XWrap2.prototype["@@transducer/result"] = function(acc) {
    return acc;
  };
  XWrap2.prototype["@@transducer/step"] = function(acc, x) {
    return this.f(acc, x);
  };
  return XWrap2;
})();
function _xwrap(fn) {
  return new XWrap(fn);
}
__name(_xwrap, "_xwrap");

// node_modules/ramda/es/reduce.js
var reduce = /* @__PURE__ */ _curry3(function(xf, acc, list) {
  return xReduce_default(typeof xf === "function" ? _xwrap(xf) : xf, acc, list);
});
var reduce_default = reduce;

// node_modules/ramda/es/always.js
var always = /* @__PURE__ */ _curry1(/* @__PURE__ */ __name(function always2(val) {
  return function() {
    return val;
  };
}, "always"));
var always_default = always;

// node_modules/ramda/es/internal/_isFunction.js
function _isFunction(x) {
  var type3 = Object.prototype.toString.call(x);
  return type3 === "[object Function]" || type3 === "[object AsyncFunction]" || type3 === "[object GeneratorFunction]" || type3 === "[object AsyncGeneratorFunction]";
}
__name(_isFunction, "_isFunction");

// node_modules/ramda/es/internal/_makeFlat.js
function _makeFlat(recursive) {
  return /* @__PURE__ */ __name(function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;
    while (idx < ilen) {
      if (isArrayLike_default(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  }, "flatt");
}
__name(_makeFlat, "_makeFlat");

// node_modules/ramda/es/internal/_forceReduced.js
function _forceReduced(x) {
  return {
    "@@transducer/value": x,
    "@@transducer/reduced": true
  };
}
__name(_forceReduced, "_forceReduced");

// node_modules/ramda/es/internal/_flatCat.js
var tInit = "@@transducer/init";
var tStep = "@@transducer/step";
var tResult = "@@transducer/result";
var XPreservingReduced = /* @__PURE__ */ (function() {
  function XPreservingReduced2(xf) {
    this.xf = xf;
  }
  __name(XPreservingReduced2, "XPreservingReduced");
  XPreservingReduced2.prototype[tInit] = xfBase_default.init;
  XPreservingReduced2.prototype[tResult] = xfBase_default.result;
  XPreservingReduced2.prototype[tStep] = function(result, input) {
    var ret = this.xf[tStep](result, input);
    return ret["@@transducer/reduced"] ? _forceReduced(ret) : ret;
  };
  return XPreservingReduced2;
})();
var XFlatCat = /* @__PURE__ */ (function() {
  function XFlatCat2(xf) {
    this.xf = new XPreservingReduced(xf);
  }
  __name(XFlatCat2, "XFlatCat");
  XFlatCat2.prototype[tInit] = xfBase_default.init;
  XFlatCat2.prototype[tResult] = xfBase_default.result;
  XFlatCat2.prototype[tStep] = function(result, input) {
    return !isArrayLike_default(input) ? _xArrayReduce(this.xf, result, [input]) : xReduce_default(this.xf, result, input);
  };
  return XFlatCat2;
})();
var _flatCat = /* @__PURE__ */ __name(function _xcat(xf) {
  return new XFlatCat(xf);
}, "_xcat");
var flatCat_default = _flatCat;

// node_modules/ramda/es/internal/_xchain.js
function _xchain(f) {
  return function(xf) {
    return xmap_default(f)(flatCat_default(xf));
  };
}
__name(_xchain, "_xchain");

// node_modules/ramda/es/chain.js
var chain = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["fantasy-land/chain", "chain"], _xchain, /* @__PURE__ */ __name(function chain2(fn, monad) {
  if (typeof monad === "function") {
    return function(x) {
      return fn(monad(x))(x);
    };
  }
  return _makeFlat(false)(map_default(fn, monad));
}, "chain")));
var chain_default = chain;

// node_modules/ramda/es/internal/_pipe.js
function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
}
__name(_pipe, "_pipe");

// node_modules/ramda/es/internal/_checkForMethod.js
function _checkForMethod(methodname, fn) {
  return function() {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return isArray_default(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}
__name(_checkForMethod, "_checkForMethod");

// node_modules/ramda/es/slice.js
var slice = /* @__PURE__ */ _curry3(/* @__PURE__ */ _checkForMethod("slice", /* @__PURE__ */ __name(function slice2(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}, "slice")));
var slice_default = slice;

// node_modules/ramda/es/tail.js
var tail = /* @__PURE__ */ _curry1(/* @__PURE__ */ _checkForMethod("tail", /* @__PURE__ */ slice_default(1, Infinity)));
var tail_default = tail;

// node_modules/ramda/es/pipe.js
function pipe() {
  if (arguments.length === 0) {
    throw new Error("pipe requires at least one argument");
  }
  return _arity(arguments[0].length, reduce_default(_pipe, arguments[0], tail_default(arguments)));
}
__name(pipe, "pipe");

// node_modules/ramda/es/reverse.js
var reverse = /* @__PURE__ */ _curry1(/* @__PURE__ */ __name(function reverse2(list) {
  return _isString(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
}, "reverse"));
var reverse_default = reverse;

// node_modules/ramda/es/compose.js
function compose() {
  if (arguments.length === 0) {
    throw new Error("compose requires at least one argument");
  }
  return pipe.apply(this, reverse_default(arguments));
}
__name(compose, "compose");

// node_modules/ramda/es/curry.js
var curry = /* @__PURE__ */ _curry1(/* @__PURE__ */ __name(function curry2(fn) {
  return curryN_default(fn.length, fn);
}, "curry"));
var curry_default = curry;

// node_modules/ramda/es/converge.js
var converge = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function converge2(after, fns) {
  return curryN_default(reduce_default(max_default, 0, pluck_default("length", fns)), function() {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function(fn) {
      return fn.apply(context, args);
    }, fns));
  });
}, "converge"));
var converge_default = converge;

// node_modules/ramda/es/last.js
var last = /* @__PURE__ */ _curry1(function(list) {
  return _nth(-1, list);
});
var last_default = last;

// node_modules/ramda/es/flatten.js
var flatten = /* @__PURE__ */ _curry1(/* @__PURE__ */ _makeFlat(true));
var flatten_default = flatten;

// node_modules/ramda/es/indexOf.js
var indexOf = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function indexOf2(target, xs) {
  return typeof xs.indexOf === "function" && !isArray_default(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
}, "indexOf"));
var indexOf_default = indexOf;

// node_modules/ramda/es/invoker.js
var invoker = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function invoker2(arity, method) {
  return curryN_default(arity + 1, function() {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString_default(target) + ' does not have a method named "' + method + '"');
  });
}, "invoker"));
var invoker_default = invoker;

// node_modules/ramda/es/join.js
var join = /* @__PURE__ */ invoker_default(1, "join");
var join_default = join;

// node_modules/ramda/es/juxt.js
var juxt = /* @__PURE__ */ _curry1(/* @__PURE__ */ __name(function juxt2(fns) {
  return converge_default(function() {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
}, "juxt"));
var juxt_default = juxt;

// node_modules/ramda/es/internal/_isNumber.js
function _isNumber(x) {
  return Object.prototype.toString.call(x) === "[object Number]";
}
__name(_isNumber, "_isNumber");

// node_modules/ramda/es/update.js
var update = /* @__PURE__ */ _curry3(/* @__PURE__ */ __name(function update2(idx, x, list) {
  return adjust_default(idx, always_default(x), list);
}, "update"));
var update_default = update;

// node_modules/ramda/es/multiply.js
var multiply = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function multiply2(a, b) {
  return a * b;
}, "multiply"));
var multiply_default = multiply;

// node_modules/ramda/es/range.js
var range = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function range2(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError("Both arguments to range must be numbers");
  }
  var result = Array(from < to ? to - from : 0);
  var finish = from < 0 ? to + Math.abs(from) : to - from;
  var idx = 0;
  while (idx < finish) {
    result[idx] = idx + from;
    idx += 1;
  }
  return result;
}, "range"));
var range_default = range;

// node_modules/ramda/es/times.js
var times = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function times2(fn, n2) {
  var len = Number(n2);
  if (len < 0 || isNaN(len)) {
    throw new RangeError("n must be a non-negative number");
  }
  var idx = 0;
  var list = Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
}, "times"));
var times_default = times;

// node_modules/ramda/es/replace.js
var replace = /* @__PURE__ */ _curry3(/* @__PURE__ */ __name(function replace2(regex, replacement, str) {
  return str.replace(regex, replacement);
}, "replace"));
var replace_default = replace;

// node_modules/ramda/es/splitEvery.js
var splitEvery = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function splitEvery2(n2, list) {
  if (n2 <= 0) {
    throw new Error("First argument to splitEvery must be a positive integer");
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice_default(idx, idx += n2, list));
  }
  return result;
}, "splitEvery"));
var splitEvery_default = splitEvery;

// node_modules/ramda/es/toPairs.js
var toPairs = /* @__PURE__ */ _curry1(/* @__PURE__ */ __name(function toPairs2(obj) {
  var pairs = [];
  for (var prop3 in obj) {
    if (_has(prop3, obj)) {
      pairs[pairs.length] = [prop3, obj[prop3]];
    }
  }
  return pairs;
}, "toPairs"));
var toPairs_default = toPairs;

// node_modules/ramda/es/zipObj.js
var zipObj = /* @__PURE__ */ _curry2(/* @__PURE__ */ __name(function zipObj2(keys4, values) {
  var idx = 0;
  var len = Math.min(keys4.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys4[idx]] = values[idx];
    idx += 1;
  }
  return out;
}, "zipObj"));
var zipObj_default = zipObj;

// src/generator_1.js
var generator_1_exports = {};
__export(generator_1_exports, {
  randomWord: () => randomWord
});

// src/gen_common.js
var capitalise = /* @__PURE__ */ __name((s) => s.replace(/^[a-z]/, (s2) => s2.toUpperCase()), "capitalise");
var randomNumericString = /* @__PURE__ */ __name((n2) => {
  return () => {
    const x = Math.random() * (Math.pow(10, n2) - 1);
    return String("0000000000" + x).slice(-n2);
  };
}, "randomNumericString");
var dice = /* @__PURE__ */ __name((n2) => Math.floor(Math.random() * n2), "dice");
var RandomList = /* @__PURE__ */ __name((t) => () => t[dice(t.length)], "RandomList");
var WeightedList = /* @__PURE__ */ __name((t) => {
  const expandedList = /* @__PURE__ */ __name((m) => chain_default(
    (p) => times_default(always_default(p[0]), p[1]),
    toPairs_default(m)
  ), "expandedList");
  return RandomList(expandedList(t));
}, "WeightedList");
var trRandElement = curry_default((f, arr) => {
  const idx = dice(arr.length);
  return join_default("", update_default(idx, f(arr[idx]), arr));
});
var symbols = ["!", "#", "$", "^", "*", "&", "+", "@", "-", "=", "/", "~", "?", "\\", "%", "[", "]", "{", "}", "(", ")"];
var emptyStringF = always_default("");
var crunch = /* @__PURE__ */ __name((f) => join_default("", juxt_default(flatten_default(f))()), "crunch");

// src/generator_1.js
var c1 = WeightedList(
  {
    "b": 2,
    "bl": 1,
    "br": 1,
    "c": 2,
    "cr": 1,
    "ch": 2,
    "cl": 1,
    "d": 2,
    "f": 2,
    "fl": 1,
    "fr": 1,
    "g": 2,
    "gl": 1,
    "gr": 1,
    "h": 1,
    "j": 2,
    "k": 2,
    "l": 2,
    "m": 3,
    "n": 2,
    "p": 2,
    "pl": 1,
    "pr": 1,
    "qu": 1,
    "r": 2,
    "s": 3,
    "sh": 2,
    "sk": 1,
    "sl": 1,
    "sm": 1,
    "sn": 1,
    "st": 2,
    "str": 1,
    "t": 3,
    "th": 2,
    "thr": 1,
    "tr": 2,
    "tw": 1,
    "v": 2,
    "w": 1,
    "z": 2
  }
);
var c2 = RandomList(
  [
    "b",
    "bl",
    "br",
    "cr",
    "ch",
    "cl",
    "d",
    "f",
    "fl",
    "fr",
    "g",
    "gg",
    "gl",
    "gr",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "pl",
    "pp",
    "pr",
    "pt",
    "qu",
    "r",
    "s",
    "sh",
    "sk",
    "sl",
    "sm",
    "sn",
    "st",
    "str",
    "t",
    "th",
    "thr",
    "tr",
    "tw",
    "v",
    "w",
    "z"
  ]
);
var c3 = WeightedList(
  {
    "b": 1,
    "ch": 1,
    "ck": 1,
    "ct": 1,
    "d": 2,
    "dd": 1,
    "f": 1,
    "ff": 1,
    "ft": 1,
    "g": 1,
    "k": 1,
    "l": 2,
    "ll": 1,
    "lb": 1,
    "ld": 1,
    "lm": 1,
    "ln": 1,
    "lp": 1,
    "lt": 1,
    "m": 3,
    "mp": 1,
    "mt": 1,
    "n": 3,
    "nd": 1,
    "ng": 1,
    "nn": 1,
    "nt": 1,
    "p": 2,
    "pp": 1,
    "pt": 1,
    "rd": 1,
    "rg": 1,
    "rk": 1,
    "rn": 1,
    "rr": 1,
    "rs": 1,
    "rt": 1,
    "s": 3,
    "sh": 1,
    "ss": 2,
    "st": 2,
    "t": 3,
    "tt": 2,
    "th": 2,
    "v": 2,
    "wn": 1
  }
);
var v1 = WeightedList(
  { "a": 5, "aa": 1, "ai": 1, "e": 5, "ea": 1, "ee": 1, "i": 5, "o": 5, "oo": 2, "u": 2 }
);
var v2 = WeightedList(
  { "a": 5, "e": 5, "i": 5, "ia": 1, "o": 5, "oa": 1, "oo": 2, "u": 2, "ua": 1 }
);
var v3 = WeightedList(
  {
    "a": 5,
    "ao": 1,
    "e": 5,
    "ea": 1,
    "ee": 2,
    "eo": 1,
    "i": 2,
    "ia": 2,
    "io": 2,
    "o": 5,
    "oa": 2,
    "oo": 2,
    "ow": 2,
    "ua": 1,
    "uo": 1,
    "y": 5
  }
);
var randomWord = /* @__PURE__ */ __name((strength = 0, opts = {}) => {
  const puncF = opts["punctuation"] == 1 ? RandomList(symbols) : emptyStringF;
  const numF = /* @__PURE__ */ __name((n2) => opts["numbers"] == 1 ? randomNumericString(n2) : emptyStringF, "numF");
  const capF = /* @__PURE__ */ __name((f2) => opts["capitals"] == 1 ? compose(capitalise, f2) : f2, "capF");
  const syll1 = [c1, v1, c2];
  let f;
  switch (dice(8)) {
    case 0:
      f = [syll1, puncF, capF(c2), v2, c3];
      break;
    case 1:
      f = [v1, capF(c1), puncF, v2, c3];
      break;
    case 2:
      f = [c1, v1, puncF, capF(c3), v3];
      break;
    case 3:
      f = [v1, c1, v1, capF(c3), v3, puncF];
      break;
    case 4:
      f = [c1, v1, capF(c1), v2, c3, puncF];
      break;
    case 5:
      f = [puncF, capF(c1), v2, c3, v3];
      break;
    case 6:
      f = [c1, v1, capF(c2), puncF, v2, c3];
      break;
    case 7:
      f = [c1, v1, capF(c1), v1, c1, v1, puncF];
      break;
    default:
      f = [c1, v1, puncF, capF(c3), v3];
      break;
  }
  const w = dice(2) < 1 ? [f, numF(2)] : [numF(2), f];
  return crunch(w);
}, "randomWord");

// src/generator_2.js
var generator_2_exports = {};
__export(generator_2_exports, {
  randomWord: () => randomWord2
});
var c12 = WeightedList(
  {
    "k": 5,
    "g": 5,
    "t": 5,
    "d": 5,
    "s": 5,
    "z": 4,
    "h": 3,
    "b": 3,
    "p": 3,
    "n": 3,
    "r": 5,
    "m": 5,
    "y": 2,
    "gy": 1,
    "j": 2,
    "sh": 2,
    "ch": 2,
    "ky": 1,
    "hy": 1,
    "ry": 2,
    "my": 1,
    "ny": 1,
    "by": 1,
    "py": 1
  }
);
var v12 = WeightedList(
  { "a": 2, "i": 1, "u": 2, "e": 1, "o": 2, "ou": 1 }
);
var n = WeightedList(
  { "": 5, "n": 1 }
);
var randomWord2 = /* @__PURE__ */ __name((strength = 0, opts = {}) => {
  const puncF = opts["punctuation"] == 1 ? RandomList(symbols) : emptyStringF;
  const numF = /* @__PURE__ */ __name((n2) => opts["numbers"] == 1 ? randomNumericString(n2) : emptyStringF, "numF");
  const capF = /* @__PURE__ */ __name((f2) => opts["capitals"] == 1 ? compose(capitalise, f2) : f2, "capF");
  const syll = [capF(c12), v12, n];
  var f;
  switch (dice(4)) {
    case 0:
      f = [syll, puncF, c12, v12];
      break;
    case 1:
      f = [syll, puncF, syll, c12, v12];
      break;
    case 2:
      f = [v12, syll, puncF, syll];
      break;
    case 3:
      f = [puncF, syll, syll];
      break;
    default:
      f = [syll, syll, puncF];
      break;
  }
  const g = dice(2) < 1 ? [f, numF(2)] : [numF(2), f];
  let w = crunch(g);
  w = w.replace(/[Tt]i/, "chi");
  w = w.replace(/[Ss]i/, "shi");
  w = w.replace(/[Hh]u/, "fu");
  w = w.replace(/[Cc]fu/, "chu");
  w = w.replace(/[Ss]fu/, "shu");
  w = w.replace(/[Tt]u/, "tsu");
  w = w.replace(/[Ss]he/, "sho");
  w = w.replace(/(\wy)[ie]/, "$1o");
  return w;
}, "randomWord");

// src/generator_3.js
var generator_3_exports = {};
__export(generator_3_exports, {
  randomWord: () => randomWord3
});
var c = WeightedList(
  {
    "k": 5,
    "g": 5,
    "t": 5,
    "d": 5,
    "s": 5,
    "z": 2,
    "b": 4,
    "p": 3,
    "n": 4,
    "r": 5,
    "m": 4,
    "j": 1,
    "sh": 2,
    "l": 2,
    "ch": 2
  }
);
var ce = WeightedList(
  {
    "ck": 1,
    "g": 3,
    "t": 3,
    "d": 3,
    "ss": 2,
    "bb": 1,
    "pp": 1,
    "rp": 1,
    "n": 4,
    "th": 1,
    "m": 2,
    "sh": 2,
    "ll": 2,
    "ch": 2,
    "st": 2,
    "nt": 2,
    "ft": 1,
    "mt": 1,
    "rk": 2,
    "rm": 1,
    "rn": 1,
    "rs": 1,
    "rt": 2,
    "ng": 2,
    "nch": 1,
    "nd": 1,
    "rd": 1,
    "sk": 1,
    "nce": 1,
    "rce": 1
  }
);
var cs = WeightedList(
  {
    "k": 5,
    "g": 5,
    "t": 5,
    "d": 5,
    "s": 5,
    "z": 2,
    "b": 4,
    "p": 3,
    "n": 4,
    "r": 5,
    "m": 4,
    "j": 2,
    "sh": 2,
    "l": 2,
    "ch": 2,
    "bl": 1,
    "br": 1,
    "dr": 1,
    "fl": 1,
    "fr": 1,
    "gl": 1,
    "gr": 1,
    "cl": 1,
    "cr": 1,
    "sl": 1,
    "st": 1,
    "str": 1,
    "thr": 1,
    "tr": 2,
    "tw": 1,
    "w": 1
  }
);
var vm = WeightedList(
  { "a": 4, "ai": 1, "e": 4, "ee": 2, "io": 1, "oo": 2, "i": 4, "o": 4, "u": 2 }
);
var ve = WeightedList(
  { "a": 2, "ee": 1, "i": 2, "io": 1, "o": 2, "oo": 1, "y": 2 }
);
var vs = WeightedList(
  { "a": 1, "e": 1, "i": 1, "o": 1 }
);
var randomWord3 = /* @__PURE__ */ __name((strength = 0, opts = {}) => {
  let puncF = opts["punctuation"] == 1 ? RandomList(symbols) : emptyStringF;
  let numF = /* @__PURE__ */ __name((n2) => opts["numbers"] == 1 ? randomNumericString(n2) : emptyStringF, "numF");
  let capF = /* @__PURE__ */ __name((f2) => opts["capitals"] == 1 ? compose(capitalise, f2) : f2, "capF");
  var f;
  switch (dice(6)) {
    case 0:
      f = [c, vm, capF(c), vm, ce];
      break;
    case 1:
      f = [capF(c), vm, c, ve];
      break;
    case 2:
      f = [cs, vm, capF(c), vm, c, ve];
      break;
    case 3:
      f = [capF(cs), vm, c];
      break;
    case 4:
      f = [vs, c, capF(c), ve];
      break;
    case 5:
      f = [vs, c, capF(c), vm, cs];
      break;
    default:
      f = [capF(c), vm, c, vm, c, vm, ce];
      break;
  }
  const w = dice(2) < 1 ? [f, puncF, numF(2)] : [numF(2), f, puncF];
  return crunch(w);
}, "randomWord");

// src/generator_4.js
var generator_4_exports = {};
__export(generator_4_exports, {
  randomWord: () => randomWord4
});
var allLetters = [" ", "_", "'", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var trMatrix = [
  [1661183e-10, 0, 1012786e-9, 0.1211592, 0.04469118, 0.03657282, 0.02942973, 0.01811225, 0.03810004, 0.01722272, 0.06422884, 0.07750222, 2545361e-9, 5792706e-9, 0.02441939, 0.05296494, 0.01820335, 0.06261052, 0.02634315, 2180972e-9, 0.0217347, 0.07929201, 0.1634068, 0.01310727, 7486041e-9, 0.06366618, 3590299e-10, 7630724e-9, 589452e-10],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0.5013193, 0, 0, 0.01846966, 0.01583113, 0.0237467, 0.03166227, 5277045e-9, 5277045e-9, 2638522e-9, 0.06860158, 0.04221636, 0, 0, 0.01583113, 0.03430079, 0.03166227, 5277045e-9, 0.02638522, 0, 5277045e-9, 0.02110818, 0.06596306, 0, 2638522e-9, 0.02902375, 0, 0.0474934, 0],
  [0.07805008, 0, 0, 0, 0.02216091, 0.0423595, 0.05372029, 2655768e-10, 8616492e-9, 0.02077401, 4278738e-10, 0.05071042, 1327884e-10, 8690264e-9, 0.05919412, 0.02996592, 0.2138631, 6491878e-10, 0.02143795, 1327884e-10, 0.09562241, 0.09959131, 0.1211178, 8026322e-9, 0.02075925, 0.01541821, 604925e-9, 0.02589374, 1814775e-9],
  [544285e-8, 0, 0, 0.07042718, 0.01410193, 8246743e-11, 4123371e-10, 0.2764308, 2474023e-10, 0, 1649349e-9, 0.03430645, 3711034e-9, 0, 0.1700478, 1814283e-9, 4123371e-10, 0.1147947, 0, 0, 0.08609599, 0.0182253, 799934e-8, 0.130381, 577272e-9, 1649349e-10, 0, 0.06267524, 0],
  [0.0139879, 0, 0, 0.13221, 0, 0.01463599, 162022e-9, 0.1656405, 0, 0, 0.1476021, 0.03920933, 0, 0.09499892, 0.05352128, 0, 5400734e-11, 0.1565673, 0, 3240441e-10, 0.06734716, 1188162e-9, 0.05984014, 0.04385396, 0, 0, 0, 8857205e-9, 0],
  [0.6500541, 0, 5148535e-10, 0.02648921, 1801987e-10, 1801987e-10, 0.01493075, 0.1040262, 7207949e-10, 7182207e-9, 7722803e-11, 0.05977449, 3346548e-10, 7722803e-11, 0.0100139, 5405962e-10, 2574268e-9, 0.05411111, 0, 2574268e-11, 0.01964166, 0.02432683, 2574268e-10, 7182207e-9, 2934665e-9, 952479e-9, 0, 0.01289708, 0],
  [0.3749525, 0, 4703669e-10, 0.05476271, 9207182e-10, 0.01452133, 0.09605492, 0.03522748, 7625948e-9, 5624387e-9, 2762154e-9, 9347291e-9, 1200937e-10, 7605933e-10, 0.03099418, 0.02212726, 0.08143352, 4313364e-9, 8436581e-9, 6905386e-10, 0.1203839, 0.06003683, 0.02438902, 3302576e-10, 0.01338044, 5684434e-9, 8866916e-9, 0.01549208, 2902264e-10],
  [0.4058919, 0, 0, 0.06825423, 0, 0, 0, 0.07306166, 0.03499357, 0, 0, 0.07753368, 0, 0, 0.0401923, 0, 0, 0.149086, 5590027e-11, 0, 0.07026664, 1844709e-9, 0.04332271, 0.03370787, 0, 614903e-9, 0, 1173906e-9, 0],
  [0.4025702, 2150769e-10, 0, 0.07457791, 1613077e-10, 0, 1075384e-10, 0.1218948, 0, 0.01634584, 0.1261426, 0.03554146, 0, 0, 0.0316163, 1666846e-9, 8065383e-9, 0.05753307, 0, 0, 0.06543714, 0.02494892, 3817615e-9, 0.02661577, 0, 6989999e-10, 0, 204323e-8, 0],
  [0.08628014, 0, 1213789e-10, 0.156518, 4450558e-10, 4045962e-11, 2022981e-10, 0.489521, 323677e-9, 6068943e-11, 2022981e-11, 0.1323232, 0, 2022981e-11, 9710309e-10, 1274478e-9, 4045962e-10, 0.06050736, 6068943e-11, 1011491e-10, 0.01515213, 849652e-9, 0.03214517, 0.01666936, 0, 2225279e-9, 0, 3762745e-9, 0],
  [0.08962114, 0, 1414978e-10, 0.01284092, 0.01275249, 0.03652411, 0.04934734, 0.02322332, 0.01501645, 0.03166012, 7074888e-11, 127348e-8, 0, 7534755e-9, 0.04596908, 0.04131734, 0.3027698, 0.03779759, 8560614e-9, 3891188e-10, 0.0361173, 0.09643072, 0.1286038, 6544271e-10, 0.01797021, 0, 1768722e-9, 0, 1644911e-9],
  [1620746e-9, 0, 0, 0.165316, 0, 0, 1620746e-9, 0.2090762, 0, 0, 0, 1620746e-9, 0, 0, 0, 0, 0, 0.1750405, 0, 0, 0, 0, 0, 0.445705, 0, 0, 0, 0, 0],
  [0.319432, 0, 2989537e-10, 0.01061286, 5979073e-10, 1494768e-10, 4484305e-10, 0.3475336, 2989537e-9, 4484305e-10, 5979073e-10, 0.1346786, 0, 0, 0.01793722, 1494768e-9, 0.08430493, 1793722e-9, 0, 0, 1494768e-10, 0.04887892, 0, 1345291e-9, 0, 4334828e-9, 0, 0.02197309, 0],
  [0.1275035, 0, 2507444e-10, 0.1018022, 1755211e-9, 5014888e-10, 0.05014888, 0.1780599, 0.01670585, 2820874e-10, 3761166e-10, 0.1193543, 0, 7929792e-9, 0.1266573, 5422348e-9, 1316408e-9, 0.09142768, 4388027e-9, 0, 3479079e-9, 0.01529541, 0.01864911, 0.02012224, 6832785e-9, 2726845e-9, 0, 0.09901269, 0],
  [0.1376386, 0, 3590181e-10, 0.1571153, 0.0189382, 179509e-9, 0, 0.2816048, 1929722e-9, 0, 4487726e-11, 0.06857245, 0, 0, 3859444e-9, 0.01377732, 2961899e-9, 0.1127317, 0.04945474, 0, 0.01476462, 0.01718799, 179509e-9, 0.02831755, 0, 0, 0, 0.0903828, 0],
  [0.2481563, 0, 138819e-9, 0.01658887, 3991046e-10, 0.0295858, 0.2020858, 0.08016797, 5622169e-9, 0.15251, 1162609e-9, 0.03147721, 4685141e-10, 0.01011643, 0.01082788, 5726284e-10, 7791216e-9, 0.05181419, 6246855e-10, 5899807e-10, 416457e-9, 0.03534679, 0.09358136, 4876017e-9, 628156e-8, 7114474e-10, 7461521e-10, 6906245e-9, 4338094e-10],
  [0.1186039, 0, 3539886e-11, 0.01093825, 4796545e-9, 0.01203561, 0.01890299, 153985e-8, 0.115418, 6725783e-9, 6017806e-10, 0.01318607, 5486823e-10, 0.01688525, 0.02761111, 0.055824, 0.1386396, 0.0464256, 0.02277916, 1769943e-10, 0.09971858, 0.02849608, 0.04541673, 0.1309404, 0.01959327, 0.06024885, 1345157e-9, 1628347e-9, 9380697e-10],
  [0.1109007, 0, 701459e-10, 0.117284, 5611672e-10, 0, 0, 0.1978816, 2805836e-10, 0, 0.01683502, 0.07007576, 1402918e-10, 1402918e-10, 0.09118967, 1332772e-9, 4910213e-10, 0.1133558, 0.07246072, 0, 0.0874018, 0.0359147, 0.04054433, 0.03984287, 0, 7716049e-10, 0, 2525253e-9, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0.2112281, 0, 1335619e-10, 0.06571244, 211473e-8, 9549674e-9, 0.03557198, 0.2411905, 4029116e-9, 7657547e-9, 3984596e-9, 0.07196759, 0, 0.01248804, 0.01202057, 0.01297776, 0.02350689, 0.09663201, 4229459e-9, 0, 0.01865414, 0.04930659, 0.04320727, 0.02315072, 8481179e-9, 3428088e-9, 0, 0.03866616, 1113016e-10],
  [0.3777397, 0, 6458123e-10, 0.05148335, 2018163e-10, 0.01683148, 2421796e-10, 0.1057316, 1089808e-9, 4036327e-10, 0.05202825, 0.05447023, 4036327e-11, 7971746e-9, 0.0160444, 9445005e-9, 3229062e-9, 0.0459334, 0.01951564, 1755802e-9, 221998e-9, 0.04496468, 0.1500101, 0.02946519, 8072654e-11, 7386478e-9, 0, 3067608e-9, 0],
  [0.2508565, 0, 250369e-9, 0.03299599, 1185958e-10, 6206515e-9, 1317731e-11, 0.07721906, 7906388e-10, 2714527e-9, 0.3508723, 0.06362007, 0, 0, 0.01771031, 9355893e-10, 1067362e-9, 0.08793222, 922412e-10, 0, 0.0313093, 0.02168986, 0.01859319, 0.01834282, 0, 7023508e-9, 0, 9593085e-9, 5270926e-11],
  [0.04042785, 0, 4985497e-10, 0.01486584, 0.01332487, 0.02905185, 0.02923314, 0.02474619, 6254532e-9, 0.05814902, 0, 0.02538071, 0, 0, 0.09087201, 0.03607687, 0.1360587, 2130167e-9, 0.06680566, 0, 0.1472534, 0.1160714, 0.1583575, 0, 8158086e-10, 0, 1948876e-9, 1359681e-10, 1540972e-9],
  [3239304e-9, 0, 0, 0.07706843, 0, 0, 0, 0.6677014, 0, 0, 0, 0.1795114, 0, 0, 0, 0, 0, 0.05776758, 0, 0, 269942e-9, 0, 0, 2294507e-9, 1079768e-9, 0, 0, 0.01106762, 0],
  [0.1211245, 0, 3275109e-10, 0.2731441, 4912664e-10, 1637555e-10, 7259825e-9, 0.1633734, 3820961e-10, 0, 0.1219432, 0.1472162, 5458515e-11, 3820961e-10, 0.01375546, 5458515e-11, 0.05010917, 0.07429039, 5458515e-11, 0, 9606987e-9, 0.01304585, 1637555e-9, 1091703e-9, 0, 0, 0, 4912664e-10, 0],
  [0.1414063, 0, 0, 0.06953125, 0, 0.1414063, 0, 0.0625, 546875e-8, 0, 0.0171875, 0.0859375, 0, 0, 15625e-7, 0, 0, 234375e-8, 0.2226562, 3125e-6, 0, 0, 0.1890625, 0.01796875, 0.01875, 0, 0.01875, 234375e-8, 0],
  [0.7707597, 0, 4001868e-10, 693657e-8, 4068565e-9, 3268192e-9, 4001868e-10, 0.05295805, 1133862e-9, 2000934e-10, 6669779e-10, 0.0180084, 0, 0, 8203828e-9, 3735076e-9, 1067165e-9, 0.07690255, 1600747e-9, 0, 2601214e-9, 0.03781765, 7603548e-9, 0, 5335823e-10, 1133862e-9, 0, 0, 0],
  [0.02325581, 0, 0, 0.03488372, 0, 0, 0, 0.5232558, 0, 0, 0, 0.09302326, 0, 0, 0.1046512, 0, 0, 0.05581395, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.04186047, 0.1232558]
];
var nextLetter = /* @__PURE__ */ __name((tr_matrix, symbols2, ltr) => {
  const row_index = indexOf_default(ltr, symbols2);
  const row = tr_matrix[row_index];
  const roundToInt = /* @__PURE__ */ __name((n2) => Math.round(n2, 1), "roundToInt");
  const int_row = map_default(
    compose(roundToInt, multiply_default(200)),
    row
  );
  const listf = WeightedList(zipObj_default(symbols2, int_row));
  return listf();
}, "nextLetter");
var randomWord4 = /* @__PURE__ */ __name((strength = 0, opts = {}) => {
  let minChar;
  switch (strength) {
    case 0:
      minChar = 6;
      break;
    case 1:
      minChar = 12;
      break;
    case 2:
      minChar = 18;
      break;
    default:
      minChar = 6;
  }
  const puncF = opts["punctuation"] == 1 ? RandomList(symbols) : emptyStringF;
  const numF = /* @__PURE__ */ __name((n2) => opts["numbers"] == 1 ? randomNumericString(n2) : emptyStringF, "numF");
  const capF = /* @__PURE__ */ __name((f2) => opts["capitals"] == 1 ? compose(capitalise, f2) : f2, "capF");
  const word = /* @__PURE__ */ __name(() => {
    let w = RandomList(slice_default(3, 29, allLetters))();
    do {
      w = w + nextLetter(trMatrix, allLetters, last_default(w));
      w = replace_default(/ /g, "", w);
    } while (w.length < minChar);
    return join_default("-", splitEvery_default(6, w));
  }, "word");
  const f = dice(2) < 1 ? [capF(word), puncF, numF(3)] : [numF(3), puncF, capF(word)];
  return crunch(f);
}, "randomWord");

// src/genpwd.js
var generators = [
  generator_1_exports,
  generator_2_exports,
  generator_3_exports,
  generator_4_exports
];
var Info = {
  name: "GenPwd",
  author: "AndrewJ",
  version: "3.0.1",
  date: "2024-05-13",
  info: "GenPwd is a simple password generator.",
  aboutText: /* @__PURE__ */ __name(function() {
    let str = this.name + " v" + this.version;
    str += ", last modified: " + this.date;
    str += " by: " + this.author + ".\n\n";
    str += this.info;
    return str;
  }, "aboutText")
};
var availableGenerators = [
  { id: 0, name: "Generator 0" },
  { id: 1, name: "Generator 1" },
  { id: 2, name: "Generator 2" },
  { id: 3, name: "Markov", default: true }
];
var corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};
var generate = /* @__PURE__ */ __name((params) => {
  const genId = parseInt(params.get("genId")) || 3;
  const generator = generators[genId];
  const nwords = parseInt(params.get("nwords")) || 10;
  const strength = parseInt(params.get("strength")) || 0;
  const options = {
    punctuation: params.get("punctuation") || null,
    numbers: params.get("numbers") || null,
    capitals: params.get("capitals") || null
  };
  const wordList = map_default(() => generator.randomWord(strength, options), range_default(0, nwords));
  return new Response(JSON.stringify({ words: wordList }), {
    status: 200,
    headers: corsHeaders
  });
}, "generate");
var generatorList = /* @__PURE__ */ __name(() => {
  return new Response(JSON.stringify({ generators: availableGenerators }), {
    status: 200,
    headers: corsHeaders
  });
}, "generatorList");

// src/index.js
var src_default = {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders
      });
    }
    switch (path) {
      case "/":
        return new Response(JSON.stringify({ about: Info.aboutText() }), {
          status: 200,
          headers: corsHeaders
        });
      case "/generate":
        return generate(url.searchParams);
      case "/generators":
        return generatorList();
      default:
        return new Response(JSON.stringify({ error: "Not found" }), {
          status: 404,
          headers: corsHeaders
        });
    }
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-6gDJqi/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail2] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail2);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-6gDJqi/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type3, init) {
        if (type3 === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type3, init) => {
      if (type3 === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
