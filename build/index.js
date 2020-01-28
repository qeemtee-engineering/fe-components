(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@bem-react/classname'), require('react-phone-number-input'), require('rc-dialog'), require('react-dom'), require('classnames'), require('react-select'), require('rc-notification'), require('rc-collapse'), require('rc-calendar'), require('react-lifecycles-compat'), require('moment'), require('omit.js')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', '@bem-react/classname', 'react-phone-number-input', 'rc-dialog', 'react-dom', 'classnames', 'react-select', 'rc-notification', 'rc-collapse', 'rc-calendar', 'react-lifecycles-compat', 'moment', 'omit.js'], factory) :
    (global = global || self, factory(global.Component = {}, global.React, global.classname, global.PhoneInput, global.Dialog, global.ReactDOM, global.classNames, global.Select, global.Notification, global.RcCollapse, global.Calendar, global.reactLifecyclesCompat, global.moment, global.omit));
}(this, (function (exports, React, classname, PhoneInput, Dialog, ReactDOM, classNames, Select, Notification, RcCollapse, Calendar, reactLifecyclesCompat, moment, omit) { 'use strict';

    function ___$insertStyle(css) {
      if (!css) {
        return;
      }
      if (typeof window === 'undefined') {
        return;
      }

      var style = document.createElement('style');

      style.setAttribute('type', 'text/css');
      style.innerHTML = css;
      document.head.appendChild(style);
      return css;
    }

    var React__default = 'default' in React ? React['default'] : React;
    var PhoneInput__default = 'default' in PhoneInput ? PhoneInput['default'] : PhoneInput;
    Dialog = Dialog && Dialog.hasOwnProperty('default') ? Dialog['default'] : Dialog;
    var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
    classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;
    Select = Select && Select.hasOwnProperty('default') ? Select['default'] : Select;
    Notification = Notification && Notification.hasOwnProperty('default') ? Notification['default'] : Notification;
    RcCollapse = RcCollapse && RcCollapse.hasOwnProperty('default') ? RcCollapse['default'] : RcCollapse;
    Calendar = Calendar && Calendar.hasOwnProperty('default') ? Calendar['default'] : Calendar;
    var reactLifecyclesCompat__default = 'default' in reactLifecyclesCompat ? reactLifecyclesCompat['default'] : reactLifecyclesCompat;
    var moment__default = 'default' in moment ? moment['default'] : moment;
    omit = omit && omit.hasOwnProperty('default') ? omit['default'] : omit;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var SVG = function (props) {
        var src = props.src, other = __rest(props, ["src"]);
        var Wrapper = props.wrapper || 'span';
        return React__default.createElement(Wrapper, __assign({}, other, { dangerouslySetInnerHTML: { __html: src } }));
    };

    var numWithCommas = function (val, delimiter) {
        if (delimiter === void 0) { delimiter = ','; }
        return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter) : 0;
    };
    var getDataOrAriaProps = function (props) {
        return Object.keys(props).reduce(function (prev, key) {
            if ((key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') &&
                key.substr(0, 7) !== 'data-__') {
                prev[key] = props[key];
            }
            return prev;
        }, {});
    };
    var lastId = 0;
    function newId(prefix) {
        if (prefix === void 0) { prefix = 'id'; }
        lastId++;
        return "" + prefix + lastId;
    }

    ___$insertStyle(".Button {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-radius: 4px;\n  text-align: center;\n  cursor: pointer;\n  word-break: keep-all;\n  user-select: none;\n  padding: 10px 16px;\n  transition: all 0.3s;\n  opacity: 1;\n  font-weight: 500;\n  min-width: 69px;\n  height: 42px;\n  font-size: 15px;\n}\n.Button-loading {\n  padding-right: 40px;\n}\n.Button:hover {\n  box-shadow: 0 0 8px rgba(33, 33, 33, 0.6);\n}\n.Button:focus {\n  outline: 0;\n}\n.Button__SVG {\n  line-height: 1;\n  position: relative;\n  color: #f9285c;\n}\n.Button__SVG svg {\n  height: 20px;\n  width: auto;\n  fill: currentColor;\n  stroke: currentColor;\n}\n.Button__icon {\n  margin-right: 10px;\n}\n.Button__spinner {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 8px;\n}\n.Button-color-primary {\n  background: #f9285c;\n  border-color: #f9285c;\n}\n.Button-color-secondary {\n  background: #fff;\n  border-color: #fff;\n}\n.Button-color-success {\n  background: #2cb446;\n  border-color: #2cb446;\n}\n.Button-color-reject {\n  background: #9e2222;\n  border-color: #9e2222;\n}\n.Button-layout-solid {\n  color: #fff;\n  background: #f9285c;\n  border: 1px solid #f9285c;\n}\n.Button-layout-solid .Button__SVG {\n  color: #fff;\n}\n.Button-layout-solid.Button-color-secondary {\n  background: #fff;\n  border-color: #fff;\n  color: #333745;\n}\n.Button-layout-solid.Button-color-success {\n  background: #2cb446;\n  border-color: #2cb446;\n}\n.Button-layout-solid.Button-color-reject {\n  background: #9e2222;\n  border-color: #9e2222;\n}\n.Button-layout-outline {\n  color: #f9285c;\n  background: transparent;\n  border: 1px solid #f9285c;\n}\n.Button-layout-outline .Button__SVG {\n  color: #f9285c;\n}\n.Button-layout-outline.Button-color-secondary {\n  color: #fff;\n  border-color: #fff;\n}\n.Button-layout-outline.Button-color-secondary .Button__SVG {\n  color: #fff;\n}\n.Button-layout-outline.Button-color-success {\n  color: #2cb446;\n  border-color: #2cb446;\n}\n.Button-layout-outline.Button-color-success .Button__SVG {\n  color: #2cb446;\n}\n.Button-layout-outline.Button-color-reject {\n  color: #9e2222;\n  border-color: #9e2222;\n}\n.Button-layout-outline.Button-color-reject .Button__SVG {\n  color: #9e2222;\n}\n\na.Button {\n  line-height: 1.3;\n  height: 42px;\n}");

    var cn = classname.withNaming({ e: '__', m: '-' })('Button');
    var Button = function (props) {
        var label = props.label, children = props.children, icon = props.icon, loading = props.loading, className = props.className, type = props.type, disabled = props.disabled, _a = props.color, color = _a === void 0 ? 'primary' : _a, _b = props.layout, layout = _b === void 0 ? 'solid' : _b, other = __rest(props, ["label", "children", "icon", "loading", "className", "type", "disabled", "color", "layout"]);
        var classes = (cn('', {
            loading: loading,
            color: color,
            layout: layout,
        }) + " " + className).trim();
        return (React__default.createElement("button", __assign({}, other, { type: type || 'button', disabled: loading || disabled, className: classes }),
            icon && React__default.createElement(SVG, { wrapper: "span", className: cn('icon') + " " + cn('SVG'), src: icon }),
            children,
            loading && (React__default.createElement(SVG, { wrapper: "span", className: cn('spinner') + " " + cn('SVG'), src: 'https://qeemtee-assets.s3-ap-southeast-1.amazonaws.com/component/spinner.svg' }))));
    };

    ___$insertStyle(".Modal {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n@media only screen and (min-width: 768px) {\n  .Modal {\n    width: 600px;\n    margin: 30px auto;\n  }\n}\n.Modal-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #333745;\n  background-color: rgba(55, 55, 55, 0.6);\n  height: 100%;\n  filter: alpha(opacity=50);\n  z-index: 1050;\n}\n.Modal-mask-hidden {\n  display: none;\n}\n.Modal-wrap {\n  position: fixed;\n  overflow: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.Modal-title {\n  margin: 0;\n  font-size: 18px;\n  line-height: 21px;\n  font-weight: bold;\n}\n.Modal-content {\n  position: relative;\n  background-color: #fff;\n  border: none;\n  border-radius: 6px 6px;\n  background-clip: padding-box;\n}\n.Modal-close {\n  border-radius: 50%;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  height: 32px;\n  overflow: hidden;\n  padding: 4px;\n  margin: 4px;\n  width: 32px;\n  z-index: 2;\n  transition: background-color 0.1s, color 0.1s;\n  transform: scale(1.3);\n  cursor: pointer;\n}\n.Modal-close:focus {\n  outline: 0;\n}\n.Modal-close:hover {\n  background-color: rgba(9, 30, 66, 0.13);\n}\n.Modal-close-x:after {\n  content: \"X\";\n}\n.Modal-header {\n  padding: 20px;\n  border-radius: 5px 5px 0 0;\n  background: #fff;\n  color: #333745;\n  border-bottom: 1px solid #d8d8d8;\n}\n.Modal-body {\n  padding: 20px;\n}\n.Modal-footer {\n  border-top: 1px solid #d8d8d8;\n  padding: 10px 20px;\n  text-align: right;\n  border-radius: 0 0 5px 5px;\n}\n.Modal-zoom-enter, .Modal-zoom-appear {\n  opacity: 0;\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n  animation-play-state: paused;\n}\n.Modal-zoom-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);\n  animation-play-state: paused;\n}\n.Modal-zoom-enter.Modal-zoom-enter-active, .Modal-zoom-appear.Modal-zoom-appear-active {\n  animation-name: DialogZoomIn;\n  animation-play-state: running;\n}\n.Modal-zoom-leave.Modal-zoom-leave-active {\n  animation-name: DialogZoomOut;\n  animation-play-state: running;\n}\n.Modal-fade-enter, .Modal-fade-appear {\n  opacity: 0;\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n}\n.Modal-fade-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n}\n.Modal-fade-enter.Modal-fade-enter-active, .Modal-fade-appear.Modal-fade-appear-active {\n  animation-name: DialogFadeIn;\n  animation-play-state: running;\n}\n.Modal-fade-leave.Modal-fade-leave-active {\n  animation-name: DialogFadeOut;\n  animation-play-state: running;\n}\n.Modal-center {\n  text-align: center;\n}\n.Modal-center::before {\n  display: inline-block;\n  width: 0;\n  height: 100%;\n  vertical-align: middle;\n  content: \"\";\n}\n.Modal-center .Modal {\n  top: 0;\n  display: inline-block;\n  text-align: left;\n  vertical-align: middle;\n}\n@media only screen and (max-width: 599px) {\n  .Modal-center .Modal {\n    flex: 1;\n  }\n}\n.Modal__footer button + button {\n  margin-left: 10px;\n}\n\n@keyframes DialogZoomIn {\n  0% {\n    opacity: 0;\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1, 1);\n  }\n}\n@keyframes DialogZoomOut {\n  0% {\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0, 0);\n  }\n}\n@keyframes DialogFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes DialogFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}");

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var EventBaseObject_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function returnFalse() {
      return false;
    }

    function returnTrue() {
      return true;
    }

    function EventBaseObject() {
      this.timeStamp = Date.now();
      this.target = undefined;
      this.currentTarget = undefined;
    }

    EventBaseObject.prototype = {
      isEventObject: 1,

      constructor: EventBaseObject,

      isDefaultPrevented: returnFalse,

      isPropagationStopped: returnFalse,

      isImmediatePropagationStopped: returnFalse,

      preventDefault: function preventDefault() {
        this.isDefaultPrevented = returnTrue;
      },

      stopPropagation: function stopPropagation() {
        this.isPropagationStopped = returnTrue;
      },

      stopImmediatePropagation: function stopImmediatePropagation() {
        this.isImmediatePropagationStopped = returnTrue;
        // fixed 1.2
        // call stopPropagation implicitly
        this.stopPropagation();
      },

      halt: function halt(immediate) {
        if (immediate) {
          this.stopImmediatePropagation();
        } else {
          this.stopPropagation();
        }
        this.preventDefault();
      }
    };

    exports["default"] = EventBaseObject;
    module.exports = exports["default"];
    });

    unwrapExports(EventBaseObject_1);

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
    	if (val === null || val === undefined) {
    		throw new TypeError('Object.assign cannot be called with null or undefined');
    	}

    	return Object(val);
    }

    function shouldUseNative() {
    	try {
    		if (!Object.assign) {
    			return false;
    		}

    		// Detect buggy property enumeration order in older V8 versions.

    		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
    		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
    		test1[5] = 'de';
    		if (Object.getOwnPropertyNames(test1)[0] === '5') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test2 = {};
    		for (var i = 0; i < 10; i++) {
    			test2['_' + String.fromCharCode(i)] = i;
    		}
    		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
    			return test2[n];
    		});
    		if (order2.join('') !== '0123456789') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test3 = {};
    		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
    			test3[letter] = letter;
    		});
    		if (Object.keys(Object.assign({}, test3)).join('') !==
    				'abcdefghijklmnopqrst') {
    			return false;
    		}

    		return true;
    	} catch (err) {
    		// We don't expect any of the above to throw, but better to be safe.
    		return false;
    	}
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    	var from;
    	var to = toObject(target);
    	var symbols;

    	for (var s = 1; s < arguments.length; s++) {
    		from = Object(arguments[s]);

    		for (var key in from) {
    			if (hasOwnProperty.call(from, key)) {
    				to[key] = from[key];
    			}
    		}

    		if (getOwnPropertySymbols) {
    			symbols = getOwnPropertySymbols(from);
    			for (var i = 0; i < symbols.length; i++) {
    				if (propIsEnumerable.call(from, symbols[i])) {
    					to[symbols[i]] = from[symbols[i]];
    				}
    			}
    		}
    	}

    	return to;
    };

    var EventObject = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



    var _EventBaseObject2 = _interopRequireDefault(EventBaseObject_1);



    var _objectAssign2 = _interopRequireDefault(objectAssign);

    var TRUE = true;
    var FALSE = false;
    var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

    function isNullOrUndefined(w) {
      return w === null || w === undefined;
    }

    var eventNormalizers = [{
      reg: /^key/,
      props: ['char', 'charCode', 'key', 'keyCode', 'which'],
      fix: function fix(event, nativeEvent) {
        if (isNullOrUndefined(event.which)) {
          event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
        }

        // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
        if (event.metaKey === undefined) {
          event.metaKey = event.ctrlKey;
        }
      }
    }, {
      reg: /^touch/,
      props: ['touches', 'changedTouches', 'targetTouches']
    }, {
      reg: /^hashchange$/,
      props: ['newURL', 'oldURL']
    }, {
      reg: /^gesturechange$/i,
      props: ['rotation', 'scale']
    }, {
      reg: /^(mousewheel|DOMMouseScroll)$/,
      props: [],
      fix: function fix(event, nativeEvent) {
        var deltaX = undefined;
        var deltaY = undefined;
        var delta = undefined;
        var wheelDelta = nativeEvent.wheelDelta;
        var axis = nativeEvent.axis;
        var wheelDeltaY = nativeEvent.wheelDeltaY;
        var wheelDeltaX = nativeEvent.wheelDeltaX;
        var detail = nativeEvent.detail;

        // ie/webkit
        if (wheelDelta) {
          delta = wheelDelta / 120;
        }

        // gecko
        if (detail) {
          // press control e.detail == 1 else e.detail == 3
          delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
        }

        // Gecko
        if (axis !== undefined) {
          if (axis === event.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = 0 - delta;
          } else if (axis === event.VERTICAL_AXIS) {
            deltaX = 0;
            deltaY = delta;
          }
        }

        // Webkit
        if (wheelDeltaY !== undefined) {
          deltaY = wheelDeltaY / 120;
        }
        if (wheelDeltaX !== undefined) {
          deltaX = -1 * wheelDeltaX / 120;
        }

        // 默认 deltaY (ie)
        if (!deltaX && !deltaY) {
          deltaY = delta;
        }

        if (deltaX !== undefined) {
          /**
           * deltaX of mousewheel event
           * @property deltaX
           * @member Event.DomEvent.Object
           */
          event.deltaX = deltaX;
        }

        if (deltaY !== undefined) {
          /**
           * deltaY of mousewheel event
           * @property deltaY
           * @member Event.DomEvent.Object
           */
          event.deltaY = deltaY;
        }

        if (delta !== undefined) {
          /**
           * delta of mousewheel event
           * @property delta
           * @member Event.DomEvent.Object
           */
          event.delta = delta;
        }
      }
    }, {
      reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
      props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
      fix: function fix(event, nativeEvent) {
        var eventDoc = undefined;
        var doc = undefined;
        var body = undefined;
        var target = event.target;
        var button = nativeEvent.button;

        // Calculate pageX/Y if missing and clientX/Y available
        if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
          eventDoc = target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;
          event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }

        // which for click: 1 === left; 2 === middle; 3 === right
        // do not use button
        if (!event.which && button !== undefined) {
          if (button & 1) {
            event.which = 1;
          } else if (button & 2) {
            event.which = 3;
          } else if (button & 4) {
            event.which = 2;
          } else {
            event.which = 0;
          }
        }

        // add relatedTarget, if necessary
        if (!event.relatedTarget && event.fromElement) {
          event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
        }

        return event;
      }
    }];

    function retTrue() {
      return TRUE;
    }

    function retFalse() {
      return FALSE;
    }

    function DomEventObject(nativeEvent) {
      var type = nativeEvent.type;

      var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

      _EventBaseObject2['default'].call(this);

      this.nativeEvent = nativeEvent;

      // in case dom event has been mark as default prevented by lower dom node
      var isDefaultPrevented = retFalse;
      if ('defaultPrevented' in nativeEvent) {
        isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
      } else if ('getPreventDefault' in nativeEvent) {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
        isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
      } else if ('returnValue' in nativeEvent) {
        isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
      }

      this.isDefaultPrevented = isDefaultPrevented;

      var fixFns = [];
      var fixFn = undefined;
      var l = undefined;
      var prop = undefined;
      var props = commonProps.concat();

      eventNormalizers.forEach(function (normalizer) {
        if (type.match(normalizer.reg)) {
          props = props.concat(normalizer.props);
          if (normalizer.fix) {
            fixFns.push(normalizer.fix);
          }
        }
      });

      l = props.length;

      // clone properties of the original event object
      while (l) {
        prop = props[--l];
        this[prop] = nativeEvent[prop];
      }

      // fix target property, if necessary
      if (!this.target && isNative) {
        this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
      }

      // check if target is a text node (safari)
      if (this.target && this.target.nodeType === 3) {
        this.target = this.target.parentNode;
      }

      l = fixFns.length;

      while (l) {
        fixFn = fixFns[--l];
        fixFn(this, nativeEvent);
      }

      this.timeStamp = nativeEvent.timeStamp || Date.now();
    }

    var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

    (0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
      constructor: DomEventObject,

      preventDefault: function preventDefault() {
        var e = this.nativeEvent;

        // if preventDefault exists run it on the original event
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // otherwise set the returnValue property of the original event to FALSE (IE)
          e.returnValue = FALSE;
        }

        EventBaseObjectProto.preventDefault.call(this);
      },

      stopPropagation: function stopPropagation() {
        var e = this.nativeEvent;

        // if stopPropagation exists run it on the original event
        if (e.stopPropagation) {
          e.stopPropagation();
        } else {
          // otherwise set the cancelBubble property of the original event to TRUE (IE)
          e.cancelBubble = TRUE;
        }

        EventBaseObjectProto.stopPropagation.call(this);
      }
    });

    exports['default'] = DomEventObject;
    module.exports = exports['default'];
    });

    unwrapExports(EventObject);

    var lib = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports['default'] = addEventListener;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



    var _EventObject2 = _interopRequireDefault(EventObject);

    function addEventListener(target, eventType, callback, option) {
      function wrapCallback(e) {
        var ne = new _EventObject2['default'](e);
        callback.call(target, ne);
      }

      if (target.addEventListener) {
        var _ret = (function () {
          var useCapture = false;
          if (typeof option === 'object') {
            useCapture = option.capture || false;
          } else if (typeof option === 'boolean') {
            useCapture = option;
          }

          target.addEventListener(eventType, wrapCallback, option || false);

          return {
            v: {
              remove: function remove() {
                target.removeEventListener(eventType, wrapCallback, useCapture);
              }
            }
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      } else if (target.attachEvent) {
        target.attachEvent('on' + eventType, wrapCallback);
        return {
          remove: function remove() {
            target.detachEvent('on' + eventType, wrapCallback);
          }
        };
      }
    }

    module.exports = exports['default'];
    });

    var addDOMEventListener = unwrapExports(lib);

    var addEventListener = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = addEventListenerWrap;

    var _addDomEventListener = _interopRequireDefault(lib);

    var _reactDom = _interopRequireDefault(ReactDOM__default);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function addEventListenerWrap(target, eventType, cb, option) {
      /* eslint camelcase: 2 */
      var callback = _reactDom.default.unstable_batchedUpdates ? function run(e) {
        _reactDom.default.unstable_batchedUpdates(cb, e);
      } : cb;
      return (0, _addDomEventListener.default)(target, eventType, callback, option);
    }
    });

    var addEventListener$1 = unwrapExports(addEventListener);

    var cn$1 = classname.withNaming({ e: '__', m: '-' })('Modal');
    var mousePosition;
    var getClickPosition = function (e) {
        mousePosition = {
            x: e.pageX,
            y: e.pageY,
        };
        setTimeout(function () { return (mousePosition = undefined); }, 100);
    };
    if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
        addEventListener$1(document.documentElement, 'click', getClickPosition);
    }
    var Modal = function (props) {
        var className = ((props.wrapClassName || '') + " " + (props.centered ? 'Modal-center' : '')).trim();
        var handleCancel = function (e) {
            var onCancel = props.onCancel;
            if (onCancel) {
                onCancel(e);
            }
        };
        var handleOk = function (e) {
            var onOk = props.onOk;
            if (onOk) {
                onOk(e);
            }
        };
        var renderFooter = function () {
            return (React__default.createElement("div", { className: cn$1('footer') },
                React__default.createElement(Button, { color: "reject", layout: "outline", className: cn$1('cancel'), onClick: handleCancel }, props.cancelText || 'Cancel'),
                React__default.createElement(Button, { color: "success", className: cn$1('ok'), onClick: handleOk }, props.okText || 'Confirm')));
        };
        var renderModal = function () {
            var footer = props.footer, visible = props.visible, centered = props.centered, _a = props.showFooter, showFooter = _a === void 0 ? true : _a, restProps = __rest(props, ["footer", "visible", "centered", "showFooter"]);
            return (React__default.createElement(Dialog, __assign({}, restProps, { footer: showFooter ? (footer === undefined ? renderFooter() : footer) : null, visible: visible, prefixCls: cn$1(), wrapClassName: className, mousePosition: mousePosition, onClose: handleCancel, animation: "zoom", maskAnimation: "fade" })));
        };
        return renderModal();
    };

    ___$insertStyle(".Table {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  line-height: 1.5;\n  list-style: none;\n  position: relative;\n  clear: both;\n  background: white;\n}\n.Table table {\n  width: 100%;\n  text-align: left;\n  border-radius: 4px 4px 0 0;\n  border-collapse: collapse;\n  border-spacing: 2px;\n  border-color: grey;\n}\n.Table table thead tr:first-child th {\n  padding: 16px 16px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  text-align: left;\n  background: #fafafa;\n  border-bottom: 1px solid #e8e8e8;\n}\n.Table table thead tr:first-child th:first-child {\n  border-top-left-radius: 4px;\n}\n.Table table tbody tr:hover td {\n  background: #e6f7ff;\n}\n.Table table tbody tr td {\n  padding: 16px 16px;\n  transition: all 0.3s, border 0s;\n  border-bottom: 1px solid #e8e8e8;\n}");

    var cn$2 = classname.withNaming({ e: '__', m: '-' })('Table');
    var Table = function (_a) {
        var head = _a.head, body = _a.body;
        return (React__default.createElement("div", { className: cn$2() },
            React__default.createElement("div", { className: cn$2('content') },
                React__default.createElement("div", { className: cn$2('body') },
                    React__default.createElement("table", null,
                        React__default.createElement("thead", { className: cn$2('head') },
                            React__default.createElement("tr", null, head.map(function (item, index) { return (React__default.createElement("th", { style: { minWidth: item.width ? item.width : '' }, key: index }, item.title)); }))),
                        React__default.createElement("tbody", { className: cn$2('body') }, body.map(function (row, index) { return (React__default.createElement("tr", { key: index }, row.map(function (cell, i) { return (React__default.createElement("td", { key: i }, cell)); }))); })))))));
    };

    ___$insertStyle(".Input {\n  text-align: left;\n  display: block;\n  width: 100%;\n  user-select: none;\n  position: relative;\n  color: #333745;\n  margin-bottom: 20px;\n}\n.Input__required {\n  color: red;\n}\n.Input__error {\n  color: red;\n}\n.Input__error-border {\n  border-color: red !important;\n}\n.Input__error-message {\n  font-size: 11px;\n  margin-top: 10px;\n  color: inherit;\n  text-transform: none;\n}\n.Input__error-message::first-letter {\n  text-transform: capitalize;\n}\n.Input__title {\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.Input__input {\n  position: relative;\n  margin-top: 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  z-index: 0;\n}\n.Input__input-icon {\n  padding-left: 0 !important;\n}\n.Input__input-border {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  transition: border-color 0.2s;\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  width: calc(100% + 2px);\n  height: calc(100% + 2px);\n  background: #fff;\n  z-index: -1;\n}\n.Input__input input {\n  appearance: none;\n  -webkit-appearance: none;\n  display: block;\n  width: 100%;\n  font-weight: 400;\n  color: #333745;\n  text-align: left;\n  text-overflow: ellipsis;\n  transition-property: color, border-color;\n  transition-duration: 0.2s;\n  padding: 8px 16px;\n  padding-right: 0;\n  flex: 1 1 auto;\n  background: transparent;\n  line-height: 1.5;\n}\n.Input__input input:disabled {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.Input__input input::placeholder {\n  color: rgba(0, 0, 0, 0.35);\n}\n+ .Input__input input:focus-border {\n  color: #333745;\n  border-color: #333745;\n}\n.Input__meta {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  line-height: 1.5;\n  padding: 13px 15px;\n  background: transparent;\n  flex: 0 0 auto;\n}\n.Input__meta > * {\n  margin-right: 10px;\n}\n.Input__meta > *:last-child {\n  margin-right: 0;\n}\n.Input__meta .SVG {\n  line-height: 0;\n  color: #333745;\n}\n.Input__meta .SVG svg {\n  width: 14px;\n  height: 14px;\n  fill: currentColor;\n}");

    var cn$3 = classname.withNaming({ e: '__', m: '--' })('Input');
    var Input = React__default.forwardRef(function (props, ref) {
        var _a = React.useState('text'), type = _a[0], setType = _a[1];
        var _b = React.useState(false), touched = _b[0], setTouched = _b[1];
        var submitted = props.submitted, label = props.label, className = props.className, value = props.value, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, error = props.error, disabled = props.disabled, placeholder = props.placeholder, children = props.children, name = props.name, icon = props.icon, required = props.required, otherProps = __rest(props, ["submitted", "label", "className", "value", "onChange", "onFocus", "onBlur", "error", "disabled", "placeholder", "children", "name", "icon", "required"]);
        React.useEffect(function () { return setType(otherProps.type || 'text'); }, []);
        var togglePassword = function () {
            setType(type === 'text' ? 'password' : 'text');
        };
        var _onChange = function (event) {
            if (onChange) {
                onChange(event);
            }
        };
        var _onFocus = function (event) {
            if (onFocus) {
                onFocus(event);
            }
        };
        var _onBlur = function (event) {
            setTouched(true);
            if (onBlur) {
                onBlur(event);
            }
        };
        var _value = (children && children.toString()) || value;
        var meta = { password: otherProps.type === 'password' };
        return (React__default.createElement("label", { className: "Input " + ((error && touched) || (submitted && error) ? cn$3('error') : ''), ref: ref },
            label && (React__default.createElement("span", { className: cn$3('title') },
                label,
                " ",
                required && React__default.createElement("span", { className: cn$3('required') }, "*"))),
            React__default.createElement("div", { className: cn$3('input') },
                icon && React__default.createElement("div", { className: cn$3('meta') }, icon),
                React__default.createElement("input", __assign({}, otherProps, { ref: ref, type: type, value: _value, onChange: _onChange, onFocus: _onFocus, onBlur: _onBlur, placeholder: placeholder, disabled: disabled, name: name, className: classNames(otherProps.className, { 'Input__input-icon': icon }) })),
                React__default.createElement("div", { className: cn$3('input-border') + " " + ((error && touched) || (submitted && error) ? cn$3('error-border') : '') }),
                meta.password && (React__default.createElement("div", { className: cn$3('meta') }, meta.password && (React__default.createElement(SVG, { onClick: togglePassword, className: "SVG", src: type === 'password'
                        ? 'https://qeemtee-assets.s3-ap-southeast-1.amazonaws.com/component/eye_open.svg'
                        : 'https://qeemtee-assets.s3-ap-southeast-1.amazonaws.com/component/eye_close.svg' }))))),
            (error && touched) || (submitted && error) ? (React__default.createElement("p", { className: cn$3('error-message') }, error)) : ('')));
    });

    ___$insertStyle("svg.css-19bqh2r {\n  display: inline-block !important;\n}");

    var TypeAhead = (function (_super) {
        __extends(TypeAhead, _super);
        function TypeAhead(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                optionsToPass: [],
                valuesToPass: [],
            };
            return _this;
        }
        TypeAhead.prototype.componentWillMount = function () {
            this.mapOptions(this.props.options);
            if (this.props.value) {
                this.mapValues(this.props.value);
            }
        };
        TypeAhead.prototype.mapOptions = function (options) {
            var _this = this;
            var tempOptions = [];
            options.forEach(function (option) {
                tempOptions.push({
                    label: option[_this.props.labelKey],
                    value: option[_this.props.valueKey],
                });
            });
            this.setState({ optionsToPass: tempOptions });
        };
        TypeAhead.prototype.mapValues = function (values) {
            var _this = this;
            if (!Array.isArray(values)) {
                this.setState({
                    valuesToPass: {
                        label: values[this.props.labelKey],
                        value: values[this.props.valueKey],
                    },
                });
                return;
            }
            var tempValues = [];
            values.forEach(function (value) {
                tempValues.push({
                    label: value[_this.props.labelKey],
                    value: value[_this.props.valueKey],
                });
            });
            this.setState({ valuesToPass: tempValues });
        };
        TypeAhead.prototype.emitChange = function (selected) {
            var _this = this;
            if (!this.props.isMulti) {
                var tempItem = {};
                tempItem[this.props.labelKey] = selected.label;
                tempItem[this.props.valueKey] = selected.value;
                this.props.onChange(tempItem);
                this.setState({ valuesToPass: selected });
                return;
            }
            if (!selected) {
                this.props.onChange([]);
                this.setState({ valuesToPass: selected });
                return;
            }
            var valuesToEmit = [];
            selected.forEach(function (item) {
                var tempItem = {};
                tempItem[_this.props.labelKey] = item.label;
                tempItem[_this.props.valueKey] = item.value;
                valuesToEmit.push(tempItem);
            });
            this.props.onChange(valuesToEmit);
            this.setState({ valuesToPass: selected });
        };
        TypeAhead.prototype.render = function () {
            var _this = this;
            return (React__default.createElement(Select, { isMulti: this.props.isMulti, value: this.state.valuesToPass, onChange: function (selected) {
                    _this.emitChange(selected);
                }, options: this.state.optionsToPass, classNamePrefix: "react-select", placeholder: this.props.placeholder }));
        };
        return TypeAhead;
    }(React.Component));

    ___$insertStyle(".error-react-phone-number-input {\n  border: 1px solid #9E2222 !important;\n  color: #9E2222 !important;\n}\n\n.react-phone-number-input-padding {\n  padding: 18px !important;\n  border-radius: 6px !important;\n}\n\n.react-phone-number-input__icon {\n  height: initial !important;\n  border: 0 !important;\n}");

    var PhoneNumber = (function (_super) {
        __extends(PhoneNumber, _super);
        function PhoneNumber(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                valueToPass: '',
            };
            return _this;
        }
        PhoneNumber.prototype.emitChange = function (selected) {
            this.props.onChange(selected);
        };
        PhoneNumber.prototype.componentWillMount = function () {
            if (this.props.value) {
                this.setState({ valueToPass: this.props.value });
            }
        };
        PhoneNumber.prototype.render = function () {
            var _this = this;
            var otherProps = __assign({}, this.props);
            delete otherProps.hasContact;
            return (React__default.createElement(PhoneInput__default, __assign({}, otherProps, { value: this.state.valueToPass, onChange: function (phone) { return _this.emitChange(phone); }, inputClassName: !this.props.hasContact
                    ? 'error-react-phone-number-input react-phone-number-input-padding'
                    : 'react-phone-number-input-padding', className: this.props.className ? 'react-input-custom-width' : '' })));
        };
        return PhoneNumber;
    }(React.Component));

    ___$insertStyle(".OverlayComponent {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 998;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.OverlayComponent__image img {\n  height: 350px;\n  margin-bottom: 30px;\n}\n.OverlayComponent__title {\n  font-size: 22px;\n  margin-bottom: 20px;\n}");

    var cn$4 = classname.withNaming({ e: '__', m: '-' })('OverlayComponent');
    var OverlayComponent = function (_a) {
        var _b = _a.className, className = _b === void 0 ? '' : _b, image = _a.image, title = _a.title, action = _a.action, actionText = _a.actionText;
        var classes = (cn$4('') + " " + className).trim();
        return (React__default.createElement("div", { className: classes },
            React__default.createElement("div", { className: cn$4('image') }, image && React__default.createElement("img", { src: image, alt: "img" })),
            title && React__default.createElement("p", { className: cn$4('title') }, title),
            action && actionText ? (React__default.createElement(Button, { color: "secondary", onClick: action }, actionText)) : null));
    };

    ___$insertStyle(".Checkbox {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.Checkbox__required {\n  color: red;\n}\n.Checkbox__disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.Checkbox > .label {\n  flex: 1 1 auto;\n  margin-left: 15px;\n}\n.Checkbox input {\n  visibility: hidden;\n  position: absolute;\n  opacity: 0;\n  width: 1px;\n  height: 1px;\n}\n.Checkbox input:checked + .checkbox > .icon {\n  opacity: 1;\n  transform: scale(1.1);\n}\n.Checkbox .checkbox {\n  flex: 0 0 auto;\n  position: relative;\n  width: 22px;\n  height: 22px;\n  border-radius: 2px;\n  user-select: none;\n  cursor: pointer;\n  transition-property: all;\n  transition-duration: 0.2s;\n  border: 2px solid #666666;\n}\n.Checkbox .checkbox > .icon {\n  display: inline-block;\n  transform: scale(0);\n  opacity: 0;\n  transition-property: opacity, transform;\n  transition-duration: 0.2s;\n  position: relative;\n  top: 2px;\n  left: 2px;\n}\n.Checkbox .checkbox > .icon > svg {\n  width: 13px;\n}\n.Checkbox-color-primary input:checked + .checkbox {\n  border-color: #f9285c;\n  background-color: #f9285c;\n}\n.Checkbox-color-secondary input:checked + .checkbox {\n  border-color: #8480b6;\n  background-color: #8480b6;\n}");

    var cn$5 = classname.withNaming({ e: '__', m: '-' })('Checkbox');
    var Checkbox = React__default.forwardRef(function (props, ref) {
        var label = props.label, _a = props.className, className = _a === void 0 ? '' : _a, value = props.value, disabled = props.disabled, checked = props.checked, onChange = props.onChange, children = props.children, _b = props.color, color = _b === void 0 ? 'primary' : _b, name = props.name, required = props.required, other = __rest(props, ["label", "className", "value", "disabled", "checked", "onChange", "children", "color", "name", "required"]);
        var classes = (cn$5('', {
            disabled: disabled,
            color: color,
        }) + " " + className).trim();
        return (React__default.createElement("div", { className: classes },
            React__default.createElement("label", null,
                React__default.createElement("input", __assign({}, other, { type: "checkbox", value: value, checked: checked, onChange: onChange, disabled: disabled, name: name, ref: ref })),
                React__default.createElement("div", { className: "checkbox" },
                    React__default.createElement(SVG, { className: "SVG icon", src: 'https://qeemtee-assets.s3-ap-southeast-1.amazonaws.com/component/success.svg' }))),
            (children || label) && (React__default.createElement("span", { className: "label" },
                children || label,
                required && React__default.createElement("span", { className: cn$5('required') }, "*")))));
    });

    ___$insertStyle("@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  margin-right: 5px;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: \"liga\";\n}\n\n.icon-container {\n  display: inherit;\n}");

    var Icon = function (_a) {
        var onClick = _a.onClick, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.containerClasses, containerClasses = _c === void 0 ? '' : _c, color = _a.color, icon = _a.icon, _d = _a.style, style = _d === void 0 ? {} : _d;
        return (React__default.createElement("span", { className: classNames('icon-container', containerClasses) },
            React__default.createElement("span", { onClick: function (e) {
                    onClick && onClick(e);
                }, style: __assign({ color: color }, style), className: classNames(className, 'material-icons') }, icon)));
    };

    ___$insertStyle(".Notification {\n  color: rgba(0, 0, 0, 0.65);\n  position: fixed;\n  z-index: 9999999999999;\n  width: 384px;\n  max-width: calc(100vw - 25px);\n  margin-right: 16px;\n}\n.Notification-topLeft, .Notification-bottomLeft {\n  margin-right: 0;\n  margin-left: 24px;\n}\n.Notification-topLeft .Notification-fade-enter.Notification-fade-enter-active,\n.Notification-topLeft .Notification-fade-appear.Notification-fade-appear-active, .Notification-bottomLeft .Notification-fade-enter.Notification-fade-enter-active,\n.Notification-bottomLeft .Notification-fade-appear.Notification-fade-appear-active {\n  animation-name: NotificationLeftFadeIn;\n}\n.Notification-close-icon {\n  font-size: 18px !important;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.45);\n}\n.Notification-close-icon:hover {\n  color: rgba(0, 0, 0, 0.67);\n}\n.Notification-notice {\n  position: relative;\n  margin-bottom: 16px;\n  padding: 16px 16px;\n  overflow: hidden;\n  line-height: 1.5;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.Notification-notice-message {\n  display: inline-block;\n  margin-bottom: 8px;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 16px;\n  line-height: 24px;\n}\n.Notification-notice-message-single-line-auto-margin {\n  display: block;\n  width: \"calc(${notification-width} - ${notification-padding-horizontal} * 2 - 24px - 48px - 100%)\";\n  max-width: 4px;\n  background-color: transparent;\n  pointer-events: none;\n}\n.Notification-notice-message-single-line-auto-margin::before {\n  display: block;\n  content: \"\";\n}\n.Notification-notice-description {\n  font-size: 14px;\n}\n.Notification-notice-closable .Notification-notice-message {\n  padding-right: 24px;\n}\n.Notification-notice-with-icon .Notification-notice-message {\n  margin-bottom: 4px;\n  margin-left: 35px;\n  font-size: 16px;\n}\n.Notification-notice-with-icon .Notification-notice-description {\n  margin-left: 35px;\n  font-size: 14px;\n}\n.Notification-notice-icon {\n  position: absolute;\n  margin-left: 4px;\n  font-size: 24px;\n  line-height: 24px;\n}\n.Notification-notice-close {\n  position: absolute;\n  top: 16px;\n  right: 22px;\n  outline: none;\n}\n.Notification-notice-btn {\n  float: right;\n  margin-top: 16px;\n}\n.Notification .notification-fade-effect {\n  animation-duration: 0.24s;\n  animation-timing-function: ease-in-out;\n  animation-fill-mode: both;\n}\n.Notification-fade-enter, .Notification-fade-appear {\n  opacity: 0;\n  animation-play-state: paused;\n}\n.Notification-fade-leave {\n  animation-duration: 0.2s;\n  animation-play-state: paused;\n}\n.Notification-fade-enter.Notification-fade-enter-active, .Notification-fade-appear.Notification-fade-appear-active {\n  animation-name: NotificationFadeIn;\n  animation-play-state: running;\n}\n.Notification-fade-leave.Notification-fade-leave-active {\n  animation-name: NotificationFadeOut;\n  animation-play-state: running;\n}\n\n@keyframes NotificationFadeIn {\n  0% {\n    left: 384px;\n    opacity: 0;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@keyframes NotificationLeftFadeIn {\n  0% {\n    right: 384px;\n    opacity: 0;\n  }\n  100% {\n    right: 0;\n    opacity: 1;\n  }\n}\n@keyframes NotificationFadeOut {\n  0% {\n    max-height: 150px;\n    margin-bottom: 16px;\n    padding-top: 16px 16px;\n    padding-bottom: 16px 16px;\n    opacity: 1;\n  }\n  100% {\n    max-height: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    opacity: 0;\n  }\n}");

    var notificationInstance = {};
    var defaultDuration = 4.5;
    var defaultTop = 24;
    var defaultBottom = 24;
    var defaultPlacement = 'topRight';
    var defaultGetContainer;
    function setNotificationConfig(options) {
        var duration = options.duration, placement = options.placement, bottom = options.bottom, top = options.top, getContainer = options.getContainer;
        if (duration !== undefined) {
            defaultDuration = duration;
        }
        if (placement !== undefined) {
            defaultPlacement = placement;
        }
        if (bottom !== undefined) {
            defaultBottom = bottom;
        }
        if (top !== undefined) {
            defaultTop = top;
        }
        if (getContainer !== undefined) {
            defaultGetContainer = getContainer;
        }
    }
    function getPlacementStyle(placement, top, bottom) {
        if (top === void 0) { top = defaultTop; }
        if (bottom === void 0) { bottom = defaultBottom; }
        var style;
        switch (placement) {
            case 'topLeft':
                style = {
                    left: 0,
                    top: top,
                    bottom: 'auto',
                };
                break;
            case 'topRight':
                style = {
                    right: 0,
                    top: top,
                    bottom: 'auto',
                };
                break;
            case 'bottomLeft':
                style = {
                    left: 0,
                    top: 'auto',
                    bottom: bottom,
                };
                break;
            default:
                style = {
                    right: 0,
                    top: 'auto',
                    bottom: bottom,
                };
                break;
        }
        return style;
    }
    function getNotificationInstance(_a, callback) {
        var prefixCls = _a.prefixCls, _b = _a.placement, placement = _b === void 0 ? defaultPlacement : _b, _c = _a.getContainer, getContainer = _c === void 0 ? defaultGetContainer : _c, top = _a.top, bottom = _a.bottom;
        var cacheKey = prefixCls + "-" + placement;
        if (notificationInstance[cacheKey]) {
            callback(notificationInstance[cacheKey]);
            return;
        }
        Notification.newInstance({
            prefixCls: prefixCls,
            className: prefixCls + "-" + placement,
            style: getPlacementStyle(placement, top, bottom),
            getContainer: getContainer,
            closeIcon: React.createElement(Icon, { className: "Notification-close-icon", icon: "close" }),
        }, function (notification) {
            notificationInstance[cacheKey] = notification;
            callback(notification);
        });
    }
    var typeToIcon = {
        success: { icon: 'check', color: '#28a745' },
        info: { icon: 'info', color: '#17a2b8' },
        error: { icon: 'error_outline', color: '#dc3545' },
        warning: { icon: 'warning', color: '#ffc107' },
    };
    function notice(args) {
        var outerPrefixCls = 'Notification';
        var prefixCls = outerPrefixCls + "-notice";
        var duration = args.duration === undefined ? defaultDuration : args.duration;
        var iconNode = null;
        if (args.icon) {
            iconNode = React.createElement("span", { className: prefixCls + "-icon" }, args.icon);
        }
        else if (args.type) {
            var iconType = typeToIcon[args.type];
            iconNode = React.createElement(Icon, { className: prefixCls + "-icon", icon: iconType.icon, color: iconType.color });
        }
        var autoMarginTag = !args.description && iconNode ? (React.createElement("span", { className: prefixCls + "-message-single-line-auto-margin" })) : null;
        var placement = args.placement, top = args.top, bottom = args.bottom, getContainer = args.getContainer;
        getNotificationInstance({
            prefixCls: outerPrefixCls,
            placement: placement,
            top: top,
            bottom: bottom,
            getContainer: getContainer,
        }, function (notification) {
            notification.notice({
                content: (React.createElement("div", { className: iconNode ? prefixCls + "-with-icon" : '' },
                    iconNode,
                    React.createElement("div", { className: prefixCls + "-message" },
                        autoMarginTag,
                        args.message),
                    React.createElement("div", { className: prefixCls + "-description" }, args.description),
                    args.btn ? React.createElement("span", { className: prefixCls + "-btn" }, args.btn) : null)),
                duration: duration,
                closable: true,
                onClose: args.onClose,
                onClick: args.onClick,
                key: args.key,
                style: args.style || {},
                className: args.className,
            });
        });
    }
    var api = {
        open: notice,
        close: function (key) {
            Object.keys(notificationInstance).forEach(function (cacheKey) {
                return notificationInstance[cacheKey].removeNotice(key);
            });
        },
        config: setNotificationConfig,
        destroy: function () {
            Object.keys(notificationInstance).forEach(function (cacheKey) {
                notificationInstance[cacheKey].destroy();
                delete notificationInstance[cacheKey];
            });
        },
    };
    ['success', 'info', 'warning', 'error'].forEach(function (type) {
        api[type] = function (args) {
            return api.open(__assign(__assign({}, args), { type: type }));
        };
    });
    api.warn = api.warning;

    ___$insertStyle(".Switch {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.Switch__required {\n  color: red;\n}\n.Switch-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.Switch > .label {\n  flex: 1 1 auto;\n  margin-left: 15px;\n}\n.Switch .checkbox {\n  flex: 0 0 auto;\n  position: relative;\n  user-select: none;\n  cursor: pointer;\n}\n.Switch .checkbox > .switch {\n  position: relative;\n  width: 45px;\n  height: 24px;\n  border-radius: 16px;\n  border: 2px solid #666666;\n  background-color: transparent;\n  transition-property: background-color, border-color;\n  transition-duration: 0.2s;\n}\n.Switch .checkbox > .switch:after {\n  content: \"\";\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #666666;\n  position: relative;\n  top: 2px;\n  left: 3px;\n  transition-property: background-color, border-color, transform;\n  transition-duration: 0.2s;\n}\n.Switch .checkbox > input {\n  visibility: hidden;\n  position: absolute;\n  opacity: 0;\n  width: 1px;\n  height: 1px;\n}\n.Switch .checkbox > input:checked + .switch {\n  background-color: #f9285c;\n  border-color: #f9285c;\n}\n.Switch .checkbox > input:checked + .switch:after {\n  border-color: #fff;\n  background-color: #fff;\n  transform: translateX(20px);\n}\n.Switch-color-primary input:checked + .switch {\n  background-color: #f9285c !important;\n  border-color: #f9285c !important;\n}\n.Switch-color-primary input:checked + .switch:after {\n  border-color: #fff;\n  background-color: #fff;\n  transform: translateX(20px);\n}\n.Switch-color-secondary input:checked + .switch {\n  background-color: #8480b6 !important;\n  border-color: #8480b6 !important;\n}\n.Switch-color-secondary input:checked + .switch:after {\n  border-color: #fff;\n  background-color: #fff;\n  transform: translateX(20px);\n}");

    var cn$6 = classname.withNaming({ e: '__', m: '-' })('Switch');
    var Switch = React__default.forwardRef(function (props, ref) {
        var label = props.label, _a = props.className, className = _a === void 0 ? '' : _a, value = props.value, disabled = props.disabled, checked = props.checked, onChange = props.onChange, children = props.children, _b = props.color, color = _b === void 0 ? 'primary' : _b, name = props.name, required = props.required, other = __rest(props, ["label", "className", "value", "disabled", "checked", "onChange", "children", "color", "name", "required"]);
        var classes = (cn$6('', {
            disabled: disabled,
            color: color,
        }) + " " + className).trim();
        return (React__default.createElement("div", { className: classes },
            React__default.createElement("label", null,
                React__default.createElement("div", { className: "checkbox" },
                    React__default.createElement("input", __assign({}, other, { type: "checkbox", value: value, checked: checked, onChange: onChange, disabled: disabled, name: name, ref: ref })),
                    React__default.createElement("div", { className: "switch" }))),
            (children || label) && (React__default.createElement("span", { className: "label" },
                children || label,
                " ",
                required && React__default.createElement("span", { className: cn$6('required') }, "*")))));
    });

    ___$insertStyle(".Collapse {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: #333745;\n  font-size: 15px;\n  font-variant: font-variant-base;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: \"tnum\";\n  background-color: #fafafa;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  border-radius: 4px;\n}\n.Collapse > .Collapse-item {\n  border-bottom: 1px solid #d9d9d9;\n}\n.Collapse > .Collapse-item:last-child, .Collapse > .Collapse-item:last-child > .Collapse-header {\n  border-radius: 0 0 4px 4px;\n}\n.Collapse > .Collapse-item > .Collapse-header {\n  position: relative;\n  padding: 12px 16px;\n  padding-left: 40px;\n  color: #333745;\n  line-height: 22px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.Collapse > .Collapse-item > .Collapse-header .Collapse-arrow {\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  display: inline-block;\n  font-size: 20px;\n  transform: translateY(-50%);\n}\n.Collapse > .Collapse-item > .Collapse-header .Collapse-arrow svg {\n  transition: transform 0.24s;\n}\n.Collapse > .Collapse-item > .Collapse-header .Collapse-extra {\n  float: right;\n}\n.Collapse > .Collapse-item > .Collapse-header:focus {\n  outline: none;\n}\n.Collapse > .Collapse-item.Collapse-no-arrow > .Collapse-header {\n  padding-left: 12px;\n}\n.Collapse-icon-position-right > .Collapse-item > .Collapse-header {\n  padding: 12px 16px;\n  padding-right: 40px;\n}\n.Collapse-icon-position-right > .Collapse-item > .Collapse-header .Collapse-arrow {\n  right: 16px;\n  left: initial;\n}\n.Collapse-anim-active {\n  transition: height 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.Collapse-content {\n  overflow: hidden;\n  color: #333745;\n  background-color: #fff;\n  border-top: 1px solid #d9d9d9;\n}\n.Collapse-content > .Collapse-content-box {\n  padding: 16px;\n}\n.Collapse-content-inactive {\n  display: none;\n}\n.Collapse-item:last-child > .Collapse-content {\n  border-radius: 0 0 4px 4px;\n}\n.Collapse-borderless {\n  background-color: #fff;\n  border: 0;\n}\n.Collapse-borderless > .Collapse-item {\n  border-bottom: 1px solid #d9d9d9;\n}\n.Collapse-borderless > .Collapse-item:last-child, .Collapse-borderless > .Collapse-item:last-child .Collapse-header {\n  border-radius: 0;\n}\n.Collapse-borderless > .Collapse-item > .Collapse-content {\n  background-color: transparent;\n  border-top: 0;\n}\n.Collapse-borderless > .Collapse-item > .Collapse-content > .Collapse-content-box {\n  padding-top: 4px;\n}\n.Collapse .Collapse-item-disabled > .Collapse-header, .Collapse .Collapse-item-disabled > .Collapse-header > .arrow {\n  color: #b3b3b3;\n  cursor: not-allowed;\n}");

    var CollapsePanel = (function (_super) {
        __extends(CollapsePanel, _super);
        function CollapsePanel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.renderCollapsePanel = function () {
                var _a;
                var _b = _this.props, _c = _b.className, className = _c === void 0 ? '' : _c, _d = _b.showArrow, showArrow = _d === void 0 ? true : _d;
                var collapsePanelClassName = classNames((_a = {},
                    _a['Collapse-no-arrow'] = !showArrow,
                    _a), className);
                return React.createElement(RcCollapse.Panel, __assign({}, _this.props, { className: collapsePanelClassName }));
            };
            return _this;
        }
        CollapsePanel.prototype.render = function () {
            return React.createElement(React.Fragment, null, this.renderCollapsePanel());
        };
        return CollapsePanel;
    }(React.Component));

    var Collapse = (function (_super) {
        __extends(Collapse, _super);
        function Collapse() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.renderExpandIcon = function (panelProps) {
                if (panelProps === void 0) { panelProps = {}; }
                var expandIcon = _this.props.expandIcon;
                var icon = expandIcon ? (expandIcon(panelProps)) : (React__default.createElement(Icon, { icon: "keyboard_arrow_right", style: {
                        transform: panelProps.isActive ? 'rotate(90deg)' : undefined,
                        top: panelProps.isActive ? 'unset' : '50%',
                    } }));
                return React__default.isValidElement(icon)
                    ? React__default.cloneElement(icon, {
                        className: "Collapse-arrow",
                    })
                    : icon;
            };
            _this.renderCollapse = function () {
                var _a;
                var _b = _this.props, _c = _b.className, className = _c === void 0 ? '' : _c, bordered = _b.bordered, expandIconPosition = _b.expandIconPosition;
                var collapseClassName = classNames((_a = {},
                    _a['Collapse-borderless'] = !bordered,
                    _a["Collapse-icon-position-" + expandIconPosition] = true,
                    _a), className);
                return (React__default.createElement(RcCollapse, __assign({}, _this.props, { prefixCls: "Collapse", expandIcon: function (panelProps) { return _this.renderExpandIcon(panelProps); }, className: collapseClassName })));
            };
            return _this;
        }
        Collapse.prototype.render = function () {
            return this.renderCollapse();
        };
        Collapse.Panel = CollapsePanel;
        Collapse.defaultProps = {
            bordered: true,
            expandIconPosition: 'left',
        };
        return Collapse;
    }(React.Component));

    ___$insertStyle(".Currency {\n  margin: 0 !important;\n}\n.Currency > .symbol {\n  color: currentColor;\n  opacity: 1;\n}\n.Currency > .symbol.size {\n  font-size: 0.7rem;\n}\n.Currency > .symbol.left {\n  margin-right: 0.3em;\n}\n.Currency > .symbol.right {\n  margin-left: 0.3em;\n}");

    ___$insertStyle(".Number {\n  margin: 0 !important;\n}\n.Number > .value {\n  color: currentColor;\n}\n.Number > .decimals {\n  color: currentColor;\n  opacity: 0.6;\n  font-size: 0.9em;\n}");

    function round(input, precision) {
        var _a, _b;
        var _c = input.toString().split('.'), number = _c[0], exponent = _c[1];
        if (exponent) {
            input = "0." + exponent;
        }
        var _d = (input + "e").split('e'), unit = _d[0], mantissa = _d[1];
        var rounded = Math.round(+(unit + "e" + (Number(mantissa) + precision)));
        _a = (rounded + "e").split('e'), unit = _a[0], mantissa = _a[1];
        rounded = Number(unit + "e" + (Number(mantissa) - precision));
        if (exponent) {
            _b = rounded.toString().split('.'), unit = _b[0], mantissa = _b[1];
            rounded = "" + (Number(unit) >= 1 ? Number(number) + Number(unit) : number) + (precision > 0 ? '.' : '') + (mantissa ||
                Array(precision)
                    .fill('0')
                    .join(''));
        }
        else {
            rounded += "." + Array(precision)
                .fill('0')
                .join('');
        }
        return rounded;
    }
    var _Number = React__default.forwardRef(function (props, ref) {
        var className = props.className, value = props.value, fixed = props.fixed, delimiter = props.delimiter, other = __rest(props, ["className", "value", "fixed", "delimiter"]);
        var number = typeof fixed === 'number' ? round(value, fixed) : value;
        var classes = classNames('Number', className);
        var _a = String(number).split('.'), unit = _a[0], mantissa = _a[1];
        return (React__default.createElement("span", __assign({ className: classes }, other, { ref: ref }),
            React__default.createElement("span", { className: "value" }, numWithCommas(unit, (delimiter && delimiter.thousands) || ',')),
            mantissa && fixed !== 0 && (React__default.createElement("span", { className: "decimals" },
                (delimiter && delimiter.decimals) || '.',
                mantissa))));
    });

    var Currency = React__default.forwardRef(function (props, ref) {
        var className = props.className, symbol = props.symbol, symbolClassName = props.symbolClassName, value = props.value, fixed = props.fixed, side = props.side, delimiter = props.delimiter, other = __rest(props, ["className", "symbol", "symbolClassName", "value", "fixed", "side", "delimiter"]);
        var classes = classNames('Currency', className);
        var symbolClasses = symbolClassName
            ? classNames('symbol right ', symbolClassName)
            : "symbol right size";
        var _symbol = symbol || '฿';
        return (React__default.createElement("span", { className: classes },
            side === 'left' && React__default.createElement("span", { className: "symbol left" }, _symbol),
            React__default.createElement(_Number, __assign({}, other, { value: value, fixed: fixed, delimiter: delimiter, ref: ref })),
            side !== 'left' && React__default.createElement("span", { className: symbolClasses }, _symbol)));
    });

    var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math
      ? window : typeof self != 'undefined' && self.Math == Math ? self
      // eslint-disable-next-line no-new-func
      : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    });

    var _core = createCommonjsModule(function (module) {
    var core = module.exports = { version: '2.6.11' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    });
    var _core_1 = _core.version;

    var _aFunction = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };

    // optional / simple context binding

    var _ctx = function (fn, that, length) {
      _aFunction(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 1: return function (a) {
          return fn.call(that, a);
        };
        case 2: return function (a, b) {
          return fn.call(that, a, b);
        };
        case 3: return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
      }
      return function (/* ...args */) {
        return fn.apply(that, arguments);
      };
    };

    var _isObject = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };

    var _anObject = function (it) {
      if (!_isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };

    var _fails = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };

    // Thank's IE8 for his funny defineProperty
    var _descriptors = !_fails(function () {
      return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
    });

    var document$1 = _global.document;
    // typeof document.createElement is 'object' in old IE
    var is = _isObject(document$1) && _isObject(document$1.createElement);
    var _domCreate = function (it) {
      return is ? document$1.createElement(it) : {};
    };

    var _ie8DomDefine = !_descriptors && !_fails(function () {
      return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
    });

    // 7.1.1 ToPrimitive(input [, PreferredType])

    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    var _toPrimitive = function (it, S) {
      if (!_isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };

    var dP = Object.defineProperty;

    var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      _anObject(O);
      P = _toPrimitive(P, true);
      _anObject(Attributes);
      if (_ie8DomDefine) try {
        return dP(O, P, Attributes);
      } catch (e) { /* empty */ }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

    var _objectDp = {
    	f: f
    };

    var _propertyDesc = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };

    var _hide = _descriptors ? function (object, key, value) {
      return _objectDp.f(object, key, _propertyDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };

    var hasOwnProperty$1 = {}.hasOwnProperty;
    var _has = function (it, key) {
      return hasOwnProperty$1.call(it, key);
    };

    var PROTOTYPE = 'prototype';

    var $export = function (type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var IS_WRAP = type & $export.W;
      var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
      var expProto = exports[PROTOTYPE];
      var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
      var key, own, out;
      if (IS_GLOBAL) source = name;
      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        if (own && _has(exports, key)) continue;
        // export native or passed
        out = own ? target[key] : source[key];
        // prevent global pollution for namespaces
        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
        // bind timers to global for call from export context
        : IS_BIND && own ? _ctx(out, _global)
        // wrap global constructors for prevent change them in library
        : IS_WRAP && target[key] == out ? (function (C) {
          var F = function (a, b, c) {
            if (this instanceof C) {
              switch (arguments.length) {
                case 0: return new C();
                case 1: return new C(a);
                case 2: return new C(a, b);
              } return new C(a, b, c);
            } return C.apply(this, arguments);
          };
          F[PROTOTYPE] = C[PROTOTYPE];
          return F;
        // make static versions for prototype methods
        })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
        if (IS_PROTO) {
          (exports.virtual || (exports.virtual = {}))[key] = out;
          // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
          if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
        }
      }
    };
    // type bitmap
    $export.F = 1;   // forced
    $export.G = 2;   // global
    $export.S = 4;   // static
    $export.P = 8;   // proto
    $export.B = 16;  // bind
    $export.W = 32;  // wrap
    $export.U = 64;  // safe
    $export.R = 128; // real proto method for `library`
    var _export = $export;

    var toString = {}.toString;

    var _cof = function (it) {
      return toString.call(it).slice(8, -1);
    };

    // fallback for non-array-like ES3 and non-enumerable old V8 strings

    // eslint-disable-next-line no-prototype-builtins
    var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return _cof(it) == 'String' ? it.split('') : Object(it);
    };

    // 7.2.1 RequireObjectCoercible(argument)
    var _defined = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };

    // to indexed object, toObject with fallback for non-array-like ES3 strings


    var _toIobject = function (it) {
      return _iobject(_defined(it));
    };

    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;
    var _toInteger = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };

    // 7.1.15 ToLength

    var min = Math.min;
    var _toLength = function (it) {
      return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };

    var max = Math.max;
    var min$1 = Math.min;
    var _toAbsoluteIndex = function (index, length) {
      index = _toInteger(index);
      return index < 0 ? max(index + length, 0) : min$1(index, length);
    };

    // false -> Array#indexOf
    // true  -> Array#includes



    var _arrayIncludes = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = _toIobject($this);
        var length = _toLength(O.length);
        var index = _toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        } return !IS_INCLUDES && -1;
      };
    };

    var _library = true;

    var _shared = createCommonjsModule(function (module) {
    var SHARED = '__core-js_shared__';
    var store = _global[SHARED] || (_global[SHARED] = {});

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: _core.version,
      mode:  'pure' ,
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
    });

    var id = 0;
    var px = Math.random();
    var _uid = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };

    var shared = _shared('keys');

    var _sharedKey = function (key) {
      return shared[key] || (shared[key] = _uid(key));
    };

    var arrayIndexOf = _arrayIncludes(false);
    var IE_PROTO = _sharedKey('IE_PROTO');

    var _objectKeysInternal = function (object, names) {
      var O = _toIobject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
      // Don't enum bug & hidden keys
      while (names.length > i) if (_has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
      return result;
    };

    // IE 8- don't enum bug keys
    var _enumBugKeys = (
      'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
    ).split(',');

    // 19.1.2.14 / 15.2.3.14 Object.keys(O)



    var _objectKeys = Object.keys || function keys(O) {
      return _objectKeysInternal(O, _enumBugKeys);
    };

    var f$1 = Object.getOwnPropertySymbols;

    var _objectGops = {
    	f: f$1
    };

    var f$2 = {}.propertyIsEnumerable;

    var _objectPie = {
    	f: f$2
    };

    // 7.1.13 ToObject(argument)

    var _toObject = function (it) {
      return Object(_defined(it));
    };

    // 19.1.2.1 Object.assign(target, source, ...)






    var $assign = Object.assign;

    // should work with symbols and should have deterministic property order (V8 bug)
    var _objectAssign = !$assign || _fails(function () {
      var A = {};
      var B = {};
      // eslint-disable-next-line no-undef
      var S = Symbol();
      var K = 'abcdefghijklmnopqrst';
      A[S] = 7;
      K.split('').forEach(function (k) { B[k] = k; });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
    }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
      var T = _toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = _objectGops.f;
      var isEnum = _objectPie.f;
      while (aLen > index) {
        var S = _iobject(arguments[index++]);
        var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys[j++];
          if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
        }
      } return T;
    } : $assign;

    // 19.1.3.1 Object.assign(target, source)


    _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

    var assign = _core.Object.assign;

    var assign$1 = createCommonjsModule(function (module) {
    module.exports = { "default": assign, __esModule: true };
    });

    unwrapExports(assign$1);

    var _extends = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _assign2 = _interopRequireDefault(assign$1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = _assign2.default || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };
    });

    var _extends$1 = unwrapExports(_extends);

    var classCallCheck = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    exports.default = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    });

    var _classCallCheck = unwrapExports(classCallCheck);

    // true  -> String#at
    // false -> String#codePointAt
    var _stringAt = function (TO_STRING) {
      return function (that, pos) {
        var s = String(_defined(that));
        var i = _toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
          ? TO_STRING ? s.charAt(i) : a
          : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
      };
    };

    var _redefine = _hide;

    var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
      _anObject(O);
      var keys = _objectKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
      return O;
    };

    var document$2 = _global.document;
    var _html = document$2 && document$2.documentElement;

    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



    var IE_PROTO$1 = _sharedKey('IE_PROTO');
    var Empty = function () { /* empty */ };
    var PROTOTYPE$1 = 'prototype';

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var createDict = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = _domCreate('iframe');
      var i = _enumBugKeys.length;
      var lt = '<';
      var gt = '>';
      var iframeDocument;
      iframe.style.display = 'none';
      _html.appendChild(iframe);
      iframe.src = 'javascript:'; // eslint-disable-line no-script-url
      // createDict = iframe.contentWindow.Object;
      // html.removeChild(iframe);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
      iframeDocument.close();
      createDict = iframeDocument.F;
      while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
      return createDict();
    };

    var _objectCreate = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        Empty[PROTOTYPE$1] = _anObject(O);
        result = new Empty();
        Empty[PROTOTYPE$1] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO$1] = O;
      } else result = createDict();
      return Properties === undefined ? result : _objectDps(result, Properties);
    };

    var _wks = createCommonjsModule(function (module) {
    var store = _shared('wks');

    var Symbol = _global.Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] =
        USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
    };

    $exports.store = store;
    });

    var def = _objectDp.f;

    var TAG = _wks('toStringTag');

    var _setToStringTag = function (it, tag, stat) {
      if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
    };

    var IteratorPrototype = {};

    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

    var _iterCreate = function (Constructor, NAME, next) {
      Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
      _setToStringTag(Constructor, NAME + ' Iterator');
    };

    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


    var IE_PROTO$2 = _sharedKey('IE_PROTO');
    var ObjectProto = Object.prototype;

    var _objectGpo = Object.getPrototypeOf || function (O) {
      O = _toObject(O);
      if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      } return O instanceof Object ? ObjectProto : null;
    };

    var ITERATOR = _wks('iterator');
    var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
    var FF_ITERATOR = '@@iterator';
    var KEYS = 'keys';
    var VALUES = 'values';

    var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      _iterCreate(Constructor, NAME, next);
      var getMethod = function (kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch (kind) {
          case KEYS: return function keys() { return new Constructor(this, kind); };
          case VALUES: return function values() { return new Constructor(this, kind); };
        } return function entries() { return new Constructor(this, kind); };
      };
      var TAG = NAME + ' Iterator';
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
      var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
      var methods, key, IteratorPrototype;
      // Fix native
      if ($anyNative) {
        IteratorPrototype = _objectGpo($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          // Set @@toStringTag to native iterators
          _setToStringTag(IteratorPrototype, TAG, true);
        }
      }
      // fix Array#{values, @@iterator}.name in V8 / FF
      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() { return $native.call(this); };
      }
      // Define iterator
      if (( FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        _hide(proto, ITERATOR, $default);
      }
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED) for (key in methods) {
          if (!(key in proto)) _redefine(proto, key, methods[key]);
        } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };

    var $at = _stringAt(true);

    // 21.1.3.27 String.prototype[@@iterator]()
    _iterDefine(String, 'String', function (iterated) {
      this._t = String(iterated); // target
      this._i = 0;                // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
    }, function () {
      var O = this._t;
      var index = this._i;
      var point;
      if (index >= O.length) return { value: undefined, done: true };
      point = $at(O, index);
      this._i += point.length;
      return { value: point, done: false };
    });

    var _iterStep = function (done, value) {
      return { value: value, done: !!done };
    };

    // 22.1.3.4 Array.prototype.entries()
    // 22.1.3.13 Array.prototype.keys()
    // 22.1.3.29 Array.prototype.values()
    // 22.1.3.30 Array.prototype[@@iterator]()
    var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
      this._t = _toIobject(iterated); // target
      this._i = 0;                   // next index
      this._k = kind;                // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
    }, function () {
      var O = this._t;
      var kind = this._k;
      var index = this._i++;
      if (!O || index >= O.length) {
        this._t = undefined;
        return _iterStep(1);
      }
      if (kind == 'keys') return _iterStep(0, index);
      if (kind == 'values') return _iterStep(0, O[index]);
      return _iterStep(0, [index, O[index]]);
    }, 'values');

    var TO_STRING_TAG = _wks('toStringTag');

    var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
      'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
      'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
      'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
      'TextTrackList,TouchList').split(',');

    for (var i = 0; i < DOMIterables.length; i++) {
      var NAME = DOMIterables[i];
      var Collection = _global[NAME];
      var proto = Collection && Collection.prototype;
      if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
    }

    var f$3 = _wks;

    var _wksExt = {
    	f: f$3
    };

    var iterator = _wksExt.f('iterator');

    var iterator$1 = createCommonjsModule(function (module) {
    module.exports = { "default": iterator, __esModule: true };
    });

    unwrapExports(iterator$1);

    var _meta = createCommonjsModule(function (module) {
    var META = _uid('meta');


    var setDesc = _objectDp.f;
    var id = 0;
    var isExtensible = Object.isExtensible || function () {
      return true;
    };
    var FREEZE = !_fails(function () {
      return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function (it) {
      setDesc(it, META, { value: {
        i: 'O' + ++id, // object ID
        w: {}          // weak collections IDs
      } });
    };
    var fastKey = function (it, create) {
      // return primitive with prefix
      if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMeta(it);
      // return object ID
      } return it[META].i;
    };
    var getWeak = function (it, create) {
      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMeta(it);
      // return hash weak collections IDs
      } return it[META].w;
    };
    // add metadata on freeze-family methods calling
    var onFreeze = function (it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
      return it;
    };
    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
    });
    var _meta_1 = _meta.KEY;
    var _meta_2 = _meta.NEED;
    var _meta_3 = _meta.fastKey;
    var _meta_4 = _meta.getWeak;
    var _meta_5 = _meta.onFreeze;

    var defineProperty = _objectDp.f;
    var _wksDefine = function (name) {
      var $Symbol = _core.Symbol || (_core.Symbol =  {} );
      if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
    };

    // all enumerable object keys, includes symbols



    var _enumKeys = function (it) {
      var result = _objectKeys(it);
      var getSymbols = _objectGops.f;
      if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = _objectPie.f;
        var i = 0;
        var key;
        while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
      } return result;
    };

    // 7.2.2 IsArray(argument)

    var _isArray = Array.isArray || function isArray(arg) {
      return _cof(arg) == 'Array';
    };

    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

    var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

    var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return _objectKeysInternal(O, hiddenKeys);
    };

    var _objectGopn = {
    	f: f$4
    };

    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

    var gOPN = _objectGopn.f;
    var toString$1 = {}.toString;

    var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window) : [];

    var getWindowNames = function (it) {
      try {
        return gOPN(it);
      } catch (e) {
        return windowNames.slice();
      }
    };

    var f$5 = function getOwnPropertyNames(it) {
      return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
    };

    var _objectGopnExt = {
    	f: f$5
    };

    var gOPD = Object.getOwnPropertyDescriptor;

    var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = _toIobject(O);
      P = _toPrimitive(P, true);
      if (_ie8DomDefine) try {
        return gOPD(O, P);
      } catch (e) { /* empty */ }
      if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
    };

    var _objectGopd = {
    	f: f$6
    };

    // ECMAScript 6 symbols shim





    var META = _meta.KEY;





















    var gOPD$1 = _objectGopd.f;
    var dP$1 = _objectDp.f;
    var gOPN$1 = _objectGopnExt.f;
    var $Symbol = _global.Symbol;
    var $JSON = _global.JSON;
    var _stringify = $JSON && $JSON.stringify;
    var PROTOTYPE$2 = 'prototype';
    var HIDDEN = _wks('_hidden');
    var TO_PRIMITIVE = _wks('toPrimitive');
    var isEnum = {}.propertyIsEnumerable;
    var SymbolRegistry = _shared('symbol-registry');
    var AllSymbols = _shared('symbols');
    var OPSymbols = _shared('op-symbols');
    var ObjectProto$1 = Object[PROTOTYPE$2];
    var USE_NATIVE = typeof $Symbol == 'function' && !!_objectGops.f;
    var QObject = _global.QObject;
    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var setSymbolDesc = _descriptors && _fails(function () {
      return _objectCreate(dP$1({}, 'a', {
        get: function () { return dP$1(this, 'a', { value: 7 }).a; }
      })).a != 7;
    }) ? function (it, key, D) {
      var protoDesc = gOPD$1(ObjectProto$1, key);
      if (protoDesc) delete ObjectProto$1[key];
      dP$1(it, key, D);
      if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
    } : dP$1;

    var wrap$1 = function (tag) {
      var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
      sym._k = tag;
      return sym;
    };

    var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
      return typeof it == 'symbol';
    } : function (it) {
      return it instanceof $Symbol;
    };

    var $defineProperty = function defineProperty(it, key, D) {
      if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
      _anObject(it);
      key = _toPrimitive(key, true);
      _anObject(D);
      if (_has(AllSymbols, key)) {
        if (!D.enumerable) {
          if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
          it[HIDDEN][key] = true;
        } else {
          if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
          D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
        } return setSymbolDesc(it, key, D);
      } return dP$1(it, key, D);
    };
    var $defineProperties = function defineProperties(it, P) {
      _anObject(it);
      var keys = _enumKeys(P = _toIobject(P));
      var i = 0;
      var l = keys.length;
      var key;
      while (l > i) $defineProperty(it, key = keys[i++], P[key]);
      return it;
    };
    var $create = function create(it, P) {
      return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(key) {
      var E = isEnum.call(this, key = _toPrimitive(key, true));
      if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
      return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
      it = _toIobject(it);
      key = _toPrimitive(key, true);
      if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
      var D = gOPD$1(it, key);
      if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
      return D;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
      var names = gOPN$1(_toIobject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) {
        if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
      } return result;
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
      var IS_OP = it === ObjectProto$1;
      var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) {
        if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
      } return result;
    };

    // 19.4.1.1 Symbol([description])
    if (!USE_NATIVE) {
      $Symbol = function Symbol() {
        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
        var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
        var $set = function (value) {
          if (this === ObjectProto$1) $set.call(OPSymbols, value);
          if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
          setSymbolDesc(this, tag, _propertyDesc(1, value));
        };
        if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
        return wrap$1(tag);
      };
      _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
        return this._k;
      });

      _objectGopd.f = $getOwnPropertyDescriptor;
      _objectDp.f = $defineProperty;
      _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
      _objectPie.f = $propertyIsEnumerable;
      _objectGops.f = $getOwnPropertySymbols;

      if (_descriptors && !_library) {
        _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
      }

      _wksExt.f = function (name) {
        return wrap$1(_wks(name));
      };
    }

    _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

    for (var es6Symbols = (
      // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
      'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
    ).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

    for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

    _export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
      // 19.4.2.1 Symbol.for(key)
      'for': function (key) {
        return _has(SymbolRegistry, key += '')
          ? SymbolRegistry[key]
          : SymbolRegistry[key] = $Symbol(key);
      },
      // 19.4.2.5 Symbol.keyFor(sym)
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
        for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
      },
      useSetter: function () { setter = true; },
      useSimple: function () { setter = false; }
    });

    _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
      // 19.1.2.2 Object.create(O [, Properties])
      create: $create,
      // 19.1.2.4 Object.defineProperty(O, P, Attributes)
      defineProperty: $defineProperty,
      // 19.1.2.3 Object.defineProperties(O, Properties)
      defineProperties: $defineProperties,
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
      // 19.1.2.7 Object.getOwnPropertyNames(O)
      getOwnPropertyNames: $getOwnPropertyNames,
      // 19.1.2.8 Object.getOwnPropertySymbols(O)
      getOwnPropertySymbols: $getOwnPropertySymbols
    });

    // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
    // https://bugs.chromium.org/p/v8/issues/detail?id=3443
    var FAILS_ON_PRIMITIVES = _fails(function () { _objectGops.f(1); });

    _export(_export.S + _export.F * FAILS_ON_PRIMITIVES, 'Object', {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return _objectGops.f(_toObject(it));
      }
    });

    // 24.3.2 JSON.stringify(value [, replacer [, space]])
    $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
      var S = $Symbol();
      // MS Edge converts symbol values to JSON as {}
      // WebKit converts symbol values to JSON as null
      // V8 throws on boxed symbols
      return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
    })), 'JSON', {
      stringify: function stringify(it) {
        var args = [it];
        var i = 1;
        var replacer, $replacer;
        while (arguments.length > i) args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
        if (!_isArray(replacer)) replacer = function (key, value) {
          if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      }
    });

    // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
    $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
    // 19.4.3.5 Symbol.prototype[@@toStringTag]
    _setToStringTag($Symbol, 'Symbol');
    // 20.2.1.9 Math[@@toStringTag]
    _setToStringTag(Math, 'Math', true);
    // 24.3.3 JSON[@@toStringTag]
    _setToStringTag(_global.JSON, 'JSON', true);

    _wksDefine('asyncIterator');

    _wksDefine('observable');

    var symbol = _core.Symbol;

    var symbol$1 = createCommonjsModule(function (module) {
    module.exports = { "default": symbol, __esModule: true };
    });

    unwrapExports(symbol$1);

    var _typeof_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _iterator2 = _interopRequireDefault(iterator$1);



    var _symbol2 = _interopRequireDefault(symbol$1);

    var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof(obj);
    } : function (obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
    };
    });

    var _typeof = unwrapExports(_typeof_1);

    var possibleConstructorReturn = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _typeof3 = _interopRequireDefault(_typeof_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = function (self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
    };
    });

    var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

    // Works with __proto__ only. Old v8 can't work with null proto objects.
    /* eslint-disable no-proto */


    var check = function (O, proto) {
      _anObject(O);
      if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
    };
    var _setProto = {
      set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
        function (test, buggy, set) {
          try {
            set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) { buggy = true; }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;
            else set(O, proto);
            return O;
          };
        }({}, false) : undefined),
      check: check
    };

    // 19.1.3.19 Object.setPrototypeOf(O, proto)

    _export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

    var setPrototypeOf = _core.Object.setPrototypeOf;

    var setPrototypeOf$1 = createCommonjsModule(function (module) {
    module.exports = { "default": setPrototypeOf, __esModule: true };
    });

    unwrapExports(setPrototypeOf$1);

    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    _export(_export.S, 'Object', { create: _objectCreate });

    var $Object = _core.Object;
    var create = function create(P, D) {
      return $Object.create(P, D);
    };

    var create$1 = createCommonjsModule(function (module) {
    module.exports = { "default": create, __esModule: true };
    });

    unwrapExports(create$1);

    var inherits = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$1);



    var _create2 = _interopRequireDefault(create$1);



    var _typeof3 = _interopRequireDefault(_typeof_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = function (subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
      }

      subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
    };
    });

    var _inherits = unwrapExports(inherits);

    var reactIs_production_min = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports,"__esModule",{value:!0});
    var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
    60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
    exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
    exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
    exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
    });

    unwrapExports(reactIs_production_min);
    var reactIs_production_min_1 = reactIs_production_min.typeOf;
    var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
    var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
    var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
    var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
    var reactIs_production_min_6 = reactIs_production_min.Element;
    var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
    var reactIs_production_min_8 = reactIs_production_min.Fragment;
    var reactIs_production_min_9 = reactIs_production_min.Lazy;
    var reactIs_production_min_10 = reactIs_production_min.Memo;
    var reactIs_production_min_11 = reactIs_production_min.Portal;
    var reactIs_production_min_12 = reactIs_production_min.Profiler;
    var reactIs_production_min_13 = reactIs_production_min.StrictMode;
    var reactIs_production_min_14 = reactIs_production_min.Suspense;
    var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
    var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
    var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
    var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
    var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
    var reactIs_production_min_20 = reactIs_production_min.isElement;
    var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
    var reactIs_production_min_22 = reactIs_production_min.isFragment;
    var reactIs_production_min_23 = reactIs_production_min.isLazy;
    var reactIs_production_min_24 = reactIs_production_min.isMemo;
    var reactIs_production_min_25 = reactIs_production_min.isPortal;
    var reactIs_production_min_26 = reactIs_production_min.isProfiler;
    var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
    var reactIs_production_min_28 = reactIs_production_min.isSuspense;

    var reactIs_development = createCommonjsModule(function (module, exports) {



    if (process.env.NODE_ENV !== "production") {
      (function() {

    Object.defineProperty(exports, '__esModule', { value: true });

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
    }

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */
    var lowPriorityWarningWithoutStack = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarningWithoutStack = function (condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(void 0, [format].concat(args));
        }
      };
    }

    var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
      })();
    }
    });

    unwrapExports(reactIs_development);
    var reactIs_development_1 = reactIs_development.typeOf;
    var reactIs_development_2 = reactIs_development.AsyncMode;
    var reactIs_development_3 = reactIs_development.ConcurrentMode;
    var reactIs_development_4 = reactIs_development.ContextConsumer;
    var reactIs_development_5 = reactIs_development.ContextProvider;
    var reactIs_development_6 = reactIs_development.Element;
    var reactIs_development_7 = reactIs_development.ForwardRef;
    var reactIs_development_8 = reactIs_development.Fragment;
    var reactIs_development_9 = reactIs_development.Lazy;
    var reactIs_development_10 = reactIs_development.Memo;
    var reactIs_development_11 = reactIs_development.Portal;
    var reactIs_development_12 = reactIs_development.Profiler;
    var reactIs_development_13 = reactIs_development.StrictMode;
    var reactIs_development_14 = reactIs_development.Suspense;
    var reactIs_development_15 = reactIs_development.isValidElementType;
    var reactIs_development_16 = reactIs_development.isAsyncMode;
    var reactIs_development_17 = reactIs_development.isConcurrentMode;
    var reactIs_development_18 = reactIs_development.isContextConsumer;
    var reactIs_development_19 = reactIs_development.isContextProvider;
    var reactIs_development_20 = reactIs_development.isElement;
    var reactIs_development_21 = reactIs_development.isForwardRef;
    var reactIs_development_22 = reactIs_development.isFragment;
    var reactIs_development_23 = reactIs_development.isLazy;
    var reactIs_development_24 = reactIs_development.isMemo;
    var reactIs_development_25 = reactIs_development.isPortal;
    var reactIs_development_26 = reactIs_development.isProfiler;
    var reactIs_development_27 = reactIs_development.isStrictMode;
    var reactIs_development_28 = reactIs_development.isSuspense;

    var reactIs = createCommonjsModule(function (module) {

    if (process.env.NODE_ENV === 'production') {
      module.exports = reactIs_production_min;
    } else {
      module.exports = reactIs_development;
    }
    });

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

    var ReactPropTypesSecret_1 = ReactPropTypesSecret;

    var printWarning = function() {};

    if (process.env.NODE_ENV !== 'production') {
      var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
      var loggedTypeFailures = {};
      var has = Function.call.bind(Object.prototype.hasOwnProperty);

      printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    /**
     * Assert that the values match with the type specs.
     * Error messages are memorized and will only be shown once.
     *
     * @param {object} typeSpecs Map of name to a ReactPropType
     * @param {object} values Runtime values that need to be type-checked
     * @param {string} location e.g. "prop", "context", "child context"
     * @param {string} componentName Name of the component for error messages.
     * @param {?Function} getStack Returns the component stack.
     * @private
     */
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (process.env.NODE_ENV !== 'production') {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error(
                  (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
                );
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || 'React class') + ': type specification of ' +
                location + ' `' + typeSpecName + '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error.message] = true;

              var stack = getStack ? getStack() : '';

              printWarning(
                'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
              );
            }
          }
        }
      }
    }

    /**
     * Resets warning cache when testing.
     *
     * @private
     */
    checkPropTypes.resetWarningCache = function() {
      if (process.env.NODE_ENV !== 'production') {
        loggedTypeFailures = {};
      }
    };

    var checkPropTypes_1 = checkPropTypes;

    var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
    var printWarning$1 = function() {};

    if (process.env.NODE_ENV !== 'production') {
      printWarning$1 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    function emptyFunctionThatReturnsNull() {
      return null;
    }

    var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
      /* global Symbol */
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

      /**
       * Returns the iterator method function contained on the iterable object.
       *
       * Be sure to invoke the function with the iterable as context:
       *
       *     var iteratorFn = getIteratorFn(myIterable);
       *     if (iteratorFn) {
       *       var iterator = iteratorFn.call(myIterable);
       *       ...
       *     }
       *
       * @param {?object} maybeIterable
       * @return {?function}
       */
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }

      /**
       * Collection of methods that allow declaration and validation of props that are
       * supplied to React components. Example usage:
       *
       *   var Props = require('ReactPropTypes');
       *   var MyArticle = React.createClass({
       *     propTypes: {
       *       // An optional string prop named "description".
       *       description: Props.string,
       *
       *       // A required enum prop named "category".
       *       category: Props.oneOf(['News','Photos']).isRequired,
       *
       *       // A prop named "dialog" that requires an instance of Dialog.
       *       dialog: Props.instanceOf(Dialog).isRequired
       *     },
       *     render: function() { ... }
       *   });
       *
       * A more formal specification of how these methods are used:
       *
       *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
       *   decl := ReactPropTypes.{type}(.isRequired)?
       *
       * Each and every declaration produces a function with the same signature. This
       * allows the creation of custom validation functions. For example:
       *
       *  var MyLink = React.createClass({
       *    propTypes: {
       *      // An optional string or URI prop named "href".
       *      href: function(props, propName, componentName) {
       *        var propValue = props[propName];
       *        if (propValue != null && typeof propValue !== 'string' &&
       *            !(propValue instanceof URI)) {
       *          return new Error(
       *            'Expected a string or an URI for ' + propName + ' in ' +
       *            componentName
       *          );
       *        }
       *      }
       *    },
       *    render: function() {...}
       *  });
       *
       * @internal
       */

      var ANONYMOUS = '<<anonymous>>';

      // Important!
      // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),

        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };

      /**
       * inlined Object.is polyfill to avoid requiring consumers ship their own
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
       */
      /*eslint-disable no-self-compare*/
      function is(x, y) {
        // SameValue algorithm
        if (x === y) {
          // Steps 1-5, 7-10
          // Steps 6.b-6.e: +0 != -0
          return x !== 0 || 1 / x === 1 / y;
        } else {
          // Step 6.a: NaN == NaN
          return x !== x && y !== y;
        }
      }
      /*eslint-enable no-self-compare*/

      /**
       * We use an Error-like object for backward compatibility as people may call
       * PropTypes directly and inspect their output. However, we don't use real
       * Errors anymore. We don't inspect their stack anyway, and creating them
       * is prohibitively expensive if they are created too often, such as what
       * happens in oneOfType() for any type before the one that matched.
       */
      function PropTypeError(message) {
        this.message = message;
        this.stack = '';
      }
      // Make `instanceof Error` still work for returned errors.
      PropTypeError.prototype = Error.prototype;

      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== 'production') {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;

          if (secret !== ReactPropTypesSecret_1) {
            if (throwOnDirectAccess) {
              // New behavior only for users of `prop-types` package
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
              );
              err.name = 'Invariant Violation';
              throw err;
            } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
              // Old behavior for people using React.PropTypes
              var cacheKey = componentName + ':' + propName;
              if (
                !manualPropTypeCallCache[cacheKey] &&
                // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3
              ) {
                printWarning$1(
                  'You are manually calling a React.PropTypes validation ' +
                  'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }

        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);

        return chainedCheckType;
      }

      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            // `propValue` being instance of, say, date/regexp, pass the 'object'
            // check, but we can offer a more precise error message here rather than
            // 'of type `object`'.
            var preciseType = getPreciseType(propValue);

            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }

      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!reactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (process.env.NODE_ENV !== 'production') {
            if (arguments.length > 1) {
              printWarning$1(
                'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
                'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
              );
            } else {
              printWarning$1('Invalid argument supplied to oneOf, expected an array.');
            }
          }
          return emptyFunctionThatReturnsNull;
        }

        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }

          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === 'symbol') {
              return String(value);
            }
            return value;
          });
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (has$1(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
          return emptyFunctionThatReturnsNull;
        }

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning$1(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
            );
            return emptyFunctionThatReturnsNull;
          }
        }

        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
              return null;
            }
          }

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          // We need to check all keys in case some are required but missing from
          // props.
          var allKeys = objectAssign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
                '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }

            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                // Iterator will provide entry [k,v] tuples rather than values.
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }

            return true;
          default:
            return false;
        }
      }

      function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
          return true;
        }

        // falsy value can't be a Symbol
        if (!propValue) {
          return false;
        }

        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }

        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }

        return false;
      }

      // Equivalent of `typeof` but with special handling for array and regexp.
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          // Old webkits (at least until Android 4.0) return 'function' rather than
          // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
          // passes PropTypes.object.
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }

      // This handles more types than `getPropType`. Only used for error messages.
      // See `createPrimitiveTypeChecker`.
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }

      // Returns a string that is postfixed to a warning about an invalid type.
      // For example, "undefined" or "of type array"
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }

      // Returns class name of the object, if any.
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }

      ReactPropTypes.checkPropTypes = checkPropTypes_1;
      ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    function emptyFunction() {}
    function emptyFunctionWithReset() {}
    emptyFunctionWithReset.resetWarningCache = emptyFunction;

    var factoryWithThrowingShims = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret_1) {
          // It is still safe when called from React.
          return;
        }
        var err = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types'
        );
        err.name = 'Invariant Violation';
        throw err;
      }  shim.isRequired = shim;
      function getShim() {
        return shim;
      }  // Important!
      // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
      var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,

        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,

        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };

      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    if (process.env.NODE_ENV !== 'production') {
      var ReactIs = reactIs;

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
    } else {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims();
    }
    });

    var KeyCode_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    /**
     * @ignore
     * some key-codes definition and utils from closure-library
     * @author yiminghe@gmail.com
     */
    var KeyCode = {
      /**
       * MAC_ENTER
       */
      MAC_ENTER: 3,

      /**
       * BACKSPACE
       */
      BACKSPACE: 8,

      /**
       * TAB
       */
      TAB: 9,

      /**
       * NUMLOCK on FF/Safari Mac
       */
      NUM_CENTER: 12,

      /**
       * ENTER
       */
      ENTER: 13,

      /**
       * SHIFT
       */
      SHIFT: 16,

      /**
       * CTRL
       */
      CTRL: 17,

      /**
       * ALT
       */
      ALT: 18,

      /**
       * PAUSE
       */
      PAUSE: 19,

      /**
       * CAPS_LOCK
       */
      CAPS_LOCK: 20,

      /**
       * ESC
       */
      ESC: 27,

      /**
       * SPACE
       */
      SPACE: 32,

      /**
       * PAGE_UP
       */
      PAGE_UP: 33,

      /**
       * PAGE_DOWN
       */
      PAGE_DOWN: 34,

      /**
       * END
       */
      END: 35,

      /**
       * HOME
       */
      HOME: 36,

      /**
       * LEFT
       */
      LEFT: 37,

      /**
       * UP
       */
      UP: 38,

      /**
       * RIGHT
       */
      RIGHT: 39,

      /**
       * DOWN
       */
      DOWN: 40,

      /**
       * PRINT_SCREEN
       */
      PRINT_SCREEN: 44,

      /**
       * INSERT
       */
      INSERT: 45,

      /**
       * DELETE
       */
      DELETE: 46,

      /**
       * ZERO
       */
      ZERO: 48,

      /**
       * ONE
       */
      ONE: 49,

      /**
       * TWO
       */
      TWO: 50,

      /**
       * THREE
       */
      THREE: 51,

      /**
       * FOUR
       */
      FOUR: 52,

      /**
       * FIVE
       */
      FIVE: 53,

      /**
       * SIX
       */
      SIX: 54,

      /**
       * SEVEN
       */
      SEVEN: 55,

      /**
       * EIGHT
       */
      EIGHT: 56,

      /**
       * NINE
       */
      NINE: 57,

      /**
       * QUESTION_MARK
       */
      QUESTION_MARK: 63,

      /**
       * A
       */
      A: 65,

      /**
       * B
       */
      B: 66,

      /**
       * C
       */
      C: 67,

      /**
       * D
       */
      D: 68,

      /**
       * E
       */
      E: 69,

      /**
       * F
       */
      F: 70,

      /**
       * G
       */
      G: 71,

      /**
       * H
       */
      H: 72,

      /**
       * I
       */
      I: 73,

      /**
       * J
       */
      J: 74,

      /**
       * K
       */
      K: 75,

      /**
       * L
       */
      L: 76,

      /**
       * M
       */
      M: 77,

      /**
       * N
       */
      N: 78,

      /**
       * O
       */
      O: 79,

      /**
       * P
       */
      P: 80,

      /**
       * Q
       */
      Q: 81,

      /**
       * R
       */
      R: 82,

      /**
       * S
       */
      S: 83,

      /**
       * T
       */
      T: 84,

      /**
       * U
       */
      U: 85,

      /**
       * V
       */
      V: 86,

      /**
       * W
       */
      W: 87,

      /**
       * X
       */
      X: 88,

      /**
       * Y
       */
      Y: 89,

      /**
       * Z
       */
      Z: 90,

      /**
       * META
       */
      META: 91,

      /**
       * WIN_KEY_RIGHT
       */
      WIN_KEY_RIGHT: 92,

      /**
       * CONTEXT_MENU
       */
      CONTEXT_MENU: 93,

      /**
       * NUM_ZERO
       */
      NUM_ZERO: 96,

      /**
       * NUM_ONE
       */
      NUM_ONE: 97,

      /**
       * NUM_TWO
       */
      NUM_TWO: 98,

      /**
       * NUM_THREE
       */
      NUM_THREE: 99,

      /**
       * NUM_FOUR
       */
      NUM_FOUR: 100,

      /**
       * NUM_FIVE
       */
      NUM_FIVE: 101,

      /**
       * NUM_SIX
       */
      NUM_SIX: 102,

      /**
       * NUM_SEVEN
       */
      NUM_SEVEN: 103,

      /**
       * NUM_EIGHT
       */
      NUM_EIGHT: 104,

      /**
       * NUM_NINE
       */
      NUM_NINE: 105,

      /**
       * NUM_MULTIPLY
       */
      NUM_MULTIPLY: 106,

      /**
       * NUM_PLUS
       */
      NUM_PLUS: 107,

      /**
       * NUM_MINUS
       */
      NUM_MINUS: 109,

      /**
       * NUM_PERIOD
       */
      NUM_PERIOD: 110,

      /**
       * NUM_DIVISION
       */
      NUM_DIVISION: 111,

      /**
       * F1
       */
      F1: 112,

      /**
       * F2
       */
      F2: 113,

      /**
       * F3
       */
      F3: 114,

      /**
       * F4
       */
      F4: 115,

      /**
       * F5
       */
      F5: 116,

      /**
       * F6
       */
      F6: 117,

      /**
       * F7
       */
      F7: 118,

      /**
       * F8
       */
      F8: 119,

      /**
       * F9
       */
      F9: 120,

      /**
       * F10
       */
      F10: 121,

      /**
       * F11
       */
      F11: 122,

      /**
       * F12
       */
      F12: 123,

      /**
       * NUMLOCK
       */
      NUMLOCK: 144,

      /**
       * SEMICOLON
       */
      SEMICOLON: 186,

      /**
       * DASH
       */
      DASH: 189,

      /**
       * EQUALS
       */
      EQUALS: 187,

      /**
       * COMMA
       */
      COMMA: 188,

      /**
       * PERIOD
       */
      PERIOD: 190,

      /**
       * SLASH
       */
      SLASH: 191,

      /**
       * APOSTROPHE
       */
      APOSTROPHE: 192,

      /**
       * SINGLE_QUOTE
       */
      SINGLE_QUOTE: 222,

      /**
       * OPEN_SQUARE_BRACKET
       */
      OPEN_SQUARE_BRACKET: 219,

      /**
       * BACKSLASH
       */
      BACKSLASH: 220,

      /**
       * CLOSE_SQUARE_BRACKET
       */
      CLOSE_SQUARE_BRACKET: 221,

      /**
       * WIN_KEY
       */
      WIN_KEY: 224,

      /**
       * MAC_FF_META
       */
      MAC_FF_META: 224,

      /**
       * WIN_IME
       */
      WIN_IME: 229,
      // ======================== Function ========================

      /**
       * whether text and modified key is entered at the same time.
       */
      isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
        var keyCode = e.keyCode;

        if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
        keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
          return false;
        } // The following keys are quite harmless, even in combination with
        // CTRL, ALT or SHIFT.


        switch (keyCode) {
          case KeyCode.ALT:
          case KeyCode.CAPS_LOCK:
          case KeyCode.CONTEXT_MENU:
          case KeyCode.CTRL:
          case KeyCode.DOWN:
          case KeyCode.END:
          case KeyCode.ESC:
          case KeyCode.HOME:
          case KeyCode.INSERT:
          case KeyCode.LEFT:
          case KeyCode.MAC_FF_META:
          case KeyCode.META:
          case KeyCode.NUMLOCK:
          case KeyCode.NUM_CENTER:
          case KeyCode.PAGE_DOWN:
          case KeyCode.PAGE_UP:
          case KeyCode.PAUSE:
          case KeyCode.PRINT_SCREEN:
          case KeyCode.RIGHT:
          case KeyCode.SHIFT:
          case KeyCode.UP:
          case KeyCode.WIN_KEY:
          case KeyCode.WIN_KEY_RIGHT:
            return false;

          default:
            return true;
        }
      },

      /**
       * whether character is entered.
       */
      isCharacterKey: function isCharacterKey(keyCode) {
        if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
          return true;
        }

        if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
          return true;
        }

        if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
          return true;
        } // Safari sends zero key code for non-latin characters.


        if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
          return true;
        }

        switch (keyCode) {
          case KeyCode.SPACE:
          case KeyCode.QUESTION_MARK:
          case KeyCode.NUM_PLUS:
          case KeyCode.NUM_MINUS:
          case KeyCode.NUM_PERIOD:
          case KeyCode.NUM_DIVISION:
          case KeyCode.SEMICOLON:
          case KeyCode.DASH:
          case KeyCode.EQUALS:
          case KeyCode.COMMA:
          case KeyCode.PERIOD:
          case KeyCode.SLASH:
          case KeyCode.APOSTROPHE:
          case KeyCode.SINGLE_QUOTE:
          case KeyCode.OPEN_SQUARE_BRACKET:
          case KeyCode.BACKSLASH:
          case KeyCode.CLOSE_SQUARE_BRACKET:
            return true;

          default:
            return false;
        }
      }
    };
    var _default = KeyCode;
    exports.default = _default;
    });

    unwrapExports(KeyCode_1);

    var mapSelf_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = mapSelf;

    var _react = _interopRequireDefault(React__default);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function mirror(o) {
      return o;
    }

    function mapSelf(children) {
      // return ReactFragment
      return _react.default.Children.map(children, mirror);
    }
    });

    unwrapExports(mapSelf_1);

    var util = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _extends3 = _interopRequireDefault(_extends);

    exports.getTodayTime = getTodayTime;
    exports.getTitleString = getTitleString;
    exports.getTodayTimeStr = getTodayTimeStr;
    exports.getMonthName = getMonthName;
    exports.syncTime = syncTime;
    exports.getTimeConfig = getTimeConfig;
    exports.isTimeValidByConfig = isTimeValidByConfig;
    exports.isTimeValid = isTimeValid;
    exports.isAllowedDate = isAllowedDate;
    exports.formatDate = formatDate;



    var _moment2 = _interopRequireDefault(moment__default);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var defaultDisabledTime = {
      disabledHours: function disabledHours() {
        return [];
      },
      disabledMinutes: function disabledMinutes() {
        return [];
      },
      disabledSeconds: function disabledSeconds() {
        return [];
      }
    };

    function getTodayTime(value) {
      var today = (0, _moment2['default'])();
      today.locale(value.locale()).utcOffset(value.utcOffset());
      return today;
    }

    function getTitleString(value) {
      return value.format('LL');
    }

    function getTodayTimeStr(value) {
      var today = getTodayTime(value);
      return getTitleString(today);
    }

    function getMonthName(month) {
      var locale = month.locale();
      var localeData = month.localeData();
      return localeData[locale === 'zh-cn' ? 'months' : 'monthsShort'](month);
    }

    function syncTime(from, to) {
      if (!_moment2['default'].isMoment(from) || !_moment2['default'].isMoment(to)) return;
      to.hour(from.hour());
      to.minute(from.minute());
      to.second(from.second());
      to.millisecond(from.millisecond());
    }

    function getTimeConfig(value, disabledTime) {
      var disabledTimeConfig = disabledTime ? disabledTime(value) : {};
      disabledTimeConfig = (0, _extends3['default'])({}, defaultDisabledTime, disabledTimeConfig);
      return disabledTimeConfig;
    }

    function isTimeValidByConfig(value, disabledTimeConfig) {
      var invalidTime = false;
      if (value) {
        var hour = value.hour();
        var minutes = value.minute();
        var seconds = value.second();
        var disabledHours = disabledTimeConfig.disabledHours();
        if (disabledHours.indexOf(hour) === -1) {
          var disabledMinutes = disabledTimeConfig.disabledMinutes(hour);
          if (disabledMinutes.indexOf(minutes) === -1) {
            var disabledSeconds = disabledTimeConfig.disabledSeconds(hour, minutes);
            invalidTime = disabledSeconds.indexOf(seconds) !== -1;
          } else {
            invalidTime = true;
          }
        } else {
          invalidTime = true;
        }
      }
      return !invalidTime;
    }

    function isTimeValid(value, disabledTime) {
      var disabledTimeConfig = getTimeConfig(value, disabledTime);
      return isTimeValidByConfig(value, disabledTimeConfig);
    }

    function isAllowedDate(value, disabledDate, disabledTime) {
      if (disabledDate) {
        if (disabledDate(value)) {
          return false;
        }
      }
      if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
          return false;
        }
      }
      return true;
    }

    function formatDate(value, format) {
      if (!value) {
        return '';
      }

      if (Array.isArray(format)) {
        format = format[0];
      }

      return value.format(format);
    }
    });

    unwrapExports(util);
    var util_1 = util.getTodayTime;
    var util_2 = util.getTitleString;
    var util_3 = util.getTodayTimeStr;
    var util_4 = util.getMonthName;
    var util_5 = util.syncTime;
    var util_6 = util.getTimeConfig;
    var util_7 = util.isTimeValidByConfig;
    var util_8 = util.isTimeValid;
    var util_9 = util.isAllowedDate;
    var util_10 = util.formatDate;

    var MonthTable_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _classnames2 = _interopRequireDefault(classNames);





    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var ROW = 4;
    var COL = 3;

    function noop() {}

    var MonthTable = function (_Component) {
      (0, _inherits3['default'])(MonthTable, _Component);

      function MonthTable() {
        var _temp, _this, _ret;

        (0, _classCallCheck3['default'])(this, MonthTable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
      }

      MonthTable.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
        if ('value' in props) {
          return { value: props.value };
        }
        return null;
      };

      MonthTable.prototype.setAndSelectValue = function setAndSelectValue(value) {
        this.setState({
          value: value
        });
        this.props.onSelect(value);
      };

      MonthTable.prototype.chooseMonth = function chooseMonth(month) {
        var next = this.state.value.clone();
        next.month(month);
        this.setAndSelectValue(next);
      };

      MonthTable.prototype.months = function months() {
        var value = this.state.value;
        var current = value.clone();
        var months = [];
        var index = 0;
        for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
          months[rowIndex] = [];
          for (var colIndex = 0; colIndex < COL; colIndex++) {
            current.month(index);
            var content = (0, util.getMonthName)(current);
            months[rowIndex][colIndex] = {
              value: index,
              content: content,
              title: content
            };
            index++;
          }
        }
        return months;
      };

      MonthTable.prototype.render = function render() {
        var _this2 = this;

        var props = this.props;
        var value = this.state.value;
        var today = (0, util.getTodayTime)(value);
        var months = this.months();
        var currentMonth = value.month();
        var prefixCls = props.prefixCls,
            locale = props.locale,
            contentRender = props.contentRender,
            cellRender = props.cellRender;

        var monthsEls = months.map(function (month, index) {
          var tds = month.map(function (monthData) {
            var _classNameMap;

            var disabled = false;
            if (props.disabledDate) {
              var testValue = value.clone();
              testValue.month(monthData.value);
              disabled = props.disabledDate(testValue);
            }
            var classNameMap = (_classNameMap = {}, _classNameMap[prefixCls + '-cell'] = 1, _classNameMap[prefixCls + '-cell-disabled'] = disabled, _classNameMap[prefixCls + '-selected-cell'] = monthData.value === currentMonth, _classNameMap[prefixCls + '-current-cell'] = today.year() === value.year() && monthData.value === today.month(), _classNameMap);
            var cellEl = void 0;
            if (cellRender) {
              var currentValue = value.clone();
              currentValue.month(monthData.value);
              cellEl = cellRender(currentValue, locale);
            } else {
              var content = void 0;
              if (contentRender) {
                var _currentValue = value.clone();
                _currentValue.month(monthData.value);
                content = contentRender(_currentValue, locale);
              } else {
                content = monthData.content;
              }
              cellEl = _react2['default'].createElement(
                'a',
                { className: prefixCls + '-month' },
                content
              );
            }
            return _react2['default'].createElement(
              'td',
              {
                role: 'gridcell',
                key: monthData.value,
                onClick: disabled ? null : function () {
                  return _this2.chooseMonth(monthData.value);
                },
                title: monthData.title,
                className: (0, _classnames2['default'])(classNameMap)
              },
              cellEl
            );
          });
          return _react2['default'].createElement(
            'tr',
            { key: index, role: 'row' },
            tds
          );
        });

        return _react2['default'].createElement(
          'table',
          { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
          _react2['default'].createElement(
            'tbody',
            { className: prefixCls + '-tbody' },
            monthsEls
          )
        );
      };

      return MonthTable;
    }(React__default.Component);

    MonthTable.defaultProps = {
      onSelect: noop
    };

    MonthTable.propTypes = {
      onSelect: _propTypes2['default'].func,
      cellRender: _propTypes2['default'].func,
      prefixCls: _propTypes2['default'].string,
      value: _propTypes2['default'].object
    };

    (0, reactLifecyclesCompat__default.polyfill)(MonthTable);

    exports['default'] = MonthTable;
    module.exports = exports['default'];
    });

    unwrapExports(MonthTable_1);

    var MonthPanel_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _propTypes2 = _interopRequireDefault(propTypes);





    var _MonthTable2 = _interopRequireDefault(MonthTable_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function goYear(direction) {
      this.props.changeYear(direction);
    }

    function noop() {}

    var MonthPanel = function (_React$Component) {
      (0, _inherits3['default'])(MonthPanel, _React$Component);

      function MonthPanel(props) {
        (0, _classCallCheck3['default'])(this, MonthPanel);

        var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

        _this.setAndSelectValue = function (value) {
          _this.setValue(value);
          _this.props.onSelect(value);
        };

        _this.setValue = function (value) {
          if ('value' in _this.props) {
            _this.setState({
              value: value
            });
          }
        };

        _this.nextYear = goYear.bind(_this, 1);
        _this.previousYear = goYear.bind(_this, -1);
        _this.prefixCls = props.rootPrefixCls + '-month-panel';

        _this.state = {
          value: props.value || props.defaultValue
        };
        return _this;
      }

      MonthPanel.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
        var newState = {};

        if ('value' in props) {
          newState = {
            value: props.value
          };
        }

        return newState;
      };

      MonthPanel.prototype.render = function render() {
        var props = this.props;
        var value = this.state.value;
        var locale = props.locale,
            cellRender = props.cellRender,
            contentRender = props.contentRender,
            renderFooter = props.renderFooter;

        var year = value.year();
        var prefixCls = this.prefixCls;

        var footer = renderFooter && renderFooter('month');

        return _react2['default'].createElement(
          'div',
          { className: prefixCls, style: props.style },
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'div',
              { className: prefixCls + '-header' },
              _react2['default'].createElement('a', {
                className: prefixCls + '-prev-year-btn',
                role: 'button',
                onClick: this.previousYear,
                title: locale.previousYear
              }),
              _react2['default'].createElement(
                'a',
                {
                  className: prefixCls + '-year-select',
                  role: 'button',
                  onClick: props.onYearPanelShow,
                  title: locale.yearSelect
                },
                _react2['default'].createElement(
                  'span',
                  { className: prefixCls + '-year-select-content' },
                  year
                ),
                _react2['default'].createElement(
                  'span',
                  { className: prefixCls + '-year-select-arrow' },
                  'x'
                )
              ),
              _react2['default'].createElement('a', {
                className: prefixCls + '-next-year-btn',
                role: 'button',
                onClick: this.nextYear,
                title: locale.nextYear
              })
            ),
            _react2['default'].createElement(
              'div',
              { className: prefixCls + '-body' },
              _react2['default'].createElement(_MonthTable2['default'], {
                disabledDate: props.disabledDate,
                onSelect: this.setAndSelectValue,
                locale: locale,
                value: value,
                cellRender: cellRender,
                contentRender: contentRender,
                prefixCls: prefixCls
              })
            ),
            footer && _react2['default'].createElement(
              'div',
              { className: prefixCls + '-footer' },
              footer
            )
          )
        );
      };

      return MonthPanel;
    }(_react2['default'].Component);

    MonthPanel.propTypes = {
      onChange: _propTypes2['default'].func,
      disabledDate: _propTypes2['default'].func,
      onSelect: _propTypes2['default'].func,
      renderFooter: _propTypes2['default'].func,
      rootPrefixCls: _propTypes2['default'].string,
      value: _propTypes2['default'].object,
      defaultValue: _propTypes2['default'].object
    };
    MonthPanel.defaultProps = {
      onChange: noop,
      onSelect: noop
    };


    (0, reactLifecyclesCompat__default.polyfill)(MonthPanel);

    exports['default'] = MonthPanel;
    module.exports = exports['default'];
    });

    unwrapExports(MonthPanel_1);

    var YearPanel_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _classnames2 = _interopRequireDefault(classNames);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var ROW = 4;
    var COL = 3;

    function goYear(direction) {
      var value = this.state.value.clone();
      value.add(direction, 'year');
      this.setState({
        value: value
      });
    }

    function chooseYear(year) {
      var value = this.state.value.clone();
      value.year(year);
      value.month(this.state.value.month());
      this.setState({
        value: value
      });
      this.props.onSelect(value);
    }

    var YearPanel = function (_React$Component) {
      (0, _inherits3['default'])(YearPanel, _React$Component);

      function YearPanel(props) {
        (0, _classCallCheck3['default'])(this, YearPanel);

        var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

        _this.prefixCls = props.rootPrefixCls + '-year-panel';
        _this.state = {
          value: props.value || props.defaultValue
        };
        _this.nextDecade = goYear.bind(_this, 10);
        _this.previousDecade = goYear.bind(_this, -10);
        return _this;
      }

      YearPanel.prototype.years = function years() {
        var value = this.state.value;
        var currentYear = value.year();
        var startYear = parseInt(currentYear / 10, 10) * 10;
        var previousYear = startYear - 1;
        var years = [];
        var index = 0;
        for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
          years[rowIndex] = [];
          for (var colIndex = 0; colIndex < COL; colIndex++) {
            var year = previousYear + index;
            var content = String(year);
            years[rowIndex][colIndex] = {
              content: content,
              year: year,
              title: content
            };
            index++;
          }
        }
        return years;
      };

      YearPanel.prototype.render = function render() {
        var _this2 = this;

        var props = this.props;
        var value = this.state.value;
        var locale = props.locale,
            renderFooter = props.renderFooter;

        var years = this.years();
        var currentYear = value.year();
        var startYear = parseInt(currentYear / 10, 10) * 10;
        var endYear = startYear + 9;
        var prefixCls = this.prefixCls;

        var yeasEls = years.map(function (row, index) {
          var tds = row.map(function (yearData) {
            var _classNameMap;

            var classNameMap = (_classNameMap = {}, _classNameMap[prefixCls + '-cell'] = 1, _classNameMap[prefixCls + '-selected-cell'] = yearData.year === currentYear, _classNameMap[prefixCls + '-last-decade-cell'] = yearData.year < startYear, _classNameMap[prefixCls + '-next-decade-cell'] = yearData.year > endYear, _classNameMap);
            var clickHandler = void 0;
            if (yearData.year < startYear) {
              clickHandler = _this2.previousDecade;
            } else if (yearData.year > endYear) {
              clickHandler = _this2.nextDecade;
            } else {
              clickHandler = chooseYear.bind(_this2, yearData.year);
            }
            return _react2['default'].createElement(
              'td',
              {
                role: 'gridcell',
                title: yearData.title,
                key: yearData.content,
                onClick: clickHandler,
                className: (0, _classnames2['default'])(classNameMap)
              },
              _react2['default'].createElement(
                'a',
                {
                  className: prefixCls + '-year'
                },
                yearData.content
              )
            );
          });
          return _react2['default'].createElement(
            'tr',
            { key: index, role: 'row' },
            tds
          );
        });

        var footer = renderFooter && renderFooter('year');

        return _react2['default'].createElement(
          'div',
          { className: this.prefixCls },
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'div',
              { className: prefixCls + '-header' },
              _react2['default'].createElement('a', {
                className: prefixCls + '-prev-decade-btn',
                role: 'button',
                onClick: this.previousDecade,
                title: locale.previousDecade
              }),
              _react2['default'].createElement(
                'a',
                {
                  className: prefixCls + '-decade-select',
                  role: 'button',
                  onClick: props.onDecadePanelShow,
                  title: locale.decadeSelect
                },
                _react2['default'].createElement(
                  'span',
                  { className: prefixCls + '-decade-select-content' },
                  startYear,
                  '-',
                  endYear
                ),
                _react2['default'].createElement(
                  'span',
                  { className: prefixCls + '-decade-select-arrow' },
                  'x'
                )
              ),
              _react2['default'].createElement('a', {
                className: prefixCls + '-next-decade-btn',
                role: 'button',
                onClick: this.nextDecade,
                title: locale.nextDecade
              })
            ),
            _react2['default'].createElement(
              'div',
              { className: prefixCls + '-body' },
              _react2['default'].createElement(
                'table',
                { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
                _react2['default'].createElement(
                  'tbody',
                  { className: prefixCls + '-tbody' },
                  yeasEls
                )
              )
            ),
            footer && _react2['default'].createElement(
              'div',
              { className: prefixCls + '-footer' },
              footer
            )
          )
        );
      };

      return YearPanel;
    }(_react2['default'].Component);

    exports['default'] = YearPanel;


    YearPanel.propTypes = {
      rootPrefixCls: _propTypes2['default'].string,
      value: _propTypes2['default'].object,
      defaultValue: _propTypes2['default'].object,
      renderFooter: _propTypes2['default'].func
    };

    YearPanel.defaultProps = {
      onSelect: function onSelect() {}
    };
    module.exports = exports['default'];
    });

    unwrapExports(YearPanel_1);

    var DecadePanel_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _classnames2 = _interopRequireDefault(classNames);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var ROW = 4;
    var COL = 3;


    function goYear(direction) {
      var next = this.state.value.clone();
      next.add(direction, 'years');
      this.setState({
        value: next
      });
    }

    function chooseDecade(year, event) {
      var next = this.state.value.clone();
      next.year(year);
      next.month(this.state.value.month());
      this.props.onSelect(next);
      event.preventDefault();
    }

    var DecadePanel = function (_React$Component) {
      (0, _inherits3['default'])(DecadePanel, _React$Component);

      function DecadePanel(props) {
        (0, _classCallCheck3['default'])(this, DecadePanel);

        var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

        _this.state = {
          value: props.value || props.defaultValue
        };

        // bind methods
        _this.prefixCls = props.rootPrefixCls + '-decade-panel';
        _this.nextCentury = goYear.bind(_this, 100);
        _this.previousCentury = goYear.bind(_this, -100);
        return _this;
      }

      DecadePanel.prototype.render = function render() {
        var _this2 = this;

        var value = this.state.value;
        var _props = this.props,
            locale = _props.locale,
            renderFooter = _props.renderFooter;

        var currentYear = value.year();
        var startYear = parseInt(currentYear / 100, 10) * 100;
        var preYear = startYear - 10;
        var endYear = startYear + 99;
        var decades = [];
        var index = 0;
        var prefixCls = this.prefixCls;

        for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
          decades[rowIndex] = [];
          for (var colIndex = 0; colIndex < COL; colIndex++) {
            var startDecade = preYear + index * 10;
            var endDecade = preYear + index * 10 + 9;
            decades[rowIndex][colIndex] = {
              startDecade: startDecade,
              endDecade: endDecade
            };
            index++;
          }
        }

        var footer = renderFooter && renderFooter('decade');

        var decadesEls = decades.map(function (row, decadeIndex) {
          var tds = row.map(function (decadeData) {
            var _classNameMap;

            var dStartDecade = decadeData.startDecade;
            var dEndDecade = decadeData.endDecade;
            var isLast = dStartDecade < startYear;
            var isNext = dEndDecade > endYear;
            var classNameMap = (_classNameMap = {}, _classNameMap[prefixCls + '-cell'] = 1, _classNameMap[prefixCls + '-selected-cell'] = dStartDecade <= currentYear && currentYear <= dEndDecade, _classNameMap[prefixCls + '-last-century-cell'] = isLast, _classNameMap[prefixCls + '-next-century-cell'] = isNext, _classNameMap);
            var content = dStartDecade + '-' + dEndDecade;
            var clickHandler = void 0;
            if (isLast) {
              clickHandler = _this2.previousCentury;
            } else if (isNext) {
              clickHandler = _this2.nextCentury;
            } else {
              clickHandler = chooseDecade.bind(_this2, dStartDecade);
            }
            return _react2['default'].createElement(
              'td',
              {
                key: dStartDecade,
                onClick: clickHandler,
                role: 'gridcell',
                className: (0, _classnames2['default'])(classNameMap)
              },
              _react2['default'].createElement(
                'a',
                {
                  className: prefixCls + '-decade'
                },
                content
              )
            );
          });
          return _react2['default'].createElement(
            'tr',
            { key: decadeIndex, role: 'row' },
            tds
          );
        });

        return _react2['default'].createElement(
          'div',
          { className: this.prefixCls },
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-header' },
            _react2['default'].createElement('a', {
              className: prefixCls + '-prev-century-btn',
              role: 'button',
              onClick: this.previousCentury,
              title: locale.previousCentury
            }),
            _react2['default'].createElement(
              'div',
              { className: prefixCls + '-century' },
              startYear,
              '-',
              endYear
            ),
            _react2['default'].createElement('a', {
              className: prefixCls + '-next-century-btn',
              role: 'button',
              onClick: this.nextCentury,
              title: locale.nextCentury
            })
          ),
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-body' },
            _react2['default'].createElement(
              'table',
              { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
              _react2['default'].createElement(
                'tbody',
                { className: prefixCls + '-tbody' },
                decadesEls
              )
            )
          ),
          footer && _react2['default'].createElement(
            'div',
            { className: prefixCls + '-footer' },
            footer
          )
        );
      };

      return DecadePanel;
    }(_react2['default'].Component);

    exports['default'] = DecadePanel;


    DecadePanel.propTypes = {
      locale: _propTypes2['default'].object,
      value: _propTypes2['default'].object,
      defaultValue: _propTypes2['default'].object,
      rootPrefixCls: _propTypes2['default'].string,
      renderFooter: _propTypes2['default'].func
    };

    DecadePanel.defaultProps = {
      onSelect: function onSelect() {}
    };
    module.exports = exports['default'];
    });

    unwrapExports(DecadePanel_1);

    var CalendarHeader_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _mapSelf2 = _interopRequireDefault(mapSelf_1);



    var _MonthPanel2 = _interopRequireDefault(MonthPanel_1);



    var _YearPanel2 = _interopRequireDefault(YearPanel_1);



    var _DecadePanel2 = _interopRequireDefault(DecadePanel_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function goMonth(direction) {
      var next = this.props.value.clone();
      next.add(direction, 'months');
      this.props.onValueChange(next);
    }

    function goYear(direction) {
      var next = this.props.value.clone();
      next.add(direction, 'years');
      this.props.onValueChange(next);
    }

    function showIf(condition, el) {
      return condition ? el : null;
    }

    var CalendarHeader = function (_React$Component) {
      (0, _inherits3['default'])(CalendarHeader, _React$Component);

      function CalendarHeader(props) {
        (0, _classCallCheck3['default'])(this, CalendarHeader);

        var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        _this.nextMonth = goMonth.bind(_this, 1);
        _this.previousMonth = goMonth.bind(_this, -1);
        _this.nextYear = goYear.bind(_this, 1);
        _this.previousYear = goYear.bind(_this, -1);

        _this.state = { yearPanelReferer: null };
        return _this;
      }

      CalendarHeader.prototype.render = function render() {
        var _this2 = this;

        var props = this.props;
        var prefixCls = props.prefixCls,
            locale = props.locale,
            mode = props.mode,
            value = props.value,
            showTimePicker = props.showTimePicker,
            enableNext = props.enableNext,
            enablePrev = props.enablePrev,
            disabledMonth = props.disabledMonth,
            renderFooter = props.renderFooter;


        var panel = null;
        if (mode === 'month') {
          panel = _react2['default'].createElement(_MonthPanel2['default'], {
            locale: locale,
            value: value,
            rootPrefixCls: prefixCls,
            onSelect: this.onMonthSelect,
            onYearPanelShow: function onYearPanelShow() {
              return _this2.showYearPanel('month');
            },
            disabledDate: disabledMonth,
            cellRender: props.monthCellRender,
            contentRender: props.monthCellContentRender,
            renderFooter: renderFooter,
            changeYear: this.changeYear
          });
        }
        if (mode === 'year') {
          panel = _react2['default'].createElement(_YearPanel2['default'], {
            locale: locale,
            defaultValue: value,
            rootPrefixCls: prefixCls,
            onSelect: this.onYearSelect,
            onDecadePanelShow: this.showDecadePanel,
            renderFooter: renderFooter
          });
        }
        if (mode === 'decade') {
          panel = _react2['default'].createElement(_DecadePanel2['default'], {
            locale: locale,
            defaultValue: value,
            rootPrefixCls: prefixCls,
            onSelect: this.onDecadeSelect,
            renderFooter: renderFooter
          });
        }

        return _react2['default'].createElement(
          'div',
          { className: prefixCls + '-header' },
          _react2['default'].createElement(
            'div',
            { style: { position: 'relative' } },
            showIf(enablePrev && !showTimePicker, _react2['default'].createElement('a', {
              className: prefixCls + '-prev-year-btn',
              role: 'button',
              onClick: this.previousYear,
              title: locale.previousYear
            })),
            showIf(enablePrev && !showTimePicker, _react2['default'].createElement('a', {
              className: prefixCls + '-prev-month-btn',
              role: 'button',
              onClick: this.previousMonth,
              title: locale.previousMonth
            })),
            this.monthYearElement(showTimePicker),
            showIf(enableNext && !showTimePicker, _react2['default'].createElement('a', {
              className: prefixCls + '-next-month-btn',
              onClick: this.nextMonth,
              title: locale.nextMonth
            })),
            showIf(enableNext && !showTimePicker, _react2['default'].createElement('a', {
              className: prefixCls + '-next-year-btn',
              onClick: this.nextYear,
              title: locale.nextYear
            }))
          ),
          panel
        );
      };

      return CalendarHeader;
    }(_react2['default'].Component);

    CalendarHeader.propTypes = {
      prefixCls: _propTypes2['default'].string,
      value: _propTypes2['default'].object,
      onValueChange: _propTypes2['default'].func,
      showTimePicker: _propTypes2['default'].bool,
      onPanelChange: _propTypes2['default'].func,
      locale: _propTypes2['default'].object,
      enablePrev: _propTypes2['default'].any,
      enableNext: _propTypes2['default'].any,
      disabledMonth: _propTypes2['default'].func,
      renderFooter: _propTypes2['default'].func,
      onMonthSelect: _propTypes2['default'].func
    };
    CalendarHeader.defaultProps = {
      enableNext: 1,
      enablePrev: 1,
      onPanelChange: function onPanelChange() {},
      onValueChange: function onValueChange() {}
    };

    var _initialiseProps = function _initialiseProps() {
      var _this3 = this;

      this.onMonthSelect = function (value) {
        _this3.props.onPanelChange(value, 'date');
        if (_this3.props.onMonthSelect) {
          _this3.props.onMonthSelect(value);
        } else {
          _this3.props.onValueChange(value);
        }
      };

      this.onYearSelect = function (value) {
        var referer = _this3.state.yearPanelReferer;
        _this3.setState({ yearPanelReferer: null });
        _this3.props.onPanelChange(value, referer);
        _this3.props.onValueChange(value);
      };

      this.onDecadeSelect = function (value) {
        _this3.props.onPanelChange(value, 'year');
        _this3.props.onValueChange(value);
      };

      this.changeYear = function (direction) {
        if (direction > 0) {
          _this3.nextYear();
        } else {
          _this3.previousYear();
        }
      };

      this.monthYearElement = function (showTimePicker) {
        var props = _this3.props;
        var prefixCls = props.prefixCls;
        var locale = props.locale;
        var value = props.value;
        var localeData = value.localeData();
        var monthBeforeYear = locale.monthBeforeYear;
        var selectClassName = prefixCls + '-' + (monthBeforeYear ? 'my-select' : 'ym-select');
        var timeClassName = showTimePicker ? ' ' + prefixCls + '-time-status' : '';
        var year = _react2['default'].createElement(
          'a',
          {
            className: prefixCls + '-year-select' + timeClassName,
            role: 'button',
            onClick: showTimePicker ? null : function () {
              return _this3.showYearPanel('date');
            },
            title: showTimePicker ? null : locale.yearSelect
          },
          value.format(locale.yearFormat)
        );
        var month = _react2['default'].createElement(
          'a',
          {
            className: prefixCls + '-month-select' + timeClassName,
            role: 'button',
            onClick: showTimePicker ? null : _this3.showMonthPanel,
            title: showTimePicker ? null : locale.monthSelect
          },
          locale.monthFormat ? value.format(locale.monthFormat) : localeData.monthsShort(value)
        );
        var day = void 0;
        if (showTimePicker) {
          day = _react2['default'].createElement(
            'a',
            {
              className: prefixCls + '-day-select' + timeClassName,
              role: 'button'
            },
            value.format(locale.dayFormat)
          );
        }
        var my = [];
        if (monthBeforeYear) {
          my = [month, day, year];
        } else {
          my = [year, month, day];
        }
        return _react2['default'].createElement(
          'span',
          { className: selectClassName },
          (0, _mapSelf2['default'])(my)
        );
      };

      this.showMonthPanel = function () {
        // null means that users' interaction doesn't change value
        _this3.props.onPanelChange(null, 'month');
      };

      this.showYearPanel = function (referer) {
        _this3.setState({ yearPanelReferer: referer });
        _this3.props.onPanelChange(null, 'year');
      };

      this.showDecadePanel = function () {
        _this3.props.onPanelChange(null, 'decade');
      };
    };

    exports['default'] = CalendarHeader;
    module.exports = exports['default'];
    });

    unwrapExports(CalendarHeader_1);

    var TodayButton_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports['default'] = TodayButton;



    var _react2 = _interopRequireDefault(React__default);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function TodayButton(_ref) {
      var prefixCls = _ref.prefixCls,
          locale = _ref.locale,
          value = _ref.value,
          timePicker = _ref.timePicker,
          disabled = _ref.disabled,
          disabledDate = _ref.disabledDate,
          onToday = _ref.onToday,
          text = _ref.text;

      var localeNow = (!text && timePicker ? locale.now : text) || locale.today;
      var disabledToday = disabledDate && !(0, util.isAllowedDate)((0, util.getTodayTime)(value), disabledDate);
      var isDisabled = disabledToday || disabled;
      var disabledTodayClass = isDisabled ? prefixCls + '-today-btn-disabled' : '';
      return _react2['default'].createElement(
        'a',
        {
          className: prefixCls + '-today-btn ' + disabledTodayClass,
          role: 'button',
          onClick: isDisabled ? null : onToday,
          title: (0, util.getTodayTimeStr)(value)
        },
        localeNow
      );
    }
    module.exports = exports['default'];
    });

    unwrapExports(TodayButton_1);

    var OkButton_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports["default"] = OkButton;



    var _react2 = _interopRequireDefault(React__default);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    function OkButton(_ref) {
      var prefixCls = _ref.prefixCls,
          locale = _ref.locale,
          okDisabled = _ref.okDisabled,
          onOk = _ref.onOk;

      var className = prefixCls + "-ok-btn";
      if (okDisabled) {
        className += " " + prefixCls + "-ok-btn-disabled";
      }
      return _react2["default"].createElement(
        "a",
        {
          className: className,
          role: "button",
          onClick: okDisabled ? null : onOk
        },
        locale.ok
      );
    }
    module.exports = exports['default'];
    });

    unwrapExports(OkButton_1);

    var TimePickerButton_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports['default'] = TimePickerButton;



    var _react2 = _interopRequireDefault(React__default);



    var _classnames3 = _interopRequireDefault(classNames);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function TimePickerButton(_ref) {
      var _classnames;

      var prefixCls = _ref.prefixCls,
          locale = _ref.locale,
          showTimePicker = _ref.showTimePicker,
          onOpenTimePicker = _ref.onOpenTimePicker,
          onCloseTimePicker = _ref.onCloseTimePicker,
          timePickerDisabled = _ref.timePickerDisabled;

      var className = (0, _classnames3['default'])((_classnames = {}, _classnames[prefixCls + '-time-picker-btn'] = true, _classnames[prefixCls + '-time-picker-btn-disabled'] = timePickerDisabled, _classnames));
      var onClick = null;
      if (!timePickerDisabled) {
        onClick = showTimePicker ? onCloseTimePicker : onOpenTimePicker;
      }
      return _react2['default'].createElement(
        'a',
        {
          className: className,
          role: 'button',
          onClick: onClick
        },
        showTimePicker ? locale.dateSelect : locale.timeSelect
      );
    }
    module.exports = exports['default'];
    });

    unwrapExports(TimePickerButton_1);

    var CalendarFooter_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _extends3 = _interopRequireDefault(_extends);



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _reactDom2 = _interopRequireDefault(ReactDOM__default);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _mapSelf2 = _interopRequireDefault(mapSelf_1);



    var _classnames2 = _interopRequireDefault(classNames);



    var _TodayButton2 = _interopRequireDefault(TodayButton_1);



    var _OkButton2 = _interopRequireDefault(OkButton_1);



    var _TimePickerButton2 = _interopRequireDefault(TimePickerButton_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var CalendarFooter = function (_React$Component) {
      (0, _inherits3['default'])(CalendarFooter, _React$Component);

      function CalendarFooter() {
        (0, _classCallCheck3['default'])(this, CalendarFooter);
        return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
      }

      CalendarFooter.prototype.onSelect = function onSelect(value) {
        this.props.onSelect(value);
      };

      CalendarFooter.prototype.getRootDOMNode = function getRootDOMNode() {
        return _reactDom2['default'].findDOMNode(this);
      };

      CalendarFooter.prototype.render = function render() {
        var props = this.props;
        var value = props.value,
            prefixCls = props.prefixCls,
            showOk = props.showOk,
            timePicker = props.timePicker,
            renderFooter = props.renderFooter,
            mode = props.mode;

        var footerEl = null;
        var extraFooter = renderFooter && renderFooter(mode);
        if (props.showToday || timePicker || extraFooter) {
          var _cx;

          var nowEl = void 0;
          if (props.showToday) {
            nowEl = _react2['default'].createElement(_TodayButton2['default'], (0, _extends3['default'])({}, props, { value: value }));
          }
          var okBtn = void 0;
          if (showOk === true || showOk !== false && !!props.timePicker) {
            okBtn = _react2['default'].createElement(_OkButton2['default'], props);
          }
          var timePickerBtn = void 0;
          if (!!props.timePicker) {
            timePickerBtn = _react2['default'].createElement(_TimePickerButton2['default'], props);
          }

          var footerBtn = void 0;
          if (nowEl || timePickerBtn || okBtn || extraFooter) {
            footerBtn = _react2['default'].createElement(
              'span',
              { className: prefixCls + '-footer-btn' },
              extraFooter,
              (0, _mapSelf2['default'])([nowEl, timePickerBtn, okBtn])
            );
          }
          var cls = (0, _classnames2['default'])(prefixCls + '-footer', (_cx = {}, _cx[prefixCls + '-footer-show-ok'] = okBtn, _cx));
          footerEl = _react2['default'].createElement(
            'div',
            { className: cls },
            footerBtn
          );
        }
        return footerEl;
      };

      return CalendarFooter;
    }(_react2['default'].Component);

    CalendarFooter.propTypes = {
      prefixCls: _propTypes2['default'].string,
      showDateInput: _propTypes2['default'].bool,
      disabledTime: _propTypes2['default'].any,
      timePicker: _propTypes2['default'].element,
      selectedValue: _propTypes2['default'].any,
      showOk: _propTypes2['default'].bool,
      onSelect: _propTypes2['default'].func,
      value: _propTypes2['default'].object,
      renderFooter: _propTypes2['default'].func,
      defaultValue: _propTypes2['default'].object,
      mode: _propTypes2['default'].string
    };
    exports['default'] = CalendarFooter;
    module.exports = exports['default'];
    });

    unwrapExports(CalendarFooter_1);

    var CalendarMixin = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.calendarMixinWrapper = exports.calendarMixinDefaultProps = exports.calendarMixinPropTypes = undefined;



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);

    exports.getNowByCurrentStateValue = getNowByCurrentStateValue;



    var _react2 = _interopRequireDefault(React__default);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _classnames2 = _interopRequireDefault(classNames);



    var _moment2 = _interopRequireDefault(moment__default);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function noop() {}

    function getNowByCurrentStateValue(value) {
      var ret = void 0;
      if (value) {
        ret = (0, util.getTodayTime)(value);
      } else {
        ret = (0, _moment2['default'])();
      }
      return ret;
    }

    var calendarMixinPropTypes = exports.calendarMixinPropTypes = {
      value: _propTypes2['default'].object,
      defaultValue: _propTypes2['default'].object,
      onKeyDown: _propTypes2['default'].func
    };

    var calendarMixinDefaultProps = exports.calendarMixinDefaultProps = {
      onKeyDown: noop
    };

    var calendarMixinWrapper = exports.calendarMixinWrapper = function calendarMixinWrapper(ComposeComponent) {
      var _class, _temp2;

      return _temp2 = _class = function (_ComposeComponent) {
        (0, _inherits3['default'])(_class, _ComposeComponent);

        function _class() {
          var _temp, _this, _ret;

          (0, _classCallCheck3['default'])(this, _class);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _ComposeComponent.call.apply(_ComposeComponent, [this].concat(args))), _this), _this.onSelect = function (value, cause) {
            if (value) {
              _this.setValue(value);
            }
            _this.setSelectedValue(value, cause);
          }, _this.renderRoot = function (newProps) {
            var _className;

            var props = _this.props;
            var prefixCls = props.prefixCls;

            var className = (_className = {}, _className[prefixCls] = 1, _className[prefixCls + '-hidden'] = !props.visible, _className[props.className] = !!props.className, _className[newProps.className] = !!newProps.className, _className);

            return _react2['default'].createElement(
              'div',
              {
                ref: _this.saveRoot,
                className: '' + (0, _classnames2['default'])(className),
                style: _this.props.style,
                tabIndex: '0',
                onKeyDown: _this.onKeyDown,
                onBlur: _this.onBlur
              },
              newProps.children
            );
          }, _this.setSelectedValue = function (selectedValue, cause) {
            // if (this.isAllowedDate(selectedValue)) {
            if (!('selectedValue' in _this.props)) {
              _this.setState({
                selectedValue: selectedValue
              });
            }
            if (_this.props.onSelect) {
              _this.props.onSelect(selectedValue, cause);
            }
            // }
          }, _this.setValue = function (value) {
            var originalValue = _this.state.value;
            if (!('value' in _this.props)) {
              _this.setState({
                value: value
              });
            }
            if (originalValue && value && !originalValue.isSame(value) || !originalValue && value || originalValue && !value) {
              _this.props.onChange(value);
            }
          }, _this.isAllowedDate = function (value) {
            var disabledDate = _this.props.disabledDate;
            var disabledTime = _this.props.disabledTime;
            return (0, util.isAllowedDate)(value, disabledDate, disabledTime);
          }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
        }

        _class.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
          // Use origin function if provided
          if (ComposeComponent.getDerivedStateFromProps) {
            return ComposeComponent.getDerivedStateFromProps(nextProps, prevState);
          }

          var value = nextProps.value,
              selectedValue = nextProps.selectedValue;

          var newState = {};

          if ('value' in nextProps) {
            newState.value = value || nextProps.defaultValue || getNowByCurrentStateValue(prevState.value);
          }
          if ('selectedValue' in nextProps) {
            newState.selectedValue = selectedValue;
          }

          return newState;
        };

        return _class;
      }(ComposeComponent), _class.displayName = 'CalendarMixinWrapper', _class.defaultProps = ComposeComponent.defaultProps, _temp2;
    };
    });

    unwrapExports(CalendarMixin);
    var CalendarMixin_1 = CalendarMixin.calendarMixinWrapper;
    var CalendarMixin_2 = CalendarMixin.calendarMixinDefaultProps;
    var CalendarMixin_3 = CalendarMixin.calendarMixinPropTypes;
    var CalendarMixin_4 = CalendarMixin.getNowByCurrentStateValue;

    var en_US = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports['default'] = {
      today: 'Today',
      now: 'Now',
      backToToday: 'Back to today',
      ok: 'Ok',
      clear: 'Clear',
      month: 'Month',
      year: 'Year',
      timeSelect: 'select time',
      dateSelect: 'select date',
      weekSelect: 'Choose a week',
      monthSelect: 'Choose a month',
      yearSelect: 'Choose a year',
      decadeSelect: 'Choose a decade',
      yearFormat: 'YYYY',
      dateFormat: 'M/D/YYYY',
      dayFormat: 'D',
      dateTimeFormat: 'M/D/YYYY HH:mm:ss',
      monthBeforeYear: true,
      previousMonth: 'Previous month (PageUp)',
      nextMonth: 'Next month (PageDown)',
      previousYear: 'Last year (Control + left)',
      nextYear: 'Next year (Control + right)',
      previousDecade: 'Last decade',
      nextDecade: 'Next decade',
      previousCentury: 'Last century',
      nextCentury: 'Next century'
    };
    module.exports = exports['default'];
    });

    unwrapExports(en_US);

    var CommonMixin = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.commonMixinWrapper = exports.defaultProp = exports.propType = undefined;



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _en_US2 = _interopRequireDefault(en_US);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function noop() {}

    var propType = exports.propType = {
      className: _propTypes2['default'].string,
      locale: _propTypes2['default'].object,
      style: _propTypes2['default'].object,
      visible: _propTypes2['default'].bool,
      onSelect: _propTypes2['default'].func,
      prefixCls: _propTypes2['default'].string,
      onChange: _propTypes2['default'].func,
      onOk: _propTypes2['default'].func
    };

    var defaultProp = exports.defaultProp = {
      locale: _en_US2['default'],
      style: {},
      visible: true,
      prefixCls: 'rc-calendar',
      className: '',
      onSelect: noop,
      onChange: noop,
      onClear: noop,
      renderFooter: function renderFooter() {
        return null;
      },
      renderSidebar: function renderSidebar() {
        return null;
      }
    };

    var commonMixinWrapper = exports.commonMixinWrapper = function commonMixinWrapper(ComposeComponent) {
      var _class, _temp2;

      return _temp2 = _class = function (_ComposeComponent) {
        (0, _inherits3['default'])(_class, _ComposeComponent);

        function _class() {
          var _temp, _this, _ret;

          (0, _classCallCheck3['default'])(this, _class);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _ComposeComponent.call.apply(_ComposeComponent, [this].concat(args))), _this), _this.getFormat = function () {
            var format = _this.props.format;
            var _this$props = _this.props,
                locale = _this$props.locale,
                timePicker = _this$props.timePicker;

            if (!format) {
              if (timePicker) {
                format = locale.dateTimeFormat;
              } else {
                format = locale.dateFormat;
              }
            }
            return format;
          }, _this.focus = function () {
            if (_this.focusElement) {
              _this.focusElement.focus();
            } else if (_this.rootInstance) {
              _this.rootInstance.focus();
            }
          }, _this.saveFocusElement = function (focusElement) {
            _this.focusElement = focusElement;
          }, _this.saveRoot = function (root) {
            _this.rootInstance = root;
          }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
        }

        _class.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
          return this.props.visible || nextProps.visible;
        };

        return _class;
      }(ComposeComponent), _class.displayName = 'CommonMixinWrapper', _class.defaultProps = ComposeComponent.defaultProps, _class.getDerivedStateFromProps = ComposeComponent.getDerivedStateFromProps, _temp2;
    };
    });

    unwrapExports(CommonMixin);
    var CommonMixin_1 = CommonMixin.commonMixinWrapper;
    var CommonMixin_2 = CommonMixin.defaultProp;
    var CommonMixin_3 = CommonMixin.propType;

    var MonthCalendar_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _extends3 = _interopRequireDefault(_extends);



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _KeyCode2 = _interopRequireDefault(KeyCode_1);





    var _CalendarHeader2 = _interopRequireDefault(CalendarHeader_1);



    var _CalendarFooter2 = _interopRequireDefault(CalendarFooter_1);







    var _moment2 = _interopRequireDefault(moment__default);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var MonthCalendar = function (_React$Component) {
      (0, _inherits3['default'])(MonthCalendar, _React$Component);

      function MonthCalendar(props) {
        (0, _classCallCheck3['default'])(this, MonthCalendar);

        var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

        _this.onKeyDown = function (event) {
          var keyCode = event.keyCode;
          var ctrlKey = event.ctrlKey || event.metaKey;
          var stateValue = _this.state.value;
          var disabledDate = _this.props.disabledDate;

          var value = stateValue;
          switch (keyCode) {
            case _KeyCode2['default'].DOWN:
              value = stateValue.clone();
              value.add(3, 'months');
              break;
            case _KeyCode2['default'].UP:
              value = stateValue.clone();
              value.add(-3, 'months');
              break;
            case _KeyCode2['default'].LEFT:
              value = stateValue.clone();
              if (ctrlKey) {
                value.add(-1, 'years');
              } else {
                value.add(-1, 'months');
              }
              break;
            case _KeyCode2['default'].RIGHT:
              value = stateValue.clone();
              if (ctrlKey) {
                value.add(1, 'years');
              } else {
                value.add(1, 'months');
              }
              break;
            case _KeyCode2['default'].ENTER:
              if (!disabledDate || !disabledDate(stateValue)) {
                _this.onSelect(stateValue);
              }
              event.preventDefault();
              return 1;
            default:
              return undefined;
          }
          if (value !== stateValue) {
            _this.setValue(value);
            event.preventDefault();
            return 1;
          }
        };

        _this.handlePanelChange = function (_, mode) {
          if (mode !== 'date') {
            _this.setState({ mode: mode });
          }
        };

        _this.state = {
          mode: 'month',
          value: props.value || props.defaultValue || (0, _moment2['default'])(),
          selectedValue: props.selectedValue || props.defaultSelectedValue
        };
        return _this;
      }

      MonthCalendar.prototype.render = function render() {
        var props = this.props,
            state = this.state;
        var mode = state.mode,
            value = state.value;

        var children = _react2['default'].createElement(
          'div',
          { className: props.prefixCls + '-month-calendar-content' },
          _react2['default'].createElement(
            'div',
            { className: props.prefixCls + '-month-header-wrap' },
            _react2['default'].createElement(_CalendarHeader2['default'], {
              prefixCls: props.prefixCls,
              mode: mode,
              value: value,
              locale: props.locale,
              disabledMonth: props.disabledDate,
              monthCellRender: props.monthCellRender,
              monthCellContentRender: props.monthCellContentRender,
              onMonthSelect: this.onSelect,
              onValueChange: this.setValue,
              onPanelChange: this.handlePanelChange
            })
          ),
          _react2['default'].createElement(_CalendarFooter2['default'], {
            prefixCls: props.prefixCls,
            renderFooter: props.renderFooter
          })
        );
        return this.renderRoot({
          className: props.prefixCls + '-month-calendar',
          children: children
        });
      };

      return MonthCalendar;
    }(_react2['default'].Component);

    MonthCalendar.propTypes = (0, _extends3['default'])({}, CalendarMixin.calendarMixinPropTypes, CommonMixin.propType, {
      monthCellRender: _propTypes2['default'].func,
      value: _propTypes2['default'].object,
      defaultValue: _propTypes2['default'].object,
      selectedValue: _propTypes2['default'].object,
      defaultSelectedValue: _propTypes2['default'].object,
      disabledDate: _propTypes2['default'].func
    });
    MonthCalendar.defaultProps = (0, _extends3['default'])({}, CommonMixin.defaultProp, CalendarMixin.calendarMixinDefaultProps);
    exports['default'] = (0, reactLifecyclesCompat__default.polyfill)((0, CalendarMixin.calendarMixinWrapper)((0, CommonMixin.commonMixinWrapper)(MonthCalendar)));
    module.exports = exports['default'];
    });

    var MonthCalendar = unwrapExports(MonthCalendar_1);

    var createChainedFunction_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createChainedFunction;

    /**
     * Safe chained function
     *
     * Will only create a new function if needed,
     * otherwise will pass back existing functions or null.
     *
     * @returns {function|null}
     */
    function createChainedFunction() {
      var args = [].slice.call(arguments, 0);

      if (args.length === 1) {
        return args[0];
      }

      return function chainedFunction() {
        for (var i = 0; i < args.length; i++) {
          if (args[i] && args[i].apply) {
            args[i].apply(this, arguments);
          }
        }
      };
    }
    });

    unwrapExports(createChainedFunction_1);

    var placements_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    var autoAdjustOverflow = {
      adjustX: 1,
      adjustY: 1
    };

    var targetOffset = [0, 0];

    var placements = {
      bottomLeft: {
        points: ['tl', 'tl'],
        overflow: autoAdjustOverflow,
        offset: [0, -3],
        targetOffset: targetOffset
      },
      bottomRight: {
        points: ['tr', 'tr'],
        overflow: autoAdjustOverflow,
        offset: [0, -3],
        targetOffset: targetOffset
      },
      topRight: {
        points: ['br', 'br'],
        overflow: autoAdjustOverflow,
        offset: [0, 3],
        targetOffset: targetOffset
      },
      topLeft: {
        points: ['bl', 'bl'],
        overflow: autoAdjustOverflow,
        offset: [0, 3],
        targetOffset: targetOffset
      }
    };

    exports['default'] = placements;
    module.exports = exports['default'];
    });

    unwrapExports(placements_1);

    function contains(root, n) {
      var node = n;

      while (node) {
        if (node === root) {
          return true;
        }

        node = node.parentNode;
      }

      return false;
    }

    function addEventListenerWrap(target, eventType, cb, option) {
      /* eslint camelcase: 2 */
      var callback = ReactDOM__default.unstable_batchedUpdates ? function run(e) {
        ReactDOM__default.unstable_batchedUpdates(cb, e);
      } : cb;
      return addDOMEventListener(target, eventType, callback, option);
    }

    function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

    function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

    function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

    var ContainerRender =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits$1(ContainerRender, _React$Component);

      function ContainerRender() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck$1(this, ContainerRender);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn$1(this, (_getPrototypeOf2 = _getPrototypeOf(ContainerRender)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _this.removeContainer = function () {
          if (_this.container) {
            ReactDOM__default.unmountComponentAtNode(_this.container);

            _this.container.parentNode.removeChild(_this.container);

            _this.container = null;
          }
        };

        _this.renderComponent = function (props, ready) {
          var _this$props = _this.props,
              visible = _this$props.visible,
              getComponent = _this$props.getComponent,
              forceRender = _this$props.forceRender,
              getContainer = _this$props.getContainer,
              parent = _this$props.parent;

          if (visible || parent._component || forceRender) {
            if (!_this.container) {
              _this.container = getContainer();
            }

            ReactDOM__default.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
              if (ready) {
                ready.call(this);
              }
            });
          }
        };

        return _this;
      }

      _createClass(ContainerRender, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.props.autoMount) {
            this.renderComponent();
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (this.props.autoMount) {
            this.renderComponent();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.props.autoDestroy) {
            this.removeContainer();
          }
        }
      }, {
        key: "render",
        value: function render() {
          return this.props.children({
            renderComponent: this.renderComponent,
            removeContainer: this.removeContainer
          });
        }
      }]);

      return ContainerRender;
    }(React__default.Component);

    ContainerRender.propTypes = {
      autoMount: propTypes.bool,
      autoDestroy: propTypes.bool,
      visible: propTypes.bool,
      forceRender: propTypes.bool,
      parent: propTypes.any,
      getComponent: propTypes.func.isRequired,
      getContainer: propTypes.func.isRequired,
      children: propTypes.func.isRequired
    };
    ContainerRender.defaultProps = {
      autoMount: true,
      autoDestroy: true,
      forceRender: false
    };

    function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

    function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

    function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

    function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

    function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

    function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

    var Portal =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits$2(Portal, _React$Component);

      function Portal() {
        _classCallCheck$2(this, Portal);

        return _possibleConstructorReturn$2(this, _getPrototypeOf$1(Portal).apply(this, arguments));
      }

      _createClass$1(Portal, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.createContainer();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var didUpdate = this.props.didUpdate;

          if (didUpdate) {
            didUpdate(prevProps);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.removeContainer();
        }
      }, {
        key: "createContainer",
        value: function createContainer() {
          this._container = this.props.getContainer();
          this.forceUpdate();
        }
      }, {
        key: "removeContainer",
        value: function removeContainer() {
          if (this._container) {
            this._container.parentNode.removeChild(this._container);
          }
        }
      }, {
        key: "render",
        value: function render() {
          if (this._container) {
            return ReactDOM__default.createPortal(this.props.children, this._container);
          }

          return null;
        }
      }]);

      return Portal;
    }(React__default.Component);

    Portal.propTypes = {
      getContainer: propTypes.func.isRequired,
      children: propTypes.node.isRequired,
      didUpdate: propTypes.func
    };

    function isPointsEq(a1, a2, isAlignPoint) {
      if (isAlignPoint) {
        return a1[0] === a2[0];
      }
      return a1[0] === a2[0] && a1[1] === a2[1];
    }

    function getAlignFromPlacement(builtinPlacements, placementStr, align) {
      var baseAlign = builtinPlacements[placementStr] || {};
      return _extends$1({}, baseAlign, align);
    }

    function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
      var points = align.points;
      for (var placement in builtinPlacements) {
        if (builtinPlacements.hasOwnProperty(placement)) {
          if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
            return prefixCls + '-placement-' + placement;
          }
        }
      }
      return '';
    }

    function saveRef(name, component) {
      this[name] = component;
    }

    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    _export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

    var $Object$1 = _core.Object;
    var defineProperty$1 = function defineProperty(it, key, desc) {
      return $Object$1.defineProperty(it, key, desc);
    };

    var defineProperty$2 = createCommonjsModule(function (module) {
    module.exports = { "default": defineProperty$1, __esModule: true };
    });

    unwrapExports(defineProperty$2);

    var createClass = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _defineProperty2 = _interopRequireDefault(defineProperty$2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          (0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    });

    var _createClass$2 = unwrapExports(createClass);

    function _typeof$3(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof$3 = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof$3 = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof$3(obj);
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(source, true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(source).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    var vendorPrefix;
    var jsCssMap = {
      Webkit: '-webkit-',
      Moz: '-moz-',
      // IE did it wrong again ...
      ms: '-ms-',
      O: '-o-'
    };

    function getVendorPrefix() {
      if (vendorPrefix !== undefined) {
        return vendorPrefix;
      }

      vendorPrefix = '';
      var style = document.createElement('p').style;
      var testProp = 'Transform';

      for (var key in jsCssMap) {
        if (key + testProp in style) {
          vendorPrefix = key;
        }
      }

      return vendorPrefix;
    }

    function getTransitionName() {
      return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
    }

    function getTransformName() {
      return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
    }
    function setTransitionProperty(node, value) {
      var name = getTransitionName();

      if (name) {
        node.style[name] = value;

        if (name !== 'transitionProperty') {
          node.style.transitionProperty = value;
        }
      }
    }

    function setTransform(node, value) {
      var name = getTransformName();

      if (name) {
        node.style[name] = value;

        if (name !== 'transform') {
          node.style.transform = value;
        }
      }
    }

    function getTransitionProperty(node) {
      return node.style.transitionProperty || node.style[getTransitionName()];
    }
    function getTransformXY(node) {
      var style = window.getComputedStyle(node, null);
      var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

      if (transform && transform !== 'none') {
        var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
        return {
          x: parseFloat(matrix[12] || matrix[4], 0),
          y: parseFloat(matrix[13] || matrix[5], 0)
        };
      }

      return {
        x: 0,
        y: 0
      };
    }
    var matrix2d = /matrix\((.*)\)/;
    var matrix3d = /matrix3d\((.*)\)/;
    function setTransformXY(node, xy) {
      var style = window.getComputedStyle(node, null);
      var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

      if (transform && transform !== 'none') {
        var arr;
        var match2d = transform.match(matrix2d);

        if (match2d) {
          match2d = match2d[1];
          arr = match2d.split(',').map(function (item) {
            return parseFloat(item, 10);
          });
          arr[4] = xy.x;
          arr[5] = xy.y;
          setTransform(node, "matrix(".concat(arr.join(','), ")"));
        } else {
          var match3d = transform.match(matrix3d)[1];
          arr = match3d.split(',').map(function (item) {
            return parseFloat(item, 10);
          });
          arr[12] = xy.x;
          arr[13] = xy.y;
          setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
        }
      } else {
        setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
      }
    }

    var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
    var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

    function forceRelayout(elem) {
      var originalStyle = elem.style.display;
      elem.style.display = 'none';
      elem.offsetHeight; // eslint-disable-line

      elem.style.display = originalStyle;
    }

    function css(el, name, v) {
      var value = v;

      if (_typeof$3(name) === 'object') {
        for (var i in name) {
          if (name.hasOwnProperty(i)) {
            css(el, i, name[i]);
          }
        }

        return undefined;
      }

      if (typeof value !== 'undefined') {
        if (typeof value === 'number') {
          value = "".concat(value, "px");
        }

        el.style[name] = value;
        return undefined;
      }

      return getComputedStyleX(el, name);
    }

    function getClientPosition(elem) {
      var box;
      var x;
      var y;
      var doc = elem.ownerDocument;
      var body = doc.body;
      var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

      box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
      // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
      // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

      x = box.left;
      y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
      // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
      // IE6 standards mode, this border can be overridden by setting the
      // document element's border to zero -- thus, we cannot rely on the
      // offset always being 2 pixels.
      // In quirks mode, the offset can be determined by querying the body's
      // clientLeft/clientTop, but in standards mode, it is found by querying
      // the document element's clientLeft/clientTop.  Since we already called
      // getClientBoundingRect we have already forced a reflow, so it is not
      // too expensive just to query them all.
      // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
      // 窗口边框标准是设 documentElement ,quirks 时设置 body
      // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
      // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
      // 标准 ie 下 docElem.clientTop 就是 border-top
      // ie7 html 即窗口边框改变不了。永远为 2
      // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

      x -= docElem.clientLeft || body.clientLeft || 0;
      y -= docElem.clientTop || body.clientTop || 0;
      return {
        left: x,
        top: y
      };
    }

    function getScroll(w, top) {
      var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
      var method = "scroll".concat(top ? 'Top' : 'Left');

      if (typeof ret !== 'number') {
        var d = w.document; // ie6,7,8 standard mode

        ret = d.documentElement[method];

        if (typeof ret !== 'number') {
          // quirks mode
          ret = d.body[method];
        }
      }

      return ret;
    }

    function getScrollLeft(w) {
      return getScroll(w);
    }

    function getScrollTop(w) {
      return getScroll(w, true);
    }

    function getOffset(el) {
      var pos = getClientPosition(el);
      var doc = el.ownerDocument;
      var w = doc.defaultView || doc.parentWindow;
      pos.left += getScrollLeft(w);
      pos.top += getScrollTop(w);
      return pos;
    }
    /**
     * A crude way of determining if an object is a window
     * @member util
     */


    function isWindow(obj) {
      // must use == for ie8

      /* eslint eqeqeq:0 */
      return obj !== null && obj !== undefined && obj == obj.window;
    }

    function getDocument(node) {
      if (isWindow(node)) {
        return node.document;
      }

      if (node.nodeType === 9) {
        return node;
      }

      return node.ownerDocument;
    }

    function _getComputedStyle(elem, name, cs) {
      var computedStyle = cs;
      var val = '';
      var d = getDocument(elem);
      computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

      if (computedStyle) {
        val = computedStyle.getPropertyValue(name) || computedStyle[name];
      }

      return val;
    }

    var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');

    var RE_POS = /^(top|right|bottom|left)$/;
    var CURRENT_STYLE = 'currentStyle';
    var RUNTIME_STYLE = 'runtimeStyle';
    var LEFT = 'left';
    var PX = 'px';

    function _getComputedStyleIE(elem, name) {
      // currentStyle maybe null
      // http://msdn.microsoft.com/en-us/library/ms535231.aspx
      var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
      // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
      // 在 ie 下不对，需要直接用 offset 方式
      // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
      // From the awesome hack by Dean Edwards
      // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
      // If we're not dealing with a regular pixel number
      // but a number that has a weird ending, we need to convert it to pixels
      // exclude left right for relativity

      if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
        // Remember the original values
        var style = elem.style;
        var left = style[LEFT];
        var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

        elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

        style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
        ret = style.pixelLeft + PX; // Revert the changed values

        style[LEFT] = left;
        elem[RUNTIME_STYLE][LEFT] = rsLeft;
      }

      return ret === '' ? 'auto' : ret;
    }

    if (typeof window !== 'undefined') {
      getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
    }

    function getOffsetDirection(dir, option) {
      if (dir === 'left') {
        return option.useCssRight ? 'right' : dir;
      }

      return option.useCssBottom ? 'bottom' : dir;
    }

    function oppositeOffsetDirection(dir) {
      if (dir === 'left') {
        return 'right';
      } else if (dir === 'right') {
        return 'left';
      } else if (dir === 'top') {
        return 'bottom';
      } else if (dir === 'bottom') {
        return 'top';
      }
    } // 设置 elem 相对 elem.ownerDocument 的坐标


    function setLeftTop(elem, offset, option) {
      // set position first, in-case top/left are set even on static elem
      if (css(elem, 'position') === 'static') {
        elem.style.position = 'relative';
      }

      var presetH = -999;
      var presetV = -999;
      var horizontalProperty = getOffsetDirection('left', option);
      var verticalProperty = getOffsetDirection('top', option);
      var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
      var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

      if (horizontalProperty !== 'left') {
        presetH = 999;
      }

      if (verticalProperty !== 'top') {
        presetV = 999;
      }

      var originalTransition = '';
      var originalOffset = getOffset(elem);

      if ('left' in offset || 'top' in offset) {
        originalTransition = getTransitionProperty(elem) || '';
        setTransitionProperty(elem, 'none');
      }

      if ('left' in offset) {
        elem.style[oppositeHorizontalProperty] = '';
        elem.style[horizontalProperty] = "".concat(presetH, "px");
      }

      if ('top' in offset) {
        elem.style[oppositeVerticalProperty] = '';
        elem.style[verticalProperty] = "".concat(presetV, "px");
      } // force relayout


      forceRelayout(elem);
      var old = getOffset(elem);
      var originalStyle = {};

      for (var key in offset) {
        if (offset.hasOwnProperty(key)) {
          var dir = getOffsetDirection(key, option);
          var preset = key === 'left' ? presetH : presetV;
          var off = originalOffset[key] - old[key];

          if (dir === key) {
            originalStyle[dir] = preset + off;
          } else {
            originalStyle[dir] = preset - off;
          }
        }
      }

      css(elem, originalStyle); // force relayout

      forceRelayout(elem);

      if ('left' in offset || 'top' in offset) {
        setTransitionProperty(elem, originalTransition);
      }

      var ret = {};

      for (var _key in offset) {
        if (offset.hasOwnProperty(_key)) {
          var _dir = getOffsetDirection(_key, option);

          var _off = offset[_key] - originalOffset[_key];

          if (_key === _dir) {
            ret[_dir] = originalStyle[_dir] + _off;
          } else {
            ret[_dir] = originalStyle[_dir] - _off;
          }
        }
      }

      css(elem, ret);
    }

    function setTransform$1(elem, offset) {
      var originalOffset = getOffset(elem);
      var originalXY = getTransformXY(elem);
      var resultXY = {
        x: originalXY.x,
        y: originalXY.y
      };

      if ('left' in offset) {
        resultXY.x = originalXY.x + offset.left - originalOffset.left;
      }

      if ('top' in offset) {
        resultXY.y = originalXY.y + offset.top - originalOffset.top;
      }

      setTransformXY(elem, resultXY);
    }

    function setOffset(elem, offset, option) {
      if (option.ignoreShake) {
        var oriOffset = getOffset(elem);
        var oLeft = oriOffset.left.toFixed(0);
        var oTop = oriOffset.top.toFixed(0);
        var tLeft = offset.left.toFixed(0);
        var tTop = offset.top.toFixed(0);

        if (oLeft === tLeft && oTop === tTop) {
          return;
        }
      }

      if (option.useCssRight || option.useCssBottom) {
        setLeftTop(elem, offset, option);
      } else if (option.useCssTransform && getTransformName() in document.body.style) {
        setTransform$1(elem, offset);
      } else {
        setLeftTop(elem, offset, option);
      }
    }

    function each(arr, fn) {
      for (var i = 0; i < arr.length; i++) {
        fn(arr[i]);
      }
    }

    function isBorderBoxFn(elem) {
      return getComputedStyleX(elem, 'boxSizing') === 'border-box';
    }

    var BOX_MODELS = ['margin', 'border', 'padding'];
    var CONTENT_INDEX = -1;
    var PADDING_INDEX = 2;
    var BORDER_INDEX = 1;
    var MARGIN_INDEX = 0;

    function swap(elem, options, callback) {
      var old = {};
      var style = elem.style;
      var name; // Remember the old values, and insert the new ones

      for (name in options) {
        if (options.hasOwnProperty(name)) {
          old[name] = style[name];
          style[name] = options[name];
        }
      }

      callback.call(elem); // Revert the old values

      for (name in options) {
        if (options.hasOwnProperty(name)) {
          style[name] = old[name];
        }
      }
    }

    function getPBMWidth(elem, props, which) {
      var value = 0;
      var prop;
      var j;
      var i;

      for (j = 0; j < props.length; j++) {
        prop = props[j];

        if (prop) {
          for (i = 0; i < which.length; i++) {
            var cssProp = void 0;

            if (prop === 'border') {
              cssProp = "".concat(prop).concat(which[i], "Width");
            } else {
              cssProp = prop + which[i];
            }

            value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
          }
        }
      }

      return value;
    }

    var domUtils = {
      getParent: function getParent(element) {
        var parent = element;

        do {
          if (parent.nodeType === 11 && parent.host) {
            parent = parent.host;
          } else {
            parent = parent.parentNode;
          }
        } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

        return parent;
      }
    };
    each(['Width', 'Height'], function (name) {
      domUtils["doc".concat(name)] = function (refWin) {
        var d = refWin.document;
        return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
        // ie standard mode : documentElement.scrollHeight> body.scrollHeight
        d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
        d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
      };

      domUtils["viewport".concat(name)] = function (win) {
        // pc browser includes scrollbar in window.innerWidth
        var prop = "client".concat(name);
        var doc = win.document;
        var body = doc.body;
        var documentElement = doc.documentElement;
        var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
        // backcompat 取 body

        return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
      };
    });
    /*
     得到元素的大小信息
     @param elem
     @param name
     @param {String} [extra]  'padding' : (css width) + padding
     'border' : (css width) + padding + border
     'margin' : (css width) + padding + border + margin
     */

    function getWH(elem, name, ex) {
      var extra = ex;

      if (isWindow(elem)) {
        return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
      } else if (elem.nodeType === 9) {
        return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
      }

      var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
      var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
      var computedStyle = getComputedStyleX(elem);
      var isBorderBox = isBorderBoxFn(elem);
      var cssBoxValue = 0;

      if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
        borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

        cssBoxValue = getComputedStyleX(elem, name);

        if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
          cssBoxValue = elem.style[name] || 0;
        } // Normalize '', auto, and prepare for extra


        cssBoxValue = parseFloat(cssBoxValue) || 0;
      }

      if (extra === undefined) {
        extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
      }

      var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
      var val = borderBoxValue || cssBoxValue;

      if (extra === CONTENT_INDEX) {
        if (borderBoxValueOrIsBorderBox) {
          return val - getPBMWidth(elem, ['border', 'padding'], which);
        }

        return cssBoxValue;
      } else if (borderBoxValueOrIsBorderBox) {
        if (extra === BORDER_INDEX) {
          return val;
        }

        return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
      }

      return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
    }

    var cssShow = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    }; // fix #119 : https://github.com/kissyteam/kissy/issues/119

    function getWHIgnoreDisplay() {
      for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var val;
      var elem = args[0]; // in case elem is window
      // elem.offsetWidth === undefined

      if (elem.offsetWidth !== 0) {
        val = getWH.apply(undefined, args);
      } else {
        swap(elem, cssShow, function () {
          val = getWH.apply(undefined, args);
        });
      }

      return val;
    }

    each(['width', 'height'], function (name) {
      var first = name.charAt(0).toUpperCase() + name.slice(1);

      domUtils["outer".concat(first)] = function (el, includeMargin) {
        return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
      };

      var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

      domUtils[name] = function (elem, v) {
        var val = v;

        if (val !== undefined) {
          if (elem) {
            var computedStyle = getComputedStyleX(elem);
            var isBorderBox = isBorderBoxFn(elem);

            if (isBorderBox) {
              val += getPBMWidth(elem, ['padding', 'border'], which);
            }

            return css(elem, name, val);
          }

          return undefined;
        }

        return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
      };
    });

    function mix(to, from) {
      for (var i in from) {
        if (from.hasOwnProperty(i)) {
          to[i] = from[i];
        }
      }

      return to;
    }

    var utils = {
      getWindow: function getWindow(node) {
        if (node && node.document && node.setTimeout) {
          return node;
        }

        var doc = node.ownerDocument || node;
        return doc.defaultView || doc.parentWindow;
      },
      getDocument: getDocument,
      offset: function offset(el, value, option) {
        if (typeof value !== 'undefined') {
          setOffset(el, value, option || {});
        } else {
          return getOffset(el);
        }
      },
      isWindow: isWindow,
      each: each,
      css: css,
      clone: function clone(obj) {
        var i;
        var ret = {};

        for (i in obj) {
          if (obj.hasOwnProperty(i)) {
            ret[i] = obj[i];
          }
        }

        var overflow = obj.overflow;

        if (overflow) {
          for (i in obj) {
            if (obj.hasOwnProperty(i)) {
              ret.overflow[i] = obj.overflow[i];
            }
          }
        }

        return ret;
      },
      mix: mix,
      getWindowScrollLeft: function getWindowScrollLeft(w) {
        return getScrollLeft(w);
      },
      getWindowScrollTop: function getWindowScrollTop(w) {
        return getScrollTop(w);
      },
      merge: function merge() {
        var ret = {};

        for (var i = 0; i < arguments.length; i++) {
          utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
        }

        return ret;
      },
      viewportWidth: 0,
      viewportHeight: 0
    };
    mix(utils, domUtils);

    /**
     * 得到会导致元素显示不全的祖先元素
     */

    var getParent = utils.getParent;

    function getOffsetParent(element) {
      if (utils.isWindow(element) || element.nodeType === 9) {
        return null;
      } // ie 这个也不是完全可行

      /*
       <div style="width: 50px;height: 100px;overflow: hidden">
       <div style="width: 50px;height: 100px;position: relative;" id="d6">
       元素 6 高 100px 宽 50px<br/>
       </div>
       </div>
       */
      // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
      //  In other browsers it only includes elements with position absolute, relative or
      // fixed, not elements with overflow set to auto or scroll.
      //        if (UA.ie && ieMode < 8) {
      //            return element.offsetParent;
      //        }
      // 统一的 offsetParent 方法


      var doc = utils.getDocument(element);
      var body = doc.body;
      var parent;
      var positionStyle = utils.css(element, 'position');
      var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

      if (!skipStatic) {
        return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
      }

      for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
        positionStyle = utils.css(parent, 'position');

        if (positionStyle !== 'static') {
          return parent;
        }
      }

      return null;
    }

    var getParent$1 = utils.getParent;
    function isAncestorFixed(element) {
      if (utils.isWindow(element) || element.nodeType === 9) {
        return false;
      }

      var doc = utils.getDocument(element);
      var body = doc.body;
      var parent = null;

      for (parent = getParent$1(element); parent && parent !== body; parent = getParent$1(parent)) {
        var positionStyle = utils.css(parent, 'position');

        if (positionStyle === 'fixed') {
          return true;
        }
      }

      return false;
    }

    /**
     * 获得元素的显示部分的区域
     */

    function getVisibleRectForElement(element) {
      var visibleRect = {
        left: 0,
        right: Infinity,
        top: 0,
        bottom: Infinity
      };
      var el = getOffsetParent(element);
      var doc = utils.getDocument(element);
      var win = doc.defaultView || doc.parentWindow;
      var body = doc.body;
      var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
      // all scrollable containers.

      while (el) {
        // clientWidth is zero for inline block elements in ie.
        if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
        // viewport. In some browsers, el.offsetParent may be
        // document.documentElement, so check for that too.
        el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
          var pos = utils.offset(el); // add border

          pos.left += el.clientLeft;
          pos.top += el.clientTop;
          visibleRect.top = Math.max(visibleRect.top, pos.top);
          visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
          pos.left + el.clientWidth);
          visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
          visibleRect.left = Math.max(visibleRect.left, pos.left);
        } else if (el === body || el === documentElement) {
          break;
        }

        el = getOffsetParent(el);
      } // Set element position to fixed
      // make sure absolute element itself don't affect it's visible area
      // https://github.com/ant-design/ant-design/issues/7601


      var originalPosition = null;

      if (!utils.isWindow(element) && element.nodeType !== 9) {
        originalPosition = element.style.position;
        var position = utils.css(element, 'position');

        if (position === 'absolute') {
          element.style.position = 'fixed';
        }
      }

      var scrollX = utils.getWindowScrollLeft(win);
      var scrollY = utils.getWindowScrollTop(win);
      var viewportWidth = utils.viewportWidth(win);
      var viewportHeight = utils.viewportHeight(win);
      var documentWidth = documentElement.scrollWidth;
      var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
      // We should cut this ourself.

      var bodyStyle = window.getComputedStyle(body);

      if (bodyStyle.overflowX === 'hidden') {
        documentWidth = win.innerWidth;
      }

      if (bodyStyle.overflowY === 'hidden') {
        documentHeight = win.innerHeight;
      } // Reset element position after calculate the visible area


      if (element.style) {
        element.style.position = originalPosition;
      }

      if (isAncestorFixed(element)) {
        // Clip by viewport's size.
        visibleRect.left = Math.max(visibleRect.left, scrollX);
        visibleRect.top = Math.max(visibleRect.top, scrollY);
        visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
        visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
      } else {
        // Clip by document's size.
        var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
        visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
        var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
        visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
      }

      return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
    }

    function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
      var pos = utils.clone(elFuturePos);
      var size = {
        width: elRegion.width,
        height: elRegion.height
      };

      if (overflow.adjustX && pos.left < visibleRect.left) {
        pos.left = visibleRect.left;
      } // Left edge inside and right edge outside viewport, try to resize it.


      if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
        size.width -= pos.left + size.width - visibleRect.right;
      } // Right edge outside viewport, try to move it.


      if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
        // 保证左边界和可视区域左边界对齐
        pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
      } // Top edge outside viewport, try to move it.


      if (overflow.adjustY && pos.top < visibleRect.top) {
        pos.top = visibleRect.top;
      } // Top edge inside and bottom edge outside viewport, try to resize it.


      if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
        size.height -= pos.top + size.height - visibleRect.bottom;
      } // Bottom edge outside viewport, try to move it.


      if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
        // 保证上边界和可视区域上边界对齐
        pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
      }

      return utils.mix(pos, size);
    }

    function getRegion(node) {
      var offset;
      var w;
      var h;

      if (!utils.isWindow(node) && node.nodeType !== 9) {
        offset = utils.offset(node);
        w = utils.outerWidth(node);
        h = utils.outerHeight(node);
      } else {
        var win = utils.getWindow(node);
        offset = {
          left: utils.getWindowScrollLeft(win),
          top: utils.getWindowScrollTop(win)
        };
        w = utils.viewportWidth(win);
        h = utils.viewportHeight(win);
      }

      offset.width = w;
      offset.height = h;
      return offset;
    }

    /**
     * 获取 node 上的 align 对齐点 相对于页面的坐标
     */
    function getAlignOffset(region, align) {
      var V = align.charAt(0);
      var H = align.charAt(1);
      var w = region.width;
      var h = region.height;
      var x = region.left;
      var y = region.top;

      if (V === 'c') {
        y += h / 2;
      } else if (V === 'b') {
        y += h;
      }

      if (H === 'c') {
        x += w / 2;
      } else if (H === 'r') {
        x += w;
      }

      return {
        left: x,
        top: y
      };
    }

    function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
      var p1 = getAlignOffset(refNodeRegion, points[1]);
      var p2 = getAlignOffset(elRegion, points[0]);
      var diff = [p2.left - p1.left, p2.top - p1.top];
      return {
        left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
        top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
      };
    }

    /**
     * align dom node flexibly
     * @author yiminghe@gmail.com
     */

    function isFailX(elFuturePos, elRegion, visibleRect) {
      return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
    }

    function isFailY(elFuturePos, elRegion, visibleRect) {
      return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
    }

    function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
      return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
    }

    function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
      return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
    }

    function flip(points, reg, map) {
      var ret = [];
      utils.each(points, function (p) {
        ret.push(p.replace(reg, function (m) {
          return map[m];
        }));
      });
      return ret;
    }

    function flipOffset(offset, index) {
      offset[index] = -offset[index];
      return offset;
    }

    function convertOffset(str, offsetLen) {
      var n;

      if (/%$/.test(str)) {
        n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
      } else {
        n = parseInt(str, 10);
      }

      return n || 0;
    }

    function normalizeOffset(offset, el) {
      offset[0] = convertOffset(offset[0], el.width);
      offset[1] = convertOffset(offset[1], el.height);
    }
    /**
     * @param el
     * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
     * @param align
     */


    function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
      var points = align.points;
      var offset = align.offset || [0, 0];
      var targetOffset = align.targetOffset || [0, 0];
      var overflow = align.overflow;
      var source = align.source || el;
      offset = [].concat(offset);
      targetOffset = [].concat(targetOffset);
      overflow = overflow || {};
      var newOverflowCfg = {};
      var fail = 0; // 当前节点可以被放置的显示区域

      var visibleRect = getVisibleRectForElement(source); // 当前节点所占的区域, left/top/width/height

      var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

      normalizeOffset(offset, elRegion);
      normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

      var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域

      var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

      if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
        if (overflow.adjustX) {
          // 如果横向不能放下
          if (isFailX(elFuturePos, elRegion, visibleRect)) {
            // 对齐位置反下
            var newPoints = flip(points, /[lr]/gi, {
              l: 'r',
              r: 'l'
            }); // 偏移量也反下

            var newOffset = flipOffset(offset, 0);
            var newTargetOffset = flipOffset(targetOffset, 0);
            var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

            if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
              fail = 1;
              points = newPoints;
              offset = newOffset;
              targetOffset = newTargetOffset;
            }
          }
        }

        if (overflow.adjustY) {
          // 如果纵向不能放下
          if (isFailY(elFuturePos, elRegion, visibleRect)) {
            // 对齐位置反下
            var _newPoints = flip(points, /[tb]/gi, {
              t: 'b',
              b: 't'
            }); // 偏移量也反下


            var _newOffset = flipOffset(offset, 1);

            var _newTargetOffset = flipOffset(targetOffset, 1);

            var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

            if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
              fail = 1;
              points = _newPoints;
              offset = _newOffset;
              targetOffset = _newTargetOffset;
            }
          }
        } // 如果失败，重新计算当前节点将要被放置的位置


        if (fail) {
          elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
          utils.mix(newElRegion, elFuturePos);
        }

        var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
        var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
        // 1. 复原修改过的定位参数

        if (isStillFailX || isStillFailY) {
          points = align.points;
          offset = align.offset || [0, 0];
          targetOffset = align.targetOffset || [0, 0];
        } // 2. 只有指定了可以调整当前方向才调整


        newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
        newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

        if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
          newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
        }
      } // need judge to in case set fixed with in css on height auto element


      if (newElRegion.width !== elRegion.width) {
        utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
      }

      if (newElRegion.height !== elRegion.height) {
        utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
      } // https://github.com/kissyteam/kissy/issues/190
      // 相对于屏幕位置没变，而 left/top 变了
      // 例如 <div 'relative'><el absolute></div>


      utils.offset(source, {
        left: newElRegion.left,
        top: newElRegion.top
      }, {
        useCssRight: align.useCssRight,
        useCssBottom: align.useCssBottom,
        useCssTransform: align.useCssTransform,
        ignoreShake: align.ignoreShake
      });
      return {
        points: points,
        offset: offset,
        targetOffset: targetOffset,
        overflow: newOverflowCfg
      };
    }
    /**
     *  2012-04-26 yiminghe@gmail.com
     *   - 优化智能对齐算法
     *   - 慎用 resizeXX
     *
     *  2011-07-13 yiminghe@gmail.com note:
     *   - 增加智能对齐，以及大小调整选项
     **/

    function isOutOfVisibleRect(target) {
      var visibleRect = getVisibleRectForElement(target);
      var targetRegion = getRegion(target);
      return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
    }

    function alignElement(el, refNode, align) {
      var target = align.target || refNode;
      var refNodeRegion = getRegion(target);
      var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);
      return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
    }

    alignElement.__getOffsetParent = getOffsetParent;
    alignElement.__getVisibleRectForElement = getVisibleRectForElement;

    /**
     * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
     * If client position provided, will internal convert to page position.
     */

    function alignPoint(el, tgtPoint, align) {
      var pageX;
      var pageY;
      var doc = utils.getDocument(el);
      var win = doc.defaultView || doc.parentWindow;
      var scrollX = utils.getWindowScrollLeft(win);
      var scrollY = utils.getWindowScrollTop(win);
      var viewportWidth = utils.viewportWidth(win);
      var viewportHeight = utils.viewportHeight(win);

      if ('pageX' in tgtPoint) {
        pageX = tgtPoint.pageX;
      } else {
        pageX = scrollX + tgtPoint.clientX;
      }

      if ('pageY' in tgtPoint) {
        pageY = tgtPoint.pageY;
      } else {
        pageY = scrollY + tgtPoint.clientY;
      }

      var tgtRegion = {
        left: pageX,
        top: pageY,
        width: 0,
        height: 0
      };
      var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point

      var points = [align.points[0], 'cc'];
      return doAlign(el, tgtRegion, _objectSpread2({}, align, {
        points: points
      }), pointInView);
    }

    function buffer(fn, ms) {
      var timer = void 0;

      function clear() {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      }

      function bufferFn() {
        clear();
        timer = setTimeout(fn, ms);
      }

      bufferFn.clear = clear;

      return bufferFn;
    }

    function isSamePoint(prev, next) {
      if (prev === next) return true;
      if (!prev || !next) return false;

      if ('pageX' in next && 'pageY' in next) {
        return prev.pageX === next.pageX && prev.pageY === next.pageY;
      }

      if ('clientX' in next && 'clientY' in next) {
        return prev.clientX === next.clientX && prev.clientY === next.clientY;
      }

      return false;
    }

    function isWindow$1(obj) {
      return obj && typeof obj === 'object' && obj.window === obj;
    }

    function isSimilarValue(val1, val2) {
      var int1 = Math.floor(val1);
      var int2 = Math.floor(val2);
      return Math.abs(int1 - int2) <= 1;
    }

    function restoreFocus(activeElement, container) {
      // Focus back if is in the container
      if (activeElement !== document.activeElement && contains(container, activeElement)) {
        activeElement.focus();
      }
    }

    function getElement(func) {
      if (typeof func !== 'function' || !func) return null;
      return func();
    }

    function getPoint(point) {
      if (typeof point !== 'object' || !point) return null;
      return point;
    }

    var Align = function (_Component) {
      _inherits(Align, _Component);

      function Align() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Align);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Align.__proto__ || Object.getPrototypeOf(Align)).call.apply(_ref, [this].concat(args))), _this), _this.forceAlign = function () {
          var _this$props = _this.props,
              disabled = _this$props.disabled,
              target = _this$props.target,
              align = _this$props.align,
              onAlign = _this$props.onAlign;

          if (!disabled && target) {
            var source = ReactDOM__default.findDOMNode(_this);

            var result = void 0;
            var element = getElement(target);
            var point = getPoint(target);

            // IE lose focus after element realign
            // We should record activeElement and restore later
            var activeElement = document.activeElement;

            if (element) {
              result = alignElement(source, element, align);
            } else if (point) {
              result = alignPoint(source, point, align);
            }

            restoreFocus(activeElement, source);

            if (onAlign) {
              onAlign(source, result);
            }
          }
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass$2(Align, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var props = this.props;
          // if parent ref not attached .... use document.getElementById
          this.forceAlign();
          if (!props.disabled && props.monitorWindowResize) {
            this.startMonitorWindowResize();
          }
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          var reAlign = false;
          var props = this.props;

          if (!props.disabled) {
            var source = ReactDOM__default.findDOMNode(this);
            var sourceRect = source ? source.getBoundingClientRect() : null;

            if (prevProps.disabled) {
              reAlign = true;
            } else {
              var lastElement = getElement(prevProps.target);
              var currentElement = getElement(props.target);
              var lastPoint = getPoint(prevProps.target);
              var currentPoint = getPoint(props.target);

              if (isWindow$1(lastElement) && isWindow$1(currentElement)) {
                // Skip if is window
                reAlign = false;
              } else if (lastElement !== currentElement || // Element change
              lastElement && !currentElement && currentPoint || // Change from element to point
              lastPoint && currentPoint && currentElement || // Change from point to element
              currentPoint && !isSamePoint(lastPoint, currentPoint)) {
                reAlign = true;
              }

              // If source element size changed
              var preRect = this.sourceRect || {};
              if (!reAlign && source && (!isSimilarValue(preRect.width, sourceRect.width) || !isSimilarValue(preRect.height, sourceRect.height))) {
                reAlign = true;
              }
            }

            this.sourceRect = sourceRect;
          }

          if (reAlign) {
            this.forceAlign();
          }

          if (props.monitorWindowResize && !props.disabled) {
            this.startMonitorWindowResize();
          } else {
            this.stopMonitorWindowResize();
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.stopMonitorWindowResize();
        }
      }, {
        key: 'startMonitorWindowResize',
        value: function startMonitorWindowResize() {
          if (!this.resizeHandler) {
            this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
            this.resizeHandler = addEventListenerWrap(window, 'resize', this.bufferMonitor);
          }
        }
      }, {
        key: 'stopMonitorWindowResize',
        value: function stopMonitorWindowResize() {
          if (this.resizeHandler) {
            this.bufferMonitor.clear();
            this.resizeHandler.remove();
            this.resizeHandler = null;
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _props = this.props,
              childrenProps = _props.childrenProps,
              children = _props.children;

          var child = React__default.Children.only(children);
          if (childrenProps) {
            var newProps = {};
            var propList = Object.keys(childrenProps);
            propList.forEach(function (prop) {
              newProps[prop] = _this2.props[childrenProps[prop]];
            });

            return React__default.cloneElement(child, newProps);
          }
          return child;
        }
      }]);

      return Align;
    }(React.Component);

    Align.propTypes = {
      childrenProps: propTypes.object,
      align: propTypes.object.isRequired,
      target: propTypes.oneOfType([propTypes.func, propTypes.shape({
        clientX: propTypes.number,
        clientY: propTypes.number,
        pageX: propTypes.number,
        pageY: propTypes.number
      })]),
      onAlign: propTypes.func,
      monitorBufferTime: propTypes.number,
      monitorWindowResize: propTypes.bool,
      disabled: propTypes.bool,
      children: propTypes.any
    };
    Align.defaultProps = {
      target: function target() {
        return window;
      },
      monitorBufferTime: 50,
      monitorWindowResize: false,
      disabled: false
    };

    // export this package's api

    var defineProperty$3 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _defineProperty2 = _interopRequireDefault(defineProperty$2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = function (obj, key, value) {
      if (key in obj) {
        (0, _defineProperty2.default)(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    };
    });

    var _defineProperty$1 = unwrapExports(defineProperty$3);

    var unsafeLifecyclesPolyfill = function unsafeLifecyclesPolyfill(Component) {
      var prototype = Component.prototype;

      if (!prototype || !prototype.isReactComponent) {
        throw new Error('Can only polyfill class components');
      } // only handle componentWillReceiveProps


      if (typeof prototype.componentWillReceiveProps !== 'function') {
        return Component;
      } // In React 16.9, React.Profiler was introduced together with UNSAFE_componentWillReceiveProps
      // https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#performance-measurements-with-reactprofiler


      if (!React__default.Profiler) {
        return Component;
      } // Here polyfill get started


      prototype.UNSAFE_componentWillReceiveProps = prototype.componentWillReceiveProps;
      delete prototype.componentWillReceiveProps;
      return Component;
    };

    function toArrayChildren(children) {
      var ret = [];
      React__default.Children.forEach(children, function (child) {
        ret.push(child);
      });
      return ret;
    }

    function findChildInChildrenByKey(children, key) {
      var ret = null;
      if (children) {
        children.forEach(function (child) {
          if (ret) {
            return;
          }
          if (child && child.key === key) {
            ret = child;
          }
        });
      }
      return ret;
    }

    function findShownChildInChildrenByKey(children, key, showProp) {
      var ret = null;
      if (children) {
        children.forEach(function (child) {
          if (child && child.key === key && child.props[showProp]) {
            if (ret) {
              throw new Error('two child with same key for <rc-animate> children');
            }
            ret = child;
          }
        });
      }
      return ret;
    }

    function isSameChildren(c1, c2, showProp) {
      var same = c1.length === c2.length;
      if (same) {
        c1.forEach(function (child, index) {
          var child2 = c2[index];
          if (child && child2) {
            if (child && !child2 || !child && child2) {
              same = false;
            } else if (child.key !== child2.key) {
              same = false;
            } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
              same = false;
            }
          }
        });
      }
      return same;
    }

    function mergeChildren(prev, next) {
      var ret = [];

      // For each key of `next`, the list of keys to insert before that key in
      // the combined list
      var nextChildrenPending = {};
      var pendingChildren = [];
      prev.forEach(function (child) {
        if (child && findChildInChildrenByKey(next, child.key)) {
          if (pendingChildren.length) {
            nextChildrenPending[child.key] = pendingChildren;
            pendingChildren = [];
          }
        } else {
          pendingChildren.push(child);
        }
      });

      next.forEach(function (child) {
        if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
          ret = ret.concat(nextChildrenPending[child.key]);
        }
        ret.push(child);
      });

      ret = ret.concat(pendingChildren);

      return ret;
    }

    var START_EVENT_NAME_MAP = {
      transitionstart: {
        transition: 'transitionstart',
        WebkitTransition: 'webkitTransitionStart',
        MozTransition: 'mozTransitionStart',
        OTransition: 'oTransitionStart',
        msTransition: 'MSTransitionStart'
      },

      animationstart: {
        animation: 'animationstart',
        WebkitAnimation: 'webkitAnimationStart',
        MozAnimation: 'mozAnimationStart',
        OAnimation: 'oAnimationStart',
        msAnimation: 'MSAnimationStart'
      }
    };

    var END_EVENT_NAME_MAP = {
      transitionend: {
        transition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'mozTransitionEnd',
        OTransition: 'oTransitionEnd',
        msTransition: 'MSTransitionEnd'
      },

      animationend: {
        animation: 'animationend',
        WebkitAnimation: 'webkitAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        OAnimation: 'oAnimationEnd',
        msAnimation: 'MSAnimationEnd'
      }
    };

    var startEvents = [];
    var endEvents = [];

    function detectEvents() {
      var testEl = document.createElement('div');
      var style = testEl.style;

      if (!('AnimationEvent' in window)) {
        delete START_EVENT_NAME_MAP.animationstart.animation;
        delete END_EVENT_NAME_MAP.animationend.animation;
      }

      if (!('TransitionEvent' in window)) {
        delete START_EVENT_NAME_MAP.transitionstart.transition;
        delete END_EVENT_NAME_MAP.transitionend.transition;
      }

      function process(EVENT_NAME_MAP, events) {
        for (var baseEventName in EVENT_NAME_MAP) {
          if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
            var baseEvents = EVENT_NAME_MAP[baseEventName];
            for (var styleName in baseEvents) {
              if (styleName in style) {
                events.push(baseEvents[styleName]);
                break;
              }
            }
          }
        }
      }

      process(START_EVENT_NAME_MAP, startEvents);
      process(END_EVENT_NAME_MAP, endEvents);
    }

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      detectEvents();
    }

    function addEventListener$2(node, eventName, eventListener) {
      node.addEventListener(eventName, eventListener, false);
    }

    function removeEventListener(node, eventName, eventListener) {
      node.removeEventListener(eventName, eventListener, false);
    }

    var TransitionEvents = {
      // Start events
      startEvents: startEvents,

      addStartEventListener: function addStartEventListener(node, eventListener) {
        if (startEvents.length === 0) {
          window.setTimeout(eventListener, 0);
          return;
        }
        startEvents.forEach(function (startEvent) {
          addEventListener$2(node, startEvent, eventListener);
        });
      },
      removeStartEventListener: function removeStartEventListener(node, eventListener) {
        if (startEvents.length === 0) {
          return;
        }
        startEvents.forEach(function (startEvent) {
          removeEventListener(node, startEvent, eventListener);
        });
      },


      // End events
      endEvents: endEvents,

      addEndEventListener: function addEndEventListener(node, eventListener) {
        if (endEvents.length === 0) {
          window.setTimeout(eventListener, 0);
          return;
        }
        endEvents.forEach(function (endEvent) {
          addEventListener$2(node, endEvent, eventListener);
        });
      },
      removeEndEventListener: function removeEndEventListener(node, eventListener) {
        if (endEvents.length === 0) {
          return;
        }
        endEvents.forEach(function (endEvent) {
          removeEventListener(node, endEvent, eventListener);
        });
      }
    };

    var componentIndexof = function(arr, obj){
      if (arr.indexOf) return arr.indexOf(obj);
      for (var i = 0; i < arr.length; ++i) {
        if (arr[i] === obj) return i;
      }
      return -1;
    };

    /**
     * Module dependencies.
     */

    try {
      var index = componentIndexof;
    } catch (err) {
      var index = componentIndexof;
    }

    /**
     * Whitespace regexp.
     */

    var re = /\s+/;

    /**
     * toString reference.
     */

    var toString$2 = Object.prototype.toString;

    /**
     * Wrap `el` in a `ClassList`.
     *
     * @param {Element} el
     * @return {ClassList}
     * @api public
     */

    var componentClasses = function(el){
      return new ClassList(el);
    };

    /**
     * Initialize a new ClassList for `el`.
     *
     * @param {Element} el
     * @api private
     */

    function ClassList(el) {
      if (!el || !el.nodeType) {
        throw new Error('A DOM element reference is required');
      }
      this.el = el;
      this.list = el.classList;
    }

    /**
     * Add class `name` if not already present.
     *
     * @param {String} name
     * @return {ClassList}
     * @api public
     */

    ClassList.prototype.add = function(name){
      // classList
      if (this.list) {
        this.list.add(name);
        return this;
      }

      // fallback
      var arr = this.array();
      var i = index(arr, name);
      if (!~i) arr.push(name);
      this.el.className = arr.join(' ');
      return this;
    };

    /**
     * Remove class `name` when present, or
     * pass a regular expression to remove
     * any which match.
     *
     * @param {String|RegExp} name
     * @return {ClassList}
     * @api public
     */

    ClassList.prototype.remove = function(name){
      if ('[object RegExp]' == toString$2.call(name)) {
        return this.removeMatching(name);
      }

      // classList
      if (this.list) {
        this.list.remove(name);
        return this;
      }

      // fallback
      var arr = this.array();
      var i = index(arr, name);
      if (~i) arr.splice(i, 1);
      this.el.className = arr.join(' ');
      return this;
    };

    /**
     * Remove all classes matching `re`.
     *
     * @param {RegExp} re
     * @return {ClassList}
     * @api private
     */

    ClassList.prototype.removeMatching = function(re){
      var arr = this.array();
      for (var i = 0; i < arr.length; i++) {
        if (re.test(arr[i])) {
          this.remove(arr[i]);
        }
      }
      return this;
    };

    /**
     * Toggle class `name`, can force state via `force`.
     *
     * For browsers that support classList, but do not support `force` yet,
     * the mistake will be detected and corrected.
     *
     * @param {String} name
     * @param {Boolean} force
     * @return {ClassList}
     * @api public
     */

    ClassList.prototype.toggle = function(name, force){
      // classList
      if (this.list) {
        if ("undefined" !== typeof force) {
          if (force !== this.list.toggle(name, force)) {
            this.list.toggle(name); // toggle again to correct
          }
        } else {
          this.list.toggle(name);
        }
        return this;
      }

      // fallback
      if ("undefined" !== typeof force) {
        if (!force) {
          this.remove(name);
        } else {
          this.add(name);
        }
      } else {
        if (this.has(name)) {
          this.remove(name);
        } else {
          this.add(name);
        }
      }

      return this;
    };

    /**
     * Return an array of classes.
     *
     * @return {Array}
     * @api public
     */

    ClassList.prototype.array = function(){
      var className = this.el.getAttribute('class') || '';
      var str = className.replace(/^\s+|\s+$/g, '');
      var arr = str.split(re);
      if ('' === arr[0]) arr.shift();
      return arr;
    };

    /**
     * Check if class `name` is present.
     *
     * @param {String} name
     * @return {ClassList}
     * @api public
     */

    ClassList.prototype.has =
    ClassList.prototype.contains = function(name){
      return this.list
        ? this.list.contains(name)
        : !! ~index(this.array(), name);
    };

    var isCssAnimationSupported = TransitionEvents.endEvents.length !== 0;
    var capitalPrefixes = ['Webkit', 'Moz', 'O',
    // ms is special .... !
    'ms'];
    var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

    function getStyleProperty(node, name) {
      // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
      var style = window.getComputedStyle(node, null);
      var ret = '';
      for (var i = 0; i < prefixes.length; i++) {
        ret = style.getPropertyValue(prefixes[i] + name);
        if (ret) {
          break;
        }
      }
      return ret;
    }

    function fixBrowserByTimeout(node) {
      if (isCssAnimationSupported) {
        var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
        var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
        var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
        var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
        var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
        // sometimes, browser bug
        node.rcEndAnimTimeout = setTimeout(function () {
          node.rcEndAnimTimeout = null;
          if (node.rcEndListener) {
            node.rcEndListener();
          }
        }, time * 1000 + 200);
      }
    }

    function clearBrowserBugTimeout(node) {
      if (node.rcEndAnimTimeout) {
        clearTimeout(node.rcEndAnimTimeout);
        node.rcEndAnimTimeout = null;
      }
    }

    var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
      var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
      var className = nameIsObj ? transitionName.name : transitionName;
      var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
      var end = endCallback;
      var start = void 0;
      var active = void 0;
      var nodeClasses = componentClasses(node);

      if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
        end = endCallback.end;
        start = endCallback.start;
        active = endCallback.active;
      }

      if (node.rcEndListener) {
        node.rcEndListener();
      }

      node.rcEndListener = function (e) {
        if (e && e.target !== node) {
          return;
        }

        if (node.rcAnimTimeout) {
          clearTimeout(node.rcAnimTimeout);
          node.rcAnimTimeout = null;
        }

        clearBrowserBugTimeout(node);

        nodeClasses.remove(className);
        nodeClasses.remove(activeClassName);

        TransitionEvents.removeEndEventListener(node, node.rcEndListener);
        node.rcEndListener = null;

        // Usually this optional end is used for informing an owner of
        // a leave animation and telling it to remove the child.
        if (end) {
          end();
        }
      };

      TransitionEvents.addEndEventListener(node, node.rcEndListener);

      if (start) {
        start();
      }
      nodeClasses.add(className);

      node.rcAnimTimeout = setTimeout(function () {
        node.rcAnimTimeout = null;
        nodeClasses.add(activeClassName);
        if (active) {
          setTimeout(active, 0);
        }
        fixBrowserByTimeout(node);
        // 30ms for firefox
      }, 30);

      return {
        stop: function stop() {
          if (node.rcEndListener) {
            node.rcEndListener();
          }
        }
      };
    };

    cssAnimation.style = function (node, style, callback) {
      if (node.rcEndListener) {
        node.rcEndListener();
      }

      node.rcEndListener = function (e) {
        if (e && e.target !== node) {
          return;
        }

        if (node.rcAnimTimeout) {
          clearTimeout(node.rcAnimTimeout);
          node.rcAnimTimeout = null;
        }

        clearBrowserBugTimeout(node);

        TransitionEvents.removeEndEventListener(node, node.rcEndListener);
        node.rcEndListener = null;

        // Usually this optional callback is used for informing an owner of
        // a leave animation and telling it to remove the child.
        if (callback) {
          callback();
        }
      };

      TransitionEvents.addEndEventListener(node, node.rcEndListener);

      node.rcAnimTimeout = setTimeout(function () {
        for (var s in style) {
          if (style.hasOwnProperty(s)) {
            node.style[s] = style[s];
          }
        }
        node.rcAnimTimeout = null;
        fixBrowserByTimeout(node);
      }, 0);
    };

    cssAnimation.setTransition = function (node, p, value) {
      var property = p;
      var v = value;
      if (value === undefined) {
        v = property;
        property = '';
      }
      property = property || '';
      capitalPrefixes.forEach(function (prefix) {
        node.style[prefix + 'Transition' + property] = v;
      });
    };

    cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

    var util$1 = {
      isAppearSupported: function isAppearSupported(props) {
        return props.transitionName && props.transitionAppear || props.animation.appear;
      },
      isEnterSupported: function isEnterSupported(props) {
        return props.transitionName && props.transitionEnter || props.animation.enter;
      },
      isLeaveSupported: function isLeaveSupported(props) {
        return props.transitionName && props.transitionLeave || props.animation.leave;
      },
      allowAppearCallback: function allowAppearCallback(props) {
        return props.transitionAppear || props.animation.appear;
      },
      allowEnterCallback: function allowEnterCallback(props) {
        return props.transitionEnter || props.animation.enter;
      },
      allowLeaveCallback: function allowLeaveCallback(props) {
        return props.transitionLeave || props.animation.leave;
      }
    };

    var transitionMap = {
      enter: 'transitionEnter',
      appear: 'transitionAppear',
      leave: 'transitionLeave'
    };

    var AnimateChild = function (_React$Component) {
      _inherits(AnimateChild, _React$Component);

      function AnimateChild() {
        _classCallCheck(this, AnimateChild);

        return _possibleConstructorReturn(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
      }

      _createClass$2(AnimateChild, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.stop();
        }
      }, {
        key: 'componentWillEnter',
        value: function componentWillEnter(done) {
          if (util$1.isEnterSupported(this.props)) {
            this.transition('enter', done);
          } else {
            done();
          }
        }
      }, {
        key: 'componentWillAppear',
        value: function componentWillAppear(done) {
          if (util$1.isAppearSupported(this.props)) {
            this.transition('appear', done);
          } else {
            done();
          }
        }
      }, {
        key: 'componentWillLeave',
        value: function componentWillLeave(done) {
          if (util$1.isLeaveSupported(this.props)) {
            this.transition('leave', done);
          } else {
            // always sync, do not interupt with react component life cycle
            // update hidden -> animate hidden ->
            // didUpdate -> animate leave -> unmount (if animate is none)
            done();
          }
        }
      }, {
        key: 'transition',
        value: function transition(animationType, finishCallback) {
          var _this2 = this;

          var node = ReactDOM__default.findDOMNode(this);
          var props = this.props;
          var transitionName = props.transitionName;
          var nameIsObj = typeof transitionName === 'object';
          this.stop();
          var end = function end() {
            _this2.stopper = null;
            finishCallback();
          };
          if ((isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
            var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
            var activeName = name + '-active';
            if (nameIsObj && transitionName[animationType + 'Active']) {
              activeName = transitionName[animationType + 'Active'];
            }
            this.stopper = cssAnimation(node, {
              name: name,
              active: activeName
            }, end);
          } else {
            this.stopper = props.animation[animationType](node, end);
          }
        }
      }, {
        key: 'stop',
        value: function stop() {
          var stopper = this.stopper;
          if (stopper) {
            this.stopper = null;
            stopper.stop();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return this.props.children;
        }
      }]);

      return AnimateChild;
    }(React__default.Component);

    AnimateChild.propTypes = {
      children: propTypes.any,
      animation: propTypes.any,
      transitionName: propTypes.any
    };

    var defaultKey = 'rc_animate_' + Date.now();

    function getChildrenFromProps(props) {
      var children = props.children;
      if (React__default.isValidElement(children)) {
        if (!children.key) {
          return React__default.cloneElement(children, {
            key: defaultKey
          });
        }
      }
      return children;
    }

    function noop() {}

    var Animate = function (_React$Component) {
      _inherits(Animate, _React$Component);

      // eslint-disable-line

      function Animate(props) {
        _classCallCheck(this, Animate);

        var _this = _possibleConstructorReturn(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

        _initialiseProps.call(_this);

        _this.currentlyAnimatingKeys = {};
        _this.keysToEnter = [];
        _this.keysToLeave = [];

        _this.state = {
          children: toArrayChildren(getChildrenFromProps(props))
        };

        _this.childrenRefs = {};
        return _this;
      }

      _createClass$2(Animate, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          var showProp = this.props.showProp;
          var children = this.state.children;
          if (showProp) {
            children = children.filter(function (child) {
              return !!child.props[showProp];
            });
          }
          children.forEach(function (child) {
            if (child) {
              _this2.performAppear(child.key);
            }
          });
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var _this3 = this;

          this.nextProps = nextProps;
          var nextChildren = toArrayChildren(getChildrenFromProps(nextProps));
          var props = this.props;
          // exclusive needs immediate response
          if (props.exclusive) {
            Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
              _this3.stop(key);
            });
          }
          var showProp = props.showProp;
          var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
          // last props children if exclusive
          var currentChildren = props.exclusive ? toArrayChildren(getChildrenFromProps(props)) : this.state.children;
          // in case destroy in showProp mode
          var newChildren = [];
          if (showProp) {
            currentChildren.forEach(function (currentChild) {
              var nextChild = currentChild && findChildInChildrenByKey(nextChildren, currentChild.key);
              var newChild = void 0;
              if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
                newChild = React__default.cloneElement(nextChild || currentChild, _defineProperty$1({}, showProp, true));
              } else {
                newChild = nextChild;
              }
              if (newChild) {
                newChildren.push(newChild);
              }
            });
            nextChildren.forEach(function (nextChild) {
              if (!nextChild || !findChildInChildrenByKey(currentChildren, nextChild.key)) {
                newChildren.push(nextChild);
              }
            });
          } else {
            newChildren = mergeChildren(currentChildren, nextChildren);
          }

          // need render to avoid update
          this.setState({
            children: newChildren
          });

          nextChildren.forEach(function (child) {
            var key = child && child.key;
            if (child && currentlyAnimatingKeys[key]) {
              return;
            }
            var hasPrev = child && findChildInChildrenByKey(currentChildren, key);
            if (showProp) {
              var showInNext = child.props[showProp];
              if (hasPrev) {
                var showInNow = findShownChildInChildrenByKey(currentChildren, key, showProp);
                if (!showInNow && showInNext) {
                  _this3.keysToEnter.push(key);
                }
              } else if (showInNext) {
                _this3.keysToEnter.push(key);
              }
            } else if (!hasPrev) {
              _this3.keysToEnter.push(key);
            }
          });

          currentChildren.forEach(function (child) {
            var key = child && child.key;
            if (child && currentlyAnimatingKeys[key]) {
              return;
            }
            var hasNext = child && findChildInChildrenByKey(nextChildren, key);
            if (showProp) {
              var showInNow = child.props[showProp];
              if (hasNext) {
                var showInNext = findShownChildInChildrenByKey(nextChildren, key, showProp);
                if (!showInNext && showInNow) {
                  _this3.keysToLeave.push(key);
                }
              } else if (showInNow) {
                _this3.keysToLeave.push(key);
              }
            } else if (!hasNext) {
              _this3.keysToLeave.push(key);
            }
          });
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          var keysToEnter = this.keysToEnter;
          this.keysToEnter = [];
          keysToEnter.forEach(this.performEnter);
          var keysToLeave = this.keysToLeave;
          this.keysToLeave = [];
          keysToLeave.forEach(this.performLeave);
        }
      }, {
        key: 'isValidChildByKey',
        value: function isValidChildByKey(currentChildren, key) {
          var showProp = this.props.showProp;
          if (showProp) {
            return findShownChildInChildrenByKey(currentChildren, key, showProp);
          }
          return findChildInChildrenByKey(currentChildren, key);
        }
      }, {
        key: 'stop',
        value: function stop(key) {
          delete this.currentlyAnimatingKeys[key];
          var component = this.childrenRefs[key];
          if (component) {
            component.stop();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this4 = this;

          var props = this.props;
          this.nextProps = props;
          var stateChildren = this.state.children;
          var children = null;
          if (stateChildren) {
            children = stateChildren.map(function (child) {
              if (child === null || child === undefined) {
                return child;
              }
              if (!child.key) {
                throw new Error('must set key for <rc-animate> children');
              }
              return React__default.createElement(
                AnimateChild,
                {
                  key: child.key,
                  ref: function ref(node) {
                    _this4.childrenRefs[child.key] = node;
                  },
                  animation: props.animation,
                  transitionName: props.transitionName,
                  transitionEnter: props.transitionEnter,
                  transitionAppear: props.transitionAppear,
                  transitionLeave: props.transitionLeave
                },
                child
              );
            });
          }
          var Component = props.component;
          if (Component) {
            var passedProps = props;
            if (typeof Component === 'string') {
              passedProps = _extends$1({
                className: props.className,
                style: props.style
              }, props.componentProps);
            }
            return React__default.createElement(
              Component,
              passedProps,
              children
            );
          }
          return children[0] || null;
        }
      }]);

      return Animate;
    }(React__default.Component);

    Animate.isAnimate = true;
    Animate.propTypes = {
      className: propTypes.string,
      style: propTypes.object,
      component: propTypes.any,
      componentProps: propTypes.object,
      animation: propTypes.object,
      transitionName: propTypes.oneOfType([propTypes.string, propTypes.object]),
      transitionEnter: propTypes.bool,
      transitionAppear: propTypes.bool,
      exclusive: propTypes.bool,
      transitionLeave: propTypes.bool,
      onEnd: propTypes.func,
      onEnter: propTypes.func,
      onLeave: propTypes.func,
      onAppear: propTypes.func,
      showProp: propTypes.string,
      children: propTypes.node
    };
    Animate.defaultProps = {
      animation: {},
      component: 'span',
      componentProps: {},
      transitionEnter: true,
      transitionLeave: true,
      transitionAppear: false,
      onEnd: noop,
      onEnter: noop,
      onLeave: noop,
      onAppear: noop
    };

    var _initialiseProps = function _initialiseProps() {
      var _this5 = this;

      this.performEnter = function (key) {
        // may already remove by exclusive
        if (_this5.childrenRefs[key]) {
          _this5.currentlyAnimatingKeys[key] = true;
          _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
        }
      };

      this.performAppear = function (key) {
        if (_this5.childrenRefs[key]) {
          _this5.currentlyAnimatingKeys[key] = true;
          _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
        }
      };

      this.handleDoneAdding = function (key, type) {
        var props = _this5.props;
        delete _this5.currentlyAnimatingKeys[key];
        // if update on exclusive mode, skip check
        if (props.exclusive && props !== _this5.nextProps) {
          return;
        }
        var currentChildren = toArrayChildren(getChildrenFromProps(props));
        if (!_this5.isValidChildByKey(currentChildren, key)) {
          // exclusive will not need this
          _this5.performLeave(key);
        } else if (type === 'appear') {
          if (util$1.allowAppearCallback(props)) {
            props.onAppear(key);
            props.onEnd(key, true);
          }
        } else if (util$1.allowEnterCallback(props)) {
          props.onEnter(key);
          props.onEnd(key, true);
        }
      };

      this.performLeave = function (key) {
        // may already remove by exclusive
        if (_this5.childrenRefs[key]) {
          _this5.currentlyAnimatingKeys[key] = true;
          _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
        }
      };

      this.handleDoneLeaving = function (key) {
        var props = _this5.props;
        delete _this5.currentlyAnimatingKeys[key];
        // if update on exclusive mode, skip check
        if (props.exclusive && props !== _this5.nextProps) {
          return;
        }
        var currentChildren = toArrayChildren(getChildrenFromProps(props));
        // in case state change is too fast
        if (_this5.isValidChildByKey(currentChildren, key)) {
          _this5.performEnter(key);
        } else {
          var end = function end() {
            if (util$1.allowLeaveCallback(props)) {
              props.onLeave(key);
              props.onEnd(key, false);
            }
          };
          if (!isSameChildren(_this5.state.children, currentChildren, props.showProp)) {
            _this5.setState({
              children: currentChildren
            }, end);
          } else {
            end();
          }
        }
      };
    };

    var Animate$1 = unsafeLifecyclesPolyfill(Animate);

    var objectWithoutProperties = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    exports.default = function (obj, keys) {
      var target = {};

      for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
      }

      return target;
    };
    });

    var _objectWithoutProperties = unwrapExports(objectWithoutProperties);

    var LazyRenderBox = function (_Component) {
      _inherits(LazyRenderBox, _Component);

      function LazyRenderBox() {
        _classCallCheck(this, LazyRenderBox);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return nextProps.hiddenClassName || nextProps.visible;
      };

      LazyRenderBox.prototype.render = function render() {
        var _props = this.props,
            hiddenClassName = _props.hiddenClassName,
            visible = _props.visible,
            props = _objectWithoutProperties(_props, ['hiddenClassName', 'visible']);

        if (hiddenClassName || React__default.Children.count(props.children) > 1) {
          if (!visible && hiddenClassName) {
            props.className += ' ' + hiddenClassName;
          }
          return React__default.createElement('div', props);
        }

        return React__default.Children.only(props.children);
      };

      return LazyRenderBox;
    }(React.Component);

    LazyRenderBox.propTypes = {
      children: propTypes.any,
      className: propTypes.string,
      visible: propTypes.bool,
      hiddenClassName: propTypes.string
    };

    var PopupInner = function (_Component) {
      _inherits(PopupInner, _Component);

      function PopupInner() {
        _classCallCheck(this, PopupInner);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      PopupInner.prototype.render = function render() {
        var props = this.props;
        var className = props.className;
        if (!props.visible) {
          className += ' ' + props.hiddenClassName;
        }
        return React__default.createElement(
          'div',
          {
            className: className,
            onMouseEnter: props.onMouseEnter,
            onMouseLeave: props.onMouseLeave,
            onMouseDown: props.onMouseDown,
            onTouchStart: props.onTouchStart,
            style: props.style
          },
          React__default.createElement(
            LazyRenderBox,
            { className: props.prefixCls + '-content', visible: props.visible },
            props.children
          )
        );
      };

      return PopupInner;
    }(React.Component);

    PopupInner.propTypes = {
      hiddenClassName: propTypes.string,
      className: propTypes.string,
      prefixCls: propTypes.string,
      onMouseEnter: propTypes.func,
      onMouseLeave: propTypes.func,
      onMouseDown: propTypes.func,
      onTouchStart: propTypes.func,
      children: propTypes.any
    };

    var Popup = function (_Component) {
      _inherits(Popup, _Component);

      function Popup(props) {
        _classCallCheck(this, Popup);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _initialiseProps$1.call(_this);

        _this.state = {
          // Used for stretch
          stretchChecked: false,
          targetWidth: undefined,
          targetHeight: undefined
        };

        _this.savePopupRef = saveRef.bind(_this, 'popupInstance');
        _this.saveAlignRef = saveRef.bind(_this, 'alignInstance');
        return _this;
      }

      Popup.prototype.componentDidMount = function componentDidMount() {
        this.rootNode = this.getPopupDomNode();
        this.setStretchSize();
      };

      Popup.prototype.componentDidUpdate = function componentDidUpdate() {
        this.setStretchSize();
      };

      // Record size if stretch needed


      Popup.prototype.getPopupDomNode = function getPopupDomNode() {
        return ReactDOM__default.findDOMNode(this.popupInstance);
      };

      // `target` on `rc-align` can accept as a function to get the bind element or a point.
      // ref: https://www.npmjs.com/package/rc-align


      Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
        var props = this.props;
        var transitionName = props.maskTransitionName;
        var animation = props.maskAnimation;
        if (!transitionName && animation) {
          transitionName = props.prefixCls + '-' + animation;
        }
        return transitionName;
      };

      Popup.prototype.getTransitionName = function getTransitionName() {
        var props = this.props;
        var transitionName = props.transitionName;
        if (!transitionName && props.animation) {
          transitionName = props.prefixCls + '-' + props.animation;
        }
        return transitionName;
      };

      Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
        return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
      };

      Popup.prototype.getPopupElement = function getPopupElement() {
        var _this2 = this;

        var savePopupRef = this.savePopupRef;
        var _state = this.state,
            stretchChecked = _state.stretchChecked,
            targetHeight = _state.targetHeight,
            targetWidth = _state.targetWidth;
        var _props = this.props,
            align = _props.align,
            visible = _props.visible,
            prefixCls = _props.prefixCls,
            style = _props.style,
            getClassNameFromAlign = _props.getClassNameFromAlign,
            destroyPopupOnHide = _props.destroyPopupOnHide,
            stretch = _props.stretch,
            children = _props.children,
            onMouseEnter = _props.onMouseEnter,
            onMouseLeave = _props.onMouseLeave,
            onMouseDown = _props.onMouseDown,
            onTouchStart = _props.onTouchStart;

        var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
        var hiddenClassName = prefixCls + '-hidden';

        if (!visible) {
          this.currentAlignClassName = null;
        }

        var sizeStyle = {};
        if (stretch) {
          // Stretch with target
          if (stretch.indexOf('height') !== -1) {
            sizeStyle.height = targetHeight;
          } else if (stretch.indexOf('minHeight') !== -1) {
            sizeStyle.minHeight = targetHeight;
          }
          if (stretch.indexOf('width') !== -1) {
            sizeStyle.width = targetWidth;
          } else if (stretch.indexOf('minWidth') !== -1) {
            sizeStyle.minWidth = targetWidth;
          }

          // Delay force align to makes ui smooth
          if (!stretchChecked) {
            sizeStyle.visibility = 'hidden';
            setTimeout(function () {
              if (_this2.alignInstance) {
                _this2.alignInstance.forceAlign();
              }
            }, 0);
          }
        }

        var newStyle = _extends$1({}, sizeStyle, style, this.getZIndexStyle());

        var popupInnerProps = {
          className: className,
          prefixCls: prefixCls,
          ref: savePopupRef,
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave,
          onMouseDown: onMouseDown,
          onTouchStart: onTouchStart,
          style: newStyle
        };
        if (destroyPopupOnHide) {
          return React__default.createElement(
            Animate$1,
            {
              component: '',
              exclusive: true,
              transitionAppear: true,
              transitionName: this.getTransitionName()
            },
            visible ? React__default.createElement(
              Align,
              {
                target: this.getAlignTarget(),
                key: 'popup',
                ref: this.saveAlignRef,
                monitorWindowResize: true,
                align: align,
                onAlign: this.onAlign
              },
              React__default.createElement(
                PopupInner,
                _extends$1({
                  visible: true
                }, popupInnerProps),
                children
              )
            ) : null
          );
        }

        return React__default.createElement(
          Animate$1,
          {
            component: '',
            exclusive: true,
            transitionAppear: true,
            transitionName: this.getTransitionName(),
            showProp: 'xVisible'
          },
          React__default.createElement(
            Align,
            {
              target: this.getAlignTarget(),
              key: 'popup',
              ref: this.saveAlignRef,
              monitorWindowResize: true,
              xVisible: visible,
              childrenProps: { visible: 'xVisible' },
              disabled: !visible,
              align: align,
              onAlign: this.onAlign
            },
            React__default.createElement(
              PopupInner,
              _extends$1({
                hiddenClassName: hiddenClassName
              }, popupInnerProps),
              children
            )
          )
        );
      };

      Popup.prototype.getZIndexStyle = function getZIndexStyle() {
        var style = {};
        var props = this.props;
        if (props.zIndex !== undefined) {
          style.zIndex = props.zIndex;
        }
        return style;
      };

      Popup.prototype.getMaskElement = function getMaskElement() {
        var props = this.props;
        var maskElement = void 0;
        if (props.mask) {
          var maskTransition = this.getMaskTransitionName();
          maskElement = React__default.createElement(LazyRenderBox, {
            style: this.getZIndexStyle(),
            key: 'mask',
            className: props.prefixCls + '-mask',
            hiddenClassName: props.prefixCls + '-mask-hidden',
            visible: props.visible
          });
          if (maskTransition) {
            maskElement = React__default.createElement(
              Animate$1,
              {
                key: 'mask',
                showProp: 'visible',
                transitionAppear: true,
                component: '',
                transitionName: maskTransition
              },
              maskElement
            );
          }
        }
        return maskElement;
      };

      Popup.prototype.render = function render() {
        return React__default.createElement(
          'div',
          null,
          this.getMaskElement(),
          this.getPopupElement()
        );
      };

      return Popup;
    }(React.Component);

    Popup.propTypes = {
      visible: propTypes.bool,
      style: propTypes.object,
      getClassNameFromAlign: propTypes.func,
      onAlign: propTypes.func,
      getRootDomNode: propTypes.func,
      align: propTypes.any,
      destroyPopupOnHide: propTypes.bool,
      className: propTypes.string,
      prefixCls: propTypes.string,
      onMouseEnter: propTypes.func,
      onMouseLeave: propTypes.func,
      onMouseDown: propTypes.func,
      onTouchStart: propTypes.func,
      stretch: propTypes.string,
      children: propTypes.node,
      point: propTypes.shape({
        pageX: propTypes.number,
        pageY: propTypes.number
      })
    };

    var _initialiseProps$1 = function _initialiseProps() {
      var _this3 = this;

      this.onAlign = function (popupDomNode, align) {
        var props = _this3.props;
        var currentAlignClassName = props.getClassNameFromAlign(align);
        // FIX: https://github.com/react-component/trigger/issues/56
        // FIX: https://github.com/react-component/tooltip/issues/79
        if (_this3.currentAlignClassName !== currentAlignClassName) {
          _this3.currentAlignClassName = currentAlignClassName;
          popupDomNode.className = _this3.getClassName(currentAlignClassName);
        }
        props.onAlign(popupDomNode, align);
      };

      this.setStretchSize = function () {
        var _props2 = _this3.props,
            stretch = _props2.stretch,
            getRootDomNode = _props2.getRootDomNode,
            visible = _props2.visible;
        var _state2 = _this3.state,
            stretchChecked = _state2.stretchChecked,
            targetHeight = _state2.targetHeight,
            targetWidth = _state2.targetWidth;


        if (!stretch || !visible) {
          if (stretchChecked) {
            _this3.setState({ stretchChecked: false });
          }
          return;
        }

        var $ele = getRootDomNode();
        if (!$ele) return;

        var height = $ele.offsetHeight;
        var width = $ele.offsetWidth;

        if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
          _this3.setState({
            stretchChecked: true,
            targetHeight: height,
            targetWidth: width
          });
        }
      };

      this.getTargetElement = function () {
        return _this3.props.getRootDomNode();
      };

      this.getAlignTarget = function () {
        var point = _this3.props.point;

        if (point) {
          return point;
        }
        return _this3.getTargetElement;
      };
    };

    function noop$1() {}

    function returnEmptyString() {
      return '';
    }

    function returnDocument() {
      return window.document;
    }

    var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

    var IS_REACT_16 = !!ReactDOM.createPortal;

    var contextTypes = {
      rcTrigger: propTypes.shape({
        onPopupMouseDown: propTypes.func
      })
    };

    var Trigger = function (_React$Component) {
      _inherits(Trigger, _React$Component);

      function Trigger(props) {
        _classCallCheck(this, Trigger);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _initialiseProps$2.call(_this);

        var popupVisible = void 0;
        if ('popupVisible' in props) {
          popupVisible = !!props.popupVisible;
        } else {
          popupVisible = !!props.defaultPopupVisible;
        }

        _this.state = {
          prevPopupVisible: popupVisible,
          popupVisible: popupVisible
        };

        ALL_HANDLERS.forEach(function (h) {
          _this['fire' + h] = function (e) {
            _this.fireEvents(h, e);
          };
        });
        return _this;
      }

      Trigger.prototype.getChildContext = function getChildContext() {
        return {
          rcTrigger: {
            onPopupMouseDown: this.onPopupMouseDown
          }
        };
      };

      Trigger.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({}, {
          popupVisible: this.state.popupVisible
        });
      };

      Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
        var props = this.props;
        var state = this.state;
        var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
          if (prevState.popupVisible !== state.popupVisible) {
            props.afterPopupVisibleChange(state.popupVisible);
          }
        };
        if (!IS_REACT_16) {
          this.renderComponent(null, triggerAfterPopupVisibleChange);
        }

        // We must listen to `mousedown` or `touchstart`, edge case:
        // https://github.com/ant-design/ant-design/issues/5804
        // https://github.com/react-component/calendar/issues/250
        // https://github.com/react-component/trigger/issues/50
        if (state.popupVisible) {
          var currentDocument = void 0;
          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            currentDocument = props.getDocument();
            this.clickOutsideHandler = addEventListenerWrap(currentDocument, 'mousedown', this.onDocumentClick);
          }
          // always hide on mobile
          if (!this.touchOutsideHandler) {
            currentDocument = currentDocument || props.getDocument();
            this.touchOutsideHandler = addEventListenerWrap(currentDocument, 'touchstart', this.onDocumentClick);
          }
          // close popup when trigger type contains 'onContextMenu' and document is scrolling.
          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            currentDocument = currentDocument || props.getDocument();
            this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, 'scroll', this.onContextMenuClose);
          }
          // close popup when trigger type contains 'onContextMenu' and window is blur.
          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = addEventListenerWrap(window, 'blur', this.onContextMenuClose);
          }
          return;
        }

        this.clearOutsideHandler();
      };

      Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
      };

      Trigger.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var popupVisible = _ref.popupVisible;

        var newState = {};

        if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
        }

        return newState;
      };

      Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
        // for test
        if (this._component && this._component.getPopupDomNode) {
          return this._component.getPopupDomNode();
        }
        return null;
      };

      Trigger.prototype.getPopupAlign = function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement,
            popupAlign = props.popupAlign,
            builtinPlacements = props.builtinPlacements;

        if (popupPlacement && builtinPlacements) {
          return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
        }
        return popupAlign;
      };

      /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for `pointAlign`
       */
      Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
        var alignPoint = this.props.alignPoint;
        var prevPopupVisible = this.state.popupVisible;


        this.clearDelayTimer();

        if (prevPopupVisible !== popupVisible) {
          if (!('popupVisible' in this.props)) {
            this.setState({ popupVisible: popupVisible, prevPopupVisible: prevPopupVisible });
          }
          this.props.onPopupVisibleChange(popupVisible);
        }

        // Always record the point position since mouseEnterDelay will delay the show
        if (alignPoint && event) {
          this.setPoint(event);
        }
      };

      Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;

        var delay = delayS * 1000;
        this.clearDelayTimer();
        if (delay) {
          var point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
          this.delayTimer = setTimeout(function () {
            _this2.setPopupVisible(visible, point);
            _this2.clearDelayTimer();
          }, delay);
        } else {
          this.setPopupVisible(visible, event);
        }
      };

      Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      };

      Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }

        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }

        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }

        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      };

      Trigger.prototype.createTwoChains = function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;
        if (childPros[event] && props[event]) {
          return this['fire' + event];
        }
        return childPros[event] || props[event];
      };

      Trigger.prototype.isClickToShow = function isClickToShow() {
        var _props = this.props,
            action = _props.action,
            showAction = _props.showAction;

        return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
      };

      Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
        var _props2 = this.props,
            action = _props2.action,
            showAction = _props2.showAction;

        return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
      };

      Trigger.prototype.isClickToHide = function isClickToHide() {
        var _props3 = this.props,
            action = _props3.action,
            hideAction = _props3.hideAction;

        return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
      };

      Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
        var _props4 = this.props,
            action = _props4.action,
            showAction = _props4.showAction;

        return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
      };

      Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
        var _props5 = this.props,
            action = _props5.action,
            hideAction = _props5.hideAction;

        return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
      };

      Trigger.prototype.isFocusToShow = function isFocusToShow() {
        var _props6 = this.props,
            action = _props6.action,
            showAction = _props6.showAction;

        return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
      };

      Trigger.prototype.isBlurToHide = function isBlurToHide() {
        var _props7 = this.props,
            action = _props7.action,
            hideAction = _props7.hideAction;

        return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
      };

      Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
        if (this.state.popupVisible && this._component && this._component.alignInstance) {
          this._component.alignInstance.forceAlign();
        }
      };

      Trigger.prototype.fireEvents = function fireEvents(type, e) {
        var childCallback = this.props.children.props[type];
        if (childCallback) {
          childCallback(e);
        }
        var callback = this.props[type];
        if (callback) {
          callback(e);
        }
      };

      Trigger.prototype.close = function close() {
        this.setPopupVisible(false);
      };

      Trigger.prototype.render = function render() {
        var _this3 = this;

        var popupVisible = this.state.popupVisible;
        var _props8 = this.props,
            children = _props8.children,
            forceRender = _props8.forceRender,
            alignPoint = _props8.alignPoint,
            className = _props8.className;

        var child = React__default.Children.only(children);
        var newChildProps = { key: 'trigger' };

        if (this.isContextMenuToShow()) {
          newChildProps.onContextMenu = this.onContextMenu;
        } else {
          newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
        }

        if (this.isClickToHide() || this.isClickToShow()) {
          newChildProps.onClick = this.onClick;
          newChildProps.onMouseDown = this.onMouseDown;
          newChildProps.onTouchStart = this.onTouchStart;
        } else {
          newChildProps.onClick = this.createTwoChains('onClick');
          newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
          newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
        }
        if (this.isMouseEnterToShow()) {
          newChildProps.onMouseEnter = this.onMouseEnter;
          if (alignPoint) {
            newChildProps.onMouseMove = this.onMouseMove;
          }
        } else {
          newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
        }
        if (this.isMouseLeaveToHide()) {
          newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
          newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
        }
        if (this.isFocusToShow() || this.isBlurToHide()) {
          newChildProps.onFocus = this.onFocus;
          newChildProps.onBlur = this.onBlur;
        } else {
          newChildProps.onFocus = this.createTwoChains('onFocus');
          newChildProps.onBlur = this.createTwoChains('onBlur');
        }

        var childrenClassName = classNames(child && child.props && child.props.className, className);
        if (childrenClassName) {
          newChildProps.className = childrenClassName;
        }
        var trigger = React__default.cloneElement(child, newChildProps);

        if (!IS_REACT_16) {
          return React__default.createElement(
            ContainerRender,
            {
              parent: this,
              visible: popupVisible,
              autoMount: false,
              forceRender: forceRender,
              getComponent: this.getComponent,
              getContainer: this.getContainer
            },
            function (_ref2) {
              var renderComponent = _ref2.renderComponent;

              _this3.renderComponent = renderComponent;
              return trigger;
            }
          );
        }

        var portal = void 0;
        // prevent unmounting after it's rendered
        if (popupVisible || this._component || forceRender) {
          portal = React__default.createElement(
            Portal,
            { key: 'portal', getContainer: this.getContainer, didUpdate: this.handlePortalUpdate },
            this.getComponent()
          );
        }

        return [trigger, portal];
      };

      return Trigger;
    }(React__default.Component);

    Trigger.propTypes = {
      children: propTypes.any,
      action: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
      showAction: propTypes.any,
      hideAction: propTypes.any,
      getPopupClassNameFromAlign: propTypes.any,
      onPopupVisibleChange: propTypes.func,
      afterPopupVisibleChange: propTypes.func,
      popup: propTypes.oneOfType([propTypes.node, propTypes.func]).isRequired,
      popupStyle: propTypes.object,
      prefixCls: propTypes.string,
      popupClassName: propTypes.string,
      className: propTypes.string,
      popupPlacement: propTypes.string,
      builtinPlacements: propTypes.object,
      popupTransitionName: propTypes.oneOfType([propTypes.string, propTypes.object]),
      popupAnimation: propTypes.any,
      mouseEnterDelay: propTypes.number,
      mouseLeaveDelay: propTypes.number,
      zIndex: propTypes.number,
      focusDelay: propTypes.number,
      blurDelay: propTypes.number,
      getPopupContainer: propTypes.func,
      getDocument: propTypes.func,
      forceRender: propTypes.bool,
      destroyPopupOnHide: propTypes.bool,
      mask: propTypes.bool,
      maskClosable: propTypes.bool,
      onPopupAlign: propTypes.func,
      popupAlign: propTypes.object,
      popupVisible: propTypes.bool,
      defaultPopupVisible: propTypes.bool,
      maskTransitionName: propTypes.oneOfType([propTypes.string, propTypes.object]),
      maskAnimation: propTypes.string,
      stretch: propTypes.string,
      alignPoint: propTypes.bool // Maybe we can support user pass position in the future
    };
    Trigger.contextTypes = contextTypes;
    Trigger.childContextTypes = contextTypes;
    Trigger.defaultProps = {
      prefixCls: 'rc-trigger-popup',
      getPopupClassNameFromAlign: returnEmptyString,
      getDocument: returnDocument,
      onPopupVisibleChange: noop$1,
      afterPopupVisibleChange: noop$1,
      onPopupAlign: noop$1,
      popupClassName: '',
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0.1,
      focusDelay: 0,
      blurDelay: 0.15,
      popupStyle: {},
      destroyPopupOnHide: false,
      popupAlign: {},
      defaultPopupVisible: false,
      mask: false,
      maskClosable: true,
      action: [],
      showAction: [],
      hideAction: []
    };

    var _initialiseProps$2 = function _initialiseProps() {
      var _this4 = this;

      this.onMouseEnter = function (e) {
        var mouseEnterDelay = _this4.props.mouseEnterDelay;

        _this4.fireEvents('onMouseEnter', e);
        _this4.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
      };

      this.onMouseMove = function (e) {
        _this4.fireEvents('onMouseMove', e);
        _this4.setPoint(e);
      };

      this.onMouseLeave = function (e) {
        _this4.fireEvents('onMouseLeave', e);
        _this4.delaySetPopupVisible(false, _this4.props.mouseLeaveDelay);
      };

      this.onPopupMouseEnter = function () {
        _this4.clearDelayTimer();
      };

      this.onPopupMouseLeave = function (e) {
        // https://github.com/react-component/trigger/pull/13
        // react bug?
        if (e.relatedTarget && !e.relatedTarget.setTimeout && _this4._component && _this4._component.getPopupDomNode && contains(_this4._component.getPopupDomNode(), e.relatedTarget)) {
          return;
        }
        _this4.delaySetPopupVisible(false, _this4.props.mouseLeaveDelay);
      };

      this.onFocus = function (e) {
        _this4.fireEvents('onFocus', e);
        // incase focusin and focusout
        _this4.clearDelayTimer();
        if (_this4.isFocusToShow()) {
          _this4.focusTime = Date.now();
          _this4.delaySetPopupVisible(true, _this4.props.focusDelay);
        }
      };

      this.onMouseDown = function (e) {
        _this4.fireEvents('onMouseDown', e);
        _this4.preClickTime = Date.now();
      };

      this.onTouchStart = function (e) {
        _this4.fireEvents('onTouchStart', e);
        _this4.preTouchTime = Date.now();
      };

      this.onBlur = function (e) {
        _this4.fireEvents('onBlur', e);
        _this4.clearDelayTimer();
        if (_this4.isBlurToHide()) {
          _this4.delaySetPopupVisible(false, _this4.props.blurDelay);
        }
      };

      this.onContextMenu = function (e) {
        e.preventDefault();
        _this4.fireEvents('onContextMenu', e);
        _this4.setPopupVisible(true, e);
      };

      this.onContextMenuClose = function () {
        if (_this4.isContextMenuToShow()) {
          _this4.close();
        }
      };

      this.onClick = function (event) {
        _this4.fireEvents('onClick', event);
        // focus will trigger click
        if (_this4.focusTime) {
          var preTime = void 0;
          if (_this4.preClickTime && _this4.preTouchTime) {
            preTime = Math.min(_this4.preClickTime, _this4.preTouchTime);
          } else if (_this4.preClickTime) {
            preTime = _this4.preClickTime;
          } else if (_this4.preTouchTime) {
            preTime = _this4.preTouchTime;
          }
          if (Math.abs(preTime - _this4.focusTime) < 20) {
            return;
          }
          _this4.focusTime = 0;
        }
        _this4.preClickTime = 0;
        _this4.preTouchTime = 0;

        // Only prevent default when all the action is click.
        // https://github.com/ant-design/ant-design/issues/17043
        // https://github.com/ant-design/ant-design/issues/17291
        if (_this4.isClickToShow() && (_this4.isClickToHide() || _this4.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }
        var nextVisible = !_this4.state.popupVisible;
        if (_this4.isClickToHide() && !nextVisible || nextVisible && _this4.isClickToShow()) {
          _this4.setPopupVisible(!_this4.state.popupVisible, event);
        }
      };

      this.onPopupMouseDown = function () {
        var _context$rcTrigger = _this4.context.rcTrigger,
            rcTrigger = _context$rcTrigger === undefined ? {} : _context$rcTrigger;

        _this4.hasPopupMouseDown = true;

        clearTimeout(_this4.mouseDownTimeout);
        _this4.mouseDownTimeout = setTimeout(function () {
          _this4.hasPopupMouseDown = false;
        }, 0);

        if (rcTrigger.onPopupMouseDown) {
          rcTrigger.onPopupMouseDown.apply(rcTrigger, arguments);
        }
      };

      this.onDocumentClick = function (event) {
        if (_this4.props.mask && !_this4.props.maskClosable) {
          return;
        }

        var target = event.target;
        var root = ReactDOM.findDOMNode(_this4);
        if (!contains(root, target) && !_this4.hasPopupMouseDown) {
          _this4.close();
        }
      };

      this.getRootDomNode = function () {
        return ReactDOM.findDOMNode(_this4);
      };

      this.getPopupClassNameFromAlign = function (align) {
        var className = [];
        var _props9 = _this4.props,
            popupPlacement = _props9.popupPlacement,
            builtinPlacements = _props9.builtinPlacements,
            prefixCls = _props9.prefixCls,
            alignPoint = _props9.alignPoint,
            getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

        if (popupPlacement && builtinPlacements) {
          className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
        }
        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }
        return className.join(' ');
      };

      this.getComponent = function () {
        var _props10 = _this4.props,
            prefixCls = _props10.prefixCls,
            destroyPopupOnHide = _props10.destroyPopupOnHide,
            popupClassName = _props10.popupClassName,
            action = _props10.action,
            onPopupAlign = _props10.onPopupAlign,
            popupAnimation = _props10.popupAnimation,
            popupTransitionName = _props10.popupTransitionName,
            popupStyle = _props10.popupStyle,
            mask = _props10.mask,
            maskAnimation = _props10.maskAnimation,
            maskTransitionName = _props10.maskTransitionName,
            zIndex = _props10.zIndex,
            popup = _props10.popup,
            stretch = _props10.stretch,
            alignPoint = _props10.alignPoint;
        var _state = _this4.state,
            popupVisible = _state.popupVisible,
            point = _state.point;


        var align = _this4.getPopupAlign();

        var mouseProps = {};
        if (_this4.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this4.onPopupMouseEnter;
        }
        if (_this4.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this4.onPopupMouseLeave;
        }

        mouseProps.onMouseDown = _this4.onPopupMouseDown;
        mouseProps.onTouchStart = _this4.onPopupMouseDown;

        return React__default.createElement(
          Popup,
          _extends$1({
            prefixCls: prefixCls,
            destroyPopupOnHide: destroyPopupOnHide,
            visible: popupVisible,
            point: alignPoint && point,
            className: popupClassName,
            action: action,
            align: align,
            onAlign: onPopupAlign,
            animation: popupAnimation,
            getClassNameFromAlign: _this4.getPopupClassNameFromAlign
          }, mouseProps, {
            stretch: stretch,
            getRootDomNode: _this4.getRootDomNode,
            style: popupStyle,
            mask: mask,
            zIndex: zIndex,
            transitionName: popupTransitionName,
            maskAnimation: maskAnimation,
            maskTransitionName: maskTransitionName,
            ref: _this4.savePopup
          }),
          typeof popup === 'function' ? popup() : popup
        );
      };

      this.getContainer = function () {
        var props = _this4.props;

        var popupContainer = document.createElement('div');
        // Make sure default popup container will never cause scrollbar appearing
        // https://github.com/react-component/trigger/issues/41
        popupContainer.style.position = 'absolute';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';
        var mountNode = props.getPopupContainer ? props.getPopupContainer(ReactDOM.findDOMNode(_this4)) : props.getDocument().body;
        mountNode.appendChild(popupContainer);
        return popupContainer;
      };

      this.setPoint = function (point) {
        var alignPoint = _this4.props.alignPoint;

        if (!alignPoint || !point) return;

        _this4.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      };

      this.handlePortalUpdate = function () {
        if (_this4.state.prevPopupVisible !== _this4.state.popupVisible) {
          _this4.props.afterPopupVisibleChange(_this4.state.popupVisible);
        }
      };

      this.savePopup = function (node) {
        _this4._component = node;
      };
    };

    reactLifecyclesCompat.polyfill(Trigger);

    var Picker_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _reactDom2 = _interopRequireDefault(ReactDOM__default);



    var _propTypes2 = _interopRequireDefault(propTypes);





    var _createChainedFunction2 = _interopRequireDefault(createChainedFunction_1);



    var _KeyCode2 = _interopRequireDefault(KeyCode_1);



    var _placements2 = _interopRequireDefault(placements_1);



    var _rcTrigger2 = _interopRequireDefault(Trigger);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function noop() {}

    function refFn(field, component) {
      this[field] = component;
    }

    var Picker = function (_React$Component) {
      (0, _inherits3['default'])(Picker, _React$Component);

      function Picker(props) {
        (0, _classCallCheck3['default'])(this, Picker);

        var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var open = void 0;
        if ('open' in props) {
          open = props.open;
        } else {
          open = props.defaultOpen;
        }
        var value = props.value || props.defaultValue;
        _this.saveCalendarRef = refFn.bind(_this, 'calendarInstance');

        _this.state = {
          open: open,
          value: value
        };
        return _this;
      }

      Picker.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
        if (!prevState.open && this.state.open) {
          // setTimeout is for making sure saveCalendarRef happen before focusCalendar
          this.focusTimeout = setTimeout(this.focusCalendar, 0, this);
        }
      };

      Picker.prototype.componentWillUnmount = function componentWillUnmount() {
        clearTimeout(this.focusTimeout);
      };

      Picker.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
        var newState = {};
        var value = nextProps.value,
            open = nextProps.open;

        if ('value' in nextProps) {
          newState.value = value;
        }
        if (open !== undefined) {
          newState.open = open;
        }
        return newState;
      };

      Picker.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            placement = props.placement,
            style = props.style,
            getCalendarContainer = props.getCalendarContainer,
            align = props.align,
            animation = props.animation,
            disabled = props.disabled,
            dropdownClassName = props.dropdownClassName,
            transitionName = props.transitionName,
            children = props.children;

        var state = this.state;
        return _react2['default'].createElement(
          _rcTrigger2['default'],
          {
            popup: this.getCalendarElement(),
            popupAlign: align,
            builtinPlacements: _placements2['default'],
            popupPlacement: placement,
            action: disabled && !state.open ? [] : ['click'],
            destroyPopupOnHide: true,
            getPopupContainer: getCalendarContainer,
            popupStyle: style,
            popupAnimation: animation,
            popupTransitionName: transitionName,
            popupVisible: state.open,
            onPopupVisibleChange: this.onVisibleChange,
            prefixCls: prefixCls,
            popupClassName: dropdownClassName
          },
          _react2['default'].cloneElement(children(state, props), { onKeyDown: this.onKeyDown })
        );
      };

      return Picker;
    }(_react2['default'].Component);

    Picker.propTypes = {
      animation: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].string]),
      disabled: _propTypes2['default'].bool,
      transitionName: _propTypes2['default'].string,
      onChange: _propTypes2['default'].func,
      onOpenChange: _propTypes2['default'].func,
      children: _propTypes2['default'].func,
      getCalendarContainer: _propTypes2['default'].func,
      calendar: _propTypes2['default'].element,
      style: _propTypes2['default'].object,
      open: _propTypes2['default'].bool,
      defaultOpen: _propTypes2['default'].bool,
      prefixCls: _propTypes2['default'].string,
      placement: _propTypes2['default'].any,
      value: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].array]),
      defaultValue: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].array]),
      align: _propTypes2['default'].object,
      dateRender: _propTypes2['default'].func,
      onBlur: _propTypes2['default'].func
    };
    Picker.defaultProps = {
      prefixCls: 'rc-calendar-picker',
      style: {},
      align: {},
      placement: 'bottomLeft',
      defaultOpen: false,
      onChange: noop,
      onOpenChange: noop,
      onBlur: noop
    };

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.onCalendarKeyDown = function (event) {
        if (event.keyCode === _KeyCode2['default'].ESC) {
          event.stopPropagation();
          _this2.close(_this2.focus);
        }
      };

      this.onCalendarSelect = function (value) {
        var cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var props = _this2.props;
        if (!('value' in props)) {
          _this2.setState({
            value: value
          });
        }
        if (cause.source === 'keyboard' || cause.source === 'dateInputSelect' || !props.calendar.props.timePicker && cause.source !== 'dateInput' || cause.source === 'todayButton') {
          _this2.close(_this2.focus);
        }
        props.onChange(value);
      };

      this.onKeyDown = function (event) {
        if (!_this2.state.open && (event.keyCode === _KeyCode2['default'].DOWN || event.keyCode === _KeyCode2['default'].ENTER)) {
          _this2.open();
          event.preventDefault();
        }
      };

      this.onCalendarOk = function () {
        _this2.close(_this2.focus);
      };

      this.onCalendarClear = function () {
        _this2.close(_this2.focus);
      };

      this.onCalendarBlur = function () {
        _this2.setOpen(false);
      };

      this.onVisibleChange = function (open) {
        _this2.setOpen(open);
      };

      this.getCalendarElement = function () {
        var props = _this2.props;
        var state = _this2.state;
        var calendarProps = props.calendar.props;
        var value = state.value;

        var defaultValue = value;
        var extraProps = {
          ref: _this2.saveCalendarRef,
          defaultValue: defaultValue || calendarProps.defaultValue,
          selectedValue: value,
          onKeyDown: _this2.onCalendarKeyDown,
          onOk: (0, _createChainedFunction2['default'])(calendarProps.onOk, _this2.onCalendarOk),
          onSelect: (0, _createChainedFunction2['default'])(calendarProps.onSelect, _this2.onCalendarSelect),
          onClear: (0, _createChainedFunction2['default'])(calendarProps.onClear, _this2.onCalendarClear),
          onBlur: (0, _createChainedFunction2['default'])(calendarProps.onBlur, _this2.onCalendarBlur)
        };

        return _react2['default'].cloneElement(props.calendar, extraProps);
      };

      this.setOpen = function (open, callback) {
        var onOpenChange = _this2.props.onOpenChange;

        if (_this2.state.open !== open) {
          if (!('open' in _this2.props)) {
            _this2.setState({
              open: open
            }, callback);
          }
          onOpenChange(open);
        }
      };

      this.open = function (callback) {
        _this2.setOpen(true, callback);
      };

      this.close = function (callback) {
        _this2.setOpen(false, callback);
      };

      this.focus = function () {
        if (!_this2.state.open) {
          _reactDom2['default'].findDOMNode(_this2).focus();
        }
      };

      this.focusCalendar = function () {
        if (_this2.state.open && !!_this2.calendarInstance) {
          _this2.calendarInstance.focus();
        }
      };
    };

    (0, reactLifecyclesCompat__default.polyfill)(Picker);

    exports['default'] = Picker;
    module.exports = exports['default'];
    });

    var RcDatePicker = unwrapExports(Picker_1);

    var warning_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.warning = warning;
    exports.note = note;
    exports.resetWarned = resetWarned;
    exports.call = call;
    exports.warningOnce = warningOnce;
    exports.noteOnce = noteOnce;
    exports.default = void 0;

    /* eslint-disable no-console */
    var warned = {};

    function warning(valid, message) {
      // Support uglify
      if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
        console.error("Warning: ".concat(message));
      }
    }

    function note(valid, message) {
      // Support uglify
      if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
        console.warn("Note: ".concat(message));
      }
    }

    function resetWarned() {
      warned = {};
    }

    function call(method, valid, message) {
      if (!valid && !warned[message]) {
        method(false, message);
        warned[message] = true;
      }
    }

    function warningOnce(valid, message) {
      call(warning, valid, message);
    }

    function noteOnce(valid, message) {
      call(note, valid, message);
    }

    var _default = warningOnce;
    /* eslint-enable */

    exports.default = _default;
    });

    var warning = unwrapExports(warning_1);
    var warning_2 = warning_1.warning;
    var warning_3 = warning_1.note;
    var warning_4 = warning_1.resetWarned;
    var warning_5 = warning_1.call;
    var warning_6 = warning_1.warningOnce;
    var warning_7 = warning_1.noteOnce;

    var warning$1 = (function (valid, component, message) {
        warning(valid, "[antd: " + component + "] " + message);
    });

    function interopDefault(m) {
        return m.default || m;
    }

    function formatDate(value, format) {
        if (!value) {
            return '';
        }
        if (Array.isArray(format)) {
            format = format[0];
        }
        return value.format(format);
    }

    function createPicker(TheCalendar) {
        var CalenderWrapper = (function (_super) {
            __extends(CalenderWrapper, _super);
            function CalenderWrapper(props) {
                var _this = _super.call(this, props) || this;
                _this.saveInput = function (node) {
                    _this.input = node;
                };
                _this.clearSelection = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    _this.handleChange(null);
                };
                _this.handleChange = function (value) {
                    var props = _this.props;
                    if (!('value' in props)) {
                        _this.setState({
                            value: value,
                            showDate: value,
                        });
                    }
                    props.onChange(value, formatDate(value, props.format));
                };
                _this.handleCalendarChange = function (value) {
                    _this.setState({ showDate: value });
                };
                _this.handleOpenChange = function (open) {
                    var onOpenChange = _this.props.onOpenChange;
                    if (!('open' in _this.props)) {
                        _this.setState({ open: open });
                    }
                    if (onOpenChange) {
                        onOpenChange(open);
                    }
                };
                _this.renderFooter = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var renderExtraFooter = _this.props.renderExtraFooter;
                    var prefixCls = _this.prefixCls;
                    return renderExtraFooter ? (React.createElement("div", { className: prefixCls + "-footer-extra" }, renderExtraFooter.apply(void 0, args))) : null;
                };
                _this.renderPicker = function () {
                    var _a;
                    var _b = _this.state, value = _b.value, showDate = _b.showDate, open = _b.open;
                    var props = omit(_this.props, ['onChange']);
                    var prefixCls = 'DatePicker';
                    _this.prefixCls = prefixCls;
                    var placeholder = 'placeholder' in props ? props.placeholder : 'Select Date';
                    var disabledTime = props.showTime ? props.disabledTime : null;
                    var calendarClassName = classNames((_a = {},
                        _a[prefixCls + "-time"] = props.showTime,
                        _a[prefixCls + "-month"] = MonthCalendar === TheCalendar,
                        _a));
                    var pickerProps = {};
                    var calendarProps = {};
                    var pickerStyle = {};
                    if (props.showTime) {
                        calendarProps = {
                            onSelect: _this.handleChange,
                        };
                        pickerStyle.minWidth = 195;
                    }
                    else {
                        pickerProps = {
                            onChange: _this.handleChange,
                        };
                    }
                    if ('mode' in props) {
                        calendarProps.mode = props.mode;
                    }
                    warning$1(!('onOK' in props), 'DatePicker', 'It should be `DatePicker[onOk]` or `MonthPicker[onOk]`, instead of `onOK`!');
                    var calendar = (React.createElement(TheCalendar, __assign({}, calendarProps, { disabledDate: props.disabledDate, disabledTime: disabledTime, timePicker: props.timePicker, defaultValue: props.defaultPickerValue || interopDefault(moment)(), dateInputPlaceholder: placeholder, prefixCls: prefixCls, className: calendarClassName, onOk: props.onOk, dateRender: props.dateRender, format: props.format, showToday: props.showToday, monthCellContentRender: props.monthCellContentRender, renderFooter: _this.renderFooter, onPanelChange: props.onPanelChange, onChange: _this.handleCalendarChange, value: showDate })));
                    var clearIcon = !props.disabled && props.allowClear && value ? (React.createElement(Icon, { icon: "close", className: prefixCls + "-picker-clear", onClick: _this.clearSelection })) : null;
                    var inputIcon = (React.createElement(Icon, { icon: "calendar_today", className: prefixCls + "-picker-icon " + prefixCls + "-picker-icon-calendar" }));
                    var dataOrAriaProps = getDataOrAriaProps(props);
                    var input = function (_a) {
                        var inputValue = _a.value;
                        return (React.createElement("div", null,
                            React.createElement("input", __assign({ ref: _this.saveInput, disabled: props.disabled, readOnly: true, value: formatDate(inputValue, props.format), placeholder: placeholder, className: props.pickerInputClass, tabIndex: props.tabIndex, name: props.name }, dataOrAriaProps)),
                            clearIcon,
                            inputIcon));
                    };
                    return (React.createElement("span", { id: props.id, className: classNames(props.className, props.pickerClass), style: __assign(__assign({}, pickerStyle), props.style), onFocus: props.onFocus, onBlur: props.onBlur, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
                        React.createElement(RcDatePicker, __assign({}, props, pickerProps, { calendar: calendar, value: value, prefixCls: prefixCls + "-picker-container", style: props.popupStyle, open: open, onOpenChange: _this.handleOpenChange }), input)));
                };
                var value = props.value || props.defaultValue;
                if (value && !interopDefault(moment).isMoment(value)) {
                    throw new Error('The value/defaultValue of DatePicker or MonthPicker must be ' +
                        'a moment object after `antd@2.0`, see: https://u.ant.design/date-picker-value');
                }
                _this.state = {
                    value: value,
                    showDate: value,
                    open: false,
                };
                return _this;
            }
            CalenderWrapper.getDerivedStateFromProps = function (nextProps, prevState) {
                var state = {};
                var open = prevState.open;
                if ('open' in nextProps) {
                    state.open = nextProps.open;
                    open = nextProps.open || false;
                }
                if ('value' in nextProps) {
                    state.value = nextProps.value;
                    if (nextProps.value !== prevState.value ||
                        (!open && nextProps.value !== prevState.showDate)) {
                        state.showDate = nextProps.value;
                    }
                }
                return Object.keys(state).length > 0 ? state : null;
            };
            CalenderWrapper.prototype.componentDidUpdate = function (_, prevState) {
                if (!('open' in this.props) && prevState.open && !this.state.open) {
                    this.focus();
                }
            };
            CalenderWrapper.prototype.focus = function () {
                this.input.focus();
            };
            CalenderWrapper.prototype.blur = function () {
                this.input.blur();
            };
            CalenderWrapper.prototype.render = function () {
                return this.renderPicker();
            };
            CalenderWrapper.defaultProps = {
                allowClear: true,
                showToday: true,
            };
            return CalenderWrapper;
        }(React.Component));
        reactLifecyclesCompat.polyfill(CalenderWrapper);
        return CalenderWrapper;
    }

    var Header_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _react = _interopRequireWildcard(React__default);

    var _propTypes = _interopRequireDefault(propTypes);

    var _moment = _interopRequireDefault(moment__default);

    var _classnames = _interopRequireDefault(classNames);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    var Header =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Header, _Component);

      function Header(props) {
        var _this;

        _classCallCheck(this, Header);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));

        _defineProperty(_assertThisInitialized(_this), "onInputChange", function (event) {
          var str = event.target.value;

          _this.setState({
            str: str
          });

          var _this$props = _this.props,
              format = _this$props.format,
              hourOptions = _this$props.hourOptions,
              minuteOptions = _this$props.minuteOptions,
              secondOptions = _this$props.secondOptions,
              disabledHours = _this$props.disabledHours,
              disabledMinutes = _this$props.disabledMinutes,
              disabledSeconds = _this$props.disabledSeconds,
              onChange = _this$props.onChange;

          if (str) {
            var originalValue = _this.props.value;

            var value = _this.getProtoValue().clone();

            var parsed = (0, _moment["default"])(str, format, true);

            if (!parsed.isValid()) {
              _this.setState({
                invalid: true
              });

              return;
            }

            value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second()); // if time value not allowed, response warning.

            if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
              _this.setState({
                invalid: true
              });

              return;
            } // if time value is disabled, response warning.


            var disabledHourOptions = disabledHours();
            var disabledMinuteOptions = disabledMinutes(value.hour());
            var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());

            if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
              _this.setState({
                invalid: true
              });

              return;
            }

            if (originalValue) {
              if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
                // keep other fields for rc-calendar
                var changedValue = originalValue.clone();
                changedValue.hour(value.hour());
                changedValue.minute(value.minute());
                changedValue.second(value.second());
                onChange(changedValue);
              }
            } else if (originalValue !== value) {
              onChange(value);
            }
          } else {
            onChange(null);
          }

          _this.setState({
            invalid: false
          });
        });

        _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
          var _this$props2 = _this.props,
              onEsc = _this$props2.onEsc,
              onKeyDown = _this$props2.onKeyDown;

          if (e.keyCode === 27) {
            onEsc();
          }

          onKeyDown(e);
        });

        var _value = props.value,
            _format = props.format;
        _this.state = {
          str: _value && _value.format(_format) || '',
          invalid: false
        };
        return _this;
      }

      _createClass(Header, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          var focusOnOpen = this.props.focusOnOpen;

          if (focusOnOpen) {
            // Wait one frame for the panel to be positioned before focusing
            var requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
            requestAnimationFrame(function () {
              _this2.refInput.focus();

              _this2.refInput.select();
            });
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var _this$props3 = this.props,
              value = _this$props3.value,
              format = _this$props3.format;

          if (value !== prevProps.value) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
              str: value && value.format(format) || '',
              invalid: false
            });
          }
        }
      }, {
        key: "getProtoValue",
        value: function getProtoValue() {
          var _this$props4 = this.props,
              value = _this$props4.value,
              defaultOpenValue = _this$props4.defaultOpenValue;
          return value || defaultOpenValue;
        }
      }, {
        key: "getInput",
        value: function getInput() {
          var _this3 = this;

          var _this$props5 = this.props,
              prefixCls = _this$props5.prefixCls,
              placeholder = _this$props5.placeholder,
              inputReadOnly = _this$props5.inputReadOnly;
          var _this$state = this.state,
              invalid = _this$state.invalid,
              str = _this$state.str;
          var invalidClass = invalid ? "".concat(prefixCls, "-input-invalid") : '';
          return _react["default"].createElement("input", {
            className: (0, _classnames["default"])("".concat(prefixCls, "-input"), invalidClass),
            ref: function ref(_ref) {
              _this3.refInput = _ref;
            },
            onKeyDown: this.onKeyDown,
            value: str,
            placeholder: placeholder,
            onChange: this.onInputChange,
            readOnly: !!inputReadOnly
          });
        }
      }, {
        key: "render",
        value: function render() {
          var prefixCls = this.props.prefixCls;
          return _react["default"].createElement("div", {
            className: "".concat(prefixCls, "-input-wrap")
          }, this.getInput());
        }
      }]);

      return Header;
    }(_react.Component);

    _defineProperty(Header, "propTypes", {
      format: _propTypes["default"].string,
      prefixCls: _propTypes["default"].string,
      disabledDate: _propTypes["default"].func,
      placeholder: _propTypes["default"].string,
      clearText: _propTypes["default"].string,
      value: _propTypes["default"].object,
      inputReadOnly: _propTypes["default"].bool,
      hourOptions: _propTypes["default"].array,
      minuteOptions: _propTypes["default"].array,
      secondOptions: _propTypes["default"].array,
      disabledHours: _propTypes["default"].func,
      disabledMinutes: _propTypes["default"].func,
      disabledSeconds: _propTypes["default"].func,
      onChange: _propTypes["default"].func,
      onEsc: _propTypes["default"].func,
      defaultOpenValue: _propTypes["default"].object,
      currentSelectPanel: _propTypes["default"].string,
      focusOnOpen: _propTypes["default"].bool,
      onKeyDown: _propTypes["default"].func,
      clearIcon: _propTypes["default"].node
    });

    _defineProperty(Header, "defaultProps", {
      inputReadOnly: false
    });

    var _default = Header;
    exports["default"] = _default;
    });

    unwrapExports(Header_1);

    var performanceNow = createCommonjsModule(function (module) {
    // Generated by CoffeeScript 1.12.2
    (function() {
      var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

      if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
        module.exports = function() {
          return performance.now();
        };
      } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
        module.exports = function() {
          return (getNanoSeconds() - nodeLoadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
          var hr;
          hr = hrtime();
          return hr[0] * 1e9 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1e9;
        nodeLoadTime = moduleLoadTime - upTime;
      } else if (Date.now) {
        module.exports = function() {
          return Date.now() - loadTime;
        };
        loadTime = Date.now();
      } else {
        module.exports = function() {
          return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
      }

    }).call(commonjsGlobal);


    });

    var root = typeof window === 'undefined' ? commonjsGlobal : window
      , vendors = ['moz', 'webkit']
      , suffix = 'AnimationFrame'
      , raf = root['request' + suffix]
      , caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

    for(var i$1 = 0; !raf && i$1 < vendors.length; i$1++) {
      raf = root[vendors[i$1] + 'Request' + suffix];
      caf = root[vendors[i$1] + 'Cancel' + suffix]
          || root[vendors[i$1] + 'CancelRequest' + suffix];
    }

    // Some versions of FF have rAF but not cAF
    if(!raf || !caf) {
      var last = 0
        , id$1 = 0
        , queue = []
        , frameDuration = 1000 / 60;

      raf = function(callback) {
        if(queue.length === 0) {
          var _now = performanceNow()
            , next = Math.max(0, frameDuration - (_now - last));
          last = next + _now;
          setTimeout(function() {
            var cp = queue.slice(0);
            // Clear queue here to prevent
            // callbacks from appending listeners
            // to the current frame's queue
            queue.length = 0;
            for(var i = 0; i < cp.length; i++) {
              if(!cp[i].cancelled) {
                try{
                  cp[i].callback(last);
                } catch(e) {
                  setTimeout(function() { throw e }, 0);
                }
              }
            }
          }, Math.round(next));
        }
        queue.push({
          handle: ++id$1,
          callback: callback,
          cancelled: false
        });
        return id$1
      };

      caf = function(handle) {
        for(var i = 0; i < queue.length; i++) {
          if(queue[i].handle === handle) {
            queue[i].cancelled = true;
          }
        }
      };
    }

    var raf_1 = function(fn) {
      // Wrap in a new function to prevent
      // `cancel` potentially being assigned
      // to the native rAF function
      return raf.call(root, fn)
    };
    var cancel = function() {
      caf.apply(root, arguments);
    };
    var polyfill = function(object) {
      if (!object) {
        object = root;
      }
      object.requestAnimationFrame = raf;
      object.cancelAnimationFrame = caf;
    };
    raf_1.cancel = cancel;
    raf_1.polyfill = polyfill;

    var Select_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _react = _interopRequireWildcard(React__default);

    var _propTypes = _interopRequireDefault(propTypes);

    var _reactDom = _interopRequireDefault(ReactDOM__default);

    var _classnames = _interopRequireDefault(classNames);

    var _raf = _interopRequireDefault(raf_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    var scrollTo = function scrollTo(element, to, duration) {
      // jump to target if duration zero
      if (duration <= 0) {
        (0, _raf["default"])(function () {
          element.scrollTop = to;
        });
        return;
      }

      var difference = to - element.scrollTop;
      var perTick = difference / duration * 10;
      (0, _raf["default"])(function () {
        element.scrollTop += perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
      });
    };

    var Select =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Select, _Component);

      function Select() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, Select);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "state", {
          active: false
        });

        _defineProperty(_assertThisInitialized(_this), "onSelect", function (value) {
          var _this$props = _this.props,
              onSelect = _this$props.onSelect,
              type = _this$props.type;
          onSelect(type, value);
        });

        _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function (e) {
          var onMouseEnter = _this.props.onMouseEnter;

          _this.setState({
            active: true
          });

          onMouseEnter(e);
        });

        _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
          _this.setState({
            active: false
          });
        });

        _defineProperty(_assertThisInitialized(_this), "saveList", function (node) {
          _this.list = node;
        });

        return _this;
      }

      _createClass(Select, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          // jump to selected option
          this.scrollToSelected(0);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var selectedIndex = this.props.selectedIndex; // smooth scroll to selected option

          if (prevProps.selectedIndex !== selectedIndex) {
            this.scrollToSelected(120);
          }
        }
      }, {
        key: "getOptions",
        value: function getOptions() {
          var _this2 = this;

          var _this$props2 = this.props,
              options = _this$props2.options,
              selectedIndex = _this$props2.selectedIndex,
              prefixCls = _this$props2.prefixCls,
              onEsc = _this$props2.onEsc;
          return options.map(function (item, index) {
            var _classNames;

            var cls = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-select-option-selected"), selectedIndex === index), _defineProperty(_classNames, "".concat(prefixCls, "-select-option-disabled"), item.disabled), _classNames));
            var onClick = item.disabled ? undefined : function () {
              _this2.onSelect(item.value);
            };

            var onKeyDown = function onKeyDown(e) {
              if (e.keyCode === 13) onClick();else if (e.keyCode === 27) onEsc();
            };

            return _react["default"].createElement("li", {
              role: "button",
              onClick: onClick,
              className: cls,
              key: index,
              disabled: item.disabled,
              tabIndex: "0",
              onKeyDown: onKeyDown
            }, item.value);
          });
        }
      }, {
        key: "scrollToSelected",
        value: function scrollToSelected(duration) {
          // move to selected item
          var selectedIndex = this.props.selectedIndex;

          var select = _reactDom["default"].findDOMNode(this);

          var list = _reactDom["default"].findDOMNode(this.list);

          if (!list) {
            return;
          }

          var index = selectedIndex;

          if (index < 0) {
            index = 0;
          }

          var topOption = list.children[index];
          var to = topOption.offsetTop;
          scrollTo(select, to, duration);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props3 = this.props,
              prefixCls = _this$props3.prefixCls,
              options = _this$props3.options;
          var active = this.state.active;

          if (options.length === 0) {
            return null;
          }

          var cls = (0, _classnames["default"])("".concat(prefixCls, "-select"), _defineProperty({}, "".concat(prefixCls, "-select-active"), active));
          return _react["default"].createElement("div", {
            className: cls,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          }, _react["default"].createElement("ul", {
            ref: this.saveList
          }, this.getOptions()));
        }
      }]);

      return Select;
    }(_react.Component);

    _defineProperty(Select, "propTypes", {
      prefixCls: _propTypes["default"].string,
      options: _propTypes["default"].array,
      selectedIndex: _propTypes["default"].number,
      type: _propTypes["default"].string,
      onSelect: _propTypes["default"].func,
      onMouseEnter: _propTypes["default"].func,
      onEsc: _propTypes["default"].func
    });

    var _default = Select;
    exports["default"] = _default;
    });

    unwrapExports(Select_1);

    var Combobox_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _react = _interopRequireWildcard(React__default);

    var _propTypes = _interopRequireDefault(propTypes);

    var _Select = _interopRequireDefault(Select_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    var formatOption = function formatOption(option, disabledOptions) {
      var value = "".concat(option);

      if (option < 10) {
        value = "0".concat(option);
      }

      var disabled = false;

      if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
        disabled = true;
      }

      return {
        value: value,
        disabled: disabled
      };
    };

    var Combobox =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Combobox, _Component);

      function Combobox() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, Combobox);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Combobox)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "onItemChange", function (type, itemValue) {
          var _this$props = _this.props,
              onChange = _this$props.onChange,
              defaultOpenValue = _this$props.defaultOpenValue,
              use12Hours = _this$props.use12Hours,
              propValue = _this$props.value,
              isAM = _this$props.isAM,
              onAmPmChange = _this$props.onAmPmChange;
          var value = (propValue || defaultOpenValue).clone();

          if (type === 'hour') {
            if (use12Hours) {
              if (isAM) {
                value.hour(+itemValue % 12);
              } else {
                value.hour(+itemValue % 12 + 12);
              }
            } else {
              value.hour(+itemValue);
            }
          } else if (type === 'minute') {
            value.minute(+itemValue);
          } else if (type === 'ampm') {
            var ampm = itemValue.toUpperCase();

            if (use12Hours) {
              if (ampm === 'PM' && value.hour() < 12) {
                value.hour(value.hour() % 12 + 12);
              }

              if (ampm === 'AM') {
                if (value.hour() >= 12) {
                  value.hour(value.hour() - 12);
                }
              }
            }

            onAmPmChange(ampm);
          } else {
            value.second(+itemValue);
          }

          onChange(value);
        });

        _defineProperty(_assertThisInitialized(_this), "onEnterSelectPanel", function (range) {
          var onCurrentSelectPanelChange = _this.props.onCurrentSelectPanelChange;
          onCurrentSelectPanelChange(range);
        });

        return _this;
      }

      _createClass(Combobox, [{
        key: "getHourSelect",
        value: function getHourSelect(hour) {
          var _this2 = this;

          var _this$props2 = this.props,
              prefixCls = _this$props2.prefixCls,
              hourOptions = _this$props2.hourOptions,
              disabledHours = _this$props2.disabledHours,
              showHour = _this$props2.showHour,
              use12Hours = _this$props2.use12Hours,
              onEsc = _this$props2.onEsc;

          if (!showHour) {
            return null;
          }

          var disabledOptions = disabledHours();
          var hourOptionsAdj;
          var hourAdj;

          if (use12Hours) {
            hourOptionsAdj = [12].concat(hourOptions.filter(function (h) {
              return h < 12 && h > 0;
            }));
            hourAdj = hour % 12 || 12;
          } else {
            hourOptionsAdj = hourOptions;
            hourAdj = hour;
          }

          return _react["default"].createElement(_Select["default"], {
            prefixCls: prefixCls,
            options: hourOptionsAdj.map(function (option) {
              return formatOption(option, disabledOptions);
            }),
            selectedIndex: hourOptionsAdj.indexOf(hourAdj),
            type: "hour",
            onSelect: this.onItemChange,
            onMouseEnter: function onMouseEnter() {
              return _this2.onEnterSelectPanel('hour');
            },
            onEsc: onEsc
          });
        }
      }, {
        key: "getMinuteSelect",
        value: function getMinuteSelect(minute) {
          var _this3 = this;

          var _this$props3 = this.props,
              prefixCls = _this$props3.prefixCls,
              minuteOptions = _this$props3.minuteOptions,
              disabledMinutes = _this$props3.disabledMinutes,
              defaultOpenValue = _this$props3.defaultOpenValue,
              showMinute = _this$props3.showMinute,
              propValue = _this$props3.value,
              onEsc = _this$props3.onEsc;

          if (!showMinute) {
            return null;
          }

          var value = propValue || defaultOpenValue;
          var disabledOptions = disabledMinutes(value.hour());
          return _react["default"].createElement(_Select["default"], {
            prefixCls: prefixCls,
            options: minuteOptions.map(function (option) {
              return formatOption(option, disabledOptions);
            }),
            selectedIndex: minuteOptions.indexOf(minute),
            type: "minute",
            onSelect: this.onItemChange,
            onMouseEnter: function onMouseEnter() {
              return _this3.onEnterSelectPanel('minute');
            },
            onEsc: onEsc
          });
        }
      }, {
        key: "getSecondSelect",
        value: function getSecondSelect(second) {
          var _this4 = this;

          var _this$props4 = this.props,
              prefixCls = _this$props4.prefixCls,
              secondOptions = _this$props4.secondOptions,
              disabledSeconds = _this$props4.disabledSeconds,
              showSecond = _this$props4.showSecond,
              defaultOpenValue = _this$props4.defaultOpenValue,
              propValue = _this$props4.value,
              onEsc = _this$props4.onEsc;

          if (!showSecond) {
            return null;
          }

          var value = propValue || defaultOpenValue;
          var disabledOptions = disabledSeconds(value.hour(), value.minute());
          return _react["default"].createElement(_Select["default"], {
            prefixCls: prefixCls,
            options: secondOptions.map(function (option) {
              return formatOption(option, disabledOptions);
            }),
            selectedIndex: secondOptions.indexOf(second),
            type: "second",
            onSelect: this.onItemChange,
            onMouseEnter: function onMouseEnter() {
              return _this4.onEnterSelectPanel('second');
            },
            onEsc: onEsc
          });
        }
      }, {
        key: "getAMPMSelect",
        value: function getAMPMSelect() {
          var _this5 = this;

          var _this$props5 = this.props,
              prefixCls = _this$props5.prefixCls,
              use12Hours = _this$props5.use12Hours,
              format = _this$props5.format,
              isAM = _this$props5.isAM,
              onEsc = _this$props5.onEsc;

          if (!use12Hours) {
            return null;
          }

          var AMPMOptions = ['am', 'pm'] // If format has A char, then we should uppercase AM/PM
          .map(function (c) {
            return format.match(/\sA/) ? c.toUpperCase() : c;
          }).map(function (c) {
            return {
              value: c
            };
          });
          var selected = isAM ? 0 : 1;
          return _react["default"].createElement(_Select["default"], {
            prefixCls: prefixCls,
            options: AMPMOptions,
            selectedIndex: selected,
            type: "ampm",
            onSelect: this.onItemChange,
            onMouseEnter: function onMouseEnter() {
              return _this5.onEnterSelectPanel('ampm');
            },
            onEsc: onEsc
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props6 = this.props,
              prefixCls = _this$props6.prefixCls,
              defaultOpenValue = _this$props6.defaultOpenValue,
              propValue = _this$props6.value;
          var value = propValue || defaultOpenValue;
          return _react["default"].createElement("div", {
            className: "".concat(prefixCls, "-combobox")
          }, this.getHourSelect(value.hour()), this.getMinuteSelect(value.minute()), this.getSecondSelect(value.second()), this.getAMPMSelect(value.hour()));
        }
      }]);

      return Combobox;
    }(_react.Component);

    _defineProperty(Combobox, "propTypes", {
      format: _propTypes["default"].string,
      defaultOpenValue: _propTypes["default"].object,
      prefixCls: _propTypes["default"].string,
      value: _propTypes["default"].object,
      onChange: _propTypes["default"].func,
      onAmPmChange: _propTypes["default"].func,
      showHour: _propTypes["default"].bool,
      showMinute: _propTypes["default"].bool,
      showSecond: _propTypes["default"].bool,
      hourOptions: _propTypes["default"].array,
      minuteOptions: _propTypes["default"].array,
      secondOptions: _propTypes["default"].array,
      disabledHours: _propTypes["default"].func,
      disabledMinutes: _propTypes["default"].func,
      disabledSeconds: _propTypes["default"].func,
      onCurrentSelectPanelChange: _propTypes["default"].func,
      use12Hours: _propTypes["default"].bool,
      onEsc: _propTypes["default"].func,
      isAM: _propTypes["default"].bool
    });

    var _default = Combobox;
    exports["default"] = _default;
    });

    unwrapExports(Combobox_1);

    var Panel_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _react = _interopRequireWildcard(React__default);

    var _propTypes = _interopRequireDefault(propTypes);

    var _moment = _interopRequireDefault(moment__default);

    var _classnames = _interopRequireDefault(classNames);



    var _Header = _interopRequireDefault(Header_1);

    var _Combobox = _interopRequireDefault(Combobox_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    function noop() {}

    function generateOptions(length, disabledOptions, hideDisabledOptions) {
      var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var arr = [];

      for (var value = 0; value < length; value += step) {
        if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
          arr.push(value);
        }
      }

      return arr;
    }

    function toNearestValidTime(time, hourOptions, minuteOptions, secondOptions) {
      var hour = hourOptions.slice().sort(function (a, b) {
        return Math.abs(time.hour() - a) - Math.abs(time.hour() - b);
      })[0];
      var minute = minuteOptions.slice().sort(function (a, b) {
        return Math.abs(time.minute() - a) - Math.abs(time.minute() - b);
      })[0];
      var second = secondOptions.slice().sort(function (a, b) {
        return Math.abs(time.second() - a) - Math.abs(time.second() - b);
      })[0];
      return (0, _moment["default"])("".concat(hour, ":").concat(minute, ":").concat(second), 'HH:mm:ss');
    }

    var Panel =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Panel, _Component);

      function Panel() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, Panel);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Panel)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "state", {});

        _defineProperty(_assertThisInitialized(_this), "onChange", function (newValue) {
          var onChange = _this.props.onChange;

          _this.setState({
            value: newValue
          });

          onChange(newValue);
        });

        _defineProperty(_assertThisInitialized(_this), "onAmPmChange", function (ampm) {
          var onAmPmChange = _this.props.onAmPmChange;
          onAmPmChange(ampm);
        });

        _defineProperty(_assertThisInitialized(_this), "onCurrentSelectPanelChange", function (currentSelectPanel) {
          _this.setState({
            currentSelectPanel: currentSelectPanel
          });
        });

        _defineProperty(_assertThisInitialized(_this), "disabledHours", function () {
          var _this$props = _this.props,
              use12Hours = _this$props.use12Hours,
              disabledHours = _this$props.disabledHours;
          var disabledOptions = disabledHours();

          if (use12Hours && Array.isArray(disabledOptions)) {
            if (_this.isAM()) {
              disabledOptions = disabledOptions.filter(function (h) {
                return h < 12;
              }).map(function (h) {
                return h === 0 ? 12 : h;
              });
            } else {
              disabledOptions = disabledOptions.map(function (h) {
                return h === 12 ? 12 : h - 12;
              });
            }
          }

          return disabledOptions;
        });

        return _this;
      }

      _createClass(Panel, [{
        key: "close",
        // https://github.com/ant-design/ant-design/issues/5829
        value: function close() {
          var onEsc = this.props.onEsc;
          onEsc();
        }
      }, {
        key: "isAM",
        value: function isAM() {
          var defaultOpenValue = this.props.defaultOpenValue;
          var value = this.state.value;
          var realValue = value || defaultOpenValue;
          return realValue.hour() >= 0 && realValue.hour() < 12;
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
              prefixCls = _this$props2.prefixCls,
              className = _this$props2.className,
              placeholder = _this$props2.placeholder,
              disabledMinutes = _this$props2.disabledMinutes,
              disabledSeconds = _this$props2.disabledSeconds,
              hideDisabledOptions = _this$props2.hideDisabledOptions,
              showHour = _this$props2.showHour,
              showMinute = _this$props2.showMinute,
              showSecond = _this$props2.showSecond,
              format = _this$props2.format,
              defaultOpenValue = _this$props2.defaultOpenValue,
              clearText = _this$props2.clearText,
              onEsc = _this$props2.onEsc,
              addon = _this$props2.addon,
              use12Hours = _this$props2.use12Hours,
              focusOnOpen = _this$props2.focusOnOpen,
              onKeyDown = _this$props2.onKeyDown,
              hourStep = _this$props2.hourStep,
              minuteStep = _this$props2.minuteStep,
              secondStep = _this$props2.secondStep,
              inputReadOnly = _this$props2.inputReadOnly,
              clearIcon = _this$props2.clearIcon;
          var _this$state = this.state,
              value = _this$state.value,
              currentSelectPanel = _this$state.currentSelectPanel;
          var disabledHourOptions = this.disabledHours();
          var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
          var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
          var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions, hourStep);
          var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions, minuteStep);
          var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions, secondStep);
          var validDefaultOpenValue = toNearestValidTime(defaultOpenValue, hourOptions, minuteOptions, secondOptions);
          return _react["default"].createElement("div", {
            className: (0, _classnames["default"])(className, "".concat(prefixCls, "-inner"))
          }, _react["default"].createElement(_Header["default"], {
            clearText: clearText,
            prefixCls: prefixCls,
            defaultOpenValue: validDefaultOpenValue,
            value: value,
            currentSelectPanel: currentSelectPanel,
            onEsc: onEsc,
            format: format,
            placeholder: placeholder,
            hourOptions: hourOptions,
            minuteOptions: minuteOptions,
            secondOptions: secondOptions,
            disabledHours: this.disabledHours,
            disabledMinutes: disabledMinutes,
            disabledSeconds: disabledSeconds,
            onChange: this.onChange,
            focusOnOpen: focusOnOpen,
            onKeyDown: onKeyDown,
            inputReadOnly: inputReadOnly,
            clearIcon: clearIcon
          }), _react["default"].createElement(_Combobox["default"], {
            prefixCls: prefixCls,
            value: value,
            defaultOpenValue: validDefaultOpenValue,
            format: format,
            onChange: this.onChange,
            onAmPmChange: this.onAmPmChange,
            showHour: showHour,
            showMinute: showMinute,
            showSecond: showSecond,
            hourOptions: hourOptions,
            minuteOptions: minuteOptions,
            secondOptions: secondOptions,
            disabledHours: this.disabledHours,
            disabledMinutes: disabledMinutes,
            disabledSeconds: disabledSeconds,
            onCurrentSelectPanelChange: this.onCurrentSelectPanelChange,
            use12Hours: use12Hours,
            onEsc: onEsc,
            isAM: this.isAM()
          }), addon(this));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props, state) {
          if ('value' in props) {
            return _objectSpread({}, state, {
              value: props.value
            });
          }

          return null;
        }
      }]);

      return Panel;
    }(_react.Component);

    _defineProperty(Panel, "propTypes", {
      clearText: _propTypes["default"].string,
      prefixCls: _propTypes["default"].string,
      className: _propTypes["default"].string,
      defaultOpenValue: _propTypes["default"].object,
      value: _propTypes["default"].object,
      placeholder: _propTypes["default"].string,
      format: _propTypes["default"].string,
      inputReadOnly: _propTypes["default"].bool,
      disabledHours: _propTypes["default"].func,
      disabledMinutes: _propTypes["default"].func,
      disabledSeconds: _propTypes["default"].func,
      hideDisabledOptions: _propTypes["default"].bool,
      onChange: _propTypes["default"].func,
      onAmPmChange: _propTypes["default"].func,
      onEsc: _propTypes["default"].func,
      showHour: _propTypes["default"].bool,
      showMinute: _propTypes["default"].bool,
      showSecond: _propTypes["default"].bool,
      use12Hours: _propTypes["default"].bool,
      hourStep: _propTypes["default"].number,
      minuteStep: _propTypes["default"].number,
      secondStep: _propTypes["default"].number,
      addon: _propTypes["default"].func,
      focusOnOpen: _propTypes["default"].bool,
      onKeyDown: _propTypes["default"].func,
      clearIcon: _propTypes["default"].node
    });

    _defineProperty(Panel, "defaultProps", {
      prefixCls: 'rc-time-picker-panel',
      onChange: noop,
      disabledHours: noop,
      disabledMinutes: noop,
      disabledSeconds: noop,
      defaultOpenValue: (0, _moment["default"])(),
      use12Hours: false,
      addon: noop,
      onKeyDown: noop,
      onAmPmChange: noop,
      inputReadOnly: false
    });

    (0, reactLifecyclesCompat__default.polyfill)(Panel);
    var _default = Panel;
    exports["default"] = _default;
    });

    var TimePickerPanel = unwrapExports(Panel_1);

    var placements_1$1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var autoAdjustOverflow = {
      adjustX: 1,
      adjustY: 1
    };
    var targetOffset = [0, 0];
    var placements = {
      bottomLeft: {
        points: ['tl', 'tl'],
        overflow: autoAdjustOverflow,
        offset: [0, -3],
        targetOffset: targetOffset
      },
      bottomRight: {
        points: ['tr', 'tr'],
        overflow: autoAdjustOverflow,
        offset: [0, -3],
        targetOffset: targetOffset
      },
      topRight: {
        points: ['br', 'br'],
        overflow: autoAdjustOverflow,
        offset: [0, 3],
        targetOffset: targetOffset
      },
      topLeft: {
        points: ['bl', 'bl'],
        overflow: autoAdjustOverflow,
        offset: [0, 3],
        targetOffset: targetOffset
      }
    };
    var _default = placements;
    exports["default"] = _default;
    });

    unwrapExports(placements_1$1);

    var TimePicker = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _react = _interopRequireWildcard(React__default);

    var _propTypes = _interopRequireDefault(propTypes);

    var _rcTrigger = _interopRequireDefault(Trigger);

    var _moment = _interopRequireDefault(moment__default);



    var _classnames = _interopRequireDefault(classNames);

    var _Panel = _interopRequireDefault(Panel_1);

    var _placements = _interopRequireDefault(placements_1$1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    function noop() {}

    function refFn(field, component) {
      this[field] = component;
    }

    var Picker =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Picker, _Component);

      function Picker(props) {
        var _this;

        _classCallCheck(this, Picker);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this, props));

        _defineProperty(_assertThisInitialized(_this), "onPanelChange", function (value) {
          _this.setValue(value);
        });

        _defineProperty(_assertThisInitialized(_this), "onAmPmChange", function (ampm) {
          var onAmPmChange = _this.props.onAmPmChange;
          onAmPmChange(ampm);
        });

        _defineProperty(_assertThisInitialized(_this), "onClear", function (event) {
          event.stopPropagation();

          _this.setValue(null);

          _this.setOpen(false);
        });

        _defineProperty(_assertThisInitialized(_this), "onVisibleChange", function (open) {
          _this.setOpen(open);
        });

        _defineProperty(_assertThisInitialized(_this), "onEsc", function () {
          _this.setOpen(false);

          _this.focus();
        });

        _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
          if (e.keyCode === 40) {
            _this.setOpen(true);
          }
        });

        _this.saveInputRef = refFn.bind(_assertThisInitialized(_this), 'picker');
        _this.savePanelRef = refFn.bind(_assertThisInitialized(_this), 'panelInstance');

        var defaultOpen = props.defaultOpen,
            defaultValue = props.defaultValue,
            _props$open = props.open,
            _open = _props$open === void 0 ? defaultOpen : _props$open,
            _props$value = props.value,
            _value = _props$value === void 0 ? defaultValue : _props$value;

        _this.state = {
          open: _open,
          value: _value
        };
        return _this;
      }

      _createClass(Picker, [{
        key: "setValue",
        value: function setValue(value) {
          var onChange = this.props.onChange;

          if (!('value' in this.props)) {
            this.setState({
              value: value
            });
          }

          onChange(value);
        }
      }, {
        key: "getFormat",
        value: function getFormat() {
          var _this$props = this.props,
              format = _this$props.format,
              showHour = _this$props.showHour,
              showMinute = _this$props.showMinute,
              showSecond = _this$props.showSecond,
              use12Hours = _this$props.use12Hours;

          if (format) {
            return format;
          }

          if (use12Hours) {
            var fmtString = [showHour ? 'h' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
              return !!item;
            }).join(':');
            return fmtString.concat(' a');
          }

          return [showHour ? 'HH' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
            return !!item;
          }).join(':');
        }
      }, {
        key: "getPanelElement",
        value: function getPanelElement() {
          var _this$props2 = this.props,
              prefixCls = _this$props2.prefixCls,
              placeholder = _this$props2.placeholder,
              disabledHours = _this$props2.disabledHours,
              disabledMinutes = _this$props2.disabledMinutes,
              disabledSeconds = _this$props2.disabledSeconds,
              hideDisabledOptions = _this$props2.hideDisabledOptions,
              inputReadOnly = _this$props2.inputReadOnly,
              showHour = _this$props2.showHour,
              showMinute = _this$props2.showMinute,
              showSecond = _this$props2.showSecond,
              defaultOpenValue = _this$props2.defaultOpenValue,
              clearText = _this$props2.clearText,
              addon = _this$props2.addon,
              use12Hours = _this$props2.use12Hours,
              focusOnOpen = _this$props2.focusOnOpen,
              onKeyDown = _this$props2.onKeyDown,
              hourStep = _this$props2.hourStep,
              minuteStep = _this$props2.minuteStep,
              secondStep = _this$props2.secondStep,
              clearIcon = _this$props2.clearIcon;
          var value = this.state.value;
          return _react["default"].createElement(_Panel["default"], {
            clearText: clearText,
            prefixCls: "".concat(prefixCls, "-panel"),
            ref: this.savePanelRef,
            value: value,
            inputReadOnly: inputReadOnly,
            onChange: this.onPanelChange,
            onAmPmChange: this.onAmPmChange,
            defaultOpenValue: defaultOpenValue,
            showHour: showHour,
            showMinute: showMinute,
            showSecond: showSecond,
            onEsc: this.onEsc,
            format: this.getFormat(),
            placeholder: placeholder,
            disabledHours: disabledHours,
            disabledMinutes: disabledMinutes,
            disabledSeconds: disabledSeconds,
            hideDisabledOptions: hideDisabledOptions,
            use12Hours: use12Hours,
            hourStep: hourStep,
            minuteStep: minuteStep,
            secondStep: secondStep,
            addon: addon,
            focusOnOpen: focusOnOpen,
            onKeyDown: onKeyDown,
            clearIcon: clearIcon
          });
        }
      }, {
        key: "getPopupClassName",
        value: function getPopupClassName() {
          var _this$props3 = this.props,
              showHour = _this$props3.showHour,
              showMinute = _this$props3.showMinute,
              showSecond = _this$props3.showSecond,
              use12Hours = _this$props3.use12Hours,
              prefixCls = _this$props3.prefixCls,
              popupClassName = _this$props3.popupClassName;
          var selectColumnCount = 0;

          if (showHour) {
            selectColumnCount += 1;
          }

          if (showMinute) {
            selectColumnCount += 1;
          }

          if (showSecond) {
            selectColumnCount += 1;
          }

          if (use12Hours) {
            selectColumnCount += 1;
          } // Keep it for old compatibility


          return (0, _classnames["default"])(popupClassName, _defineProperty({}, "".concat(prefixCls, "-panel-narrow"), (!showHour || !showMinute || !showSecond) && !use12Hours), "".concat(prefixCls, "-panel-column-").concat(selectColumnCount));
        }
      }, {
        key: "setOpen",
        value: function setOpen(open) {
          var _this$props4 = this.props,
              onOpen = _this$props4.onOpen,
              onClose = _this$props4.onClose;
          var currentOpen = this.state.open;

          if (currentOpen !== open) {
            if (!('open' in this.props)) {
              this.setState({
                open: open
              });
            }

            if (open) {
              onOpen({
                open: open
              });
            } else {
              onClose({
                open: open
              });
            }
          }
        }
      }, {
        key: "focus",
        value: function focus() {
          this.picker.focus();
        }
      }, {
        key: "blur",
        value: function blur() {
          this.picker.blur();
        }
      }, {
        key: "renderClearButton",
        value: function renderClearButton() {
          var _this2 = this;

          var value = this.state.value;
          var _this$props5 = this.props,
              prefixCls = _this$props5.prefixCls,
              allowEmpty = _this$props5.allowEmpty,
              clearIcon = _this$props5.clearIcon,
              clearText = _this$props5.clearText,
              disabled = _this$props5.disabled;

          if (!allowEmpty || !value || disabled) {
            return null;
          }

          if (_react["default"].isValidElement(clearIcon)) {
            var _ref = clearIcon.props || {},
                _onClick = _ref.onClick;

            return _react["default"].cloneElement(clearIcon, {
              onClick: function onClick() {
                if (_onClick) _onClick.apply(void 0, arguments);

                _this2.onClear.apply(_this2, arguments);
              }
            });
          }

          return _react["default"].createElement("a", {
            role: "button",
            className: "".concat(prefixCls, "-clear"),
            title: clearText,
            onClick: this.onClear,
            tabIndex: 0
          }, clearIcon || _react["default"].createElement("i", {
            className: "".concat(prefixCls, "-clear-icon")
          }));
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props6 = this.props,
              prefixCls = _this$props6.prefixCls,
              placeholder = _this$props6.placeholder,
              placement = _this$props6.placement,
              align = _this$props6.align,
              id = _this$props6.id,
              disabled = _this$props6.disabled,
              transitionName = _this$props6.transitionName,
              style = _this$props6.style,
              className = _this$props6.className,
              getPopupContainer = _this$props6.getPopupContainer,
              name = _this$props6.name,
              autoComplete = _this$props6.autoComplete,
              onFocus = _this$props6.onFocus,
              onBlur = _this$props6.onBlur,
              autoFocus = _this$props6.autoFocus,
              inputReadOnly = _this$props6.inputReadOnly,
              inputIcon = _this$props6.inputIcon,
              popupStyle = _this$props6.popupStyle;
          var _this$state = this.state,
              open = _this$state.open,
              value = _this$state.value;
          var popupClassName = this.getPopupClassName();
          return _react["default"].createElement(_rcTrigger["default"], {
            prefixCls: "".concat(prefixCls, "-panel"),
            popupClassName: popupClassName,
            popupStyle: popupStyle,
            popup: this.getPanelElement(),
            popupAlign: align,
            builtinPlacements: _placements["default"],
            popupPlacement: placement,
            action: disabled ? [] : ['click'],
            destroyPopupOnHide: true,
            getPopupContainer: getPopupContainer,
            popupTransitionName: transitionName,
            popupVisible: open,
            onPopupVisibleChange: this.onVisibleChange
          }, _react["default"].createElement("span", {
            className: (0, _classnames["default"])(prefixCls, className),
            style: style
          }, _react["default"].createElement("input", {
            className: "".concat(prefixCls, "-input"),
            ref: this.saveInputRef,
            type: "text",
            placeholder: placeholder,
            name: name,
            onKeyDown: this.onKeyDown,
            disabled: disabled,
            value: value && value.format(this.getFormat()) || '',
            autoComplete: autoComplete,
            onFocus: onFocus,
            onBlur: onBlur,
            autoFocus: autoFocus,
            onChange: noop,
            readOnly: !!inputReadOnly,
            id: id
          }), inputIcon || _react["default"].createElement("span", {
            className: "".concat(prefixCls, "-icon")
          }), this.renderClearButton()));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props, state) {
          var newState = {};

          if ('value' in props) {
            newState.value = props.value;
          }

          if (props.open !== undefined) {
            newState.open = props.open;
          }

          return Object.keys(newState).length > 0 ? _objectSpread({}, state, {}, newState) : null;
        }
      }]);

      return Picker;
    }(_react.Component);

    _defineProperty(Picker, "propTypes", {
      prefixCls: _propTypes["default"].string,
      clearText: _propTypes["default"].string,
      value: _propTypes["default"].object,
      defaultOpenValue: _propTypes["default"].object,
      inputReadOnly: _propTypes["default"].bool,
      disabled: _propTypes["default"].bool,
      allowEmpty: _propTypes["default"].bool,
      defaultValue: _propTypes["default"].object,
      open: _propTypes["default"].bool,
      defaultOpen: _propTypes["default"].bool,
      align: _propTypes["default"].object,
      placement: _propTypes["default"].any,
      transitionName: _propTypes["default"].string,
      getPopupContainer: _propTypes["default"].func,
      placeholder: _propTypes["default"].string,
      format: _propTypes["default"].string,
      showHour: _propTypes["default"].bool,
      showMinute: _propTypes["default"].bool,
      showSecond: _propTypes["default"].bool,
      style: _propTypes["default"].object,
      className: _propTypes["default"].string,
      popupClassName: _propTypes["default"].string,
      popupStyle: _propTypes["default"].object,
      disabledHours: _propTypes["default"].func,
      disabledMinutes: _propTypes["default"].func,
      disabledSeconds: _propTypes["default"].func,
      hideDisabledOptions: _propTypes["default"].bool,
      onChange: _propTypes["default"].func,
      onAmPmChange: _propTypes["default"].func,
      onOpen: _propTypes["default"].func,
      onClose: _propTypes["default"].func,
      onFocus: _propTypes["default"].func,
      onBlur: _propTypes["default"].func,
      addon: _propTypes["default"].func,
      name: _propTypes["default"].string,
      autoComplete: _propTypes["default"].string,
      use12Hours: _propTypes["default"].bool,
      hourStep: _propTypes["default"].number,
      minuteStep: _propTypes["default"].number,
      secondStep: _propTypes["default"].number,
      focusOnOpen: _propTypes["default"].bool,
      onKeyDown: _propTypes["default"].func,
      autoFocus: _propTypes["default"].bool,
      id: _propTypes["default"].string,
      inputIcon: _propTypes["default"].node,
      clearIcon: _propTypes["default"].node
    });

    _defineProperty(Picker, "defaultProps", {
      clearText: 'clear',
      prefixCls: 'rc-time-picker',
      defaultOpen: false,
      inputReadOnly: false,
      style: {},
      className: '',
      popupClassName: '',
      popupStyle: {},
      align: {},
      defaultOpenValue: (0, _moment["default"])(),
      allowEmpty: true,
      showHour: true,
      showMinute: true,
      showSecond: true,
      disabledHours: noop,
      disabledMinutes: noop,
      disabledSeconds: noop,
      hideDisabledOptions: false,
      placement: 'bottomLeft',
      onChange: noop,
      onAmPmChange: noop,
      onOpen: noop,
      onClose: noop,
      onFocus: noop,
      onBlur: noop,
      addon: noop,
      use12Hours: false,
      focusOnOpen: false,
      onKeyDown: noop
    });

    (0, reactLifecyclesCompat__default.polyfill)(Picker);
    var _default = Picker;
    exports["default"] = _default;
    });

    var RcTimePicker = unwrapExports(TimePicker);

    ___$insertStyle(".TimePicker-panel {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: #333745;\n  font-size: 15px;\n  font-variant: font-variant-base;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: \"tnum\";\n  position: absolute;\n  z-index: 1050;\n}\n.TimePicker-panel-inner {\n  position: relative;\n  left: -2px;\n  font-size: 15px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 4px;\n  outline: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.TimePicker-panel-input {\n  width: 100%;\n  max-width: 154px;\n  margin: 0;\n  padding: 0;\n  line-height: normal;\n  border: 0;\n  outline: 0;\n  cursor: auto;\n}\n.TimePicker-panel-input-wrap {\n  position: relative;\n  padding: 7px 2px 7px 12px;\n  border-bottom: 1px solid #e8e8e8;\n}\n.TimePicker-panel-input-invalid {\n  border-color: red;\n}\n.TimePicker-panel-narrow .TimePicker-panel-input-wrap {\n  max-width: 112px;\n}\n.TimePicker-panel-select {\n  position: relative;\n  float: left;\n  width: 56px;\n  max-height: 192px;\n  overflow: hidden;\n  font-size: 15px;\n  border-left: 1px solid #e8e8e8;\n}\n.TimePicker-panel-select:hover {\n  overflow-y: auto;\n}\n.TimePicker-panel-select:first-child {\n  margin-left: 0;\n  border-left: 0;\n}\n.TimePicker-panel-select:last-child {\n  border-right: 0;\n}\n.TimePicker-panel-select:only-child {\n  width: 100%;\n}\n.TimePicker-panel-select ul {\n  width: 56px;\n  margin: 0;\n  padding: 0 0 160px;\n  list-style: none;\n}\n.TimePicker-panel-select li {\n  width: 100%;\n  height: 32px;\n  margin: 0;\n  padding: 0 0 0 12px;\n  line-height: 32px;\n  text-align: left;\n  list-style: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  user-select: none;\n}\n.TimePicker-panel-select li:focus {\n  color: #f9285c;\n  font-weight: 600;\n  outline: none;\n}\n.TimePicker-panel-select li:hover {\n  background: #fca4ba;\n  color: #fff;\n}\n.TimePicker-panel-select li.TimePicker-panel-select-option-selected {\n  font-weight: 600;\n  background: whitesmoke;\n}\n.TimePicker-panel-select li.TimePicker-panel-select-option-selected:hover {\n  background: whitesmoke;\n}\n.TimePicker-panel-select li.TimePicker-panel-select-option-disabled {\n  color: #b3b3b3;\n}\n.TimePicker-panel-select li.TimePicker-panel-select-option-disabled:hover {\n  background: transparent;\n  cursor: not-allowed;\n}\n.TimePicker-panel-combobox {\n  zoom: 1;\n}\n.TimePicker-panel-combobox::before, .TimePicker-panel-combobox::after {\n  display: table;\n  content: \"\";\n}\n.TimePicker-panel-combobox::after {\n  clear: both;\n}\n.TimePicker-panel-addon {\n  padding: 8px;\n  border-top: 1px solid #e8e8e8;\n}\n\n.TimePicker {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: #333745;\n  font-size: 15px;\n  font-variant: font-variant-base;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: \"tnum\";\n  position: relative;\n  display: inline-block;\n  width: 128px;\n  outline: none;\n  cursor: text;\n  transition: opacity 0.3s;\n}\n.TimePicker-input {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 42px;\n  padding: 4px 11px;\n  font-size: 14px;\n  line-height: 1.5;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.TimePicker-input[disabled] {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n  opacity: 1;\n}\n.TimePicker-open {\n  opacity: 0;\n}\n.TimePicker-icon, .TimePicker-clear {\n  position: absolute;\n  top: 50%;\n  right: 4px;\n  z-index: 1;\n  margin-top: -12px;\n  color: #b3b3b3;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  user-select: none;\n}\n.TimePicker-icon .TimePicker-clock-icon, .TimePicker-clear .TimePicker-clock-icon {\n  display: block;\n  color: #b3b3b3;\n  line-height: 1;\n}\n.TimePicker-clear {\n  z-index: 2;\n  background: #fff;\n  opacity: 0;\n  pointer-events: none;\n}\n.TimePicker:hover .TimePicker-clear {\n  opacity: 1;\n  pointer-events: auto;\n}");

    function generateShowHourMinuteSecond(format) {
        return {
            showHour: format.indexOf('H') > -1 || format.indexOf('h') > -1 || format.indexOf('k') > -1,
            showMinute: format.indexOf('m') > -1,
            showSecond: format.indexOf('s') > -1,
        };
    }
    var TimePicker$1 = (function (_super) {
        __extends(TimePicker, _super);
        function TimePicker(props) {
            var _this = _super.call(this, props) || this;
            _this.handleOpenClose = function (_a) {
                var open = _a.open;
                var onOpenChange = _this.props.onOpenChange;
                if (onOpenChange) {
                    onOpenChange(open);
                }
            };
            _this.saveTimePicker = function (timePickerRef) {
                _this.timePickerRef = timePickerRef;
            };
            _this.handleChange = function (value) {
                if (!('value' in _this.props)) {
                    _this.setState({ value: value });
                }
                var _a = _this.props, onChange = _a.onChange, _b = _a.format, format = _b === void 0 ? 'HH:mm:ss' : _b;
                if (onChange) {
                    onChange(value, (value && value.format(format)) || '');
                }
            };
            _this.renderTimePicker = function () {
                var _a = _this.props, className = _a.className, addon = _a.addon, placeholder = _a.placeholder, props = __rest(_a, ["className", "addon", "placeholder"]);
                var pickerProps = omit(props, ['defaultValue', 'allowEmpty', 'allowClear']);
                var format = _this.getDefaultFormat();
                var pickerClassName = classNames(className);
                var pickerAddon = function (panel) {
                    return addon ? React.createElement("div", { className: "TimePicker-panel-addon" }, addon(panel)) : null;
                };
                return (React.createElement(RcTimePicker, __assign({}, generateShowHourMinuteSecond(format), pickerProps, { allowEmpty: _this.getAllowClear(), prefixCls: "TimePicker", ref: _this.saveTimePicker, format: format, className: pickerClassName, value: _this.state.value, placeholder: placeholder ? placeholder : 'Select Time', onChange: _this.handleChange, onOpen: _this.handleOpenClose, onClose: _this.handleOpenClose, addon: pickerAddon, inputIcon: _this.renderInputIcon('TimePicker'), clearIcon: _this.renderClearIcon('TimePicker') })));
            };
            var value = props.value || props.defaultValue;
            if (value && !interopDefault(moment).isMoment(value)) {
                throw new Error('The value/defaultValue of TimePicker must be a moment object after `antd@2.0`, ' +
                    'see: https://u.ant.design/time-picker-value');
            }
            _this.state = {
                value: value,
            };
            warning$1(!('allowEmpty' in props), 'TimePicker', '`allowEmpty` is deprecated. Please use `allowClear` instead.');
            return _this;
        }
        TimePicker.getDerivedStateFromProps = function (nextProps) {
            if ('value' in nextProps) {
                return { value: nextProps.value };
            }
            return null;
        };
        TimePicker.prototype.getDefaultFormat = function () {
            var _a = this.props, format = _a.format, use12Hours = _a.use12Hours;
            if (format) {
                return format;
            }
            if (use12Hours) {
                return 'h:mm:ss a';
            }
            return 'HH:mm:ss';
        };
        TimePicker.prototype.getAllowClear = function () {
            var _a = this.props, allowClear = _a.allowClear, allowEmpty = _a.allowEmpty;
            if ('allowClear' in this.props) {
                return allowClear;
            }
            return allowEmpty;
        };
        TimePicker.prototype.focus = function () {
            this.timePickerRef.focus();
        };
        TimePicker.prototype.blur = function () {
            this.timePickerRef.blur();
        };
        TimePicker.prototype.renderInputIcon = function (prefixCls) {
            var clockIcon = React.createElement(Icon, { icon: "access_time", className: prefixCls + "-clock-icon" });
            return React.createElement("span", { className: prefixCls + "-icon" }, clockIcon);
        };
        TimePicker.prototype.renderClearIcon = function (prefixCls) {
            var clearIconPrefixCls = prefixCls + "-clear";
            return React.createElement(Icon, { icon: "access_time", className: clearIconPrefixCls });
        };
        TimePicker.prototype.render = function () {
            return this.renderTimePicker();
        };
        TimePicker.defaultProps = {
            align: {
                offset: [0, -2],
            },
            disabledHours: undefined,
            disabledMinutes: undefined,
            disabledSeconds: undefined,
            hideDisabledOptions: false,
            placement: 'bottomLeft',
            transitionName: 'slide-up',
            focusOnOpen: true,
        };
        return TimePicker;
    }(React.Component));
    reactLifecyclesCompat.polyfill(TimePicker$1);

    var DEFAULT_FORMAT = {
        date: 'DD/MM/YYYY',
        dateTime: 'DD/MM/YYYY HH:mm:ss',
        week: 'gggg-wo',
        month: 'MM/YYYY',
    };
    function getColumns(_a) {
        var showHour = _a.showHour, showMinute = _a.showMinute, showSecond = _a.showSecond, use12Hours = _a.use12Hours;
        var column = 0;
        if (showHour) {
            column += 1;
        }
        if (showMinute) {
            column += 1;
        }
        if (showSecond) {
            column += 1;
        }
        if (use12Hours) {
            column += 1;
        }
        return column;
    }
    function checkValidate(value, propName) {
        var values = Array.isArray(value) ? value : [value];
        values.forEach(function (val) {
            if (!val)
                return;
            warning$1(!interopDefault(moment).isMoment(val) || val.isValid(), 'DatePicker', "`" + propName + "` provides invalidate moment time. If you want to set empty value, use `null` instead.");
        });
    }
    function WrapPicker(Picker, pickerType) {
        var PickerWrapper = (function (_super) {
            __extends(PickerWrapper, _super);
            function PickerWrapper() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {};
                _this.savePicker = function (node) {
                    _this.picker = node;
                };
                _this.getDefaultLocale = function () {
                    var result = __assign({}, _this.props.locale);
                    result.lang = __assign(__assign({}, result.lang), (_this.props.locale || {}).lang);
                    return result;
                };
                _this.handleOpenChange = function (open) {
                    var onOpenChange = _this.props.onOpenChange;
                    onOpenChange(open);
                };
                _this.handleFocus = function (e) {
                    var onFocus = _this.props.onFocus;
                    if (onFocus) {
                        onFocus(e);
                    }
                };
                _this.handleBlur = function (e) {
                    var onBlur = _this.props.onBlur;
                    if (onBlur) {
                        onBlur(e);
                    }
                };
                _this.handleMouseEnter = function (e) {
                    var onMouseEnter = _this.props.onMouseEnter;
                    if (onMouseEnter) {
                        onMouseEnter(e);
                    }
                };
                _this.handleMouseLeave = function (e) {
                    var onMouseLeave = _this.props.onMouseLeave;
                    if (onMouseLeave) {
                        onMouseLeave(e);
                    }
                };
                _this.renderPicker = function () {
                    var _a, _b;
                    var _c = _this.props, format = _c.format, showTime = _c.showTime;
                    var mergedPickerType = showTime ? pickerType + "Time" : pickerType;
                    var mergedFormat = format || DEFAULT_FORMAT[mergedPickerType];
                    var _d = _this.props, getCalendarContainer = _d.getCalendarContainer, size = _d.size, disabled = _d.disabled;
                    var getPopupContainer = getCalendarContainer;
                    var pickerClass = classNames("DatePicker-picker", (_a = {},
                        _a["DatePicker-picker-" + size] = !!size,
                        _a));
                    var pickerInputClass = classNames("DatePicker-picker-input", (_b = {},
                        _b["DatePicker-picker-input-lg"] = size === 'large',
                        _b["DatePicker-picker-input-sm"] = size === 'small',
                        _b["DatePicker-picker-input-disabled"] = disabled,
                        _b));
                    var timeFormat = (showTime && showTime.format) || 'HH:mm:ss';
                    var rcTimePickerProps = __assign(__assign({}, generateShowHourMinuteSecond(timeFormat)), { format: timeFormat, use12Hours: showTime && showTime.use12Hours });
                    var columns = getColumns(rcTimePickerProps);
                    var timePickerCls = "DatePicker-time-picker-column-" + columns;
                    var timePicker = showTime ? (React.createElement(TimePickerPanel, __assign({}, rcTimePickerProps, showTime, { prefixCls: "DatePicker-time-picker", className: timePickerCls, placeholder: "Select Time", transitionName: "slide-up" }))) : null;
                    return (React.createElement(Picker, __assign({}, _this.props, { getCalendarContainer: getPopupContainer, format: mergedFormat, ref: _this.savePicker, pickerClass: pickerClass, pickerInputClass: pickerInputClass, timePicker: timePicker, onOpenChange: _this.handleOpenChange, onFocus: _this.handleFocus, onBlur: _this.handleBlur, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave })));
                };
                return _this;
            }
            PickerWrapper.getDerivedStateFromProps = function (_a) {
                var value = _a.value, defaultValue = _a.defaultValue;
                checkValidate(defaultValue, 'defaultValue');
                checkValidate(value, 'value');
                return {};
            };
            PickerWrapper.prototype.componentDidMount = function () {
                var _a = this.props, autoFocus = _a.autoFocus, disabled = _a.disabled;
                if (autoFocus && !disabled) {
                    this.focus();
                }
            };
            PickerWrapper.prototype.focus = function () {
                this.picker.focus();
            };
            PickerWrapper.prototype.blur = function () {
                this.picker.blur();
            };
            PickerWrapper.prototype.render = function () {
                return this.renderPicker();
            };
            PickerWrapper.defaultProps = {
                transitionName: 'slide-up',
                popupStyle: {},
                onChange: function () { },
                onOk: function () { },
                onOpenChange: function () { },
                locale: {},
            };
            return PickerWrapper;
        }(React.Component));
        reactLifecyclesCompat.polyfill(PickerWrapper);
        return PickerWrapper;
    }

    var DateConstants = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports["default"] = {
      DATE_ROW_COUNT: 6,
      DATE_COL_COUNT: 7
    };
    module.exports = exports['default'];
    });

    unwrapExports(DateConstants);

    var DateTHead_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _DateConstants2 = _interopRequireDefault(DateConstants);



    var _moment2 = _interopRequireDefault(moment__default);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var DateTHead = function (_React$Component) {
      (0, _inherits3['default'])(DateTHead, _React$Component);

      function DateTHead() {
        (0, _classCallCheck3['default'])(this, DateTHead);
        return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
      }

      DateTHead.prototype.render = function render() {
        var props = this.props;
        var value = props.value;
        var localeData = value.localeData();
        var prefixCls = props.prefixCls;
        var veryShortWeekdays = [];
        var weekDays = [];
        var firstDayOfWeek = localeData.firstDayOfWeek();
        var showWeekNumberEl = void 0;
        var now = (0, _moment2['default'])();
        for (var dateColIndex = 0; dateColIndex < _DateConstants2['default'].DATE_COL_COUNT; dateColIndex++) {
          var index = (firstDayOfWeek + dateColIndex) % _DateConstants2['default'].DATE_COL_COUNT;
          now.day(index);
          veryShortWeekdays[dateColIndex] = localeData.weekdaysMin(now);
          weekDays[dateColIndex] = localeData.weekdaysShort(now);
        }

        if (props.showWeekNumber) {
          showWeekNumberEl = _react2['default'].createElement(
            'th',
            {
              role: 'columnheader',
              className: prefixCls + '-column-header ' + prefixCls + '-week-number-header'
            },
            _react2['default'].createElement(
              'span',
              { className: prefixCls + '-column-header-inner' },
              'x'
            )
          );
        }
        var weekDaysEls = weekDays.map(function (day, xindex) {
          return _react2['default'].createElement(
            'th',
            {
              key: xindex,
              role: 'columnheader',
              title: day,
              className: prefixCls + '-column-header'
            },
            _react2['default'].createElement(
              'span',
              { className: prefixCls + '-column-header-inner' },
              veryShortWeekdays[xindex]
            )
          );
        });
        return _react2['default'].createElement(
          'thead',
          null,
          _react2['default'].createElement(
            'tr',
            { role: 'row' },
            showWeekNumberEl,
            weekDaysEls
          )
        );
      };

      return DateTHead;
    }(_react2['default'].Component);

    exports['default'] = DateTHead;
    module.exports = exports['default'];
    });

    unwrapExports(DateTHead_1);

    var DateTBody_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _classnames2 = _interopRequireDefault(classNames);



    var _DateConstants2 = _interopRequireDefault(DateConstants);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function isSameDay(one, two) {
      return one && two && one.isSame(two, 'day');
    }

    function beforeCurrentMonthYear(current, today) {
      if (current.year() < today.year()) {
        return 1;
      }
      return current.year() === today.year() && current.month() < today.month();
    }

    function afterCurrentMonthYear(current, today) {
      if (current.year() > today.year()) {
        return 1;
      }
      return current.year() === today.year() && current.month() > today.month();
    }

    function getIdFromDate(date) {
      return 'rc-calendar-' + date.year() + '-' + date.month() + '-' + date.date();
    }

    var DateTBody = function (_React$Component) {
      (0, _inherits3['default'])(DateTBody, _React$Component);

      function DateTBody() {
        (0, _classCallCheck3['default'])(this, DateTBody);
        return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
      }

      DateTBody.prototype.render = function render() {
        var props = this.props;
        var contentRender = props.contentRender,
            prefixCls = props.prefixCls,
            selectedValue = props.selectedValue,
            value = props.value,
            showWeekNumber = props.showWeekNumber,
            dateRender = props.dateRender,
            disabledDate = props.disabledDate,
            hoverValue = props.hoverValue;

        var iIndex = void 0;
        var jIndex = void 0;
        var current = void 0;
        var dateTable = [];
        var today = (0, util.getTodayTime)(value);
        var cellClass = prefixCls + '-cell';
        var weekNumberCellClass = prefixCls + '-week-number-cell';
        var dateClass = prefixCls + '-date';
        var todayClass = prefixCls + '-today';
        var selectedClass = prefixCls + '-selected-day';
        var selectedDateClass = prefixCls + '-selected-date'; // do not move with mouse operation
        var selectedStartDateClass = prefixCls + '-selected-start-date';
        var selectedEndDateClass = prefixCls + '-selected-end-date';
        var inRangeClass = prefixCls + '-in-range-cell';
        var lastMonthDayClass = prefixCls + '-last-month-cell';
        var nextMonthDayClass = prefixCls + '-next-month-btn-day';
        var disabledClass = prefixCls + '-disabled-cell';
        var firstDisableClass = prefixCls + '-disabled-cell-first-of-row';
        var lastDisableClass = prefixCls + '-disabled-cell-last-of-row';
        var lastDayOfMonthClass = prefixCls + '-last-day-of-month';
        var month1 = value.clone();
        month1.date(1);
        var day = month1.day();
        var lastMonthDiffDay = (day + 7 - value.localeData().firstDayOfWeek()) % 7;
        // calculate last month
        var lastMonth1 = month1.clone();
        lastMonth1.add(0 - lastMonthDiffDay, 'days');
        var passed = 0;

        for (iIndex = 0; iIndex < _DateConstants2['default'].DATE_ROW_COUNT; iIndex++) {
          for (jIndex = 0; jIndex < _DateConstants2['default'].DATE_COL_COUNT; jIndex++) {
            current = lastMonth1;
            if (passed) {
              current = current.clone();
              current.add(passed, 'days');
            }
            dateTable.push(current);
            passed++;
          }
        }
        var tableHtml = [];
        passed = 0;

        for (iIndex = 0; iIndex < _DateConstants2['default'].DATE_ROW_COUNT; iIndex++) {
          var _cx;

          var isCurrentWeek = void 0;
          var weekNumberCell = void 0;
          var isActiveWeek = false;
          var dateCells = [];
          if (showWeekNumber) {
            weekNumberCell = _react2['default'].createElement(
              'td',
              {
                key: dateTable[passed].week(),
                role: 'gridcell',
                className: weekNumberCellClass
              },
              dateTable[passed].week()
            );
          }
          for (jIndex = 0; jIndex < _DateConstants2['default'].DATE_COL_COUNT; jIndex++) {
            var next = null;
            var last = null;
            current = dateTable[passed];
            if (jIndex < _DateConstants2['default'].DATE_COL_COUNT - 1) {
              next = dateTable[passed + 1];
            }
            if (jIndex > 0) {
              last = dateTable[passed - 1];
            }
            var cls = cellClass;
            var disabled = false;
            var selected = false;

            if (isSameDay(current, today)) {
              cls += ' ' + todayClass;
              isCurrentWeek = true;
            }

            var isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, value);
            var isAfterCurrentMonthYear = afterCurrentMonthYear(current, value);

            if (selectedValue && Array.isArray(selectedValue)) {
              var rangeValue = hoverValue.length ? hoverValue : selectedValue;
              if (!isBeforeCurrentMonthYear && !isAfterCurrentMonthYear) {
                var startValue = rangeValue[0];
                var endValue = rangeValue[1];
                if (startValue) {
                  if (isSameDay(current, startValue)) {
                    selected = true;
                    isActiveWeek = true;
                    cls += ' ' + selectedStartDateClass;
                  }
                }
                if (startValue || endValue) {
                  if (isSameDay(current, endValue)) {
                    selected = true;
                    isActiveWeek = true;
                    cls += ' ' + selectedEndDateClass;
                  } else if ((startValue === null || startValue === undefined) && current.isBefore(endValue, 'day')) {
                    cls += ' ' + inRangeClass;
                  } else if ((endValue === null || endValue === undefined) && current.isAfter(startValue, 'day')) {
                    cls += ' ' + inRangeClass;
                  } else if (current.isAfter(startValue, 'day') && current.isBefore(endValue, 'day')) {
                    cls += ' ' + inRangeClass;
                  }
                }
              }
            } else if (isSameDay(current, value)) {
              // keyboard change value, highlight works
              selected = true;
              isActiveWeek = true;
            }

            if (isSameDay(current, selectedValue)) {
              cls += ' ' + selectedDateClass;
            }

            if (isBeforeCurrentMonthYear) {
              cls += ' ' + lastMonthDayClass;
            }

            if (isAfterCurrentMonthYear) {
              cls += ' ' + nextMonthDayClass;
            }

            if (current.clone().endOf('month').date() === current.date()) {
              cls += ' ' + lastDayOfMonthClass;
            }

            if (disabledDate) {
              if (disabledDate(current, value)) {
                disabled = true;

                if (!last || !disabledDate(last, value)) {
                  cls += ' ' + firstDisableClass;
                }

                if (!next || !disabledDate(next, value)) {
                  cls += ' ' + lastDisableClass;
                }
              }
            }

            if (selected) {
              cls += ' ' + selectedClass;
            }

            if (disabled) {
              cls += ' ' + disabledClass;
            }

            var dateHtml = void 0;
            if (dateRender) {
              dateHtml = dateRender(current, value);
            } else {
              var content = contentRender ? contentRender(current, value) : current.date();
              dateHtml = _react2['default'].createElement(
                'div',
                {
                  key: getIdFromDate(current),
                  className: dateClass,
                  'aria-selected': selected,
                  'aria-disabled': disabled
                },
                content
              );
            }

            dateCells.push(_react2['default'].createElement(
              'td',
              {
                key: passed,
                onClick: disabled ? undefined : props.onSelect.bind(null, current),
                onMouseEnter: disabled ? undefined : props.onDayHover && props.onDayHover.bind(null, current) || undefined,
                role: 'gridcell',
                title: (0, util.getTitleString)(current),
                className: cls
              },
              dateHtml
            ));

            passed++;
          }

          tableHtml.push(_react2['default'].createElement(
            'tr',
            {
              key: iIndex,
              role: 'row',
              className: (0, _classnames2['default'])((_cx = {}, _cx[prefixCls + '-current-week'] = isCurrentWeek, _cx[prefixCls + '-active-week'] = isActiveWeek, _cx))
            },
            weekNumberCell,
            dateCells
          ));
        }
        return _react2['default'].createElement(
          'tbody',
          { className: prefixCls + '-tbody' },
          tableHtml
        );
      };

      return DateTBody;
    }(_react2['default'].Component);

    DateTBody.propTypes = {
      contentRender: _propTypes2['default'].func,
      dateRender: _propTypes2['default'].func,
      disabledDate: _propTypes2['default'].func,
      prefixCls: _propTypes2['default'].string,
      selectedValue: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
      value: _propTypes2['default'].object,
      hoverValue: _propTypes2['default'].any,
      showWeekNumber: _propTypes2['default'].bool
    };
    DateTBody.defaultProps = {
      hoverValue: []
    };
    exports['default'] = DateTBody;
    module.exports = exports['default'];
    });

    unwrapExports(DateTBody_1);

    var DateTable_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _DateTHead2 = _interopRequireDefault(DateTHead_1);



    var _DateTBody2 = _interopRequireDefault(DateTBody_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var DateTable = function (_React$Component) {
      (0, _inherits3['default'])(DateTable, _React$Component);

      function DateTable() {
        (0, _classCallCheck3['default'])(this, DateTable);
        return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
      }

      DateTable.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls;
        return _react2['default'].createElement(
          'table',
          { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
          _react2['default'].createElement(_DateTHead2['default'], props),
          _react2['default'].createElement(_DateTBody2['default'], props)
        );
      };

      return DateTable;
    }(_react2['default'].Component);

    exports['default'] = DateTable;
    module.exports = exports['default'];
    });

    unwrapExports(DateTable_1);

    var DateInput_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _reactDom2 = _interopRequireDefault(ReactDOM__default);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _KeyCode2 = _interopRequireDefault(KeyCode_1);





    var _moment2 = _interopRequireDefault(moment__default);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var cachedSelectionStart = void 0;
    var cachedSelectionEnd = void 0;
    var dateInputInstance = void 0;

    var DateInput = function (_React$Component) {
      (0, _inherits3['default'])(DateInput, _React$Component);

      function DateInput(props) {
        (0, _classCallCheck3['default'])(this, DateInput);

        var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var selectedValue = props.selectedValue;

        _this.state = {
          str: (0, util.formatDate)(selectedValue, _this.props.format),
          invalid: false,
          hasFocus: false
        };
        return _this;
      }

      DateInput.prototype.componentDidUpdate = function componentDidUpdate() {
        if (dateInputInstance && this.state.hasFocus && !this.state.invalid && !(cachedSelectionStart === 0 && cachedSelectionEnd === 0)) {
          dateInputInstance.setSelectionRange(cachedSelectionStart, cachedSelectionEnd);
        }
      };

      DateInput.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
        var newState = {};

        if (dateInputInstance) {
          cachedSelectionStart = dateInputInstance.selectionStart;
          cachedSelectionEnd = dateInputInstance.selectionEnd;
        }
        // when popup show, click body will call this, bug!
        var selectedValue = nextProps.selectedValue;
        if (!state.hasFocus) {
          newState = {
            str: (0, util.formatDate)(selectedValue, nextProps.format),
            invalid: false
          };
        }

        return newState;
      };

      DateInput.getInstance = function getInstance() {
        return dateInputInstance;
      };

      DateInput.prototype.render = function render() {
        var props = this.props;
        var _state = this.state,
            invalid = _state.invalid,
            str = _state.str;
        var locale = props.locale,
            prefixCls = props.prefixCls,
            placeholder = props.placeholder,
            clearIcon = props.clearIcon,
            inputMode = props.inputMode;

        var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
        return _react2['default'].createElement(
          'div',
          { className: prefixCls + '-input-wrap' },
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-date-input-wrap' },
            _react2['default'].createElement('input', {
              ref: this.saveDateInput,
              className: prefixCls + '-input ' + invalidClass,
              value: str,
              disabled: props.disabled,
              placeholder: placeholder,
              onChange: this.onInputChange,
              onKeyDown: this.onKeyDown,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              inputMode: inputMode
            })
          ),
          props.showClear ? _react2['default'].createElement(
            'a',
            {
              role: 'button',
              title: locale.clear,
              onClick: this.onClear
            },
            clearIcon || _react2['default'].createElement('span', { className: prefixCls + '-clear-btn' })
          ) : null
        );
      };

      return DateInput;
    }(_react2['default'].Component);

    DateInput.propTypes = {
      prefixCls: _propTypes2['default'].string,
      timePicker: _propTypes2['default'].object,
      value: _propTypes2['default'].object,
      disabledTime: _propTypes2['default'].any,
      format: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].arrayOf(_propTypes2['default'].string)]),
      locale: _propTypes2['default'].object,
      disabledDate: _propTypes2['default'].func,
      onChange: _propTypes2['default'].func,
      onClear: _propTypes2['default'].func,
      placeholder: _propTypes2['default'].string,
      onSelect: _propTypes2['default'].func,
      selectedValue: _propTypes2['default'].object,
      clearIcon: _propTypes2['default'].node,
      inputMode: _propTypes2['default'].string
    };

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.onClear = function () {
        _this2.setState({
          str: ''
        });
        _this2.props.onClear(null);
      };

      this.onInputChange = function (event) {
        var str = event.target.value;
        var _props = _this2.props,
            disabledDate = _props.disabledDate,
            format = _props.format,
            onChange = _props.onChange,
            selectedValue = _props.selectedValue;

        // 没有内容，合法并直接退出

        if (!str) {
          onChange(null);
          _this2.setState({
            invalid: false,
            str: str
          });
          return;
        }

        // 不合法直接退出
        var parsed = (0, _moment2['default'])(str, format, true);
        if (!parsed.isValid()) {
          _this2.setState({
            invalid: true,
            str: str
          });
          return;
        }

        var value = _this2.props.value.clone();
        value.year(parsed.year()).month(parsed.month()).date(parsed.date()).hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

        if (!value || disabledDate && disabledDate(value)) {
          _this2.setState({
            invalid: true,
            str: str
          });
          return;
        }

        if (selectedValue !== value || selectedValue && value && !selectedValue.isSame(value)) {
          _this2.setState({
            invalid: false,
            str: str
          });
          onChange(value);
        }
      };

      this.onFocus = function () {
        _this2.setState({ hasFocus: true });
      };

      this.onBlur = function () {
        _this2.setState(function (prevState, prevProps) {
          return {
            hasFocus: false,
            str: (0, util.formatDate)(prevProps.value, prevProps.format)
          };
        });
      };

      this.onKeyDown = function (event) {
        var keyCode = event.keyCode;
        var _props2 = _this2.props,
            onSelect = _props2.onSelect,
            value = _props2.value,
            disabledDate = _props2.disabledDate;

        if (keyCode === _KeyCode2['default'].ENTER && onSelect) {
          var validateDate = !disabledDate || !disabledDate(value);
          if (validateDate) {
            onSelect(value.clone());
          }
          event.preventDefault();
        }
      };

      this.getRootDOMNode = function () {
        return _reactDom2['default'].findDOMNode(_this2);
      };

      this.focus = function () {
        if (dateInputInstance) {
          dateInputInstance.focus();
        }
      };

      this.saveDateInput = function (dateInput) {
        dateInputInstance = dateInput;
      };
    };

    (0, reactLifecyclesCompat__default.polyfill)(DateInput);

    exports['default'] = DateInput;
    module.exports = exports['default'];
    });

    unwrapExports(DateInput_1);

    var CalendarPart_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _extends3 = _interopRequireDefault(_extends);



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _CalendarHeader2 = _interopRequireDefault(CalendarHeader_1);



    var _DateTable2 = _interopRequireDefault(DateTable_1);



    var _DateInput2 = _interopRequireDefault(DateInput_1);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var CalendarPart = function (_React$Component) {
      (0, _inherits3['default'])(CalendarPart, _React$Component);

      function CalendarPart() {
        (0, _classCallCheck3['default'])(this, CalendarPart);
        return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
      }

      CalendarPart.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            value = props.value,
            hoverValue = props.hoverValue,
            selectedValue = props.selectedValue,
            mode = props.mode,
            direction = props.direction,
            locale = props.locale,
            format = props.format,
            placeholder = props.placeholder,
            disabledDate = props.disabledDate,
            timePicker = props.timePicker,
            disabledTime = props.disabledTime,
            timePickerDisabledTime = props.timePickerDisabledTime,
            showTimePicker = props.showTimePicker,
            onInputChange = props.onInputChange,
            onInputSelect = props.onInputSelect,
            enablePrev = props.enablePrev,
            enableNext = props.enableNext,
            clearIcon = props.clearIcon,
            showClear = props.showClear,
            inputMode = props.inputMode;

        var shouldShowTimePicker = showTimePicker && timePicker;
        var disabledTimeConfig = shouldShowTimePicker && disabledTime ? (0, util.getTimeConfig)(selectedValue, disabledTime) : null;
        var rangeClassName = prefixCls + '-range';
        var newProps = {
          locale: locale,
          value: value,
          prefixCls: prefixCls,
          showTimePicker: showTimePicker
        };
        var index = direction === 'left' ? 0 : 1;
        var timePickerEle = shouldShowTimePicker && _react2['default'].cloneElement(timePicker, (0, _extends3['default'])({
          showHour: true,
          showMinute: true,
          showSecond: true
        }, timePicker.props, disabledTimeConfig, timePickerDisabledTime, {
          onChange: onInputChange,
          defaultOpenValue: value,
          value: selectedValue[index]
        }));

        var dateInputElement = props.showDateInput && _react2['default'].createElement(_DateInput2['default'], {
          format: format,
          locale: locale,
          prefixCls: prefixCls,
          timePicker: timePicker,
          disabledDate: disabledDate,
          placeholder: placeholder,
          disabledTime: disabledTime,
          value: value,
          showClear: showClear || false,
          selectedValue: selectedValue[index],
          onChange: onInputChange,
          onSelect: onInputSelect,
          clearIcon: clearIcon,
          inputMode: inputMode
        });

        return _react2['default'].createElement(
          'div',
          {
            className: rangeClassName + '-part ' + rangeClassName + '-' + direction
          },
          dateInputElement,
          _react2['default'].createElement(
            'div',
            { style: { outline: 'none' } },
            _react2['default'].createElement(_CalendarHeader2['default'], (0, _extends3['default'])({}, newProps, {
              mode: mode,
              enableNext: enableNext,
              enablePrev: enablePrev,
              onValueChange: props.onValueChange,
              onPanelChange: props.onPanelChange,
              disabledMonth: props.disabledMonth
            })),
            showTimePicker ? _react2['default'].createElement(
              'div',
              { className: prefixCls + '-time-picker' },
              _react2['default'].createElement(
                'div',
                { className: prefixCls + '-time-picker-panel' },
                timePickerEle
              )
            ) : null,
            _react2['default'].createElement(
              'div',
              { className: prefixCls + '-body' },
              _react2['default'].createElement(_DateTable2['default'], (0, _extends3['default'])({}, newProps, {
                hoverValue: hoverValue,
                selectedValue: selectedValue,
                dateRender: props.dateRender,
                onSelect: props.onSelect,
                onDayHover: props.onDayHover,
                disabledDate: disabledDate,
                showWeekNumber: props.showWeekNumber
              }))
            )
          )
        );
      };

      return CalendarPart;
    }(_react2['default'].Component);

    CalendarPart.propTypes = {
      prefixCls: _propTypes2['default'].string,
      value: _propTypes2['default'].any,
      hoverValue: _propTypes2['default'].any,
      selectedValue: _propTypes2['default'].any,
      direction: _propTypes2['default'].any,
      locale: _propTypes2['default'].any,
      showDateInput: _propTypes2['default'].bool,
      showTimePicker: _propTypes2['default'].bool,
      format: _propTypes2['default'].any,
      placeholder: _propTypes2['default'].any,
      disabledDate: _propTypes2['default'].any,
      timePicker: _propTypes2['default'].any,
      disabledTime: _propTypes2['default'].any,
      onInputChange: _propTypes2['default'].func,
      onInputSelect: _propTypes2['default'].func,
      timePickerDisabledTime: _propTypes2['default'].object,
      enableNext: _propTypes2['default'].any,
      enablePrev: _propTypes2['default'].any,
      clearIcon: _propTypes2['default'].node,
      dateRender: _propTypes2['default'].func,
      inputMode: _propTypes2['default'].string
    };
    exports['default'] = CalendarPart;
    module.exports = exports['default'];
    });

    unwrapExports(CalendarPart_1);

    var toTime = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.goStartMonth = goStartMonth;
    exports.goEndMonth = goEndMonth;
    exports.goTime = goTime;
    exports.includesTime = includesTime;
    function goStartMonth(time) {
      return time.clone().startOf('month');
    }

    function goEndMonth(time) {
      return time.clone().endOf('month');
    }

    function goTime(time, direction, unit) {
      return time.clone().add(direction, unit);
    }

    function includesTime() {
      var timeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var time = arguments[1];
      var unit = arguments[2];

      return timeList.some(function (t) {
        return t.isSame(time, unit);
      });
    }
    });

    unwrapExports(toTime);
    var toTime_1 = toTime.goStartMonth;
    var toTime_2 = toTime.goEndMonth;
    var toTime_3 = toTime.goTime;
    var toTime_4 = toTime.includesTime;

    var RangeCalendar_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _extends3 = _interopRequireDefault(_extends);



    var _classCallCheck3 = _interopRequireDefault(classCallCheck);



    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



    var _inherits3 = _interopRequireDefault(inherits);



    var _react2 = _interopRequireDefault(React__default);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _moment2 = _interopRequireDefault(moment__default);



    var _classnames3 = _interopRequireDefault(classNames);





    var _KeyCode2 = _interopRequireDefault(KeyCode_1);



    var _CalendarPart2 = _interopRequireDefault(CalendarPart_1);



    var _TodayButton2 = _interopRequireDefault(TodayButton_1);



    var _OkButton2 = _interopRequireDefault(OkButton_1);



    var _TimePickerButton2 = _interopRequireDefault(TimePickerButton_1);







    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function noop() {}

    function isEmptyArray(arr) {
      return Array.isArray(arr) && (arr.length === 0 || arr.every(function (i) {
        return !i;
      }));
    }

    function isArraysEqual(a, b) {
      if (a === b) return true;
      if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
        return false;
      }
      if (a.length !== b.length) return false;

      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }

    function getValueFromSelectedValue(selectedValue) {
      var start = selectedValue[0],
          end = selectedValue[1];

      if (end && (start === undefined || start === null)) {
        start = end.clone().subtract(1, 'month');
      }

      if (start && (end === undefined || end === null)) {
        end = start.clone().add(1, 'month');
      }
      return [start, end];
    }

    function normalizeAnchor(props, init) {
      var selectedValue = props.selectedValue || init && props.defaultSelectedValue;
      var value = props.value || init && props.defaultValue;
      var normalizedValue = value ? getValueFromSelectedValue(value) : getValueFromSelectedValue(selectedValue);
      return !isEmptyArray(normalizedValue) ? normalizedValue : init && [(0, _moment2['default'])(), (0, _moment2['default'])().add(1, 'months')];
    }

    function generateOptions(length, extraOptionGen) {
      var arr = extraOptionGen ? extraOptionGen().concat() : [];
      for (var value = 0; value < length; value++) {
        if (arr.indexOf(value) === -1) {
          arr.push(value);
        }
      }
      return arr;
    }

    function onInputSelect(direction, value, cause) {
      if (!value) {
        return;
      }
      var originalValue = this.state.selectedValue;
      var selectedValue = originalValue.concat();
      var index = direction === 'left' ? 0 : 1;
      selectedValue[index] = value;
      if (selectedValue[0] && this.compare(selectedValue[0], selectedValue[1]) > 0) {
        selectedValue[1 - index] = this.state.showTimePicker ? selectedValue[index] : undefined;
      }
      this.props.onInputSelect(selectedValue);
      this.fireSelectValueChange(selectedValue, null, cause || { source: 'dateInput' });
    }

    var RangeCalendar = function (_React$Component) {
      (0, _inherits3['default'])(RangeCalendar, _React$Component);

      function RangeCalendar(props) {
        (0, _classCallCheck3['default'])(this, RangeCalendar);

        var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var selectedValue = props.selectedValue || props.defaultSelectedValue;
        var value = normalizeAnchor(props, 1);
        _this.state = {
          selectedValue: selectedValue,
          prevSelectedValue: selectedValue,
          firstSelectedValue: null,
          hoverValue: props.hoverValue || [],
          value: value,
          showTimePicker: false,
          mode: props.mode || ['date', 'date'],
          panelTriggerSource: '' // Trigger by which picker panel: 'start' & 'end'
        };
        return _this;
      }

      RangeCalendar.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
        var newState = {};
        if ('value' in nextProps) {
          newState.value = normalizeAnchor(nextProps, 0);
        }
        if ('hoverValue' in nextProps && !isArraysEqual(state.hoverValue, nextProps.hoverValue)) {
          newState.hoverValue = nextProps.hoverValue;
        }
        if ('selectedValue' in nextProps) {
          newState.selectedValue = nextProps.selectedValue;
          newState.prevSelectedValue = nextProps.selectedValue;
        }
        if ('mode' in nextProps && !isArraysEqual(state.mode, nextProps.mode)) {
          newState.mode = nextProps.mode;
        }
        return newState;
      };

      // get disabled hours for second picker


      RangeCalendar.prototype.render = function render() {
        var _className, _classnames;

        var props = this.props,
            state = this.state;
        var prefixCls = props.prefixCls,
            dateInputPlaceholder = props.dateInputPlaceholder,
            seperator = props.seperator,
            timePicker = props.timePicker,
            showOk = props.showOk,
            locale = props.locale,
            showClear = props.showClear,
            showToday = props.showToday,
            type = props.type,
            clearIcon = props.clearIcon;
        var hoverValue = state.hoverValue,
            selectedValue = state.selectedValue,
            mode = state.mode,
            showTimePicker = state.showTimePicker;

        var className = (_className = {}, _className[props.className] = !!props.className, _className[prefixCls] = 1, _className[prefixCls + '-hidden'] = !props.visible, _className[prefixCls + '-range'] = 1, _className[prefixCls + '-show-time-picker'] = showTimePicker, _className[prefixCls + '-week-number'] = props.showWeekNumber, _className);
        var classes = (0, _classnames3['default'])(className);
        var newProps = {
          selectedValue: state.selectedValue,
          onSelect: this.onSelect,
          onDayHover: type === 'start' && selectedValue[1] || type === 'end' && selectedValue[0] || !!hoverValue.length ? this.onDayHover : undefined
        };

        var placeholder1 = void 0;
        var placeholder2 = void 0;

        if (dateInputPlaceholder) {
          if (Array.isArray(dateInputPlaceholder)) {
            placeholder1 = dateInputPlaceholder[0];
            placeholder2 = dateInputPlaceholder[1];
          } else {
            placeholder1 = placeholder2 = dateInputPlaceholder;
          }
        }
        var showOkButton = showOk === true || showOk !== false && !!timePicker;
        var cls = (0, _classnames3['default'])((_classnames = {}, _classnames[prefixCls + '-footer'] = true, _classnames[prefixCls + '-range-bottom'] = true, _classnames[prefixCls + '-footer-show-ok'] = showOkButton, _classnames));

        var startValue = this.getStartValue();
        var endValue = this.getEndValue();
        var todayTime = (0, util.getTodayTime)(startValue);
        var thisMonth = todayTime.month();
        var thisYear = todayTime.year();
        var isTodayInView = startValue.year() === thisYear && startValue.month() === thisMonth || endValue.year() === thisYear && endValue.month() === thisMonth;
        var nextMonthOfStart = startValue.clone().add(1, 'months');
        var isClosestMonths = nextMonthOfStart.year() === endValue.year() && nextMonthOfStart.month() === endValue.month();

        var extraFooter = props.renderFooter();

        return _react2['default'].createElement(
          'div',
          {
            ref: this.saveRoot,
            className: classes,
            style: props.style,
            tabIndex: '0',
            onKeyDown: this.onKeyDown
          },
          props.renderSidebar(),
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-panel' },
            showClear && selectedValue[0] && selectedValue[1] ? _react2['default'].createElement(
              'a',
              {
                role: 'button',
                title: locale.clear,
                onClick: this.clear
              },
              clearIcon || _react2['default'].createElement('span', { className: prefixCls + '-clear-btn' })
            ) : null,
            _react2['default'].createElement(
              'div',
              {
                className: prefixCls + '-date-panel',
                onMouseLeave: type !== 'both' ? this.onDatePanelLeave : undefined,
                onMouseEnter: type !== 'both' ? this.onDatePanelEnter : undefined
              },
              _react2['default'].createElement(_CalendarPart2['default'], (0, _extends3['default'])({}, props, newProps, {
                hoverValue: hoverValue,
                direction: 'left',
                disabledTime: this.disabledStartTime,
                disabledMonth: this.disabledStartMonth,
                format: this.getFormat(),
                value: startValue,
                mode: mode[0],
                placeholder: placeholder1,
                onInputChange: this.onStartInputChange,
                onInputSelect: this.onStartInputSelect,
                onValueChange: this.onStartValueChange,
                onPanelChange: this.onStartPanelChange,
                showDateInput: this.props.showDateInput,
                timePicker: timePicker,
                showTimePicker: showTimePicker || mode[0] === 'time',
                enablePrev: true,
                enableNext: !isClosestMonths || this.isMonthYearPanelShow(mode[1]),
                clearIcon: clearIcon
              })),
              _react2['default'].createElement(
                'span',
                { className: prefixCls + '-range-middle' },
                seperator
              ),
              _react2['default'].createElement(_CalendarPart2['default'], (0, _extends3['default'])({}, props, newProps, {
                hoverValue: hoverValue,
                direction: 'right',
                format: this.getFormat(),
                timePickerDisabledTime: this.getEndDisableTime(),
                placeholder: placeholder2,
                value: endValue,
                mode: mode[1],
                onInputChange: this.onEndInputChange,
                onInputSelect: this.onEndInputSelect,
                onValueChange: this.onEndValueChange,
                onPanelChange: this.onEndPanelChange,
                showDateInput: this.props.showDateInput,
                timePicker: timePicker,
                showTimePicker: showTimePicker || mode[1] === 'time',
                disabledTime: this.disabledEndTime,
                disabledMonth: this.disabledEndMonth,
                enablePrev: !isClosestMonths || this.isMonthYearPanelShow(mode[0]),
                enableNext: true,
                clearIcon: clearIcon
              }))
            ),
            _react2['default'].createElement(
              'div',
              { className: cls },
              showToday || props.timePicker || showOkButton || extraFooter ? _react2['default'].createElement(
                'div',
                { className: prefixCls + '-footer-btn' },
                extraFooter,
                showToday ? _react2['default'].createElement(_TodayButton2['default'], (0, _extends3['default'])({}, props, {
                  disabled: isTodayInView,
                  value: state.value[0],
                  onToday: this.onToday,
                  text: locale.backToToday
                })) : null,
                props.timePicker ? _react2['default'].createElement(_TimePickerButton2['default'], (0, _extends3['default'])({}, props, {
                  showTimePicker: showTimePicker || mode[0] === 'time' && mode[1] === 'time',
                  onOpenTimePicker: this.onOpenTimePicker,
                  onCloseTimePicker: this.onCloseTimePicker,
                  timePickerDisabled: !this.hasSelectedValue() || hoverValue.length
                })) : null,
                showOkButton ? _react2['default'].createElement(_OkButton2['default'], (0, _extends3['default'])({}, props, {
                  onOk: this.onOk,
                  okDisabled: !this.isAllowedDateAndTime(selectedValue) || !this.hasSelectedValue() || hoverValue.length
                })) : null
              ) : null
            )
          )
        );
      };

      return RangeCalendar;
    }(_react2['default'].Component);

    RangeCalendar.propTypes = (0, _extends3['default'])({}, CommonMixin.propType, {
      prefixCls: _propTypes2['default'].string,
      dateInputPlaceholder: _propTypes2['default'].any,
      seperator: _propTypes2['default'].string,
      defaultValue: _propTypes2['default'].any,
      value: _propTypes2['default'].any,
      hoverValue: _propTypes2['default'].any,
      mode: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOf(['time', 'date', 'month', 'year', 'decade'])),
      showDateInput: _propTypes2['default'].bool,
      timePicker: _propTypes2['default'].any,
      showOk: _propTypes2['default'].bool,
      showToday: _propTypes2['default'].bool,
      defaultSelectedValue: _propTypes2['default'].array,
      selectedValue: _propTypes2['default'].array,
      onOk: _propTypes2['default'].func,
      showClear: _propTypes2['default'].bool,
      locale: _propTypes2['default'].object,
      onChange: _propTypes2['default'].func,
      onSelect: _propTypes2['default'].func,
      onValueChange: _propTypes2['default'].func,
      onHoverChange: _propTypes2['default'].func,
      onPanelChange: _propTypes2['default'].func,
      format: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].arrayOf(_propTypes2['default'].string)]),
      onClear: _propTypes2['default'].func,
      type: _propTypes2['default'].any,
      disabledDate: _propTypes2['default'].func,
      disabledTime: _propTypes2['default'].func,
      clearIcon: _propTypes2['default'].node,
      onKeyDown: _propTypes2['default'].func
    });
    RangeCalendar.defaultProps = (0, _extends3['default'])({}, CommonMixin.defaultProp, {
      type: 'both',
      seperator: '~',
      defaultSelectedValue: [],
      onValueChange: noop,
      onHoverChange: noop,
      onPanelChange: noop,
      disabledTime: noop,
      onInputSelect: noop,
      showToday: true,
      showDateInput: true
    });

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.onDatePanelEnter = function () {
        if (_this2.hasSelectedValue()) {
          _this2.fireHoverValueChange(_this2.state.selectedValue.concat());
        }
      };

      this.onDatePanelLeave = function () {
        if (_this2.hasSelectedValue()) {
          _this2.fireHoverValueChange([]);
        }
      };

      this.onSelect = function (value) {
        var type = _this2.props.type;
        var _state = _this2.state,
            selectedValue = _state.selectedValue,
            prevSelectedValue = _state.prevSelectedValue,
            firstSelectedValue = _state.firstSelectedValue;

        var nextSelectedValue = void 0;
        if (type === 'both') {
          if (!firstSelectedValue) {
            (0, util.syncTime)(prevSelectedValue[0], value);
            nextSelectedValue = [value];
          } else if (_this2.compare(firstSelectedValue, value) < 0) {
            (0, util.syncTime)(prevSelectedValue[1], value);
            nextSelectedValue = [firstSelectedValue, value];
          } else {
            (0, util.syncTime)(prevSelectedValue[0], value);
            (0, util.syncTime)(prevSelectedValue[1], firstSelectedValue);
            nextSelectedValue = [value, firstSelectedValue];
          }
        } else if (type === 'start') {
          (0, util.syncTime)(prevSelectedValue[0], value);
          var endValue = selectedValue[1];
          nextSelectedValue = endValue && _this2.compare(endValue, value) > 0 ? [value, endValue] : [value];
        } else {
          // type === 'end'
          var startValue = selectedValue[0];
          if (startValue && _this2.compare(startValue, value) <= 0) {
            (0, util.syncTime)(prevSelectedValue[1], value);
            nextSelectedValue = [startValue, value];
          } else {
            (0, util.syncTime)(prevSelectedValue[0], value);
            nextSelectedValue = [value];
          }
        }

        _this2.fireSelectValueChange(nextSelectedValue);
      };

      this.onKeyDown = function (event) {
        if (event.target.nodeName.toLowerCase() === 'input') {
          return;
        }

        var keyCode = event.keyCode;

        var ctrlKey = event.ctrlKey || event.metaKey;

        var _state2 = _this2.state,
            selectedValue = _state2.selectedValue,
            hoverValue = _state2.hoverValue,
            firstSelectedValue = _state2.firstSelectedValue,
            value = _state2.value;
        var _props = _this2.props,
            onKeyDown = _props.onKeyDown,
            disabledDate = _props.disabledDate;

        // Update last time of the picker

        var updateHoverPoint = function updateHoverPoint(func) {
          // Change hover to make focus in UI
          var currentHoverTime = void 0;
          var nextHoverTime = void 0;
          var nextHoverValue = void 0;

          if (!firstSelectedValue) {
            currentHoverTime = hoverValue[0] || selectedValue[0] || value[0] || (0, _moment2['default'])();
            nextHoverTime = func(currentHoverTime);
            nextHoverValue = [nextHoverTime];
            _this2.fireHoverValueChange(nextHoverValue);
          } else {
            if (hoverValue.length === 1) {
              currentHoverTime = hoverValue[0].clone();
              nextHoverTime = func(currentHoverTime);
              nextHoverValue = _this2.onDayHover(nextHoverTime);
            } else {
              currentHoverTime = hoverValue[0].isSame(firstSelectedValue, 'day') ? hoverValue[1] : hoverValue[0];
              nextHoverTime = func(currentHoverTime);
              nextHoverValue = _this2.onDayHover(nextHoverTime);
            }
          }

          // Find origin hover time on value index
          if (nextHoverValue.length >= 2) {
            var miss = nextHoverValue.some(function (ht) {
              return !(0, toTime.includesTime)(value, ht, 'month');
            });
            if (miss) {
              var newValue = nextHoverValue.slice().sort(function (t1, t2) {
                return t1.valueOf() - t2.valueOf();
              });
              if (newValue[0].isSame(newValue[1], 'month')) {
                newValue[1] = newValue[0].clone().add(1, 'month');
              }
              _this2.fireValueChange(newValue);
            }
          } else if (nextHoverValue.length === 1) {
            // If only one value, let's keep the origin panel
            var oriValueIndex = value.findIndex(function (time) {
              return time.isSame(currentHoverTime, 'month');
            });
            if (oriValueIndex === -1) oriValueIndex = 0;

            if (value.every(function (time) {
              return !time.isSame(nextHoverTime, 'month');
            })) {
              var _newValue = value.slice();
              _newValue[oriValueIndex] = nextHoverTime.clone();
              _this2.fireValueChange(_newValue);
            }
          }

          event.preventDefault();

          return nextHoverTime;
        };

        switch (keyCode) {
          case _KeyCode2['default'].DOWN:
            updateHoverPoint(function (time) {
              return (0, toTime.goTime)(time, 1, 'weeks');
            });
            return;
          case _KeyCode2['default'].UP:
            updateHoverPoint(function (time) {
              return (0, toTime.goTime)(time, -1, 'weeks');
            });
            return;
          case _KeyCode2['default'].LEFT:
            if (ctrlKey) {
              updateHoverPoint(function (time) {
                return (0, toTime.goTime)(time, -1, 'years');
              });
            } else {
              updateHoverPoint(function (time) {
                return (0, toTime.goTime)(time, -1, 'days');
              });
            }
            return;
          case _KeyCode2['default'].RIGHT:
            if (ctrlKey) {
              updateHoverPoint(function (time) {
                return (0, toTime.goTime)(time, 1, 'years');
              });
            } else {
              updateHoverPoint(function (time) {
                return (0, toTime.goTime)(time, 1, 'days');
              });
            }
            return;
          case _KeyCode2['default'].HOME:
            updateHoverPoint(function (time) {
              return (0, toTime.goStartMonth)(time);
            });
            return;
          case _KeyCode2['default'].END:
            updateHoverPoint(function (time) {
              return (0, toTime.goEndMonth)(time);
            });
            return;
          case _KeyCode2['default'].PAGE_DOWN:
            updateHoverPoint(function (time) {
              return (0, toTime.goTime)(time, 1, 'month');
            });
            return;
          case _KeyCode2['default'].PAGE_UP:
            updateHoverPoint(function (time) {
              return (0, toTime.goTime)(time, -1, 'month');
            });
            return;
          case _KeyCode2['default'].ENTER:
            {
              var lastValue = void 0;
              if (hoverValue.length === 0) {
                lastValue = updateHoverPoint(function (time) {
                  return time;
                });
              } else if (hoverValue.length === 1) {
                lastValue = hoverValue[0];
              } else {
                lastValue = hoverValue[0].isSame(firstSelectedValue, 'day') ? hoverValue[1] : hoverValue[0];
              }
              if (lastValue && (!disabledDate || !disabledDate(lastValue))) {
                _this2.onSelect(lastValue);
              }
              event.preventDefault();
              return;
            }
          default:
            if (onKeyDown) {
              onKeyDown(event);
            }
        }
      };

      this.onDayHover = function (value) {
        var hoverValue = [];
        var _state3 = _this2.state,
            selectedValue = _state3.selectedValue,
            firstSelectedValue = _state3.firstSelectedValue;
        var type = _this2.props.type;

        if (type === 'start' && selectedValue[1]) {
          hoverValue = _this2.compare(value, selectedValue[1]) < 0 ? [value, selectedValue[1]] : [value];
        } else if (type === 'end' && selectedValue[0]) {
          hoverValue = _this2.compare(value, selectedValue[0]) > 0 ? [selectedValue[0], value] : [];
        } else {
          if (!firstSelectedValue) {
            if (_this2.state.hoverValue.length) {
              _this2.setState({ hoverValue: [] });
            }
            return hoverValue;
          }
          hoverValue = _this2.compare(value, firstSelectedValue) < 0 ? [value, firstSelectedValue] : [firstSelectedValue, value];
        }
        _this2.fireHoverValueChange(hoverValue);

        return hoverValue;
      };

      this.onToday = function () {
        var startValue = (0, util.getTodayTime)(_this2.state.value[0]);
        var endValue = startValue.clone().add(1, 'months');
        _this2.setState({ value: [startValue, endValue] });
      };

      this.onOpenTimePicker = function () {
        _this2.setState({
          showTimePicker: true
        });
      };

      this.onCloseTimePicker = function () {
        _this2.setState({
          showTimePicker: false
        });
      };

      this.onOk = function () {
        var selectedValue = _this2.state.selectedValue;

        if (_this2.isAllowedDateAndTime(selectedValue)) {
          _this2.props.onOk(_this2.state.selectedValue);
        }
      };

      this.onStartInputChange = function () {
        for (var _len = arguments.length, oargs = Array(_len), _key = 0; _key < _len; _key++) {
          oargs[_key] = arguments[_key];
        }

        var args = ['left'].concat(oargs);
        return onInputSelect.apply(_this2, args);
      };

      this.onEndInputChange = function () {
        for (var _len2 = arguments.length, oargs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          oargs[_key2] = arguments[_key2];
        }

        var args = ['right'].concat(oargs);
        return onInputSelect.apply(_this2, args);
      };

      this.onStartInputSelect = function (value) {
        var args = ['left', value, { source: 'dateInputSelect' }];
        return onInputSelect.apply(_this2, args);
      };

      this.onEndInputSelect = function (value) {
        var args = ['right', value, { source: 'dateInputSelect' }];
        return onInputSelect.apply(_this2, args);
      };

      this.onStartValueChange = function (leftValue) {
        var value = [].concat(_this2.state.value);
        value[0] = leftValue;
        return _this2.fireValueChange(value);
      };

      this.onEndValueChange = function (rightValue) {
        var value = [].concat(_this2.state.value);
        value[1] = rightValue;
        return _this2.fireValueChange(value);
      };

      this.onStartPanelChange = function (value, mode) {
        var props = _this2.props,
            state = _this2.state;

        var newMode = [mode, state.mode[1]];
        var newState = {
          panelTriggerSource: 'start'
        };
        if (!('mode' in props)) {
          newState.mode = newMode;
        }
        _this2.setState(newState);
        var newValue = [value || state.value[0], state.value[1]];
        props.onPanelChange(newValue, newMode);
      };

      this.onEndPanelChange = function (value, mode) {
        var props = _this2.props,
            state = _this2.state;

        var newMode = [state.mode[0], mode];
        var newState = {
          panelTriggerSource: 'end'
        };
        if (!('mode' in props)) {
          newState.mode = newMode;
        }
        _this2.setState(newState);
        var newValue = [state.value[0], value || state.value[1]];
        props.onPanelChange(newValue, newMode);
      };

      this.getStartValue = function () {
        var _state4 = _this2.state,
            selectedValue = _state4.selectedValue,
            showTimePicker = _state4.showTimePicker,
            value = _state4.value,
            mode = _state4.mode,
            panelTriggerSource = _state4.panelTriggerSource;

        var startValue = value[0];
        // keep selectedTime when select date
        if (selectedValue[0] && _this2.props.timePicker) {
          startValue = startValue.clone();
          (0, util.syncTime)(selectedValue[0], startValue);
        }
        if (showTimePicker && selectedValue[0]) {
          startValue = selectedValue[0];
        }

        // Adjust month if date not align
        if (panelTriggerSource === 'end' && mode[0] === 'date' && mode[1] === 'date' && startValue.isSame(value[1], 'month')) {
          startValue = startValue.clone().subtract(1, 'month');
        }

        return startValue;
      };

      this.getEndValue = function () {
        var _state5 = _this2.state,
            value = _state5.value,
            selectedValue = _state5.selectedValue,
            showTimePicker = _state5.showTimePicker,
            mode = _state5.mode,
            panelTriggerSource = _state5.panelTriggerSource;

        var endValue = value[1] ? value[1].clone() : value[0].clone().add(1, 'month');
        // keep selectedTime when select date
        if (selectedValue[1] && _this2.props.timePicker) {
          (0, util.syncTime)(selectedValue[1], endValue);
        }
        if (showTimePicker) {
          endValue = selectedValue[1] ? selectedValue[1] : _this2.getStartValue();
        }

        // Adjust month if date not align
        if (!showTimePicker && panelTriggerSource !== 'end' && mode[0] === 'date' && mode[1] === 'date' && endValue.isSame(value[0], 'month')) {
          endValue = endValue.clone().add(1, 'month');
        }

        return endValue;
      };

      this.getEndDisableTime = function () {
        var _state6 = _this2.state,
            selectedValue = _state6.selectedValue,
            value = _state6.value;
        var disabledTime = _this2.props.disabledTime;

        var userSettingDisabledTime = disabledTime(selectedValue, 'end') || {};
        var startValue = selectedValue && selectedValue[0] || value[0].clone();
        // if startTime and endTime is same day..
        // the second time picker will not able to pick time before first time picker
        if (!selectedValue[1] || startValue.isSame(selectedValue[1], 'day')) {
          var hours = startValue.hour();
          var minutes = startValue.minute();
          var second = startValue.second();
          var _disabledHours = userSettingDisabledTime.disabledHours,
              _disabledMinutes = userSettingDisabledTime.disabledMinutes,
              _disabledSeconds = userSettingDisabledTime.disabledSeconds;

          var oldDisabledMinutes = _disabledMinutes ? _disabledMinutes() : [];
          var olddisabledSeconds = _disabledSeconds ? _disabledSeconds() : [];
          _disabledHours = generateOptions(hours, _disabledHours);
          _disabledMinutes = generateOptions(minutes, _disabledMinutes);
          _disabledSeconds = generateOptions(second, _disabledSeconds);
          return {
            disabledHours: function disabledHours() {
              return _disabledHours;
            },
            disabledMinutes: function disabledMinutes(hour) {
              if (hour === hours) {
                return _disabledMinutes;
              }
              return oldDisabledMinutes;
            },
            disabledSeconds: function disabledSeconds(hour, minute) {
              if (hour === hours && minute === minutes) {
                return _disabledSeconds;
              }
              return olddisabledSeconds;
            }
          };
        }
        return userSettingDisabledTime;
      };

      this.isAllowedDateAndTime = function (selectedValue) {
        return (0, util.isAllowedDate)(selectedValue[0], _this2.props.disabledDate, _this2.disabledStartTime) && (0, util.isAllowedDate)(selectedValue[1], _this2.props.disabledDate, _this2.disabledEndTime);
      };

      this.isMonthYearPanelShow = function (mode) {
        return ['month', 'year', 'decade'].indexOf(mode) > -1;
      };

      this.hasSelectedValue = function () {
        var selectedValue = _this2.state.selectedValue;

        return !!selectedValue[1] && !!selectedValue[0];
      };

      this.compare = function (v1, v2) {
        if (_this2.props.timePicker) {
          return v1.diff(v2);
        }
        return v1.diff(v2, 'days');
      };

      this.fireSelectValueChange = function (selectedValue, direct, cause) {
        var timePicker = _this2.props.timePicker;
        var prevSelectedValue = _this2.state.prevSelectedValue;

        if (timePicker && timePicker.props.defaultValue) {
          var timePickerDefaultValue = timePicker.props.defaultValue;
          if (!prevSelectedValue[0] && selectedValue[0]) {
            (0, util.syncTime)(timePickerDefaultValue[0], selectedValue[0]);
          }
          if (!prevSelectedValue[1] && selectedValue[1]) {
            (0, util.syncTime)(timePickerDefaultValue[1], selectedValue[1]);
          }
        }

        if (!('selectedValue' in _this2.props)) {
          _this2.setState({
            selectedValue: selectedValue
          });
        }

        // 尚未选择过时间，直接输入的话
        if (!_this2.state.selectedValue[0] || !_this2.state.selectedValue[1]) {
          var startValue = selectedValue[0] || (0, _moment2['default'])();
          var endValue = selectedValue[1] || startValue.clone().add(1, 'months');
          _this2.setState({
            selectedValue: selectedValue,
            value: getValueFromSelectedValue([startValue, endValue])
          });
        }

        if (selectedValue[0] && !selectedValue[1]) {
          _this2.setState({ firstSelectedValue: selectedValue[0] });
          _this2.fireHoverValueChange(selectedValue.concat());
        }
        _this2.props.onChange(selectedValue);
        if (direct || selectedValue[0] && selectedValue[1]) {
          _this2.setState({
            prevSelectedValue: selectedValue,
            firstSelectedValue: null
          });
          _this2.fireHoverValueChange([]);
          _this2.props.onSelect(selectedValue, cause);
        }
      };

      this.fireValueChange = function (value) {
        var props = _this2.props;
        if (!('value' in props)) {
          _this2.setState({
            value: value
          });
        }
        props.onValueChange(value);
      };

      this.fireHoverValueChange = function (hoverValue) {
        var props = _this2.props;
        if (!('hoverValue' in props)) {
          _this2.setState({ hoverValue: hoverValue });
        }
        props.onHoverChange(hoverValue);
      };

      this.clear = function () {
        _this2.fireSelectValueChange([], true);
        _this2.props.onClear();
      };

      this.disabledStartTime = function (time) {
        return _this2.props.disabledTime(time, 'start');
      };

      this.disabledEndTime = function (time) {
        return _this2.props.disabledTime(time, 'end');
      };

      this.disabledStartMonth = function (month) {
        var value = _this2.state.value;

        return month.isAfter(value[1], 'month');
      };

      this.disabledEndMonth = function (month) {
        var value = _this2.state.value;

        return month.isBefore(value[0], 'month');
      };
    };

    (0, reactLifecyclesCompat__default.polyfill)(RangeCalendar);

    exports['default'] = (0, CommonMixin.commonMixinWrapper)(RangeCalendar);
    module.exports = exports['default'];
    });

    var RangeCalendar = unwrapExports(RangeCalendar_1);

    //

    var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

      if (ret !== void 0) {
        return !!ret;
      }

      if (objA === objB) {
        return true;
      }

      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }

      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);

      if (keysA.length !== keysB.length) {
        return false;
      }

      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

      // Test for A's keys different from B.
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];

        if (!bHasOwnProperty(key)) {
          return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if (ret === false || (ret === void 0 && valueA !== valueB)) {
          return false;
        }
      }

      return true;
    };

    var CheckableTag = (function (_super) {
        __extends(CheckableTag, _super);
        function CheckableTag() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.handleClick = function () {
                var _a = _this.props, checked = _a.checked, onChange = _a.onChange;
                if (onChange) {
                    onChange(!checked);
                }
            };
            _this.renderCheckableTag = function () {
                var _a;
                var _b = _this.props, className = _b.className, checked = _b.checked, restProps = __rest(_b, ["className", "checked"]);
                var prefixCls = 'Tag';
                var cls = classNames(prefixCls, (_a = {},
                    _a[prefixCls + "-checkable"] = true,
                    _a[prefixCls + "-checkable-checked"] = checked,
                    _a), className);
                delete restProps.onChange;
                return React.createElement("span", __assign({}, restProps, { className: cls, onClick: _this.handleClick }));
            };
            return _this;
        }
        CheckableTag.prototype.render = function () {
            return this.renderCheckableTag();
        };
        return CheckableTag;
    }(React.Component));

    var tuple = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args;
    };
    var PresetColorTypes = tuple('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');

    ___$insertStyle(".Tag {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: #333745;\n  font-size: 15px;\n  font-variant: font-variant-base;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: \"tnum\";\n  display: inline-block;\n  height: auto;\n  margin-right: 8px;\n  padding: 0 7px;\n  font-size: 12px;\n  line-height: 20px;\n  white-space: nowrap;\n  background: #fafafa;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  cursor: default;\n  opacity: 1;\n  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.Tag:hover {\n  opacity: 0.85;\n}\n.Tag,\n.Tag a,\n.Tag a:hover {\n  color: #333745;\n}\n.Tag > a:first-child:last-child {\n  display: inline-block;\n  margin: 0 -8px;\n  padding: 0 8px;\n}\n.Tag .Tag-close {\n  font-size: 12px;\n  margin-left: 3px;\n  color: #494949;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.Tag .Tag-close:hover {\n  color: #d9d9d9;\n}\n.Tag-has-color {\n  border-color: transparent;\n}\n.Tag-has-color,\n.Tag-has-color a,\n.Tag-has-color a:hover,\n.Tag-has-color .Tag-close,\n.Tag-has-color .Tag-close:hover {\n  color: white;\n}\n.Tag-checkable {\n  background-color: transparent;\n  border-color: transparent;\n}\n.Tag-checkable:not(.Tag-checkable-checked):hover {\n  color: #f9285c;\n}\n.Tag-checkable:active, .Tag-checkable-checked {\n  color: white;\n}\n.Tag-checkable-checked {\n  background-color: #f9285c;\n}\n.Tag-checkable:active {\n  background-color: #f9285c;\n}\n.Tag-hidden {\n  display: none;\n}\n.Tag-pink {\n  color: #ff9cae;\n  background: white;\n  border-color: white;\n}\n.Tag-pink-inverse {\n  color: #fff;\n  background: #ff9cae;\n  border-color: #ff9cae;\n}\n.Tag-magenta {\n  color: #db00db;\n  background: #ffccff;\n  border-color: #ff4dff;\n}\n.Tag-magenta-inverse {\n  color: #fff;\n  background: #db00db;\n  border-color: #db00db;\n}\n.Tag-red {\n  color: #db0000;\n  background: #ffcccc;\n  border-color: #ff4d4d;\n}\n.Tag-red-inverse {\n  color: #fff;\n  background: #db0000;\n  border-color: #db0000;\n}\n.Tag-orange {\n  color: #db8e00;\n  background: #ffedcc;\n  border-color: #ffc04d;\n}\n.Tag-orange-inverse {\n  color: #fff;\n  background: #db8e00;\n  border-color: #db8e00;\n}\n.Tag-yellow {\n  color: #dbdb00;\n  background: #ffffcc;\n  border-color: #ffff4d;\n}\n.Tag-yellow-inverse {\n  color: #fff;\n  background: #dbdb00;\n  border-color: #dbdb00;\n}\n.Tag-gold {\n  color: #dbb900;\n  background: #fff7cc;\n  border-color: #ffe34d;\n}\n.Tag-gold-inverse {\n  color: #fff;\n  background: #dbb900;\n  border-color: #dbb900;\n}\n.Tag-cyan {\n  color: #00dbdb;\n  background: #ccffff;\n  border-color: #4dffff;\n}\n.Tag-cyan-inverse {\n  color: #fff;\n  background: #00dbdb;\n  border-color: #00dbdb;\n}\n.Tag-lime {\n  color: #00db00;\n  background: #ccffcc;\n  border-color: #4dff4d;\n}\n.Tag-lime-inverse {\n  color: #fff;\n  background: #00db00;\n  border-color: #00db00;\n}\n.Tag-green {\n  color: #005c00;\n  background: #4dff4d;\n  border-color: #00cd00;\n}\n.Tag-green-inverse {\n  color: #fff;\n  background: #005c00;\n  border-color: #005c00;\n}\n.Tag-blue {\n  color: #0000db;\n  background: #ccccff;\n  border-color: #4d4dff;\n}\n.Tag-blue-inverse {\n  color: #fff;\n  background: #0000db;\n  border-color: #0000db;\n}\n.Tag-purple {\n  color: #5c005c;\n  background: #ff4dff;\n  border-color: #cd00cd;\n}\n.Tag-purple-inverse {\n  color: #fff;\n  background: #5c005c;\n  border-color: #5c005c;\n}");

    var PresetColorRegex = new RegExp("^(" + PresetColorTypes.join('|') + ")(-inverse)?$");
    var Tag = (function (_super) {
        __extends(Tag, _super);
        function Tag(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                visible: true,
            };
            _this.handleIconClick = function (e) {
                _this.setVisible(false, e);
            };
            _this.renderTag = function () {
                var _a = _this.props, children = _a.children, otherProps = __rest(_a, ["children"]);
                var tagProps = omit(otherProps, [
                    'onClose',
                    'afterClose',
                    'color',
                    'visible',
                    'closable',
                    'prefixCls',
                ]);
                return (React.createElement("span", __assign({}, tagProps, { className: _this.getTagClassName(), style: _this.getTagStyle() }),
                    children,
                    _this.renderCloseIcon()));
            };
            warning$1(!('afterClose' in props), 'Tag', "'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version.");
            return _this;
        }
        Tag.getDerivedStateFromProps = function (nextProps) {
            if ('visible' in nextProps) {
                return {
                    visible: nextProps.visible,
                };
            }
            return null;
        };
        Tag.prototype.getTagStyle = function () {
            var _a = this.props, color = _a.color, style = _a.style;
            var isPresetColor = this.isPresetColor();
            return __assign({ backgroundColor: color && !isPresetColor ? color : undefined }, style);
        };
        Tag.prototype.getTagClassName = function () {
            var _a;
            var _b = this.props, className = _b.className, color = _b.color;
            var visible = this.state.visible;
            var isPresetColor = this.isPresetColor();
            var prefixCls = 'Tag';
            return classNames(prefixCls, (_a = {},
                _a[prefixCls + "-" + color] = isPresetColor,
                _a[prefixCls + "-has-color"] = color && !isPresetColor,
                _a[prefixCls + "-hidden"] = !visible,
                _a), className);
        };
        Tag.prototype.setVisible = function (visible, e) {
            var onClose = this.props.onClose;
            if (onClose) {
                onClose(e);
            }
            if (e.defaultPrevented) {
                return;
            }
            if (!('visible' in this.props)) {
                this.setState({ visible: visible });
            }
        };
        Tag.prototype.isPresetColor = function () {
            var color = this.props.color;
            if (!color) {
                return false;
            }
            return PresetColorRegex.test(color);
        };
        Tag.prototype.renderCloseIcon = function () {
            var closable = this.props.closable;
            return closable ? (React.createElement(Icon, { icon: "close", className: "Tag-close", onClick: this.handleIconClick })) : null;
        };
        Tag.prototype.render = function () {
            return this.renderTag();
        };
        Tag.CheckableTag = CheckableTag;
        Tag.defaultProps = {
            closable: false,
        };
        return Tag;
    }(React.Component));
    reactLifecyclesCompat.polyfill(Tag);

    function getShowDateFromValue(value, mode) {
        var start = value[0], end = value[1];
        if (!start && !end) {
            return;
        }
        if (mode && mode[0] === 'month') {
            return [start, end];
        }
        var newEnd = end && end.isSame(start, 'month') ? end.clone().add(1, 'month') : end;
        return [start, newEnd];
    }
    function pickerValueAdapter(value) {
        if (!value) {
            return;
        }
        if (Array.isArray(value)) {
            return value;
        }
        return [value, value.clone().add(1, 'month')];
    }
    function isEmptyArray(arr) {
        if (Array.isArray(arr)) {
            return arr.length === 0 || arr.every(function (i) { return !i; });
        }
        return false;
    }
    function fixLocale(value, localeCode) {
        if (!localeCode) {
            return;
        }
        if (!value || value.length === 0) {
            return;
        }
        var start = value[0], end = value[1];
        if (start) {
            start.locale(localeCode);
        }
        if (end) {
            end.locale(localeCode);
        }
    }
    var RangePicker = (function (_super) {
        __extends(RangePicker, _super);
        function RangePicker(props) {
            var _this = _super.call(this, props) || this;
            _this.savePicker = function (node) {
                _this.picker = node;
            };
            _this.clearSelection = function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this.setState({ value: [] });
                _this.handleChange([]);
            };
            _this.clearHoverValue = function () { return _this.setState({ hoverValue: [] }); };
            _this.handleChange = function (value) {
                var props = _this.props;
                if (!('value' in props)) {
                    _this.setState(function (_a) {
                        var showDate = _a.showDate;
                        return ({
                            value: value,
                            showDate: getShowDateFromValue(value) || showDate,
                        });
                    });
                }
                if (value[0] && value[0].diff(value[1]) > 0) {
                    value[1] = undefined;
                }
                var start = value[0], end = value[1];
                props.onChange(value, [formatDate(start, props.format), formatDate(end, props.format)]);
            };
            _this.handleOpenChange = function (open) {
                if (!('open' in _this.props)) {
                    _this.setState({ open: open });
                }
                if (open === false) {
                    _this.clearHoverValue();
                }
                var onOpenChange = _this.props.onOpenChange;
                if (onOpenChange) {
                    onOpenChange(open);
                }
            };
            _this.handleShowDateChange = function (showDate) { return _this.setState({ showDate: showDate }); };
            _this.handleHoverChange = function (hoverValue) { return _this.setState({ hoverValue: hoverValue }); };
            _this.handleRangeMouseLeave = function () {
                if (_this.state.open) {
                    _this.clearHoverValue();
                }
            };
            _this.handleCalendarInputSelect = function (value) {
                var start = value[0];
                if (!start) {
                    return;
                }
                _this.setState(function (_a) {
                    var showDate = _a.showDate;
                    return ({
                        value: value,
                        showDate: getShowDateFromValue(value) || showDate,
                    });
                });
            };
            _this.handleRangeClick = function (value) {
                if (typeof value === 'function') {
                    value = value();
                }
                _this.setValue(value, true);
                var _a = _this.props, onOk = _a.onOk, onOpenChange = _a.onOpenChange;
                if (onOk) {
                    onOk(value);
                }
                if (onOpenChange) {
                    onOpenChange(false);
                }
            };
            _this.renderFooter = function () {
                var _a = _this.props, ranges = _a.ranges, renderExtraFooter = _a.renderExtraFooter;
                var _b = _this, prefixCls = _b.prefixCls, tagPrefixCls = _b.tagPrefixCls;
                if (!ranges && !renderExtraFooter) {
                    return null;
                }
                var customFooter = renderExtraFooter ? (React.createElement("div", { className: prefixCls + "-footer-extra", key: "extra" }, renderExtraFooter())) : null;
                var operations = Object.keys(ranges || {}).map(function (range) {
                    var value = ranges[range];
                    return (React.createElement(Tag, { key: range, prefixCls: tagPrefixCls, color: "blue", onClick: function () { return _this.handleRangeClick(value); }, onMouseEnter: function () { return _this.setState({ hoverValue: value }); }, onMouseLeave: _this.handleRangeMouseLeave }, range));
                });
                var rangeNode = operations && operations.length > 0 ? (React.createElement("div", { className: prefixCls + "-footer-extra " + prefixCls + "-range-quick-selector", key: "range" }, operations)) : null;
                return [rangeNode, customFooter];
            };
            _this.renderRangePicker = function () {
                var _a;
                var _b = _this, state = _b.state, props = _b.props;
                var value = state.value, showDate = state.showDate, hoverValue = state.hoverValue, open = state.open;
                var customizePrefixCls = props.prefixCls, customizeTagPrefixCls = props.tagPrefixCls, popupStyle = props.popupStyle, style = props.style, disabledDate = props.disabledDate, disabledTime = props.disabledTime, showTime = props.showTime, showToday = props.showToday, ranges = props.ranges, onOk = props.onOk, locale = props.locale, localeCode = props.localeCode, format = props.format, dateRender = props.dateRender, onCalendarChange = props.onCalendarChange, separator = props.separator;
                var prefixCls = 'DatePicker';
                var tagPrefixCls = 'DatePicker-tag';
                _this.prefixCls = prefixCls;
                _this.tagPrefixCls = tagPrefixCls;
                fixLocale(value, localeCode);
                fixLocale(showDate, localeCode);
                warning$1(!('onOK' in props), 'RangePicker', 'It should be `RangePicker[onOk]`, instead of `onOK`!');
                var calendarClassName = classNames((_a = {},
                    _a[prefixCls + "-time"] = showTime,
                    _a[prefixCls + "-range-with-ranges"] = ranges,
                    _a));
                var pickerChangeHandler = {
                    onChange: _this.handleChange,
                };
                var calendarProps = {
                    onOk: _this.handleChange,
                };
                if (props.timePicker) {
                    pickerChangeHandler.onChange = function (changedValue) { return _this.handleChange(changedValue); };
                }
                else {
                    calendarProps = {};
                }
                if ('mode' in props) {
                    calendarProps.mode = props.mode;
                }
                var startPlaceholder = 'placeholder' in props ? props.placeholder[0] : 'Start Date';
                var endPlaceholder = 'placeholder' in props ? props.placeholder[1] : 'End Date';
                var calendar = (React.createElement(RangeCalendar, __assign({}, calendarProps, { seperator: separator, onChange: onCalendarChange, format: format, prefixCls: prefixCls, className: calendarClassName, renderFooter: _this.renderFooter, timePicker: props.timePicker, disabledDate: disabledDate, disabledTime: disabledTime, dateInputPlaceholder: [startPlaceholder, endPlaceholder], locale: locale.lang, onOk: onOk, dateRender: dateRender, value: showDate, onValueChange: _this.handleShowDateChange, hoverValue: hoverValue, onHoverChange: _this.handleHoverChange, onPanelChange: props.onPanelChange, showToday: showToday, onInputSelect: _this.handleCalendarInputSelect })));
                var pickerStyle = {};
                if (props.showTime) {
                    pickerStyle.width = (style && style.width) || 350;
                }
                var _c = value, startValue = _c[0], endValue = _c[1];
                var clearIcon = !props.disabled && props.allowClear && value && (startValue || endValue) ? (React.createElement(Icon, { icon: "access_time", className: prefixCls + "-picker-clear", onClick: _this.clearSelection })) : null;
                var inputIcon = (React.createElement(Icon, { icon: "calendar_today", className: prefixCls + "-picker-icon " + prefixCls + "-picker-icon-calendar" }));
                var input = function (_a) {
                    var inputValue = _a.value;
                    var start = inputValue[0], end = inputValue[1];
                    return (React.createElement("span", { className: props.pickerInputClass },
                        React.createElement("input", { disabled: props.disabled, readOnly: true, value: formatDate(start, props.format), placeholder: startPlaceholder, className: prefixCls + "-range-picker-input", tabIndex: -1 }),
                        React.createElement("span", { className: prefixCls + "-range-picker-separator" },
                            " ",
                            separator,
                            " "),
                        React.createElement("input", { disabled: props.disabled, readOnly: true, value: formatDate(end, props.format), placeholder: endPlaceholder, className: prefixCls + "-range-picker-input", tabIndex: -1 }),
                        clearIcon,
                        inputIcon));
                };
                return (React.createElement("span", { ref: _this.savePicker, id: props.id, className: classNames(props.className, props.pickerClass), style: __assign(__assign({}, style), pickerStyle), tabIndex: props.disabled ? -1 : 0, onFocus: props.onFocus, onBlur: props.onBlur, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
                    React.createElement(RcDatePicker, __assign({}, props, pickerChangeHandler, { calendar: calendar, value: value, open: open, onOpenChange: _this.handleOpenChange, prefixCls: prefixCls + "-picker-container", style: popupStyle }), input)));
            };
            var value = props.value || props.defaultValue || [];
            var start = value[0], end = value[1];
            if ((start && !interopDefault(moment).isMoment(start)) ||
                (end && !interopDefault(moment).isMoment(end))) {
                throw new Error('The value/defaultValue of RangePicker must be a moment object array after `antd@2.0`, ' +
                    'see: https://u.ant.design/date-picker-value');
            }
            var pickerValue = !value || isEmptyArray(value) ? props.defaultPickerValue : value;
            _this.state = {
                value: value,
                showDate: pickerValueAdapter(pickerValue || interopDefault(moment)()),
                open: props.open,
                hoverValue: [],
            };
            return _this;
        }
        RangePicker.getDerivedStateFromProps = function (nextProps, prevState) {
            var state = null;
            if ('value' in nextProps) {
                var value = nextProps.value || [];
                state = {
                    value: value,
                };
                if (!shallowequal(nextProps.value, prevState.value)) {
                    state = __assign(__assign({}, state), { showDate: getShowDateFromValue(value, nextProps.mode) || prevState.showDate });
                }
            }
            if ('open' in nextProps && prevState.open !== nextProps.open) {
                state = __assign(__assign({}, state), { open: nextProps.open });
            }
            return state;
        };
        RangePicker.prototype.componentDidUpdate = function (_, prevState) {
            if (!('open' in this.props) && prevState.open && !this.state.open) {
                this.focus();
            }
        };
        RangePicker.prototype.setValue = function (value, hidePanel) {
            this.handleChange(value);
            if ((hidePanel || !this.props.showTime) && !('open' in this.props)) {
                this.setState({ open: false });
            }
        };
        RangePicker.prototype.focus = function () {
            this.picker.focus();
        };
        RangePicker.prototype.blur = function () {
            this.picker.blur();
        };
        RangePicker.prototype.render = function () {
            return this.renderRangePicker();
        };
        RangePicker.defaultProps = {
            allowClear: true,
            showToday: false,
            separator: '~',
        };
        return RangePicker;
    }(React.Component));
    reactLifecyclesCompat.polyfill(RangePicker);

    function formatValue(value, format) {
        return (value && value.format(format)) || '';
    }
    var WeekPicker = (function (_super) {
        __extends(WeekPicker, _super);
        function WeekPicker(props) {
            var _this = _super.call(this, props) || this;
            _this.saveInput = function (node) {
                _this.input = node;
            };
            _this.weekDateRender = function (current) {
                var selectedValue = _this.state.value;
                var prefixCls = _this.prefixCls;
                var dateRender = _this.props.dateRender;
                var dateNode = dateRender ? dateRender(current) : current.date();
                if (selectedValue &&
                    current.year() === selectedValue.year() &&
                    current.week() === selectedValue.week()) {
                    return (React.createElement("div", { className: prefixCls + "-selected-day" },
                        React.createElement("div", { className: prefixCls + "-date" }, dateNode)));
                }
                return React.createElement("div", { className: prefixCls + "-date" }, dateNode);
            };
            _this.handleChange = function (value) {
                if (!('value' in _this.props)) {
                    _this.setState({ value: value });
                }
                _this.props.onChange(value, formatValue(value, _this.props.format));
            };
            _this.handleOpenChange = function (open) {
                var onOpenChange = _this.props.onOpenChange;
                if (!('open' in _this.props)) {
                    _this.setState({ open: open });
                }
                if (onOpenChange) {
                    onOpenChange(open);
                }
            };
            _this.clearSelection = function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this.handleChange(null);
            };
            _this.renderFooter = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a = _this.props, prefixCls = _a.prefixCls, renderExtraFooter = _a.renderExtraFooter;
                return renderExtraFooter ? (React.createElement("div", { className: prefixCls + "-footer-extra" }, renderExtraFooter.apply(void 0, args))) : null;
            };
            _this.renderWeekPicker = function () {
                var _a = _this.props, customizePrefixCls = _a.prefixCls, className = _a.className, disabled = _a.disabled, pickerClass = _a.pickerClass, popupStyle = _a.popupStyle, pickerInputClass = _a.pickerInputClass, format = _a.format, allowClear = _a.allowClear, locale = _a.locale, localeCode = _a.localeCode, disabledDate = _a.disabledDate, style = _a.style, onFocus = _a.onFocus, onBlur = _a.onBlur, id = _a.id, suffixIcon = _a.suffixIcon;
                var prefixCls = 'DatePicker';
                _this.prefixCls = prefixCls;
                var _b = _this.state, open = _b.open, pickerValue = _b.value;
                if (pickerValue && localeCode) {
                    pickerValue.locale(localeCode);
                }
                var placeholder = 'placeholder' in _this.props ? _this.props.placeholder : locale.lang.placeholder;
                var calendar = (React.createElement(Calendar, { showWeekNumber: true, dateRender: _this.weekDateRender, prefixCls: prefixCls, format: format, locale: locale.lang, showDateInput: false, showToday: false, disabledDate: disabledDate, renderFooter: _this.renderFooter }));
                var clearIcon = !disabled && allowClear && _this.state.value ? (React.createElement(Icon, { icon: "close", className: prefixCls + "-picker-clear", onClick: _this.clearSelection })) : null;
                var inputIcon = (React.createElement(Icon, { icon: "calendar_today", className: prefixCls + "-picker-icon " + prefixCls + "-picker-icon-calendar" }));
                var input = function (_a) {
                    var value = _a.value;
                    return (React.createElement("span", { style: { display: 'inline-block', width: '100%' } },
                        React.createElement("input", { ref: _this.saveInput, disabled: disabled, readOnly: true, value: (value && value.format(format)) || '', placeholder: placeholder, className: pickerInputClass, onFocus: onFocus, onBlur: onBlur }),
                        clearIcon,
                        inputIcon));
                };
                return (React.createElement("span", { className: classNames(className, pickerClass), style: style, id: id },
                    React.createElement(RcDatePicker, __assign({}, _this.props, { calendar: calendar, prefixCls: prefixCls + "-picker-container", value: pickerValue, onChange: _this.handleChange, open: open, onOpenChange: _this.handleOpenChange, style: popupStyle }), input)));
            };
            var value = props.value || props.defaultValue;
            if (value && !interopDefault(moment).isMoment(value)) {
                throw new Error('The value/defaultValue of WeekPicker must be ' +
                    'a moment object after `antd@2.0`, see: https://u.ant.design/date-picker-value');
            }
            _this.state = {
                value: value,
                open: props.open,
            };
            return _this;
        }
        WeekPicker.getDerivedStateFromProps = function (nextProps) {
            if ('value' in nextProps || 'open' in nextProps) {
                var state = {};
                if ('value' in nextProps) {
                    state.value = nextProps.value;
                }
                if ('open' in nextProps) {
                    state.open = nextProps.open;
                }
                return state;
            }
            return null;
        };
        WeekPicker.prototype.componentDidUpdate = function (_, prevState) {
            if (!('open' in this.props) && prevState.open && !this.state.open) {
                this.focus();
            }
        };
        WeekPicker.prototype.focus = function () {
            this.input.focus();
        };
        WeekPicker.prototype.blur = function () {
            this.input.blur();
        };
        WeekPicker.prototype.render = function () {
            return this.renderWeekPicker();
        };
        WeekPicker.defaultProps = {
            format: 'gggg-wo',
            allowClear: true,
        };
        return WeekPicker;
    }(React.Component));
    reactLifecyclesCompat.polyfill(WeekPicker);

    ___$insertStyle(".DatePicker {\n  position: relative;\n  width: 280px;\n  font-size: 15px;\n  line-height: 1.5;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #fff;\n  border-radius: 4px;\n  outline: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.DatePicker-input-wrap {\n  height: 34px;\n  padding: 6px 10px;\n  border-bottom: 1px solid #e8e8e8;\n}\n.DatePicker-input {\n  width: 100%;\n  height: 22px;\n  color: #333745;\n  background: #fff;\n  border: 0;\n  outline: 0;\n  cursor: auto;\n}\n.DatePicker-week-number {\n  width: 286px;\n}\n.DatePicker-week-number-cell {\n  text-align: center;\n}\n.DatePicker-header {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-bottom: 1px solid #e8e8e8;\n  user-select: none;\n}\n.DatePicker-header a:hover {\n  color: #494949;\n  cursor: pointer;\n}\n.DatePicker-header .DatePicker-century-select,\n.DatePicker-header .DatePicker-decade-select,\n.DatePicker-header .DatePicker-year-select,\n.DatePicker-header .DatePicker-month-select {\n  display: inline-block;\n  padding: 0 2px;\n  color: #d9d9d9;\n  font-weight: 500;\n  line-height: 40px;\n}\n.DatePicker-header .DatePicker-century-select-arrow,\n.DatePicker-header .DatePicker-decade-select-arrow,\n.DatePicker-header .DatePicker-year-select-arrow,\n.DatePicker-header .DatePicker-month-select-arrow,\n.DatePicker-header .DatePicker-month-panel-year-select-arrow,\n.DatePicker-header .DatePicker-year-panel-decade-select-arrow {\n  display: none;\n}\n.DatePicker-header .DatePicker-prev-century-btn,\n.DatePicker-header .DatePicker-next-century-btn,\n.DatePicker-header .DatePicker-prev-decade-btn,\n.DatePicker-header .DatePicker-next-decade-btn,\n.DatePicker-header .DatePicker-prev-month-btn,\n.DatePicker-header .DatePicker-next-month-btn,\n.DatePicker-header .DatePicker-prev-year-btn,\n.DatePicker-header .DatePicker-next-year-btn,\n.DatePicker-header .DatePicker-month-panel-next-year-btn,\n.DatePicker-header .DatePicker-month-panel-prev-year-btn {\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  padding: 0 5px;\n  color: #fff;\n  font-size: 16px;\n  font-family: Arial, \"Hiragino Sans GB\", \"Microsoft Yahei\", \"Microsoft Sans Serif\", sans-serif;\n  line-height: 40px;\n}\n.DatePicker-header .DatePicker-prev-century-btn,\n.DatePicker-header .DatePicker-prev-decade-btn,\n.DatePicker-header .DatePicker-prev-year-btn,\n.DatePicker-header .DatePicker-month-panel-prev-year-btn {\n  left: 7px;\n  height: 100%;\n}\n.DatePicker-header .DatePicker-prev-century-btn::before, .DatePicker-header .DatePicker-prev-century-btn::after,\n.DatePicker-header .DatePicker-prev-decade-btn::before,\n.DatePicker-header .DatePicker-prev-decade-btn::after,\n.DatePicker-header .DatePicker-prev-year-btn::before,\n.DatePicker-header .DatePicker-prev-year-btn::after,\n.DatePicker-header .DatePicker-month-panel-prev-year-btn::before,\n.DatePicker-header .DatePicker-month-panel-prev-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-header .DatePicker-prev-century-btn:hover::before, .DatePicker-header .DatePicker-prev-century-btn:hover::after,\n.DatePicker-header .DatePicker-prev-decade-btn:hover::before,\n.DatePicker-header .DatePicker-prev-decade-btn:hover::after,\n.DatePicker-header .DatePicker-prev-year-btn:hover::before,\n.DatePicker-header .DatePicker-prev-year-btn:hover::after,\n.DatePicker-header .DatePicker-month-panel-prev-year-btn:hover::before,\n.DatePicker-header .DatePicker-month-panel-prev-year-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-header .DatePicker-prev-century-btn::after,\n.DatePicker-header .DatePicker-prev-decade-btn::after,\n.DatePicker-header .DatePicker-prev-year-btn::after,\n.DatePicker-header .DatePicker-month-panel-prev-year-btn::after {\n  display: none;\n}\n.DatePicker-header .DatePicker-prev-century-btn::after,\n.DatePicker-header .DatePicker-prev-decade-btn::after,\n.DatePicker-header .DatePicker-prev-year-btn::after,\n.DatePicker-header .DatePicker-month-panel-prev-year-btn::after {\n  position: relative;\n  left: -3px;\n  display: inline-block;\n}\n.DatePicker-header .DatePicker-next-century-btn,\n.DatePicker-header .DatePicker-next-decade-btn,\n.DatePicker-header .DatePicker-next-year-btn,\n.DatePicker-header .DatePicker-month-panel-next-year-btn {\n  right: 7px;\n  height: 100%;\n}\n.DatePicker-header .DatePicker-next-century-btn::before, .DatePicker-header .DatePicker-next-century-btn::after,\n.DatePicker-header .DatePicker-next-decade-btn::before,\n.DatePicker-header .DatePicker-next-decade-btn::after,\n.DatePicker-header .DatePicker-next-year-btn::before,\n.DatePicker-header .DatePicker-next-year-btn::after,\n.DatePicker-header .DatePicker-month-panel-next-year-btn::before,\n.DatePicker-header .DatePicker-month-panel-next-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-header .DatePicker-next-century-btn:hover::before, .DatePicker-header .DatePicker-next-century-btn:hover::after,\n.DatePicker-header .DatePicker-next-decade-btn:hover::before,\n.DatePicker-header .DatePicker-next-decade-btn:hover::after,\n.DatePicker-header .DatePicker-next-year-btn:hover::before,\n.DatePicker-header .DatePicker-next-year-btn:hover::after,\n.DatePicker-header .DatePicker-month-panel-next-year-btn:hover::before,\n.DatePicker-header .DatePicker-month-panel-next-year-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-header .DatePicker-next-century-btn::after,\n.DatePicker-header .DatePicker-next-decade-btn::after,\n.DatePicker-header .DatePicker-next-year-btn::after,\n.DatePicker-header .DatePicker-month-panel-next-year-btn::after {\n  display: none;\n}\n.DatePicker-header .DatePicker-next-century-btn::before, .DatePicker-header .DatePicker-next-century-btn::after,\n.DatePicker-header .DatePicker-next-decade-btn::before,\n.DatePicker-header .DatePicker-next-decade-btn::after,\n.DatePicker-header .DatePicker-next-year-btn::before,\n.DatePicker-header .DatePicker-next-year-btn::after,\n.DatePicker-header .DatePicker-month-panel-next-year-btn::before,\n.DatePicker-header .DatePicker-month-panel-next-year-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.DatePicker-header .DatePicker-next-century-btn::before,\n.DatePicker-header .DatePicker-next-decade-btn::before,\n.DatePicker-header .DatePicker-next-year-btn::before,\n.DatePicker-header .DatePicker-month-panel-next-year-btn::before {\n  position: relative;\n  left: 3px;\n}\n.DatePicker-header .DatePicker-next-century-btn::after,\n.DatePicker-header .DatePicker-next-decade-btn::after,\n.DatePicker-header .DatePicker-next-year-btn::after,\n.DatePicker-header .DatePicker-month-panel-next-year-btn::after {\n  display: inline-block;\n}\n.DatePicker-header .DatePicker-prev-month-btn {\n  left: 29px;\n  height: 100%;\n}\n.DatePicker-header .DatePicker-prev-month-btn::before, .DatePicker-header .DatePicker-prev-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-header .DatePicker-prev-month-btn:hover::before, .DatePicker-header .DatePicker-prev-month-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-header .DatePicker-prev-month-btn::after {\n  display: none;\n}\n.DatePicker-header .DatePicker-next-month-btn {\n  right: 29px;\n  height: 100%;\n}\n.DatePicker-header .DatePicker-next-month-btn::before, .DatePicker-header .DatePicker-next-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-header .DatePicker-next-month-btn:hover::before, .DatePicker-header .DatePicker-next-month-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-header .DatePicker-next-month-btn::after {\n  display: none;\n}\n.DatePicker-header .DatePicker-next-month-btn::before, .DatePicker-header .DatePicker-next-month-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.DatePicker-body {\n  padding: 8px 12px;\n}\n.DatePicker table {\n  width: 100%;\n  max-width: 100%;\n  background-color: transparent;\n  border-collapse: collapse;\n}\n.DatePicker table,\n.DatePicker th,\n.DatePicker td {\n  text-align: center;\n  border: 0;\n}\n.DatePicker-calendar-table {\n  margin-bottom: 0;\n  border-spacing: 0;\n}\n.DatePicker-column-header {\n  width: 33px;\n  padding: 6px 0;\n  line-height: 18px;\n  text-align: center;\n}\n.DatePicker-column-header .DatePicker-column-header-inner {\n  display: block;\n  font-weight: normal;\n}\n.DatePicker-week-number-header .DatePicker-column-header-inner {\n  display: none;\n}\n.DatePicker-cell {\n  height: 30px;\n  padding: 3px 0;\n}\n.DatePicker-date {\n  display: block;\n  width: 24px;\n  height: 24px;\n  margin: 0 auto;\n  padding: 0;\n  color: #333745;\n  line-height: 22px;\n  text-align: center;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.DatePicker-date-panel {\n  position: relative;\n  outline: none;\n}\n.DatePicker-date:hover {\n  background: #fca4ba;\n  color: #f9285c;\n  cursor: pointer;\n}\n.DatePicker-date:active {\n  color: #fff;\n  background: #f9285c;\n}\n.DatePicker-today .DatePicker-date {\n  color: #f9285c;\n  font-weight: bold;\n  border-color: #e8e8e8;\n}\n.DatePicker-selected-day .DatePicker-date {\n  background: #f9285c;\n  color: #fff;\n}\n.DatePicker-last-month-cell .DatePicker-date, .DatePicker-last-month-cell .DatePicker-date:hover, .DatePicker-next-month-btn-day .DatePicker-date, .DatePicker-next-month-btn-day .DatePicker-date:hover {\n  color: #b3b3b3;\n  background: transparent;\n  border-color: transparent;\n}\n.DatePicker-disabled-cell .DatePicker-date {\n  position: relative;\n  width: auto;\n  color: #b3b3b3;\n  background: #e8e8e8;\n  border: 1px solid transparent;\n  border-radius: 0;\n  cursor: not-allowed;\n}\n.DatePicker-disabled-cell .DatePicker-date:hover {\n  background: #e8e8e8;\n}\n.DatePicker-disabled-cell.DatePicker-selected-day .DatePicker-date::before {\n  position: absolute;\n  top: -1px;\n  left: 5px;\n  width: 24px;\n  height: 24px;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  content: \"\";\n}\n.DatePicker-disabled-cell.DatePicker-today .DatePicker-date {\n  position: relative;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.DatePicker-disabled-cell.DatePicker-today .DatePicker-date::before {\n  position: absolute;\n  top: -1px;\n  left: 5px;\n  width: 24px;\n  height: 24px;\n  border: 1px solid #b3b3b3;\n  border-radius: 2px;\n  content: \" \";\n}\n.DatePicker-disabled-cell-first-of-row .DatePicker-date {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.DatePicker-disabled-cell-last-of-row .DatePicker-date {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.DatePicker-footer {\n  padding: 0 12px;\n  line-height: 38px;\n  border-top: 1px solid #e8e8e8;\n}\n.DatePicker-footer:empty {\n  border-top: 0;\n}\n.DatePicker-footer-btn {\n  display: block;\n  text-align: center;\n}\n.DatePicker-footer-extra {\n  text-align: left;\n}\n.DatePicker .DatePicker-today-btn,\n.DatePicker .DatePicker-clear-btn {\n  display: inline-block;\n  margin: 0 0 0 8px;\n  text-align: center;\n}\n.DatePicker .DatePicker-today-btn-disabled,\n.DatePicker .DatePicker-clear-btn-disabled {\n  color: #b3b3b3;\n  cursor: not-allowed;\n}\n.DatePicker .DatePicker-today-btn:only-child,\n.DatePicker .DatePicker-clear-btn:only-child {\n  margin: 0;\n}\n.DatePicker .DatePicker-clear-btn {\n  position: absolute;\n  top: 7px;\n  right: 5px;\n  display: none;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  overflow: hidden;\n  line-height: 20px;\n  text-align: center;\n  text-indent: -76px;\n}\n.DatePicker .DatePicker-clear-btn::after {\n  display: inline-block;\n  width: 20px;\n  color: #b3b3b3;\n  font-size: 15px;\n  line-height: 1;\n  text-indent: 43px;\n  transition: color 0.3s ease;\n}\n.DatePicker .DatePicker-clear-btn:hover::after {\n  color: #fff;\n}\n\n.DatePicker-decade-panel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 4px;\n  outline: none;\n}\n\n.DatePicker-decade-panel-hidden {\n  display: none;\n}\n\n.DatePicker-decade-panel-header {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-bottom: 1px solid #e8e8e8;\n  user-select: none;\n  position: relative;\n}\n.DatePicker-decade-panel-header a:hover {\n  color: #494949;\n  cursor: pointer;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-century-select,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-decade-select,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-year-select,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-select {\n  display: inline-block;\n  padding: 0 2px;\n  color: #d9d9d9;\n  font-weight: 500;\n  line-height: 40px;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-century-select-arrow,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-decade-select-arrow,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-year-select-arrow,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-select-arrow,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-year-select-arrow,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-year-panel-decade-select-arrow {\n  display: none;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-century-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-century-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-decade-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-decade-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-month-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-month-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-year-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-year-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-next-year-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-prev-year-btn {\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  padding: 0 5px;\n  color: #fff;\n  font-size: 16px;\n  font-family: Arial, \"Hiragino Sans GB\", \"Microsoft Yahei\", \"Microsoft Sans Serif\", sans-serif;\n  line-height: 40px;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-century-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-decade-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-year-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-prev-year-btn {\n  left: 7px;\n  height: 100%;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-century-btn::before, .DatePicker-decade-panel-header .DatePicker -decade-panel-prev-century-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-decade-btn::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-decade-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-year-btn::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-year-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-prev-year-btn::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-prev-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-century-btn:hover::before, .DatePicker-decade-panel-header .DatePicker -decade-panel-prev-century-btn:hover::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-decade-btn:hover::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-decade-btn:hover::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-year-btn:hover::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-year-btn:hover::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-prev-year-btn:hover::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-prev-year-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-century-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-decade-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-year-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-prev-year-btn::after {\n  display: none;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-century-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-decade-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-year-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-prev-year-btn::after {\n  position: relative;\n  left: -3px;\n  display: inline-block;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-century-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-decade-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-year-btn,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-next-year-btn {\n  right: 7px;\n  height: 100%;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-century-btn::before, .DatePicker-decade-panel-header .DatePicker -decade-panel-next-century-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-decade-btn::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-decade-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-year-btn::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-year-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-next-year-btn::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-next-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-century-btn:hover::before, .DatePicker-decade-panel-header .DatePicker -decade-panel-next-century-btn:hover::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-decade-btn:hover::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-decade-btn:hover::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-year-btn:hover::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-year-btn:hover::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-next-year-btn:hover::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-next-year-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-century-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-decade-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-year-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-next-year-btn::after {\n  display: none;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-century-btn::before, .DatePicker-decade-panel-header .DatePicker -decade-panel-next-century-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-decade-btn::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-decade-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-year-btn::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-year-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-next-year-btn::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-next-year-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-century-btn::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-decade-btn::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-year-btn::before,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-next-year-btn::before {\n  position: relative;\n  left: 3px;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-century-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-decade-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-year-btn::after,\n.DatePicker-decade-panel-header .DatePicker -decade-panel-month-panel-next-year-btn::after {\n  display: inline-block;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-month-btn {\n  left: 29px;\n  height: 100%;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-month-btn::before, .DatePicker-decade-panel-header .DatePicker -decade-panel-prev-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-month-btn:hover::before, .DatePicker-decade-panel-header .DatePicker -decade-panel-prev-month-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-prev-month-btn::after {\n  display: none;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-month-btn {\n  right: 29px;\n  height: 100%;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-month-btn::before, .DatePicker-decade-panel-header .DatePicker -decade-panel-next-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-month-btn:hover::before, .DatePicker-decade-panel-header .DatePicker -decade-panel-next-month-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-month-btn::after {\n  display: none;\n}\n.DatePicker-decade-panel-header .DatePicker -decade-panel-next-month-btn::before, .DatePicker-decade-panel-header .DatePicker -decade-panel-next-month-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n\n.DatePicker-decade-panel-body {\n  flex: 1;\n}\n\n.DatePicker-decade-panel-footer {\n  border-top: 1px solid #e8e8e8;\n}\n.DatePicker-decade-panel-footer .DatePicker-footer-extra {\n  padding: 0 12px;\n}\n\n.DatePicker-decade-panel-table {\n  width: 100%;\n  height: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n\n.DatePicker-decade-panel-cell {\n  white-space: nowrap;\n  text-align: center;\n}\n\n.DatePicker-decade-panel-decade {\n  display: inline-block;\n  height: 24px;\n  margin: 0 auto;\n  padding: 0 6px;\n  color: #333745;\n  line-height: 24px;\n  text-align: center;\n  background: transparent;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.DatePicker-decade-panel-decade:hover {\n  background: #fca4ba;\n  cursor: pointer;\n}\n\n.DatePicker-decade-panel-selected-cell .DatePicker-decade-panel-decade {\n  color: #fff;\n  background: #f9285c;\n}\n.DatePicker-decade-panel-selected-cell .DatePicker-decade-panel-decade:hover {\n  color: #fff;\n  background: #f9285c;\n}\n\n.DatePicker-decade-panel-last-century-cell .DatePicker-decade-panel-decade,\n.DatePicker-decade-panel-next-century-cell .DatePicker-decade-panel-decade {\n  color: #b3b3b3;\n  user-select: none;\n}\n\n.DatePicker-month-panel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  background: #fff;\n  border-radius: 4px;\n  outline: none;\n}\n.DatePicker-month-panel > div {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.DatePicker-month-panel-hidden {\n  display: none;\n}\n\n.DatePicker-month-panel-header {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-bottom: 1px solid #e8e8e8;\n  user-select: none;\n  position: relative;\n}\n.DatePicker-month-panel-header a:hover {\n  color: #494949;\n  cursor: pointer;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-century-select,\n.DatePicker-month-panel-header .DatePicker -month-panel-decade-select,\n.DatePicker-month-panel-header .DatePicker -month-panel-year-select,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-select {\n  display: inline-block;\n  padding: 0 2px;\n  color: #d9d9d9;\n  font-weight: 500;\n  line-height: 40px;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-century-select-arrow,\n.DatePicker-month-panel-header .DatePicker -month-panel-decade-select-arrow,\n.DatePicker-month-panel-header .DatePicker -month-panel-year-select-arrow,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-select-arrow,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-year-select-arrow,\n.DatePicker-month-panel-header .DatePicker -month-panel-year-panel-decade-select-arrow {\n  display: none;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-century-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-century-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-decade-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-decade-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-month-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-month-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-year-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-year-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-next-year-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-prev-year-btn {\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  padding: 0 5px;\n  color: #fff;\n  font-size: 16px;\n  font-family: Arial, \"Hiragino Sans GB\", \"Microsoft Yahei\", \"Microsoft Sans Serif\", sans-serif;\n  line-height: 40px;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-century-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-decade-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-year-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-prev-year-btn {\n  left: 7px;\n  height: 100%;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-century-btn::before, .DatePicker-month-panel-header .DatePicker -month-panel-prev-century-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-decade-btn::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-decade-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-year-btn::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-year-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-prev-year-btn::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-prev-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-century-btn:hover::before, .DatePicker-month-panel-header .DatePicker -month-panel-prev-century-btn:hover::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-decade-btn:hover::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-decade-btn:hover::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-year-btn:hover::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-year-btn:hover::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-prev-year-btn:hover::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-prev-year-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-century-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-decade-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-year-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-prev-year-btn::after {\n  display: none;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-century-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-decade-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-year-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-prev-year-btn::after {\n  position: relative;\n  left: -3px;\n  display: inline-block;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-next-century-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-decade-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-year-btn,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-next-year-btn {\n  right: 7px;\n  height: 100%;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-next-century-btn::before, .DatePicker-month-panel-header .DatePicker -month-panel-next-century-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-decade-btn::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-decade-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-year-btn::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-year-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-next-year-btn::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-next-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-next-century-btn:hover::before, .DatePicker-month-panel-header .DatePicker -month-panel-next-century-btn:hover::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-decade-btn:hover::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-decade-btn:hover::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-year-btn:hover::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-year-btn:hover::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-next-year-btn:hover::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-next-year-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-next-century-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-decade-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-year-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-next-year-btn::after {\n  display: none;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-next-century-btn::before, .DatePicker-month-panel-header .DatePicker -month-panel-next-century-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-decade-btn::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-decade-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-year-btn::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-year-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-next-year-btn::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-next-year-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-next-century-btn::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-decade-btn::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-year-btn::before,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-next-year-btn::before {\n  position: relative;\n  left: 3px;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-next-century-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-decade-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-next-year-btn::after,\n.DatePicker-month-panel-header .DatePicker -month-panel-month-panel-next-year-btn::after {\n  display: inline-block;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-month-btn {\n  left: 29px;\n  height: 100%;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-month-btn::before, .DatePicker-month-panel-header .DatePicker -month-panel-prev-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-month-btn:hover::before, .DatePicker-month-panel-header .DatePicker -month-panel-prev-month-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-prev-month-btn::after {\n  display: none;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-next-month-btn {\n  right: 29px;\n  height: 100%;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-next-month-btn::before, .DatePicker-month-panel-header .DatePicker -month-panel-next-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-next-month-btn:hover::before, .DatePicker-month-panel-header .DatePicker -month-panel-next-month-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-next-month-btn::after {\n  display: none;\n}\n.DatePicker-month-panel-header .DatePicker -month-panel-next-month-btn::before, .DatePicker-month-panel-header .DatePicker -month-panel-next-month-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n\n.DatePicker-month-panel-body {\n  flex: 1;\n}\n\n.DatePicker-month-panel-footer {\n  border-top: 1px solid #e8e8e8;\n}\n.DatePicker-month-panel-footer .DatePicker-footer-extra {\n  padding: 0 12px;\n}\n\n.DatePicker-month-panel-table {\n  width: 100%;\n  height: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n\n.DatePicker-month-panel-selected-cell .DatePicker-month-panel-month {\n  color: #fff;\n  background: #f9285c;\n}\n.DatePicker-month-panel-selected-cell .DatePicker-month-panel-month:hover {\n  color: #fff;\n  background: #f9285c;\n}\n\n.DatePicker-month-panel-cell {\n  text-align: center;\n}\n.DatePicker-month-panel-cell-disabled .DatePicker-month-panel-month, .DatePicker-month-panel-cell-disabled .DatePicker-month-panel-month:hover {\n  color: #b3b3b3;\n  background: #e8e8e8;\n  cursor: not-allowed;\n}\n\n.DatePicker-month-panel-month {\n  display: inline-block;\n  height: 24px;\n  margin: 0 auto;\n  padding: 0 8px;\n  color: #333745;\n  line-height: 24px;\n  text-align: center;\n  background: transparent;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.DatePicker-month-panel-month:hover {\n  background: #fca4ba;\n  cursor: pointer;\n}\n\n.DatePicker-month .DatePicker-month-header-wrap {\n  position: relative;\n  height: 288px;\n}\n.DatePicker-month .DatePicker-month-panel,\n.DatePicker-month .DatePicker-year-panel {\n  top: 0;\n  height: 100%;\n}\n\n.DatePicker-picker-container {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: #333745;\n  font-size: 15px;\n  font-variant: font-variant-base;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: \"tnum\";\n  position: absolute;\n  z-index: 1050;\n}\n.DatePicker-picker-container.slide-up-enter.slide-up-enter-active.DatePicker-picker-container-placement-topLeft, .DatePicker-picker-container.slide-up-enter.slide-up-enter-active.DatePicker-picker-container-placement-topRight, .DatePicker-picker-container.slide-up-appear.slide-up-appear-active.DatePicker-picker-container-placement-topLeft, .DatePicker-picker-container.slide-up-appear.slide-up-appear-active.DatePicker-picker-container-placement-topRight {\n  animation-name: antSlideDownIn;\n}\n.DatePicker-picker-container.slide-up-enter.slide-up-enter-active.DatePicker-picker-container-placement-bottomLeft, .DatePicker-picker-container.slide-up-enter.slide-up-enter-active.DatePicker-picker-container-placement-bottomRight, .DatePicker-picker-container.slide-up-appear.slide-up-appear-active.DatePicker-picker-container-placement-bottomLeft, .DatePicker-picker-container.slide-up-appear.slide-up-appear-active.DatePicker-picker-container-placement-bottomRight {\n  animation-name: antSlideUpIn;\n}\n.DatePicker-picker-container.slide-up-leave.slide-up-leave-active.DatePicker-picker-container-placement-topLeft, .DatePicker-picker-container.slide-up-leave.slide-up-leave-active.DatePicker-picker-container-placement-topRight {\n  animation-name: antSlideDownOut;\n}\n.DatePicker-picker-container.slide-up-leave.slide-up-leave-active.DatePicker-picker-container-placement-bottomLeft, .DatePicker-picker-container.slide-up-leave.slide-up-leave-active.DatePicker-picker-container-placement-bottomRight {\n  animation-name: antSlideUpOut;\n}\n\n.DatePicker-picker {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  line-height: 1.5;\n  position: relative;\n  display: inline-block;\n  outline: none;\n  cursor: text;\n  transition: opacity 0.3s;\n}\n.DatePicker-picker-input {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 40px;\n  padding: 4px 11px;\n  font-size: 14px;\n  line-height: 1.5;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n.DatePicker-picker-input-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n  opacity: 1;\n}\n.DatePicker-picker-clear, .DatePicker-picker-icon {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  width: 14px;\n  height: 14px;\n  margin-top: -7px;\n  font-size: 12px;\n  line-height: 14px;\n  transition: all 0.3s;\n  user-select: none;\n}\n.DatePicker-picker-clear {\n  color: #b3b3b3;\n  font-size: 15px;\n  background: #fff;\n  cursor: pointer;\n  opacity: 0;\n  pointer-events: none;\n}\n.DatePicker-picker:hover .DatePicker-picker-clear {\n  opacity: 1;\n  pointer-events: auto;\n}\n.DatePicker-picker-icon {\n  display: inline-block;\n  color: #b3b3b3;\n  font-size: 14px;\n  line-height: 1;\n}\n.DatePicker-range-picker-input {\n  width: 44%;\n  height: 99%;\n  text-align: center;\n  background-color: transparent;\n  border: 0;\n  outline: 0;\n}\n.DatePicker-range-picker-input[disabled] {\n  cursor: not-allowed;\n}\n\n.DatePicker-range-picker-separator {\n  display: inline-block;\n  min-width: 10px;\n  height: 100%;\n  color: #fff;\n  white-space: nowrap;\n  text-align: center;\n  vertical-align: top;\n  pointer-events: none;\n}\n\n.DatePicker-range {\n  width: 552px;\n  overflow: hidden;\n}\n.DatePicker-range .DatePicker-date-panel::after {\n  display: block;\n  clear: both;\n  height: 0;\n  visibility: hidden;\n  content: \".\";\n}\n.DatePicker-range-part {\n  position: relative;\n  width: 50%;\n}\n.DatePicker-range-left {\n  float: left;\n}\n.DatePicker-range-left .DatePicker-time-picker-inner {\n  border-right: 1px solid #e8e8e8;\n}\n.DatePicker-range-right {\n  float: right;\n}\n.DatePicker-range-right .DatePicker-time-picker-inner {\n  border-left: 1px solid #e8e8e8;\n}\n.DatePicker-range-middle {\n  position: absolute;\n  left: 50%;\n  z-index: 1;\n  height: 34px;\n  margin: 1px 0 0 0;\n  padding: 0 200px 0 0;\n  color: #fff;\n  line-height: 34px;\n  text-align: center;\n  transform: translateX(-50%);\n  pointer-events: none;\n}\n.DatePicker-range-right .DatePicker-date-input-wrap {\n  margin-left: -90px;\n}\n.DatePicker-range.DatePicker-time .DatePicker-range-middle {\n  padding: 0 10px 0 0;\n  transform: translateX(-50%);\n}\n.DatePicker-range .DatePicker-today :not(.DatePicker-disabled-cell) :not(.DatePicker-last-month-cell) :not(.DatePicker-next-month-btn-day) .DatePicker-date {\n  color: #f9285c;\n  background: #f9285c;\n  border-color: #f9285c;\n}\n.DatePicker-range .DatePicker-selected-start-date .DatePicker-date,\n.DatePicker-range .DatePicker-selected-end-date .DatePicker-date {\n  color: #fff;\n  background: #f9285c;\n  border: 1px solid transparent;\n}\n.DatePicker-range .DatePicker-selected-start-date .DatePicker-date:hover,\n.DatePicker-range .DatePicker-selected-end-date .DatePicker-date:hover {\n  background: #f9285c;\n}\n.DatePicker-range.DatePicker-time .DatePicker-range-right .DatePicker-date-input-wrap {\n  margin-left: 0;\n}\n.DatePicker-range .DatePicker-input-wrap {\n  position: relative;\n  height: 34px;\n}\n.DatePicker-range .DatePicker-input,\n.DatePicker-range .DatePicker-time-picker-input {\n  padding-right: 0;\n  padding-left: 0;\n  border: 0;\n  box-shadow: none;\n}\n.DatePicker-range .DatePicker-input:focus,\n.DatePicker-range .DatePicker-time-picker-input:focus {\n  box-shadow: none;\n}\n.DatePicker-range .DatePicker-time-picker-icon {\n  display: none;\n}\n.DatePicker-range.DatePicker-week-number {\n  width: 574px;\n}\n.DatePicker-range.DatePicker-week-number .DatePicker-range-part {\n  width: 286px;\n}\n.DatePicker-range .DatePicker-year-panel,\n.DatePicker-range .DatePicker-month-panel,\n.DatePicker-range .DatePicker-decade-panel {\n  top: 34px;\n}\n.DatePicker-range .DatePicker-month-panel .DatePicker-year-panel {\n  top: 0;\n}\n.DatePicker-range .DatePicker-decade-panel-table,\n.DatePicker-range .DatePicker-year-panel-table,\n.DatePicker-range .DatePicker-month-panel-table {\n  height: 208px;\n}\n.DatePicker-range .DatePicker-in-range-cell {\n  position: relative;\n  border-radius: 0;\n}\n.DatePicker-range .DatePicker-in-range-cell > div {\n  position: relative;\n  z-index: 1;\n}\n.DatePicker-range .DatePicker-in-range-cell::before {\n  position: absolute;\n  top: 4px;\n  right: 0;\n  bottom: 4px;\n  left: 0;\n  display: block;\n  background: #f9285c;\n  border: 0;\n  border-radius: 0;\n  content: \"\";\n}\n.DatePicker-range .DatePicker-footer-extra {\n  float: left;\n}\n.DatePicker-range div.DatePicker-range-quick-selector {\n  text-align: left;\n}\n.DatePicker-range div.DatePicker-range-quick-selector > a {\n  margin-right: 8px;\n}\n.DatePicker-range .DatePicker-header,\n.DatePicker-range .DatePicker-month-panel-header,\n.DatePicker-range .DatePicker-year-panel-header,\n.DatePicker-range .DatePicker-decade-panel-header {\n  border-bottom: 0;\n}\n.DatePicker-range .DatePicker-body,\n.DatePicker-range .DatePicker-month-panel-body,\n.DatePicker-range .DatePicker-year-panel-body,\n.DatePicker-range .DatePicker-decade-panel-body {\n  border-top: 1px solid #e8e8e8;\n}\n.DatePicker-range.DatePicker-time .DatePicker-time-picker {\n  top: 68px;\n  z-index: 2;\n  width: 100%;\n  height: 207px;\n}\n.DatePicker-range.DatePicker-time .DatePicker-time-picker-panel {\n  height: 267px;\n  margin-top: -34px;\n}\n.DatePicker-range.DatePicker-time .DatePicker-time-picker-inner {\n  height: 100%;\n  padding-top: 40px;\n  background: none;\n}\n.DatePicker-range.DatePicker-time .DatePicker-time-picker-combobox {\n  display: inline-block;\n  height: 100%;\n  background-color: #fff;\n  border-top: 1px solid #e8e8e8;\n}\n.DatePicker-range.DatePicker-time .DatePicker-time-picker-select {\n  height: 100%;\n}\n.DatePicker-range.DatePicker-time .DatePicker-time-picker-select ul {\n  max-height: 100%;\n}\n.DatePicker-range.DatePicker-time .DatePicker-footer .DatePicker-time-picker-btn {\n  margin-right: 8px;\n}\n.DatePicker-range.DatePicker-time .DatePicker-today-btn {\n  height: 22px;\n  margin: 8px 12px;\n  line-height: 22px;\n}\n.DatePicker-range-with-ranges.DatePicker-time .DatePicker-time-picker {\n  height: 233px;\n}\n\n.DatePicker-range.DatePicker-show-time-picker .DatePicker-body {\n  border-top-color: transparent;\n}\n\n.DatePicker-time-picker {\n  position: absolute;\n  top: 40px;\n  width: 100%;\n  background-color: #fff;\n}\n.DatePicker-time-picker-panel {\n  position: absolute;\n  z-index: 1050;\n  width: 100%;\n}\n.DatePicker-time-picker-inner {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  font-size: 15px;\n  line-height: 1.5;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  outline: none;\n}\n.DatePicker-time-picker-combobox {\n  width: 100%;\n}\n.DatePicker-time-picker-column-1, .DatePicker-time-picker-column-1 .DatePicker-time-picker-select {\n  width: 100%;\n}\n.DatePicker-time-picker-column-2 .DatePicker-time-picker-select {\n  width: 50%;\n}\n.DatePicker-time-picker-column-3 .DatePicker-time-picker-select {\n  width: 33.33%;\n}\n.DatePicker-time-picker-column-4 .DatePicker-time-picker-select {\n  width: 25%;\n}\n.DatePicker-time-picker-input-wrap {\n  display: none;\n}\n.DatePicker-time-picker-select {\n  position: relative;\n  float: left;\n  height: 226px;\n  overflow: hidden;\n  font-size: 15px;\n  border-right: 1px solid #e8e8e8;\n}\n.DatePicker-time-picker-select:hover {\n  overflow-y: auto;\n}\n.DatePicker-time-picker-select:first-child {\n  margin-left: 0;\n  border-left: 0;\n}\n.DatePicker-time-picker-select:last-child {\n  border-right: 0;\n}\n.DatePicker-time-picker-select ul {\n  width: 100%;\n  max-height: 206px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.DatePicker-time-picker-select li {\n  width: 100%;\n  height: 24px;\n  margin: 0;\n  line-height: 24px;\n  text-align: center;\n  list-style: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  user-select: none;\n}\n.DatePicker-time-picker-select li:last-child::after {\n  display: block;\n  height: 202px;\n  content: \"\";\n}\n.DatePicker-time-picker-select li:hover {\n  background: #fca4ba;\n  color: #fff;\n}\n.DatePicker-time-picker-select li:focus {\n  color: #f9285c;\n  font-weight: 600;\n  outline: none;\n}\n.DatePicker-time-picker-select li.DatePicker-time-picker-select-option-selected {\n  font-weight: 600;\n  background: whitesmoke;\n}\n.DatePicker-time-picker-select li.DatePicker-time-picker-select-option-disabled {\n  color: #b3b3b3;\n}\n.DatePicker-time-picker-select li.DatePicker-time-picker-select-option-disabled:hover {\n  background: transparent;\n  cursor: not-allowed;\n}\n\n.DatePicker-time .DatePicker-day-select {\n  display: inline-block;\n  padding: 0 2px;\n  color: #d9d9d9;\n  font-weight: 500;\n  line-height: 34px;\n}\n.DatePicker-time .DatePicker-footer {\n  position: relative;\n  height: auto;\n}\n.DatePicker-time .DatePicker-footer-btn {\n  text-align: right;\n}\n.DatePicker-time .DatePicker-footer .DatePicker-today-btn {\n  float: left;\n  margin: 0;\n}\n.DatePicker-time .DatePicker-footer .DatePicker-time-picker-btn {\n  display: inline-block;\n  margin-right: 8px;\n}\n.DatePicker-time .DatePicker-footer .DatePicker-time-picker-btn-disabled {\n  color: #b3b3b3;\n}\n\n.DatePicker-week-number-cell {\n  opacity: 0.5;\n}\n.DatePicker-week-number .DatePicker-body tr {\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.DatePicker-week-number .DatePicker-body tr:hover {\n  background: #fca4ba;\n}\n.DatePicker-week-number .DatePicker-body tr.DatePicker-active-week {\n  font-weight: bold;\n  background: #f9285c;\n}\n.DatePicker-week-number .DatePicker-body tr .DatePicker-selected-day .DatePicker-date,\n.DatePicker-week-number .DatePicker-body tr .DatePicker-selected-day:hover .DatePicker-date {\n  color: #333745;\n  background: transparent;\n}\n\n.DatePicker-year-panel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  background: #fff;\n  border-radius: 4px;\n  outline: none;\n}\n.DatePicker-year-panel > div {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.DatePicker-year-panel-hidden {\n  display: none;\n}\n\n.DatePicker-year-panel-header {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-bottom: 1px solid #e8e8e8;\n  user-select: none;\n  position: relative;\n}\n.DatePicker-year-panel-header a:hover {\n  color: #494949;\n  cursor: pointer;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-century-select,\n.DatePicker-year-panel-header .DatePicker -year-panel-decade-select,\n.DatePicker-year-panel-header .DatePicker -year-panel-year-select,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-select {\n  display: inline-block;\n  padding: 0 2px;\n  color: #d9d9d9;\n  font-weight: 500;\n  line-height: 40px;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-century-select-arrow,\n.DatePicker-year-panel-header .DatePicker -year-panel-decade-select-arrow,\n.DatePicker-year-panel-header .DatePicker -year-panel-year-select-arrow,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-select-arrow,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-year-select-arrow,\n.DatePicker-year-panel-header .DatePicker -year-panel-year-panel-decade-select-arrow {\n  display: none;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-century-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-century-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-decade-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-decade-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-month-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-month-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-year-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-year-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-next-year-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-prev-year-btn {\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  padding: 0 5px;\n  color: #fff;\n  font-size: 16px;\n  font-family: Arial, \"Hiragino Sans GB\", \"Microsoft Yahei\", \"Microsoft Sans Serif\", sans-serif;\n  line-height: 40px;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-century-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-decade-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-year-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-prev-year-btn {\n  left: 7px;\n  height: 100%;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-century-btn::before, .DatePicker-year-panel-header .DatePicker -year-panel-prev-century-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-decade-btn::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-decade-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-year-btn::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-year-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-prev-year-btn::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-prev-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-century-btn:hover::before, .DatePicker-year-panel-header .DatePicker -year-panel-prev-century-btn:hover::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-decade-btn:hover::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-decade-btn:hover::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-year-btn:hover::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-year-btn:hover::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-prev-year-btn:hover::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-prev-year-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-century-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-decade-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-year-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-prev-year-btn::after {\n  display: none;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-century-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-decade-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-year-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-prev-year-btn::after {\n  position: relative;\n  left: -3px;\n  display: inline-block;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-next-century-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-decade-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-year-btn,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-next-year-btn {\n  right: 7px;\n  height: 100%;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-next-century-btn::before, .DatePicker-year-panel-header .DatePicker -year-panel-next-century-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-decade-btn::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-decade-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-year-btn::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-year-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-next-year-btn::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-next-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-next-century-btn:hover::before, .DatePicker-year-panel-header .DatePicker -year-panel-next-century-btn:hover::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-decade-btn:hover::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-decade-btn:hover::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-year-btn:hover::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-year-btn:hover::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-next-year-btn:hover::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-next-year-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-next-century-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-decade-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-year-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-next-year-btn::after {\n  display: none;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-next-century-btn::before, .DatePicker-year-panel-header .DatePicker -year-panel-next-century-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-decade-btn::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-decade-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-year-btn::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-year-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-next-year-btn::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-next-year-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-next-century-btn::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-decade-btn::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-year-btn::before,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-next-year-btn::before {\n  position: relative;\n  left: 3px;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-next-century-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-decade-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-next-year-btn::after,\n.DatePicker-year-panel-header .DatePicker -year-panel-month-panel-next-year-btn::after {\n  display: inline-block;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-month-btn {\n  left: 29px;\n  height: 100%;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-month-btn::before, .DatePicker-year-panel-header .DatePicker -year-panel-prev-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-month-btn:hover::before, .DatePicker-year-panel-header .DatePicker -year-panel-prev-month-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-prev-month-btn::after {\n  display: none;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-next-month-btn {\n  right: 29px;\n  height: 100%;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-next-month-btn::before, .DatePicker-year-panel-header .DatePicker -year-panel-next-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: \"\";\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-next-month-btn:hover::before, .DatePicker-year-panel-header .DatePicker -year-panel-next-month-btn:hover::after {\n  border-color: #333745;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-next-month-btn::after {\n  display: none;\n}\n.DatePicker-year-panel-header .DatePicker -year-panel-next-month-btn::before, .DatePicker-year-panel-header .DatePicker -year-panel-next-month-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n\n.DatePicker-year-panel-body {\n  flex: 1;\n}\n\n.DatePicker-year-panel-footer {\n  border-top: 1px solid #e8e8e8;\n}\n.DatePicker-year-panel-footer .DatePicker-footer-extra {\n  padding: 0 12px;\n}\n\n.DatePicker-year-panel-table {\n  width: 100%;\n  height: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n\n.DatePicker-year-panel-cell {\n  text-align: center;\n}\n\n.DatePicker-year-panel-year {\n  display: inline-block;\n  height: 24px;\n  margin: 0 auto;\n  padding: 0 8px;\n  color: #333745;\n  line-height: 24px;\n  text-align: center;\n  background: transparent;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.DatePicker-year-panel-year:hover {\n  background: #fca4ba;\n  cursor: pointer;\n}\n\n.DatePicker-year-panel-selected-cell .DatePicker-year-panel-year {\n  color: #fff;\n  background: #f9285c;\n}\n.DatePicker-year-panel-selected-cell .DatePicker-year-panel-year:hover {\n  color: #fff;\n  background: #f9285c;\n}\n\n.DatePicker-year-panel-last-decade-cell .DatePicker-year-panel-year,\n.DatePicker-year-panel-next-decade-cell .DatePicker-year-panel-year {\n  color: #b3b3b3;\n  user-select: none;\n}");

    var DatePicker = WrapPicker(createPicker(Calendar), 'date');
    var MonthPicker = WrapPicker(createPicker(MonthCalendar), 'month');
    Object.assign(DatePicker, {
        RangePicker: WrapPicker(RangePicker, 'date'),
        MonthPicker: MonthPicker,
        WeekPicker: WrapPicker(WeekPicker, 'week'),
    });

    ___$insertStyle(".Richtext {\n  border: 1px solid #bbb;\n  padding: 10px;\n  border-radius: 4px;\n}\n.Richtext__required {\n  color: red;\n}\n.Richtext trix-toolbar .trix-button-row {\n  flex-wrap: wrap;\n}\n.Richtext trix-toolbar .trix-button-group:not(:first-child) {\n  margin-left: 0;\n}\n.Richtext__label {\n  font-weight: bold;\n  margin-bottom: 15px;\n  display: block;\n}\n.Richtext--error {\n  border-color: red;\n}\n.Richtext--error .Richtext__label {\n  color: red;\n}\n.Richtext__error-message {\n  color: red;\n  font-size: 11px;\n  margin-top: 10px;\n  text-transform: none;\n}\n.Richtext__error-message::first-letter {\n  text-transform: capitalize;\n}");

    var trix = createCommonjsModule(function (module) {
    /*
    Trix 1.2.2
    Copyright © 2019 Basecamp, LLC
    http://trix-editor.org/
     */
    (function(){}).call(commonjsGlobal),function(){var t;null==window.Set&&(window.Set=t=function(){function t(){this.clear();}return t.prototype.clear=function(){return this.values=[]},t.prototype.has=function(t){return -1!==this.values.indexOf(t)},t.prototype.add=function(t){return this.has(t)||this.values.push(t),this},t.prototype["delete"]=function(t){var e;return -1===(e=this.values.indexOf(t))?!1:(this.values.splice(e,1),!0)},t.prototype.forEach=function(){var t;return (t=this.values).forEach.apply(t,arguments)},t}());}.call(commonjsGlobal),function(t){function e(){}function n(t,e){return function(){t.apply(e,arguments);}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(t,this);}function o(t,e){for(;3===t._state;)t=t._value;return 0===t._state?void t._deferreds.push(e):(t._handled=!0,void h(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?r:s)(e.promise,t._value);var i;try{i=n(t._value);}catch(o){return void s(e.promise,o)}r(e.promise,i);}))}function r(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var o=e.then;if(e instanceof i)return t._state=3,t._value=e,void a(t);if("function"==typeof o)return void c(n(o,e),t)}t._state=1,t._value=e,a(t);}catch(r){s(t,r);}}function s(t,e){t._state=2,t._value=e,a(t);}function a(t){2===t._state&&0===t._deferreds.length&&setTimeout(function(){t._handled||p(t._value);},1);for(var e=0,n=t._deferreds.length;n>e;e++)o(t,t._deferreds[e]);t._deferreds=null;}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n;}function c(t,e){var n=!1;try{t(function(t){n||(n=!0,r(e,t));},function(t){n||(n=!0,s(e,t));});}catch(i){if(n)return;n=!0,s(e,i);}}var l=setTimeout,h="function"==typeof setImmediate&&setImmediate||function(t){l(t,1);},p=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t);};i.prototype["catch"]=function(t){return this.then(null,t)},i.prototype.then=function(t,n){var r=new i(e);return o(this,new u(t,n,r)),r},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function i(r,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){i(r,t);},n)}e[r]=s,0===--o&&t(e);}catch(u){n(u);}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)i(r,e[r]);})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t);})},i.reject=function(t){return new i(function(e,n){n(t);})},i.race=function(t){return new i(function(e,n){for(var i=0,o=t.length;o>i;i++)t[i].then(e,n);})},i._setImmediateFn=function(t){h=t;},i._setUnhandledRejectionFn=function(t){p=t;},module.exports?module.exports=i:t.Promise||(t.Promise=i);}(commonjsGlobal),function(){var t="object"==typeof window.customElements,e="function"==typeof document.registerElement,n=t||e;n||(/**
     * @license
     * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    "undefined"==typeof WeakMap&&!function(){var t=Object.defineProperty,e=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(e++ +"__");};n.prototype={set:function(e,n){var i=e[this.name];return i&&i[0]===e?i[1]=n:t(e,this.name,{value:[e,n],writable:!0}),this},get:function(t){var e;return (e=t[this.name])&&e[0]===t?e[1]:void 0},"delete":function(t){var e=t[this.name];return e&&e[0]===t?(e[0]=e[1]=void 0,!0):!1},has:function(t){var e=t[this.name];return e?e[0]===t:!1}},window.WeakMap=n;}(),function(t){function e(t){A.push(t),b||(b=!0,g(i));}function n(t){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(t)||t}function i(){b=!1;var t=A;A=[],t.sort(function(t,e){return t.uid_-e.uid_});var e=!1;t.forEach(function(t){var n=t.takeRecords();o(t),n.length&&(t.callback_(n,t),e=!0);}),e&&i();}function o(t){t.nodes_.forEach(function(e){var n=m.get(e);n&&n.forEach(function(e){e.observer===t&&e.removeTransientObservers();});});}function r(t,e){for(var n=t;n;n=n.parentNode){var i=m.get(n);if(i)for(var o=0;o<i.length;o++){var r=i[o],s=r.options;if(n===t||s.subtree){var a=e(s);a&&r.enqueue(a);}}}}function s(t){this.callback_=t,this.nodes_=[],this.records_=[],this.uid_=++C;}function a(t,e){this.type=t,this.target=e,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null;}function u(t){var e=new a(t.type,t.target);return e.addedNodes=t.addedNodes.slice(),e.removedNodes=t.removedNodes.slice(),e.previousSibling=t.previousSibling,e.nextSibling=t.nextSibling,e.attributeName=t.attributeName,e.attributeNamespace=t.attributeNamespace,e.oldValue=t.oldValue,e}function c(t,e){return x=new a(t,e)}function l(t){return w?w:(w=u(x),w.oldValue=t,w)}function h(){x=w=void 0;}function p(t){return t===w||t===x}function d(t,e){return t===e?t:w&&p(t)?w:null}function f(t,e,n){this.observer=t,this.target=e,this.options=n,this.transientObservedNodes=[];}if(!t.JsMutationObserver){var g,m=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))g=setTimeout;else if(window.setImmediate)g=window.setImmediate;else{var v=[],y=String(Math.random());window.addEventListener("message",function(t){if(t.data===y){var e=v;v=[],e.forEach(function(t){t();});}}),g=function(t){v.push(t),window.postMessage(y,"*");};}var b=!1,A=[],C=0;s.prototype={observe:function(t,e){if(t=n(t),!e.childList&&!e.attributes&&!e.characterData||e.attributeOldValue&&!e.attributes||e.attributeFilter&&e.attributeFilter.length&&!e.attributes||e.characterDataOldValue&&!e.characterData)throw new SyntaxError;var i=m.get(t);i||m.set(t,i=[]);for(var o,r=0;r<i.length;r++)if(i[r].observer===this){o=i[r],o.removeListeners(),o.options=e;break}o||(o=new f(this,t,e),i.push(o),this.nodes_.push(t)),o.addListeners();},disconnect:function(){this.nodes_.forEach(function(t){for(var e=m.get(t),n=0;n<e.length;n++){var i=e[n];if(i.observer===this){i.removeListeners(),e.splice(n,1);break}}},this),this.records_=[];},takeRecords:function(){var t=this.records_;return this.records_=[],t}};var x,w;f.prototype={enqueue:function(t){var n=this.observer.records_,i=n.length;if(n.length>0){var o=n[i-1],r=d(o,t);if(r)return void(n[i-1]=r)}else e(this.observer);n[i]=t;},addListeners:function(){this.addListeners_(this.target);},addListeners_:function(t){var e=this.options;e.attributes&&t.addEventListener("DOMAttrModified",this,!0),e.characterData&&t.addEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.addEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.addEventListener("DOMNodeRemoved",this,!0);},removeListeners:function(){this.removeListeners_(this.target);},removeListeners_:function(t){var e=this.options;e.attributes&&t.removeEventListener("DOMAttrModified",this,!0),e.characterData&&t.removeEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.removeEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.removeEventListener("DOMNodeRemoved",this,!0);},addTransientObserver:function(t){if(t!==this.target){this.addListeners_(t),this.transientObservedNodes.push(t);var e=m.get(t);e||m.set(t,e=[]),e.push(this);}},removeTransientObservers:function(){var t=this.transientObservedNodes;this.transientObservedNodes=[],t.forEach(function(t){this.removeListeners_(t);for(var e=m.get(t),n=0;n<e.length;n++)if(e[n]===this){e.splice(n,1);break}},this);},handleEvent:function(t){switch(t.stopImmediatePropagation(),t.type){case"DOMAttrModified":var e=t.attrName,n=t.relatedNode.namespaceURI,i=t.target,o=new c("attributes",i);o.attributeName=e,o.attributeNamespace=n;var s=t.attrChange===MutationEvent.ADDITION?null:t.prevValue;r(i,function(t){return !t.attributes||t.attributeFilter&&t.attributeFilter.length&&-1===t.attributeFilter.indexOf(e)&&-1===t.attributeFilter.indexOf(n)?void 0:t.attributeOldValue?l(s):o});break;case"DOMCharacterDataModified":var i=t.target,o=c("characterData",i),s=t.prevValue;r(i,function(t){return t.characterData?t.characterDataOldValue?l(s):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(t.target);case"DOMNodeInserted":var a,u,p=t.target;"DOMNodeInserted"===t.type?(a=[p],u=[]):(a=[],u=[p]);var d=p.previousSibling,f=p.nextSibling,o=c("childList",t.target.parentNode);o.addedNodes=a,o.removedNodes=u,o.previousSibling=d,o.nextSibling=f,r(t.relatedNode,function(t){return t.childList?o:void 0});}h();}},t.JsMutationObserver=s,t.MutationObserver||(t.MutationObserver=s,s._isPolyfilled=!0);}}(self),function(){if(!window.performance||!window.performance.now){var t=Date.now();window.performance={now:function(){return Date.now()-t}};}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var t=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return t?function(e){return t(function(){e(performance.now());})}:function(t){return window.setTimeout(t,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t);}}());var e=function(){var t=document.createEvent("Event");return t.initEvent("foo",!0,!0),t.preventDefault(),t.defaultPrevented}();if(!e){var n=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(n.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return !0},configurable:!0}));};}var i=/Trident/.test(navigator.userAgent);if((!window.CustomEvent||i&&"function"!=typeof window.CustomEvent)&&(window.CustomEvent=function(t,e){e=e||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,Boolean(e.bubbles),Boolean(e.cancelable),e.detail),n},window.CustomEvent.prototype=window.Event.prototype),!window.Event||i&&"function"!=typeof window.Event){var o=window.Event;window.Event=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),n},window.Event.prototype=o.prototype;}}(),window.CustomElements=window.CustomElements||{flags:{}},function(t){var e=t.flags,n=[],i=function(t){n.push(t);},o=function(){n.forEach(function(e){e(t);});};t.addModule=i,t.initializeModules=o,t.hasNative=Boolean(document.registerElement),t.isIE=/Trident/.test(navigator.userAgent),t.useNative=!e.register&&t.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||window.HTMLImports.useNative);}(window.CustomElements),window.CustomElements.addModule(function(t){function e(t,e){n(t,function(t){return e(t)?!0:void i(t,e)}),i(t,e);}function n(t,e,i){var o=t.firstElementChild;if(!o)for(o=t.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)e(o,i)!==!0&&n(o,e,i),o=o.nextElementSibling;return null}function i(t,n){for(var i=t.shadowRoot;i;)e(i,n),i=i.olderShadowRoot;}function o(t,e){r(t,e,[]);}function r(t,e,n){if(t=window.wrap(t),!(n.indexOf(t)>=0)){n.push(t);for(var i,o=t.querySelectorAll("link[rel="+s+"]"),a=0,u=o.length;u>a&&(i=o[a]);a++)i.import&&r(i.import,e,n);e(t);}}var s=window.HTMLImports?window.HTMLImports.IMPORT_LINK_TYPE:"none";t.forDocumentTree=o,t.forSubtree=e;}),window.CustomElements.addModule(function(t){function e(t,e){return n(t,e)||i(t,e)}function n(e,n){return t.upgrade(e,n)?!0:void(n&&s(e))}function i(t,e){b(t,function(t){return n(t,e)?!0:void 0});}function o(t){w.push(t),x||(x=!0,setTimeout(r));}function r(){x=!1;for(var t,e=w,n=0,i=e.length;i>n&&(t=e[n]);n++)t();w=[];}function s(t){C?o(function(){a(t);}):a(t);}function a(t){t.__upgraded__&&!t.__attached&&(t.__attached=!0,t.attachedCallback&&t.attachedCallback());}function u(t){c(t),b(t,function(t){c(t);});}function c(t){C?o(function(){l(t);}):l(t);}function l(t){t.__upgraded__&&t.__attached&&(t.__attached=!1,t.detachedCallback&&t.detachedCallback());}function h(t){for(var e=t,n=window.wrap(document);e;){if(e==n)return !0;e=e.parentNode||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host;}}function p(t){if(t.shadowRoot&&!t.shadowRoot.__watched){y.dom&&console.log("watching shadow-root for: ",t.localName);for(var e=t.shadowRoot;e;)g(e),e=e.olderShadowRoot;}}function d(t,n){if(y.dom){var i=n[0];if(i&&"childList"===i.type&&i.addedNodes&&i.addedNodes){for(var o=i.addedNodes[0];o&&o!==document&&!o.host;)o=o.parentNode;var r=o&&(o.URL||o._URL||o.host&&o.host.localName)||"";r=r.split("/?").shift().split("/").pop();}console.group("mutations (%d) [%s]",n.length,r||"");}var s=h(t);n.forEach(function(t){"childList"===t.type&&(E(t.addedNodes,function(t){t.localName&&e(t,s);}),E(t.removedNodes,function(t){t.localName&&u(t);}));}),y.dom&&console.groupEnd();}function f(t){for(t=window.wrap(t),t||(t=window.wrap(document));t.parentNode;)t=t.parentNode;var e=t.__observer;e&&(d(t,e.takeRecords()),r());}function g(t){if(!t.__observer){var e=new MutationObserver(d.bind(this,t));e.observe(t,{childList:!0,subtree:!0}),t.__observer=e;}}function m(t){t=window.wrap(t),y.dom&&console.group("upgradeDocument: ",t.baseURI.split("/").pop());var n=t===window.wrap(document);e(t,n),g(t),y.dom&&console.groupEnd();}function v(t){A(t,m);}var y=t.flags,b=t.forSubtree,A=t.forDocumentTree,C=window.MutationObserver._isPolyfilled&&y["throttle-attached"];t.hasPolyfillMutations=C,t.hasThrottledAttached=C;var x=!1,w=[],E=Array.prototype.forEach.call.bind(Array.prototype.forEach),S=Element.prototype.createShadowRoot;S&&(Element.prototype.createShadowRoot=function(){var t=S.call(this);return window.CustomElements.watchShadow(this),t}),t.watchShadow=p,t.upgradeDocumentTree=v,t.upgradeDocument=m,t.upgradeSubtree=i,t.upgradeAll=e,t.attached=s,t.takeRecords=f;}),window.CustomElements.addModule(function(t){function e(e,i){if("template"===e.localName&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),!e.__upgraded__&&e.nodeType===Node.ELEMENT_NODE){var o=e.getAttribute("is"),r=t.getRegisteredDefinition(e.localName)||t.getRegisteredDefinition(o);if(r&&(o&&r.tag==e.localName||!o&&!r.extends))return n(e,r,i)}}function n(e,n,o){return s.upgrade&&console.group("upgrade:",e.localName),n.is&&e.setAttribute("is",n.is),i(e,n),e.__upgraded__=!0,r(e),o&&t.attached(e),t.upgradeSubtree(e,o),s.upgrade&&console.groupEnd(),e}function i(t,e){Object.__proto__?t.__proto__=e.prototype:(o(t,e.prototype,e.native),t.__proto__=e.prototype);}function o(t,e,n){for(var i={},o=e;o!==n&&o!==HTMLElement.prototype;){for(var r,s=Object.getOwnPropertyNames(o),a=0;r=s[a];a++)i[r]||(Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r)),i[r]=1);o=Object.getPrototypeOf(o);}}function r(t){t.createdCallback&&t.createdCallback();}var s=t.flags;t.upgrade=e,t.upgradeWithDefinition=n,t.implementPrototype=i;}),window.CustomElements.addModule(function(t){function e(e,i){var u=i||{};if(!e)throw new Error("document.registerElement: first argument `name` must not be empty");if(e.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(e)+"'.");if(o(e))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(e)+"'. The type name is invalid.");if(c(e))throw new Error("DuplicateDefinitionError: a type with name '"+String(e)+"' is already registered");return u.prototype||(u.prototype=Object.create(HTMLElement.prototype)),u.__name=e.toLowerCase(),u.extends&&(u.extends=u.extends.toLowerCase()),u.lifecycle=u.lifecycle||{},u.ancestry=r(u.extends),s(u),a(u),n(u.prototype),l(u.__name,u),u.ctor=h(u),u.ctor.prototype=u.prototype,u.prototype.constructor=u.ctor,t.ready&&m(document),u.ctor}function n(t){if(!t.setAttribute._polyfilled){var e=t.setAttribute;t.setAttribute=function(t,n){i.call(this,t,n,e);};var n=t.removeAttribute;t.removeAttribute=function(t){i.call(this,t,null,n);},t.setAttribute._polyfilled=!0;}}function i(t,e,n){t=t.toLowerCase();var i=this.getAttribute(t);n.apply(this,arguments);var o=this.getAttribute(t);this.attributeChangedCallback&&o!==i&&this.attributeChangedCallback(t,i,o);}function o(t){for(var e=0;e<C.length;e++)if(t===C[e])return !0}function r(t){var e=c(t);return e?r(e.extends).concat([e]):[]}function s(t){for(var e,n=t.extends,i=0;e=t.ancestry[i];i++)n=e.is&&e.tag;t.tag=n||t.__name,n&&(t.is=t.__name);}function a(t){if(!Object.__proto__){var e=HTMLElement.prototype;if(t.is){var n=document.createElement(t.tag);e=Object.getPrototypeOf(n);}for(var i,o=t.prototype,r=!1;o;)o==e&&(r=!0),i=Object.getPrototypeOf(o),i&&(o.__proto__=i),o=i;r||console.warn(t.tag+" prototype not found in prototype chain for "+t.is),t.native=e;}}function u(t){return y(E(t.tag),t)}function c(t){return t?x[t.toLowerCase()]:void 0}function l(t,e){x[t]=e;}function h(t){return function(){return u(t)}}function p(t,e,n){return t===w?d(e,n):S(t,e)}function d(t,e){t&&(t=t.toLowerCase()),e&&(e=e.toLowerCase());var n=c(e||t);if(n){if(t==n.tag&&e==n.is)return new n.ctor;if(!e&&!n.is)return new n.ctor}var i;return e?(i=d(t),i.setAttribute("is",e),i):(i=E(t),t.indexOf("-")>=0&&b(i,HTMLElement),i)}function f(t,e){var n=t[e];t[e]=function(){var t=n.apply(this,arguments);return v(t),t};}var g,m=(t.isIE,t.upgradeDocumentTree),v=t.upgradeAll,y=t.upgradeWithDefinition,b=t.implementPrototype,A=t.useNative,C=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],x={},w="http://www.w3.org/1999/xhtml",E=document.createElement.bind(document),S=document.createElementNS.bind(document);g=Object.__proto__||A?function(t,e){return t instanceof e}:function(t,e){if(t instanceof e)return !0;for(var n=t;n;){if(n===e.prototype)return !0;n=n.__proto__;}return !1},f(Node.prototype,"cloneNode"),f(document,"importNode"),document.registerElement=e,document.createElement=d,document.createElementNS=p,t.registry=x,t.instanceof=g,t.reservedTagList=C,t.getRegisteredDefinition=c,document.register=document.registerElement;}),function(t){function e(){r(window.wrap(document)),window.CustomElements.ready=!0;var t=window.requestAnimationFrame||function(t){setTimeout(t,16);};t(function(){setTimeout(function(){window.CustomElements.readyTime=Date.now(),window.HTMLImports&&(window.CustomElements.elapsed=window.CustomElements.readyTime-window.HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}));});});}var n=t.useNative,i=t.initializeModules;if(t.isIE,n){var o=function(){};t.watchShadow=o,t.upgrade=o,t.upgradeAll=o,t.upgradeDocumentTree=o,t.upgradeSubtree=o,t.takeRecords=o,t.instanceof=function(t,e){return t instanceof e};}else i();var r=t.upgradeDocumentTree,s=t.upgradeDocument;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=window.ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=window.ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(t){return t}),window.HTMLImports&&(window.HTMLImports.__importsParsingHook=function(t){t.import&&s(wrap(t.import));}),"complete"===document.readyState||t.flags.eager)e();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var a=window.HTMLImports&&!window.HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(a,e);}else e();}(window.CustomElements));}.call(commonjsGlobal),function(){}.call(commonjsGlobal),function(){var t=this;(function(){(function(){this.Trix={VERSION:"1.2.2",ZERO_WIDTH_SPACE:"\ufeff",NON_BREAKING_SPACE:"\xa0",OBJECT_REPLACEMENT_CHARACTER:"\ufffc",browser:{composesExistingText:/Android.*Chrome/.test(navigator.userAgent),forcesObjectResizing:/Trident.*rv:11/.test(navigator.userAgent),supportsInputEvents:function(){var t,e,n,i;if("undefined"==typeof InputEvent)return !1;for(i=["data","getTargetRanges","inputType"],t=0,e=i.length;e>t;t++)if(n=i[t],!(n in InputEvent.prototype))return !1;return !0}()},config:{}};}).call(this);}).call(t);var e=t.Trix;(function(){(function(){e.BasicObject=function(){function t(){}var e,n,i;return t.proxyMethod=function(t){var i,o,r,s,a;return r=n(t),i=r.name,s=r.toMethod,a=r.toProperty,o=r.optional,this.prototype[i]=function(){var t,n;return t=null!=s?o?"function"==typeof this[s]?this[s]():void 0:this[s]():null!=a?this[a]:void 0,o?(n=null!=t?t[i]:void 0,null!=n?e.call(n,t,arguments):void 0):(n=t[i],e.call(n,t,arguments))}},n=function(t){var e,n;if(!(n=t.match(i)))throw new Error("can't parse @proxyMethod expression: "+t);return e={name:n[4]},null!=n[2]?e.toMethod=n[1]:e.toProperty=n[1],null!=n[3]&&(e.optional=!0),e},e=Function.prototype.apply,i=/^(.+?)(\(\))?(\?)?\.(.+?)$/,t}();}).call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Object=function(n){function i(){this.id=++o;}var o;return t(i,n),o=0,i.fromJSONString=function(t){return this.fromJSON(JSON.parse(t))},i.prototype.hasSameConstructorAs=function(t){return this.constructor===(null!=t?t.constructor:void 0)},i.prototype.isEqualTo=function(t){return this===t},i.prototype.inspect=function(){var t,e,n;return t=function(){var t,i,o;i=null!=(t=this.contentsForInspection())?t:{},o=[];for(e in i)n=i[e],o.push(e+"="+n);return o}.call(this),"#<"+this.constructor.name+":"+this.id+(t.length?" "+t.join(", "):"")+">"},i.prototype.contentsForInspection=function(){},i.prototype.toJSONString=function(){return JSON.stringify(this)},i.prototype.toUTF16String=function(){return e.UTF16String.box(this)},i.prototype.getCacheKey=function(){return this.id.toString()},i}(e.BasicObject);}.call(this),function(){e.extend=function(t){var e,n;for(e in t)n=t[e],this[e]=n;return this};}.call(this),function(){e.extend({defer:function(t){return setTimeout(t,1)}});}.call(this),function(){var t,n;e.extend({normalizeSpaces:function(t){return t.replace(RegExp(""+e.ZERO_WIDTH_SPACE,"g"),"").replace(RegExp(""+e.NON_BREAKING_SPACE,"g")," ")},normalizeNewlines:function(t){return t.replace(/\r\n/g,"\n")},breakableWhitespacePattern:RegExp("[^\\S"+e.NON_BREAKING_SPACE+"]"),squishBreakableWhitespace:function(t){return t.replace(RegExp(""+e.breakableWhitespacePattern.source,"g")," ").replace(/\ {2,}/g," ")},escapeHTML:function(t){var e;return e=document.createElement("div"),e.textContent=t,e.innerHTML},summarizeStringChange:function(t,i){var o,r,s,a;return t=e.UTF16String.box(t),i=e.UTF16String.box(i),i.length<t.length?(r=n(t,i),a=r[0],o=r[1]):(s=n(i,t),o=s[0],a=s[1]),{added:o,removed:a}}}),n=function(n,i){var o,r,s,a,u;return n.isEqualTo(i)?["",""]:(r=t(n,i),a=r.utf16String.length,s=a?(u=r.offset,o=n.codepoints.slice(0,u).concat(n.codepoints.slice(u+a)),t(i,e.UTF16String.fromCodepoints(o))):t(i,n),[r.utf16String.toString(),s.utf16String.toString()])},t=function(t,e){var n,i,o;for(n=0,i=t.length,o=e.length;i>n&&t.charAt(n).isEqualTo(e.charAt(n));)n++;for(;i>n+1&&t.charAt(i-1).isEqualTo(e.charAt(o-1));)i--,o--;return {utf16String:t.slice(n,i),offset:n}};}.call(this),function(){e.extend({copyObject:function(t){var e,n,i;null==t&&(t={}),n={};for(e in t)i=t[e],n[e]=i;return n},objectsAreEqual:function(t,e){var n,i;if(null==t&&(t={}),null==e&&(e={}),Object.keys(t).length!==Object.keys(e).length)return !1;for(n in t)if(i=t[n],i!==e[n])return !1;return !0}});}.call(this),function(){var t=[].slice;e.extend({arraysAreEqual:function(t,e){var n,i,o,r;if(null==t&&(t=[]),null==e&&(e=[]),t.length!==e.length)return !1;for(i=n=0,o=t.length;o>n;i=++n)if(r=t[i],r!==e[i])return !1;return !0},arrayStartsWith:function(t,n){return null==t&&(t=[]),null==n&&(n=[]),e.arraysAreEqual(t.slice(0,n.length),n)},spliceArray:function(){var e,n,i;return n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],i=n.slice(0),i.splice.apply(i,e),i},summarizeArrayChange:function(t,e){var n,i,o,r,s,a,u,c,l,h,p;for(null==t&&(t=[]),null==e&&(e=[]),n=[],h=[],o=new Set,r=0,u=t.length;u>r;r++)p=t[r],o.add(p);for(i=new Set,s=0,c=e.length;c>s;s++)p=e[s],i.add(p),o.has(p)||n.push(p);for(a=0,l=t.length;l>a;a++)p=t[a],i.has(p)||h.push(p);return {added:n,removed:h}}});}.call(this),function(){var t,n,i,o;t=null,n=null,o=null,i=null,e.extend({getAllAttributeNames:function(){return null!=t?t:t=e.getTextAttributeNames().concat(e.getBlockAttributeNames())},getBlockConfig:function(t){return e.config.blockAttributes[t]},getBlockAttributeNames:function(){return null!=n?n:n=Object.keys(e.config.blockAttributes)},getTextConfig:function(t){return e.config.textAttributes[t]},getTextAttributeNames:function(){return null!=o?o:o=Object.keys(e.config.textAttributes)},getListAttributeNames:function(){var t,n;return null!=i?i:i=function(){var i,o;i=e.config.blockAttributes,o=[];for(t in i)n=i[t].listAttribute,null!=n&&o.push(n);return o}()}});}.call(this),function(){var t,n,i,o,r,s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=document.documentElement,n=null!=(i=null!=(o=null!=(r=t.matchesSelector)?r:t.webkitMatchesSelector)?o:t.msMatchesSelector)?i:t.mozMatchesSelector,e.extend({handleEvent:function(n,i){var r,s,a,u,c,l,h,p,d,f,g;return h=null!=i?i:{},c=h.onElement,u=h.matchingSelector,g=h.withCallback,a=h.inPhase,l=h.preventDefault,d=h.times,r=null!=c?c:t,p=u,f="capturing"===a,s=function(t){var n;return null!=d&&0===--d&&s.destroy(),n=e.findClosestElementFromNode(t.target,{matchingSelector:p}),null!=n&&(null!=g&&g.call(n,t,n),l)?t.preventDefault():void 0},s.destroy=function(){return r.removeEventListener(n,s,f)},r.addEventListener(n,s,f),s},handleEventOnce:function(t,n){return null==n&&(n={}),n.times=1,e.handleEvent(t,n)},triggerEvent:function(n,i){var o,r,s,a,u,c,l;return l=null!=i?i:{},c=l.onElement,r=l.bubbles,s=l.cancelable,o=l.attributes,a=null!=c?c:t,r=r!==!1,s=s!==!1,u=document.createEvent("Events"),u.initEvent(n,r,s),null!=o&&e.extend.call(u,o),a.dispatchEvent(u)},elementMatchesSelector:function(t,e){return 1===(null!=t?t.nodeType:void 0)?n.call(t,e):void 0},findClosestElementFromNode:function(t,n){var i,o,r;for(o=null!=n?n:{},i=o.matchingSelector,r=o.untilNode;null!=t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;if(null!=t){if(null==i)return t;if(t.closest&&null==r)return t.closest(i);for(;t&&t!==r;){if(e.elementMatchesSelector(t,i))return t;t=t.parentNode;}}},findInnerElement:function(t){for(;null!=t?t.firstElementChild:void 0;)t=t.firstElementChild;return t},innerElementIsActive:function(t){return document.activeElement!==t&&e.elementContainsNode(t,document.activeElement)},elementContainsNode:function(t,e){if(t&&e)for(;e;){if(e===t)return !0;e=e.parentNode;}},findNodeFromContainerAndOffset:function(t,e){var n;if(t)return t.nodeType===Node.TEXT_NODE?t:0===e?null!=(n=t.firstChild)?n:t:t.childNodes.item(e-1)},findElementFromContainerAndOffset:function(t,n){var i;return i=e.findNodeFromContainerAndOffset(t,n),e.findClosestElementFromNode(i)},findChildIndexOfNode:function(t){var e;if(null!=t?t.parentNode:void 0){for(e=0;t=t.previousSibling;)e++;return e}},removeNode:function(t){var e;return null!=t&&null!=(e=t.parentNode)?e.removeChild(t):void 0},walkTree:function(t,e){var n,i,o,r,s;return o=null!=e?e:{},i=o.onlyNodesOfType,r=o.usingFilter,n=o.expandEntityReferences,s=function(){switch(i){case"element":return NodeFilter.SHOW_ELEMENT;case"text":return NodeFilter.SHOW_TEXT;case"comment":return NodeFilter.SHOW_COMMENT;default:return NodeFilter.SHOW_ALL}}(),document.createTreeWalker(t,s,null!=r?r:null,n===!0)},tagName:function(t){var e;return null!=t&&null!=(e=t.tagName)?e.toLowerCase():void 0},makeElement:function(t,e){var n,i,o,r,s,a,u,c,l,h;if(null==e&&(e={}),"object"==typeof t?(e=t,t=e.tagName):e={attributes:e},i=document.createElement(t),null!=e.editable&&(null==e.attributes&&(e.attributes={}),e.attributes.contenteditable=e.editable),e.attributes){a=e.attributes;for(r in a)h=a[r],i.setAttribute(r,h);}if(e.style){u=e.style;for(r in u)h=u[r],i.style[r]=h;}if(e.data){c=e.data;for(r in c)h=c[r],i.dataset[r]=h;}if(e.className)for(l=e.className.split(" "),o=0,s=l.length;s>o;o++)n=l[o],i.classList.add(n);return e.textContent&&(i.textContent=e.textContent),i},getBlockTagNames:function(){var t,n;return null!=e.blockTagNames?e.blockTagNames:e.blockTagNames=function(){var i,o;i=e.config.blockAttributes,o=[];for(t in i)n=i[t].tagName,n&&o.push(n);return o}()},nodeIsBlockContainer:function(t){return e.nodeIsBlockStartComment(null!=t?t.firstChild:void 0)},nodeProbablyIsBlockContainer:function(t){var n,i;return n=e.tagName(t),s.call(e.getBlockTagNames(),n)>=0&&(i=e.tagName(t.firstChild),s.call(e.getBlockTagNames(),i)<0)},nodeIsBlockStart:function(t,n){var i;return i=(null!=n?n:{strict:!0}).strict,i?e.nodeIsBlockStartComment(t):e.nodeIsBlockStartComment(t)||!e.nodeIsBlockStartComment(t.firstChild)&&e.nodeProbablyIsBlockContainer(t)},nodeIsBlockStartComment:function(t){return e.nodeIsCommentNode(t)&&"block"===(null!=t?t.data:void 0)},nodeIsCommentNode:function(t){return (null!=t?t.nodeType:void 0)===Node.COMMENT_NODE},nodeIsCursorTarget:function(t,n){var i;return i=(null!=n?n:{}).name,t?e.nodeIsTextNode(t)?t.data===e.ZERO_WIDTH_SPACE?i?t.parentNode.dataset.trixCursorTarget===i:!0:void 0:e.nodeIsCursorTarget(t.firstChild):void 0},nodeIsAttachmentElement:function(t){return e.elementMatchesSelector(t,e.AttachmentView.attachmentSelector)},nodeIsEmptyTextNode:function(t){return e.nodeIsTextNode(t)&&""===(null!=t?t.data:void 0)},nodeIsTextNode:function(t){return (null!=t?t.nodeType:void 0)===Node.TEXT_NODE}});}.call(this),function(){var t,n,i,o,r;t=e.copyObject,o=e.objectsAreEqual,e.extend({normalizeRange:i=function(t){var e;if(null!=t)return Array.isArray(t)||(t=[t,t]),[n(t[0]),n(null!=(e=t[1])?e:t[0])]},rangeIsCollapsed:function(t){var e,n,o;if(null!=t)return n=i(t),o=n[0],e=n[1],r(o,e)},rangesAreEqual:function(t,e){var n,o,s,a,u,c;if(null!=t&&null!=e)return s=i(t),o=s[0],n=s[1],a=i(e),c=a[0],u=a[1],r(o,c)&&r(n,u)}}),n=function(e){return "number"==typeof e?e:t(e)},r=function(t,e){return "number"==typeof t?t===e:o(t,e)};}.call(this),function(){var t,n,i,o,r,s,a;e.registerElement=function(t,e){var n,i;return null==e&&(e={}),t=t.toLowerCase(),e=a(e),i=s(e),(n=i.defaultCSS)&&(delete i.defaultCSS,o(n,t)),r(t,i)},o=function(t,e){var n;return n=i(e),n.textContent=t.replace(/%t/g,e)},i=function(e){var n,i;return n=document.createElement("style"),n.setAttribute("type","text/css"),n.setAttribute("data-tag-name",e.toLowerCase()),(i=t())&&n.setAttribute("nonce",i),document.head.insertBefore(n,document.head.firstChild),n},t=function(){var t;return (t=n("trix-csp-nonce")||n("csp-nonce"))?t.getAttribute("content"):void 0},n=function(t){return document.head.querySelector("meta[name="+t+"]")},s=function(t){var e,n,i;n={};for(e in t)i=t[e],n[e]="function"==typeof i?{value:i}:i;return n},a=function(){var t;return t=function(t){var e,n,i,o,r;for(e={},r=["initialize","connect","disconnect"],n=0,o=r.length;o>n;n++)i=r[n],e[i]=t[i],delete t[i];return e},window.customElements?function(e){var n,i,o,r,s;return s=t(e),o=s.initialize,n=s.connect,i=s.disconnect,o&&(r=n,n=function(){return this.initialized||(this.initialized=!0,o.call(this)),null!=r?r.call(this):void 0}),n&&(e.connectedCallback=n),i&&(e.disconnectedCallback=i),e}:function(e){var n,i,o,r;return r=t(e),o=r.initialize,n=r.connect,i=r.disconnect,o&&(e.createdCallback=o),n&&(e.attachedCallback=n),i&&(e.detachedCallback=i),e}}(),r=function(){return window.customElements?function(t,e){var n;return n=function(){return "object"==typeof Reflect?Reflect.construct(HTMLElement,[],n):HTMLElement.apply(this)},Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement),Object.defineProperties(n.prototype,e),window.customElements.define(t,n),n}:function(t,e){var n,i;return i=Object.create(HTMLElement.prototype,e),n=document.registerElement(t,{prototype:i}),Object.defineProperty(i,"constructor",{value:n}),n}}();}.call(this),function(){var t,n;e.extend({getDOMSelection:function(){var t;return t=window.getSelection(),t.rangeCount>0?t:void 0},getDOMRange:function(){var n,i;return (n=null!=(i=e.getDOMSelection())?i.getRangeAt(0):void 0)&&!t(n)?n:void 0},setDOMRange:function(t){var n;return n=window.getSelection(),n.removeAllRanges(),n.addRange(t),e.selectionChangeObserver.update()}}),t=function(t){return n(t.startContainer)||n(t.endContainer)},n=function(t){return !Object.getPrototypeOf(t)};}.call(this),function(){var t;t={"application/x-trix-feature-detection":"test"},e.extend({dataTransferIsPlainText:function(t){var e,n,i;return i=t.getData("text/plain"),n=t.getData("text/html"),i&&n?(e=(new DOMParser).parseFromString(n,"text/html").body,e.textContent===i?!e.querySelector("*"):void 0):null!=i?i.length:void 0},dataTransferIsWritable:function(e){var n,i;if(null!=(null!=e?e.setData:void 0)){for(n in t)if(i=t[n],!function(){try{return e.setData(n,i),e.getData(n)===i}catch(t){}}())return;return !0}},keyEventIsKeyboardCommand:function(){return /Mac|^iP/.test(navigator.platform)?function(t){return t.metaKey}:function(t){return t.ctrlKey}}()});}.call(this),function(){}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.arraysAreEqual,e.Hash=function(i){function o(t){null==t&&(t={}),this.values=s(t),o.__super__.constructor.apply(this,arguments);}var r,s,a,u,c;return n(o,i),o.fromCommonAttributesOfObjects=function(t){var e,n,i,o,s,a;if(null==t&&(t=[]),!t.length)return new this;for(e=r(t[0]),i=e.getKeys(),a=t.slice(1),n=0,o=a.length;o>n;n++)s=a[n],i=e.getKeysCommonToHash(r(s)),e=e.slice(i);return e},o.box=function(t){return r(t)},o.prototype.add=function(t,e){return this.merge(u(t,e))},o.prototype.remove=function(t){return new e.Hash(s(this.values,t))},o.prototype.get=function(t){return this.values[t]},o.prototype.has=function(t){return t in this.values},o.prototype.merge=function(t){return new e.Hash(a(this.values,c(t)))},o.prototype.slice=function(t){var n,i,o,r;for(r={},n=0,o=t.length;o>n;n++)i=t[n],this.has(i)&&(r[i]=this.values[i]);return new e.Hash(r)},o.prototype.getKeys=function(){return Object.keys(this.values)},o.prototype.getKeysCommonToHash=function(t){var e,n,i,o,s;for(t=r(t),o=this.getKeys(),s=[],e=0,i=o.length;i>e;e++)n=o[e],this.values[n]===t.values[n]&&s.push(n);return s},o.prototype.isEqualTo=function(e){return t(this.toArray(),r(e).toArray())},o.prototype.isEmpty=function(){return 0===this.getKeys().length},o.prototype.toArray=function(){var t,e,n;return (null!=this.array?this.array:this.array=function(){var i;e=[],i=this.values;for(t in i)n=i[t],e.push(t,n);return e}.call(this)).slice(0)},o.prototype.toObject=function(){return s(this.values)},o.prototype.toJSON=function(){return this.toObject()},o.prototype.contentsForInspection=function(){return {values:JSON.stringify(this.values)}},u=function(t,e){var n;return n={},n[t]=e,n},a=function(t,e){var n,i,o;i=s(t);for(n in e)o=e[n],i[n]=o;return i},s=function(t,e){var n,i,o,r,s;for(r={},s=Object.keys(t).sort(),n=0,o=s.length;o>n;n++)i=s[n],i!==e&&(r[i]=t[i]);return r},r=function(t){return t instanceof e.Hash?t:new e.Hash(t)},c=function(t){return t instanceof e.Hash?t.values:t},o}(e.Object);}.call(this),function(){e.ObjectGroup=function(){function t(t,e){var n,i;this.objects=null!=t?t:[],i=e.depth,n=e.asTree,n&&(this.depth=i,this.objects=this.constructor.groupObjects(this.objects,{asTree:n,depth:this.depth+1}));}return t.groupObjects=function(t,e){var n,i,o,r,s,a,u,c,l;for(null==t&&(t=[]),l=null!=e?e:{},o=l.depth,n=l.asTree,n&&null==o&&(o=0),c=[],s=0,a=t.length;a>s;s++){if(u=t[s],r){if(("function"==typeof u.canBeGrouped?u.canBeGrouped(o):void 0)&&("function"==typeof(i=r[r.length-1]).canBeGroupedWith?i.canBeGroupedWith(u,o):void 0)){r.push(u);continue}c.push(new this(r,{depth:o,asTree:n})),r=null;}("function"==typeof u.canBeGrouped?u.canBeGrouped(o):void 0)?r=[u]:c.push(u);}return r&&c.push(new this(r,{depth:o,asTree:n})),c},t.prototype.getObjects=function(){return this.objects},t.prototype.getDepth=function(){return this.depth
    },t.prototype.getCacheKey=function(){var t,e,n,i,o;for(e=["objectGroup"],o=this.getObjects(),t=0,n=o.length;n>t;t++)i=o[t],e.push(i.getCacheKey());return e.join("/")},t}();}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ObjectMap=function(e){function n(t){var e,n,i,o,r;for(null==t&&(t=[]),this.objects={},i=0,o=t.length;o>i;i++)r=t[i],n=JSON.stringify(r),null==(e=this.objects)[n]&&(e[n]=r);}return t(n,e),n.prototype.find=function(t){var e;return e=JSON.stringify(t),this.objects[e]},n}(e.BasicObject);}.call(this),function(){e.ElementStore=function(){function t(t){this.reset(t);}var e;return t.prototype.add=function(t){var n;return n=e(t),this.elements[n]=t},t.prototype.remove=function(t){var n,i;return n=e(t),(i=this.elements[n])?(delete this.elements[n],i):void 0},t.prototype.reset=function(t){var e,n,i;for(null==t&&(t=[]),this.elements={},n=0,i=t.length;i>n;n++)e=t[n],this.add(e);return t},e=function(t){return t.dataset.trixStoreKey},t}();}.call(this),function(){}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Operation=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.isPerforming=function(){return this.performing===!0},n.prototype.hasPerformed=function(){return this.performed===!0},n.prototype.hasSucceeded=function(){return this.performed&&this.succeeded},n.prototype.hasFailed=function(){return this.performed&&!this.succeeded},n.prototype.getPromise=function(){return null!=this.promise?this.promise:this.promise=new Promise(function(t){return function(e,n){return t.performing=!0,t.perform(function(i,o){return t.succeeded=i,t.performing=!1,t.performed=!0,t.succeeded?e(o):n(o)})}}(this))},n.prototype.perform=function(t){return t(!1)},n.prototype.release=function(){var t;return null!=(t=this.promise)&&"function"==typeof t.cancel&&t.cancel(),this.promise=null,this.performing=null,this.performed=null,this.succeeded=null},n.proxyMethod("getPromise().then"),n.proxyMethod("getPromise().catch"),n}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s=function(t,e){function n(){this.constructor=t;}for(var i in e)a.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty;e.UTF16String=function(t){function e(t,e){this.ucs2String=t,this.codepoints=e,this.length=this.codepoints.length,this.ucs2Length=this.ucs2String.length;}return s(e,t),e.box=function(t){return null==t&&(t=""),t instanceof this?t:this.fromUCS2String(null!=t?t.toString():void 0)},e.fromUCS2String=function(t){return new this(t,o(t))},e.fromCodepoints=function(t){return new this(r(t),t)},e.prototype.offsetToUCS2Offset=function(t){return r(this.codepoints.slice(0,Math.max(0,t))).length},e.prototype.offsetFromUCS2Offset=function(t){return o(this.ucs2String.slice(0,Math.max(0,t))).length},e.prototype.slice=function(){var t;return this.constructor.fromCodepoints((t=this.codepoints).slice.apply(t,arguments))},e.prototype.charAt=function(t){return this.slice(t,t+1)},e.prototype.isEqualTo=function(t){return this.constructor.box(t).ucs2String===this.ucs2String},e.prototype.toJSON=function(){return this.ucs2String},e.prototype.getCacheKey=function(){return this.ucs2String},e.prototype.toString=function(){return this.ucs2String},e}(e.BasicObject),t=1===("function"==typeof Array.from?Array.from("\ud83d\udc7c").length:void 0),n=null!=("function"==typeof" ".codePointAt?" ".codePointAt(0):void 0),i=" \ud83d\udc7c"===("function"==typeof String.fromCodePoint?String.fromCodePoint(32,128124):void 0),o=t&&n?function(t){return Array.from(t).map(function(t){return t.codePointAt(0)})}:function(t){var e,n,i,o,r;for(o=[],e=0,i=t.length;i>e;)r=t.charCodeAt(e++),r>=55296&&56319>=r&&i>e&&(n=t.charCodeAt(e++),56320===(64512&n)?r=((1023&r)<<10)+(1023&n)+65536:e--),o.push(r);return o},r=i?function(t){return String.fromCodePoint.apply(String,t)}:function(t){var e,n,i;return e=function(){var e,o,r;for(r=[],e=0,o=t.length;o>e;e++)i=t[e],n="",i>65535&&(i-=65536,n+=String.fromCharCode(i>>>10&1023|55296),i=56320|1023&i),r.push(n+String.fromCharCode(i));return r}(),e.join("")};}.call(this),function(){}.call(this),function(){}.call(this),function(){e.config.lang={attachFiles:"Attach Files",bold:"Bold",bullets:"Bullets","byte":"Byte",bytes:"Bytes",captionPlaceholder:"Add a caption\u2026",code:"Code",heading1:"Heading",indent:"Increase Level",italic:"Italic",link:"Link",numbers:"Numbers",outdent:"Decrease Level",quote:"Quote",redo:"Redo",remove:"Remove",strike:"Strikethrough",undo:"Undo",unlink:"Unlink",url:"URL",urlPlaceholder:"Enter a URL\u2026",GB:"GB",KB:"KB",MB:"MB",PB:"PB",TB:"TB"};}.call(this),function(){e.config.css={attachment:"attachment",attachmentCaption:"attachment__caption",attachmentCaptionEditor:"attachment__caption-editor",attachmentMetadata:"attachment__metadata",attachmentMetadataContainer:"attachment__metadata-container",attachmentName:"attachment__name",attachmentProgress:"attachment__progress",attachmentSize:"attachment__size",attachmentToolbar:"attachment__toolbar",attachmentGallery:"attachment-gallery"};}.call(this),function(){var t;e.config.blockAttributes=t={"default":{tagName:"div",parse:!1},quote:{tagName:"blockquote",nestable:!0},heading1:{tagName:"h1",terminal:!0,breakOnReturn:!0,group:!1},code:{tagName:"pre",terminal:!0,text:{plaintext:!0}},bulletList:{tagName:"ul",parse:!1},bullet:{tagName:"li",listAttribute:"bulletList",group:!1,nestable:!0,test:function(n){return e.tagName(n.parentNode)===t[this.listAttribute].tagName}},numberList:{tagName:"ol",parse:!1},number:{tagName:"li",listAttribute:"numberList",group:!1,nestable:!0,test:function(n){return e.tagName(n.parentNode)===t[this.listAttribute].tagName}},attachmentGallery:{tagName:"div",exclusive:!0,terminal:!0,parse:!1,group:!1}};}.call(this),function(){var t,n;t=e.config.lang,n=[t.bytes,t.KB,t.MB,t.GB,t.TB,t.PB],e.config.fileSize={prefix:"IEC",precision:2,formatter:function(e){var i,o,r,s,a;switch(e){case 0:return "0 "+t.bytes;case 1:return "1 "+t.byte;default:return i=function(){switch(this.prefix){case"SI":return 1e3;case"IEC":return 1024}}.call(this),o=Math.floor(Math.log(e)/Math.log(i)),r=e/Math.pow(i,o),s=r.toFixed(this.precision),a=s.replace(/0*$/,"").replace(/\.$/,""),a+" "+n[o]}}};}.call(this),function(){e.config.textAttributes={bold:{tagName:"strong",inheritable:!0,parser:function(t){var e;return e=window.getComputedStyle(t),"bold"===e.fontWeight||e.fontWeight>=600}},italic:{tagName:"em",inheritable:!0,parser:function(t){var e;return e=window.getComputedStyle(t),"italic"===e.fontStyle}},href:{groupTagName:"a",parser:function(t){var n,i,o;return n=e.AttachmentView.attachmentSelector,o="a:not("+n+")",(i=e.findClosestElementFromNode(t,{matchingSelector:o}))?i.getAttribute("href"):void 0}},strike:{tagName:"del",inheritable:!0},frozen:{style:{backgroundColor:"highlight"}}};}.call(this),function(){var t,n,i,o,r;r="[data-trix-serialize=false]",o=["contenteditable","data-trix-id","data-trix-store-key","data-trix-mutable","data-trix-placeholder","tabindex"],n="data-trix-serialized-attributes",i="["+n+"]",t=new RegExp("<!--block-->","g"),e.extend({serializers:{"application/json":function(t){var n;if(t instanceof e.Document)n=t;else{if(!(t instanceof HTMLElement))throw new Error("unserializable object");n=e.Document.fromHTML(t.innerHTML);}return n.toSerializableDocument().toJSONString()},"text/html":function(s){var a,u,c,l,h,p,d,f,g,m,v,y,b,A,C,x,w;if(s instanceof e.Document)l=e.DocumentView.render(s);else{if(!(s instanceof HTMLElement))throw new Error("unserializable object");l=s.cloneNode(!0);}for(A=l.querySelectorAll(r),h=0,g=A.length;g>h;h++)c=A[h],e.removeNode(c);for(p=0,m=o.length;m>p;p++)for(a=o[p],C=l.querySelectorAll("["+a+"]"),d=0,v=C.length;v>d;d++)c=C[d],c.removeAttribute(a);for(x=l.querySelectorAll(i),f=0,y=x.length;y>f;f++){c=x[f];try{u=JSON.parse(c.getAttribute(n)),c.removeAttribute(n);for(b in u)w=u[b],c.setAttribute(b,w);}catch(E){}}return l.innerHTML.replace(t,"")}},deserializers:{"application/json":function(t){return e.Document.fromJSONString(t)},"text/html":function(t){return e.Document.fromHTML(t)}},serializeToContentType:function(t,n){var i;if(i=e.serializers[n])return i(t);throw new Error("unknown content type: "+n)},deserializeFromContentType:function(t,n){var i;if(i=e.deserializers[n])return i(t);throw new Error("unknown content type: "+n)}});}.call(this),function(){var t;t=e.config.lang,e.config.toolbar={getDefaultHTML:function(){return '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="'+t.bold+'" tabindex="-1">'+t.bold+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="'+t.italic+'" tabindex="-1">'+t.italic+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="'+t.strike+'" tabindex="-1">'+t.strike+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="'+t.link+'" tabindex="-1">'+t.link+'</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="'+t.heading1+'" tabindex="-1">'+t.heading1+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="'+t.quote+'" tabindex="-1">'+t.quote+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="'+t.code+'" tabindex="-1">'+t.code+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="'+t.bullets+'" tabindex="-1">'+t.bullets+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="'+t.numbers+'" tabindex="-1">'+t.numbers+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="'+t.outdent+'" tabindex="-1">'+t.outdent+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="'+t.indent+'" tabindex="-1">'+t.indent+'</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="'+t.attachFiles+'" tabindex="-1">'+t.attachFiles+'</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n\n  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="'+t.undo+'" tabindex="-1">'+t.undo+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="'+t.redo+'" tabindex="-1">'+t.redo+'</button>\n  </span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="'+t.urlPlaceholder+'" aria-label="'+t.url+'" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="'+t.link+'" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="'+t.unlink+'" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>'}};}.call(this),function(){e.config.undoInterval=5e3;}.call(this),function(){e.config.attachments={preview:{presentation:"gallery",caption:{name:!0,size:!0}},file:{caption:{size:!0}}};}.call(this),function(){e.config.keyNames={8:"backspace",9:"tab",13:"return",27:"escape",37:"left",39:"right",46:"delete",68:"d",72:"h",79:"o"};}.call(this),function(){e.config.input={level2Enabled:!0,getLevel:function(){return this.level2Enabled&&e.browser.supportsInputEvents?2:0},pickFiles:function(t){var n;return n=e.makeElement("input",{type:"file",multiple:!0,hidden:!0,id:this.fileInputId}),n.addEventListener("change",function(){return t(n.files),e.removeNode(n)}),e.removeNode(document.getElementById(this.fileInputId)),document.body.appendChild(n),n.click()},fileInputId:"trix-file-input-"+Date.now().toString(16)};}.call(this),function(){}.call(this),function(){e.registerElement("trix-toolbar",{defaultCSS:"%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}",initialize:function(){return ""===this.innerHTML?this.innerHTML=e.config.toolbar.getDefaultHTML():void 0}});}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty,i=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};e.ObjectView=function(n){function o(t,e){this.object=t,this.options=null!=e?e:{},this.childViews=[],this.rootView=this;}return t(o,n),o.prototype.getNodes=function(){var t,e,n,i,o;for(null==this.nodes&&(this.nodes=this.createNodes()),i=this.nodes,o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.cloneNode(!0));return o},o.prototype.invalidate=function(){var t;return this.nodes=null,this.childViews=[],null!=(t=this.parentView)?t.invalidate():void 0},o.prototype.invalidateViewForObject=function(t){var e;return null!=(e=this.findViewForObject(t))?e.invalidate():void 0},o.prototype.findOrCreateCachedChildView=function(t,e){var n;return (n=this.getCachedViewForObject(e))?this.recordChildView(n):(n=this.createChildView.apply(this,arguments),this.cacheViewForObject(n,e)),n},o.prototype.createChildView=function(t,n,i){var o;return null==i&&(i={}),n instanceof e.ObjectGroup&&(i.viewClass=t,t=e.ObjectGroupView),o=new t(n,i),this.recordChildView(o)},o.prototype.recordChildView=function(t){return t.parentView=this,t.rootView=this.rootView,this.childViews.push(t),t},o.prototype.getAllChildViews=function(){var t,e,n,i,o;for(o=[],i=this.childViews,e=0,n=i.length;n>e;e++)t=i[e],o.push(t),o=o.concat(t.getAllChildViews());return o},o.prototype.findElement=function(){return this.findElementForObject(this.object)},o.prototype.findElementForObject=function(t){var e;return (e=null!=t?t.id:void 0)?this.rootView.element.querySelector("[data-trix-id='"+e+"']"):void 0},o.prototype.findViewForObject=function(t){var e,n,i,o;for(i=this.getAllChildViews(),e=0,n=i.length;n>e;e++)if(o=i[e],o.object===t)return o},o.prototype.getViewCache=function(){return this.rootView!==this?this.rootView.getViewCache():this.isViewCachingEnabled()?null!=this.viewCache?this.viewCache:this.viewCache={}:void 0},o.prototype.isViewCachingEnabled=function(){return this.shouldCacheViews!==!1},o.prototype.enableViewCaching=function(){return this.shouldCacheViews=!0},o.prototype.disableViewCaching=function(){return this.shouldCacheViews=!1},o.prototype.getCachedViewForObject=function(t){var e;return null!=(e=this.getViewCache())?e[t.getCacheKey()]:void 0},o.prototype.cacheViewForObject=function(t,e){var n;return null!=(n=this.getViewCache())?n[e.getCacheKey()]=t:void 0},o.prototype.garbageCollectCachedViews=function(){var t,e,n,o,r,s;if(t=this.getViewCache()){s=this.getAllChildViews().concat(this),n=function(){var t,e,n;for(n=[],t=0,e=s.length;e>t;t++)r=s[t],n.push(r.object.getCacheKey());return n}(),o=[];for(e in t)i.call(n,e)<0&&o.push(delete t[e]);return o}},o}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ObjectGroupView=function(e){function n(){n.__super__.constructor.apply(this,arguments),this.objectGroup=this.object,this.viewClass=this.options.viewClass,delete this.options.viewClass;}return t(n,e),n.prototype.getChildViews=function(){var t,e,n,i;if(!this.childViews.length)for(i=this.objectGroup.getObjects(),t=0,e=i.length;e>t;t++)n=i[t],this.findOrCreateCachedChildView(this.viewClass,n,this.options);return this.childViews},n.prototype.createNodes=function(){var t,e,n,i,o,r,s,a,u;for(t=this.createContainerElement(),s=this.getChildViews(),e=0,i=s.length;i>e;e++)for(u=s[e],a=u.getNodes(),n=0,o=a.length;o>n;n++)r=a[n],t.appendChild(r);return [t]},n.prototype.createContainerElement=function(t){return null==t&&(t=this.objectGroup.getDepth()),this.getChildViews()[0].createContainerElement(t)},n}(e.ObjectView);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Controller=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s,a=function(t,e){return function(){return t.apply(e,arguments)}},u=function(t,e){function n(){this.constructor=t;}for(var i in e)c.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},c={}.hasOwnProperty,l=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.findClosestElementFromNode,i=e.nodeIsEmptyTextNode,n=e.nodeIsBlockStartComment,o=e.normalizeSpaces,r=e.summarizeStringChange,s=e.tagName,e.MutationObserver=function(e){function c(t){this.element=t,this.didMutate=a(this.didMutate,this),this.observer=new window.MutationObserver(this.didMutate),this.start();}var h,p,d,f;return u(c,e),p="data-trix-mutable",d="["+p+"]",f={attributes:!0,childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},c.prototype.start=function(){return this.reset(),this.observer.observe(this.element,f)},c.prototype.stop=function(){return this.observer.disconnect()},c.prototype.didMutate=function(t){var e,n;return (e=this.mutations).push.apply(e,this.findSignificantMutations(t)),this.mutations.length?(null!=(n=this.delegate)&&"function"==typeof n.elementDidMutate&&n.elementDidMutate(this.getMutationSummary()),this.reset()):void 0},c.prototype.reset=function(){return this.mutations=[]},c.prototype.findSignificantMutations=function(t){var e,n,i,o;for(o=[],e=0,n=t.length;n>e;e++)i=t[e],this.mutationIsSignificant(i)&&o.push(i);return o},c.prototype.mutationIsSignificant=function(t){var e,n,i,o;if(this.nodeIsMutable(t.target))return !1;for(o=this.nodesModifiedByMutation(t),e=0,n=o.length;n>e;e++)if(i=o[e],this.nodeIsSignificant(i))return !0;return !1},c.prototype.nodeIsSignificant=function(t){return t!==this.element&&!this.nodeIsMutable(t)&&!i(t)},c.prototype.nodeIsMutable=function(e){return t(e,{matchingSelector:d})},c.prototype.nodesModifiedByMutation=function(t){var e;switch(e=[],t.type){case"attributes":t.attributeName!==p&&e.push(t.target);break;case"characterData":e.push(t.target.parentNode),e.push(t.target);break;case"childList":e.push.apply(e,t.addedNodes),e.push.apply(e,t.removedNodes);}return e},c.prototype.getMutationSummary=function(){return this.getTextMutationSummary()},c.prototype.getTextMutationSummary=function(){var t,e,n,i,o,r,s,a,u,c,h;for(a=this.getTextChangesFromCharacterData(),n=a.additions,o=a.deletions,h=this.getTextChangesFromChildList(),u=h.additions,r=0,s=u.length;s>r;r++)e=u[r],l.call(n,e)<0&&n.push(e);return o.push.apply(o,h.deletions),c={},(t=n.join(""))&&(c.textAdded=t),(i=o.join(""))&&(c.textDeleted=i),c},c.prototype.getMutationsByType=function(t){var e,n,i,o,r;for(o=this.mutations,r=[],e=0,n=o.length;n>e;e++)i=o[e],i.type===t&&r.push(i);return r},c.prototype.getTextChangesFromChildList=function(){var t,e,i,r,s,a,u,c,l,p,d;for(t=[],u=[],a=this.getMutationsByType("childList"),e=0,r=a.length;r>e;e++)s=a[e],t.push.apply(t,s.addedNodes),u.push.apply(u,s.removedNodes);return c=0===t.length&&1===u.length&&n(u[0]),c?(p=[],d=["\n"]):(p=h(t),d=h(u)),{additions:function(){var t,e,n;for(n=[],i=t=0,e=p.length;e>t;i=++t)l=p[i],l!==d[i]&&n.push(o(l));return n}(),deletions:function(){var t,e,n;for(n=[],i=t=0,e=d.length;e>t;i=++t)l=d[i],l!==p[i]&&n.push(o(l));return n}()}},c.prototype.getTextChangesFromCharacterData=function(){var t,e,n,i,s,a,u,c;return e=this.getMutationsByType("characterData"),e.length&&(c=e[0],n=e[e.length-1],s=o(c.oldValue),i=o(n.target.data),a=r(s,i),t=a.added,u=a.removed),{additions:t?[t]:[],deletions:u?[u]:[]}},h=function(t){var e,n,i,o;for(null==t&&(t=[]),o=[],e=0,n=t.length;n>e;e++)switch(i=t[e],i.nodeType){case Node.TEXT_NODE:o.push(i.data);break;case Node.ELEMENT_NODE:"br"===s(i)?o.push("\n"):o.push.apply(o,h(i.childNodes));}return o},c}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.FileVerificationOperation=function(e){function n(t){this.file=t;}return t(n,e),n.prototype.perform=function(t){var e;return e=new FileReader,e.onerror=function(){return t(!1)},e.onload=function(n){return function(){e.onerror=null;try{e.abort();}catch(i){}return t(!0,n.file)}}(this),e.readAsArrayBuffer(this.file)},n}(e.Operation);}.call(this),function(){var t,n,i=function(t,e){function n(){this.constructor=t;}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;t=e.handleEvent,n=e.innerElementIsActive,e.InputController=function(o){function r(n){var i;this.element=n,this.mutationObserver=new e.MutationObserver(this.element),this.mutationObserver.delegate=this;for(i in this.events)t(i,{onElement:this.element,withCallback:this.handlerFor(i)});}return i(r,o),r.prototype.events={},r.prototype.elementDidMutate=function(){},r.prototype.editorWillSyncDocumentView=function(){return this.mutationObserver.stop()},r.prototype.editorDidSyncDocumentView=function(){return this.mutationObserver.start()},r.prototype.requestRender=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidRequestRender?t.inputControllerDidRequestRender():void 0},r.prototype.requestReparse=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidRequestReparse&&t.inputControllerDidRequestReparse(),this.requestRender()},r.prototype.attachFiles=function(t){var n,i;return i=function(){var i,o,r;for(r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push(new e.FileVerificationOperation(n));return r}(),Promise.all(i).then(function(t){return function(e){return t.handleInput(function(){var t,n;return null!=(t=this.delegate)&&t.inputControllerWillAttachFiles(),null!=(n=this.responder)&&n.insertFiles(e),this.requestRender()})}}(this))},r.prototype.handlerFor=function(t){return function(e){return function(i){return i.defaultPrevented?void 0:e.handleInput(function(){return n(this.element)?void 0:(this.eventName=t,this.events[t].call(this,i))})}}(this)},r.prototype.handleInput=function(t){var e,n;try{return null!=(e=this.delegate)&&e.inputControllerWillHandleInput(),t.call(this)}finally{null!=(n=this.delegate)&&n.inputControllerDidHandleInput();}},r}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h,p,d,f=function(t,e){function n(){this.constructor=t;}for(var i in e)g.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},g={}.hasOwnProperty,m=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};c=e.makeElement,l=e.objectsAreEqual,d=e.tagName,n=e.browser,a=e.keyEventIsKeyboardCommand,o=e.dataTransferIsWritable,i=e.dataTransferIsPlainText,u=e.config.keyNames,e.Level0InputController=function(n){function s(){s.__super__.constructor.apply(this,arguments),this.resetInputSummary();}var d;return f(s,n),d=0,s.prototype.setInputSummary=function(t){var e,n;null==t&&(t={}),this.inputSummary.eventName=this.eventName;for(e in t)n=t[e],this.inputSummary[e]=n;return this.inputSummary},s.prototype.resetInputSummary=function(){return this.inputSummary={}},s.prototype.reset=function(){return this.resetInputSummary(),e.selectionChangeObserver.reset()},s.prototype.elementDidMutate=function(t){var e;return this.isComposing()?null!=(e=this.delegate)&&"function"==typeof e.inputControllerDidAllowUnhandledInput?e.inputControllerDidAllowUnhandledInput():void 0:this.handleInput(function(){return this.mutationIsSignificant(t)&&(this.mutationIsExpected(t)?this.requestRender():this.requestReparse()),this.reset()})},s.prototype.mutationIsExpected=function(t){var e,n,i,o,r,s,a,u,c,l;return a=t.textAdded,u=t.textDeleted,this.inputSummary.preferDocument?!0:(e=null!=a?a===this.inputSummary.textAdded:!this.inputSummary.textAdded,n=null!=u?this.inputSummary.didDelete:!this.inputSummary.didDelete,c=("\n"===a||" \n"===a)&&!e,l="\n"===u&&!n,s=c&&!l||l&&!c,s&&(o=this.getSelectedRange())&&(i=c?a.replace(/\n$/,"").length||-1:(null!=a?a.length:void 0)||1,null!=(r=this.responder)?r.positionIsBlockBreak(o[1]+i):void 0)?!0:e&&n)},s.prototype.mutationIsSignificant=function(t){var e,n,i;return i=Object.keys(t).length>0,e=""===(null!=(n=this.compositionInput)?n.getEndData():void 0),i||!e},s.prototype.events={keydown:function(t){var n,i,o,r,s,c,l,h,p;if(this.isComposing()||this.resetInputSummary(),this.inputSummary.didInput=!0,r=u[t.keyCode]){for(i=this.keys,h=["ctrl","alt","shift","meta"],o=0,c=h.length;c>o;o++)l=h[o],t[l+"Key"]&&("ctrl"===l&&(l="control"),i=null!=i?i[l]:void 0);null!=(null!=i?i[r]:void 0)&&(this.setInputSummary({keyName:r}),e.selectionChangeObserver.reset(),i[r].call(this,t));}return a(t)&&(n=String.fromCharCode(t.keyCode).toLowerCase())&&(s=function(){var e,n,i,o;for(i=["alt","shift"],o=[],e=0,n=i.length;n>e;e++)l=i[e],t[l+"Key"]&&o.push(l);return o}(),s.push(n),null!=(p=this.delegate)?p.inputControllerDidReceiveKeyboardCommand(s):void 0)?t.preventDefault():void 0},keypress:function(t){var e,n,i;if(null==this.inputSummary.eventName&&!t.metaKey&&(!t.ctrlKey||t.altKey))return (i=p(t))?(null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString(i),this.setInputSummary({textAdded:i,didDelete:this.selectionIsExpanded()})):void 0},textInput:function(t){var e,n,i,o;return e=t.data,o=this.inputSummary.textAdded,o&&o!==e&&o.toUpperCase()===e?(n=this.getSelectedRange(),this.setSelectedRange([n[0],n[1]+o.length]),null!=(i=this.responder)&&i.insertString(e),this.setInputSummary({textAdded:e}),this.setSelectedRange(n)):void 0},dragenter:function(t){return t.preventDefault()},dragstart:function(t){var e,n;return n=t.target,this.serializeSelectionToDataTransfer(t.dataTransfer),this.draggedRange=this.getSelectedRange(),null!=(e=this.delegate)&&"function"==typeof e.inputControllerDidStartDrag?e.inputControllerDidStartDrag():void 0},dragover:function(t){var e,n;return !this.draggedRange&&!this.canAcceptDataTransfer(t.dataTransfer)||(t.preventDefault(),e={x:t.clientX,y:t.clientY},l(e,this.draggingPoint))?void 0:(this.draggingPoint=e,null!=(n=this.delegate)&&"function"==typeof n.inputControllerDidReceiveDragOverPoint?n.inputControllerDidReceiveDragOverPoint(this.draggingPoint):void 0)},dragend:function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidCancelDrag&&t.inputControllerDidCancelDrag(),this.draggedRange=null,this.draggingPoint=null},drop:function(t){var n,i,o,r,s,a,u,c,l;return t.preventDefault(),o=null!=(s=t.dataTransfer)?s.files:void 0,r={x:t.clientX,y:t.clientY},null!=(a=this.responder)&&a.setLocationRangeFromPointRange(r),(null!=o?o.length:void 0)?this.attachFiles(o):this.draggedRange?(null!=(u=this.delegate)&&u.inputControllerWillMoveText(),null!=(c=this.responder)&&c.moveTextFromRange(this.draggedRange),this.draggedRange=null,this.requestRender()):(i=t.dataTransfer.getData("application/x-trix-document"))&&(n=e.Document.fromJSONString(i),null!=(l=this.responder)&&l.insertDocument(n),this.requestRender()),this.draggedRange=null,this.draggingPoint=null},cut:function(t){var e,n;return (null!=(e=this.responder)?e.selectionIsExpanded():void 0)&&(this.serializeSelectionToDataTransfer(t.clipboardData)&&t.preventDefault(),null!=(n=this.delegate)&&n.inputControllerWillCutText(),this.deleteInDirection("backward"),t.defaultPrevented)?this.requestRender():void 0},copy:function(t){var e;return (null!=(e=this.responder)?e.selectionIsExpanded():void 0)&&this.serializeSelectionToDataTransfer(t.clipboardData)?t.preventDefault():void 0},paste:function(t){var n,o,s,a,u,c,l,p,f,g,v,y,b,A,C,x,w,E,S,R,k,D;return n=null!=(p=t.clipboardData)?p:t.testClipboardData,l={clipboard:n},null==n||h(t)?void this.getPastedHTMLUsingHiddenElement(function(t){return function(e){var n,i,o;return l.type="text/html",l.html=e,null!=(n=t.delegate)&&n.inputControllerWillPaste(l),null!=(i=t.responder)&&i.insertHTML(l.html),t.requestRender(),null!=(o=t.delegate)?o.inputControllerDidPaste(l):void 0}}(this)):((a=n.getData("URL"))?(l.type="URL",l.href=a,l.string=(c=n.getData("public.url-name"))?e.squishBreakableWhitespace(c).trim():a,null!=(f=this.delegate)&&f.inputControllerWillPaste(l),this.setInputSummary({textAdded:l.string,didDelete:this.selectionIsExpanded()}),null!=(C=this.responder)&&C.insertText(e.Text.textForStringWithAttributes(l.string,{href:l.href})),this.requestRender(),null!=(x=this.delegate)&&x.inputControllerDidPaste(l)):i(n)?(l.type="text/plain",l.string=n.getData("text/plain"),null!=(w=this.delegate)&&w.inputControllerWillPaste(l),this.setInputSummary({textAdded:l.string,didDelete:this.selectionIsExpanded()}),null!=(E=this.responder)&&E.insertString(l.string),this.requestRender(),null!=(S=this.delegate)&&S.inputControllerDidPaste(l)):(u=n.getData("text/html"))?(l.type="text/html",l.html=u,null!=(R=this.delegate)&&R.inputControllerWillPaste(l),null!=(k=this.responder)&&k.insertHTML(l.html),this.requestRender(),null!=(D=this.delegate)&&D.inputControllerDidPaste(l)):m.call(n.types,"Files")>=0&&(s=null!=(g=n.items)&&null!=(v=g[0])&&"function"==typeof v.getAsFile?v.getAsFile():void 0)&&(!s.name&&(o=r(s))&&(s.name="pasted-file-"+ ++d+"."+o),l.type="File",l.file=s,null!=(y=this.delegate)&&y.inputControllerWillAttachFiles(),null!=(b=this.responder)&&b.insertFile(l.file),this.requestRender(),null!=(A=this.delegate)&&A.inputControllerDidPaste(l)),t.preventDefault())},compositionstart:function(t){return this.getCompositionInput().start(t.data)},compositionupdate:function(t){return this.getCompositionInput().update(t.data)},compositionend:function(t){return this.getCompositionInput().end(t.data)},beforeinput:function(){return this.inputSummary.didInput=!0},input:function(t){return this.inputSummary.didInput=!0,t.stopPropagation()}},s.prototype.keys={backspace:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},"delete":function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},"return":function(){var t,e;return this.setInputSummary({preferDocument:!0}),null!=(t=this.delegate)&&t.inputControllerWillPerformTyping(),null!=(e=this.responder)?e.insertLineBreak():void 0},tab:function(t){var e,n;return (null!=(e=this.responder)?e.canIncreaseNestingLevel():void 0)?(null!=(n=this.responder)&&n.increaseNestingLevel(),this.requestRender(),t.preventDefault()):void 0},left:function(t){var e;return this.selectionIsInCursorTarget()?(t.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("backward"):void 0):void 0},right:function(t){var e;return this.selectionIsInCursorTarget()?(t.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("forward"):void 0):void 0
    },control:{d:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},h:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},o:function(t){var e,n;return t.preventDefault(),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString("\n",{updatePosition:!1}),this.requestRender()}},shift:{"return":function(t){var e,n;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString("\n"),this.requestRender(),t.preventDefault()},tab:function(t){var e,n;return (null!=(e=this.responder)?e.canDecreaseNestingLevel():void 0)?(null!=(n=this.responder)&&n.decreaseNestingLevel(),this.requestRender(),t.preventDefault()):void 0},left:function(t){return this.selectionIsInCursorTarget()?(t.preventDefault(),this.expandSelectionInDirection("backward")):void 0},right:function(t){return this.selectionIsInCursorTarget()?(t.preventDefault(),this.expandSelectionInDirection("forward")):void 0}},alt:{backspace:function(){var t;return this.setInputSummary({preferDocument:!1}),null!=(t=this.delegate)?t.inputControllerWillPerformTyping():void 0}},meta:{backspace:function(){var t;return this.setInputSummary({preferDocument:!1}),null!=(t=this.delegate)?t.inputControllerWillPerformTyping():void 0}}},s.prototype.getCompositionInput=function(){return this.isComposing()?this.compositionInput:this.compositionInput=new t(this)},s.prototype.isComposing=function(){return null!=this.compositionInput&&!this.compositionInput.isEnded()},s.prototype.deleteInDirection=function(t,e){var n;return (null!=(n=this.responder)?n.deleteInDirection(t):void 0)!==!1?this.setInputSummary({didDelete:!0}):e?(e.preventDefault(),this.requestRender()):void 0},s.prototype.serializeSelectionToDataTransfer=function(t){var n,i;if(o(t))return n=null!=(i=this.responder)?i.getSelectedDocument().toSerializableDocument():void 0,t.setData("application/x-trix-document",JSON.stringify(n)),t.setData("text/html",e.DocumentView.render(n).innerHTML),t.setData("text/plain",n.toString().replace(/\n$/,"")),!0},s.prototype.canAcceptDataTransfer=function(t){var e,n,i,o,r,s;for(s={},o=null!=(i=null!=t?t.types:void 0)?i:[],e=0,n=o.length;n>e;e++)r=o[e],s[r]=!0;return s.Files||s["application/x-trix-document"]||s["text/html"]||s["text/plain"]},s.prototype.getPastedHTMLUsingHiddenElement=function(t){var n,i,o;return i=this.getSelectedRange(),o={position:"absolute",left:window.pageXOffset+"px",top:window.pageYOffset+"px",opacity:0},n=c({style:o,tagName:"div",editable:!0}),document.body.appendChild(n),n.focus(),requestAnimationFrame(function(o){return function(){var r;return r=n.innerHTML,e.removeNode(n),o.setSelectedRange(i),t(r)}}(this))},s.proxyMethod("responder?.getSelectedRange"),s.proxyMethod("responder?.setSelectedRange"),s.proxyMethod("responder?.expandSelectionInDirection"),s.proxyMethod("responder?.selectionIsInCursorTarget"),s.proxyMethod("responder?.selectionIsExpanded"),s}(e.InputController),r=function(t){var e,n;return null!=(e=t.type)&&null!=(n=e.match(/\/(\w+)$/))?n[1]:void 0},s=null!=("function"==typeof" ".codePointAt?" ".codePointAt(0):void 0),p=function(t){var n;return t.key&&s&&t.key.codePointAt(0)===t.keyCode?t.key:(null===t.which?n=t.keyCode:0!==t.which&&0!==t.charCode&&(n=t.charCode),null!=n&&"escape"!==u[n]?e.UTF16String.fromCodepoints([n]).toString():void 0)},h=function(t){var e,n,i,o,r,s,a,u,c,l;if(u=t.clipboardData){if(m.call(u.types,"text/html")>=0){for(c=u.types,i=0,s=c.length;s>i;i++)if(l=c[i],e=/^CorePasteboardFlavorType/.test(l),n=/^dyn\./.test(l)&&u.getData(l),a=e||n)return !0;return !1}return o=m.call(u.types,"com.apple.webarchive")>=0,r=m.call(u.types,"com.apple.flat-rtfd")>=0,o||r}},t=function(t){function e(t){var e;this.inputController=t,e=this.inputController,this.responder=e.responder,this.delegate=e.delegate,this.inputSummary=e.inputSummary,this.data={};}return f(e,t),e.prototype.start=function(t){var e,n;return this.data.start=t,this.isSignificant()?("keypress"===this.inputSummary.eventName&&this.inputSummary.textAdded&&null!=(e=this.responder)&&e.deleteInDirection("left"),this.selectionIsExpanded()||(this.insertPlaceholder(),this.requestRender()),this.range=null!=(n=this.responder)?n.getSelectedRange():void 0):void 0},e.prototype.update=function(t){var e;return this.data.update=t,this.isSignificant()&&(e=this.selectPlaceholder())?(this.forgetPlaceholder(),this.range=e):void 0},e.prototype.end=function(t){var e,n,i,o;return this.data.end=t,this.isSignificant()?(this.forgetPlaceholder(),this.canApplyToDocument()?(this.setInputSummary({preferDocument:!0,didInput:!1}),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.setSelectedRange(this.range),null!=(i=this.responder)&&i.insertString(this.data.end),null!=(o=this.responder)?o.setSelectedRange(this.range[0]+this.data.end.length):void 0):null!=this.data.start||null!=this.data.update?(this.requestReparse(),this.inputController.reset()):void 0):this.inputController.reset()},e.prototype.getEndData=function(){return this.data.end},e.prototype.isEnded=function(){return null!=this.getEndData()},e.prototype.isSignificant=function(){return n.composesExistingText?this.inputSummary.didInput:!0},e.prototype.canApplyToDocument=function(){var t,e;return 0===(null!=(t=this.data.start)?t.length:void 0)&&(null!=(e=this.data.end)?e.length:void 0)>0&&null!=this.range},e.proxyMethod("inputController.setInputSummary"),e.proxyMethod("inputController.requestRender"),e.proxyMethod("inputController.requestReparse"),e.proxyMethod("responder?.selectionIsExpanded"),e.proxyMethod("responder?.insertPlaceholder"),e.proxyMethod("responder?.selectPlaceholder"),e.proxyMethod("responder?.forgetPlaceholder"),e}(e.BasicObject);}.call(this),function(){var t,n,i,o=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function n(){this.constructor=t;}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.dataTransferIsPlainText,n=e.keyEventIsKeyboardCommand,i=e.objectsAreEqual,e.Level2InputController=function(s){function u(){return this.render=o(this.render,this),u.__super__.constructor.apply(this,arguments)}var c,l,h,p,d,f;return r(u,s),u.prototype.elementDidMutate=function(){var t;return this.scheduledRender?this.composing&&null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidAllowUnhandledInput?t.inputControllerDidAllowUnhandledInput():void 0:this.reparse()},u.prototype.scheduleRender=function(){return null!=this.scheduledRender?this.scheduledRender:this.scheduledRender=requestAnimationFrame(this.render)},u.prototype.render=function(){var t;return cancelAnimationFrame(this.scheduledRender),this.scheduledRender=null,this.composing||null!=(t=this.delegate)&&t.render(),"function"==typeof this.afterRender&&this.afterRender(),this.afterRender=null},u.prototype.reparse=function(){var t;return null!=(t=this.delegate)?t.reparse():void 0},u.prototype.events={keydown:function(t){var e,i,o,r;if(n(t)){if(e=l(t),null!=(r=this.delegate)?r.inputControllerDidReceiveKeyboardCommand(e):void 0)return t.preventDefault()}else if(o=t.key,t.altKey&&(o+="+Alt"),t.shiftKey&&(o+="+Shift"),i=this.keys[o])return this.withEvent(t,i)},paste:function(t){var n,i,o,r,s,a,u,c,l;return h(t)?(t.preventDefault(),this.attachFiles(t.clipboardData.files)):p(t)?(t.preventDefault(),i={type:"text/plain",string:t.clipboardData.getData("text/plain")},null!=(o=this.delegate)&&o.inputControllerWillPaste(i),null!=(r=this.responder)&&r.insertString(i.string),this.render(),null!=(s=this.delegate)?s.inputControllerDidPaste(i):void 0):(n=null!=(a=t.clipboardData)?a.getData("URL"):void 0)?(t.preventDefault(),i={type:"URL",href:n,string:n},null!=(u=this.delegate)&&u.inputControllerWillPaste(i),null!=(c=this.responder)&&c.insertText(e.Text.textForStringWithAttributes(i.string,{href:i.href})),this.render(),null!=(l=this.delegate)?l.inputControllerDidPaste(i):void 0):void 0},beforeinput:function(t){var e;return (e=this.inputTypes[t.inputType])?(this.withEvent(t,e),this.scheduleRender()):void 0},input:function(){return e.selectionChangeObserver.reset()},dragstart:function(t){var e,n;return (null!=(e=this.responder)?e.selectionContainsAttachments():void 0)?(t.dataTransfer.setData("application/x-trix-dragging",!0),this.dragging={range:null!=(n=this.responder)?n.getSelectedRange():void 0,point:d(t)}):void 0},dragenter:function(t){return c(t)?t.preventDefault():void 0},dragover:function(t){var e,n;return this.dragging&&(t.preventDefault(),e=d(t),!i(e,this.dragging.point))?(this.dragging.point=e,null!=(n=this.responder)?n.setLocationRangeFromPointRange(e):void 0):void 0},drop:function(t){var e,n,i,o;return this.dragging?(t.preventDefault(),null!=(n=this.delegate)&&n.inputControllerWillMoveText(),null!=(i=this.responder)&&i.moveTextFromRange(this.dragging.range),this.dragging=null,this.scheduleRender()):c(t)?(t.preventDefault(),e=d(t),null!=(o=this.responder)&&o.setLocationRangeFromPointRange(e),this.attachFiles(t.dataTransfer.files)):void 0},dragend:function(){var t;return this.dragging?(null!=(t=this.responder)&&t.setSelectedRange(this.dragging.range),this.dragging=null):void 0},compositionend:function(){return this.composing?(this.composing=!1,this.scheduleRender()):void 0}},u.prototype.keys={ArrowLeft:function(){var t,e;return (null!=(t=this.responder)?t.shouldManageMovingCursorInDirection("backward"):void 0)?(this.event.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("backward"):void 0):void 0},ArrowRight:function(){var t,e;return (null!=(t=this.responder)?t.shouldManageMovingCursorInDirection("forward"):void 0)?(this.event.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("forward"):void 0):void 0},Backspace:function(){var t,e,n;return (null!=(t=this.responder)?t.shouldManageDeletingInDirection("backward"):void 0)?(this.event.preventDefault(),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.deleteInDirection("backward"),this.render()):void 0},Tab:function(){var t,e;return (null!=(t=this.responder)?t.canIncreaseNestingLevel():void 0)?(this.event.preventDefault(),null!=(e=this.responder)&&e.increaseNestingLevel(),this.render()):void 0},"Tab+Shift":function(){var t,e;return (null!=(t=this.responder)?t.canDecreaseNestingLevel():void 0)?(this.event.preventDefault(),null!=(e=this.responder)&&e.decreaseNestingLevel(),this.render()):void 0}},u.prototype.inputTypes={deleteByComposition:function(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteByCut:function(){return this.deleteInDirection("backward")},deleteByDrag:function(){return this.event.preventDefault(),this.withTargetDOMRange(function(){var t;return this.deleteByDragRange=null!=(t=this.responder)?t.getSelectedRange():void 0})},deleteCompositionText:function(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteContent:function(){return this.deleteInDirection("backward")},deleteContentBackward:function(){return this.deleteInDirection("backward")},deleteContentForward:function(){return this.deleteInDirection("forward")},deleteEntireSoftLine:function(){return this.deleteInDirection("forward")},deleteHardLineBackward:function(){return this.deleteInDirection("backward")},deleteHardLineForward:function(){return this.deleteInDirection("forward")},deleteSoftLineBackward:function(){return this.deleteInDirection("backward")},deleteSoftLineForward:function(){return this.deleteInDirection("forward")},deleteWordBackward:function(){return this.deleteInDirection("backward")},deleteWordForward:function(){return this.deleteInDirection("forward")},formatBackColor:function(){return this.activateAttributeIfSupported("backgroundColor",this.event.data)},formatBold:function(){return this.toggleAttributeIfSupported("bold")},formatFontColor:function(){return this.activateAttributeIfSupported("color",this.event.data)},formatFontName:function(){return this.activateAttributeIfSupported("font",this.event.data)},formatIndent:function(){var t;return (null!=(t=this.responder)?t.canIncreaseNestingLevel():void 0)?this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.increaseNestingLevel():void 0}):void 0},formatItalic:function(){return this.toggleAttributeIfSupported("italic")},formatJustifyCenter:function(){return this.toggleAttributeIfSupported("justifyCenter")},formatJustifyFull:function(){return this.toggleAttributeIfSupported("justifyFull")},formatJustifyLeft:function(){return this.toggleAttributeIfSupported("justifyLeft")},formatJustifyRight:function(){return this.toggleAttributeIfSupported("justifyRight")},formatOutdent:function(){var t;return (null!=(t=this.responder)?t.canDecreaseNestingLevel():void 0)?this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.decreaseNestingLevel():void 0}):void 0},formatRemove:function(){return this.withTargetDOMRange(function(){var t,e,n,i;i=[];for(t in null!=(e=this.responder)?e.getCurrentAttributes():void 0)i.push(null!=(n=this.responder)?n.removeCurrentAttribute(t):void 0);return i})},formatSetBlockTextDirection:function(){return this.activateAttributeIfSupported("blockDir",this.event.data)},formatSetInlineTextDirection:function(){return this.activateAttributeIfSupported("textDir",this.event.data)},formatStrikeThrough:function(){return this.toggleAttributeIfSupported("strike")},formatSubscript:function(){return this.toggleAttributeIfSupported("sub")},formatSuperscript:function(){return this.toggleAttributeIfSupported("sup")},formatUnderline:function(){return this.toggleAttributeIfSupported("underline")},historyRedo:function(){var t;return null!=(t=this.delegate)?t.inputControllerWillPerformRedo():void 0},historyUndo:function(){var t;return null!=(t=this.delegate)?t.inputControllerWillPerformUndo():void 0},insertCompositionText:function(){return this.composing=!0,this.insertString(this.event.data)},insertFromComposition:function(){return this.composing=!1,this.insertString(this.event.data)},insertFromDrop:function(){var t,e;return (t=this.deleteByDragRange)?(this.deleteByDragRange=null,null!=(e=this.delegate)&&e.inputControllerWillMoveText(),this.withTargetDOMRange(function(){var e;return null!=(e=this.responder)?e.moveTextFromRange(t):void 0})):void 0},insertFromPaste:function(){var n,i,o,r,s,a,u,c,l,h;return n=this.event.dataTransfer,s={dataTransfer:n},(i=n.getData("URL"))?(s.type="URL",s.href=i,s.string=(r=n.getData("public.url-name"))?e.squishBreakableWhitespace(r).trim():i,null!=(a=this.delegate)&&a.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertText(e.Text.textForStringWithAttributes(s.string,{href:s.href})):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):t(n)?(s.type="text/plain",s.string=n.getData("text/plain"),null!=(u=this.delegate)&&u.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertString(s.string):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):(o=n.getData("text/html"))?(s.type="text/html",s.html=o,null!=(c=this.delegate)&&c.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertHTML(s.html):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):(null!=(l=n.files)?l.length:void 0)?(s.type="File",s.file=n.files[0],null!=(h=this.delegate)&&h.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertFile(s.file):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):void 0},insertFromYank:function(){return this.insertString(this.event.data)},insertLineBreak:function(){return this.insertString("\n")},insertLink:function(){return this.activateAttributeIfSupported("href",this.event.data)},insertOrderedList:function(){return this.toggleAttributeIfSupported("number")},insertParagraph:function(){var t;return null!=(t=this.delegate)&&t.inputControllerWillPerformTyping(),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertLineBreak():void 0})},insertReplacementText:function(){return this.insertString(this.event.dataTransfer.getData("text/plain"),{updatePosition:!1})},insertText:function(){var t,e;return this.insertString(null!=(t=this.event.data)?t:null!=(e=this.event.dataTransfer)?e.getData("text/plain"):void 0)},insertTranspose:function(){return this.insertString(this.event.data)},insertUnorderedList:function(){return this.toggleAttributeIfSupported("bullet")}},u.prototype.insertString=function(t,e){var n;return null==t&&(t=""),null!=(n=this.delegate)&&n.inputControllerWillPerformTyping(),this.withTargetDOMRange(function(){var n;return null!=(n=this.responder)?n.insertString(t,e):void 0})},u.prototype.toggleAttributeIfSupported=function(t){var n;return a.call(e.getAllAttributeNames(),t)>=0?(null!=(n=this.delegate)&&n.inputControllerWillPerformFormatting(t),this.withTargetDOMRange(function(){var e;return null!=(e=this.responder)?e.toggleCurrentAttribute(t):void 0})):void 0},u.prototype.activateAttributeIfSupported=function(t,n){var i;return a.call(e.getAllAttributeNames(),t)>=0?(null!=(i=this.delegate)&&i.inputControllerWillPerformFormatting(t),this.withTargetDOMRange(function(){var e;return null!=(e=this.responder)?e.setCurrentAttribute(t,n):void 0})):void 0},u.prototype.deleteInDirection=function(t,e){var n,i,o,r;return o=(null!=e?e:{recordUndoEntry:!0}).recordUndoEntry,o&&null!=(r=this.delegate)&&r.inputControllerWillPerformTyping(),i=function(e){return function(){var n;return null!=(n=e.responder)?n.deleteInDirection(t):void 0}}(this),(n=this.getTargetDOMRange({minLength:2}))?this.withTargetDOMRange(n,i):i()},u.prototype.withTargetDOMRange=function(t,n){var i;return "function"==typeof t&&(n=t,t=this.getTargetDOMRange()),t?null!=(i=this.responder)?i.withTargetDOMRange(t,n.bind(this)):void 0:(e.selectionChangeObserver.reset(),n.call(this))},u.prototype.getTargetDOMRange=function(t){var e,n,i,o;return i=(null!=t?t:{minLength:0}).minLength,(o="function"==typeof(e=this.event).getTargetRanges?e.getTargetRanges():void 0)&&o.length&&(n=f(o[0]),0===i||n.toString().length>=i)?n:void 0},f=function(t){var e;return e=document.createRange(),e.setStart(t.startContainer,t.startOffset),e.setEnd(t.endContainer,t.endOffset),e},u.prototype.withEvent=function(t,e){var n;this.event=t;try{n=e.call(this);}finally{this.event=null;}return n},c=function(t){var e,n;return a.call(null!=(e=null!=(n=t.dataTransfer)?n.types:void 0)?e:[],"Files")>=0},h=function(t){var e;return (e=t.clipboardData)?a.call(e.types,"Files")>=0&&1===e.types.length&&e.files.length>=1:void 0},p=function(t){var e;return (e=t.clipboardData)?a.call(e.types,"text/plain")>=0&&1===e.types.length:void 0},l=function(t){var e;return e=[],t.altKey&&e.push("alt"),t.shiftKey&&e.push("shift"),e.push(t.key),e},d=function(t){return {x:t.clientX,y:t.clientY}},u}(e.InputController);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l=function(t,e){return function(){return t.apply(e,arguments)}},h=function(t,e){function n(){this.constructor=t;}for(var i in e)p.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;n=e.defer,i=e.escapeHTML,o=e.handleEvent,a=e.makeElement,c=e.tagName,u=e.config,s=u.lang,t=u.css,r=u.keyNames,e.AttachmentEditorController=function(u){function p(t,e,n,i){this.attachmentPiece=t,this.element=e,this.container=n,this.options=null!=i?i:{},this.didBlurCaption=l(this.didBlurCaption,this),this.didChangeCaption=l(this.didChangeCaption,this),this.didInputCaption=l(this.didInputCaption,this),this.didKeyDownCaption=l(this.didKeyDownCaption,this),this.didClickActionButton=l(this.didClickActionButton,this),this.didClickToolbar=l(this.didClickToolbar,this),this.attachment=this.attachmentPiece.attachment,"a"===c(this.element)&&(this.element=this.element.firstChild),this.install();}var d;return h(p,u),d=function(t){return function(){var e;return e=t.apply(this,arguments),e["do"](),null==this.undos&&(this.undos=[]),this.undos.push(e.undo)}},p.prototype.install=function(){return this.makeElementMutable(),this.addToolbar(),this.attachment.isPreviewable()?this.installCaptionEditor():void 0},p.prototype.uninstall=function(){var t,e;for(this.savePendingCaption();e=this.undos.pop();)e();return null!=(t=this.delegate)?t.didUninstallAttachmentEditor(this):void 0},p.prototype.savePendingCaption=function(){var t,e,n;return null!=this.pendingCaption?(t=this.pendingCaption,this.pendingCaption=null,t?null!=(e=this.delegate)&&"function"==typeof e.attachmentEditorDidRequestUpdatingAttributesForAttachment?e.attachmentEditorDidRequestUpdatingAttributesForAttachment({caption:t},this.attachment):void 0:null!=(n=this.delegate)&&"function"==typeof n.attachmentEditorDidRequestRemovingAttributeForAttachment?n.attachmentEditorDidRequestRemovingAttributeForAttachment("caption",this.attachment):void 0):void 0},p.prototype.makeElementMutable=d(function(){return {"do":function(t){return function(){return t.element.dataset.trixMutable=!0}}(this),undo:function(t){return function(){return delete t.element.dataset.trixMutable}}(this)}}),p.prototype.addToolbar=d(function(){var n,r,u;return n=a({tagName:"div",className:t.attachmentToolbar,data:{trixMutable:!0}}),n.innerHTML='<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--actions">\n    <button type="button" data-trix-action="remove" class="trix-button trix-button--remove" title="'+s.remove+'">'+s.remove+"</button>\n  </span>\n</div>",this.attachment.isPreviewable()&&(r=i(this.attachment.getFilename()),u=i(this.attachment.getFormattedFilesize()),n.innerHTML+='<div class="'+t.attachmentMetadataContainer+'">\n  <span class="'+t.attachmentMetadata+'">\n    <span class="'+t.attachmentName+'" title="'+r+'">'+r+'</span>\n    <span class="'+t.attachmentSize+'">'+u+"</span>\n  </span>\n</div>"),o("click",{onElement:n,withCallback:this.didClickToolbar}),o("click",{onElement:n,matchingSelector:"[data-trix-action]",withCallback:this.didClickActionButton}),{"do":function(t){return function(){return t.element.appendChild(n)}}(this),undo:function(){return function(){return e.removeNode(n)}}()}}),p.prototype.installCaptionEditor=d(function(){var i,r,u,c,l;return c=a({tagName:"textarea",className:t.attachmentCaptionEditor,attributes:{placeholder:s.captionPlaceholder},data:{trixMutable:!0}}),c.value=this.attachmentPiece.getCaption(),l=c.cloneNode(),l.classList.add("trix-autoresize-clone"),l.tabIndex=-1,i=function(){return l.value=c.value,c.style.height=l.scrollHeight+"px"},o("input",{onElement:c,withCallback:i}),o("input",{onElement:c,withCallback:this.didInputCaption}),o("keydown",{onElement:c,withCallback:this.didKeyDownCaption}),o("change",{onElement:c,withCallback:this.didChangeCaption}),o("blur",{onElement:c,withCallback:this.didBlurCaption}),u=this.element.querySelector("figcaption"),r=u.cloneNode(),{"do":function(e){return function(){return u.style.display="none",r.appendChild(c),r.appendChild(l),r.classList.add(t.attachmentCaption+"--editing"),u.parentElement.insertBefore(r,u),i(),e.options.editCaption?n(function(){return c.focus()}):void 0}}(this),undo:function(){return e.removeNode(r),u.style.display=null}}}),p.prototype.didClickToolbar=function(t){return t.preventDefault(),t.stopPropagation()},p.prototype.didClickActionButton=function(t){var e,n;switch(e=t.target.getAttribute("data-trix-action")){case"remove":return null!=(n=this.delegate)?n.attachmentEditorDidRequestRemovalOfAttachment(this.attachment):void 0}},p.prototype.didKeyDownCaption=function(t){var e;return "return"===r[t.keyCode]?(t.preventDefault(),this.savePendingCaption(),null!=(e=this.delegate)&&"function"==typeof e.attachmentEditorDidRequestDeselectingAttachment?e.attachmentEditorDidRequestDeselectingAttachment(this.attachment):void 0):void 0},p.prototype.didInputCaption=function(t){return this.pendingCaption=t.target.value.replace(/\s/g," ").trim()},p.prototype.didChangeCaption=function(){return this.savePendingCaption()},p.prototype.didBlurCaption=function(){return this.savePendingCaption()},p}(e.BasicObject);}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t;}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;i=e.makeElement,t=e.config.css,e.AttachmentView=function(r){function s(){s.__super__.constructor.apply(this,arguments),this.attachment=this.object,this.attachment.uploadProgressDelegate=this,this.attachmentPiece=this.options.piece;}var a;return o(s,r),s.attachmentSelector="[data-trix-attachment]",s.prototype.createContentNodes=function(){return []},s.prototype.createNodes=function(){var e,n,o,r,s,u,c;if(e=r=i({tagName:"figure",className:this.getClassName(),data:this.getData(),editable:!1}),(n=this.getHref())&&(r=i({tagName:"a",editable:!1,attributes:{href:n,tabindex:-1}}),e.appendChild(r)),this.attachment.hasContent())r.innerHTML=this.attachment.getContent();else for(c=this.createContentNodes(),o=0,s=c.length;s>o;o++)u=c[o],r.appendChild(u);return r.appendChild(this.createCaptionElement()),this.attachment.isPending()&&(this.progressElement=i({tagName:"progress",attributes:{"class":t.attachmentProgress,value:this.attachment.getUploadProgress(),max:100},data:{trixMutable:!0,trixStoreKey:["progressElement",this.attachment.id].join("/")}}),e.appendChild(this.progressElement)),[a("left"),e,a("right")]},s.prototype.createCaptionElement=function(){var e,n,o,r,s,a,u;return o=i({tagName:"figcaption",className:t.attachmentCaption}),(e=this.attachmentPiece.getCaption())?(o.classList.add(t.attachmentCaption+"--edited"),o.textContent=e):(n=this.getCaptionConfig(),n.name&&(r=this.attachment.getFilename()),n.size&&(a=this.attachment.getFormattedFilesize()),r&&(s=i({tagName:"span",className:t.attachmentName,textContent:r}),o.appendChild(s)),a&&(r&&o.appendChild(document.createTextNode(" ")),u=i({tagName:"span",className:t.attachmentSize,textContent:a}),o.appendChild(u))),o},s.prototype.getClassName=function(){var e,n;return n=[t.attachment,t.attachment+"--"+this.attachment.getType()],(e=this.attachment.getExtension())&&n.push(t.attachment+"--"+e),n.join(" ")},s.prototype.getData=function(){var t,e;return e={trixAttachment:JSON.stringify(this.attachment),trixContentType:this.attachment.getContentType(),trixId:this.attachment.id},t=this.attachmentPiece.attributes,t.isEmpty()||(e.trixAttributes=JSON.stringify(t)),this.attachment.isPending()&&(e.trixSerialize=!1),e},s.prototype.getHref=function(){return n(this.attachment.getContent(),"a")?void 0:this.attachment.getHref()},s.prototype.getCaptionConfig=function(){var t,n,i;return i=this.attachment.getType(),t=e.copyObject(null!=(n=e.config.attachments[i])?n.caption:void 0),"file"===i&&(t.name=!0),t},s.prototype.findProgressElement=function(){var t;return null!=(t=this.findElement())?t.querySelector("progress"):void 0},a=function(t){return i({tagName:"span",textContent:e.ZERO_WIDTH_SPACE,data:{trixCursorTarget:t,trixSerialize:!1}})},s.prototype.attachmentDidChangeUploadProgress=function(){var t,e;return e=this.attachment.getUploadProgress(),null!=(t=this.findProgressElement())?t.value=e:void 0},s}(e.ObjectView),n=function(t,e){var n;return n=i("div"),n.innerHTML=null!=t?t:"",n.querySelector(e)};}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.makeElement,e.PreviewableAttachmentView=function(i){function o(){o.__super__.constructor.apply(this,arguments),this.attachment.previewDelegate=this;}return n(o,i),o.prototype.createContentNodes=function(){return this.image=t({tagName:"img",attributes:{src:""},data:{trixMutable:!0}}),this.refresh(this.image),[this.image]},o.prototype.createCaptionElement=function(){var t;return t=o.__super__.createCaptionElement.apply(this,arguments),t.textContent||t.setAttribute("data-trix-placeholder",e.config.lang.captionPlaceholder),t},o.prototype.refresh=function(t){var e;return null==t&&(t=null!=(e=this.findElement())?e.querySelector("img"):void 0),t?this.updateAttributesForImage(t):void 0},o.prototype.updateAttributesForImage=function(t){var e,n,i,o,r,s;return r=this.attachment.getURL(),n=this.attachment.getPreviewURL(),t.src=n||r,n===r?t.removeAttribute("data-trix-serialized-attributes"):(i=JSON.stringify({src:r}),t.setAttribute("data-trix-serialized-attributes",i)),s=this.attachment.getWidth(),e=this.attachment.getHeight(),null!=s&&(t.width=s),null!=e&&(t.height=e),o=["imageElement",this.attachment.id,t.src,t.width,t.height].join("/"),t.dataset.trixStoreKey=o},o.prototype.attachmentDidChangeAttributes=function(){return this.refresh(this.image),this.refresh()},o}(e.AttachmentView);}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t;}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;i=e.makeElement,t=e.findInnerElement,n=e.getTextConfig,e.PieceView=function(r){function s(){var t;s.__super__.constructor.apply(this,arguments),this.piece=this.object,this.attributes=this.piece.getAttributes(),t=this.options,this.textConfig=t.textConfig,this.context=t.context,this.piece.attachment?this.attachment=this.piece.attachment:this.string=this.piece.toString();}var a;return o(s,r),s.prototype.createNodes=function(){var e,n,i,o,r,s;if(s=this.attachment?this.createAttachmentNodes():this.createStringNodes(),e=this.createElement()){for(i=t(e),n=0,o=s.length;o>n;n++)r=s[n],i.appendChild(r);s=[e];}return s},s.prototype.createAttachmentNodes=function(){var t,n;return t=this.attachment.isPreviewable()?e.PreviewableAttachmentView:e.AttachmentView,n=this.createChildView(t,this.piece.attachment,{piece:this.piece}),n.getNodes()},s.prototype.createStringNodes=function(){var t,e,n,o,r,s,a,u,c,l;if(null!=(u=this.textConfig)?u.plaintext:void 0)return [document.createTextNode(this.string)];for(a=[],c=this.string.split("\n"),n=e=0,o=c.length;o>e;n=++e)l=c[n],n>0&&(t=i("br"),a.push(t)),(r=l.length)&&(s=document.createTextNode(this.preserveSpaces(l)),a.push(s));return a},s.prototype.createElement=function(){var t,e,o,r,s,a,u,c,l;c={},a=this.attributes;for(r in a)if(l=a[r],(t=n(r))&&(t.tagName&&(s=i(t.tagName),o?(o.appendChild(s),o=s):e=o=s),t.styleProperty&&(c[t.styleProperty]=l),t.style)){u=t.style;for(r in u)l=u[r],c[r]=l;}if(Object.keys(c).length){null==e&&(e=i("span"));for(r in c)l=c[r],e.style[r]=l;}return e},s.prototype.createContainerElement=function(){var t,e,o,r,s;r=this.attributes;for(o in r)if(s=r[o],(e=n(o))&&e.groupTagName)return t={},t[o]=s,i(e.groupTagName,t)},a=e.NON_BREAKING_SPACE,s.prototype.preserveSpaces=function(t){return this.context.isLast&&(t=t.replace(/\ $/,a)),t=t.replace(/(\S)\ {3}(\S)/g,"$1 "+a+" $2").replace(/\ {2}/g,a+" ").replace(/\ {2}/g," "+a),(this.context.isFirst||this.context.followsWhitespace)&&(t=t.replace(/^\ /,a)),t},s}(e.ObjectView);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.TextView=function(n){function i(){i.__super__.constructor.apply(this,arguments),this.text=this.object,this.textConfig=this.options.textConfig;}var o;return t(i,n),i.prototype.createNodes=function(){var t,n,i,r,s,a,u,c,l,h;for(a=[],c=e.ObjectGroup.groupObjects(this.getPieces()),r=c.length-1,i=n=0,s=c.length;s>n;i=++n)u=c[i],t={},0===i&&(t.isFirst=!0),i===r&&(t.isLast=!0),o(l)&&(t.followsWhitespace=!0),h=this.findOrCreateCachedChildView(e.PieceView,u,{textConfig:this.textConfig,context:t}),a.push.apply(a,h.getNodes()),l=u;return a},i.prototype.getPieces=function(){var t,e,n,i,o;for(i=this.text.getPieces(),o=[],t=0,e=i.length;e>t;t++)n=i[t],n.hasAttribute("blockBreak")||o.push(n);return o},o=function(t){return /\s$/.test(null!=t?t.toString():void 0)},i}(e.ObjectView);}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t;}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;
    i=e.makeElement,n=e.getBlockConfig,t=e.config.css,e.BlockView=function(r){function s(){s.__super__.constructor.apply(this,arguments),this.block=this.object,this.attributes=this.block.getAttributes();}return o(s,r),s.prototype.createNodes=function(){var t,o,r,s,a,u,c,l,h;if(t=document.createComment("block"),u=[t],this.block.isEmpty()?u.push(i("br")):(l=null!=(c=n(this.block.getLastAttribute()))?c.text:void 0,h=this.findOrCreateCachedChildView(e.TextView,this.block.text,{textConfig:l}),u.push.apply(u,h.getNodes()),this.shouldAddExtraNewlineElement()&&u.push(i("br"))),this.attributes.length)return u;for(o=i(e.config.blockAttributes["default"].tagName),r=0,s=u.length;s>r;r++)a=u[r],o.appendChild(a);return [o]},s.prototype.createContainerElement=function(e){var o,r,s,a;return o=this.attributes[e],a=n(o).tagName,r={tagName:a},"attachmentGallery"===o&&(s=this.block.getBlockBreakPosition(),r.className=t.attachmentGallery+" "+t.attachmentGallery+"--"+s),i(r)},s.prototype.shouldAddExtraNewlineElement=function(){return /\n\n$/.test(this.block.toString())},s}(e.ObjectView);}.call(this),function(){var t,n,i=function(t,e){function n(){this.constructor=t;}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;t=e.defer,n=e.makeElement,e.DocumentView=function(o){function r(){r.__super__.constructor.apply(this,arguments),this.element=this.options.element,this.elementStore=new e.ElementStore,this.setDocument(this.object);}var s,a,u;return i(r,o),r.render=function(t){var e,i;return e=n("div"),i=new this(t,{element:e}),i.render(),i.sync(),e},r.prototype.setDocument=function(t){return t.isEqualTo(this.document)?void 0:this.document=this.object=t},r.prototype.render=function(){var t,i,o,r,s,a,u;if(this.childViews=[],this.shadowElement=n("div"),!this.document.isEmpty()){for(s=e.ObjectGroup.groupObjects(this.document.getBlocks(),{asTree:!0}),a=[],t=0,i=s.length;i>t;t++)r=s[t],u=this.findOrCreateCachedChildView(e.BlockView,r),a.push(function(){var t,e,n,i;for(n=u.getNodes(),i=[],t=0,e=n.length;e>t;t++)o=n[t],i.push(this.shadowElement.appendChild(o));return i}.call(this));return a}},r.prototype.isSynced=function(){return s(this.shadowElement,this.element)},r.prototype.sync=function(){var t;for(t=this.createDocumentFragmentForSync();this.element.lastChild;)this.element.removeChild(this.element.lastChild);return this.element.appendChild(t),this.didSync()},r.prototype.didSync=function(){return this.elementStore.reset(a(this.element)),t(function(t){return function(){return t.garbageCollectCachedViews()}}(this))},r.prototype.createDocumentFragmentForSync=function(){var t,e,n,i,o,r,s,u,c,l;for(e=document.createDocumentFragment(),u=this.shadowElement.childNodes,n=0,o=u.length;o>n;n++)s=u[n],e.appendChild(s.cloneNode(!0));for(c=a(e),i=0,r=c.length;r>i;i++)t=c[i],(l=this.elementStore.remove(t))&&t.parentNode.replaceChild(l,t);return e},a=function(t){return t.querySelectorAll("[data-trix-store-key]")},s=function(t,e){return u(t.innerHTML)===u(e.innerHTML)},u=function(t){return t.replace(/&nbsp;/g," ")},r}(e.ObjectView);}.call(this),function(){var t,n,i,o,r,s=function(t,e){return function(){return t.apply(e,arguments)}},a=function(t,e){function n(){this.constructor=t;}for(var i in e)u.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},u={}.hasOwnProperty;i=e.findClosestElementFromNode,o=e.handleEvent,r=e.innerElementIsActive,n=e.defer,t=e.AttachmentView.attachmentSelector,e.CompositionController=function(u){function c(n,i){this.element=n,this.composition=i,this.didClickAttachment=s(this.didClickAttachment,this),this.didBlur=s(this.didBlur,this),this.didFocus=s(this.didFocus,this),this.documentView=new e.DocumentView(this.composition.document,{element:this.element}),o("focus",{onElement:this.element,withCallback:this.didFocus}),o("blur",{onElement:this.element,withCallback:this.didBlur}),o("click",{onElement:this.element,matchingSelector:"a[contenteditable=false]",preventDefault:!0}),o("mousedown",{onElement:this.element,matchingSelector:t,withCallback:this.didClickAttachment}),o("click",{onElement:this.element,matchingSelector:"a"+t,preventDefault:!0});}return a(c,u),c.prototype.didFocus=function(){var t,e,n;return t=function(t){return function(){var e;return t.focused?void 0:(t.focused=!0,null!=(e=t.delegate)&&"function"==typeof e.compositionControllerDidFocus?e.compositionControllerDidFocus():void 0)}}(this),null!=(e=null!=(n=this.blurPromise)?n.then(t):void 0)?e:t()},c.prototype.didBlur=function(){return this.blurPromise=new Promise(function(t){return function(e){return n(function(){var n;return r(t.element)||(t.focused=null,null!=(n=t.delegate)&&"function"==typeof n.compositionControllerDidBlur&&n.compositionControllerDidBlur()),t.blurPromise=null,e()})}}(this))},c.prototype.didClickAttachment=function(t,e){var n,o,r;return n=this.findAttachmentForElement(e),o=null!=i(t.target,{matchingSelector:"figcaption"}),null!=(r=this.delegate)&&"function"==typeof r.compositionControllerDidSelectAttachment?r.compositionControllerDidSelectAttachment(n,{editCaption:o}):void 0},c.prototype.getSerializableElement=function(){return this.isEditingAttachment()?this.documentView.shadowElement:this.element},c.prototype.render=function(){var t,e,n;return this.revision!==this.composition.revision&&(this.documentView.setDocument(this.composition.document),this.documentView.render(),this.revision=this.composition.revision),this.canSyncDocumentView()&&!this.documentView.isSynced()&&(null!=(t=this.delegate)&&"function"==typeof t.compositionControllerWillSyncDocumentView&&t.compositionControllerWillSyncDocumentView(),this.documentView.sync(),null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidSyncDocumentView&&e.compositionControllerDidSyncDocumentView()),null!=(n=this.delegate)&&"function"==typeof n.compositionControllerDidRender?n.compositionControllerDidRender():void 0},c.prototype.rerenderViewForObject=function(t){return this.invalidateViewForObject(t),this.render()},c.prototype.invalidateViewForObject=function(t){return this.documentView.invalidateViewForObject(t)},c.prototype.isViewCachingEnabled=function(){return this.documentView.isViewCachingEnabled()},c.prototype.enableViewCaching=function(){return this.documentView.enableViewCaching()},c.prototype.disableViewCaching=function(){return this.documentView.disableViewCaching()},c.prototype.refreshViewCache=function(){return this.documentView.garbageCollectCachedViews()},c.prototype.isEditingAttachment=function(){return null!=this.attachmentEditor},c.prototype.installAttachmentEditorForAttachment=function(t,n){var i,o,r;if((null!=(r=this.attachmentEditor)?r.attachment:void 0)!==t&&(o=this.documentView.findElementForObject(t)))return this.uninstallAttachmentEditor(),i=this.composition.document.getAttachmentPieceForAttachment(t),this.attachmentEditor=new e.AttachmentEditorController(i,o,this.element,n),this.attachmentEditor.delegate=this},c.prototype.uninstallAttachmentEditor=function(){var t;return null!=(t=this.attachmentEditor)?t.uninstall():void 0},c.prototype.didUninstallAttachmentEditor=function(){return this.attachmentEditor=null,this.render()},c.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment=function(t,e){var n;return null!=(n=this.delegate)&&"function"==typeof n.compositionControllerWillUpdateAttachment&&n.compositionControllerWillUpdateAttachment(e),this.composition.updateAttributesForAttachment(t,e)},c.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment=function(t,e){var n;return null!=(n=this.delegate)&&"function"==typeof n.compositionControllerWillUpdateAttachment&&n.compositionControllerWillUpdateAttachment(e),this.composition.removeAttributeForAttachment(t,e)},c.prototype.attachmentEditorDidRequestRemovalOfAttachment=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidRequestRemovalOfAttachment?e.compositionControllerDidRequestRemovalOfAttachment(t):void 0},c.prototype.attachmentEditorDidRequestDeselectingAttachment=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidRequestDeselectingAttachment?e.compositionControllerDidRequestDeselectingAttachment(t):void 0},c.prototype.canSyncDocumentView=function(){return !this.isEditingAttachment()},c.prototype.findAttachmentForElement=function(t){return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId,10))},c}(e.BasicObject);}.call(this),function(){var t,n,i,o=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function n(){this.constructor=t;}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty;n=e.handleEvent,i=e.triggerEvent,t=e.findClosestElementFromNode,e.ToolbarController=function(e){function s(t){this.element=t,this.didKeyDownDialogInput=o(this.didKeyDownDialogInput,this),this.didClickDialogButton=o(this.didClickDialogButton,this),this.didClickAttributeButton=o(this.didClickAttributeButton,this),this.didClickActionButton=o(this.didClickActionButton,this),this.attributes={},this.actions={},this.resetDialogInputs(),n("mousedown",{onElement:this.element,matchingSelector:a,withCallback:this.didClickActionButton}),n("mousedown",{onElement:this.element,matchingSelector:c,withCallback:this.didClickAttributeButton}),n("click",{onElement:this.element,matchingSelector:v,preventDefault:!0}),n("click",{onElement:this.element,matchingSelector:l,withCallback:this.didClickDialogButton}),n("keydown",{onElement:this.element,matchingSelector:h,withCallback:this.didKeyDownDialogInput});}var a,u,c,l,h,p,d,f,g,m,v;return r(s,e),c="[data-trix-attribute]",a="[data-trix-action]",v=c+", "+a,p="[data-trix-dialog]",u=p+"[data-trix-active]",l=p+" [data-trix-method]",h=p+" [data-trix-input]",s.prototype.didClickActionButton=function(t,e){var n,i,o;return null!=(i=this.delegate)&&i.toolbarDidClickButton(),t.preventDefault(),n=d(e),this.getDialog(n)?this.toggleDialog(n):null!=(o=this.delegate)?o.toolbarDidInvokeAction(n):void 0},s.prototype.didClickAttributeButton=function(t,e){var n,i,o;return null!=(i=this.delegate)&&i.toolbarDidClickButton(),t.preventDefault(),n=f(e),this.getDialog(n)?this.toggleDialog(n):null!=(o=this.delegate)&&o.toolbarDidToggleAttribute(n),this.refreshAttributeButtons()},s.prototype.didClickDialogButton=function(e,n){var i,o;return i=t(n,{matchingSelector:p}),o=n.getAttribute("data-trix-method"),this[o].call(this,i)},s.prototype.didKeyDownDialogInput=function(t,e){var n,i;return 13===t.keyCode&&(t.preventDefault(),n=e.getAttribute("name"),i=this.getDialog(n),this.setAttribute(i)),27===t.keyCode?(t.preventDefault(),this.hideDialog()):void 0},s.prototype.updateActions=function(t){return this.actions=t,this.refreshActionButtons()},s.prototype.refreshActionButtons=function(){return this.eachActionButton(function(t){return function(e,n){return e.disabled=t.actions[n]===!1}}(this))},s.prototype.eachActionButton=function(t){var e,n,i,o,r;for(o=this.element.querySelectorAll(a),r=[],n=0,i=o.length;i>n;n++)e=o[n],r.push(t(e,d(e)));return r},s.prototype.updateAttributes=function(t){return this.attributes=t,this.refreshAttributeButtons()},s.prototype.refreshAttributeButtons=function(){return this.eachAttributeButton(function(t){return function(e,n){return e.disabled=t.attributes[n]===!1,t.attributes[n]||t.dialogIsVisible(n)?(e.setAttribute("data-trix-active",""),e.classList.add("trix-active")):(e.removeAttribute("data-trix-active"),e.classList.remove("trix-active"))}}(this))},s.prototype.eachAttributeButton=function(t){var e,n,i,o,r;for(o=this.element.querySelectorAll(c),r=[],n=0,i=o.length;i>n;n++)e=o[n],r.push(t(e,f(e)));return r},s.prototype.applyKeyboardCommand=function(t){var e,n,o,r,s,a,u;for(s=JSON.stringify(t.sort()),u=this.element.querySelectorAll("[data-trix-key]"),r=0,a=u.length;a>r;r++)if(e=u[r],o=e.getAttribute("data-trix-key").split("+"),n=JSON.stringify(o.sort()),n===s)return i("mousedown",{onElement:e}),!0;return !1},s.prototype.dialogIsVisible=function(t){var e;return (e=this.getDialog(t))?e.hasAttribute("data-trix-active"):void 0},s.prototype.toggleDialog=function(t){return this.dialogIsVisible(t)?this.hideDialog():this.showDialog(t)},s.prototype.showDialog=function(t){var e,n,i,o,r,s,a,u,c,l;for(this.hideDialog(),null!=(a=this.delegate)&&a.toolbarWillShowDialog(),i=this.getDialog(t),i.setAttribute("data-trix-active",""),i.classList.add("trix-active"),u=i.querySelectorAll("input[disabled]"),o=0,s=u.length;s>o;o++)n=u[o],n.removeAttribute("disabled");return (e=f(i))&&(r=m(i,t))&&(r.value=null!=(c=this.attributes[e])?c:"",r.select()),null!=(l=this.delegate)?l.toolbarDidShowDialog(t):void 0},s.prototype.setAttribute=function(t){var e,n,i;return e=f(t),n=m(t,e),n.willValidate&&!n.checkValidity()?(n.setAttribute("data-trix-validate",""),n.classList.add("trix-validate"),n.focus()):(null!=(i=this.delegate)&&i.toolbarDidUpdateAttribute(e,n.value),this.hideDialog())},s.prototype.removeAttribute=function(t){var e,n;return e=f(t),null!=(n=this.delegate)&&n.toolbarDidRemoveAttribute(e),this.hideDialog()},s.prototype.hideDialog=function(){var t,e;return (t=this.element.querySelector(u))?(t.removeAttribute("data-trix-active"),t.classList.remove("trix-active"),this.resetDialogInputs(),null!=(e=this.delegate)?e.toolbarDidHideDialog(g(t)):void 0):void 0},s.prototype.resetDialogInputs=function(){var t,e,n,i,o;for(i=this.element.querySelectorAll(h),o=[],t=0,n=i.length;n>t;t++)e=i[t],e.setAttribute("disabled","disabled"),e.removeAttribute("data-trix-validate"),o.push(e.classList.remove("trix-validate"));return o},s.prototype.getDialog=function(t){return this.element.querySelector("[data-trix-dialog="+t+"]")},m=function(t,e){return null==e&&(e=f(t)),t.querySelector("[data-trix-input][name='"+e+"']")},d=function(t){return t.getAttribute("data-trix-action")},f=function(t){var e;return null!=(e=t.getAttribute("data-trix-attribute"))?e:t.getAttribute("data-trix-dialog-attribute")},g=function(t){return t.getAttribute("data-trix-dialog")},s}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ImagePreloadOperation=function(e){function n(t){this.url=t;}return t(n,e),n.prototype.perform=function(t){var e;return e=new Image,e.onload=function(n){return function(){return e.width=n.width=e.naturalWidth,e.height=n.height=e.naturalHeight,t(!0,e)}}(this),e.onerror=function(){return t(!1)},e.src=this.url},n}(e.Operation);}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;e.Attachment=function(i){function o(n){null==n&&(n={}),this.releaseFile=t(this.releaseFile,this),o.__super__.constructor.apply(this,arguments),this.attributes=e.Hash.box(n),this.didChangeAttributes();}return n(o,i),o.previewablePattern=/^image(\/(gif|png|jpe?g)|$)/,o.attachmentForFile=function(t){var e,n;return n=this.attributesForFile(t),e=new this(n),e.setFile(t),e},o.attributesForFile=function(t){return new e.Hash({filename:t.name,filesize:t.size,contentType:t.type})},o.fromJSON=function(t){return new this(t)},o.prototype.getAttribute=function(t){return this.attributes.get(t)},o.prototype.hasAttribute=function(t){return this.attributes.has(t)},o.prototype.getAttributes=function(){return this.attributes.toObject()},o.prototype.setAttributes=function(t){var e,n,i;return null==t&&(t={}),e=this.attributes.merge(t),this.attributes.isEqualTo(e)?void 0:(this.attributes=e,this.didChangeAttributes(),null!=(n=this.previewDelegate)&&"function"==typeof n.attachmentDidChangeAttributes&&n.attachmentDidChangeAttributes(this),null!=(i=this.delegate)&&"function"==typeof i.attachmentDidChangeAttributes?i.attachmentDidChangeAttributes(this):void 0)},o.prototype.didChangeAttributes=function(){return this.isPreviewable()?this.preloadURL():void 0},o.prototype.isPending=function(){return null!=this.file&&!(this.getURL()||this.getHref())},o.prototype.isPreviewable=function(){return this.attributes.has("previewable")?this.attributes.get("previewable"):this.constructor.previewablePattern.test(this.getContentType())},o.prototype.getType=function(){return this.hasContent()?"content":this.isPreviewable()?"preview":"file"},o.prototype.getURL=function(){return this.attributes.get("url")},o.prototype.getHref=function(){return this.attributes.get("href")},o.prototype.getFilename=function(){var t;return null!=(t=this.attributes.get("filename"))?t:""},o.prototype.getFilesize=function(){return this.attributes.get("filesize")},o.prototype.getFormattedFilesize=function(){var t;return t=this.attributes.get("filesize"),"number"==typeof t?e.config.fileSize.formatter(t):""},o.prototype.getExtension=function(){var t;return null!=(t=this.getFilename().match(/\.(\w+)$/))?t[1].toLowerCase():void 0},o.prototype.getContentType=function(){return this.attributes.get("contentType")},o.prototype.hasContent=function(){return this.attributes.has("content")},o.prototype.getContent=function(){return this.attributes.get("content")},o.prototype.getWidth=function(){return this.attributes.get("width")},o.prototype.getHeight=function(){return this.attributes.get("height")},o.prototype.getFile=function(){return this.file},o.prototype.setFile=function(t){return this.file=t,this.isPreviewable()?this.preloadFile():void 0},o.prototype.releaseFile=function(){return this.releasePreloadedFile(),this.file=null},o.prototype.getUploadProgress=function(){var t;return null!=(t=this.uploadProgress)?t:0},o.prototype.setUploadProgress=function(t){var e;return this.uploadProgress!==t?(this.uploadProgress=t,null!=(e=this.uploadProgressDelegate)&&"function"==typeof e.attachmentDidChangeUploadProgress?e.attachmentDidChangeUploadProgress(this):void 0):void 0},o.prototype.toJSON=function(){return this.getAttributes()},o.prototype.getCacheKey=function(){return [o.__super__.getCacheKey.apply(this,arguments),this.attributes.getCacheKey(),this.getPreviewURL()].join("/")},o.prototype.getPreviewURL=function(){return this.previewURL||this.preloadingURL},o.prototype.setPreviewURL=function(t){var e,n;return t!==this.getPreviewURL()?(this.previewURL=t,null!=(e=this.previewDelegate)&&"function"==typeof e.attachmentDidChangeAttributes&&e.attachmentDidChangeAttributes(this),null!=(n=this.delegate)&&"function"==typeof n.attachmentDidChangePreviewURL?n.attachmentDidChangePreviewURL(this):void 0):void 0},o.prototype.preloadURL=function(){return this.preload(this.getURL(),this.releaseFile)},o.prototype.preloadFile=function(){return this.file?(this.fileObjectURL=URL.createObjectURL(this.file),this.preload(this.fileObjectURL)):void 0},o.prototype.releasePreloadedFile=function(){return this.fileObjectURL?(URL.revokeObjectURL(this.fileObjectURL),this.fileObjectURL=null):void 0},o.prototype.preload=function(t,n){var i;return t&&t!==this.getPreviewURL()?(this.preloadingURL=t,i=new e.ImagePreloadOperation(t),i.then(function(e){return function(i){var o,r;return r=i.width,o=i.height,e.getWidth()&&e.getHeight()||e.setAttributes({width:r,height:o}),e.preloadingURL=null,e.setPreviewURL(t),"function"==typeof n?n():void 0}}(this))["catch"](function(t){return function(){return t.preloadingURL=null,"function"==typeof n?n():void 0}}(this))):void 0},o}(e.Object);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Piece=function(n){function i(t,n){null==n&&(n={}),i.__super__.constructor.apply(this,arguments),this.attributes=e.Hash.box(n);}return t(i,n),i.types={},i.registerType=function(t,e){return e.type=t,this.types[t]=e},i.fromJSON=function(t){var e;return (e=this.types[t.type])?e.fromJSON(t):void 0},i.prototype.copyWithAttributes=function(t){return new this.constructor(this.getValue(),t)},i.prototype.copyWithAdditionalAttributes=function(t){return this.copyWithAttributes(this.attributes.merge(t))},i.prototype.copyWithoutAttribute=function(t){return this.copyWithAttributes(this.attributes.remove(t))},i.prototype.copy=function(){return this.copyWithAttributes(this.attributes)},i.prototype.getAttribute=function(t){return this.attributes.get(t)},i.prototype.getAttributesHash=function(){return this.attributes},i.prototype.getAttributes=function(){return this.attributes.toObject()},i.prototype.getCommonAttributes=function(){var t,e,n;return (n=pieceList.getPieceAtIndex(0))?(t=n.attributes,e=t.getKeys(),pieceList.eachPiece(function(n){return e=t.getKeysCommonToHash(n.attributes),t=t.slice(e)}),t.toObject()):{}},i.prototype.hasAttribute=function(t){return this.attributes.has(t)},i.prototype.hasSameStringValueAsPiece=function(t){return null!=t&&this.toString()===t.toString()},i.prototype.hasSameAttributesAsPiece=function(t){return null!=t&&(this.attributes===t.attributes||this.attributes.isEqualTo(t.attributes))},i.prototype.isBlockBreak=function(){return !1},i.prototype.isEqualTo=function(t){return i.__super__.isEqualTo.apply(this,arguments)||this.hasSameConstructorAs(t)&&this.hasSameStringValueAsPiece(t)&&this.hasSameAttributesAsPiece(t)},i.prototype.isEmpty=function(){return 0===this.length},i.prototype.isSerializable=function(){return !0},i.prototype.toJSON=function(){return {type:this.constructor.type,attributes:this.getAttributes()}},i.prototype.contentsForInspection=function(){return {type:this.constructor.type,attributes:this.attributes.inspect()}},i.prototype.canBeGrouped=function(){return this.hasAttribute("href")},i.prototype.canBeGroupedWith=function(t){return this.getAttribute("href")===t.getAttribute("href")},i.prototype.getLength=function(){return this.length},i.prototype.canBeConsolidatedWith=function(){return !1},i}(e.Object);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Piece.registerType("attachment",e.AttachmentPiece=function(n){function i(t){this.attachment=t,i.__super__.constructor.apply(this,arguments),this.length=1,this.ensureAttachmentExclusivelyHasAttribute("href"),this.attachment.hasContent()||this.removeProhibitedAttributes();}return t(i,n),i.fromJSON=function(t){return new this(e.Attachment.fromJSON(t.attachment),t.attributes)},i.permittedAttributes=["caption","presentation"],i.prototype.ensureAttachmentExclusivelyHasAttribute=function(t){return this.hasAttribute(t)?(this.attachment.hasAttribute(t)||this.attachment.setAttributes(this.attributes.slice(t)),this.attributes=this.attributes.remove(t)):void 0},i.prototype.removeProhibitedAttributes=function(){var t;return t=this.attributes.slice(this.constructor.permittedAttributes),t.isEqualTo(this.attributes)?void 0:this.attributes=t},i.prototype.getValue=function(){return this.attachment},i.prototype.isSerializable=function(){return !this.attachment.isPending()},i.prototype.getCaption=function(){var t;return null!=(t=this.attributes.get("caption"))?t:""},i.prototype.isEqualTo=function(t){var e;return i.__super__.isEqualTo.apply(this,arguments)&&this.attachment.id===(null!=t&&null!=(e=t.attachment)?e.id:void 0)},i.prototype.toString=function(){return e.OBJECT_REPLACEMENT_CHARACTER},i.prototype.toJSON=function(){var t;return t=i.__super__.toJSON.apply(this,arguments),t.attachment=this.attachment,t},i.prototype.getCacheKey=function(){return [i.__super__.getCacheKey.apply(this,arguments),this.attachment.getCacheKey()].join("/")},i.prototype.toConsole=function(){return JSON.stringify(this.toString())},i}(e.Piece));}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.normalizeNewlines,e.Piece.registerType("string",e.StringPiece=function(e){function i(e){i.__super__.constructor.apply(this,arguments),this.string=t(e),this.length=this.string.length;}return n(i,e),i.fromJSON=function(t){return new this(t.string,t.attributes)},i.prototype.getValue=function(){return this.string},i.prototype.toString=function(){return this.string.toString()},i.prototype.isBlockBreak=function(){return "\n"===this.toString()&&this.getAttribute("blockBreak")===!0},i.prototype.toJSON=function(){var t;return t=i.__super__.toJSON.apply(this,arguments),t.string=this.string,t},i.prototype.canBeConsolidatedWith=function(t){return null!=t&&this.hasSameConstructorAs(t)&&this.hasSameAttributesAsPiece(t)},i.prototype.consolidateWith=function(t){return new this.constructor(this.toString()+t.toString(),this.attributes)},i.prototype.splitAtOffset=function(t){var e,n;return 0===t?(e=null,n=this):t===this.length?(e=this,n=null):(e=new this.constructor(this.string.slice(0,t),this.attributes),n=new this.constructor(this.string.slice(t),this.attributes)),[e,n]},i.prototype.toConsole=function(){var t;return t=this.string,t.length>15&&(t=t.slice(0,14)+"\u2026"),JSON.stringify(t.toString())},i}(e.Piece));}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty,o=[].slice;t=e.spliceArray,e.SplittableList=function(e){function i(t){null==t&&(t=[]),i.__super__.constructor.apply(this,arguments),this.objects=t.slice(0),this.length=this.objects.length;}var r,s,a;return n(i,e),i.box=function(t){return t instanceof this?t:new this(t)},i.prototype.indexOf=function(t){return this.objects.indexOf(t)},i.prototype.splice=function(){var e;return e=1<=arguments.length?o.call(arguments,0):[],new this.constructor(t.apply(null,[this.objects].concat(o.call(e))))},i.prototype.eachObject=function(t){var e,n,i,o,r,s;for(r=this.objects,s=[],n=e=0,i=r.length;i>e;n=++e)o=r[n],s.push(t(o,n));return s},i.prototype.insertObjectAtIndex=function(t,e){return this.splice(e,0,t)},i.prototype.insertSplittableListAtIndex=function(t,e){return this.splice.apply(this,[e,0].concat(o.call(t.objects)))},i.prototype.insertSplittableListAtPosition=function(t,e){var n,i,o;return o=this.splitObjectAtPosition(e),i=o[0],n=o[1],new this.constructor(i).insertSplittableListAtIndex(t,n)},i.prototype.editObjectAtIndex=function(t,e){return this.replaceObjectAtIndex(e(this.objects[t]),t)},i.prototype.replaceObjectAtIndex=function(t,e){return this.splice(e,1,t)},i.prototype.removeObjectAtIndex=function(t){return this.splice(t,1)},i.prototype.getObjectAtIndex=function(t){return this.objects[t]},i.prototype.getSplittableListInRange=function(t){var e,n,i,o;return i=this.splitObjectsAtRange(t),n=i[0],e=i[1],o=i[2],new this.constructor(n.slice(e,o+1))},i.prototype.selectSplittableList=function(t){var e,n;return n=function(){var n,i,o,r;for(o=this.objects,r=[],n=0,i=o.length;i>n;n++)e=o[n],t(e)&&r.push(e);return r}.call(this),new this.constructor(n)},i.prototype.removeObjectsInRange=function(t){var e,n,i,o;return i=this.splitObjectsAtRange(t),n=i[0],e=i[1],o=i[2],new this.constructor(n).splice(e,o-e+1)},i.prototype.transformObjectsInRange=function(t,e){var n,i,o,r,s,a,u;return s=this.splitObjectsAtRange(t),r=s[0],i=s[1],a=s[2],u=function(){var t,s,u;for(u=[],n=t=0,s=r.length;s>t;n=++t)o=r[n],u.push(n>=i&&a>=n?e(o):o);return u}(),new this.constructor(u)},i.prototype.splitObjectsAtRange=function(t){var e,n,i,o,s,u;return o=this.splitObjectAtPosition(a(t)),n=o[0],e=o[1],i=o[2],s=new this.constructor(n).splitObjectAtPosition(r(t)+i),n=s[0],u=s[1],[n,e,u-1]},i.prototype.getObjectAtPosition=function(t){var e,n,i;return i=this.findIndexAndOffsetAtPosition(t),e=i.index,n=i.offset,this.objects[e]},i.prototype.splitObjectAtPosition=function(t){var e,n,i,o,r,s,a,u,c,l;return s=this.findIndexAndOffsetAtPosition(t),e=s.index,r=s.offset,o=this.objects.slice(0),null!=e?0===r?(c=e,l=0):(i=this.getObjectAtIndex(e),a=i.splitAtOffset(r),n=a[0],u=a[1],o.splice(e,1,n,u),c=e+1,l=n.getLength()-r):(c=o.length,l=0),[o,c,l]},i.prototype.consolidate=function(){var t,e,n,i,o,r;for(i=[],o=this.objects[0],r=this.objects.slice(1),t=0,e=r.length;e>t;t++)n=r[t],("function"==typeof o.canBeConsolidatedWith?o.canBeConsolidatedWith(n):void 0)?o=o.consolidateWith(n):(i.push(o),o=n);return null!=o&&i.push(o),new this.constructor(i)},i.prototype.consolidateFromIndexToIndex=function(t,e){var n,i,r;return i=this.objects.slice(0),r=i.slice(t,e+1),n=new this.constructor(r).consolidate().toArray(),this.splice.apply(this,[t,r.length].concat(o.call(n)))},i.prototype.findIndexAndOffsetAtPosition=function(t){var e,n,i,o,r,s,a;for(e=0,a=this.objects,i=n=0,o=a.length;o>n;i=++n){if(s=a[i],r=e+s.getLength(),t>=e&&r>t)return {index:i,offset:t-e};e=r;}return {index:null,offset:null}},i.prototype.findPositionAtIndexAndOffset=function(t,e){var n,i,o,r,s,a;for(s=0,a=this.objects,n=i=0,o=a.length;o>i;n=++i)if(r=a[n],t>n)s+=r.getLength();else if(n===t){s+=e;break}return s},i.prototype.getEndPosition=function(){var t,e;return null!=this.endPosition?this.endPosition:this.endPosition=function(){var n,i,o;for(e=0,o=this.objects,n=0,i=o.length;i>n;n++)t=o[n],e+=t.getLength();return e}.call(this)},i.prototype.toString=function(){return this.objects.join("")},i.prototype.toArray=function(){return this.objects.slice(0)},i.prototype.toJSON=function(){return this.toArray()},i.prototype.isEqualTo=function(t){return i.__super__.isEqualTo.apply(this,arguments)||s(this.objects,null!=t?t.objects:void 0)},s=function(t,e){var n,i,o,r,s;if(null==e&&(e=[]),t.length!==e.length)return !1;for(s=!0,i=n=0,o=t.length;o>n;i=++n)r=t[i],s&&!r.isEqualTo(e[i])&&(s=!1);return s},i.prototype.contentsForInspection=function(){var t;return {objects:"["+function(){var e,n,i,o;for(i=this.objects,o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.inspect());return o}.call(this).join(", ")+"]"}},a=function(t){return t[0]},r=function(t){return t[1]},i}(e.Object);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Text=function(n){function i(t){var n;null==t&&(t=[]),i.__super__.constructor.apply(this,arguments),this.pieceList=new e.SplittableList(function(){var e,i,o;for(o=[],e=0,i=t.length;i>e;e++)n=t[e],n.isEmpty()||o.push(n);return o}());}return t(i,n),i.textForAttachmentWithAttributes=function(t,n){var i;return i=new e.AttachmentPiece(t,n),new this([i])},i.textForStringWithAttributes=function(t,n){var i;return i=new e.StringPiece(t,n),new this([i])},i.fromJSON=function(t){var n,i;return i=function(){var i,o,r;for(r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push(e.Piece.fromJSON(n));return r}(),new this(i)},i.prototype.copy=function(){return this.copyWithPieceList(this.pieceList)},i.prototype.copyWithPieceList=function(t){return new this.constructor(t.consolidate().toArray())},i.prototype.copyUsingObjectMap=function(t){var e,n;return n=function(){var n,i,o,r,s;for(o=this.getPieces(),s=[],n=0,i=o.length;i>n;n++)e=o[n],s.push(null!=(r=t.find(e))?r:e);return s}.call(this),new this.constructor(n)},i.prototype.appendText=function(t){return this.insertTextAtPosition(t,this.getLength())},i.prototype.insertTextAtPosition=function(t,e){return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList,e))},i.prototype.removeTextAtRange=function(t){return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t))},i.prototype.replaceTextAtRange=function(t,e){return this.removeTextAtRange(e).insertTextAtPosition(t,e[0])},i.prototype.moveTextFromRangeToPosition=function(t,e){var n,i;if(!(t[0]<=e&&e<=t[1]))return i=this.getTextAtRange(t),n=i.getLength(),t[0]<e&&(e-=n),this.removeTextAtRange(t).insertTextAtPosition(i,e)},i.prototype.addAttributeAtRange=function(t,e,n){var i;return i={},i[t]=e,this.addAttributesAtRange(i,n)},i.prototype.addAttributesAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithAdditionalAttributes(t)}))},i.prototype.removeAttributeAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithoutAttribute(t)}))},i.prototype.setAttributesAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithAttributes(t)}))},i.prototype.getAttributesAtPosition=function(t){var e,n;return null!=(e=null!=(n=this.pieceList.getObjectAtPosition(t))?n.getAttributes():void 0)?e:{}
    },i.prototype.getCommonAttributes=function(){var t,n;return t=function(){var t,e,i,o;for(i=this.pieceList.toArray(),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.getAttributes());return o}.call(this),e.Hash.fromCommonAttributesOfObjects(t).toObject()},i.prototype.getCommonAttributesAtRange=function(t){var e;return null!=(e=this.getTextAtRange(t).getCommonAttributes())?e:{}},i.prototype.getExpandedRangeForAttributeAtOffset=function(t,e){var n,i,o;for(n=o=e,i=this.getLength();n>0&&this.getCommonAttributesAtRange([n-1,o])[t];)n--;for(;i>o&&this.getCommonAttributesAtRange([e,o+1])[t];)o++;return [n,o]},i.prototype.getTextAtRange=function(t){return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t))},i.prototype.getStringAtRange=function(t){return this.pieceList.getSplittableListInRange(t).toString()},i.prototype.getStringAtPosition=function(t){return this.getStringAtRange([t,t+1])},i.prototype.startsWithString=function(t){return this.getStringAtRange([0,t.length])===t},i.prototype.endsWithString=function(t){var e;return e=this.getLength(),this.getStringAtRange([e-t.length,e])===t},i.prototype.getAttachmentPieces=function(){var t,e,n,i,o;for(i=this.pieceList.toArray(),o=[],t=0,e=i.length;e>t;t++)n=i[t],null!=n.attachment&&o.push(n);return o},i.prototype.getAttachments=function(){var t,e,n,i,o;for(i=this.getAttachmentPieces(),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.attachment);return o},i.prototype.getAttachmentAndPositionById=function(t){var e,n,i,o,r,s;for(o=0,r=this.pieceList.toArray(),e=0,n=r.length;n>e;e++){if(i=r[e],(null!=(s=i.attachment)?s.id:void 0)===t)return {attachment:i.attachment,position:o};o+=i.length;}return {attachment:null,position:null}},i.prototype.getAttachmentById=function(t){var e,n,i;return i=this.getAttachmentAndPositionById(t),e=i.attachment,n=i.position,e},i.prototype.getRangeOfAttachment=function(t){var e,n;return n=this.getAttachmentAndPositionById(t.id),t=n.attachment,e=n.position,null!=t?[e,e+1]:void 0},i.prototype.updateAttributesForAttachment=function(t,e){var n;return (n=this.getRangeOfAttachment(e))?this.addAttributesAtRange(t,n):this},i.prototype.getLength=function(){return this.pieceList.getEndPosition()},i.prototype.isEmpty=function(){return 0===this.getLength()},i.prototype.isEqualTo=function(t){var e;return i.__super__.isEqualTo.apply(this,arguments)||(null!=t&&null!=(e=t.pieceList)?e.isEqualTo(this.pieceList):void 0)},i.prototype.isBlockBreak=function(){return 1===this.getLength()&&this.pieceList.getObjectAtIndex(0).isBlockBreak()},i.prototype.eachPiece=function(t){return this.pieceList.eachObject(t)},i.prototype.getPieces=function(){return this.pieceList.toArray()},i.prototype.getPieceAtPosition=function(t){return this.pieceList.getObjectAtPosition(t)},i.prototype.contentsForInspection=function(){return {pieceList:this.pieceList.inspect()}},i.prototype.toSerializableText=function(){var t;return t=this.pieceList.selectSplittableList(function(t){return t.isSerializable()}),this.copyWithPieceList(t)},i.prototype.toString=function(){return this.pieceList.toString()},i.prototype.toJSON=function(){return this.pieceList.toJSON()},i.prototype.toConsole=function(){var t;return JSON.stringify(function(){var e,n,i,o;for(i=this.pieceList.toArray(),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(JSON.parse(t.toConsole()));return o}.call(this))},i}(e.Object);}.call(this),function(){var t,n,i,o,r,s=function(t,e){function n(){this.constructor=t;}for(var i in e)a.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty,u=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1},c=[].slice;t=e.arraysAreEqual,r=e.spliceArray,i=e.getBlockConfig,n=e.getBlockAttributeNames,o=e.getListAttributeNames,e.Block=function(n){function a(t,n){null==t&&(t=new e.Text),null==n&&(n=[]),a.__super__.constructor.apply(this,arguments),this.text=h(t),this.attributes=n;}var l,h,p,d,f,g,m,v,y;return s(a,n),a.fromJSON=function(t){var n;return n=e.Text.fromJSON(t.text),new this(n,t.attributes)},a.prototype.isEmpty=function(){return this.text.isBlockBreak()},a.prototype.isEqualTo=function(e){return a.__super__.isEqualTo.apply(this,arguments)||this.text.isEqualTo(null!=e?e.text:void 0)&&t(this.attributes,null!=e?e.attributes:void 0)},a.prototype.copyWithText=function(t){return new this.constructor(t,this.attributes)},a.prototype.copyWithoutText=function(){return this.copyWithText(null)},a.prototype.copyWithAttributes=function(t){return new this.constructor(this.text,t)},a.prototype.copyWithoutAttributes=function(){return this.copyWithAttributes(null)},a.prototype.copyUsingObjectMap=function(t){var e;return this.copyWithText((e=t.find(this.text))?e:this.text.copyUsingObjectMap(t))},a.prototype.addAttribute=function(t){var e;return e=this.attributes.concat(d(t)),this.copyWithAttributes(e)},a.prototype.removeAttribute=function(t){var e,n;return n=i(t).listAttribute,e=g(g(this.attributes,t),n),this.copyWithAttributes(e)},a.prototype.removeLastAttribute=function(){return this.removeAttribute(this.getLastAttribute())},a.prototype.getLastAttribute=function(){return f(this.attributes)},a.prototype.getAttributes=function(){return this.attributes.slice(0)},a.prototype.getAttributeLevel=function(){return this.attributes.length},a.prototype.getAttributeAtLevel=function(t){return this.attributes[t-1]},a.prototype.hasAttribute=function(t){return u.call(this.attributes,t)>=0},a.prototype.hasAttributes=function(){return this.getAttributeLevel()>0},a.prototype.getLastNestableAttribute=function(){return f(this.getNestableAttributes())},a.prototype.getNestableAttributes=function(){var t,e,n,o,r;for(o=this.attributes,r=[],e=0,n=o.length;n>e;e++)t=o[e],i(t).nestable&&r.push(t);return r},a.prototype.getNestingLevel=function(){return this.getNestableAttributes().length},a.prototype.decreaseNestingLevel=function(){var t;return (t=this.getLastNestableAttribute())?this.removeAttribute(t):this},a.prototype.increaseNestingLevel=function(){var t,e,n;return (t=this.getLastNestableAttribute())?(n=this.attributes.lastIndexOf(t),e=r.apply(null,[this.attributes,n+1,0].concat(c.call(d(t)))),this.copyWithAttributes(e)):this},a.prototype.getListItemAttributes=function(){var t,e,n,o,r;for(o=this.attributes,r=[],e=0,n=o.length;n>e;e++)t=o[e],i(t).listAttribute&&r.push(t);return r},a.prototype.isListItem=function(){var t;return null!=(t=i(this.getLastAttribute()))?t.listAttribute:void 0},a.prototype.isTerminalBlock=function(){var t;return null!=(t=i(this.getLastAttribute()))?t.terminal:void 0},a.prototype.breaksOnReturn=function(){var t;return null!=(t=i(this.getLastAttribute()))?t.breakOnReturn:void 0},a.prototype.findLineBreakInDirectionFromPosition=function(t,e){var n,i;return i=this.toString(),n=function(){switch(t){case"forward":return i.indexOf("\n",e);case"backward":return i.slice(0,e).lastIndexOf("\n")}}(),-1!==n?n:void 0},a.prototype.contentsForInspection=function(){return {text:this.text.inspect(),attributes:this.attributes}},a.prototype.toString=function(){return this.text.toString()},a.prototype.toJSON=function(){return {text:this.text,attributes:this.attributes}},a.prototype.getLength=function(){return this.text.getLength()},a.prototype.canBeConsolidatedWith=function(t){return !this.hasAttributes()&&!t.hasAttributes()},a.prototype.consolidateWith=function(t){var n,i;return n=e.Text.textForStringWithAttributes("\n"),i=this.getTextWithoutBlockBreak().appendText(n),this.copyWithText(i.appendText(t.text))},a.prototype.splitAtOffset=function(t){var e,n;return 0===t?(e=null,n=this):t===this.getLength()?(e=this,n=null):(e=this.copyWithText(this.text.getTextAtRange([0,t])),n=this.copyWithText(this.text.getTextAtRange([t,this.getLength()]))),[e,n]},a.prototype.getBlockBreakPosition=function(){return this.text.getLength()-1},a.prototype.getTextWithoutBlockBreak=function(){return m(this.text)?this.text.getTextAtRange([0,this.getBlockBreakPosition()]):this.text.copy()},a.prototype.canBeGrouped=function(t){return this.attributes[t]},a.prototype.canBeGroupedWith=function(t,e){var n,r,s,a;return s=t.getAttributes(),r=s[e],n=this.attributes[e],n===r&&!(i(n).group===!1&&(a=s[e+1],u.call(o(),a)<0))},h=function(t){return t=y(t),t=l(t)},y=function(t){var n,i,o,r,s,a;return r=!1,a=t.getPieces(),i=2<=a.length?c.call(a,0,n=a.length-1):(n=0,[]),o=a[n++],null==o?t:(i=function(){var t,e,n;for(n=[],t=0,e=i.length;e>t;t++)s=i[t],s.isBlockBreak()?(r=!0,n.push(v(s))):n.push(s);return n}(),r?new e.Text(c.call(i).concat([o])):t)},p=e.Text.textForStringWithAttributes("\n",{blockBreak:!0}),l=function(t){return m(t)?t:t.appendText(p)},m=function(t){var e,n;return n=t.getLength(),0===n?!1:(e=t.getTextAtRange([n-1,n]),e.isBlockBreak())},v=function(t){return t.copyWithoutAttribute("blockBreak")},d=function(t){var e;return e=i(t).listAttribute,null!=e?[e,t]:[t]},f=function(t){return t.slice(-1)[0]},g=function(t,e){var n;return n=t.lastIndexOf(e),-1===n?t:r(t,n,1)},a}(e.Object);}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t;}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty,s=[].slice,a=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};n=e.tagName,i=e.walkTree,t=e.nodeIsAttachmentElement,e.HTMLSanitizer=function(r){function u(t,e){this.allowedAttributes=(null!=e?e:{}).allowedAttributes,null==this.allowedAttributes&&(this.allowedAttributes=c),this.body=l(t);}var c,l,h;return o(u,r),c="style href src width height class".split(" "),u.sanitize=function(t,e){var n;return n=new this(t,e),n.sanitize(),n},u.prototype.sanitize=function(){return this.sanitizeElements(),this.normalizeListElementNesting()},u.prototype.getHTML=function(){return this.body.innerHTML},u.prototype.getBody=function(){return this.body},u.prototype.sanitizeElements=function(){var t,n,o,r,s;for(s=i(this.body),r=[];s.nextNode();)switch(o=s.currentNode,o.nodeType){case Node.ELEMENT_NODE:h(o)?r.push(o):this.sanitizeElement(o);break;case Node.COMMENT_NODE:r.push(o);}for(t=0,n=r.length;n>t;t++)o=r[t],e.removeNode(o);return this.body},u.prototype.sanitizeElement=function(t){var e,n,i,o;for(o=s.call(t.attributes),e=0,n=o.length;n>e;e++)i=o[e].name,a.call(this.allowedAttributes,i)>=0||0===i.indexOf("data-trix")||t.removeAttribute(i);return t},u.prototype.normalizeListElementNesting=function(){var t,e,i,o,r;for(r=s.call(this.body.querySelectorAll("ul,ol")),t=0,e=r.length;e>t;t++)i=r[t],(o=i.previousElementSibling)&&"li"===n(o)&&o.appendChild(i);return this.body},h=function(e){return (null!=e?e.nodeType:void 0)!==Node.ELEMENT_NODE||t(e)?void 0:"script"===n(e)||"false"===e.getAttribute("data-trix-serialize")},l=function(t){var e,n,i,o,r;for(null==t&&(t=""),t=t.replace(/<\/html[^>]*>[^]*$/i,"</html>"),e=document.implementation.createHTMLDocument(""),e.documentElement.innerHTML=t,r=e.head.querySelectorAll("style"),i=0,o=r.length;o>i;i++)n=r[i],e.body.appendChild(n);return e.body},u}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h,p=function(t,e){function n(){this.constructor=t;}for(var i in e)d.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},d={}.hasOwnProperty,f=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.arraysAreEqual,s=e.makeElement,l=e.tagName,r=e.getBlockTagNames,h=e.walkTree,o=e.findClosestElementFromNode,i=e.elementContainsNode,a=e.nodeIsAttachmentElement,u=e.normalizeSpaces,n=e.breakableWhitespacePattern,c=e.squishBreakableWhitespace,e.HTMLParser=function(d){function g(t,e){this.html=t,this.referenceElement=(null!=e?e:{}).referenceElement,this.blocks=[],this.blockElements=[],this.processedElements=[];}var m,v,y,b,A,C,x,w,E,S,R,k;return p(g,d),g.parse=function(t,e){var n;return n=new this(t,e),n.parse(),n},g.prototype.getDocument=function(){return e.Document.fromJSON(this.blocks)},g.prototype.parse=function(){var t,n;try{for(this.createHiddenContainer(),t=e.HTMLSanitizer.sanitize(this.html).getHTML(),this.containerElement.innerHTML=t,n=h(this.containerElement,{usingFilter:w});n.nextNode();)this.processNode(n.currentNode);return this.translateBlockElementMarginsToNewlines()}finally{this.removeHiddenContainer();}},g.prototype.createHiddenContainer=function(){return this.referenceElement?(this.containerElement=this.referenceElement.cloneNode(!1),this.containerElement.removeAttribute("id"),this.containerElement.setAttribute("data-trix-internal",""),this.containerElement.style.display="none",this.referenceElement.parentNode.insertBefore(this.containerElement,this.referenceElement.nextSibling)):(this.containerElement=s({tagName:"div",style:{display:"none"}}),document.body.appendChild(this.containerElement))},g.prototype.removeHiddenContainer=function(){return e.removeNode(this.containerElement)},w=function(t){return "style"===l(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},g.prototype.processNode=function(t){switch(t.nodeType){case Node.TEXT_NODE:if(!this.isInsignificantTextNode(t))return this.appendBlockForTextNode(t),this.processTextNode(t);break;case Node.ELEMENT_NODE:return this.appendBlockForElement(t),this.processElement(t)}},g.prototype.appendBlockForTextNode=function(e){var n,i,o;return i=e.parentNode,i!==this.currentBlockElement&&this.isBlockElement(i)?(n=this.getBlockAttributes(i),t(n,null!=(o=this.currentBlock)?o.attributes:void 0)?void 0:(this.currentBlock=this.appendBlockForAttributesWithElement(n,i),this.currentBlockElement=i)):void 0},g.prototype.appendBlockForElement=function(e){var n,o,r,s;if(r=this.isBlockElement(e),o=i(this.currentBlockElement,e),r&&!this.isBlockElement(e.firstChild)){if(!(this.isInsignificantTextNode(e.firstChild)&&this.isBlockElement(e.firstElementChild)||(n=this.getBlockAttributes(e),o&&t(n,this.currentBlock.attributes))))return this.currentBlock=this.appendBlockForAttributesWithElement(n,e),this.currentBlockElement=e}else if(this.currentBlockElement&&!o&&!r)return (s=this.findParentBlockElement(e))?this.appendBlockForElement(s):(this.currentBlock=this.appendEmptyBlock(),this.currentBlockElement=null)},g.prototype.findParentBlockElement=function(t){var e;for(e=t.parentElement;e&&e!==this.containerElement;){if(this.isBlockElement(e)&&f.call(this.blockElements,e)>=0)return e;e=e.parentElement;}return null},g.prototype.processTextNode=function(t){var e,n;return n=t.data,v(t.parentNode)||(n=c(n),R(null!=(e=t.previousSibling)?e.textContent:void 0)&&(n=C(n))),this.appendStringWithAttributes(n,this.getTextAttributes(t.parentNode))},g.prototype.processElement=function(t){var e,n,i,o,r;if(a(t))return e=y(t),Object.keys(e).length&&(o=this.getTextAttributes(t),this.appendAttachmentWithAttributes(e,o),t.innerHTML=""),this.processedElements.push(t);switch(l(t)){case"br":return this.isExtraBR(t)||this.isBlockElement(t.nextSibling)||this.appendStringWithAttributes("\n",this.getTextAttributes(t)),this.processedElements.push(t);case"img":e={url:t.getAttribute("src"),contentType:"image"},i=A(t);for(n in i)r=i[n],e[n]=r;return this.appendAttachmentWithAttributes(e,this.getTextAttributes(t)),this.processedElements.push(t);case"tr":if(t.parentNode.firstChild!==t)return this.appendStringWithAttributes("\n");break;case"td":if(t.parentNode.firstChild!==t)return this.appendStringWithAttributes(" | ")}},g.prototype.appendBlockForAttributesWithElement=function(t,e){var n;return this.blockElements.push(e),n=m(t),this.blocks.push(n),n},g.prototype.appendEmptyBlock=function(){return this.appendBlockForAttributesWithElement([],null)},g.prototype.appendStringWithAttributes=function(t,e){return this.appendPiece(S(t,e))},g.prototype.appendAttachmentWithAttributes=function(t,e){return this.appendPiece(E(t,e))},g.prototype.appendPiece=function(t){return 0===this.blocks.length&&this.appendEmptyBlock(),this.blocks[this.blocks.length-1].text.push(t)},g.prototype.appendStringToTextAtIndex=function(t,e){var n,i;return i=this.blocks[e].text,n=i[i.length-1],"string"===(null!=n?n.type:void 0)?n.string+=t:i.push(S(t))},g.prototype.prependStringToTextAtIndex=function(t,e){var n,i;return i=this.blocks[e].text,n=i[0],"string"===(null!=n?n.type:void 0)?n.string=t+n.string:i.unshift(S(t))},S=function(t,e){var n;return null==e&&(e={}),n="string",t=u(t),{string:t,attributes:e,type:n}},E=function(t,e){var n;return null==e&&(e={}),n="attachment",{attachment:t,attributes:e,type:n}},m=function(t){var e;return null==t&&(t={}),e=[],{text:e,attributes:t}},g.prototype.getTextAttributes=function(t){var n,i,r,s,u,c,l,h,p,d,f,g,m;r={},d=e.config.textAttributes;for(n in d)if(u=d[n],u.tagName&&o(t,{matchingSelector:u.tagName,untilNode:this.containerElement}))r[n]=!0;else if(u.parser){if(m=u.parser(t)){for(i=!1,f=this.findBlockElementAncestors(t),c=0,p=f.length;p>c;c++)if(s=f[c],u.parser(s)===m){i=!0;break}i||(r[n]=m);}}else u.styleProperty&&(m=t.style[u.styleProperty])&&(r[n]=m);if(a(t)&&(l=t.getAttribute("data-trix-attributes"))){g=JSON.parse(l);for(h in g)m=g[h],r[h]=m;}return r},g.prototype.getBlockAttributes=function(t){var n,i,o,r;for(i=[];t&&t!==this.containerElement;){r=e.config.blockAttributes;for(n in r)o=r[n],o.parse!==!1&&l(t)===o.tagName&&(("function"==typeof o.test?o.test(t):void 0)||!o.test)&&(i.push(n),o.listAttribute&&i.push(o.listAttribute));t=t.parentNode;}return i.reverse()},g.prototype.findBlockElementAncestors=function(t){var e,n;for(e=[];t&&t!==this.containerElement;)n=l(t),f.call(r(),n)>=0&&e.push(t),t=t.parentNode;return e},y=function(t){return JSON.parse(t.getAttribute("data-trix-attachment"))},A=function(t){var e,n,i;return i=t.getAttribute("width"),n=t.getAttribute("height"),e={},i&&(e.width=parseInt(i,10)),n&&(e.height=parseInt(n,10)),e},g.prototype.isBlockElement=function(t){var e;if((null!=t?t.nodeType:void 0)===Node.ELEMENT_NODE&&!a(t)&&!o(t,{matchingSelector:"td",untilNode:this.containerElement}))return e=l(t),f.call(r(),e)>=0||"block"===window.getComputedStyle(t).display},g.prototype.isInsignificantTextNode=function(t){var e,n,i;if((null!=t?t.nodeType:void 0)===Node.TEXT_NODE&&k(t.data)&&(n=t.parentNode,i=t.previousSibling,e=t.nextSibling,(!x(n.previousSibling)||this.isBlockElement(n.previousSibling))&&!v(n)))return !i||this.isBlockElement(i)||!e||this.isBlockElement(e)},g.prototype.isExtraBR=function(t){return "br"===l(t)&&this.isBlockElement(t.parentNode)&&t.parentNode.lastChild===t},v=function(t){var e;return e=window.getComputedStyle(t).whiteSpace,"pre"===e||"pre-wrap"===e||"pre-line"===e},x=function(t){return t&&!R(t.textContent)},g.prototype.translateBlockElementMarginsToNewlines=function(){var t,e,n,i,o,r,s,a;for(e=this.getMarginOfDefaultBlockElement(),s=this.blocks,a=[],i=n=0,o=s.length;o>n;i=++n)t=s[i],(r=this.getMarginOfBlockElementAtIndex(i))&&(r.top>2*e.top&&this.prependStringToTextAtIndex("\n",i),a.push(r.bottom>2*e.bottom?this.appendStringToTextAtIndex("\n",i):void 0));return a},g.prototype.getMarginOfBlockElementAtIndex=function(t){var e,n;return !(e=this.blockElements[t])||!e.textContent||(n=l(e),f.call(r(),n)>=0||f.call(this.processedElements,e)>=0)?void 0:b(e)},g.prototype.getMarginOfDefaultBlockElement=function(){var t;return t=s(e.config.blockAttributes["default"].tagName),this.containerElement.appendChild(t),b(t)},b=function(t){var e;return e=window.getComputedStyle(t),"block"===e.display?{top:parseInt(e.marginTop),bottom:parseInt(e.marginBottom)}:void 0},C=function(t){return t.replace(RegExp("^"+n.source+"+"),"")},k=function(t){return RegExp("^"+n.source+"*$").test(t)},R=function(t){return /\s$/.test(t)},g}(e.BasicObject);}.call(this),function(){var t,n,i,o,r=function(t,e){function n(){this.constructor=t;}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].slice,u=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.arraysAreEqual,i=e.normalizeRange,o=e.rangeIsCollapsed,n=e.getBlockConfig,e.Document=function(s){function c(t){null==t&&(t=[]),c.__super__.constructor.apply(this,arguments),0===t.length&&(t=[new e.Block]),this.blockList=e.SplittableList.box(t);}var l;return r(c,s),c.fromJSON=function(t){var n,i;return i=function(){var i,o,r;for(r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push(e.Block.fromJSON(n));return r}(),new this(i)},c.fromHTML=function(t,n){return e.HTMLParser.parse(t,n).getDocument()},c.fromString=function(t,n){var i;return i=e.Text.textForStringWithAttributes(t,n),new this([new e.Block(i)])},c.prototype.isEmpty=function(){var t;return 1===this.blockList.length&&(t=this.getBlockAtIndex(0),t.isEmpty()&&!t.hasAttributes())},c.prototype.copy=function(t){var e;return null==t&&(t={}),e=t.consolidateBlocks?this.blockList.consolidate().toArray():this.blockList.toArray(),new this.constructor(e)},c.prototype.copyUsingObjectsFromDocument=function(t){var n;return n=new e.ObjectMap(t.getObjects()),this.copyUsingObjectMap(n)},c.prototype.copyUsingObjectMap=function(t){var e,n,i;return n=function(){var n,o,r,s;for(r=this.getBlocks(),s=[],n=0,o=r.length;o>n;n++)e=r[n],s.push((i=t.find(e))?i:e.copyUsingObjectMap(t));return s}.call(this),new this.constructor(n)},c.prototype.copyWithBaseBlockAttributes=function(t){var e,n,i;return null==t&&(t=[]),i=function(){var i,o,r,s;for(r=this.getBlocks(),s=[],i=0,o=r.length;o>i;i++)n=r[i],e=t.concat(n.getAttributes()),s.push(n.copyWithAttributes(e));return s}.call(this),new this.constructor(i)},c.prototype.replaceBlock=function(t,e){var n;return n=this.blockList.indexOf(t),-1===n?this:new this.constructor(this.blockList.replaceObjectAtIndex(e,n))},c.prototype.insertDocumentAtRange=function(t,e){var n,r,s,a,u,c,l;return r=t.blockList,u=(e=i(e))[0],c=this.locationFromPosition(u),s=c.index,a=c.offset,l=this,n=this.getBlockAtPosition(u),o(e)&&n.isEmpty()&&!n.hasAttributes()?l=new this.constructor(l.blockList.removeObjectAtIndex(s)):n.getBlockBreakPosition()===a&&u++,l=l.removeTextAtRange(e),new this.constructor(l.blockList.insertSplittableListAtPosition(r,u))},c.prototype.mergeDocumentAtRange=function(e,n){var o,r,s,a,u,c,l,h,p,d,f,g;return f=(n=i(n))[0],d=this.locationFromPosition(f),r=this.getBlockAtIndex(d.index).getAttributes(),o=e.getBaseBlockAttributes(),g=r.slice(-o.length),t(o,g)?(l=r.slice(0,-o.length),c=e.copyWithBaseBlockAttributes(l)):c=e.copy({consolidateBlocks:!0}).copyWithBaseBlockAttributes(r),s=c.getBlockCount(),a=c.getBlockAtIndex(0),t(r,a.getAttributes())?(u=a.getTextWithoutBlockBreak(),p=this.insertTextAtRange(u,n),s>1&&(c=new this.constructor(c.getBlocks().slice(1)),h=f+u.getLength(),p=p.insertDocumentAtRange(c,h))):p=this.insertDocumentAtRange(c,n),p},c.prototype.insertTextAtRange=function(t,e){var n,o,r,s,a;return a=(e=i(e))[0],s=this.locationFromPosition(a),o=s.index,r=s.offset,n=this.removeTextAtRange(e),new this.constructor(n.blockList.editObjectAtIndex(o,function(e){return e.copyWithText(e.text.insertTextAtPosition(t,r))}))},c.prototype.removeTextAtRange=function(t){var e,n,r,s,a,u,c,l,h,p,d,f,g,m,v,y,b,A,C,x,w;return p=t=i(t),l=p[0],A=p[1],o(t)?this:(d=this.locationRangeFromRange(t),u=d[0],y=d[1],a=u.index,c=u.offset,s=this.getBlockAtIndex(a),v=y.index,b=y.offset,m=this.getBlockAtIndex(v),f=A-l===1&&s.getBlockBreakPosition()===c&&m.getBlockBreakPosition()!==b&&"\n"===m.text.getStringAtPosition(b),f?r=this.blockList.editObjectAtIndex(v,function(t){return t.copyWithText(t.text.removeTextAtRange([b,b+1]))}):(h=s.text.getTextAtRange([0,c]),C=m.text.getTextAtRange([b,m.getLength()]),x=h.appendText(C),g=a!==v&&0===c,w=g&&s.getAttributeLevel()>=m.getAttributeLevel(),n=w?m.copyWithText(x):s.copyWithText(x),e=v+1-a,r=this.blockList.splice(a,e,n)),new this.constructor(r))},c.prototype.moveTextFromRangeToPosition=function(t,e){var n,o,r,s,u,c,l,h,p,d;return c=t=i(t),p=c[0],r=c[1],e>=p&&r>=e?this:(o=this.getDocumentAtRange(t),h=this.removeTextAtRange(t),u=e>p,u&&(e-=o.getLength()),l=o.getBlocks(),s=l[0],n=2<=l.length?a.call(l,1):[],0===n.length?(d=s.getTextWithoutBlockBreak(),u&&(e+=1)):d=s.text,h=h.insertTextAtRange(d,e),0===n.length?h:(o=new this.constructor(n),e+=d.getLength(),h.insertDocumentAtRange(o,e)))},c.prototype.addAttributeAtRange=function(t,e,i){var o;return o=this.blockList,this.eachBlockAtRange(i,function(i,r,s){return o=o.editObjectAtIndex(s,function(){return n(t)?i.addAttribute(t,e):r[0]===r[1]?i:i.copyWithText(i.text.addAttributeAtRange(t,e,r))})}),new this.constructor(o)},c.prototype.addAttribute=function(t,e){var n;return n=this.blockList,this.eachBlock(function(i,o){return n=n.editObjectAtIndex(o,function(){return i.addAttribute(t,e)})}),new this.constructor(n)},c.prototype.removeAttributeAtRange=function(t,e){var i;return i=this.blockList,this.eachBlockAtRange(e,function(e,o,r){return n(t)?i=i.editObjectAtIndex(r,function(){return e.removeAttribute(t)}):o[0]!==o[1]?i=i.editObjectAtIndex(r,function(){return e.copyWithText(e.text.removeAttributeAtRange(t,o))}):void 0}),new this.constructor(i)},c.prototype.updateAttributesForAttachment=function(t,e){var n,i,o,r;return o=(i=this.getRangeOfAttachment(e))[0],n=this.locationFromPosition(o).index,r=this.getTextAtIndex(n),new this.constructor(this.blockList.editObjectAtIndex(n,function(n){return n.copyWithText(r.updateAttributesForAttachment(t,e))}))},c.prototype.removeAttributeForAttachment=function(t,e){var n;return n=this.getRangeOfAttachment(e),this.removeAttributeAtRange(t,n)},c.prototype.insertBlockBreakAtRange=function(t){var n,o,r,s;return s=(t=i(t))[0],r=this.locationFromPosition(s).offset,o=this.removeTextAtRange(t),0===r&&(n=[new e.Block]),new this.constructor(o.blockList.insertSplittableListAtPosition(new e.SplittableList(n),s))},c.prototype.applyBlockAttributeAtRange=function(t,e,i){var o,r,s,a;return s=this.expandRangeToLineBreaksAndSplitBlocks(i),r=s.document,i=s.range,o=n(t),o.listAttribute?(r=r.removeLastListAttributeAtRange(i,{exceptAttributeName:t}),a=r.convertLineBreaksToBlockBreaksInRange(i),r=a.document,i=a.range):r=o.exclusive?r.removeBlockAttributesAtRange(i):o.terminal?r.removeLastTerminalAttributeAtRange(i):r.consolidateBlocksAtRange(i),r.addAttributeAtRange(t,e,i)},c.prototype.removeLastListAttributeAtRange=function(t,e){var i;return null==e&&(e={}),i=this.blockList,this.eachBlockAtRange(t,function(t,o,r){var s;if((s=t.getLastAttribute())&&n(s).listAttribute&&s!==e.exceptAttributeName)return i=i.editObjectAtIndex(r,function(){return t.removeAttribute(s)})}),new this.constructor(i)},c.prototype.removeLastTerminalAttributeAtRange=function(t){var e;return e=this.blockList,this.eachBlockAtRange(t,function(t,i,o){var r;if((r=t.getLastAttribute())&&n(r).terminal)return e=e.editObjectAtIndex(o,function(){return t.removeAttribute(r)})}),new this.constructor(e)},c.prototype.removeBlockAttributesAtRange=function(t){var e;return e=this.blockList,this.eachBlockAtRange(t,function(t,n,i){return t.hasAttributes()?e=e.editObjectAtIndex(i,function(){return t.copyWithoutAttributes()}):void 0}),new this.constructor(e)},c.prototype.expandRangeToLineBreaksAndSplitBlocks=function(t){var e,n,o,r,s,a,u,c,l;return a=t=i(t),l=a[0],r=a[1],c=this.locationFromPosition(l),o=this.locationFromPosition(r),e=this,u=e.getBlockAtIndex(c.index),null!=(c.offset=u.findLineBreakInDirectionFromPosition("backward",c.offset))&&(s=e.positionFromLocation(c),e=e.insertBlockBreakAtRange([s,s+1]),o.index+=1,o.offset-=e.getBlockAtIndex(c.index).getLength(),c.index+=1),c.offset=0,0===o.offset&&o.index>c.index?(o.index-=1,o.offset=e.getBlockAtIndex(o.index).getBlockBreakPosition()):(n=e.getBlockAtIndex(o.index),"\n"===n.text.getStringAtRange([o.offset-1,o.offset])?o.offset-=1:o.offset=n.findLineBreakInDirectionFromPosition("forward",o.offset),o.offset!==n.getBlockBreakPosition()&&(s=e.positionFromLocation(o),e=e.insertBlockBreakAtRange([s,s+1]))),l=e.positionFromLocation(c),r=e.positionFromLocation(o),t=i([l,r]),{document:e,range:t}},c.prototype.convertLineBreaksToBlockBreaksInRange=function(t){var e,n,o;return n=(t=i(t))[0],o=this.getStringAtRange(t).slice(0,-1),e=this,o.replace(/.*?\n/g,function(t){return n+=t.length,e=e.insertBlockBreakAtRange([n-1,n])}),{document:e,range:t}},c.prototype.consolidateBlocksAtRange=function(t){var e,n,o,r,s;return o=t=i(t),s=o[0],n=o[1],r=this.locationFromPosition(s).index,e=this.locationFromPosition(n).index,new this.constructor(this.blockList.consolidateFromIndexToIndex(r,e))},c.prototype.getDocumentAtRange=function(t){var e;return t=i(t),e=this.blockList.getSplittableListInRange(t).toArray(),new this.constructor(e)},c.prototype.getStringAtRange=function(t){var e,n,o;return o=t=i(t),n=o[o.length-1],n!==this.getLength()&&(e=-1),this.getDocumentAtRange(t).toString().slice(0,e)},c.prototype.getBlockAtIndex=function(t){return this.blockList.getObjectAtIndex(t)},c.prototype.getBlockAtPosition=function(t){var e;return e=this.locationFromPosition(t).index,this.getBlockAtIndex(e)},c.prototype.getTextAtIndex=function(t){var e;return null!=(e=this.getBlockAtIndex(t))?e.text:void 0},c.prototype.getTextAtPosition=function(t){var e;return e=this.locationFromPosition(t).index,this.getTextAtIndex(e)},c.prototype.getPieceAtPosition=function(t){var e,n,i;return i=this.locationFromPosition(t),e=i.index,n=i.offset,this.getTextAtIndex(e).getPieceAtPosition(n)},c.prototype.getCharacterAtPosition=function(t){var e,n,i;return i=this.locationFromPosition(t),e=i.index,n=i.offset,this.getTextAtIndex(e).getStringAtRange([n,n+1])},c.prototype.getLength=function(){return this.blockList.getEndPosition()},c.prototype.getBlocks=function(){return this.blockList.toArray()},c.prototype.getBlockCount=function(){return this.blockList.length},c.prototype.getEditCount=function(){return this.editCount},c.prototype.eachBlock=function(t){return this.blockList.eachObject(t)},c.prototype.eachBlockAtRange=function(t,e){var n,o,r,s,a,u,c,l,h,p,d,f;if(u=t=i(t),d=u[0],r=u[1],p=this.locationFromPosition(d),o=this.locationFromPosition(r),p.index===o.index)return n=this.getBlockAtIndex(p.index),f=[p.offset,o.offset],e(n,f,p.index);for(h=[],a=s=c=p.index,l=o.index;l>=c?l>=s:s>=l;a=l>=c?++s:--s)(n=this.getBlockAtIndex(a))?(f=function(){switch(a){case p.index:return [p.offset,n.text.getLength()];case o.index:return [0,o.offset];default:return [0,n.text.getLength()]}}(),h.push(e(n,f,a))):h.push(void 0);return h},c.prototype.getCommonAttributesAtRange=function(t){var n,r,s;return r=(t=i(t))[0],o(t)?this.getCommonAttributesAtPosition(r):(s=[],n=[],this.eachBlockAtRange(t,function(t,e){return e[0]!==e[1]?(s.push(t.text.getCommonAttributesAtRange(e)),n.push(l(t))):void 0}),e.Hash.fromCommonAttributesOfObjects(s).merge(e.Hash.fromCommonAttributesOfObjects(n)).toObject())},c.prototype.getCommonAttributesAtPosition=function(t){var n,i,o,r,s,a,c,h,p,d;if(p=this.locationFromPosition(t),s=p.index,h=p.offset,o=this.getBlockAtIndex(s),!o)return {};r=l(o),n=o.text.getAttributesAtPosition(h),i=o.text.getAttributesAtPosition(h-1),a=function(){var t,n;t=e.config.textAttributes,n=[];for(c in t)d=t[c],d.inheritable&&n.push(c);return n}();for(c in i)d=i[c],(d===n[c]||u.call(a,c)>=0)&&(r[c]=d);return r},c.prototype.getRangeOfCommonAttributeAtPosition=function(t,e){var n,o,r,s,a,u,c,l,h;return a=this.locationFromPosition(e),r=a.index,s=a.offset,h=this.getTextAtIndex(r),u=h.getExpandedRangeForAttributeAtOffset(t,s),l=u[0],o=u[1],c=this.positionFromLocation({index:r,offset:l}),n=this.positionFromLocation({index:r,offset:o}),i([c,n])},c.prototype.getBaseBlockAttributes=function(){var t,e,n,i,o,r,s;for(t=this.getBlockAtIndex(0).getAttributes(),n=i=1,s=this.getBlockCount();s>=1?s>i:i>s;n=s>=1?++i:--i)e=this.getBlockAtIndex(n).getAttributes(),r=Math.min(t.length,e.length),t=function(){var n,i,s;for(s=[],o=n=0,i=r;(i>=0?i>n:n>i)&&e[o]===t[o];o=i>=0?++n:--n)s.push(e[o]);return s}();return t},l=function(t){var e,n;return n={},(e=t.getLastAttribute())&&(n[e]=!0),n},c.prototype.getAttachmentById=function(t){var e,n,i,o;for(o=this.getAttachments(),n=0,i=o.length;i>n;n++)if(e=o[n],e.id===t)return e},c.prototype.getAttachmentPieces=function(){var t;return t=[],this.blockList.eachObject(function(e){var n;return n=e.text,t=t.concat(n.getAttachmentPieces())}),t},c.prototype.getAttachments=function(){var t,e,n,i,o;for(i=this.getAttachmentPieces(),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.attachment);return o},c.prototype.getRangeOfAttachment=function(t){var e,n,o,r,s,a,u;for(r=0,s=this.blockList.toArray(),n=e=0,o=s.length;o>e;n=++e){if(a=s[n].text,u=a.getRangeOfAttachment(t))return i([r+u[0],r+u[1]]);r+=a.getLength();}},c.prototype.getLocationRangeOfAttachment=function(t){var e;return e=this.getRangeOfAttachment(t),this.locationRangeFromRange(e)},c.prototype.getAttachmentPieceForAttachment=function(t){var e,n,i,o;for(o=this.getAttachmentPieces(),e=0,n=o.length;n>e;e++)if(i=o[e],i.attachment===t)return i
    },c.prototype.findRangesForBlockAttribute=function(t){var e,n,i,o,r,s,a;for(r=0,s=[],a=this.getBlocks(),n=0,i=a.length;i>n;n++)e=a[n],o=e.getLength(),e.hasAttribute(t)&&s.push([r,r+o]),r+=o;return s},c.prototype.findRangesForTextAttribute=function(t,e){var n,i,o,r,s,a,u,c,l,h;for(h=(null!=e?e:{}).withValue,a=0,u=[],c=[],r=function(e){return null!=h?e.getAttribute(t)===h:e.hasAttribute(t)},l=this.getPieces(),n=0,i=l.length;i>n;n++)s=l[n],o=s.getLength(),r(s)&&(u[1]===a?u[1]=a+o:c.push(u=[a,a+o])),a+=o;return c},c.prototype.locationFromPosition=function(t){var e,n;return n=this.blockList.findIndexAndOffsetAtPosition(Math.max(0,t)),null!=n.index?n:(e=this.getBlocks(),{index:e.length-1,offset:e[e.length-1].getLength()})},c.prototype.positionFromLocation=function(t){return this.blockList.findPositionAtIndexAndOffset(t.index,t.offset)},c.prototype.locationRangeFromPosition=function(t){return i(this.locationFromPosition(t))},c.prototype.locationRangeFromRange=function(t){var e,n,o,r;if(t=i(t))return r=t[0],n=t[1],o=this.locationFromPosition(r),e=this.locationFromPosition(n),i([o,e])},c.prototype.rangeFromLocationRange=function(t){var e,n;return t=i(t),e=this.positionFromLocation(t[0]),o(t)||(n=this.positionFromLocation(t[1])),i([e,n])},c.prototype.isEqualTo=function(t){return this.blockList.isEqualTo(null!=t?t.blockList:void 0)},c.prototype.getTexts=function(){var t,e,n,i,o;for(i=this.getBlocks(),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.text);return o},c.prototype.getPieces=function(){var t,e,n,i,o;for(n=[],i=this.getTexts(),t=0,e=i.length;e>t;t++)o=i[t],n.push.apply(n,o.getPieces());return n},c.prototype.getObjects=function(){return this.getBlocks().concat(this.getTexts()).concat(this.getPieces())},c.prototype.toSerializableDocument=function(){var t;return t=[],this.blockList.eachObject(function(e){return t.push(e.copyWithText(e.text.toSerializableText()))}),new this.constructor(t)},c.prototype.toString=function(){return this.blockList.toString()},c.prototype.toJSON=function(){return this.blockList.toJSON()},c.prototype.toConsole=function(){var t;return JSON.stringify(function(){var e,n,i,o;for(i=this.blockList.toArray(),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(JSON.parse(t.text.toConsole()));return o}.call(this))},c}(e.Object);}.call(this),function(){e.LineBreakInsertion=function(){function t(t){var e;this.composition=t,this.document=this.composition.document,e=this.composition.getSelectedRange(),this.startPosition=e[0],this.endPosition=e[1],this.startLocation=this.document.locationFromPosition(this.startPosition),this.endLocation=this.document.locationFromPosition(this.endPosition),this.block=this.document.getBlockAtIndex(this.endLocation.index),this.breaksOnReturn=this.block.breaksOnReturn(),this.previousCharacter=this.block.text.getStringAtPosition(this.endLocation.offset-1),this.nextCharacter=this.block.text.getStringAtPosition(this.endLocation.offset);}return t.prototype.shouldInsertBlockBreak=function(){return this.block.hasAttributes()&&this.block.isListItem()&&!this.block.isEmpty()?0!==this.startLocation.offset:this.breaksOnReturn&&"\n"!==this.nextCharacter},t.prototype.shouldBreakFormattedBlock=function(){return this.block.hasAttributes()&&!this.block.isListItem()&&(this.breaksOnReturn&&"\n"===this.nextCharacter||"\n"===this.previousCharacter)},t.prototype.shouldDecreaseListLevel=function(){return this.block.hasAttributes()&&this.block.isListItem()&&this.block.isEmpty()},t.prototype.shouldPrependListItem=function(){return this.block.isListItem()&&0===this.startLocation.offset&&!this.block.isEmpty()},t.prototype.shouldRemoveLastBlockAttribute=function(){return this.block.hasAttributes()&&!this.block.isListItem()&&this.block.isEmpty()},t}();}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h=function(t,e){function n(){this.constructor=t;}for(var i in e)p.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;s=e.normalizeRange,c=e.rangesAreEqual,u=e.rangeIsCollapsed,a=e.objectsAreEqual,t=e.arrayStartsWith,l=e.summarizeArrayChange,i=e.getAllAttributeNames,o=e.getBlockConfig,r=e.getTextConfig,n=e.extend,e.Composition=function(p){function d(){this.document=new e.Document,this.attachments=[],this.currentAttributes={},this.revision=0;}var f;return h(d,p),d.prototype.setDocument=function(t){var e;return t.isEqualTo(this.document)?void 0:(this.document=t,this.refreshAttachments(),this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidChangeDocument?e.compositionDidChangeDocument(t):void 0)},d.prototype.getSnapshot=function(){return {document:this.document,selectedRange:this.getSelectedRange()}},d.prototype.loadSnapshot=function(t){var n,i,o,r;return n=t.document,r=t.selectedRange,null!=(i=this.delegate)&&"function"==typeof i.compositionWillLoadSnapshot&&i.compositionWillLoadSnapshot(),this.setDocument(null!=n?n:new e.Document),this.setSelection(null!=r?r:[0,0]),null!=(o=this.delegate)&&"function"==typeof o.compositionDidLoadSnapshot?o.compositionDidLoadSnapshot():void 0},d.prototype.insertText=function(t,e){var n,i,o,r;return r=(null!=e?e:{updatePosition:!0}).updatePosition,i=this.getSelectedRange(),this.setDocument(this.document.insertTextAtRange(t,i)),o=i[0],n=o+t.getLength(),r&&this.setSelection(n),this.notifyDelegateOfInsertionAtRange([o,n])},d.prototype.insertBlock=function(t){var n;return null==t&&(t=new e.Block),n=new e.Document([t]),this.insertDocument(n)},d.prototype.insertDocument=function(t){var n,i,o;return null==t&&(t=new e.Document),i=this.getSelectedRange(),this.setDocument(this.document.insertDocumentAtRange(t,i)),o=i[0],n=o+t.getLength(),this.setSelection(n),this.notifyDelegateOfInsertionAtRange([o,n])},d.prototype.insertString=function(t,n){var i,o;return i=this.getCurrentTextAttributes(),o=e.Text.textForStringWithAttributes(t,i),this.insertText(o,n)},d.prototype.insertBlockBreak=function(){var t,e,n;return e=this.getSelectedRange(),this.setDocument(this.document.insertBlockBreakAtRange(e)),n=e[0],t=n+1,this.setSelection(t),this.notifyDelegateOfInsertionAtRange([n,t])},d.prototype.insertLineBreak=function(){var t,n;return n=new e.LineBreakInsertion(this),n.shouldDecreaseListLevel()?(this.decreaseListLevel(),this.setSelection(n.startPosition)):n.shouldPrependListItem()?(t=new e.Document([n.block.copyWithoutText()]),this.insertDocument(t)):n.shouldInsertBlockBreak()?this.insertBlockBreak():n.shouldRemoveLastBlockAttribute()?this.removeLastBlockAttribute():n.shouldBreakFormattedBlock()?this.breakFormattedBlock(n):this.insertString("\n")},d.prototype.insertHTML=function(t){var n,i,o,r;return n=e.Document.fromHTML(t),o=this.getSelectedRange(),this.setDocument(this.document.mergeDocumentAtRange(n,o)),r=o[0],i=r+n.getLength()-1,this.setSelection(i),this.notifyDelegateOfInsertionAtRange([r,i])},d.prototype.replaceHTML=function(t){var n,i,o;return n=e.Document.fromHTML(t).copyUsingObjectsFromDocument(this.document),i=this.getLocationRange({strict:!1}),o=this.document.rangeFromLocationRange(i),this.setDocument(n),this.setSelection(o)},d.prototype.insertFile=function(t){return this.insertFiles([t])},d.prototype.insertFiles=function(t){var n,i,o,r,s,a;for(i=[],r=0,s=t.length;s>r;r++)o=t[r],(null!=(a=this.delegate)?a.compositionShouldAcceptFile(o):void 0)&&(n=e.Attachment.attachmentForFile(o),i.push(n));return this.insertAttachments(i)},d.prototype.insertAttachment=function(t){return this.insertAttachments([t])},d.prototype.insertAttachments=function(t){var n,i,o,r,s,a,u,c,l;for(c=new e.Text,r=0,s=t.length;s>r;r++)n=t[r],l=n.getType(),a=null!=(u=e.config.attachments[l])?u.presentation:void 0,o=this.getCurrentTextAttributes(),a&&(o.presentation=a),i=e.Text.textForAttachmentWithAttributes(n,o),c=c.appendText(i);return this.insertText(c)},d.prototype.shouldManageDeletingInDirection=function(t){var e;if(e=this.getLocationRange(),u(e)){if("backward"===t&&0===e[0].offset)return !0;if(this.shouldManageMovingCursorInDirection(t))return !0}else if(e[0].index!==e[1].index)return !0;return !1},d.prototype.deleteInDirection=function(t,e){var n,i,o,r,s,a,c,l;return r=(null!=e?e:{}).length,s=this.getLocationRange(),a=this.getSelectedRange(),c=u(a),c?o="backward"===t&&0===s[0].offset:l=s[0].index!==s[1].index,o&&this.canDecreaseBlockAttributeLevel()&&(i=this.getBlock(),i.isListItem()?this.decreaseListLevel():this.decreaseBlockAttributeLevel(),this.setSelection(a[0]),i.isEmpty())?!1:(c&&(a=this.getExpandedRangeInDirection(t,{length:r}),"backward"===t&&(n=this.getAttachmentAtRange(a))),n?(this.editAttachment(n),!1):(this.setDocument(this.document.removeTextAtRange(a)),this.setSelection(a[0]),o||l?!1:void 0))},d.prototype.moveTextFromRange=function(t){var e;return e=this.getSelectedRange()[0],this.setDocument(this.document.moveTextFromRangeToPosition(t,e)),this.setSelection(e)},d.prototype.removeAttachment=function(t){var e;return (e=this.document.getRangeOfAttachment(t))?(this.stopEditingAttachment(),this.setDocument(this.document.removeTextAtRange(e)),this.setSelection(e[0])):void 0},d.prototype.removeLastBlockAttribute=function(){var t,e,n,i;return n=this.getSelectedRange(),i=n[0],e=n[1],t=this.document.getBlockAtPosition(e),this.removeCurrentAttribute(t.getLastAttribute()),this.setSelection(i)},f=" ",d.prototype.insertPlaceholder=function(){return this.placeholderPosition=this.getPosition(),this.insertString(f)},d.prototype.selectPlaceholder=function(){return null!=this.placeholderPosition?(this.setSelectedRange([this.placeholderPosition,this.placeholderPosition+f.length]),this.getSelectedRange()):void 0},d.prototype.forgetPlaceholder=function(){return this.placeholderPosition=null},d.prototype.hasCurrentAttribute=function(t){var e;return e=this.currentAttributes[t],null!=e&&e!==!1},d.prototype.toggleCurrentAttribute=function(t){var e;return (e=!this.currentAttributes[t])?this.setCurrentAttribute(t,e):this.removeCurrentAttribute(t)},d.prototype.canSetCurrentAttribute=function(t){return o(t)?this.canSetCurrentBlockAttribute(t):this.canSetCurrentTextAttribute(t)},d.prototype.canSetCurrentTextAttribute=function(){var t,e,n,i,o;if(e=this.getSelectedDocument()){for(o=e.getAttachments(),n=0,i=o.length;i>n;n++)if(t=o[n],!t.hasContent())return !1;return !0}},d.prototype.canSetCurrentBlockAttribute=function(){var t;if(t=this.getBlock())return !t.isTerminalBlock()},d.prototype.setCurrentAttribute=function(t,e){return o(t)?this.setBlockAttribute(t,e):(this.setTextAttribute(t,e),this.currentAttributes[t]=e,this.notifyDelegateOfCurrentAttributesChange())},d.prototype.setTextAttribute=function(t,n){var i,o,r,s;if(o=this.getSelectedRange())return r=o[0],i=o[1],r!==i?this.setDocument(this.document.addAttributeAtRange(t,n,o)):"href"===t?(s=e.Text.textForStringWithAttributes(n,{href:n}),this.insertText(s)):void 0},d.prototype.setBlockAttribute=function(t,e){var n,i;if(i=this.getSelectedRange())return this.canSetCurrentAttribute(t)?(n=this.getBlock(),this.setDocument(this.document.applyBlockAttributeAtRange(t,e,i)),this.setSelection(i)):void 0},d.prototype.removeCurrentAttribute=function(t){return o(t)?(this.removeBlockAttribute(t),this.updateCurrentAttributes()):(this.removeTextAttribute(t),delete this.currentAttributes[t],this.notifyDelegateOfCurrentAttributesChange())},d.prototype.removeTextAttribute=function(t){var e;if(e=this.getSelectedRange())return this.setDocument(this.document.removeAttributeAtRange(t,e))},d.prototype.removeBlockAttribute=function(t){var e;if(e=this.getSelectedRange())return this.setDocument(this.document.removeAttributeAtRange(t,e))},d.prototype.canDecreaseNestingLevel=function(){var t;return (null!=(t=this.getBlock())?t.getNestingLevel():void 0)>0},d.prototype.canIncreaseNestingLevel=function(){var e,n,i;if(e=this.getBlock())return (null!=(i=o(e.getLastNestableAttribute()))?i.listAttribute:0)?(n=this.getPreviousBlock())?t(n.getListItemAttributes(),e.getListItemAttributes()):void 0:e.getNestingLevel()>0},d.prototype.decreaseNestingLevel=function(){var t;if(t=this.getBlock())return this.setDocument(this.document.replaceBlock(t,t.decreaseNestingLevel()))},d.prototype.increaseNestingLevel=function(){var t;if(t=this.getBlock())return this.setDocument(this.document.replaceBlock(t,t.increaseNestingLevel()))},d.prototype.canDecreaseBlockAttributeLevel=function(){var t;return (null!=(t=this.getBlock())?t.getAttributeLevel():void 0)>0},d.prototype.decreaseBlockAttributeLevel=function(){var t,e;return (t=null!=(e=this.getBlock())?e.getLastAttribute():void 0)?this.removeCurrentAttribute(t):void 0},d.prototype.decreaseListLevel=function(){var t,e,n,i,o,r;for(r=this.getSelectedRange()[0],o=this.document.locationFromPosition(r).index,n=o,t=this.getBlock().getAttributeLevel();(e=this.document.getBlockAtIndex(n+1))&&e.isListItem()&&e.getAttributeLevel()>t;)n++;return r=this.document.positionFromLocation({index:o,offset:0}),i=this.document.positionFromLocation({index:n,offset:0}),this.setDocument(this.document.removeLastListAttributeAtRange([r,i]))},d.prototype.updateCurrentAttributes=function(){var t,e,n,o,r,s;if(s=this.getSelectedRange({ignoreLock:!0})){for(e=this.document.getCommonAttributesAtRange(s),r=i(),n=0,o=r.length;o>n;n++)t=r[n],e[t]||this.canSetCurrentAttribute(t)||(e[t]=!1);if(!a(e,this.currentAttributes))return this.currentAttributes=e,this.notifyDelegateOfCurrentAttributesChange()}},d.prototype.getCurrentAttributes=function(){return n.call({},this.currentAttributes)},d.prototype.getCurrentTextAttributes=function(){var t,e,n,i;t={},n=this.currentAttributes;for(e in n)i=n[e],i!==!1&&r(e)&&(t[e]=i);return t},d.prototype.freezeSelection=function(){return this.setCurrentAttribute("frozen",!0)},d.prototype.thawSelection=function(){return this.removeCurrentAttribute("frozen")},d.prototype.hasFrozenSelection=function(){return this.hasCurrentAttribute("frozen")},d.proxyMethod("getSelectionManager().getPointRange"),d.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"),d.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"),d.proxyMethod("getSelectionManager().locationIsCursorTarget"),d.proxyMethod("getSelectionManager().selectionIsExpanded"),d.proxyMethod("delegate?.getSelectionManager"),d.prototype.setSelection=function(t){var e,n;return e=this.document.locationRangeFromRange(t),null!=(n=this.delegate)?n.compositionDidRequestChangingSelectionToLocationRange(e):void 0},d.prototype.getSelectedRange=function(){var t;return (t=this.getLocationRange())?this.document.rangeFromLocationRange(t):void 0},d.prototype.setSelectedRange=function(t){var e;return e=this.document.locationRangeFromRange(t),this.getSelectionManager().setLocationRange(e)},d.prototype.getPosition=function(){var t;return (t=this.getLocationRange())?this.document.positionFromLocation(t[0]):void 0},d.prototype.getLocationRange=function(t){var e,n;return null!=(e=null!=(n=this.targetLocationRange)?n:this.getSelectionManager().getLocationRange(t))?e:s({index:0,offset:0})},d.prototype.withTargetLocationRange=function(t,e){var n;this.targetLocationRange=t;try{n=e();}finally{this.targetLocationRange=null;}return n},d.prototype.withTargetRange=function(t,e){var n;return n=this.document.locationRangeFromRange(t),this.withTargetLocationRange(n,e)},d.prototype.withTargetDOMRange=function(t,e){var n;return n=this.createLocationRangeFromDOMRange(t,{strict:!1}),this.withTargetLocationRange(n,e)},d.prototype.getExpandedRangeInDirection=function(t,e){var n,i,o,r;return i=(null!=e?e:{}).length,o=this.getSelectedRange(),r=o[0],n=o[1],"backward"===t?i?r-=i:r=this.translateUTF16PositionFromOffset(r,-1):i?n+=i:n=this.translateUTF16PositionFromOffset(n,1),s([r,n])},d.prototype.shouldManageMovingCursorInDirection=function(t){var e;return this.editingAttachment?!0:(e=this.getExpandedRangeInDirection(t),null!=this.getAttachmentAtRange(e))},d.prototype.moveCursorInDirection=function(t){var e,n,i,o;return this.editingAttachment?i=this.document.getRangeOfAttachment(this.editingAttachment):(o=this.getSelectedRange(),i=this.getExpandedRangeInDirection(t),n=!c(o,i)),this.setSelectedRange("backward"===t?i[0]:i[1]),n&&(e=this.getAttachmentAtRange(i))?this.editAttachment(e):void 0},d.prototype.expandSelectionInDirection=function(t,e){var n,i;return n=(null!=e?e:{}).length,i=this.getExpandedRangeInDirection(t,{length:n}),this.setSelectedRange(i)},d.prototype.expandSelectionForEditing=function(){return this.hasCurrentAttribute("href")?this.expandSelectionAroundCommonAttribute("href"):void 0},d.prototype.expandSelectionAroundCommonAttribute=function(t){var e,n;return e=this.getPosition(),n=this.document.getRangeOfCommonAttributeAtPosition(t,e),this.setSelectedRange(n)},d.prototype.selectionContainsAttachments=function(){var t;return (null!=(t=this.getSelectedAttachments())?t.length:void 0)>0},d.prototype.selectionIsInCursorTarget=function(){return this.editingAttachment||this.positionIsCursorTarget(this.getPosition())},d.prototype.positionIsCursorTarget=function(t){var e;return (e=this.document.locationFromPosition(t))?this.locationIsCursorTarget(e):void 0},d.prototype.positionIsBlockBreak=function(t){var e;return null!=(e=this.document.getPieceAtPosition(t))?e.isBlockBreak():void 0},d.prototype.getSelectedDocument=function(){var t;return (t=this.getSelectedRange())?this.document.getDocumentAtRange(t):void 0},d.prototype.getSelectedAttachments=function(){var t;return null!=(t=this.getSelectedDocument())?t.getAttachments():void 0},d.prototype.getAttachments=function(){return this.attachments.slice(0)},d.prototype.refreshAttachments=function(){var t,e,n,i,o,r,s,a,u,c,h,p;for(n=this.document.getAttachments(),a=l(this.attachments,n),t=a.added,h=a.removed,this.attachments=n,i=0,r=h.length;r>i;i++)e=h[i],e.delegate=null,null!=(u=this.delegate)&&"function"==typeof u.compositionDidRemoveAttachment&&u.compositionDidRemoveAttachment(e);for(p=[],o=0,s=t.length;s>o;o++)e=t[o],e.delegate=this,p.push(null!=(c=this.delegate)&&"function"==typeof c.compositionDidAddAttachment?c.compositionDidAddAttachment(e):void 0);return p},d.prototype.attachmentDidChangeAttributes=function(t){var e;return this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidEditAttachment?e.compositionDidEditAttachment(t):void 0},d.prototype.attachmentDidChangePreviewURL=function(t){var e;return this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidChangeAttachmentPreviewURL?e.compositionDidChangeAttachmentPreviewURL(t):void 0},d.prototype.editAttachment=function(t,e){var n;if(t!==this.editingAttachment)return this.stopEditingAttachment(),this.editingAttachment=t,null!=(n=this.delegate)&&"function"==typeof n.compositionDidStartEditingAttachment?n.compositionDidStartEditingAttachment(this.editingAttachment,e):void 0},d.prototype.stopEditingAttachment=function(){var t;if(this.editingAttachment)return null!=(t=this.delegate)&&"function"==typeof t.compositionDidStopEditingAttachment&&t.compositionDidStopEditingAttachment(this.editingAttachment),this.editingAttachment=null},d.prototype.updateAttributesForAttachment=function(t,e){return this.setDocument(this.document.updateAttributesForAttachment(t,e))},d.prototype.removeAttributeForAttachment=function(t,e){return this.setDocument(this.document.removeAttributeForAttachment(t,e))},d.prototype.breakFormattedBlock=function(t){var n,i,o,r,s;return i=t.document,n=t.block,r=t.startPosition,s=[r-1,r],n.getBlockBreakPosition()===t.startLocation.offset?(n.breaksOnReturn()&&"\n"===t.nextCharacter?r+=1:i=i.removeTextAtRange(s),s=[r,r]):"\n"===t.nextCharacter?"\n"===t.previousCharacter?s=[r-1,r+1]:(s=[r,r+1],r+=1):t.startLocation.offset-1!==0&&(r+=1),o=new e.Document([n.removeLastAttribute().copyWithoutText()]),this.setDocument(i.insertDocumentAtRange(o,s)),this.setSelection(r)},d.prototype.getPreviousBlock=function(){var t,e;return (e=this.getLocationRange())&&(t=e[0].index,t>0)?this.document.getBlockAtIndex(t-1):void 0},d.prototype.getBlock=function(){var t;return (t=this.getLocationRange())?this.document.getBlockAtIndex(t[0].index):void 0},d.prototype.getAttachmentAtRange=function(t){var n;return n=this.document.getDocumentAtRange(t),n.toString()===e.OBJECT_REPLACEMENT_CHARACTER+"\n"?n.getAttachments()[0]:void 0},d.prototype.notifyDelegateOfCurrentAttributesChange=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.compositionDidChangeCurrentAttributes?t.compositionDidChangeCurrentAttributes(this.currentAttributes):void 0},d.prototype.notifyDelegateOfInsertionAtRange=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionDidPerformInsertionAtRange?e.compositionDidPerformInsertionAtRange(t):void 0},d.prototype.translateUTF16PositionFromOffset=function(t,e){var n,i;return i=this.document.toUTF16String(),n=i.offsetFromUCS2Offset(t),i.offsetToUCS2Offset(n+e)},d}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.UndoManager=function(e){function n(t){this.composition=t,this.undoEntries=[],this.redoEntries=[];}var i;return t(n,e),n.prototype.recordUndoEntry=function(t,e){var n,o,r,s,a;return s=null!=e?e:{},o=s.context,n=s.consolidatable,r=this.undoEntries.slice(-1)[0],n&&i(r,t,o)?void 0:(a=this.createEntry({description:t,context:o}),this.undoEntries.push(a),this.redoEntries=[])},n.prototype.undo=function(){var t,e;return (e=this.undoEntries.pop())?(t=this.createEntry(e),this.redoEntries.push(t),this.composition.loadSnapshot(e.snapshot)):void 0},n.prototype.redo=function(){var t,e;return (t=this.redoEntries.pop())?(e=this.createEntry(t),this.undoEntries.push(e),this.composition.loadSnapshot(t.snapshot)):void 0},n.prototype.canUndo=function(){return this.undoEntries.length>0},n.prototype.canRedo=function(){return this.redoEntries.length>0},n.prototype.createEntry=function(t){var e,n,i;return i=null!=t?t:{},n=i.description,e=i.context,{description:null!=n?n.toString():void 0,context:JSON.stringify(e),snapshot:this.composition.getSnapshot()}},i=function(t,e,n){return (null!=t?t.description:void 0)===(null!=e?e.toString():void 0)&&(null!=t?t.context:void 0)===JSON.stringify(n)},n}(e.BasicObject);}.call(this),function(){var t;e.attachmentGalleryFilter=function(e){var n;return n=new t(e),n.perform(),n.getSnapshot()},t=function(){function t(t){this.document=t.document,this.selectedRange=t.selectedRange;}var e,n,i;return e="attachmentGallery",n="presentation",i="gallery",t.prototype.perform=function(){return this.removeBlockAttribute(),this.applyBlockAttribute()},t.prototype.getSnapshot=function(){return {document:this.document,selectedRange:this.selectedRange}},t.prototype.removeBlockAttribute=function(){var t,n,i,o,r;for(o=this.findRangesOfBlocks(),r=[],t=0,n=o.length;n>t;t++)i=o[t],r.push(this.document=this.document.removeAttributeAtRange(e,i));return r},t.prototype.applyBlockAttribute=function(){var t,n,i,o,r,s;for(i=0,r=this.findRangesOfPieces(),s=[],t=0,n=r.length;n>t;t++)o=r[t],o[1]-o[0]>1&&(o[0]+=i,o[1]+=i,"\n"!==this.document.getCharacterAtPosition(o[1])&&(this.document=this.document.insertBlockBreakAtRange(o[1]),o[1]<this.selectedRange[1]&&this.moveSelectedRangeForward(),o[1]++,i++),0!==o[0]&&"\n"!==this.document.getCharacterAtPosition(o[0]-1)&&(this.document=this.document.insertBlockBreakAtRange(o[0]),o[0]<this.selectedRange[0]&&this.moveSelectedRangeForward(),o[0]++,i++),s.push(this.document=this.document.applyBlockAttributeAtRange(e,!0,o)));return s},t.prototype.findRangesOfBlocks=function(){return this.document.findRangesForBlockAttribute(e)},t.prototype.findRangesOfPieces=function(){return this.document.findRangesForTextAttribute(n,{withValue:i})},t.prototype.moveSelectedRangeForward=function(){return this.selectedRange[0]+=1,this.selectedRange[1]+=1},t}();}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Editor=function(){function n(n,o,r){this.composition=n,this.selectionManager=o,this.element=r,this.insertFiles=t(this.insertFiles,this),this.undoManager=new e.UndoManager(this.composition),this.filters=i.slice(0);}var i;return i=[e.attachmentGalleryFilter],n.prototype.loadDocument=function(t){return this.loadSnapshot({document:t,selectedRange:[0,0]})},n.prototype.loadHTML=function(t){return null==t&&(t=""),this.loadDocument(e.Document.fromHTML(t,{referenceElement:this.element}))},n.prototype.loadJSON=function(t){var n,i;return n=t.document,i=t.selectedRange,n=e.Document.fromJSON(n),this.loadSnapshot({document:n,selectedRange:i})},n.prototype.loadSnapshot=function(t){return this.undoManager=new e.UndoManager(this.composition),this.composition.loadSnapshot(t)},n.prototype.getDocument=function(){return this.composition.document},n.prototype.getSelectedDocument=function(){return this.composition.getSelectedDocument()},n.prototype.getSnapshot=function(){return this.composition.getSnapshot()},n.prototype.toJSON=function(){return this.getSnapshot()},n.prototype.deleteInDirection=function(t){return this.composition.deleteInDirection(t)},n.prototype.insertAttachment=function(t){return this.composition.insertAttachment(t)},n.prototype.insertAttachments=function(t){return this.composition.insertAttachments(t)},n.prototype.insertDocument=function(t){return this.composition.insertDocument(t)},n.prototype.insertFile=function(t){return this.composition.insertFile(t)},n.prototype.insertFiles=function(t){return this.composition.insertFiles(t)},n.prototype.insertHTML=function(t){return this.composition.insertHTML(t)},n.prototype.insertString=function(t){return this.composition.insertString(t)},n.prototype.insertText=function(t){return this.composition.insertText(t)},n.prototype.insertLineBreak=function(){return this.composition.insertLineBreak()},n.prototype.getSelectedRange=function(){return this.composition.getSelectedRange()},n.prototype.getPosition=function(){return this.composition.getPosition()},n.prototype.getClientRectAtPosition=function(t){var e;return e=this.getDocument().locationRangeFromRange([t,t+1]),this.selectionManager.getClientRectAtLocationRange(e)},n.prototype.expandSelectionInDirection=function(t){return this.composition.expandSelectionInDirection(t)},n.prototype.moveCursorInDirection=function(t){return this.composition.moveCursorInDirection(t)},n.prototype.setSelectedRange=function(t){return this.composition.setSelectedRange(t)},n.prototype.activateAttribute=function(t,e){return null==e&&(e=!0),this.composition.setCurrentAttribute(t,e)},n.prototype.attributeIsActive=function(t){return this.composition.hasCurrentAttribute(t)},n.prototype.canActivateAttribute=function(t){return this.composition.canSetCurrentAttribute(t)},n.prototype.deactivateAttribute=function(t){return this.composition.removeCurrentAttribute(t)},n.prototype.canDecreaseNestingLevel=function(){return this.composition.canDecreaseNestingLevel()},n.prototype.canIncreaseNestingLevel=function(){return this.composition.canIncreaseNestingLevel()},n.prototype.decreaseNestingLevel=function(){return this.canDecreaseNestingLevel()?this.composition.decreaseNestingLevel():void 0},n.prototype.increaseNestingLevel=function(){return this.canIncreaseNestingLevel()?this.composition.increaseNestingLevel():void 0},n.prototype.canRedo=function(){return this.undoManager.canRedo()},n.prototype.canUndo=function(){return this.undoManager.canUndo()},n.prototype.recordUndoEntry=function(t,e){var n,i,o;return o=null!=e?e:{},i=o.context,n=o.consolidatable,this.undoManager.recordUndoEntry(t,{context:i,consolidatable:n})},n.prototype.redo=function(){return this.canRedo()?this.undoManager.redo():void 0},n.prototype.undo=function(){return this.canUndo()?this.undoManager.undo():void 0},n}();}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ManagedAttachment=function(e){function n(t,e){var n;this.attachmentManager=t,this.attachment=e,n=this.attachment,this.id=n.id,this.file=n.file;}return t(n,e),n.prototype.remove=function(){return this.attachmentManager.requestRemovalOfAttachment(this.attachment)},n.proxyMethod("attachment.getAttribute"),n.proxyMethod("attachment.hasAttribute"),n.proxyMethod("attachment.setAttribute"),n.proxyMethod("attachment.getAttributes"),n.proxyMethod("attachment.setAttributes"),n.proxyMethod("attachment.isPending"),n.proxyMethod("attachment.isPreviewable"),n.proxyMethod("attachment.getURL"),n.proxyMethod("attachment.getHref"),n.proxyMethod("attachment.getFilename"),n.proxyMethod("attachment.getFilesize"),n.proxyMethod("attachment.getFormattedFilesize"),n.proxyMethod("attachment.getExtension"),n.proxyMethod("attachment.getContentType"),n.proxyMethod("attachment.getFile"),n.proxyMethod("attachment.setFile"),n.proxyMethod("attachment.releaseFile"),n.proxyMethod("attachment.getUploadProgress"),n.proxyMethod("attachment.setUploadProgress"),n}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.AttachmentManager=function(n){function i(t){var e,n,i;for(null==t&&(t=[]),this.managedAttachments={},n=0,i=t.length;i>n;n++)e=t[n],this.manageAttachment(e);}return t(i,n),i.prototype.getAttachments=function(){var t,e,n,i;n=this.managedAttachments,i=[];for(e in n)t=n[e],i.push(t);return i},i.prototype.manageAttachment=function(t){var n,i;return null!=(n=this.managedAttachments)[i=t.id]?n[i]:n[i]=new e.ManagedAttachment(this,t)},i.prototype.attachmentIsManaged=function(t){return t.id in this.managedAttachments},i.prototype.requestRemovalOfAttachment=function(t){var e;return this.attachmentIsManaged(t)&&null!=(e=this.delegate)&&"function"==typeof e.attachmentManagerDidRequestRemovalOfAttachment?e.attachmentManagerDidRequestRemovalOfAttachment(t):void 0},i.prototype.unmanageAttachment=function(t){var e;return e=this.managedAttachments[t.id],delete this.managedAttachments[t.id],e},i}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h;t=e.elementContainsNode,n=e.findChildIndexOfNode,r=e.nodeIsBlockStart,s=e.nodeIsBlockStartComment,o=e.nodeIsBlockContainer,a=e.nodeIsCursorTarget,u=e.nodeIsEmptyTextNode,c=e.nodeIsTextNode,i=e.nodeIsAttachmentElement,l=e.tagName,h=e.walkTree,e.LocationMapper=function(){function e(t){this.element=t;}var p,d,f,g;return e.prototype.findLocationFromContainerAndOffset=function(e,i,o){var s,u,l,p,g,m,v;for(m=(null!=o?o:{strict:!0}).strict,u=0,l=!1,p={index:0,offset:0},(s=this.findAttachmentElementParentForNode(e))&&(e=s.parentNode,i=n(s)),v=h(this.element,{usingFilter:f});v.nextNode();){if(g=v.currentNode,g===e&&c(e)){a(g)||(p.offset+=i);break}if(g.parentNode===e){if(u++===i)break}else if(!t(e,g)&&u>0)break;r(g,{strict:m})?(l&&p.index++,p.offset=0,l=!0):p.offset+=d(g);}return p},e.prototype.findContainerAndOffsetFromLocation=function(t){var e,i,s,u,l;if(0===t.index&&0===t.offset){for(e=this.element,u=0;e.firstChild;)if(e=e.firstChild,o(e)){u=1;break}return [e,u]}if(l=this.findNodeAndOffsetFromLocation(t),i=l[0],s=l[1],i){if(c(i))0===d(i)?(e=i.parentNode.parentNode,u=n(i.parentNode),a(i,{name:"right"})&&u++):(e=i,u=t.offset-s);else{if(e=i.parentNode,!r(i.previousSibling)&&!o(e))for(;i===e.lastChild&&(i=e,e=e.parentNode,!o(e)););u=n(i),0!==t.offset&&u++;}return [e,u]}},e.prototype.findNodeAndOffsetFromLocation=function(t){var e,n,i,o,r,s,u,l;for(u=0,l=this.getSignificantNodesForIndex(t.index),n=0,i=l.length;i>n;n++){if(e=l[n],o=d(e),t.offset<=u+o)if(c(e)){if(r=e,s=u,t.offset===s&&a(r))break}else r||(r=e,s=u);if(u+=o,u>t.offset)break}return [r,s]},e.prototype.findAttachmentElementParentForNode=function(t){for(;t&&t!==this.element;){if(i(t))return t;t=t.parentNode;}},e.prototype.getSignificantNodesForIndex=function(t){var e,n,i,o,r;for(i=[],r=h(this.element,{usingFilter:p}),o=!1;r.nextNode();)if(n=r.currentNode,s(n)){if("undefined"!=typeof e&&null!==e?e++:e=0,e===t)o=!0;else if(o)break}else o&&i.push(n);return i},d=function(t){var e;return t.nodeType===Node.TEXT_NODE?a(t)?0:(e=t.textContent,e.length):"br"===l(t)||i(t)?1:0},p=function(t){return g(t)===NodeFilter.FILTER_ACCEPT?f(t):NodeFilter.FILTER_REJECT},g=function(t){return u(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},f=function(t){return i(t.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},e}();}.call(this),function(){var t,n,i=[].slice;t=e.getDOMRange,n=e.setDOMRange,e.PointMapper=function(){function e(){}return e.prototype.createDOMRangeFromPoint=function(e){var i,o,r,s,a,u,c,l;if(c=e.x,l=e.y,document.caretPositionFromPoint)return a=document.caretPositionFromPoint(c,l),r=a.offsetNode,o=a.offset,i=document.createRange(),i.setStart(r,o),i;if(document.caretRangeFromPoint)return document.caretRangeFromPoint(c,l);
    if(document.body.createTextRange){s=t();try{u=document.body.createTextRange(),u.moveToPoint(c,l),u.select();}catch(h){}return i=t(),n(s),i}},e.prototype.getClientRectsForDOMRange=function(t){var e,n,o;return n=i.call(t.getClientRects()),o=n[0],e=n[n.length-1],[o,e]},e}();}.call(this),function(){var t,n=function(t,e){return function(){return t.apply(e,arguments)}},i=function(t,e){function n(){this.constructor=t;}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty,r=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.getDOMRange,e.SelectionChangeObserver=function(e){function o(){this.run=n(this.run,this),this.update=n(this.update,this),this.selectionManagers=[];}var s;return i(o,e),o.prototype.start=function(){return this.started?void 0:(this.started=!0,"onselectionchange"in document?document.addEventListener("selectionchange",this.update,!0):this.run())},o.prototype.stop=function(){return this.started?(this.started=!1,document.removeEventListener("selectionchange",this.update,!0)):void 0},o.prototype.registerSelectionManager=function(t){return r.call(this.selectionManagers,t)<0?(this.selectionManagers.push(t),this.start()):void 0},o.prototype.unregisterSelectionManager=function(t){var e;return this.selectionManagers=function(){var n,i,o,r;for(o=this.selectionManagers,r=[],n=0,i=o.length;i>n;n++)e=o[n],e!==t&&r.push(e);return r}.call(this),0===this.selectionManagers.length?this.stop():void 0},o.prototype.notifySelectionManagersOfSelectionChange=function(){var t,e,n,i,o;for(n=this.selectionManagers,i=[],t=0,e=n.length;e>t;t++)o=n[t],i.push(o.selectionDidChange());return i},o.prototype.update=function(){var e;return e=t(),s(e,this.domRange)?void 0:(this.domRange=e,this.notifySelectionManagersOfSelectionChange())},o.prototype.reset=function(){return this.domRange=null,this.update()},o.prototype.run=function(){return this.started?(this.update(),requestAnimationFrame(this.run)):void 0},s=function(t,e){return (null!=t?t.startContainer:void 0)===(null!=e?e.startContainer:void 0)&&(null!=t?t.startOffset:void 0)===(null!=e?e.startOffset:void 0)&&(null!=t?t.endContainer:void 0)===(null!=e?e.endContainer:void 0)&&(null!=t?t.endOffset:void 0)===(null!=e?e.endOffset:void 0)},o}(e.BasicObject),null==e.selectionChangeObserver&&(e.selectionChangeObserver=new e.SelectionChangeObserver);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h=function(t,e){return function(){return t.apply(e,arguments)}},p=function(t,e){function n(){this.constructor=t;}for(var i in e)d.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},d={}.hasOwnProperty;i=e.getDOMSelection,n=e.getDOMRange,l=e.setDOMRange,t=e.elementContainsNode,s=e.nodeIsCursorTarget,r=e.innerElementIsActive,o=e.handleEvent,a=e.normalizeRange,u=e.rangeIsCollapsed,c=e.rangesAreEqual,e.SelectionManager=function(d){function f(t){this.element=t,this.selectionDidChange=h(this.selectionDidChange,this),this.didMouseDown=h(this.didMouseDown,this),this.locationMapper=new e.LocationMapper(this.element),this.pointMapper=new e.PointMapper,this.lockCount=0,o("mousedown",{onElement:this.element,withCallback:this.didMouseDown});}return p(f,d),f.prototype.getLocationRange=function(t){var e,i;return null==t&&(t={}),e=t.strict===!1?this.createLocationRangeFromDOMRange(n(),{strict:!1}):t.ignoreLock?this.currentLocationRange:null!=(i=this.lockedLocationRange)?i:this.currentLocationRange},f.prototype.setLocationRange=function(t){var e;if(!this.lockedLocationRange)return t=a(t),(e=this.createDOMRangeFromLocationRange(t))?(l(e),this.updateCurrentLocationRange(t)):void 0},f.prototype.setLocationRangeFromPointRange=function(t){var e,n;return t=a(t),n=this.getLocationAtPoint(t[0]),e=this.getLocationAtPoint(t[1]),this.setLocationRange([n,e])},f.prototype.getClientRectAtLocationRange=function(t){var e;return (e=this.createDOMRangeFromLocationRange(t))?this.getClientRectsForDOMRange(e)[1]:void 0},f.prototype.locationIsCursorTarget=function(t){var e,n,i;return i=this.findNodeAndOffsetFromLocation(t),e=i[0],n=i[1],s(e)},f.prototype.lock=function(){return 0===this.lockCount++?(this.updateCurrentLocationRange(),this.lockedLocationRange=this.getLocationRange()):void 0},f.prototype.unlock=function(){var t;return 0===--this.lockCount&&(t=this.lockedLocationRange,this.lockedLocationRange=null,null!=t)?this.setLocationRange(t):void 0},f.prototype.clearSelection=function(){var t;return null!=(t=i())?t.removeAllRanges():void 0},f.prototype.selectionIsCollapsed=function(){var t;return (null!=(t=n())?t.collapsed:void 0)===!0},f.prototype.selectionIsExpanded=function(){return !this.selectionIsCollapsed()},f.prototype.createLocationRangeFromDOMRange=function(t,e){var n,i;if(null!=t&&this.domRangeWithinElement(t)&&(i=this.findLocationFromContainerAndOffset(t.startContainer,t.startOffset,e)))return t.collapsed||(n=this.findLocationFromContainerAndOffset(t.endContainer,t.endOffset,e)),a([i,n])},f.proxyMethod("locationMapper.findLocationFromContainerAndOffset"),f.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"),f.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"),f.proxyMethod("pointMapper.createDOMRangeFromPoint"),f.proxyMethod("pointMapper.getClientRectsForDOMRange"),f.prototype.didMouseDown=function(){return this.pauseTemporarily()},f.prototype.pauseTemporarily=function(){var e,n,i,r;return this.paused=!0,n=function(e){return function(){var n,o,s;for(e.paused=!1,clearTimeout(r),o=0,s=i.length;s>o;o++)n=i[o],n.destroy();return t(document,e.element)?e.selectionDidChange():void 0}}(this),r=setTimeout(n,200),i=function(){var t,i,r,s;for(r=["mousemove","keydown"],s=[],t=0,i=r.length;i>t;t++)e=r[t],s.push(o(e,{onElement:document,withCallback:n}));return s}()},f.prototype.selectionDidChange=function(){return this.paused||r(this.element)?void 0:this.updateCurrentLocationRange()},f.prototype.updateCurrentLocationRange=function(t){var e;return (null!=t?t:t=this.createLocationRangeFromDOMRange(n()))&&!c(t,this.currentLocationRange)?(this.currentLocationRange=t,null!=(e=this.delegate)&&"function"==typeof e.locationRangeDidChange?e.locationRangeDidChange(this.currentLocationRange.slice(0)):void 0):void 0},f.prototype.createDOMRangeFromLocationRange=function(t){var e,n,i,o;return i=this.findContainerAndOffsetFromLocation(t[0]),n=u(t)?i:null!=(o=this.findContainerAndOffsetFromLocation(t[1]))?o:i,null!=i&&null!=n?(e=document.createRange(),e.setStart.apply(e,i),e.setEnd.apply(e,n),e):void 0},f.prototype.getLocationAtPoint=function(t){var e,n;return (e=this.createDOMRangeFromPoint(t))&&null!=(n=this.createLocationRangeFromDOMRange(e))?n[0]:void 0},f.prototype.domRangeWithinElement=function(e){return e.collapsed?t(this.element,e.startContainer):t(this.element,e.startContainer)&&t(this.element,e.endContainer)},f}(e.BasicObject);}.call(this),function(){var t,n,i,o,r=function(t,e){function n(){this.constructor=t;}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].slice;i=e.rangeIsCollapsed,o=e.rangesAreEqual,n=e.objectsAreEqual,t=e.getBlockConfig,e.EditorController=function(s){function u(t){var n,i;this.editorElement=t.editorElement,n=t.document,i=t.html,this.selectionManager=new e.SelectionManager(this.editorElement),this.selectionManager.delegate=this,this.composition=new e.Composition,this.composition.delegate=this,this.attachmentManager=new e.AttachmentManager(this.composition.getAttachments()),this.attachmentManager.delegate=this,this.inputController=new(e["Level"+e.config.input.getLevel()+"InputController"])(this.editorElement),this.inputController.delegate=this,this.inputController.responder=this.composition,this.compositionController=new e.CompositionController(this.editorElement,this.composition),this.compositionController.delegate=this,this.toolbarController=new e.ToolbarController(this.editorElement.toolbarElement),this.toolbarController.delegate=this,this.editor=new e.Editor(this.composition,this.selectionManager,this.editorElement),null!=n?this.editor.loadDocument(n):this.editor.loadHTML(i);}var c;return r(u,s),u.prototype.registerSelectionManager=function(){return e.selectionChangeObserver.registerSelectionManager(this.selectionManager)},u.prototype.unregisterSelectionManager=function(){return e.selectionChangeObserver.unregisterSelectionManager(this.selectionManager)},u.prototype.render=function(){return this.compositionController.render()},u.prototype.reparse=function(){return this.composition.replaceHTML(this.editorElement.innerHTML)},u.prototype.compositionDidChangeDocument=function(){return this.notifyEditorElement("document-change"),this.handlingInput?void 0:this.render()},u.prototype.compositionDidChangeCurrentAttributes=function(t){return this.currentAttributes=t,this.toolbarController.updateAttributes(this.currentAttributes),this.updateCurrentActions(),this.notifyEditorElement("attributes-change",{attributes:this.currentAttributes})},u.prototype.compositionDidPerformInsertionAtRange=function(t){return this.pasting?this.pastedRange=t:void 0},u.prototype.compositionShouldAcceptFile=function(t){return this.notifyEditorElement("file-accept",{file:t})},u.prototype.compositionDidAddAttachment=function(t){var e;return e=this.attachmentManager.manageAttachment(t),this.notifyEditorElement("attachment-add",{attachment:e})},u.prototype.compositionDidEditAttachment=function(t){var e;return this.compositionController.rerenderViewForObject(t),e=this.attachmentManager.manageAttachment(t),this.notifyEditorElement("attachment-edit",{attachment:e}),this.notifyEditorElement("change")},u.prototype.compositionDidChangeAttachmentPreviewURL=function(t){return this.compositionController.invalidateViewForObject(t),this.notifyEditorElement("change")},u.prototype.compositionDidRemoveAttachment=function(t){var e;return e=this.attachmentManager.unmanageAttachment(t),this.notifyEditorElement("attachment-remove",{attachment:e})},u.prototype.compositionDidStartEditingAttachment=function(t,e){return this.attachmentLocationRange=this.composition.document.getLocationRangeOfAttachment(t),this.compositionController.installAttachmentEditorForAttachment(t,e),this.selectionManager.setLocationRange(this.attachmentLocationRange)},u.prototype.compositionDidStopEditingAttachment=function(){return this.compositionController.uninstallAttachmentEditor(),this.attachmentLocationRange=null},u.prototype.compositionDidRequestChangingSelectionToLocationRange=function(t){return !this.loadingSnapshot||this.isFocused()?(this.requestedLocationRange=t,this.compositionRevisionWhenLocationRangeRequested=this.composition.revision,this.handlingInput?void 0:this.render()):void 0},u.prototype.compositionWillLoadSnapshot=function(){return this.loadingSnapshot=!0},u.prototype.compositionDidLoadSnapshot=function(){return this.compositionController.refreshViewCache(),this.render(),this.loadingSnapshot=!1},u.prototype.getSelectionManager=function(){return this.selectionManager},u.proxyMethod("getSelectionManager().setLocationRange"),u.proxyMethod("getSelectionManager().getLocationRange"),u.prototype.attachmentManagerDidRequestRemovalOfAttachment=function(t){return this.removeAttachment(t)},u.prototype.compositionControllerWillSyncDocumentView=function(){return this.inputController.editorWillSyncDocumentView(),this.selectionManager.lock(),this.selectionManager.clearSelection()},u.prototype.compositionControllerDidSyncDocumentView=function(){return this.inputController.editorDidSyncDocumentView(),this.selectionManager.unlock(),this.updateCurrentActions(),this.notifyEditorElement("sync")},u.prototype.compositionControllerDidRender=function(){return null!=this.requestedLocationRange&&(this.compositionRevisionWhenLocationRangeRequested===this.composition.revision&&this.selectionManager.setLocationRange(this.requestedLocationRange),this.requestedLocationRange=null,this.compositionRevisionWhenLocationRangeRequested=null),this.renderedCompositionRevision!==this.composition.revision&&(this.runEditorFilters(),this.composition.updateCurrentAttributes(),this.notifyEditorElement("render")),this.renderedCompositionRevision=this.composition.revision},u.prototype.compositionControllerDidFocus=function(){return this.toolbarController.hideDialog(),this.notifyEditorElement("focus")},u.prototype.compositionControllerDidBlur=function(){return this.notifyEditorElement("blur")},u.prototype.compositionControllerDidSelectAttachment=function(t,e){return this.composition.editAttachment(t,e)},u.prototype.compositionControllerDidRequestDeselectingAttachment=function(t){var e,n;return e=null!=(n=this.attachmentLocationRange)?n:this.composition.document.getLocationRangeOfAttachment(t),this.selectionManager.setLocationRange(e[1])},u.prototype.compositionControllerWillUpdateAttachment=function(t){return this.editor.recordUndoEntry("Edit Attachment",{context:t.id,consolidatable:!0})},u.prototype.compositionControllerDidRequestRemovalOfAttachment=function(t){return this.removeAttachment(t)},u.prototype.inputControllerWillHandleInput=function(){return this.handlingInput=!0,this.requestedRender=!1},u.prototype.inputControllerDidRequestRender=function(){return this.requestedRender=!0},u.prototype.inputControllerDidHandleInput=function(){return this.handlingInput=!1,this.requestedRender?(this.requestedRender=!1,this.render()):void 0},u.prototype.inputControllerDidAllowUnhandledInput=function(){return this.notifyEditorElement("change")},u.prototype.inputControllerDidRequestReparse=function(){return this.reparse()},u.prototype.inputControllerWillPerformTyping=function(){return this.recordTypingUndoEntry()},u.prototype.inputControllerWillPerformFormatting=function(t){return this.recordFormattingUndoEntry(t)},u.prototype.inputControllerWillCutText=function(){return this.editor.recordUndoEntry("Cut")},u.prototype.inputControllerWillPaste=function(t){return this.editor.recordUndoEntry("Paste"),this.pasting=!0,this.notifyEditorElement("before-paste",{paste:t})},u.prototype.inputControllerDidPaste=function(t){return t.range=this.pastedRange,this.pastedRange=null,this.pasting=null,this.notifyEditorElement("paste",{paste:t})},u.prototype.inputControllerWillMoveText=function(){return this.editor.recordUndoEntry("Move")},u.prototype.inputControllerWillAttachFiles=function(){return this.editor.recordUndoEntry("Drop Files")},u.prototype.inputControllerWillPerformUndo=function(){return this.editor.undo()},u.prototype.inputControllerWillPerformRedo=function(){return this.editor.redo()},u.prototype.inputControllerDidReceiveKeyboardCommand=function(t){return this.toolbarController.applyKeyboardCommand(t)},u.prototype.inputControllerDidStartDrag=function(){return this.locationRangeBeforeDrag=this.selectionManager.getLocationRange()},u.prototype.inputControllerDidReceiveDragOverPoint=function(t){return this.selectionManager.setLocationRangeFromPointRange(t)},u.prototype.inputControllerDidCancelDrag=function(){return this.selectionManager.setLocationRange(this.locationRangeBeforeDrag),this.locationRangeBeforeDrag=null},u.prototype.locationRangeDidChange=function(t){return this.composition.updateCurrentAttributes(),this.updateCurrentActions(),this.attachmentLocationRange&&!o(this.attachmentLocationRange,t)&&this.composition.stopEditingAttachment(),this.notifyEditorElement("selection-change")},u.prototype.toolbarDidClickButton=function(){return this.getLocationRange()?void 0:this.setLocationRange({index:0,offset:0})},u.prototype.toolbarDidInvokeAction=function(t){return this.invokeAction(t)},u.prototype.toolbarDidToggleAttribute=function(t){return this.recordFormattingUndoEntry(t),this.composition.toggleCurrentAttribute(t),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},u.prototype.toolbarDidUpdateAttribute=function(t,e){return this.recordFormattingUndoEntry(t),this.composition.setCurrentAttribute(t,e),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},u.prototype.toolbarDidRemoveAttribute=function(t){return this.recordFormattingUndoEntry(t),this.composition.removeCurrentAttribute(t),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},u.prototype.toolbarWillShowDialog=function(){return this.composition.expandSelectionForEditing(),this.freezeSelection()},u.prototype.toolbarDidShowDialog=function(t){return this.notifyEditorElement("toolbar-dialog-show",{dialogName:t})},u.prototype.toolbarDidHideDialog=function(t){return this.thawSelection(),this.editorElement.focus(),this.notifyEditorElement("toolbar-dialog-hide",{dialogName:t})},u.prototype.freezeSelection=function(){return this.selectionFrozen?void 0:(this.selectionManager.lock(),this.composition.freezeSelection(),this.selectionFrozen=!0,this.render())},u.prototype.thawSelection=function(){return this.selectionFrozen?(this.composition.thawSelection(),this.selectionManager.unlock(),this.selectionFrozen=!1,this.render()):void 0},u.prototype.actions={undo:{test:function(){return this.editor.canUndo()},perform:function(){return this.editor.undo()}},redo:{test:function(){return this.editor.canRedo()},perform:function(){return this.editor.redo()}},link:{test:function(){return this.editor.canActivateAttribute("href")}},increaseNestingLevel:{test:function(){return this.editor.canIncreaseNestingLevel()},perform:function(){return this.editor.increaseNestingLevel()&&this.render()}},decreaseNestingLevel:{test:function(){return this.editor.canDecreaseNestingLevel()},perform:function(){return this.editor.decreaseNestingLevel()&&this.render()}},attachFiles:{test:function(){return !0},perform:function(){return e.config.input.pickFiles(this.editor.insertFiles)}}},u.prototype.canInvokeAction=function(t){var e,n;return this.actionIsExternal(t)?!0:!!(null!=(e=this.actions[t])&&null!=(n=e.test)?n.call(this):void 0)},u.prototype.invokeAction=function(t){var e,n;return this.actionIsExternal(t)?this.notifyEditorElement("action-invoke",{actionName:t}):null!=(e=this.actions[t])&&null!=(n=e.perform)?n.call(this):void 0},u.prototype.actionIsExternal=function(t){return /^x-./.test(t)},u.prototype.getCurrentActions=function(){var t,e;e={};for(t in this.actions)e[t]=this.canInvokeAction(t);return e},u.prototype.updateCurrentActions=function(){var t;return t=this.getCurrentActions(),n(t,this.currentActions)?void 0:(this.currentActions=t,this.toolbarController.updateActions(this.currentActions),this.notifyEditorElement("actions-change",{actions:this.currentActions}))},u.prototype.runEditorFilters=function(){var t,e,n,i,o,r,s,a;for(a=this.composition.getSnapshot(),o=this.editor.filters,n=0,i=o.length;i>n;n++)e=o[n],t=a.document,s=a.selectedRange,a=null!=(r=e.call(this.editor,a))?r:{},null==a.document&&(a.document=t),null==a.selectedRange&&(a.selectedRange=s);return c(a,this.composition.getSnapshot())?void 0:this.composition.loadSnapshot(a)},c=function(t,e){return o(t.selectedRange,e.selectedRange)&&t.document.isEqualTo(e.document)},u.prototype.updateInputElement=function(){var t,n;return t=this.compositionController.getSerializableElement(),n=e.serializeToContentType(t,"text/html"),this.editorElement.setInputElementValue(n)},u.prototype.notifyEditorElement=function(t,e){switch(t){case"document-change":this.documentChangedSinceLastRender=!0;break;case"render":this.documentChangedSinceLastRender&&(this.documentChangedSinceLastRender=!1,this.notifyEditorElement("change"));break;case"change":case"attachment-add":case"attachment-edit":case"attachment-remove":this.updateInputElement();}return this.editorElement.notify(t,e)},u.prototype.removeAttachment=function(t){return this.editor.recordUndoEntry("Delete Attachment"),this.composition.removeAttachment(t),this.render()},u.prototype.recordFormattingUndoEntry=function(e){var n,o;return n=t(e),o=this.selectionManager.getLocationRange(),n||!i(o)?this.editor.recordUndoEntry("Formatting",{context:this.getUndoContext(),consolidatable:!0}):void 0},u.prototype.recordTypingUndoEntry=function(){return this.editor.recordUndoEntry("Typing",{context:this.getUndoContext(this.currentAttributes),consolidatable:!0})},u.prototype.getUndoContext=function(){var t;return t=1<=arguments.length?a.call(arguments,0):[],[this.getLocationContext(),this.getTimeContext()].concat(a.call(t))},u.prototype.getLocationContext=function(){var t;return t=this.selectionManager.getLocationRange(),i(t)?t[0].index:t},u.prototype.getTimeContext=function(){return e.config.undoInterval>0?Math.floor((new Date).getTime()/e.config.undoInterval):0},u.prototype.isFocused=function(){var t;return this.editorElement===(null!=(t=this.editorElement.ownerDocument)?t.activeElement:void 0)},u}(e.Controller);}.call(this),function(){var t,n,i,o,r,s;n=e.browser,r=e.makeElement,s=e.triggerEvent,i=e.handleEvent,o=e.handleEventOnce,t=e.AttachmentView.attachmentSelector,e.registerElement("trix-editor",function(){var a,u,c,l,h,p,d,f;return p=0,u=function(t){return !document.querySelector(":focus")&&t.hasAttribute("autofocus")&&document.querySelector("[autofocus]")===t?t.focus():void 0},d=function(t){return t.hasAttribute("contenteditable")?void 0:(t.setAttribute("contenteditable",""),o("focus",{onElement:t,withCallback:function(){return c(t)}}))},a=function(t){return t.hasAttribute("role")?void 0:t.setAttribute("role","textbox")},c=function(t){return h(t),f(t)},h=function(t){return ("function"==typeof document.queryCommandSupported?document.queryCommandSupported("enableObjectResizing"):void 0)?(document.execCommand("enableObjectResizing",!1,!1),i("mscontrolselect",{onElement:t,preventDefault:!0})):void 0},f=function(){var t;return ("function"==typeof document.queryCommandSupported?document.queryCommandSupported("DefaultParagraphSeparator"):void 0)&&(t=e.config.blockAttributes["default"].tagName,"div"===t||"p"===t)?document.execCommand("DefaultParagraphSeparator",!1,t):void 0},l=function(){return n.forcesObjectResizing?{display:"inline",width:"auto"}:{display:"inline-block",width:"1px"}}(),{defaultCSS:"%t {\n  display: block;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t "+t+" figcaption textarea {\n  resize: none;\n}\n\n%t "+t+" figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t "+t+" figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: "+l.display+" !important;\n  width: "+l.width+" !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}",trixId:{get:function(){return this.hasAttribute("trix-id")?this.getAttribute("trix-id"):(this.setAttribute("trix-id",++p),this.trixId)}},toolbarElement:{get:function(){var t,e,n;return this.hasAttribute("toolbar")?null!=(e=this.ownerDocument)?e.getElementById(this.getAttribute("toolbar")):void 0:this.parentNode?(n="trix-toolbar-"+this.trixId,this.setAttribute("toolbar",n),t=r("trix-toolbar",{id:n}),this.parentNode.insertBefore(t,this),t):void 0}},inputElement:{get:function(){var t,e,n;return this.hasAttribute("input")?null!=(n=this.ownerDocument)?n.getElementById(this.getAttribute("input")):void 0:this.parentNode?(e="trix-input-"+this.trixId,this.setAttribute("input",e),t=r("input",{type:"hidden",id:e}),this.parentNode.insertBefore(t,this.nextElementSibling),t):void 0}},editor:{get:function(){var t;return null!=(t=this.editorController)?t.editor:void 0}},name:{get:function(){var t;return null!=(t=this.inputElement)?t.name:void 0}},value:{get:function(){var t;return null!=(t=this.inputElement)?t.value:void 0},set:function(t){var e;return this.defaultValue=t,null!=(e=this.editor)?e.loadHTML(this.defaultValue):void 0}},notify:function(t,e){return this.editorController?s("trix-"+t,{onElement:this,attributes:e}):void 0},setInputElementValue:function(t){var e;return null!=(e=this.inputElement)?e.value=t:void 0},initialize:function(){return d(this),a(this)},connect:function(){return this.hasAttribute("data-trix-internal")?void 0:(this.editorController||(s("trix-before-initialize",{onElement:this}),this.editorController=new e.EditorController({editorElement:this,html:this.defaultValue=this.value}),requestAnimationFrame(function(t){return function(){return s("trix-initialize",{onElement:t})}}(this))),this.editorController.registerSelectionManager(),this.registerResetListener(),u(this))},disconnect:function(){var t;return null!=(t=this.editorController)&&t.unregisterSelectionManager(),this.unregisterResetListener()},registerResetListener:function(){return this.resetListener=this.resetBubbled.bind(this),window.addEventListener("reset",this.resetListener,!1)},unregisterResetListener:function(){return window.removeEventListener("reset",this.resetListener,!1)},resetBubbled:function(t){var e;return t.target!==(null!=(e=this.inputElement)?e.form:void 0)||t.defaultPrevented?void 0:this.reset()},reset:function(){return this.value=this.defaultValue}}}());}.call(this),function(){}.call(this);}).call(this),module.exports?module.exports=e:"function"==typeof undefined;}.call(commonjsGlobal);
    });

    var cn$7 = classname.withNaming({ e: '__', m: '--' })('Richtext');
    var Richtext = (function (_super) {
        __extends(Richtext, _super);
        function Richtext(props) {
            var _this = _super.call(this, props) || this;
            _this.changed = function (e) { return _this.props.onChange && _this.props.onChange(_this.trixRef.value); };
            _this.uploadFileAttachment = function (attachment) {
                _this.uploadFile(attachment.file, setProgress, setAttributes);
                function setProgress(progress) {
                    attachment.setUploadProgress(progress);
                }
                function setAttributes(attributes) {
                    attachment.setAttributes(attributes);
                }
            };
            _this.loadJSON = function (data) {
                return _this.trixRef.editor.loadJSON(JSON.parse(data));
            };
            _this.returnJSON = function () {
                return JSON.stringify(_this.trixRef.editor);
            };
            _this.uploadFile = function (file, progressCallback, successCallback) {
                var date = new Date();
                var key = date.getTime() + '-' + file.name;
                var formData = _this.createFormData(file, key);
                var xhr = new XMLHttpRequest();
                var url = (process.env.REACT_APP_API_URL || 'http://localhost/api/v1') + "/file-upload";
                var cdn = process.env.REACT_APP_CDN_NAME || 'https://dev-assets.qeemtee.com';
                xhr.open('POST', url, true);
                xhr.upload.addEventListener('progress', function (event) {
                    var progress = (event.loaded / event.total) * 100;
                    progressCallback(progress);
                });
                xhr.addEventListener('load', function (event) {
                    if (xhr.status == 200) {
                        var response = JSON.parse(xhr.response);
                        var attributes = {
                            url: response.result.file,
                            href: response.result.file + "?content-disposition=attachment",
                        };
                        successCallback(attributes);
                    }
                });
                xhr.send(formData);
            };
            _this.state = {
                touched: false,
            };
            return _this;
        }
        Richtext.prototype.componentDidMount = function () {
            var _this = this;
            var _a = this.props, onFocus = _a.onFocus, onBlur = _a.onBlur;
            var touched = this.state.touched;
            this.trixRef.addEventListener('trix-change', this.changed);
            this.trixRef.addEventListener('trix-attachment-add', function (event) {
                if (event.attachment.file) {
                    _this.uploadFileAttachment(event.attachment);
                }
            });
            this.trixRef.addEventListener('trix-focus', function (event) { return onFocus && onFocus(event); });
            this.trixRef.addEventListener('trix-blur', function (event) {
                onBlur && onBlur(event);
                if (!touched) {
                    _this.setState({ touched: true });
                }
            });
        };
        Richtext.prototype.componentWillUnmount = function () {
            var _this = this;
            var _a = this.props, onFocus = _a.onFocus, onBlur = _a.onBlur;
            var touched = this.state.touched;
            this.trixRef.removeEventListener('trix-changed', this.changed);
            this.trixRef.removeEventListener('trix-attachment-add', function (event) {
                if (event.attachment.file) {
                    _this.uploadFileAttachment(event.attachment);
                }
            });
            this.trixRef.removeEventListener('trix-focus', function (event) { return onFocus && onFocus(event); });
            this.trixRef.removeEventListener('trix-blur', function (event) {
                onBlur && onBlur(event);
                if (!touched) {
                    _this.setState({ touched: true });
                }
            });
        };
        Richtext.prototype.createFormData = function (file, key) {
            var data = new FormData();
            data.append('file', file, key);
            return data;
        };
        Richtext.prototype.render = function () {
            var _this = this;
            var _a = this.props, className = _a.className, error = _a.error, submitted = _a.submitted, label = _a.label, placeholder = _a.placeholder, value = _a.value;
            var touched = this.state.touched;
            var id = Math.random()
                .toString(36)
                .substr(2, 9);
            return (React__default.createElement("div", { className: classNames(className, cn$7('', { error: (error && touched) || (submitted && error) })) },
                label && (React__default.createElement("label", { className: cn$7('label') },
                    label,
                    " ",
                    this.props.required && React__default.createElement("span", { className: cn$7('required') }, "*"))),
                React__default.createElement("input", { value: value, id: id, type: "hidden", name: "content" }),
                React__default.createElement("trix-editor", { placeholder: placeholder, class: "trix-content", ref: function (r) { return (_this.trixRef = r); }, input: id }),
                (error && touched) || (submitted && error) ? (React__default.createElement("p", { className: cn$7('error-message') }, error)) : ('')));
        };
        return Richtext;
    }(React.Component));
    var RichTextDisplay = function (_a) {
        var data = _a.data;
        return React__default.createElement("div", { className: "trix-content", dangerouslySetInnerHTML: { __html: data } });
    };

    ___$insertStyle(".FileUploader {\n  border: 2px dashed #ccc;\n  border-radius: 20px;\n  position: relative;\n  padding: 20px;\n}\n.FileUploader--error {\n  color: red;\n  border-color: red;\n}\n.FileUploader__error {\n  position: absolute;\n  bottom: 5px;\n  font-size: 13px;\n  color: red;\n  right: 10px;\n}\n.FileUploader__uploaded {\n  margin: 20px 0 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n.FileUploader__uploaded__wrapper {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  margin: 10px 0;\n}\n.FileUploader__uploaded .material-icons {\n  position: absolute;\n  top: -5px;\n  right: 13px;\n  background: lightgrey;\n  border-radius: 50%;\n  font-size: 15px;\n  padding: 3px;\n  cursor: pointer;\n}\n.FileUploader__uploaded p {\n  font-size: 12px;\n  margin-right: 10px;\n  border: 1px solid lightgrey;\n  padding: 10px 5px;\n}\n.FileUploader__uploaded img {\n  height: 100px;\n  margin-right: 20px;\n  width: 100px;\n}\n.FileUploader__button {\n  background-color: white;\n  display: inline-block;\n  padding: 10px 20px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);\n  margin-bottom: 10px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.FileUploader__progress {\n  width: 100%;\n}\n@media only screen and (max-width: 699px) {\n  .FileUploader {\n    width: 450px;\n  }\n}\n@media only screen and (max-width: 499px) {\n  .FileUploader {\n    width: 300px;\n  }\n}");

    var url = (process.env.REACT_APP_API_URL || 'http://localhost/api/v1') + "/file-upload";
    var cn$8 = classname.withNaming({ e: '__', m: '--' })('FileUploader');
    var FileUploader = function (props) {
        var _a = React.useState(''), id = _a[0], setId = _a[1];
        var fileWrapper = React.useRef(null);
        var progressBar = React.useRef(null);
        var _b = React.useState([]), files = _b[0], setFiles = _b[1];
        var uploadProgress = [];
        React.useEffect(function () {
            if (fileWrapper) {
                ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
                    fileWrapper.current.addEventListener(eventName, preventDefaults, false);
                    document.body.addEventListener(eventName, preventDefaults, false);
                });
                ['dragenter', 'dragover'].forEach(function (eventName) {
                    fileWrapper.current.addEventListener(eventName, highlight, false);
                });
                ['dragleave', 'drop'].forEach(function (eventName) {
                    fileWrapper.current.addEventListener(eventName, unhighlight, false);
                });
                fileWrapper.current.addEventListener('drop', handleDrop, false);
                return function () {
                    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
                        fileWrapper.current.removeEventListener(eventName, preventDefaults, false);
                        document.body.removeEventListener(eventName, preventDefaults, false);
                    });
                    ['dragenter', 'dragover'].forEach(function (eventName) {
                        fileWrapper.current.removeEventListener(eventName, highlight, false);
                    });
                    ['dragleave', 'drop'].forEach(function (eventName) {
                        fileWrapper.current.removeEventListener(eventName, unhighlight, false);
                    });
                    fileWrapper.current.removeEventListener('drop', handleDrop, false);
                };
            }
        }, [fileWrapper.current]);
        React.useEffect(function () {
            setId(newId('File-Uploader-'));
        }, []);
        React.useEffect(function () {
            if (files.length) {
                initializeProgress(files.length);
                Promise.all(files.map(uploadFile)).then(function (data) {
                    sendFile(data);
                    setFiles([]);
                });
            }
        }, [files]);
        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }
        function highlight(e) {
            fileWrapper.current.classList.add('highlight');
        }
        function unhighlight(e) {
            fileWrapper.current.classList.remove('active');
        }
        function onChange(e) {
            var newFiles = fileListToArray(e.target.files);
            setFiles(newFiles);
        }
        function handleDrop(e) {
            e.preventDefault();
            if (e.dataTransfer) {
                var newFiles = fileListToArray(e.dataTransfer.files);
                setFiles(props.multiple ? __spreadArrays(newFiles) : [newFiles[0]]);
            }
        }
        function fileListToArray(list) {
            var array = [];
            for (var i = 0; i < list.length; i++) {
                array.push(list.item(i));
            }
            return array;
        }
        function initializeProgress(numFiles) {
            progressBar.current.value = 0;
            uploadProgress = [];
            for (var i = numFiles; i > 0; i--) {
                uploadProgress.push(0);
            }
        }
        function updateProgress(fileNumber, percent) {
            uploadProgress[fileNumber] = percent;
            var total = uploadProgress.reduce(function (tot, curr) { return tot + curr; }, 0) / uploadProgress.length;
            progressBar.current.value = total;
        }
        function uploadFile(file, i) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                var date = new Date();
                var key = (date.getTime() + "-" + file.name).replace(/ /g, '');
                var formData = createFormData(file, key);
                xhr.open('POST', url, true);
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                xhr.upload.addEventListener('progress', function (e) {
                    updateProgress(i, (e.loaded * 100.0) / e.total || 100);
                });
                xhr.addEventListener('readystatechange', function (e) {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        resolve({
                            mediaType: file.type,
                            mediaUrl: JSON.parse(xhr.response).result.file,
                            name: file.name,
                        });
                        updateProgress(i, 100);
                    }
                    else if (xhr.readyState == 4 && xhr.status != 200) {
                        reject('error');
                    }
                });
                xhr.send(formData);
            });
        }
        function createFormData(file, key) {
            var data = new FormData();
            data.append('file', file, key);
            return data;
        }
        var removeFile = function (i) { return function (e) {
            var value = props.value;
            if (value) {
                value.splice(i, 1);
                props.onChange && props.onChange(__spreadArrays(value));
            }
        }; };
        var sendFile = function (data) {
            var value = props.value;
            if (props.onChange) {
                var files_1 = __spreadArrays((value || []), data);
                if (!props.multiple) {
                    return props.onChange([files_1[0]]);
                }
                props.onChange(files_1);
            }
        };
        return (React__default.createElement("div", { className: cn$8('', { error: props.error ? true : false }), ref: fileWrapper },
            React__default.createElement("div", { className: cn$8('form') },
                React__default.createElement("label", { className: cn$8('button'), htmlFor: id }, "Select Files"),
                React__default.createElement("input", { hidden: true, id: id, onChange: onChange, type: "file", multiple: props.multiple })),
            React__default.createElement("progress", { className: cn$8('progress'), ref: progressBar, max: 100, value: 0 }),
            props.value && props.value.length ? (React__default.createElement(React__default.Fragment, null,
                React__default.createElement("div", { className: cn$8('uploaded') }, props.value.map(function (u, i) {
                    return u.mediaType.includes('image') && (React__default.createElement("div", { key: i, className: cn$8('uploaded__wrapper') },
                        React__default.createElement("img", { src: u.mediaUrl, alt: "media" }),
                        React__default.createElement(Icon, { onClick: removeFile(i), icon: "close" })));
                })),
                React__default.createElement("div", { className: cn$8('uploaded') }, props.value.map(function (u, i) {
                    return !u.mediaType.includes('image') && (React__default.createElement("div", { key: i, className: cn$8('uploaded__wrapper') },
                        React__default.createElement("p", null, u.name ? u.name : u.mediaUrl.split('/')[u.mediaUrl.split('/').length - 1]),
                        React__default.createElement(Icon, { onClick: removeFile(i), icon: "close" })));
                })))) : null,
            props.error ? React__default.createElement("p", { className: cn$8('error') }, props.error) : null));
    };
    FileUploader.defaultProps = {
        multiple: true,
    };

    ___$insertStyle(".Radio {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  user-select: none;\n}\n.Radio__required {\n  color: red;\n}\n.Radio-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.Radio > .label {\n  flex: 1 1 auto;\n  margin-left: 15px;\n}\n.Radio > .label::first-letter {\n  text-transform: uppercase;\n}\n.Radio > .radio {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 1px #666666;\n  flex: 0 0 auto;\n  user-select: none;\n  cursor: pointer;\n  transition: box-shadow 0.2s;\n}\n.Radio > input {\n  visibility: hidden;\n  position: absolute;\n  opacity: 0;\n  width: 1px;\n  height: 1px;\n}\n.Radio > input:checked + .radio {\n  box-shadow: inset 0 0 0 5px #f9285c;\n}\n.Radio-color-primary > input:checked + .radio {\n  box-shadow: inset 0 0 0 5px #f9285c;\n}\n.Radio-color-secondary > input:checked + .radio {\n  box-shadow: inset 0 0 0 5px #8480b6;\n}");

    var cn$9 = classname.withNaming({ e: '__', m: '-' })('Radio');
    var Radio = React__default.forwardRef(function (props, ref) {
        var _a = props.className, className = _a === void 0 ? '' : _a, name = props.name, checked = props.checked, onChange = props.onChange, value = props.value, label = props.label, children = props.children, disabled = props.disabled, _b = props.color, color = _b === void 0 ? 'primary' : _b, required = props.required, other = __rest(props, ["className", "name", "checked", "onChange", "value", "label", "children", "disabled", "color", "required"]);
        var classes = (cn$9('', {
            disabled: disabled,
            color: color,
        }) + " " + className).trim();
        return (React__default.createElement("label", { className: classes },
            React__default.createElement("input", __assign({}, other, { type: "radio", checked: checked, name: name, value: value, onChange: onChange, disabled: disabled, ref: ref })),
            React__default.createElement("div", { className: "radio" }),
            React__default.createElement("span", { className: "label" },
                children || label || value,
                " ",
                required && React__default.createElement("span", { className: cn$9('required') }, "*"))));
    });

    function useForm(validate) {
        var _a = React.useState({}), values = _a[0], setValues = _a[1];
        var _b = React.useState({}), errors = _b[0], setErrors = _b[1];
        var _c = React.useState(false), valid = _c[0], setValid = _c[1];
        React.useEffect(function () {
            setValid(Object.keys(errors).length === 0);
        }, [errors]);
        React.useEffect(function () {
            var _errors = validate(values);
            if (JSON.stringify(errors) !== JSON.stringify(_errors)) {
                setErrors(_errors);
            }
        }, [values]);
        var onChange = function (event) {
            var _a;
            event.persist();
            var _values = __assign(__assign({}, values), (_a = {}, _a[event.target.name] = event.target.value, _a));
            if (JSON.stringify(values) !== JSON.stringify(_values)) {
                setValues(_values);
            }
            var _errors = validate(_values);
            if (JSON.stringify(errors) !== JSON.stringify(_errors)) {
                setErrors(_errors);
            }
        };
        var submit = function () {
            var _errors = validate(values);
            if (JSON.stringify(errors) !== JSON.stringify(_errors)) {
                setErrors(_errors);
            }
        };
        return {
            values: values,
            errors: errors,
            valid: valid,
            onChange: onChange,
            submit: submit,
            setErrors: setErrors,
            setValues: setValues,
        };
    }

    var validateEmail = function (value) {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(value)) {
            return false;
        }
        return true;
    };
    var validatePassword = function (value) {
        var pattern = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))/;
        if (!pattern.test(value)) {
            return false;
        }
        return true;
    };
    var validateMobile = function (value) {
        var pattern = /^([0|\+[0-9]{1,5})?([0-9]{10})$/;
        if (!pattern.test(value)) {
            return false;
        }
        return true;
    };
    var isRequired = function (value) {
        if (!value.trim() || !value) {
            return false;
        }
        return true;
    };
    var validate = {
        validateEmail: validateEmail,
        validatePassword: validatePassword,
        validateMobile: validateMobile,
        isRequired: isRequired,
    };

    exports.Button = Button;
    exports.Checkbox = Checkbox;
    exports.Collapse = Collapse;
    exports.Currency = Currency;
    exports.DatePicker = DatePicker;
    exports.FileUploader = FileUploader;
    exports.Icon = Icon;
    exports.Input = Input;
    exports.Modal = Modal;
    exports.Notification = api;
    exports.Number = _Number;
    exports.OverlayComponent = OverlayComponent;
    exports.PhoneNumber = PhoneNumber;
    exports.Radio = Radio;
    exports.RichTextDisplay = RichTextDisplay;
    exports.Richtext = Richtext;
    exports.Switch = Switch;
    exports.Table = Table;
    exports.Tag = Tag;
    exports.TimePicker = TimePicker$1;
    exports.TypeAhead = TypeAhead;
    exports.useForm = useForm;
    exports.validate = validate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
