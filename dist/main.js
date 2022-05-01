/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 16px;\n    --darkblue: #164e63;\n    --blue: #06b6d4;\n    --lightgray: #f6f6f6;\n    --gray: #d4d4d4;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    background-color: var(--lightgray);\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    background-color: var(--darkblue);\n    padding: 8px;\n    display: flex;\n    justify-content: center;\n    color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\nh1 {\n    font-size: 2.6rem;\n}\n\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    height: inherit;\n    align-items: center;\n    justify-content: center;\n}\n\n.content {\n    background-color: white;\n    padding: 16px 32px;\n    width: 700px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    flex: 1;\n}\n\nul {\n    list-style-type: none;\n}\n\nh2, h3 {\n    font-weight: 300;\n}\n\n.task > * {\n    font-size: 1rem;\n}\n\nh4 {\n    font-size: 0.8rem;\n}\n\n.projects .header {\n    font-size: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    padding: 8px 16px;\n    background-color: var(--blue);\n    color: white;\n    height: 44px;\n    box-sizing: border-box;\n}\n\n.header .buttons {\n    display: flex;\n    gap: 8px;\n}\n\n.task-list > * {\n    padding: 8px 16px;\n    display: grid;\n    grid-template-columns: 1fr repeat(3, 80px);\n    gap: 32px;\n    justify-items: center;\n}\n\n.task-list > li > *:first-child {\n    justify-self: left;\n}\n\n.task-list {\n    margin: 0 12px;\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton {\n    padding: 4px 12px;\n    font-size: 0.8rem;\n    border-radius: 12px;\n    border: none;\n    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\nbutton:active {\n    position: relative;\n    left: 1px;\n    top: 1px;\n    box-shadow: none;\n}\n\n.new-project-button {\n    margin: 16px;\n    padding: 6px 16px;\n}\n\n.project {\n    margin-bottom: 16px;\n}\n\n.button-container {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.header input {\n    padding: 4px 8px;\n    border-radius: 32px;\n    border: none;\n    outline: 1px solid black;\n    font-size: 1rem;\n    background-color: var(--lightgray);\n}\n\n.header h2 {\n    font-size: 1.3rem;\n}\n\n.filler {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    background-color: #3e3e3e8a;\n}\n\n.confirmation {\n    background-color: white;\n    padding: 64px 32px;\n    border-radius: 16px;\n}\n\n.confirmation > div {\n    display: flex;\n    justify-content: flex-end;\n    gap: 16px;\n    margin-top: 16px;\n}\n\n.new-task-container {\n    width: 350px;\n    background-color: white;\n    padding: 32px;\n    border-radius: 16px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 5fr 1fr;\n    gap: 8px;\n}\n\n.new-task-container > p {\n    display: flex;\n    flex-direction: column;\n    font-size: 0.7rem;\n}\n\n.new-task-container > h5 {\n    text-align: center;\n    font-size: 0.9rem;\n}\n\n#name-field,\n.new-task-container > h5 {\n    grid-column: 1 / -1;\n}\n\n#description-field {\n    grid-column: 1 / -1;\n}\n\n#description-input {\n    height: 100%;\n}\n\n.new-task-container > div {\n    grid-column: 1 / -1;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 16px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,mBAAmB;IACnB,eAAe;IACf,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,kCAAkC;IAClC,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,0CAA0C;AAC9C;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,4EAA4E;IAC5E,OAAO;AACX;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,0CAA0C;IAC1C,kBAAkB;IAClB,iBAAiB;IACjB,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,0CAA0C;IAC1C,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,8BAA8B;IAC9B,+BAA+B;IAC/B,0CAA0C;AAC9C;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,8CAA8C;AAClD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,wBAAwB;IACxB,eAAe;IACf,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,uCAAuC;IACvC,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,SAAS;AACb","sourcesContent":[":root {\n    font-size: 16px;\n    --darkblue: #164e63;\n    --blue: #06b6d4;\n    --lightgray: #f6f6f6;\n    --gray: #d4d4d4;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    background-color: var(--lightgray);\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    background-color: var(--darkblue);\n    padding: 8px;\n    display: flex;\n    justify-content: center;\n    color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\nh1 {\n    font-size: 2.6rem;\n}\n\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    height: inherit;\n    align-items: center;\n    justify-content: center;\n}\n\n.content {\n    background-color: white;\n    padding: 16px 32px;\n    width: 700px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    flex: 1;\n}\n\nul {\n    list-style-type: none;\n}\n\nh2, h3 {\n    font-weight: 300;\n}\n\n.task > * {\n    font-size: 1rem;\n}\n\nh4 {\n    font-size: 0.8rem;\n}\n\n.projects .header {\n    font-size: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    padding: 8px 16px;\n    background-color: var(--blue);\n    color: white;\n    height: 44px;\n    box-sizing: border-box;\n}\n\n.header .buttons {\n    display: flex;\n    gap: 8px;\n}\n\n.task-list > * {\n    padding: 8px 16px;\n    display: grid;\n    grid-template-columns: 1fr repeat(3, 80px);\n    gap: 32px;\n    justify-items: center;\n}\n\n.task-list > li > *:first-child {\n    justify-self: left;\n}\n\n.task-list {\n    margin: 0 12px;\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton {\n    padding: 4px 12px;\n    font-size: 0.8rem;\n    border-radius: 12px;\n    border: none;\n    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\nbutton:active {\n    position: relative;\n    left: 1px;\n    top: 1px;\n    box-shadow: none;\n}\n\n.new-project-button {\n    margin: 16px;\n    padding: 6px 16px;\n}\n\n.project {\n    margin-bottom: 16px;\n}\n\n.button-container {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.header input {\n    padding: 4px 8px;\n    border-radius: 32px;\n    border: none;\n    outline: 1px solid black;\n    font-size: 1rem;\n    background-color: var(--lightgray);\n}\n\n.header h2 {\n    font-size: 1.3rem;\n}\n\n.filler {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    background-color: #3e3e3e8a;\n}\n\n.confirmation {\n    background-color: white;\n    padding: 64px 32px;\n    border-radius: 16px;\n}\n\n.confirmation > div {\n    display: flex;\n    justify-content: flex-end;\n    gap: 16px;\n    margin-top: 16px;\n}\n\n.new-task-container {\n    width: 350px;\n    background-color: white;\n    padding: 32px;\n    border-radius: 16px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 5fr 1fr;\n    gap: 8px;\n}\n\n.new-task-container > p {\n    display: flex;\n    flex-direction: column;\n    font-size: 0.7rem;\n}\n\n.new-task-container > h5 {\n    text-align: center;\n    font-size: 0.9rem;\n}\n\n#name-field,\n.new-task-container > h5 {\n    grid-column: 1 / -1;\n}\n\n#description-field {\n    grid-column: 1 / -1;\n}\n\n#description-input {\n    height: 100%;\n}\n\n.new-task-container > div {\n    grid-column: 1 / -1;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 16px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domStuff.js":
/*!*************************!*\
  !*** ./src/domStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSub.js */ "./src/pubSub.js");


const page = (function() {
    const header = (function() {
        const header = document.createElement('header');
    
        const h1 = document.createElement('h1');
        h1.textContent = 'To do List';
    
        header.append(h1);
    
        return header;
    })();
    
    const content = (function() {
        const main = document.createElement('main');
        const content = document.createElement('div');
        content.classList.add('content');
        main.append(content);
        const ul = document.createElement('ul');
        ul.classList.add('projects');
        
        // New Project Button
        const newProjectButtonContainer = document.createElement('div');
        newProjectButtonContainer.classList.add('button-container');
        const newProjectButton = document.createElement('button');
        newProjectButton.setAttribute('type', 'button');
        newProjectButton.classList.add('new-project-button');
        newProjectButton.setAttribute('data-active', '1');
        newProjectButton.textContent = 'New Project';
        newProjectButtonContainer.append(newProjectButton);
    
        content.append(ul, newProjectButtonContainer);
        return {main, newProjectButton};
    })();
    document.body.append(header, content.main);
    return {newProjectButton: content.newProjectButton};
})();

const domStuff = (function() {
    const projectsDiv = document.querySelector('.projects');
    const projects = [];
    const newProjectButton = document.querySelector('.new-project-button');
    function toggleNewProjectButton() {
        if(newProjectButton.getAttribute('data-active') === '1') {
            newProjectButton.removeEventListener('click', addBlankProject);
            newProjectButton.setAttribute('data-active', '0');
        }
        else {
            newProjectButton.addEventListener('click', addBlankProject);
            newProjectButton.setAttribute('data-active', '1');
        }
    }
    function addBlankProject() {
        toggleNewProjectButton();
        (function newBlankProject() {
            let project = document.createElement('li');
            project.classList.add('project');
            const header = document.createElement('div');
            header.classList.add('header');
            const title = document.createElement('input');
            title.setAttribute('type', 'text');
            title.setAttribute('placeholder', 'New project');
            const buttons = document.createElement('div');
            buttons.classList.add('buttons');
            const confirm = document.createElement('button');
            confirm.textContent = 'Confirm';
            confirm.setAttribute('type', 'button');
            const cancel = document.createElement('button');
            cancel.textContent = 'Cancel';
            cancel.setAttribute('type', 'button');
            buttons.append(confirm, cancel);
            header.append(title, buttons);
            project.append(header);
            projectsDiv.append(project);
            confirm.addEventListener('click', () => {
                project.remove();
                toggleNewProjectButton();
                if(!title.value) return;
                _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('projectAdded', title.value);
            });
            cancel.addEventListener('click', () => {
                project.remove();
                toggleNewProjectButton();
            });
        })();
    }
    function newTaskForm(projectName, projectIndex) {
        const fillerDiv = document.createElement('div');
        fillerDiv.classList.add('filler');
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('new-task-container');
        const h5 = document.createElement('h5');
        h5.textContent = `Add new task to "${projectName}"`;

        // Name
        const name = document.createElement('p');
        name.id = 'name-field';
        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'name-input');
        nameLabel.textContent = 'Task name';
        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.id = 'name-input';
        name.append(nameLabel,nameInput);

        // Priority
        const priority = document.createElement('p');
        const priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'priority-input');
        priorityLabel.textContent = 'Priority';
        const priorityInput = document.createElement('select');
        priorityInput.id = 'priority-input';
        const highPriority = document.createElement('option');
        highPriority.textContent = 'High';
        highPriority.setAttribute('value', 'High');
        const mediumPriority = document.createElement('option');
        mediumPriority.textContent = 'Medium';
        mediumPriority.setAttribute('value', 'Medium');
        const lowPriority = document.createElement('option');
        lowPriority.textContent = 'Low';
        lowPriority.setAttribute('value', 'Low');
        priorityInput.append(highPriority, mediumPriority, lowPriority);
        priority.append(priorityLabel, priorityInput);

        // Due date
        const date = document.createElement('p');
        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'date-input');
        dateLabel.textContent = 'Due date';
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.id = 'date-input';
        date.append(dateLabel, dateInput);

        // Description
        const description = document.createElement('p');
        description.id = 'description-field';
        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description-input');
        descriptionLabel.textContent = 'Description';
        const descriptionInput = document.createElement('textarea');
        descriptionInput.id = 'description-input';
        description.append(descriptionLabel, descriptionInput);

        // Buttons
        const buttonsDiv = document.createElement('div');
        const cancelButton = document.createElement('button');
        cancelButton.setAttribute('type', 'button');
        cancelButton.textContent = 'Cancel';
        const confirmButton = document.createElement('button');
        confirmButton.setAttribute('type', 'button');
        confirmButton.textContent = 'Confirm';
        buttonsDiv.append(cancelButton, confirmButton);

        containerDiv.append(h5, name, priority, date, description, buttonsDiv);
        fillerDiv.append(containerDiv);

        cancelButton.addEventListener('click', () => {
            fillerDiv.remove();
        });
        confirmButton.addEventListener('click', () => {
            const task = {
                projectIndex: projectIndex,
                name: nameInput.value,
                priority: priorityInput.value,
                date: dateInput.value,
                description: descriptionInput.value
            };
            _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('taskAdded', task);
            fillerDiv.remove();
        });
        return fillerDiv;
    }
    function newTask(taskInfo) {
        const task = document.createElement('li');
        task.classList.add('task');
        const title = document.createElement('h3');
        title.textContent = taskInfo.name;
    
        const priority = document.createElement('p');
        priority.textContent = taskInfo.priority;
        const completed = document.createElement('p');
        completed.textContent = 'N';
        const due = document.createElement('p');
        due.textContent = taskInfo.date;

        task.append(title, priority, completed, due);
        return task;
    }
    function deleteProjectConfirmation(projectName, projectIndex) {
        const fillerDiv = document.createElement('div');
        fillerDiv.classList.add('filler');
        const confirmationDiv = document.createElement('div');
        confirmationDiv.classList.add('confirmation');
        const confirmationMsg = document.createElement('p');
        confirmationMsg.textContent = `Are you sure you want to delete "${projectName}"?`;
        const buttonsDiv = document.createElement('div');
        const confirmButton = document.createElement('button');
        confirmButton.setAttribute('type', 'button');
        confirmButton.textContent = 'Delete';
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        buttonsDiv.append(cancelButton, confirmButton);
        confirmationDiv.append(confirmationMsg, buttonsDiv);
        fillerDiv.append(confirmationDiv);
        cancelButton.addEventListener('click', () => {
            fillerDiv.remove();
        });
        confirmButton.addEventListener('click', () => {
            _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('projectRemoved', projectIndex);
            fillerDiv.remove();
        })
        return fillerDiv;
    }
    function addProject(name) {
        const project = document.createElement('li');
        project.setAttribute('data-hidden', '0');
        projects.push(project);
        project.classList.add('project');
        const header = document.createElement('div');
        header.classList.add('header');
        const title = document.createElement('h2');
        title.textContent = name;
        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
        const newTask = document.createElement('button');
        newTask.textContent = 'New Task';
        newTask.setAttribute('type', 'button');
        const del = document.createElement('button');
        del.textContent = 'Delete';
        del.setAttribute('type', 'button');
        buttons.append(newTask, del);
        header.append(title, buttons);
        
        // Task List
        const taskList = document.createElement('ul');
        taskList.classList.add('task-list');

        // Legend
        const legend = document.createElement('li');
        legend.classList.add('legend');
        const legendName = document.createElement('h4');
        legendName.textContent = 'Task name';
        const legendPriority = document.createElement('h4');
        legendPriority.textContent = 'Priority';
        const legendCompleted = document.createElement('h4');
        legendCompleted.textContent = 'Completed';
        const legendDueDate = document.createElement('h4');
        legendDueDate.textContent = 'Due date';
        legend.append(legendName, legendPriority, legendCompleted, legendDueDate);
        taskList.append(legend);

        project.addEventListener('click', () => {
            if(project.getAttribute('data-hidden') == '1') {
                project.append(taskList);
                project.setAttribute('data-hidden', '0');
            }
            else {
                project.removeChild(taskList);
                project.setAttribute('data-hidden', '1');
            }
        });
        newTask.addEventListener('click', (e) => {
            e.stopPropagation();
            document.body.append(newTaskForm(title.textContent, projects.indexOf(project)));
        });
        del.addEventListener('click', (e) => {
            e.stopPropagation();
            document.body.append(deleteProjectConfirmation(title.textContent, projects.indexOf(project)));
        });
        project.append(header, taskList);
        projectsDiv.append(project);
    }

    _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('projectAdded', (name) => addProject(name));
    _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('projectRemoved', (index) => {
        projects[index].remove();
        projects.splice(index, 1);
    });
    _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('taskAdded', (taskInfo) => {
        const taskList = projects[taskInfo.projectIndex].querySelector('.task-list');
        taskList.append(newTask(taskInfo));
    });
    newProjectButton.addEventListener('click', addBlankProject);
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domStuff);

/***/ }),

/***/ "./src/listLogic.js":
/*!**************************!*\
  !*** ./src/listLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSub.js */ "./src/pubSub.js");


class Project {
    constructor(name) {
        this.name = name;
        this.taskList = [];
    }
    addTask(task) {
        this.taskList.push(task);
    }
}

class Task {
    constructor(title, description, dueDate, priority, completed) {
        this.title = title;
        this.description = description
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }
    toggleCompletedStatus() {
        if(this.completed === true) this.completed = false;
        else this.completed = true;
    }
}

const listLogic = (function () {
    const projects = [];
    _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('projectAdded', (name) => {
        let newProject = new Project(name);
        projects.push(newProject);
    });
    _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('projectRemoved', (index) => {
        projects.splice(index, 1);
    });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listLogic);

/***/ }),

/***/ "./src/pubSub.js":
/*!***********************!*\
  !*** ./src/pubSub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pubSub = (function () {
    const events = {};
    function subscribe(eventName, f) {
        if (!events[eventName]) events[eventName] = [f];
        else if (!events[eventName].includes(f)) events[eventName].push(f);
    }
    function unsubscribe(eventName, f) {
        if(events[eventName].includes(f)) events[eventName].splice(events[eventName].indexOf(f),1);
    }
    function publish(eventName, data) {
        if(events[eventName]) {
            for(let f of events[eventName]) {
                f(data);
            }
        }
    }
    return {subscribe, unsubscribe, publish};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubSub);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domStuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domStuff.js */ "./src/domStuff.js");
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubSub.js */ "./src/pubSub.js");
/* harmony import */ var _listLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listLogic.js */ "./src/listLogic.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQWM7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsWUFBWTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsWUFBWSwwREFBYztBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw0REFBZ0I7QUFDcEIsSUFBSSw0REFBZ0I7QUFDcEI7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLDREQUFnQjtBQUNwQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7QUMvUlU7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw0REFBZ0I7QUFDcEI7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLDREQUFnQjtBQUNwQjtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVELGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDckN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDOztBQUVELGlFQUFlLE1BQU07Ozs7OztVQ25CckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNnQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbVN0dWZmLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGlzdExvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHViU3ViLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgLS1kYXJrYmx1ZTogIzE2NGU2MztcXG4gICAgLS1ibHVlOiAjMDZiNmQ0O1xcbiAgICAtLWxpZ2h0Z3JheTogI2Y2ZjZmNjtcXG4gICAgLS1ncmF5OiAjZDRkNGQ0O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmF5KTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxufVxcblxcbm1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmgyLCBoMyB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi50YXNrID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaDQge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnByb2plY3RzIC5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oZWFkZXIgLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnRhc2stbGlzdCA+ICoge1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDMsIDgwcHgpO1xcbiAgICBnYXA6IDMycHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stbGlzdCA+IGxpID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIG1hcmdpbjogMCAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgdG9wOiAxcHg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBtYXJnaW46IDE2cHg7XFxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmhlYWRlciBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JheSk7XFxufVxcblxcbi5oZWFkZXIgaDIge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmZpbGxlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlM2UzZThhO1xcbn1cXG5cXG4uY29uZmlybWF0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDY0cHggMzJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLmNvbmZpcm1hdGlvbiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLm5ldy10YXNrLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciA1ZnIgMWZyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLm5ldy10YXNrLWNvbnRhaW5lciA+IHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLm5ldy10YXNrLWNvbnRhaW5lciA+IGg1IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI25hbWUtZmllbGQsXFxuLm5ldy10YXNrLWNvbnRhaW5lciA+IGg1IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLWZpZWxkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmV3LXRhc2stY29udGFpbmVyID4gZGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJj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ICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAtLWRhcmtibHVlOiAjMTY0ZTYzO1xcbiAgICAtLWJsdWU6ICMwNmI2ZDQ7XFxuICAgIC0tbGlnaHRncmF5OiAjZjZmNmY2O1xcbiAgICAtLWdyYXk6ICNkNGQ0ZDQ7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDIuNnJlbTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMzJweDtcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuaDIsIGgzIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnRhc2sgPiAqIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNDRweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmhlYWRlciAuYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4udGFzay1saXN0ID4gKiB7XFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciByZXBlYXQoMywgODBweCk7XFxuICAgIGdhcDogMzJweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1saXN0ID4gbGkgPiAqOmZpcnN0LWNoaWxkIHtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgbWFyZ2luOiAwIDEycHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB0b3A6IDFweDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTZweDtcXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uaGVhZGVyIGlucHV0IHtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmF5KTtcXG59XFxuXFxuLmhlYWRlciBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uZmlsbGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzZTNlOGE7XFxufVxcblxcbi5jb25maXJtYXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNjRweCAzMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4uY29uZmlybWF0aW9uID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4ubmV3LXRhc2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDVmciAxZnI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4ubmV3LXRhc2stY29udGFpbmVyID4gcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4ubmV3LXRhc2stY29udGFpbmVyID4gaDUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4jbmFtZS1maWVsZCxcXG4ubmV3LXRhc2stY29udGFpbmVyID4gaDUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24tZmllbGQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24taW5wdXQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uZXctdGFzay1jb250YWluZXIgPiBkaXYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHB1YlN1YiBmcm9tICcuL3B1YlN1Yi5qcyc7XG5cbmNvbnN0IHBhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaGVhZGVyID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBcbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoMS50ZXh0Q29udGVudCA9ICdUbyBkbyBMaXN0JztcbiAgICBcbiAgICAgICAgaGVhZGVyLmFwcGVuZChoMSk7XG4gICAgXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfSkoKTtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgICAgICBtYWluLmFwcGVuZChjb250ZW50KTtcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgICAgICBcbiAgICAgICAgLy8gTmV3IFByb2plY3QgQnV0dG9uXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsICcxJyk7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZChuZXdQcm9qZWN0QnV0dG9uKTtcbiAgICBcbiAgICAgICAgY29udGVudC5hcHBlbmQodWwsIG5ld1Byb2plY3RCdXR0b25Db250YWluZXIpO1xuICAgICAgICByZXR1cm4ge21haW4sIG5ld1Byb2plY3RCdXR0b259O1xuICAgIH0pKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyLCBjb250ZW50Lm1haW4pO1xuICAgIHJldHVybiB7bmV3UHJvamVjdEJ1dHRvbjogY29udGVudC5uZXdQcm9qZWN0QnV0dG9ufTtcbn0pKCk7XG5cbmNvbnN0IGRvbVN0dWZmID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGZ1bmN0aW9uIHRvZ2dsZU5ld1Byb2plY3RCdXR0b24oKSB7XG4gICAgICAgIGlmKG5ld1Byb2plY3RCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScpID09PSAnMScpIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3RCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRCbGFua1Byb2plY3QpO1xuICAgICAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJzAnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRCbGFua1Byb2plY3QpO1xuICAgICAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJzEnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRCbGFua1Byb2plY3QoKSB7XG4gICAgICAgIHRvZ2dsZU5ld1Byb2plY3RCdXR0b24oKTtcbiAgICAgICAgKGZ1bmN0aW9uIG5ld0JsYW5rUHJvamVjdCgpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOZXcgcHJvamVjdCcpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XG4gICAgICAgICAgICBjb25zdCBjb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25maXJtLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICAgICAgICAgICAgY29uZmlybS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICAgICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbnMuYXBwZW5kKGNvbmZpcm0sIGNhbmNlbCk7XG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kKHRpdGxlLCBidXR0b25zKTtcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kKGhlYWRlcik7XG4gICAgICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmQocHJvamVjdCk7XG4gICAgICAgICAgICBjb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2plY3QucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlTmV3UHJvamVjdEJ1dHRvbigpO1xuICAgICAgICAgICAgICAgIGlmKCF0aXRsZS52YWx1ZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdwcm9qZWN0QWRkZWQnLCB0aXRsZS52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZU5ld1Byb2plY3RCdXR0b24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBuZXdUYXNrRm9ybShwcm9qZWN0TmFtZSwgcHJvamVjdEluZGV4KSB7XG4gICAgICAgIGNvbnN0IGZpbGxlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaWxsZXJEaXYuY2xhc3NMaXN0LmFkZCgnZmlsbGVyJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICAgICAgaDUudGV4dENvbnRlbnQgPSBgQWRkIG5ldyB0YXNrIHRvIFwiJHtwcm9qZWN0TmFtZX1cImA7XG5cbiAgICAgICAgLy8gTmFtZVxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lLmlkID0gJ25hbWUtZmllbGQnO1xuICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZS1pbnB1dCcpO1xuICAgICAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBuYW1lJztcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcbiAgICAgICAgbmFtZS5hcHBlbmQobmFtZUxhYmVsLG5hbWVJbnB1dCk7XG5cbiAgICAgICAgLy8gUHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5LWlucHV0Jyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQuaWQgPSAncHJpb3JpdHktaW5wdXQnO1xuICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJyk7XG4gICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTWVkaXVtJyk7XG4gICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kKGhpZ2hQcmlvcml0eSwgbWVkaXVtUHJpb3JpdHksIGxvd1ByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kKHByaW9yaXR5TGFiZWwsIHByaW9yaXR5SW5wdXQpO1xuXG4gICAgICAgIC8vIER1ZSBkYXRlXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlLWlucHV0Jyk7XG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZSc7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBkYXRlSW5wdXQuaWQgPSAnZGF0ZS1pbnB1dCc7XG4gICAgICAgIGRhdGUuYXBwZW5kKGRhdGVMYWJlbCwgZGF0ZUlucHV0KTtcblxuICAgICAgICAvLyBEZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaWQgPSAnZGVzY3JpcHRpb24tZmllbGQnO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24taW5wdXQnO1xuICAgICAgICBkZXNjcmlwdGlvbi5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAgICAgLy8gQnV0dG9uc1xuICAgICAgICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgICAgICAgYnV0dG9uc0Rpdi5hcHBlbmQoY2FuY2VsQnV0dG9uLCBjb25maXJtQnV0dG9uKTtcblxuICAgICAgICBjb250YWluZXJEaXYuYXBwZW5kKGg1LCBuYW1lLCBwcmlvcml0eSwgZGF0ZSwgZGVzY3JpcHRpb24sIGJ1dHRvbnNEaXYpO1xuICAgICAgICBmaWxsZXJEaXYuYXBwZW5kKGNvbnRhaW5lckRpdik7XG5cbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZmlsbGVyRGl2LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEluZGV4OiBwcm9qZWN0SW5kZXgsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgIGRhdGU6IGRhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25JbnB1dC52YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHB1YlN1Yi5wdWJsaXNoKCd0YXNrQWRkZWQnLCB0YXNrKTtcbiAgICAgICAgICAgIGZpbGxlckRpdi5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmaWxsZXJEaXY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5ld1Rhc2sodGFza0luZm8pIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza0luZm8ubmFtZTtcbiAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFza0luZm8ucHJpb3JpdHk7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29tcGxldGVkLnRleHRDb250ZW50ID0gJ04nO1xuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGR1ZS50ZXh0Q29udGVudCA9IHRhc2tJbmZvLmRhdGU7XG5cbiAgICAgICAgdGFzay5hcHBlbmQodGl0bGUsIHByaW9yaXR5LCBjb21wbGV0ZWQsIGR1ZSk7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0Q29uZmlybWF0aW9uKHByb2plY3ROYW1lLCBwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgY29uc3QgZmlsbGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpbGxlckRpdi5jbGFzc0xpc3QuYWRkKCdmaWxsZXInKTtcbiAgICAgICAgY29uc3QgY29uZmlybWF0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbmZpcm1hdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdjb25maXJtYXRpb24nKTtcbiAgICAgICAgY29uc3QgY29uZmlybWF0aW9uTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25maXJtYXRpb25Nc2cudGV4dENvbnRlbnQgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBcIiR7cHJvamVjdE5hbWV9XCI/YDtcbiAgICAgICAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgYnV0dG9uc0Rpdi5hcHBlbmQoY2FuY2VsQnV0dG9uLCBjb25maXJtQnV0dG9uKTtcbiAgICAgICAgY29uZmlybWF0aW9uRGl2LmFwcGVuZChjb25maXJtYXRpb25Nc2csIGJ1dHRvbnNEaXYpO1xuICAgICAgICBmaWxsZXJEaXYuYXBwZW5kKGNvbmZpcm1hdGlvbkRpdik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZpbGxlckRpdi5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwdWJTdWIucHVibGlzaCgncHJvamVjdFJlbW92ZWQnLCBwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgICAgZmlsbGVyRGl2LnJlbW92ZSgpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZmlsbGVyRGl2O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLWhpZGRlbicsICcwJyk7XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdUYXNrLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICAgICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWwudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgZGVsLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgYnV0dG9ucy5hcHBlbmQobmV3VGFzaywgZGVsKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZCh0aXRsZSwgYnV0dG9ucyk7XG4gICAgICAgIFxuICAgICAgICAvLyBUYXNrIExpc3RcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcblxuICAgICAgICAvLyBMZWdlbmRcbiAgICAgICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2xlZ2VuZCcpO1xuICAgICAgICBjb25zdCBsZWdlbmROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgbGVnZW5kTmFtZS50ZXh0Q29udGVudCA9ICdUYXNrIG5hbWUnO1xuICAgICAgICBjb25zdCBsZWdlbmRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGxlZ2VuZFByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgY29uc3QgbGVnZW5kQ29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgbGVnZW5kQ29tcGxldGVkLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XG4gICAgICAgIGNvbnN0IGxlZ2VuZER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBsZWdlbmREdWVEYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlJztcbiAgICAgICAgbGVnZW5kLmFwcGVuZChsZWdlbmROYW1lLCBsZWdlbmRQcmlvcml0eSwgbGVnZW5kQ29tcGxldGVkLCBsZWdlbmREdWVEYXRlKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKGxlZ2VuZCk7XG5cbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHByb2plY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWhpZGRlbicpID09ICcxJykge1xuICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kKHRhc2tMaXN0KTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1oaWRkZW4nLCAnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5yZW1vdmVDaGlsZCh0YXNrTGlzdCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGlkZGVuJywgJzEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG5ld1Rhc2tGb3JtKHRpdGxlLnRleHRDb250ZW50LCBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGRlbGV0ZVByb2plY3RDb25maXJtYXRpb24odGl0bGUudGV4dENvbnRlbnQsIHByb2plY3RzLmluZGV4T2YocHJvamVjdCkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kKGhlYWRlciwgdGFza0xpc3QpO1xuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmQocHJvamVjdCk7XG4gICAgfVxuXG4gICAgcHViU3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJywgKG5hbWUpID0+IGFkZFByb2plY3QobmFtZSkpO1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RSZW1vdmVkJywgKGluZGV4KSA9PiB7XG4gICAgICAgIHByb2plY3RzW2luZGV4XS5yZW1vdmUoKTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9KTtcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCd0YXNrQWRkZWQnLCAodGFza0luZm8pID0+IHtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBwcm9qZWN0c1t0YXNrSW5mby5wcm9qZWN0SW5kZXhdLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKG5ld1Rhc2sodGFza0luZm8pKTtcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQmxhbmtQcm9qZWN0KTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVN0dWZmOyIsImltcG9ydCBwdWJTdWIgZnJvbSAnLi9wdWJTdWIuanMnO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgICB9XG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG59XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cbiAgICB0b2dnbGVDb21wbGV0ZWRTdGF0dXMoKSB7XG4gICAgICAgIGlmKHRoaXMuY29tcGxldGVkID09PSB0cnVlKSB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBlbHNlIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICB9XG59XG5cbmNvbnN0IGxpc3RMb2dpYyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0QWRkZWQnLCAobmFtZSkgPT4ge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH0pO1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RSZW1vdmVkJywgKGluZGV4KSA9PiB7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsaXN0TG9naWM7IiwiY29uc3QgcHViU3ViID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBldmVudHMgPSB7fTtcbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBmKSB7XG4gICAgICAgIGlmICghZXZlbnRzW2V2ZW50TmFtZV0pIGV2ZW50c1tldmVudE5hbWVdID0gW2ZdO1xuICAgICAgICBlbHNlIGlmICghZXZlbnRzW2V2ZW50TmFtZV0uaW5jbHVkZXMoZikpIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZikge1xuICAgICAgICBpZihldmVudHNbZXZlbnROYW1lXS5pbmNsdWRlcyhmKSkgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGV2ZW50c1tldmVudE5hbWVdLmluZGV4T2YoZiksMSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBmb3IobGV0IGYgb2YgZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgICAgICBmKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7c3Vic2NyaWJlLCB1bnN1YnNjcmliZSwgcHVibGlzaH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwdWJTdWI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGRvbVN0dWZmIGZyb20gJy4vZG9tU3R1ZmYuanMnO1xuaW1wb3J0IHB1YlN1YiBmcm9tICcuL3B1YlN1Yi5qcyc7XG5pbXBvcnQgbGlzdExvZ2ljIGZyb20gJy4vbGlzdExvZ2ljLmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=