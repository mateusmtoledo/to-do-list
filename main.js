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
    
        // Example project
        const project0 = document.createElement('li');
        project0.classList.add('project');
        const p0header = document.createElement('div');
        p0header.classList.add('header');
        const p0title = document.createElement('h2');
        p0title.textContent = 'Project 0';
        const p0buttons = document.createElement('div');
        p0buttons.classList.add('buttons');
        const p0add = document.createElement('button');
        p0add.textContent = 'New task';
        p0add.setAttribute('type', 'button');
        const p0del = document.createElement('button');
        p0del.textContent = 'Delete';
        p0del.setAttribute('type', 'button');
        p0buttons.append(p0add, p0del);
        p0header.append(p0title, p0buttons);
        project0.append(p0header);
        ul.append(project0);
    
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
    
        // Task 0
        const task0 = document.createElement('li');
        task0.classList.add('task');
        const task0title = document.createElement('h3');
        task0title.textContent = 'Task 0';
    
        const task0priority = document.createElement('p');
        task0priority.textContent = 'High';
        const task0completed = document.createElement('p');
        task0completed.textContent = 'Y';
        const task0due = document.createElement('p');
        task0due.textContent = 'dd/mm/yy';
    
        task0.append(task0title, task0priority, task0completed, task0due);
    
        // Task 1
        const task1 = document.createElement('li');
        task1.classList.add('task');
        const task1title = document.createElement('h3');
        task1title.textContent = 'Task 1';
    
        const task1priority = document.createElement('p');
        task1priority.textContent = 'Low';
        const task1completed = document.createElement('p');
        task1completed.textContent = 'N';
        const task1due = document.createElement('p');
        task1due.textContent = 'dd/mm/yy';
    
        task1.append(task1title, task1priority, task1completed, task1due);
    
        taskList.append(legend, task0, task1);
        project0.append(taskList);
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBYztBQUM5QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxZQUFZOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFjO0FBQzFCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLFlBQVk7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFlBQVksMERBQWM7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQWdCO0FBQ3BCLElBQUksNERBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw0REFBZ0I7QUFDcEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDdFdVOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw0REFBZ0I7QUFDcEI7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRCxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7OztBQ3JDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpRUFBZSxNQUFNOzs7Ozs7VUNuQnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZ0I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpc3RMb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIC0tZGFya2JsdWU6ICMxNjRlNjM7XFxuICAgIC0tYmx1ZTogIzA2YjZkNDtcXG4gICAgLS1saWdodGdyYXk6ICNmNmY2ZjY7XFxuICAgIC0tZ3JheTogI2Q0ZDRkNDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JheSk7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5oMiwgaDMge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4udGFzayA+ICoge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5wcm9qZWN0cyAuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA0NHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaGVhZGVyIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi50YXNrLWxpc3QgPiAqIHtcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCgzLCA4MHB4KTtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWxpc3QgPiBsaSA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgICBtYXJnaW46IDAgMTJweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIHRvcDogMXB4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAxNnB4O1xcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5oZWFkZXIgaW5wdXQge1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xcbn1cXG5cXG4uaGVhZGVyIGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5maWxsZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTNlM2U4YTtcXG59XFxuXFxuLmNvbmZpcm1hdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA2NHB4IDMycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5jb25maXJtYXRpb24gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbi5uZXctdGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgNWZyIDFmcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5uZXctdGFzay1jb250YWluZXIgPiBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5uZXctdGFzay1jb250YWluZXIgPiBoNSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbiNuYW1lLWZpZWxkLFxcbi5uZXctdGFzay1jb250YWluZXIgPiBoNSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbiNkZXNjcmlwdGlvbi1maWVsZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbiNkZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5ldy10YXNrLWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw0RUFBNEU7SUFDNUUsT0FBTztBQUNYOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsU0FBUztJQUNULHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2Ysa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgLS1kYXJrYmx1ZTogIzE2NGU2MztcXG4gICAgLS1ibHVlOiAjMDZiNmQ0O1xcbiAgICAtLWxpZ2h0Z3JheTogI2Y2ZjZmNjtcXG4gICAgLS1ncmF5OiAjZDRkNGQ0O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmF5KTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxufVxcblxcbm1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmgyLCBoMyB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi50YXNrID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaDQge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnByb2plY3RzIC5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oZWFkZXIgLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnRhc2stbGlzdCA+ICoge1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDMsIDgwcHgpO1xcbiAgICBnYXA6IDMycHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stbGlzdCA+IGxpID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIG1hcmdpbjogMCAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgdG9wOiAxcHg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBtYXJnaW46IDE2cHg7XFxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmhlYWRlciBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JheSk7XFxufVxcblxcbi5oZWFkZXIgaDIge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmZpbGxlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlM2UzZThhO1xcbn1cXG5cXG4uY29uZmlybWF0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDY0cHggMzJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLmNvbmZpcm1hdGlvbiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLm5ldy10YXNrLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciA1ZnIgMWZyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLm5ldy10YXNrLWNvbnRhaW5lciA+IHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLm5ldy10YXNrLWNvbnRhaW5lciA+IGg1IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI25hbWUtZmllbGQsXFxuLm5ldy10YXNrLWNvbnRhaW5lciA+IGg1IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLWZpZWxkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmV3LXRhc2stY29udGFpbmVyID4gZGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwdWJTdWIgZnJvbSAnLi9wdWJTdWIuanMnO1xuXG5jb25zdCBwYWdlID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaDEudGV4dENvbnRlbnQgPSAnVG8gZG8gTGlzdCc7XG4gICAgXG4gICAgICAgIGhlYWRlci5hcHBlbmQoaDEpO1xuICAgIFxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH0pKCk7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgICAgICAgbWFpbi5hcHBlbmQoY29udGVudCk7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgICBcbiAgICAgICAgLy8gRXhhbXBsZSBwcm9qZWN0XG4gICAgICAgIGNvbnN0IHByb2plY3QwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcHJvamVjdDAuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBjb25zdCBwMGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwMGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgY29uc3QgcDB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHAwdGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCAwJztcbiAgICAgICAgY29uc3QgcDBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHAwYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XG4gICAgICAgIGNvbnN0IHAwYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHAwYWRkLnRleHRDb250ZW50ID0gJ05ldyB0YXNrJztcbiAgICAgICAgcDBhZGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBwMGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwMGRlbC50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICBwMGRlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHAwYnV0dG9ucy5hcHBlbmQocDBhZGQsIHAwZGVsKTtcbiAgICAgICAgcDBoZWFkZXIuYXBwZW5kKHAwdGl0bGUsIHAwYnV0dG9ucyk7XG4gICAgICAgIHByb2plY3QwLmFwcGVuZChwMGhlYWRlcik7XG4gICAgICAgIHVsLmFwcGVuZChwcm9qZWN0MCk7XG4gICAgXG4gICAgICAgIC8vIFRhc2sgTGlzdFxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuICAgIFxuICAgICAgICAvLyBMZWdlbmRcbiAgICAgICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2xlZ2VuZCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbGVnZW5kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGxlZ2VuZE5hbWUudGV4dENvbnRlbnQgPSAnVGFzayBuYW1lJztcbiAgICAgICAgY29uc3QgbGVnZW5kUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBsZWdlbmRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgICAgIGNvbnN0IGxlZ2VuZENvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGxlZ2VuZENvbXBsZXRlZC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xuICAgICAgICBjb25zdCBsZWdlbmREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgbGVnZW5kRHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZSc7XG4gICAgICAgIGxlZ2VuZC5hcHBlbmQobGVnZW5kTmFtZSwgbGVnZW5kUHJpb3JpdHksIGxlZ2VuZENvbXBsZXRlZCwgbGVnZW5kRHVlRGF0ZSk7XG4gICAgXG4gICAgICAgIC8vIFRhc2sgMFxuICAgICAgICBjb25zdCB0YXNrMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRhc2swLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgY29uc3QgdGFzazB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRhc2swdGl0bGUudGV4dENvbnRlbnQgPSAnVGFzayAwJztcbiAgICBcbiAgICAgICAgY29uc3QgdGFzazBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFzazBwcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgY29uc3QgdGFzazBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2swY29tcGxldGVkLnRleHRDb250ZW50ID0gJ1knO1xuICAgICAgICBjb25zdCB0YXNrMGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFzazBkdWUudGV4dENvbnRlbnQgPSAnZGQvbW0veXknO1xuICAgIFxuICAgICAgICB0YXNrMC5hcHBlbmQodGFzazB0aXRsZSwgdGFzazBwcmlvcml0eSwgdGFzazBjb21wbGV0ZWQsIHRhc2swZHVlKTtcbiAgICBcbiAgICAgICAgLy8gVGFzayAxXG4gICAgICAgIGNvbnN0IHRhc2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdGFzazEuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICBjb25zdCB0YXNrMXRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgdGFzazF0aXRsZS50ZXh0Q29udGVudCA9ICdUYXNrIDEnO1xuICAgIFxuICAgICAgICBjb25zdCB0YXNrMXByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrMXByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgIGNvbnN0IHRhc2sxY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrMWNvbXBsZXRlZC50ZXh0Q29udGVudCA9ICdOJztcbiAgICAgICAgY29uc3QgdGFzazFkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2sxZHVlLnRleHRDb250ZW50ID0gJ2RkL21tL3l5JztcbiAgICBcbiAgICAgICAgdGFzazEuYXBwZW5kKHRhc2sxdGl0bGUsIHRhc2sxcHJpb3JpdHksIHRhc2sxY29tcGxldGVkLCB0YXNrMWR1ZSk7XG4gICAgXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZChsZWdlbmQsIHRhc2swLCB0YXNrMSk7XG4gICAgICAgIHByb2plY3QwLmFwcGVuZCh0YXNrTGlzdCk7XG4gICAgXG4gICAgICAgIC8vIE5ldyBQcm9qZWN0IEJ1dHRvblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnMScpO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQobmV3UHJvamVjdEJ1dHRvbik7XG4gICAgXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKHVsLCBuZXdQcm9qZWN0QnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIHttYWluLCBuZXdQcm9qZWN0QnV0dG9ufTtcbiAgICB9KSgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlciwgY29udGVudC5tYWluKTtcbiAgICByZXR1cm4ge25ld1Byb2plY3RCdXR0b246IGNvbnRlbnQubmV3UHJvamVjdEJ1dHRvbn07XG59KSgpO1xuXG5jb25zdCBkb21TdHVmZiA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1idXR0b24nKTtcbiAgICBmdW5jdGlvbiB0b2dnbGVOZXdQcm9qZWN0QnV0dG9uKCkge1xuICAgICAgICBpZihuZXdQcm9qZWN0QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnKSA9PT0gJzEnKSB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQmxhbmtQcm9qZWN0KTtcbiAgICAgICAgICAgIG5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsICcwJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQmxhbmtQcm9qZWN0KTtcbiAgICAgICAgICAgIG5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsICcxJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkQmxhbmtQcm9qZWN0KCkge1xuICAgICAgICB0b2dnbGVOZXdQcm9qZWN0QnV0dG9uKCk7XG4gICAgICAgIChmdW5jdGlvbiBuZXdCbGFua1Byb2plY3QoKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IHByb2plY3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuICAgICAgICAgICAgY29uc3QgY29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uZmlybS50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgICAgICAgICAgIGNvbmZpcm0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b25zLmFwcGVuZChjb25maXJtLCBjYW5jZWwpO1xuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZCh0aXRsZSwgYnV0dG9ucyk7XG4gICAgICAgICAgICBwcm9qZWN0LmFwcGVuZChoZWFkZXIpO1xuICAgICAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kKHByb2plY3QpO1xuICAgICAgICAgICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZU5ld1Byb2plY3RCdXR0b24oKTtcbiAgICAgICAgICAgICAgICBpZighdGl0bGUudmFsdWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICBwdWJTdWIucHVibGlzaCgncHJvamVjdEFkZGVkJywgdGl0bGUudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVOZXdQcm9qZWN0QnV0dG9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbmV3VGFza0Zvcm0ocHJvamVjdE5hbWUsIHByb2plY3RJbmRleCkge1xuICAgICAgICBjb25zdCBmaWxsZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmlsbGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2ZpbGxlcicpO1xuICAgICAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIGg1LnRleHRDb250ZW50ID0gYEFkZCBuZXcgdGFzayB0byBcIiR7cHJvamVjdE5hbWV9XCJgO1xuXG4gICAgICAgIC8vIE5hbWVcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZS5pZCA9ICduYW1lLWZpZWxkJztcbiAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUtaW5wdXQnKTtcbiAgICAgICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgbmFtZSc7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBuYW1lSW5wdXQuaWQgPSAnbmFtZS1pbnB1dCc7XG4gICAgICAgIG5hbWUuYXBwZW5kKG5hbWVMYWJlbCxuYW1lSW5wdXQpO1xuXG4gICAgICAgIC8vIFByaW9yaXR5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eS1pbnB1dCcpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eUlucHV0LmlkID0gJ3ByaW9yaXR5LWlucHV0JztcbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xuICAgICAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ01lZGl1bScpO1xuICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0xvdycpO1xuICAgICAgICBwcmlvcml0eUlucHV0LmFwcGVuZChoaWdoUHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBsb3dQcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eUlucHV0KTtcblxuICAgICAgICAvLyBEdWUgZGF0ZVxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZS1pbnB1dCcpO1xuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGUnO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZUlucHV0LmlkID0gJ2RhdGUtaW5wdXQnO1xuICAgICAgICBkYXRlLmFwcGVuZChkYXRlTGFiZWwsIGRhdGVJbnB1dCk7XG5cbiAgICAgICAgLy8gRGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uLWZpZWxkJztcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uLWlucHV0JztcbiAgICAgICAgZGVzY3JpcHRpb24uYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgICAgIC8vIEJ1dHRvbnNcbiAgICAgICAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG4gICAgICAgIGJ1dHRvbnNEaXYuYXBwZW5kKGNhbmNlbEJ1dHRvbiwgY29uZmlybUJ1dHRvbik7XG5cbiAgICAgICAgY29udGFpbmVyRGl2LmFwcGVuZChoNSwgbmFtZSwgcHJpb3JpdHksIGRhdGUsIGRlc2NyaXB0aW9uLCBidXR0b25zRGl2KTtcbiAgICAgICAgZmlsbGVyRGl2LmFwcGVuZChjb250YWluZXJEaXYpO1xuXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZpbGxlckRpdi5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICAgICAgICAgIHByb2plY3RJbmRleDogcHJvamVjdEluZGV4LFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXRlOiBkYXRlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uSW5wdXQudmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwdWJTdWIucHVibGlzaCgndGFza0FkZGVkJywgdGFzayk7XG4gICAgICAgICAgICBmaWxsZXJEaXYucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmlsbGVyRGl2O1xuICAgIH1cbiAgICBmdW5jdGlvbiBuZXdUYXNrKHRhc2tJbmZvKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tJbmZvLm5hbWU7XG4gICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2tJbmZvLnByaW9yaXR5O1xuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbXBsZXRlZC50ZXh0Q29udGVudCA9ICdOJztcbiAgICAgICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkdWUudGV4dENvbnRlbnQgPSB0YXNrSW5mby5kYXRlO1xuXG4gICAgICAgIHRhc2suYXBwZW5kKHRpdGxlLCBwcmlvcml0eSwgY29tcGxldGVkLCBkdWUpO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdENvbmZpcm1hdGlvbihwcm9qZWN0TmFtZSwgcHJvamVjdEluZGV4KSB7XG4gICAgICAgIGNvbnN0IGZpbGxlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaWxsZXJEaXYuY2xhc3NMaXN0LmFkZCgnZmlsbGVyJyk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25maXJtYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnY29uZmlybWF0aW9uJyk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbk1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uZmlybWF0aW9uTXNnLnRleHRDb250ZW50ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIke3Byb2plY3ROYW1lfVwiP2A7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgIGJ1dHRvbnNEaXYuYXBwZW5kKGNhbmNlbEJ1dHRvbiwgY29uZmlybUJ1dHRvbik7XG4gICAgICAgIGNvbmZpcm1hdGlvbkRpdi5hcHBlbmQoY29uZmlybWF0aW9uTXNnLCBidXR0b25zRGl2KTtcbiAgICAgICAgZmlsbGVyRGl2LmFwcGVuZChjb25maXJtYXRpb25EaXYpO1xuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBmaWxsZXJEaXYucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RSZW1vdmVkJywgcHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgIGZpbGxlckRpdi5yZW1vdmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZpbGxlckRpdjtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1oaWRkZW4nLCAnMCcpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3VGFzay50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG4gICAgICAgIG5ld1Rhc2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgIGRlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kKG5ld1Rhc2ssIGRlbCk7XG4gICAgICAgIGhlYWRlci5hcHBlbmQodGl0bGUsIGJ1dHRvbnMpO1xuICAgICAgICBcbiAgICAgICAgLy8gVGFzayBMaXN0XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG5cbiAgICAgICAgLy8gTGVnZW5kXG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdsZWdlbmQnKTtcbiAgICAgICAgY29uc3QgbGVnZW5kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGxlZ2VuZE5hbWUudGV4dENvbnRlbnQgPSAnVGFzayBuYW1lJztcbiAgICAgICAgY29uc3QgbGVnZW5kUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBsZWdlbmRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgICAgIGNvbnN0IGxlZ2VuZENvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGxlZ2VuZENvbXBsZXRlZC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xuICAgICAgICBjb25zdCBsZWdlbmREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgbGVnZW5kRHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZSc7XG4gICAgICAgIGxlZ2VuZC5hcHBlbmQobGVnZW5kTmFtZSwgbGVnZW5kUHJpb3JpdHksIGxlZ2VuZENvbXBsZXRlZCwgbGVnZW5kRHVlRGF0ZSk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZChsZWdlbmQpO1xuXG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihwcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1oaWRkZW4nKSA9PSAnMScpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFwcGVuZCh0YXNrTGlzdCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGlkZGVuJywgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2plY3QucmVtb3ZlQ2hpbGQodGFza0xpc3QpO1xuICAgICAgICAgICAgICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLWhpZGRlbicsICcxJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChuZXdUYXNrRm9ybSh0aXRsZS50ZXh0Q29udGVudCwgcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChkZWxldGVQcm9qZWN0Q29uZmlybWF0aW9uKHRpdGxlLnRleHRDb250ZW50LCBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZChoZWFkZXIsIHRhc2tMaXN0KTtcbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kKHByb2plY3QpO1xuICAgIH1cblxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RBZGRlZCcsIChuYW1lKSA9PiBhZGRQcm9qZWN0KG5hbWUpKTtcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0UmVtb3ZlZCcsIChpbmRleCkgPT4ge1xuICAgICAgICBwcm9qZWN0c1tpbmRleF0ucmVtb3ZlKCk7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG4gICAgcHViU3ViLnN1YnNjcmliZSgndGFza0FkZGVkJywgKHRhc2tJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gcHJvamVjdHNbdGFza0luZm8ucHJvamVjdEluZGV4XS5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZChuZXdUYXNrKHRhc2tJbmZvKSk7XG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEJsYW5rUHJvamVjdCk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21TdHVmZjsiLCJpbXBvcnQgcHViU3ViIGZyb20gJy4vcHViU3ViLmpzJztcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgfVxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfVxufVxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG4gICAgdG9nZ2xlQ29tcGxldGVkU3RhdHVzKCkge1xuICAgICAgICBpZih0aGlzLmNvbXBsZXRlZCA9PT0gdHJ1ZSkgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgZWxzZSB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgfVxufVxuXG5jb25zdCBsaXN0TG9naWMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG4gICAgcHViU3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJywgKG5hbWUpID0+IHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICB9KTtcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0UmVtb3ZlZCcsIChpbmRleCkgPT4ge1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0pO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbGlzdExvZ2ljOyIsImNvbnN0IHB1YlN1YiA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZXZlbnRzID0ge307XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgZikge1xuICAgICAgICBpZiAoIWV2ZW50c1tldmVudE5hbWVdKSBldmVudHNbZXZlbnROYW1lXSA9IFtmXTtcbiAgICAgICAgZWxzZSBpZiAoIWV2ZW50c1tldmVudE5hbWVdLmluY2x1ZGVzKGYpKSBldmVudHNbZXZlbnROYW1lXS5wdXNoKGYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1bnN1YnNjcmliZShldmVudE5hbWUsIGYpIHtcbiAgICAgICAgaWYoZXZlbnRzW2V2ZW50TmFtZV0uaW5jbHVkZXMoZikpIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGYpLDEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICBpZihldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgZm9yKGxldCBmIG9mIGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgZihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge3N1YnNjcmliZSwgdW5zdWJzY3JpYmUsIHB1Ymxpc2h9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHViU3ViOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkb21TdHVmZiBmcm9tICcuL2RvbVN0dWZmLmpzJztcbmltcG9ydCBwdWJTdWIgZnJvbSAnLi9wdWJTdWIuanMnO1xuaW1wb3J0IGxpc3RMb2dpYyBmcm9tICcuL2xpc3RMb2dpYy5qcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9