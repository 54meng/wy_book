/*!
 * Gitter Sidecar v1.4.2
 * https://sidecar.gitter.im/
 */
var sidecar = function(t) {
	function e(n) {
		if(r[n]) return r[n].exports;
		var o = r[n] = {
			exports: {},
			id: n,
			loaded: !1
		};
		return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
	}
	var r = {};
	return e.m = t, e.c = r, e.p = "", e(0)
}([function(t, e, r) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = r(5),
		i = n(o),
		a = r(8),
		u = n(a),
		c = r(19),
		s = n(c),
		f = function(t, e) {
			return t[e] || function() {
				return t[e] = {}, t[e]
			}()
		},
		l = f(window, "gitter"),
		y = {
			Chat: s.default
		};
	(0, i.default)(l, y);
	var p = new u.default("gitter-sidecar-ready", {
		detail: y
	});
	if(document.dispatchEvent(p), !((l.chat || {}).options || {}).disableDefaultChat) {
		var d = f(l, "chat");
		d.defaultChat = new s.default(d.options || {})
	}
	e.default = y
}, function(t, e, r) {
	"use strict";
	var n = r(36),
		o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
		i = Object.prototype.toString,
		a = Array.prototype.concat,
		u = Object.defineProperty,
		c = function(t) {
			return "function" == typeof t && "[object Function]" === i.call(t)
		},
		s = function() {
			var t = {};
			try {
				u(t, "x", {
					enumerable: !1,
					value: t
				});
				for(var e in t) return !1;
				return t.x === t
			} catch(t) {
				return !1
			}
		},
		f = u && s(),
		l = function(t, e, r, n) {
			(!(e in t) || c(n) && n()) && (f ? u(t, e, {
				configurable: !0,
				enumerable: !1,
				value: r,
				writable: !0
			}) : t[e] = r)
		},
		y = function(t, e) {
			var r = arguments.length > 2 ? arguments[2] : {},
				i = n(e);
			o && (i = a.call(i, Object.getOwnPropertySymbols(e)));
			for(var u = 0; u < i.length; u += 1) l(t, i[u], e[i[u]], r[i[u]])
		};
	y.supportsDescriptors = !!f, t.exports = y
}, function(t, e, r) {
	"use strict";
	var n = r(32);
	t.exports = Function.prototype.bind || n
}, function(t, e, r) {
	"use strict";
	var n = r(2);
	t.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
}, function(t, e) {
	"use strict";
	var r = Function.prototype.toString,
		n = /^\s*class\b/,
		o = function(t) {
			try {
				var e = r.call(t);
				return n.test(e)
			} catch(t) {
				return !1
			}
		},
		i = function(t) {
			try {
				return !o(t) && (r.call(t), !0)
			} catch(t) {
				return !1
			}
		},
		a = Object.prototype.toString,
		u = "[object Function]",
		c = "[object GeneratorFunction]",
		s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
	t.exports = function(t) {
		if(!t) return !1;
		if("function" != typeof t && "object" != typeof t) return !1;
		if("function" == typeof t && !t.prototype) return !0;
		if(s) return i(t);
		if(o(t)) return !1;
		var e = a.call(t);
		return e === u || e === c
	}
}, function(t, e) {
	/*
		object-assign
		(c) Sindre Sorhus
		@license MIT
		*/
	"use strict";

	function r(t) {
		if(null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(t)
	}

	function n() {
		try {
			if(!Object.assign) return !1;
			var t = new String("abc");
			if(t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
			for(var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
			var n = Object.getOwnPropertyNames(e).map(function(t) {
				return e[t]
			});
			if("0123456789" !== n.join("")) return !1;
			var o = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(t) {
				o[t] = t
			}), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
		} catch(t) {
			return !1
		}
	}
	var o = Object.getOwnPropertySymbols,
		i = Object.prototype.hasOwnProperty,
		a = Object.prototype.propertyIsEnumerable;
	t.exports = n() ? Object.assign : function(t, e) {
		for(var n, u, c = r(t), s = 1; s < arguments.length; s++) {
			n = Object(arguments[s]);
			for(var f in n) i.call(n, f) && (c[f] = n[f]);
			if(o) {
				u = o(n);
				for(var l = 0; l < u.length; l++) a.call(n, u[l]) && (c[u[l]] = n[u[l]])
			}
		}
		return c
	}
}, function(t, e, r) {
	"use strict";
	var n = r(10),
		o = r(1).supportsDescriptors; /*! https://mths.be/array-from v0.2.0 by @mathias */
	t.exports = function(t) {
		var e = o ? Object.defineProperty : function(t, e, r) {
				t[e] = r.value
			},
			r = this;
		if(null === t || "undefined" == typeof t) throw new TypeError("`Array.from` requires an array-like object, not `null` or `undefined`");
		var i, a, u = n.ToObject(t);
		if("undefined" != typeof arguments[1]) {
			if(i = arguments[1], !n.IsCallable(i)) throw new TypeError("When provided, the second argument to `Array.from` must be a function");
			arguments.length > 2 && (a = arguments[2])
		}
		for(var c, s, f = n.ToLength(u.length), l = n.IsCallable(r) ? n.ToObject(new r(f)) : new Array(f), y = 0; y < f;) c = u[y], s = i ? "undefined" == typeof a ? i(c, y) : n.Call(i, a, [c, y]) : c, e(l, y, {
			configurable: !0,
			enumerable: !0,
			value: s,
			writable: !0
		}), y += 1;
		return l.length = f, l
	}
}, function(t, e, r) {
	"use strict";
	var n = r(10),
		o = r(6),
		i = function(t) {
			try {
				return t(), !0
			} catch(t) {
				return !1
			}
		};
	t.exports = function() {
		var t = n.IsCallable(Array.from) && i(function() {
			Array.from({
				length: -(1 / 0)
			})
		}) && !i(function() {
			Array.from([], void 0)
		});
		return t ? Array.from : o
	}
}, function(t, e) {
	"use strict";

	function r(t, e) {
		var r = e.bubbles,
			n = void 0 !== r && r,
			o = e.cancelable,
			i = void 0 !== o && o,
			a = e.detail,
			u = void 0 === a ? void 0 : a,
			c = void 0;
		try {
			c = new window.CustomEvent(t, {
				bubbles: n,
				cancelable: i,
				detail: u
			})
		} catch(e) {
			c = document.createEvent("CustomEvent"), c.initCustomEvent(t, n, i, u)
		}
		return c
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = r, r.prototype = window.Event.prototype
}, function(t, e) {
	"use strict";
	var r, n, o, i, a = Object.getOwnPropertyDescriptor ? function() {
			return Object.getOwnPropertyDescriptor(arguments, "callee").get
		}() : function() {
			throw new TypeError
		},
		u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
		c = Object.getPrototypeOf || function(t) {
			return t.__proto__
		},
		s = n ? c(n) : r,
		f = o ? o.constructor : r,
		l = i ? c(i) : r,
		y = i ? i() : r,
		p = "undefined" == typeof Uint8Array ? r : c(Uint8Array),
		d = {
			"$ %Array%": Array,
			"$ %ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
			"$ %ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer.prototype,
			"$ %ArrayIteratorPrototype%": u ? c([][Symbol.iterator]()) : r,
			"$ %ArrayPrototype%": Array.prototype,
			"$ %ArrayProto_entries%": Array.prototype.entries,
			"$ %ArrayProto_forEach%": Array.prototype.forEach,
			"$ %ArrayProto_keys%": Array.prototype.keys,
			"$ %ArrayProto_values%": Array.prototype.values,
			"$ %AsyncFromSyncIteratorPrototype%": r,
			"$ %AsyncFunction%": f,
			"$ %AsyncFunctionPrototype%": f ? f.prototype : r,
			"$ %AsyncGenerator%": i ? c(y) : r,
			"$ %AsyncGeneratorFunction%": l,
			"$ %AsyncGeneratorPrototype%": l ? l.prototype : r,
			"$ %AsyncIteratorPrototype%": y && u && Symbol.asyncIterator ? y[Symbol.asyncIterator]() : r,
			"$ %Atomics%": "undefined" == typeof Atomics ? r : Atomics,
			"$ %Boolean%": Boolean,
			"$ %BooleanPrototype%": Boolean.prototype,
			"$ %DataView%": "undefined" == typeof DataView ? r : DataView,
			"$ %DataViewPrototype%": "undefined" == typeof DataView ? r : DataView.prototype,
			"$ %Date%": Date,
			"$ %DatePrototype%": Date.prototype,
			"$ %decodeURI%": decodeURI,
			"$ %decodeURIComponent%": decodeURIComponent,
			"$ %encodeURI%": encodeURI,
			"$ %encodeURIComponent%": encodeURIComponent,
			"$ %Error%": Error,
			"$ %ErrorPrototype%": Error.prototype,
			"$ %eval%": eval,
			"$ %EvalError%": EvalError,
			"$ %EvalErrorPrototype%": EvalError.prototype,
			"$ %Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
			"$ %Float32ArrayPrototype%": "undefined" == typeof Float32Array ? r : Float32Array.prototype,
			"$ %Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
			"$ %Float64ArrayPrototype%": "undefined" == typeof Float64Array ? r : Float64Array.prototype,
			"$ %Function%": Function,
			"$ %FunctionPrototype%": Function.prototype,
			"$ %Generator%": n ? c(n()) : r,
			"$ %GeneratorFunction%": s,
			"$ %GeneratorPrototype%": s ? s.prototype : r,
			"$ %Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
			"$ %Int8ArrayPrototype%": "undefined" == typeof Int8Array ? r : Int8Array.prototype,
			"$ %Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
			"$ %Int16ArrayPrototype%": "undefined" == typeof Int16Array ? r : Int8Array.prototype,
			"$ %Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
			"$ %Int32ArrayPrototype%": "undefined" == typeof Int32Array ? r : Int32Array.prototype,
			"$ %isFinite%": isFinite,
			"$ %isNaN%": isNaN,
			"$ %IteratorPrototype%": u ? c(c([][Symbol.iterator]())) : r,
			"$ %JSON%": JSON,
			"$ %JSONParse%": JSON.parse,
			"$ %Map%": "undefined" == typeof Map ? r : Map,
			"$ %MapIteratorPrototype%": "undefined" != typeof Map && u ? c((new Map)[Symbol.iterator]()) : r,
			"$ %MapPrototype%": "undefined" == typeof Map ? r : Map.prototype,
			"$ %Math%": Math,
			"$ %Number%": Number,
			"$ %NumberPrototype%": Number.prototype,
			"$ %Object%": Object,
			"$ %ObjectPrototype%": Object.prototype,
			"$ %ObjProto_toString%": Object.prototype.toString,
			"$ %ObjProto_valueOf%": Object.prototype.valueOf,
			"$ %parseFloat%": parseFloat,
			"$ %parseInt%": parseInt,
			"$ %Promise%": "undefined" == typeof Promise ? r : Promise,
			"$ %PromisePrototype%": "undefined" == typeof Promise ? r : Promise.prototype,
			"$ %PromiseProto_then%": "undefined" == typeof Promise ? r : Promise.prototype.then,
			"$ %Promise_all%": "undefined" == typeof Promise ? r : Promise.all,
			"$ %Promise_reject%": "undefined" == typeof Promise ? r : Promise.reject,
			"$ %Promise_resolve%": "undefined" == typeof Promise ? r : Promise.resolve,
			"$ %Proxy%": "undefined" == typeof Proxy ? r : Proxy,
			"$ %RangeError%": RangeError,
			"$ %RangeErrorPrototype%": RangeError.prototype,
			"$ %ReferenceError%": ReferenceError,
			"$ %ReferenceErrorPrototype%": ReferenceError.prototype,
			"$ %Reflect%": "undefined" == typeof Reflect ? r : Reflect,
			"$ %RegExp%": RegExp,
			"$ %RegExpPrototype%": RegExp.prototype,
			"$ %Set%": "undefined" == typeof Set ? r : Set,
			"$ %SetIteratorPrototype%": "undefined" != typeof Set && u ? c((new Set)[Symbol.iterator]()) : r,
			"$ %SetPrototype%": "undefined" == typeof Set ? r : Set.prototype,
			"$ %SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
			"$ %SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer.prototype,
			"$ %String%": String,
			"$ %StringIteratorPrototype%": u ? c("" [Symbol.iterator]()) : r,
			"$ %StringPrototype%": String.prototype,
			"$ %Symbol%": u ? Symbol : r,
			"$ %SymbolPrototype%": u ? Symbol.prototype : r,
			"$ %SyntaxError%": SyntaxError,
			"$ %SyntaxErrorPrototype%": SyntaxError.prototype,
			"$ %ThrowTypeError%": a,
			"$ %TypedArray%": p,
			"$ %TypedArrayPrototype%": p ? p.prototype : r,
			"$ %TypeError%": TypeError,
			"$ %TypeErrorPrototype%": TypeError.prototype,
			"$ %Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
			"$ %Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? r : Uint8Array.prototype,
			"$ %Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
			"$ %Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray.prototype,
			"$ %Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
			"$ %Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? r : Uint16Array.prototype,
			"$ %Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
			"$ %Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? r : Uint32Array.prototype,
			"$ %URIError%": URIError,
			"$ %URIErrorPrototype%": URIError.prototype,
			"$ %WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
			"$ %WeakMapPrototype%": "undefined" == typeof WeakMap ? r : WeakMap.prototype,
			"$ %WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet,
			"$ %WeakSetPrototype%": "undefined" == typeof WeakSet ? r : WeakSet.prototype
		};
	t.exports = function(t, e) {
		if(arguments.length > 1 && "boolean" != typeof e) throw new TypeError('"allowMissing" argument must be a boolean');
		var r = "$ " + t;
		if(!(r in d)) throw new SyntaxError("intrinsic " + t + " does not exist!");
		if("undefined" == typeof d[r] && !e) throw new TypeError("intrinsic " + t + " exists, but is not available. Please file an issue!");
		return d[r]
	}
}, function(t, e, r) {
	"use strict";
	t.exports = r(25)
}, function(t, e) {
	var r = Number.isNaN || function(t) {
		return t !== t
	};
	t.exports = Number.isFinite || function(t) {
		return "number" == typeof t && !r(t) && t !== 1 / 0 && t !== -(1 / 0)
	}
}, function(t, e) {
	t.exports = Number.isNaN || function(t) {
		return t !== t
	}
}, function(t, e) {
	t.exports = function(t, e) {
		var r = t % e;
		return Math.floor(r >= 0 ? r : r + e)
	}
}, function(t, e) {
	t.exports = function(t) {
		return t >= 0 ? 1 : -1
	}
}, function(t, e) {
	t.exports = function(t) {
		return null === t || "function" != typeof t && "object" != typeof t
	}
}, function(t, e, r) {
	"use strict";
	var n = r(1),
		o = r(6),
		i = r(7),
		a = r(17),
		u = function(t) {
			return o.apply(this || Array, arguments)
		};
	n(u, {
		getPolyfill: i,
		implementation: o,
		shim: a
	}), t.exports = u
}, function(t, e, r) {
	"use strict";
	var n = r(1),
		o = r(7);
	t.exports = function() {
		var t = o();
		return n(Array, {
			from: t
		}, {
			from: function() {
				return Array.from !== t
			}
		}), t
	}
}, function(t, e) {
	"use strict";

	function r(t) {
		if("function" == typeof Symbol) return Symbol(t);
		var e = Math.random().toString(36).substr(2, 8);
		return t + e
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = r
}, function(t, e, r) {
	"use strict";

	function n(t) {
		if(t && t.__esModule) return t;
		var e = {};
		if(null != t)
			for(var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
		return e.default = t, e
	}

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function i(t, e) {
		if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function t(t, e) {
				for(var r = 0; r < e.length; r++) {
					var n = e[r];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}
			return function(e, r, n) {
				return r && t(e.prototype, r), n && t(e, n), e
			}
		}(),
		u = r(16),
		c = r(5),
		s = o(c),
		f = (r(31), r(18)),
		l = o(f),
		y = r(8),
		p = o(y),
		d = r(21),
		b = o(d),
		h = r(23),
		M = o(h),
		g = r(20),
		m = n(g),
		w = r(22),
		j = o(w);
	Array.from || (0, u.shim)();
	var v = function(t) {
			if(t) {
				var e = t.trim().toLowerCase();
				if("true" === e || "1" === e) return !0;
				if("false" === e || "0" === e) return !1
			}
			return t
		},
		T = function(t, e) {
			if(!e) return t;
			var r = {};
			return Object.keys(t).forEach(function(t) {
				var n = "data-" + t;
				if(e.hasAttribute(n)) {
					var o = e.getAttribute(n);
					r[t] = o
				}
			}), (0, s.default)({}, t, r)
		},
		N = 32,
		x = 13,
		L = function(t, e) {
			t = (0, m.default)(t);
			var r = function(t) {
				if("click" === t.type || "keydown" === t.type && (t.keyCode === N || t.keyCode === x)) {
					for(var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
					e.call.apply(e, [this, t].concat(n))
				}
			};
			return m.on(t, "click keydown", r),
				function() {
					m.off(t, "click keydown", r)
				}
		},
		E = function() {
			var t = new b.default,
				e = t.createElement("style");
			return e.innerHTML = M.default, m.prependElementTo(e, (0, m.default)("head")[0]), t
		},
		A = function(t) {
			var e = new b.default,
				r = t.targetElement;
			return r.forEach(function(r) {
				var n = T(t, r);
				if(n.room) {
					var o = e.createElement("iframe");
					o.setAttribute("frameborder", "0"), o.src = "" + t.host + n.room + "/~embed", r.appendChild(o)
				} else console.error("Gitter Sidecar: No room specified for targetElement", r)
			}), e
		},
		D = function(t) {
			var e = t.options,
				r = new b.default;
			return e.targetElement.forEach(function(n) {
				var o = r.createElement("div");
				o.classList.add("gitter-chat-embed-action-bar"), n.insertBefore(o, n.firstChild);
				var i = r.createElement("a");
				i.classList.add("gitter-chat-embed-action-bar-item"), i.classList.add("gitter-chat-embed-action-bar-item-pop-out"), i.setAttribute("aria-label", "Open Chat in Gitter.im"), i.setAttribute("href", "" + e.host + e.room), i.setAttribute("target", "_blank"), i.setAttribute("rel", "noopener"), o.appendChild(i);
				var a = r.createElement("button");
				a.classList.add("gitter-chat-embed-action-bar-item"), a.classList.add("gitter-chat-embed-action-bar-item-collapse-chat"), a.setAttribute("aria-label", "Collapse Gitter Chat"), L(a, function(e) {
					t.toggleChat(!1), e.preventDefault()
				}), o.appendChild(a)
			}), r
		},
		S = document.body || document.documentElement,
		I = {
			room: void 0,
			targetElement: void 0,
			activationElement: void 0,
			showChatByDefault: !1,
			preload: !1,
			useStyles: !0,
			layout: "fixed",
			host: "https://gitter.im/"
		},
		O = (0, l.default)("DEFAULTS"),
		z = (0, l.default)("OPTIONS"),
		C = (0, l.default)("ELEMENTSTORE"),
		P = (0, l.default)("EVENTHANDLESTORE"),
		U = (0, l.default)("INIT"),
		$ = (0, l.default)("ISEMBEDDED"),
		k = (0, l.default)("EMBEDCHATONCE"),
		_ = (0, l.default)("TOGGLETARGETELEMENTS"),
		Y = function() {
			function t() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				i(this, t), this[C] = new b.default, this[P] = [], this[O] = (0, s.default)({}, I), this[z] = (0, s.default)({}, this[O], e), this[U]()
			}
			return a(t, [{
				key: U,
				value: function() {
					var t = this,
						e = this[z];
					e.useStyles && this[C].add(E()), e.targetElement = (0, m.default)(e.targetElement || function() {
						var e = t[C].createElement("aside");
						return e.classList.add("gitter-chat-embed"), e.classList.add("is-collapsed"), S.appendChild(e), e
					}()), e.targetElement.forEach(function(e) {
						var r = t[C].createElement("div");
						r.classList.add("gitter-chat-embed-loading-wrapper"), r.innerHTML = '\n        <div class="gitter-chat-embed-loading-indicator gitter-icon"></div>\n      ', e.insertBefore(r, e.firstChild)
					}), D(this), e.preload && this.toggleChat(!1), e.showChatByDefault ? this.toggleChat(!0) : (void 0 === e.activationElement || e.activationElement === !0 ? e.activationElement = (0, m.default)(function() {
						var r = t[C].createElement("a");
						return r.href = "" + e.host + e.room, r.innerHTML = "Open Chat", r.classList.add("gitter-open-chat-button"), S.appendChild(r), r
					}()) : e.activationElement && (e.activationElement = (0, m.default)(e.activationElement)), e.activationElement && (L(e.activationElement, function(e) {
						t.toggleChat(!0), e.preventDefault()
					}), e.targetElement.forEach(function(t) {
						m.on(t, "gitter-chat-toggle", function(t) {
							var r = t.detail.state;
							e.activationElement.forEach(function(t) {
								m.toggleClass(t, "is-collapsed", r)
							})
						})
					})));
					var r = L((0, m.default)(".js-gitter-toggle-chat-button"), function(e) {
						var r = v(e.target.getAttribute("data-gitter-toggle-chat-state"));
						t.toggleChat(null !== r ? r : "toggle"), e.preventDefault()
					});
					this[P].push(r), e.targetElement.forEach(function(e) {
						var r = new p.default("gitter-chat-started", {
							detail: {
								chat: t
							}
						});
						e.dispatchEvent(r)
					});
					var n = new p.default("gitter-sidecar-instance-started", {
						detail: {
							chat: this
						}
					});
					document.dispatchEvent(n)
				}
			}, {
				key: k,
				value: function() {
					if(!this[$]) {
						var t = this[z],
							e = A(t);
						this[C].add(e)
					}
					this[$] = !0
				}
			}, {
				key: _,
				value: function(t) {
					var e = this[z];
					e.targetElement || console.warn("Gitter Sidecar: No chat embed elements to toggle visibility on");
					var r = e.targetElement;
					r.forEach(function(e) {
						"toggle" === t ? m.toggleClass(e, "is-collapsed") : m.toggleClass(e, "is-collapsed", !t);
						var r = new p.default("gitter-chat-toggle", {
							detail: {
								state: t
							}
						});
						e.dispatchEvent(r)
					})
				}
			}, {
				key: "toggleChat",
				value: function(t) {
					var e = this,
						r = this[z];
					if(t && !this[$]) {
						var n = r.targetElement;
						n.forEach(function(t) {
							t.classList.add("is-loading")
						}), setTimeout(function() {
							e[k](), e[_](t), n.forEach(function(t) {
								t.classList.remove("is-loading")
							})
						}, 300)
					} else this[k](), this[_](t)
				}
			}, {
				key: "destroy",
				value: function() {
					this[P].forEach(function(t) {
						t()
					}), this[C].destroy()
				}
			}, {
				key: "options",
				get: function() {
					return(0, j.default)(this[z])
				}
			}]), t
		}();
	e.default = Y
}, function(t, e) {
	"use strict";

	function r(t) {
		if(Array.isArray(t)) {
			for(var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
			return r
		}
		return Array.from(t)
	}

	function n(t, e) {
		return c(t).forEach(function() {
			e && e.apply(void 0, arguments)
		}), this
	}

	function o(t, e, r) {
		return e.split(/\s/).forEach(function(e) {
			n(t, function(t) {
				t.addEventListener(e, r)
			})
		}), this
	}

	function i(t, e, r) {
		return e.split(/\s/).forEach(function(e) {
			n(t, function(t) {
				t.removeEventListener(e, r)
			})
		}), this
	}

	function a(t, e) {
		var r = (e.children || [])[0];
		r ? e.insertBefore(t, r) : e.appendChild(t)
	}

	function u(t, e, r) {
		return void 0 !== r ? r ? t.classList.add(e) : t.classList.remove(e) : t.classList.toggle(e), r
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.forEach = n, e.on = o, e.off = i, e.prependElementTo = a, e.toggleClass = u;
	var c = function() {
			for(var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
			return e.reduce(function(t, e) {
				return !e || void 0 === e.length || Array.isArray(e) || window && (!window || e instanceof window.constructor) || (e = Array.prototype.slice.call(e)), t.concat(e)
			}, [])
		},
		s = function() {
			for(var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
			var o = e;
			if("string" == typeof e[0]) {
				var i;
				o = (i = document.querySelectorAll).call.apply(i, [document].concat(e))
			}
			return c.apply(void 0, r(o))
		},
		f = function() {
			return s.apply(void 0, arguments)
		};
	e.default = f
}, function(t, e, r) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function o(t, e) {
		if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = function() {
			function t(t, e) {
				for(var r = 0; r < e.length; r++) {
					var n = e[r];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}
			return function(e, r, n) {
				return r && t(e.prototype, r), n && t(e, n), e
			}
		}(),
		a = r(5),
		u = (n(a), function(t) {
			t && t.parentElement.removeChild(t)
		}),
		c = function() {
			function t() {
				o(this, t), this.elements = []
			}
			return i(t, [{
				key: "createElement",
				value: function() {
					for(var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
					var n = document.createElement.apply(document, e);
					return this.add(n), n
				}
			}, {
				key: "add",
				value: function() {
					for(var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
					var o = [].concat(r).reduce(function(e, r) {
						return r ? r instanceof t ? e.concat(r.elements) : e.concat(r) : e
					}, []);
					this.elements = this.elements.concat(o)
				}
			}, {
				key: "destroy",
				value: function() {
					this.elements.forEach(function(t) {
						return u(t)
					}), this.elements = []
				}
			}]), t
		}();
	e.default = c
}, function(t, e) {
	"use strict";

	function r(t) {
		var e = {};
		return Object.keys(t).forEach(function(r) {
			Object.defineProperty(e, r, {
				value: t[r],
				writable: !1,
				configurable: !1
			})
		}), e
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = r
}, function(t, e, r) {
	e = t.exports = r(24)(), e.push([t.id, '.gitter-hidden{box-sizing:border-box;display:none}.gitter-icon{box-sizing:border-box;width:22px;height:22px;fill:currentColor}.gitter-chat-embed{box-sizing:border-box;z-index:100;position:fixed;top:0;left:60%;bottom:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;background-color:#fff;border-left:1px solid #333;box-shadow:-12px 0 18px 0 rgba(50,50,50,.3);transition:transform .3s cubic-bezier(.16,.22,.22,1.7)}@context border-box{.gitter-chat-embed{box-sizing:border-box;background-color:#fff}}.gitter-chat-embed.is-collapsed:not(.is-loading){box-sizing:border-box;transform:translateX(110%)}.gitter-chat-embed:after{box-sizing:border-box;content:"";z-index:-1;position:absolute;top:0;left:100%;bottom:0;right:-100%;background-color:#fff}@context border-box{.gitter-chat-embed:after{box-sizing:border-box;background-color:#fff}}@media(max-width:1150px){.gitter-chat-embed{box-sizing:border-box;left:45%}}@media(max-width:944px){.gitter-chat-embed{box-sizing:border-box;left:30%}}@media(max-width:600px){.gitter-chat-embed{box-sizing:border-box;left:15%}}@media(max-width:500px){.gitter-chat-embed{box-sizing:border-box;left:0;border-left:none}}.gitter-chat-embed>iframe{box-sizing:border-box;-ms-flex:1;flex:1;width:100%;height:100%;border:0}.gitter-chat-embed-loading-wrapper{box-sizing:border-box;position:absolute;top:0;left:0;bottom:0;right:0;display:none;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.is-loading .gitter-chat-embed-loading-wrapper{box-sizing:border-box;display:-ms-flexbox;display:flex}.gitter-chat-embed-loading-indicator{box-sizing:border-box;opacity:.75;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzkyIDE3OTIiIGZpbGw9IiMzYTMxMzMiPjxwYXRoIGQ9Ik01MjYgMTM5NHEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41cS01MiAwLTkwLTM4dC0zOC05MHEwLTUzIDM3LjUtOTAuNXQ5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptNDk4IDIwNnEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41LTkwLjUtMzcuNS0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0tNzA0LTcwNHEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41LTkwLjUtMzcuNS0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0xMjAyIDQ5OHEwIDUyLTM4IDkwdC05MCAzOHEtNTMgMC05MC41LTM3LjV0LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bS05NjQtOTk2cTAgNjYtNDcgMTEzdC0xMTMgNDctMTEzLTQ3LTQ3LTExMyA0Ny0xMTMgMTEzLTQ3IDExMyA0NyA0NyAxMTN6bTExNzAgNDk4cTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bS02NDAtNzA0cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTUzMCAyMDZxMCA5My02NiAxNTguNXQtMTU4IDY1LjVxLTkzIDAtMTU4LjUtNjUuNXQtNjUuNS0xNTguNXEwLTkyIDY1LjUtMTU4dDE1OC41LTY2cTkyIDAgMTU4IDY2dDY2IDE1OHoiLz48L3N2Zz4=);animation:spin 2s infinite linear}@keyframes spin{0%{box-sizing:border-box;transform:rotate(0deg)}to{box-sizing:border-box;transform:rotate(359.9deg)}}.gitter-chat-embed-action-bar{box-sizing:border-box;position:absolute;top:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:.7em;background:linear-gradient(180deg,#fff 0,#fff 50%,hsla(0,0%,100%,0))}.gitter-chat-embed-action-bar-item{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:40px;height:40px;padding-left:0;padding-right:0;opacity:.65;background:none;background-position:50%;background-repeat:no-repeat;background-size:22px 22px;border:0;outline:none;cursor:pointer;cursor:hand;transition:all .2s ease}.gitter-chat-embed-action-bar-item:focus,.gitter-chat-embed-action-bar-item:hover{box-sizing:border-box;opacity:1}.gitter-chat-embed-action-bar-item:active{box-sizing:border-box;filter:hue-rotate(80deg) saturate(150)}.gitter-chat-embed-action-bar-item-pop-out{box-sizing:border-box;margin-right:-4px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTcxLjQyOSIgZmlsbD0iIzNhMzEzMyI+PHBhdGggZD0iTTE1Ny4xNDMsMTAzLjU3MXYzNS43MTRjMCw4Ljg1NC0zLjE0NCwxNi40MjYtOS40MzEsMjIuNzEzcy0xMy44NTgsOS40MzEtMjIuNzEyLDkuNDMxSDMyLjE0MyBjLTguODU0LDAtMTYuNDI1LTMuMTQ0LTIyLjcxMi05LjQzMVMwLDE0OC4xNCwwLDEzOS4yODVWNDYuNDI5YzAtOC44NTQsMy4xNDQtMTYuNDI1LDkuNDMxLTIyLjcxMiBjNi4yODctNi4yODcsMTMuODU4LTkuNDMxLDIyLjcxMi05LjQzMWg3OC41NzJjMS4wNDEsMCwxLjg5NiwwLjMzNSwyLjU2NiwxLjAwNGMwLjY3LDAuNjcsMS4wMDQsMS41MjUsMS4wMDQsMi41NjdWMjUgYzAsMS4wNDItMC4zMzQsMS44OTctMS4wMDQsMi41NjdjLTAuNjcsMC42Ny0xLjUyNSwxLjAwNC0yLjU2NiwxLjAwNEgzMi4xNDNjLTQuOTExLDAtOS4xMTUsMS43NDktMTIuNjEyLDUuMjQ2IHMtNS4yNDYsNy43MDEtNS4yNDYsMTIuNjEydjkyLjg1NmMwLDQuOTExLDEuNzQ5LDkuMTE1LDUuMjQ2LDEyLjYxMnM3LjcwMSw1LjI0NSwxMi42MTIsNS4yNDVIMTI1YzQuOTEsMCw5LjExNS0xLjc0OCwxMi42MTEtNS4yNDUgYzMuNDk3LTMuNDk3LDUuMjQ2LTcuNzAxLDUuMjQ2LTEyLjYxMnYtMzUuNzE0YzAtMS4wNDIsMC4zMzQtMS44OTcsMS4wMDQtMi41NjdjMC42Ny0wLjY2OSwxLjUyNS0xLjAwNCwyLjU2Ny0xLjAwNGg3LjE0MyBjMS4wNDIsMCwxLjg5NywwLjMzNSwyLjU2NywxLjAwNEMxNTYuODA5LDEwMS42NzQsMTU3LjE0MywxMDIuNTI5LDE1Ny4xNDMsMTAzLjU3MXogTTIwMCw3LjE0M3Y1Ny4xNDMgYzAsMS45MzUtMC43MDcsMy42MDktMi4xMjEsNS4wMjJjLTEuNDEzLDEuNDE0LTMuMDg4LDIuMTIxLTUuMDIxLDIuMTIxYy0xLjkzNSwwLTMuNjA5LTAuNzA3LTUuMDIyLTIuMTIxbC0xOS42NDQtMTkuNjQzIGwtNzIuNzY3LDcyLjc2OWMtMC43NDQsMC43NDQtMS42LDEuMTE1LTIuNTY3LDEuMTE1cy0xLjgyMy0wLjM3MS0yLjU2Ny0xLjExNUw3Ny41NjcsMTA5LjcxYy0wLjc0NC0wLjc0NC0xLjExNi0xLjYtMS4xMTYtMi41NjcgYzAtMC45NjcsMC4zNzItMS44MjIsMS4xMTYtMi41NjZsNzIuNzY4LTcyLjc2OGwtMTkuNjQ0LTE5LjY0M2MtMS40MTMtMS40MTQtMi4xMi0zLjA4OC0yLjEyLTUuMDIyYzAtMS45MzUsMC43MDctMy42MDksMi4xMi01LjAyMiBDMTMyLjEwNSwwLjcwNywxMzMuNzc5LDAsMTM1LjcxNSwwaDU3LjE0M2MxLjkzNCwwLDMuNjA4LDAuNzA3LDUuMDIxLDIuMTIxQzE5OS4yOTMsMy41MzQsMjAwLDUuMjA4LDIwMCw3LjE0M3oiLz48L3N2Zz4=)}.gitter-chat-embed-action-bar-item-collapse-chat{box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzEuNDI5IDE3MS40MjkiIGZpbGw9IiMzYTMxMzMiPjxwYXRoIGQ9Ik0xMjIuNDMzLDEwNi4xMzhsLTE2LjI5NSwxNi4yOTVjLTAuNzQ0LDAuNzQ0LTEuNiwxLjExNi0yLjU2NiwxLjExNmMtMC45NjgsMC0xLjgyMy0wLjM3Mi0yLjU2Ny0xLjExNmwtMTUuMjktMTUuMjkgbC0xNS4yOSwxNS4yOWMtMC43NDQsMC43NDQtMS42LDEuMTE2LTIuNTY3LDEuMTE2cy0xLjgyMy0wLjM3Mi0yLjU2Ny0xLjExNmwtMTYuMjk0LTE2LjI5NWMtMC43NDQtMC43NDQtMS4xMTYtMS42LTEuMTE2LTIuNTY2IGMwLTAuOTY4LDAuMzcyLTEuODIzLDEuMTE2LTIuNTY3bDE1LjI5LTE1LjI5bC0xNS4yOS0xNS4yOWMtMC43NDQtMC43NDQtMS4xMTYtMS42LTEuMTE2LTIuNTY3czAuMzcyLTEuODIzLDEuMTE2LTIuNTY3IEw2NS4yOSw0OC45OTZjMC43NDQtMC43NDQsMS42LTEuMTE2LDIuNTY3LTEuMTE2czEuODIzLDAuMzcyLDIuNTY3LDEuMTE2bDE1LjI5LDE1LjI5bDE1LjI5LTE1LjI5IGMwLjc0NC0wLjc0NCwxLjYtMS4xMTYsMi41NjctMS4xMTZjMC45NjcsMCwxLjgyMiwwLjM3MiwyLjU2NiwxLjExNmwxNi4yOTUsMTYuMjk0YzAuNzQ0LDAuNzQ0LDEuMTE2LDEuNiwxLjExNiwyLjU2NyBzLTAuMzcyLDEuODIzLTEuMTE2LDIuNTY3bC0xNS4yOSwxNS4yOWwxNS4yOSwxNS4yOWMwLjc0NCwwLjc0NCwxLjExNiwxLjYsMS4xMTYsMi41NjcgQzEyMy41NDksMTA0LjUzOSwxMjMuMTc3LDEwNS4zOTQsMTIyLjQzMywxMDYuMTM4eiBNMTQ2LjQyOSw4NS43MTRjMC0xMS4wMTItMi43MTctMjEuMTY4LTguMTQ4LTMwLjQ2OSBzLTEyLjc5Ny0xNi42NjctMjIuMDk4LTIyLjA5OFM5Ni43MjYsMjUsODUuNzE0LDI1cy0yMS4xNjgsMi43MTYtMzAuNDY5LDguMTQ3UzM4LjU3OSw0NS45NDUsMzMuMTQ3LDU1LjI0NlMyNSw3NC43MDMsMjUsODUuNzE0IHMyLjcxNiwyMS4xNjgsOC4xNDcsMzAuNDY5czEyLjc5NywxNi42NjYsMjIuMDk4LDIyLjA5OHMxOS40NTcsOC4xNDgsMzAuNDY5LDguMTQ4czIxLjE2OC0yLjcxNywzMC40NjktOC4xNDggczE2LjY2Ni0xMi43OTcsMjIuMDk4LTIyLjA5OFMxNDYuNDI5LDk2LjcyNiwxNDYuNDI5LDg1LjcxNHogTTE3MS40MjksODUuNzE0YzAsMTUuNTUxLTMuODMyLDI5Ljg5My0xMS40OTYsNDMuMDI0IGMtNy42NjQsMTMuMTMzLTE4LjA2MiwyMy41My0zMS4xOTQsMzEuMTk0Yy0xMy4xMzIsNy42NjQtMjcuNDc0LDExLjQ5Ni00My4wMjQsMTEuNDk2cy0yOS44OTItMy44MzItNDMuMDI0LTExLjQ5NiBjLTEzLjEzMy03LjY2NC0yMy41MzEtMTguMDYyLTMxLjE5NC0zMS4xOTRDMy44MzIsMTE1LjYwNywwLDEwMS4yNjUsMCw4NS43MTRTMy44MzIsNTUuODIyLDExLjQ5Niw0Mi42OSBjNy42NjQtMTMuMTMzLDE4LjA2Mi0yMy41MzEsMzEuMTk0LTMxLjE5NEM1NS44MjIsMy44MzIsNzAuMTY0LDAsODUuNzE0LDBzMjkuODkzLDMuODMyLDQzLjAyNCwxMS40OTYgYzEzLjEzMyw3LjY2NCwyMy41MywxOC4wNjIsMzEuMTk0LDMxLjE5NEMxNjcuNTk3LDU1LjgyMiwxNzEuNDI5LDcwLjE2NCwxNzEuNDI5LDg1LjcxNHoiLz48L3N2Zz4=)}.gitter-open-chat-button{z-index:100;position:fixed;bottom:0;right:10px;padding:1em 3em;background-color:#36bc98;border:0;border-top-left-radius:.5em;border-top-right-radius:.5em;font-family:sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;text-align:center;text-decoration:none;cursor:pointer;cursor:hand;transition:all .3s ease}.gitter-open-chat-button,.gitter-open-chat-button:visited{box-sizing:border-box;color:#fff}.gitter-open-chat-button:focus,.gitter-open-chat-button:hover{box-sizing:border-box;background-color:#3ea07f;color:#fff}.gitter-open-chat-button:focus{box-sizing:border-box;box-shadow:0 0 8px rgba(62,160,127,.6);outline:none}.gitter-open-chat-button:active{box-sizing:border-box;color:#eee}.gitter-open-chat-button.is-collapsed{box-sizing:border-box;transform:translateY(120%)}', ""])
}, function(t, e) {
	t.exports = function() {
		var t = [];
		return t.toString = function() {
			for(var t = [], e = 0; e < this.length; e++) {
				var r = this[e];
				r[2] ? t.push("@media " + r[2] + "{" + r[1] + "}") : t.push(r[1])
			}
			return t.join("")
		}, t.i = function(e, r) {
			"string" == typeof e && (e = [
				[null, e, ""]
			]);
			for(var n = {}, o = 0; o < this.length; o++) {
				var i = this[o][0];
				"number" == typeof i && (n[i] = !0)
			}
			for(o = 0; o < e.length; o++) {
				var a = e[o];
				"number" == typeof a[0] && n[a[0]] || (r && !a[2] ? a[2] = r : r && (a[2] = "(" + a[2] + ") and (" + r + ")"), t.push(a))
			}
		}, t
	}
}, function(t, e, r) {
	"use strict";
	var n = r(3),
		o = r(30),
		i = r(9),
		a = i("%TypeError%"),
		u = i("%SyntaxError%"),
		c = i("%Array%"),
		s = i("%String%"),
		f = i("%Object%"),
		l = i("%Number%"),
		y = i("%Symbol%", !0),
		p = i("%RegExp%"),
		d = !!y,
		b = r(12),
		h = r(11),
		M = l.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
		g = r(27),
		m = r(14),
		w = r(13),
		j = r(28),
		v = parseInt,
		T = r(2),
		N = T.call(Function.call, c.prototype.slice),
		x = T.call(Function.call, s.prototype.slice),
		L = T.call(Function.call, p.prototype.test, /^0b[01]+$/i),
		E = T.call(Function.call, p.prototype.test, /^0o[0-7]+$/i),
		A = T.call(Function.call, p.prototype.exec),
		D = ["", "​", "￾"].join(""),
		S = new p("[" + D + "]", "g"),
		I = T.call(Function.call, p.prototype.test, S),
		O = /^[-+]0x[0-9a-f]+$/i,
		z = T.call(Function.call, p.prototype.test, O),
		C = T.call(Function.call, s.prototype.charCodeAt),
		P = T.call(Function.call, Object.prototype.toString),
		U = Math.floor,
		$ = Math.abs,
		k = Object.create,
		_ = f.getOwnPropertyDescriptor,
		Y = f.isExtensible,
		Q = ["\t\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff"].join(""),
		F = new RegExp("(^[" + Q + "]+)|([" + Q + "]+$)", "g"),
		G = T.call(Function.call, s.prototype.replace),
		R = function(t) {
			return G(t, F, "")
		},
		B = r(26),
		W = r(34),
		V = g(g({}, B), {
			Call: function(t, e) {
				var r = arguments.length > 2 ? arguments[2] : [];
				if(!this.IsCallable(t)) throw new a(t + " is not a function");
				return t.apply(e, r)
			},
			ToPrimitive: o,
			ToNumber: function(t) {
				var e = j(t) ? t : o(t, l);
				if("symbol" == typeof e) throw new a("Cannot convert a Symbol value to a number");
				if("string" == typeof e) {
					if(L(e)) return this.ToNumber(v(x(e, 2), 2));
					if(E(e)) return this.ToNumber(v(x(e, 2), 8));
					if(I(e) || z(e)) return NaN;
					var r = R(e);
					if(r !== e) return this.ToNumber(r)
				}
				return l(e)
			},
			ToInt16: function(t) {
				var e = this.ToUint16(t);
				return e >= 32768 ? e - 65536 : e
			},
			ToInt8: function(t) {
				var e = this.ToUint8(t);
				return e >= 128 ? e - 256 : e
			},
			ToUint8: function(t) {
				var e = this.ToNumber(t);
				if(b(e) || 0 === e || !h(e)) return 0;
				var r = m(e) * U($(e));
				return w(r, 256)
			},
			ToUint8Clamp: function(t) {
				var e = this.ToNumber(t);
				if(b(e) || e <= 0) return 0;
				if(e >= 255) return 255;
				var r = U(t);
				return r + .5 < e ? r + 1 : e < r + .5 ? r : r % 2 !== 0 ? r + 1 : r
			},
			ToString: function(t) {
				if("symbol" == typeof t) throw new a("Cannot convert a Symbol value to a string");
				return s(t)
			},
			ToObject: function(t) {
				return this.RequireObjectCoercible(t), f(t)
			},
			ToPropertyKey: function(t) {
				var e = this.ToPrimitive(t, s);
				return "symbol" == typeof e ? e : this.ToString(e)
			},
			ToLength: function(t) {
				var e = this.ToInteger(t);
				return e <= 0 ? 0 : e > M ? M : e
			},
			CanonicalNumericIndexString: function(t) {
				if("[object String]" !== P(t)) throw new a("must be a string");
				if("-0" === t) return -0;
				var e = this.ToNumber(t);
				return this.SameValue(this.ToString(e), t) ? e : void 0
			},
			RequireObjectCoercible: B.CheckObjectCoercible,
			IsArray: c.isArray || function(t) {
				return "[object Array]" === P(t)
			},
			IsConstructor: function(t) {
				return "function" == typeof t && !!t.prototype
			},
			IsExtensible: Object.preventExtensions ? function(t) {
				return !j(t) && Y(t)
			} : function(t) {
				return !0
			},
			IsInteger: function(t) {
				if("number" != typeof t || b(t) || !h(t)) return !1;
				var e = $(t);
				return U(e) === e
			},
			IsPropertyKey: function(t) {
				return "string" == typeof t || "symbol" == typeof t
			},
			IsRegExp: function(t) {
				if(!t || "object" != typeof t) return !1;
				if(d) {
					var e = t[y.match];
					if("undefined" != typeof e) return B.ToBoolean(e)
				}
				return W(t)
			},
			SameValueZero: function(t, e) {
				return t === e || b(t) && b(e)
			},
			GetV: function(t, e) {
				if(!this.IsPropertyKey(e)) throw new a("Assertion failed: IsPropertyKey(P) is not true");
				var r = this.ToObject(t);
				return r[e]
			},
			GetMethod: function(t, e) {
				if(!this.IsPropertyKey(e)) throw new a("Assertion failed: IsPropertyKey(P) is not true");
				var r = this.GetV(t, e);
				if(null != r) {
					if(!this.IsCallable(r)) throw new a(e + "is not a function");
					return r
				}
			},
			Get: function(t, e) {
				if("Object" !== this.Type(t)) throw new a("Assertion failed: Type(O) is not Object");
				if(!this.IsPropertyKey(e)) throw new a("Assertion failed: IsPropertyKey(P) is not true");
				return t[e]
			},
			Type: function(t) {
				return "symbol" == typeof t ? "Symbol" : B.Type(t)
			},
			SpeciesConstructor: function(t, e) {
				if("Object" !== this.Type(t)) throw new a("Assertion failed: Type(O) is not Object");
				var r = t.constructor;
				if("undefined" == typeof r) return e;
				if("Object" !== this.Type(r)) throw new a("O.constructor is not an Object");
				var n = d && y.species ? r[y.species] : void 0;
				if(null == n) return e;
				if(this.IsConstructor(n)) return n;
				throw new a("no constructor found")
			},
			CompletePropertyDescriptor: function(t) {
				if(!this.IsPropertyDescriptor(t)) throw new a("Desc must be a Property Descriptor");
				return this.IsGenericDescriptor(t) || this.IsDataDescriptor(t) ? (n(t, "[[Value]]") || (t["[[Value]]"] = void 0), n(t, "[[Writable]]") || (t["[[Writable]]"] = !1)) : (n(t, "[[Get]]") || (t["[[Get]]"] = void 0), n(t, "[[Set]]") || (t["[[Set]]"] = void 0)), n(t, "[[Enumerable]]") || (t["[[Enumerable]]"] = !1), n(t, "[[Configurable]]") || (t["[[Configurable]]"] = !1), t
			},
			Set: function(t, e, r, n) {
				if("Object" !== this.Type(t)) throw new a("O must be an Object");
				if(!this.IsPropertyKey(e)) throw new a("P must be a Property Key");
				if("Boolean" !== this.Type(n)) throw new a("Throw must be a Boolean");
				if(n) return t[e] = r, !0;
				try {
					t[e] = r
				} catch(t) {
					return !1
				}
			},
			HasOwnProperty: function(t, e) {
				if("Object" !== this.Type(t)) throw new a("O must be an Object");
				if(!this.IsPropertyKey(e)) throw new a("P must be a Property Key");
				return n(t, e)
			},
			HasProperty: function(t, e) {
				if("Object" !== this.Type(t)) throw new a("O must be an Object");
				if(!this.IsPropertyKey(e)) throw new a("P must be a Property Key");
				return e in t
			},
			IsConcatSpreadable: function(t) {
				if("Object" !== this.Type(t)) return !1;
				if(d && "symbol" == typeof y.isConcatSpreadable) {
					var e = this.Get(t, Symbol.isConcatSpreadable);
					if("undefined" != typeof e) return this.ToBoolean(e)
				}
				return this.IsArray(t)
			},
			Invoke: function(t, e) {
				if(!this.IsPropertyKey(e)) throw new a("P must be a Property Key");
				var r = N(arguments, 2),
					n = this.GetV(t, e);
				return this.Call(n, t, r)
			},
			GetIterator: function(t, e) {
				if(!d) throw new SyntaxError("ES.GetIterator depends on native iterator support.");
				var r = e;
				arguments.length < 2 && (r = this.GetMethod(t, y.iterator));
				var n = this.Call(r, t);
				if("Object" !== this.Type(n)) throw new a("iterator must return an object");
				return n
			},
			IteratorNext: function(t, e) {
				var r = this.Invoke(t, "next", arguments.length < 2 ? [] : [e]);
				if("Object" !== this.Type(r)) throw new a("iterator next must return an object");
				return r
			},
			IteratorComplete: function(t) {
				if("Object" !== this.Type(t)) throw new a("Assertion failed: Type(iterResult) is not Object");
				return this.ToBoolean(this.Get(t, "done"))
			},
			IteratorValue: function(t) {
				if("Object" !== this.Type(t)) throw new a("Assertion failed: Type(iterResult) is not Object");
				return this.Get(t, "value")
			},
			IteratorStep: function(t) {
				var e = this.IteratorNext(t),
					r = this.IteratorComplete(e);
				return r !== !0 && e
			},
			IteratorClose: function(t, e) {
				if("Object" !== this.Type(t)) throw new a("Assertion failed: Type(iterator) is not Object");
				if(!this.IsCallable(e)) throw new a("Assertion failed: completion is not a thunk for a Completion Record");
				var r = e,
					n = this.GetMethod(t, "return");
				if("undefined" == typeof n) return r();
				var o;
				try {
					var i = this.Call(n, t, [])
				} catch(t) {
					throw o = r(), r = null, t
				}
				if(o = r(), r = null, "Object" !== this.Type(i)) throw new a("iterator .return must return an object");
				return o
			},
			CreateIterResultObject: function(t, e) {
				if("Boolean" !== this.Type(e)) throw new a("Assertion failed: Type(done) is not Boolean");
				return {
					value: t,
					done: e
				}
			},
			RegExpExec: function(t, e) {
				if("Object" !== this.Type(t)) throw new a("R must be an Object");
				if("String" !== this.Type(e)) throw new a("S must be a String");
				var r = this.Get(t, "exec");
				if(this.IsCallable(r)) {
					var n = this.Call(r, t, [e]);
					if(null === n || "Object" === this.Type(n)) return n;
					throw new a('"exec" method must return `null` or an Object')
				}
				return A(t, e)
			},
			ArraySpeciesCreate: function(t, e) {
				if(!this.IsInteger(e) || e < 0) throw new a("Assertion failed: length must be an integer >= 0");
				var r, n = 0 === e ? 0 : e,
					o = this.IsArray(t);
				if(o && (r = this.Get(t, "constructor"), "Object" === this.Type(r) && d && y.species && (r = this.Get(r, y.species), null === r && (r = void 0))), "undefined" == typeof r) return c(n);
				if(!this.IsConstructor(r)) throw new a("C must be a constructor");
				return new r(n)
			},
			CreateDataProperty: function(t, e, r) {
				if("Object" !== this.Type(t)) throw new a("Assertion failed: Type(O) is not Object");
				if(!this.IsPropertyKey(e)) throw new a("Assertion failed: IsPropertyKey(P) is not true");
				var n = _(t, e),
					o = n || "function" != typeof Y || Y(t),
					i = n && (!n.writable || !n.configurable);
				if(i || !o) return !1;
				var u = {
					configurable: !0,
					enumerable: !0,
					value: r,
					writable: !0
				};
				return Object.defineProperty(t, e, u), !0
			},
			CreateDataPropertyOrThrow: function(t, e, r) {
				if("Object" !== this.Type(t)) throw new a("Assertion failed: Type(O) is not Object");
				if(!this.IsPropertyKey(e)) throw new a("Assertion failed: IsPropertyKey(P) is not true");
				var n = this.CreateDataProperty(t, e, r);
				if(!n) throw new a("unable to create data property");
				return n
			},
			ObjectCreate: function(t, e) {
				if(null !== t && "Object" !== this.Type(t)) throw new a("Assertion failed: proto must be null or an object");
				var r = arguments.length < 2 ? [] : e;
				if(r.length > 0) throw new u("es-abstract does not yet support internal slots");
				if(null === t && !k) throw new u("native Object.create support is required to create null objects");
				return k(t)
			},
			AdvanceStringIndex: function(t, e, r) {
				if("String" !== this.Type(t)) throw new a("S must be a String");
				if(!this.IsInteger(e) || e < 0 || e > M) throw new a("Assertion failed: length must be an integer >= 0 and <= 2**53");
				if("Boolean" !== this.Type(r)) throw new a("Assertion failed: unicode must be a Boolean");
				if(!r) return e + 1;
				var n = t.length;
				if(e + 1 >= n) return e + 1;
				var o = C(t, e);
				if(o < 55296 || o > 56319) return e + 1;
				var i = C(t, e + 1);
				return i < 56320 || i > 57343 ? e + 1 : e + 2
			}
		});
	delete V.CheckObjectCoercible, t.exports = V
}, function(t, e, r) {
	"use strict";
	var n = r(9),
		o = n("%Object%"),
		i = n("%TypeError%"),
		a = n("%String%"),
		u = r(12),
		c = r(11),
		s = r(14),
		f = r(13),
		l = r(4),
		y = r(29),
		p = r(3),
		d = {
			ToPrimitive: y,
			ToBoolean: function(t) {
				return !!t
			},
			ToNumber: function(t) {
				return +t
			},
			ToInteger: function(t) {
				var e = this.ToNumber(t);
				return u(e) ? 0 : 0 !== e && c(e) ? s(e) * Math.floor(Math.abs(e)) : e
			},
			ToInt32: function(t) {
				return this.ToNumber(t) >> 0
			},
			ToUint32: function(t) {
				return this.ToNumber(t) >>> 0
			},
			ToUint16: function(t) {
				var e = this.ToNumber(t);
				if(u(e) || 0 === e || !c(e)) return 0;
				var r = s(e) * Math.floor(Math.abs(e));
				return f(r, 65536)
			},
			ToString: function(t) {
				return a(t)
			},
			ToObject: function(t) {
				return this.CheckObjectCoercible(t), o(t)
			},
			CheckObjectCoercible: function(t, e) {
				if(null == t) throw new i(e || "Cannot call method on " + t);
				return t
			},
			IsCallable: l,
			SameValue: function(t, e) {
				return t === e ? 0 !== t || 1 / t === 1 / e : u(t) && u(e)
			},
			Type: function(t) {
				return null === t ? "Null" : "undefined" == typeof t ? "Undefined" : "function" == typeof t || "object" == typeof t ? "Object" : "number" == typeof t ? "Number" : "boolean" == typeof t ? "Boolean" : "string" == typeof t ? "String" : void 0
			},
			IsPropertyDescriptor: function(t) {
				if("Object" !== this.Type(t)) return !1;
				var e = {
					"[[Configurable]]": !0,
					"[[Enumerable]]": !0,
					"[[Get]]": !0,
					"[[Set]]": !0,
					"[[Value]]": !0,
					"[[Writable]]": !0
				};
				for(var r in t)
					if(p(t, r) && !e[r]) return !1;
				var n = p(t, "[[Value]]"),
					o = p(t, "[[Get]]") || p(t, "[[Set]]");
				if(n && o) throw new i("Property Descriptors may not be both accessor and data descriptors");
				return !0
			},
			IsAccessorDescriptor: function(t) {
				if("undefined" == typeof t) return !1;
				if(!this.IsPropertyDescriptor(t)) throw new i("Desc must be a Property Descriptor");
				return !(!p(t, "[[Get]]") && !p(t, "[[Set]]"))
			},
			IsDataDescriptor: function(t) {
				if("undefined" == typeof t) return !1;
				if(!this.IsPropertyDescriptor(t)) throw new i("Desc must be a Property Descriptor");
				return !(!p(t, "[[Value]]") && !p(t, "[[Writable]]"))
			},
			IsGenericDescriptor: function(t) {
				if("undefined" == typeof t) return !1;
				if(!this.IsPropertyDescriptor(t)) throw new i("Desc must be a Property Descriptor");
				return !this.IsAccessorDescriptor(t) && !this.IsDataDescriptor(t)
			},
			FromPropertyDescriptor: function(t) {
				if("undefined" == typeof t) return t;
				if(!this.IsPropertyDescriptor(t)) throw new i("Desc must be a Property Descriptor");
				if(this.IsDataDescriptor(t)) return {
					value: t["[[Value]]"],
					writable: !!t["[[Writable]]"],
					enumerable: !!t["[[Enumerable]]"],
					configurable: !!t["[[Configurable]]"]
				};
				if(this.IsAccessorDescriptor(t)) return {
					get: t["[[Get]]"],
					set: t["[[Set]]"],
					enumerable: !!t["[[Enumerable]]"],
					configurable: !!t["[[Configurable]]"]
				};
				throw new i("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
			},
			ToPropertyDescriptor: function(t) {
				if("Object" !== this.Type(t)) throw new i("ToPropertyDescriptor requires an object");
				var e = {};
				if(p(t, "enumerable") && (e["[[Enumerable]]"] = this.ToBoolean(t.enumerable)), p(t, "configurable") && (e["[[Configurable]]"] = this.ToBoolean(t.configurable)), p(t, "value") && (e["[[Value]]"] = t.value), p(t, "writable") && (e["[[Writable]]"] = this.ToBoolean(t.writable)), p(t, "get")) {
					var r = t.get;
					if("undefined" != typeof r && !this.IsCallable(r)) throw new TypeError("getter must be a function");
					e["[[Get]]"] = r
				}
				if(p(t, "set")) {
					var n = t.set;
					if("undefined" != typeof n && !this.IsCallable(n)) throw new i("setter must be a function");
					e["[[Set]]"] = n
				}
				if((p(e, "[[Get]]") || p(e, "[[Set]]")) && (p(e, "[[Value]]") || p(e, "[[Writable]]"))) throw new i("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
				return e
			}
		};
	t.exports = d
}, function(t, e, r) {
	var n = r(2),
		o = n.call(Function.call, Object.prototype.hasOwnProperty),
		i = Object.assign;
	t.exports = function(t, e) {
		if(i) return i(t, e);
		for(var r in e) o(e, r) && (t[r] = e[r]);
		return t
	}
}, function(t, e) {
	t.exports = function(t) {
		return null === t || "function" != typeof t && "object" != typeof t
	}
}, function(t, e, r) {
	"use strict";
	var n = Object.prototype.toString,
		o = r(15),
		i = r(4),
		a = {
			"[[DefaultValue]]": function(t, e) {
				var r = e || ("[object Date]" === n.call(t) ? String : Number);
				if(r === String || r === Number) {
					var a, u, c = r === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
					for(u = 0; u < c.length; ++u)
						if(i(t[c[u]]) && (a = t[c[u]](), o(a))) return a;
					throw new TypeError("No default value")
				}
				throw new TypeError("invalid [[DefaultValue]] hint supplied")
			}
		};
	t.exports = function(t, e) {
		return o(t) ? t : a["[[DefaultValue]]"](t, e)
	}
}, function(t, e, r) {
	"use strict";
	var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
		o = r(15),
		i = r(4),
		a = r(33),
		u = r(35),
		c = function(t, e) {
			if("undefined" == typeof t || null === t) throw new TypeError("Cannot call method on " + t);
			if("string" != typeof e || "number" !== e && "string" !== e) throw new TypeError('hint must be "string" or "number"');
			var r, n, a, u = "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"];
			for(a = 0; a < u.length; ++a)
				if(r = t[u[a]], i(r) && (n = r.call(t), o(n))) return n;
			throw new TypeError("No default value")
		},
		s = function(t, e) {
			var r = t[e];
			if(null !== r && "undefined" != typeof r) {
				if(!i(r)) throw new TypeError(r + " returned for property " + e + " of object " + t + " is not a function");
				return r
			}
		};
	t.exports = function(t, e) {
		if(o(t)) return t;
		var r = "default";
		arguments.length > 1 && (e === String ? r = "string" : e === Number && (r = "number"));
		var i;
		if(n && (Symbol.toPrimitive ? i = s(t, Symbol.toPrimitive) : u(t) && (i = Symbol.prototype.valueOf)), "undefined" != typeof i) {
			var f = i.call(t, r);
			if(o(f)) return f;
			throw new TypeError("unable to convert exotic object to primitive")
		}
		return "default" === r && (a(t) || u(t)) && (r = "string"), c(t, "default" === r ? "number" : r)
	}
}, function(t, e, r) {
	(function(e, n) {
		/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
		 * @version   3.3.1
		 */
		! function(e, r) {
			t.exports = r()
		}(this, function() {
			"use strict";

			function t(t) {
				return "function" == typeof t || "object" == typeof t && null !== t
			}

			function o(t) {
				return "function" == typeof t
			}

			function i(t) {
				Z = t
			}

			function a(t) {
				K = t
			}

			function u() {
				return function() {
					return e.nextTick(y)
				}
			}

			function c() {
				return function() {
					H(y)
				}
			}

			function s() {
				var t = 0,
					e = new J(y),
					r = document.createTextNode("");
				return e.observe(r, {
						characterData: !0
					}),
					function() {
						r.data = t = ++t % 2
					}
			}

			function f() {
				var t = new MessageChannel;
				return t.port1.onmessage = y,
					function() {
						return t.port2.postMessage(0)
					}
			}

			function l() {
				var t = setTimeout;
				return function() {
					return t(y, 1)
				}
			}

			function y() {
				for(var t = 0; t < V; t += 2) {
					var e = rt[t],
						r = rt[t + 1];
					e(r), rt[t] = void 0, rt[t + 1] = void 0
				}
				V = 0
			}

			function p() {
				try {
					var t = r(39);
					return H = t.runOnLoop || t.runOnContext, c()
				} catch(t) {
					return l()
				}
			}

			function d(t, e) {
				var r = arguments,
					n = this,
					o = new this.constructor(h);
				void 0 === o[ot] && P(o);
				var i = n._state;
				return i ? ! function() {
					var t = r[i - 1];
					K(function() {
						return O(i, o, t, n._result)
					})
				}() : A(n, o, t, e), o
			}

			function b(t) {
				var e = this;
				if(t && "object" == typeof t && t.constructor === e) return t;
				var r = new e(h);
				return N(r, t), r
			}

			function h() {}

			function M() {
				return new TypeError("You cannot resolve a promise with itself")
			}

			function g() {
				return new TypeError("A promises callback cannot return that same promise.")
			}

			function m(t) {
				try {
					return t.then
				} catch(t) {
					return ct.error = t, ct
				}
			}

			function w(t, e, r, n) {
				try {
					t.call(e, r, n)
				} catch(t) {
					return t
				}
			}

			function j(t, e, r) {
				K(function(t) {
					var n = !1,
						o = w(r, e, function(r) {
							n || (n = !0, e !== r ? N(t, r) : L(t, r))
						}, function(e) {
							n || (n = !0, E(t, e))
						}, "Settle: " + (t._label || " unknown promise"));
					!n && o && (n = !0, E(t, o))
				}, t)
			}

			function v(t, e) {
				e._state === at ? L(t, e._result) : e._state === ut ? E(t, e._result) : A(e, void 0, function(e) {
					return N(t, e)
				}, function(e) {
					return E(t, e)
				})
			}

			function T(t, e, r) {
				e.constructor === t.constructor && r === d && e.constructor.resolve === b ? v(t, e) : r === ct ? E(t, ct.error) : void 0 === r ? L(t, e) : o(r) ? j(t, e, r) : L(t, e)
			}

			function N(e, r) {
				e === r ? E(e, M()) : t(r) ? T(e, r, m(r)) : L(e, r)
			}

			function x(t) {
				t._onerror && t._onerror(t._result), D(t)
			}

			function L(t, e) {
				t._state === it && (t._result = e, t._state = at, 0 !== t._subscribers.length && K(D, t))
			}

			function E(t, e) {
				t._state === it && (t._state = ut, t._result = e, K(x, t))
			}

			function A(t, e, r, n) {
				var o = t._subscribers,
					i = o.length;
				t._onerror = null, o[i] = e, o[i + at] = r, o[i + ut] = n, 0 === i && t._state && K(D, t)
			}

			function D(t) {
				var e = t._subscribers,
					r = t._state;
				if(0 !== e.length) {
					for(var n = void 0, o = void 0, i = t._result, a = 0; a < e.length; a += 3) n = e[a], o = e[a + r], n ? O(r, n, o, i) : o(i);
					t._subscribers.length = 0
				}
			}

			function S() {
				this.error = null
			}

			function I(t, e) {
				try {
					return t(e)
				} catch(t) {
					return st.error = t, st
				}
			}

			function O(t, e, r, n) {
				var i = o(r),
					a = void 0,
					u = void 0,
					c = void 0,
					s = void 0;
				if(i) {
					if(a = I(r, n), a === st ? (s = !0, u = a.error, a = null) : c = !0, e === a) return void E(e, g())
				} else a = n, c = !0;
				e._state !== it || (i && c ? N(e, a) : s ? E(e, u) : t === at ? L(e, a) : t === ut && E(e, a))
			}

			function z(t, e) {
				try {
					e(function(e) {
						N(t, e)
					}, function(e) {
						E(t, e)
					})
				} catch(e) {
					E(t, e)
				}
			}

			function C() {
				return ft++
			}

			function P(t) {
				t[ot] = ft++, t._state = void 0, t._result = void 0, t._subscribers = []
			}

			function U(t, e) {
				this._instanceConstructor = t, this.promise = new t(h), this.promise[ot] || P(this.promise), W(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? L(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && L(this.promise, this._result))) : E(this.promise, $())
			}

			function $() {
				return new Error("Array Methods must be provided an Array")
			}

			function k(t) {
				return new U(this, t).promise
			}

			function _(t) {
				var e = this;
				return new e(W(t) ? function(r, n) {
					for(var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(r, n)
				} : function(t, e) {
					return e(new TypeError("You must pass an array to race."))
				})
			}

			function Y(t) {
				var e = this,
					r = new e(h);
				return E(r, t), r
			}

			function Q() {
				throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
			}

			function F() {
				throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
			}

			function G(t) {
				this[ot] = C(), this._result = this._state = void 0, this._subscribers = [], h !== t && ("function" != typeof t && Q(), this instanceof G ? z(this, t) : F())
			}

			function R() {
				var t = void 0;
				if("undefined" != typeof n) t = n;
				else if("undefined" != typeof self) t = self;
				else try {
					t = Function("return this")()
				} catch(t) {
					throw new Error("polyfill failed because global object is unavailable in this environment")
				}
				var e = t.Promise;
				if(e) {
					var r = null;
					try {
						r = Object.prototype.toString.call(e.resolve())
					} catch(t) {}
					if("[object Promise]" === r && !e.cast) return
				}
				t.Promise = G
			}
			var B = void 0;
			B = Array.isArray ? Array.isArray : function(t) {
				return "[object Array]" === Object.prototype.toString.call(t)
			};
			var W = B,
				V = 0,
				H = void 0,
				Z = void 0,
				K = function(t, e) {
					rt[V] = t, rt[V + 1] = e, V += 2, 2 === V && (Z ? Z(y) : nt())
				},
				X = "undefined" != typeof window ? window : void 0,
				q = X || {},
				J = q.MutationObserver || q.WebKitMutationObserver,
				tt = "undefined" == typeof self && "undefined" != typeof e && "[object process]" === {}.toString.call(e),
				et = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
				rt = new Array(1e3),
				nt = void 0;
			nt = tt ? u() : J ? s() : et ? f() : void 0 === X ? p() : l();
			var ot = Math.random().toString(36).substring(16),
				it = void 0,
				at = 1,
				ut = 2,
				ct = new S,
				st = new S,
				ft = 0;
			return U.prototype._enumerate = function() {
				for(var t = this.length, e = this._input, r = 0; this._state === it && r < t; r++) this._eachEntry(e[r], r)
			}, U.prototype._eachEntry = function(t, e) {
				var r = this._instanceConstructor,
					n = r.resolve;
				if(n === b) {
					var o = m(t);
					if(o === d && t._state !== it) this._settledAt(t._state, e, t._result);
					else if("function" != typeof o) this._remaining--, this._result[e] = t;
					else if(r === G) {
						var i = new r(h);
						T(i, t, o), this._willSettleAt(i, e)
					} else this._willSettleAt(new r(function(e) {
						return e(t)
					}), e)
				} else this._willSettleAt(n(t), e)
			}, U.prototype._settledAt = function(t, e, r) {
				var n = this.promise;
				n._state === it && (this._remaining--, t === ut ? E(n, r) : this._result[e] = r), 0 === this._remaining && L(n, this._result)
			}, U.prototype._willSettleAt = function(t, e) {
				var r = this;
				A(t, void 0, function(t) {
					return r._settledAt(at, e, t)
				}, function(t) {
					return r._settledAt(ut, e, t)
				})
			}, G.all = k, G.race = _, G.resolve = b, G.reject = Y, G._setScheduler = i, G._setAsap = a, G._asap = K, G.prototype = {
				constructor: G,
				then: d,
				catch: function(t) {
					return this.then(null, t)
				}
			}, R(), G.polyfill = R, G.Promise = G, G
		})
	}).call(e, r(38), function() {
		return this
	}())
}, function(t, e) {
	"use strict";
	var r = "Function.prototype.bind called on incompatible ",
		n = Array.prototype.slice,
		o = Object.prototype.toString,
		i = "[object Function]";
	t.exports = function(t) {
		var e = this;
		if("function" != typeof e || o.call(e) !== i) throw new TypeError(r + e);
		for(var a, u = n.call(arguments, 1), c = function() {
				if(this instanceof a) {
					var r = e.apply(this, u.concat(n.call(arguments)));
					return Object(r) === r ? r : this
				}
				return e.apply(t, u.concat(n.call(arguments)))
			}, s = Math.max(0, e.length - u.length), f = [], l = 0; l < s; l++) f.push("$" + l);
		if(a = Function("binder", "return function (" + f.join(",") + "){ return binder.apply(this,arguments); }")(c), e.prototype) {
			var y = function() {};
			y.prototype = e.prototype, a.prototype = new y, y.prototype = null
		}
		return a
	}
}, function(t, e) {
	"use strict";
	var r = Date.prototype.getDay,
		n = function(t) {
			try {
				return r.call(t), !0
			} catch(t) {
				return !1
			}
		},
		o = Object.prototype.toString,
		i = "[object Date]",
		a = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
	t.exports = function(t) {
		return "object" == typeof t && null !== t && (a ? n(t) : o.call(t) === i)
	}
}, function(t, e, r) {
	"use strict";
	var n = r(3),
		o = RegExp.prototype.exec,
		i = Object.getOwnPropertyDescriptor,
		a = function(t) {
			try {
				var e = t.lastIndex;
				return t.lastIndex = 0, o.call(t), !0
			} catch(t) {
				return !1
			} finally {
				t.lastIndex = e
			}
		},
		u = Object.prototype.toString,
		c = "[object RegExp]",
		s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
	t.exports = function(t) {
		if(!t || "object" != typeof t) return !1;
		if(!s) return u.call(t) === c;
		var e = i(t, "lastIndex"),
			r = e && n(e, "value");
		return !!r && a(t)
	}
}, function(t, e) {
	"use strict";
	var r = Object.prototype.toString,
		n = "function" == typeof Symbol && "symbol" == typeof Symbol();
	if(n) {
		var o = Symbol.prototype.toString,
			i = /^Symbol\(.*\)$/,
			a = function(t) {
				return "symbol" == typeof t.valueOf() && i.test(o.call(t))
			};
		t.exports = function(t) {
			if("symbol" == typeof t) return !0;
			if("[object Symbol]" !== r.call(t)) return !1;
			try {
				return a(t)
			} catch(t) {
				return !1
			}
		}
	} else t.exports = function(t) {
		return !1
	}
}, function(t, e, r) {
	"use strict";
	var n = Object.prototype.hasOwnProperty,
		o = Object.prototype.toString,
		i = Array.prototype.slice,
		a = r(37),
		u = Object.prototype.propertyIsEnumerable,
		c = !u.call({
			toString: null
		}, "toString"),
		s = u.call(function() {}, "prototype"),
		f = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
		l = function(t) {
			var e = t.constructor;
			return e && e.prototype === t
		},
		y = {
			$applicationCache: !0,
			$console: !0,
			$external: !0,
			$frame: !0,
			$frameElement: !0,
			$frames: !0,
			$innerHeight: !0,
			$innerWidth: !0,
			$outerHeight: !0,
			$outerWidth: !0,
			$pageXOffset: !0,
			$pageYOffset: !0,
			$parent: !0,
			$scrollLeft: !0,
			$scrollTop: !0,
			$scrollX: !0,
			$scrollY: !0,
			$self: !0,
			$webkitIndexedDB: !0,
			$webkitStorageInfo: !0,
			$window: !0
		},
		p = function() {
			if("undefined" == typeof window) return !1;
			for(var t in window) try {
				if(!y["$" + t] && n.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
					l(window[t])
				} catch(t) {
					return !0
				}
			} catch(t) {
				return !0
			}
			return !1
		}(),
		d = function(t) {
			if("undefined" == typeof window || !p) return l(t);
			try {
				return l(t)
			} catch(t) {
				return !1
			}
		},
		b = function(t) {
			var e = null !== t && "object" == typeof t,
				r = "[object Function]" === o.call(t),
				i = a(t),
				u = e && "[object String]" === o.call(t),
				l = [];
			if(!e && !r && !i) throw new TypeError("Object.keys called on a non-object");
			var y = s && r;
			if(u && t.length > 0 && !n.call(t, 0))
				for(var p = 0; p < t.length; ++p) l.push(String(p));
			if(i && t.length > 0)
				for(var b = 0; b < t.length; ++b) l.push(String(b));
			else
				for(var h in t) y && "prototype" === h || !n.call(t, h) || l.push(String(h));
			if(c)
				for(var M = d(t), g = 0; g < f.length; ++g) M && "constructor" === f[g] || !n.call(t, f[g]) || l.push(f[g]);
			return l
		};
	b.shim = function() {
		if(Object.keys) {
			var t = function() {
				return 2 === (Object.keys(arguments) || "").length
			}(1, 2);
			if(!t) {
				var e = Object.keys;
				Object.keys = function(t) {
					return e(a(t) ? i.call(t) : t)
				}
			}
		} else Object.keys = b;
		return Object.keys || b
	}, t.exports = b
}, function(t, e) {
	"use strict";
	var r = Object.prototype.toString;
	t.exports = function(t) {
		var e = r.call(t),
			n = "[object Arguments]" === e;
		return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)), n
	}
}, function(t, e) {
	function r() {
		throw new Error("setTimeout has not been defined")
	}

	function n() {
		throw new Error("clearTimeout has not been defined")
	}

	function o(t) {
		if(f === setTimeout) return setTimeout(t, 0);
		if((f === r || !f) && setTimeout) return f = setTimeout, setTimeout(t, 0);
		try {
			return f(t, 0)
		} catch(e) {
			try {
				return f.call(null, t, 0)
			} catch(e) {
				return f.call(this, t, 0)
			}
		}
	}

	function i(t) {
		if(l === clearTimeout) return clearTimeout(t);
		if((l === n || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
		try {
			return l(t)
		} catch(e) {
			try {
				return l.call(null, t)
			} catch(e) {
				return l.call(this, t)
			}
		}
	}

	function a() {
		b && p && (b = !1, p.length ? d = p.concat(d) : h = -1, d.length && u())
	}

	function u() {
		if(!b) {
			var t = o(a);
			b = !0;
			for(var e = d.length; e;) {
				for(p = d, d = []; ++h < e;) p && p[h].run();
				h = -1, e = d.length
			}
			p = null, b = !1, i(t)
		}
	}

	function c(t, e) {
		this.fun = t, this.array = e
	}

	function s() {}
	var f, l, y = t.exports = {};
	! function() {
		try {
			f = "function" == typeof setTimeout ? setTimeout : r
		} catch(t) {
			f = r
		}
		try {
			l = "function" == typeof clearTimeout ? clearTimeout : n
		} catch(t) {
			l = n
		}
	}();
	var p, d = [],
		b = !1,
		h = -1;
	y.nextTick = function(t) {
		var e = new Array(arguments.length - 1);
		if(arguments.length > 1)
			for(var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
		d.push(new c(t, e)), 1 !== d.length || b || o(u)
	}, c.prototype.run = function() {
		this.fun.apply(null, this.array)
	}, y.title = "browser", y.browser = !0, y.env = {}, y.argv = [], y.version = "", y.versions = {}, y.on = s, y.addListener = s, y.once = s, y.off = s, y.removeListener = s, y.removeAllListeners = s, y.emit = s, y.prependListener = s, y.prependOnceListener = s, y.listeners = function(t) {
		return []
	}, y.binding = function(t) {
		throw new Error("process.binding is not supported")
	}, y.cwd = function() {
		return "/"
	}, y.chdir = function(t) {
		throw new Error("process.chdir is not supported")
	}, y.umask = function() {
		return 0
	}
}, function(t, e) {}]);
//# sourceMappingURL=sidecar.js.map