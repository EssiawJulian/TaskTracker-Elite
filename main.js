/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --sidebar-padding: 20px;
  --sidebar-width: 250px;
  --sidebar-background-color: #fcf6f5;
  --sidebar-hover-color: #dc3e227a;
  --sidebar-box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
  --button-color: #ff5722;
  --sidebar-text-color: #333;
  --delete-button-color: #ed0800;
  --delete-button-hover-color: darkred;
  --edit-button-color: #33b249;
  --edit-button-hover-color: darkgreen;
  --second-column-color: #ff5722;
}

html {
  font-size: 16px;
}

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
}

.container {
  display: flex;
  width: 100%;
}

.sidebar {
  width: var(--sidebar-width);
  background-color: var(--sidebar-background-color);
  padding: var(--sidebar-padding);
  box-shadow: var(--sidebar-box-shadow);
}

.add-project {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: var(--button-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-project:hover {
  background-color: #ff7043;
  transform: scale(1.05);
}

ul {
  list-style-type: none;
  padding: 0;
}

.menu > li,
.project-list > li {
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  max-height: 35px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: var(--sidebar-text-color);
}

.menu > li:hover,
.project-list > li:hover {
  background-color: var(--sidebar-hover-color);
}

.side-item-name-icon {
  display: flex;
  align-items: center;
  width: 100%;
}

.side-item-name-icon > img {
  max-height: 25px;
  margin-right: 5px;
}

.side-item-name-icon > p {
  flex: 1;
}

.badge {
  background-color: var(--button-color);
  color: white;
  padding: 3px 7px;
  border-radius: 12px;
}

.main-content {
  width: 50%;
  margin: 0 auto;
  overflow-y: scroll;
}

.main-content::-webkit-scrollbar {
  display: none;
}

.main-content h2 {
  margin: 0;
  padding: 20px;
  text-align: center;
}

#todo-list {
  width: 100%;
  text-align: left;
}

.main-content th,
.main-content td {
  border-top: 1px solid rgb(193, 190, 190);
}

table {
  border-collapse: collapse;
}

thead > tr {
  color: #686767;
  font-size: 1.2rem;
}

thead > tr > td:not(:last-child),
tbody > tr > td:not(:last-child) {
  border-right: 1px solid rgb(193, 190, 190);
}

thead > tr > td:not(:first-child) {
  padding: 10px;
}

tbody > tr > td {
  padding: 10px;
  font-size: 1.1rem;
}

.task-title > th {
  font-size: 1.3rem;
  padding: 20px 0;
}

.main-content tr:nth-child(even) {
  background-color: var(--sidebar-background-color);
}

tbody td:nth-child(2) {
  color: var(--second-column-color);
}

.edit-delete-button-container {
  display: flex;

}

.edit-delete-button-container > button {
  width: 80px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete {
  background-color: var(--delete-button-color);
  transition: background-color 0.3s ease;
  color: white;
}

.delete:hover {
  background-color: var(--delete-button-hover-color);
}

.edit {
  background-color: var(--edit-button-color);
  transition: background-color 0.3s ease;
  color: white;
  margin-right: 5px;
}

.edit:hover {
  background-color: var(--edit-button-hover-color);
}

/* Dialog Style*/
dialog {
  background-color: var(--sidebar-background-color);
  border-radius: 10px;
  padding: 0 1em;
  padding-bottom: 1em;
  color: var(--sidebar-text-color);
  font-size: 1.5rem;
  position: relative;
  width: 400px;
  margin: auto;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.cancel-btn, .confirm-submission {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  width: 100%;
}

.cancel-btn {
  background-color: var(--delete-button-color);
}

.cancel-btn:hover {
  background-color: var(--delete-button-hover-color);
}

.confirm-submission {
  background-color: var(--edit-button-color);
}

.confirm-submission:hover {
  background-color: var(--edit-button-hover-color);
}

.modal h3 {
  text-align: center;
}

.close-btn {
  position: relative;
  margin-left: 100%;
  cursor: pointer;
}

/* Add task button*/

.add-item-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background-color: var(--button-color);
  color: white;
  font-size: 36px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.add-item-button:hover {
  background-color: rgb(196, 82, 6);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.add-item-button:focus {
  outline: none;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,mCAAmC;EACnC,gCAAgC;EAChC,mDAAmD;EACnD,uBAAuB;EACvB,0BAA0B;EAC1B,8BAA8B;EAC9B,oCAAoC;EACpC,4BAA4B;EAC5B,oCAAoC;EACpC,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,SAAS;EACT,UAAU;EACV,aAAa;EACb,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,iDAAiD;EACjD,+BAA+B;EAC/B,qCAAqC;AACvC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,UAAU;AACZ;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,iCAAiC;EACjC,gCAAgC;AAClC;;AAEA;;EAEE,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,qCAAqC;EACrC,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,SAAS;EACT,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;;EAEE,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;;EAEE,0CAA0C;AAC5C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;;AAEf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,4CAA4C;EAC5C,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,0CAA0C;EAC1C,sCAAsC;EACtC,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gDAAgD;AAClD;;AAEA,gBAAgB;AAChB;EACE,iDAAiD;EACjD,mBAAmB;EACnB,cAAc;EACd,mBAAmB;EACnB,gCAAgC;EAChC,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,gDAAgD;AAClD;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA,mBAAmB;;AAEnB;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,qCAAqC;EACrC,YAAY;EACZ,eAAe;EACf,eAAe;EACf,wCAAwC;EACxC,4DAA4D;AAC9D;;AAEA;EACE,iCAAiC;EACjC,yCAAyC;AAC3C;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\r\n  --sidebar-padding: 20px;\r\n  --sidebar-width: 250px;\r\n  --sidebar-background-color: #fcf6f5;\r\n  --sidebar-hover-color: #dc3e227a;\r\n  --sidebar-box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);\r\n  --button-color: #ff5722;\r\n  --sidebar-text-color: #333;\r\n  --delete-button-color: #ed0800;\r\n  --delete-button-hover-color: darkred;\r\n  --edit-button-color: #33b249;\r\n  --edit-button-hover-color: darkgreen;\r\n  --second-column-color: #ff5722;\r\n}\r\n\r\nhtml {\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100vh;\r\n  display: flex;\r\n  font-size: clamp(0.8rem, 1.5vw, 1rem);\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.sidebar {\r\n  width: var(--sidebar-width);\r\n  background-color: var(--sidebar-background-color);\r\n  padding: var(--sidebar-padding);\r\n  box-shadow: var(--sidebar-box-shadow);\r\n}\r\n\r\n.add-project {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 20px;\r\n  background-color: var(--button-color);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.add-project:hover {\r\n  background-color: #ff7043;\r\n  transform: scale(1.05);\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n.menu > li,\r\n.project-list > li {\r\n  display: flex;\r\n  border-radius: 10px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0px 10px;\r\n  max-height: 35px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s;\r\n  color: var(--sidebar-text-color);\r\n}\r\n\r\n.menu > li:hover,\r\n.project-list > li:hover {\r\n  background-color: var(--sidebar-hover-color);\r\n}\r\n\r\n.side-item-name-icon {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.side-item-name-icon > img {\r\n  max-height: 25px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.side-item-name-icon > p {\r\n  flex: 1;\r\n}\r\n\r\n.badge {\r\n  background-color: var(--button-color);\r\n  color: white;\r\n  padding: 3px 7px;\r\n  border-radius: 12px;\r\n}\r\n\r\n.main-content {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.main-content::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.main-content h2 {\r\n  margin: 0;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n#todo-list {\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n.main-content th,\r\n.main-content td {\r\n  border-top: 1px solid rgb(193, 190, 190);\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n}\r\n\r\nthead > tr {\r\n  color: #686767;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nthead > tr > td:not(:last-child),\r\ntbody > tr > td:not(:last-child) {\r\n  border-right: 1px solid rgb(193, 190, 190);\r\n}\r\n\r\nthead > tr > td:not(:first-child) {\r\n  padding: 10px;\r\n}\r\n\r\ntbody > tr > td {\r\n  padding: 10px;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.task-title > th {\r\n  font-size: 1.3rem;\r\n  padding: 20px 0;\r\n}\r\n\r\n.main-content tr:nth-child(even) {\r\n  background-color: var(--sidebar-background-color);\r\n}\r\n\r\ntbody td:nth-child(2) {\r\n  color: var(--second-column-color);\r\n}\r\n\r\n.edit-delete-button-container {\r\n  display: flex;\r\n\r\n}\r\n\r\n.edit-delete-button-container > button {\r\n  width: 80px;\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.delete {\r\n  background-color: var(--delete-button-color);\r\n  transition: background-color 0.3s ease;\r\n  color: white;\r\n}\r\n\r\n.delete:hover {\r\n  background-color: var(--delete-button-hover-color);\r\n}\r\n\r\n.edit {\r\n  background-color: var(--edit-button-color);\r\n  transition: background-color 0.3s ease;\r\n  color: white;\r\n  margin-right: 5px;\r\n}\r\n\r\n.edit:hover {\r\n  background-color: var(--edit-button-hover-color);\r\n}\r\n\r\n/* Dialog Style*/\r\ndialog {\r\n  background-color: var(--sidebar-background-color);\r\n  border-radius: 10px;\r\n  padding: 0 1em;\r\n  padding-bottom: 1em;\r\n  color: var(--sidebar-text-color);\r\n  font-size: 1.5rem;\r\n  position: relative;\r\n  width: 400px;\r\n  margin: auto;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  width: 100%;\r\n  padding: 8px;\r\n  margin-bottom: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n.cancel-btn, .confirm-submission {\r\n  margin-top: 10px;\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  color: white;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.cancel-btn {\r\n  background-color: var(--delete-button-color);\r\n}\r\n\r\n.cancel-btn:hover {\r\n  background-color: var(--delete-button-hover-color);\r\n}\r\n\r\n.confirm-submission {\r\n  background-color: var(--edit-button-color);\r\n}\r\n\r\n.confirm-submission:hover {\r\n  background-color: var(--edit-button-hover-color);\r\n}\r\n\r\n.modal h3 {\r\n  text-align: center;\r\n}\r\n\r\n.close-btn {\r\n  position: relative;\r\n  margin-left: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Add task button*/\r\n\r\n.add-item-button {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 50%;\r\n  border: none;\r\n  background-color: var(--button-color);\r\n  color: white;\r\n  font-size: 36px;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n  transition: background-color 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n\r\n.add-item-button:hover {\r\n  background-color: rgb(196, 82, 6);\r\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.add-item-button:focus {\r\n  outline: none;\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeProjectTitle: () => (/* binding */ changeProjectTitle),
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   projectDOM: () => (/* binding */ projectDOM),
/* harmony export */   showAndCloseModal: () => (/* binding */ showAndCloseModal),
/* harmony export */   taskDom: () => (/* binding */ taskDom)
/* harmony export */ });
/* harmony import */ var _img_pound_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pound.svg */ "./src/img/pound.svg");


const taskDom = (title, task, date, priority) => {
  // Select the todo-list-body-container
  const todoListBodyContainer = document.querySelector(
    ".todo-list-body"
  );

  // Create a new task header
  const taskHeader = document.createElement("tr");
  taskHeader.classList.add("task-title");
  const headerName = document.createElement("th");
  headerName.textContent = title;
  headerName.colSpan = 4;
  taskHeader.appendChild(headerName);

  // Append the task header to the todo-list-body-container
  todoListBodyContainer.appendChild(taskHeader);

  // Create the task description
  const taskDescription = document.createElement("tr");
  const taskName = document.createElement("td");
  const taskDate = document.createElement("td");
  const taskPriority = document.createElement("td");
  const editAndDeleteButton = document.createElement("td");
  editAndDeleteButton.classList.add("edit-delete-button-container");
  // Add text content to the elements
  taskName.textContent = task;
  taskDate.textContent = date;
  taskPriority.textContent = priority;
  // Create the edit and delete buttons and append to editAndDeleteButton
  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  editButton.textContent = "Edit";
  deleteButton.textContent = "Delete";
  editAndDeleteButton.appendChild(editButton);
  editAndDeleteButton.appendChild(deleteButton);
  // Append the elements to the taskDescription
  taskDescription.appendChild(taskName);
  taskDescription.appendChild(taskDate);
  taskDescription.appendChild(taskPriority);
  taskDescription.appendChild(editAndDeleteButton);

  // Append the taskDescription to the todo-list-body-container
  todoListBodyContainer.appendChild(taskDescription);
};

const projectDOM = (projectName, badgeNum) => {
  // Select the project-list container
  const projectListContainer = document.querySelector(".project-list");

  // Create the project list
  const projectList = document.createElement("li");

  // Contents of the list
  const projectNameAndImageContainer = document.createElement("div");
  projectNameAndImageContainer.classList.add("side-item-name-icon");
  // Append contents of the newly created div
  const projectDefaultImage = document.createElement("img");
  projectDefaultImage.src = _img_pound_svg__WEBPACK_IMPORTED_MODULE_0__;
  projectDefaultImage.alt = "Project Image";
  projectNameAndImageContainer.appendChild(projectDefaultImage);
  const projName = document.createElement("p");
  projName.textContent = projectName;
  projectNameAndImageContainer.appendChild(projName);
  // Make content adjacent to div
  const badgeNumber = document.createElement("span");
  badgeNumber.classList.add("badge");
  badgeNumber.textContent = badgeNum;

  // Append the contents to the project list
  projectList.appendChild(projectNameAndImageContainer);
  projectList.appendChild(badgeNumber);

  // Append the project list to the projectListContainer
  projectListContainer.appendChild(projectList);

};

const changeProjectTitle = (title) => {
  const projectTitle = document.querySelector(".project-title");
  projectTitle.textContent = title;
};

const showAndCloseModal = () => {
  const modal = document.querySelector(".modal");
  const addProjectButton = document.querySelector(".add-project");
  const closeButton = document.querySelector(".close-btn");

  addProjectButton.addEventListener("click", () => {
    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });
}

const closeModal = () => {
  const modal = document.querySelector(".modal");
  modal.close();
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   projectLibrary: () => (/* binding */ projectLibrary)
/* harmony export */ });
const projectLibrary = (() => {
    const projects = [];
    const addProject = (project) => {
        projects.push(project);
    };
    const getProjects = () => projects;
    return { addProject, getProjects };
    })();

const createProject = (projectName) => {
  const project = {
    projectName,
    tasks: [],
    numTask: 0,
    addTask(task) {
      this.tasks.push(task);
      this.numTask++;
    },
  };
  return project;
};




/***/ }),

/***/ "./src/img/pound.svg":
/*!***************************!*\
  !*** ./src/img/pound.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "615cad230d498ed17879.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




document.addEventListener("DOMContentLoaded", () => {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.showAndCloseModal)();
});

const addProjectButton = document.querySelector(".confirm-submission");

addProjectButton.addEventListener("click", (event) => {
  const form = document.querySelector("#project-form");

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  event.preventDefault();

  const projectName = document.querySelector("#title").value;
  const project = (0,_project__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectName);
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectDOM)(projectName, project.numTask);
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFB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S0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUN5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QnpDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7O0FDQTJFO0FBQ2pCO0FBQ3BDO0FBQ3RCO0FBQ0E7QUFDQSxFQUFFLHVEQUFpQjtBQUNuQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1REFBYTtBQUMvQixFQUFFLGdEQUFVO0FBQ1osRUFBRSxnREFBVTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tc2lkZWJhci1wYWRkaW5nOiAyMHB4O1xyXG4gIC0tc2lkZWJhci13aWR0aDogMjUwcHg7XHJcbiAgLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3I6ICNmY2Y2ZjU7XHJcbiAgLS1zaWRlYmFyLWhvdmVyLWNvbG9yOiAjZGMzZTIyN2E7XHJcbiAgLS1zaWRlYmFyLWJveC1zaGFkb3c6IDAgMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC0tYnV0dG9uLWNvbG9yOiAjZmY1NzIyO1xyXG4gIC0tc2lkZWJhci10ZXh0LWNvbG9yOiAjMzMzO1xyXG4gIC0tZGVsZXRlLWJ1dHRvbi1jb2xvcjogI2VkMDgwMDtcclxuICAtLWRlbGV0ZS1idXR0b24taG92ZXItY29sb3I6IGRhcmtyZWQ7XHJcbiAgLS1lZGl0LWJ1dHRvbi1jb2xvcjogIzMzYjI0OTtcclxuICAtLWVkaXQtYnV0dG9uLWhvdmVyLWNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgLS1zZWNvbmQtY29sdW1uLWNvbG9yOiAjZmY1NzIyO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMS41dncsIDFyZW0pO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgcGFkZGluZzogdmFyKC0tc2lkZWJhci1wYWRkaW5nKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaWRlYmFyLWJveC1zaGFkb3cpO1xyXG59XHJcblxyXG4uYWRkLXByb2plY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3MDQzO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1lbnUgPiBsaSxcclxuLnByb2plY3QtbGlzdCA+IGxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgbWF4LWhlaWdodDogMzVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG4gIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG4ubWVudSA+IGxpOmhvdmVyLFxyXG4ucHJvamVjdC1saXN0ID4gbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItY29sb3IpO1xyXG59XHJcblxyXG4uc2lkZS1pdGVtLW5hbWUtaWNvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZS1pdGVtLW5hbWUtaWNvbiA+IGltZyB7XHJcbiAgbWF4LWhlaWdodDogMjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnNpZGUtaXRlbS1uYW1lLWljb24gPiBwIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDNweCA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0b2RvLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQgdGgsXHJcbi5tYWluLWNvbnRlbnQgdGQge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTkzLCAxOTAsIDE5MCk7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50aGVhZCA+IHRyIHtcclxuICBjb2xvcjogIzY4Njc2NztcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxudGhlYWQgPiB0ciA+IHRkOm5vdCg6bGFzdC1jaGlsZCksXHJcbnRib2R5ID4gdHIgPiB0ZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTkzLCAxOTAsIDE5MCk7XHJcbn1cclxuXHJcbnRoZWFkID4gdHIgPiB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxudGJvZHkgPiB0ciA+IHRkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4udGFzay10aXRsZSA+IHRoIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3IpO1xyXG59XHJcblxyXG50Ym9keSB0ZDpudGgtY2hpbGQoMikge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sdW1uLWNvbG9yKTtcclxufVxyXG5cclxuLmVkaXQtZGVsZXRlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4uZWRpdC1kZWxldGUtYnV0dG9uLWNvbnRhaW5lciA+IGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlLWJ1dHRvbi1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGVsZXRlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWxldGUtYnV0dG9uLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuLmVkaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXQtYnV0dG9uLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5lZGl0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0LWJ1dHRvbi1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbi8qIERpYWxvZyBTdHlsZSovXHJcbmRpYWxvZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgY29sb3I6IHZhcigtLXNpZGViYXItdGV4dC1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmNhbmNlbC1idG4sIC5jb25maXJtLXN1Ym1pc3Npb24ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlLWJ1dHRvbi1jb2xvcik7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWxldGUtYnV0dG9uLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuLmNvbmZpcm0tc3VibWlzc2lvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWRpdC1idXR0b24tY29sb3IpO1xyXG59XHJcblxyXG4uY29uZmlybS1zdWJtaXNzaW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0LWJ1dHRvbi1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbi5tb2RhbCBoMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBBZGQgdGFzayBidXR0b24qL1xyXG5cclxuLmFkZC1pdGVtLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uYWRkLWl0ZW0tYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA4MiwgNik7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5hZGQtaXRlbS1idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsZ0NBQWdDO0VBQ2hDLG1EQUFtRDtFQUNuRCx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLG9DQUFvQztFQUNwQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlEQUFpRDtFQUNqRCwrQkFBK0I7RUFDL0IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0RBQWdEO0FBQ2xEOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGlEQUFpRDtFQUNqRCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1zaWRlYmFyLXBhZGRpbmc6IDIwcHg7XFxyXFxuICAtLXNpZGViYXItd2lkdGg6IDI1MHB4O1xcclxcbiAgLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3I6ICNmY2Y2ZjU7XFxyXFxuICAtLXNpZGViYXItaG92ZXItY29sb3I6ICNkYzNlMjI3YTtcXHJcXG4gIC0tc2lkZWJhci1ib3gtc2hhZG93OiAwIDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIC0tYnV0dG9uLWNvbG9yOiAjZmY1NzIyO1xcclxcbiAgLS1zaWRlYmFyLXRleHQtY29sb3I6ICMzMzM7XFxyXFxuICAtLWRlbGV0ZS1idXR0b24tY29sb3I6ICNlZDA4MDA7XFxyXFxuICAtLWRlbGV0ZS1idXR0b24taG92ZXItY29sb3I6IGRhcmtyZWQ7XFxyXFxuICAtLWVkaXQtYnV0dG9uLWNvbG9yOiAjMzNiMjQ5O1xcclxcbiAgLS1lZGl0LWJ1dHRvbi1ob3Zlci1jb2xvcjogZGFya2dyZWVuO1xcclxcbiAgLS1zZWNvbmQtY29sdW1uLWNvbG9yOiAjZmY1NzIyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMS41dncsIDFyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaWRlYmFyLWJveC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3MDQzO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBsaSxcXHJcXG4ucHJvamVjdC1saXN0ID4gbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAzNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgY29sb3I6IHZhcigtLXNpZGViYXItdGV4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gbGk6aG92ZXIsXFxyXFxuLnByb2plY3QtbGlzdCA+IGxpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1pdGVtLW5hbWUtaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1pdGVtLW5hbWUtaWNvbiA+IGltZyB7XFxyXFxuICBtYXgtaGVpZ2h0OiAyNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWl0ZW0tbmFtZS1pY29uID4gcCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFkZ2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDNweCA3cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCBoMiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB0aCxcXHJcXG4ubWFpbi1jb250ZW50IHRkIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTkzLCAxOTAsIDE5MCk7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcbnRoZWFkID4gdHIge1xcclxcbiAgY29sb3I6ICM2ODY3Njc7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxudGhlYWQgPiB0ciA+IHRkOm5vdCg6bGFzdC1jaGlsZCksXFxyXFxudGJvZHkgPiB0ciA+IHRkOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDE5MywgMTkwLCAxOTApO1xcclxcbn1cXHJcXG5cXHJcXG50aGVhZCA+IHRyID4gdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxudGJvZHkgPiB0ciA+IHRkIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGUgPiB0aCB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB0cjpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxudGJvZHkgdGQ6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sdW1uLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtZGVsZXRlLWJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtZGVsZXRlLWJ1dHRvbi1jb250YWluZXIgPiBidXR0b24ge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlbGV0ZS1idXR0b24tY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5lZGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXQtYnV0dG9uLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXQtYnV0dG9uLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRGlhbG9nIFN0eWxlKi9cXHJcXG5kaWFsb2cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0tc2lkZWJhci10ZXh0LWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idG4sIC5jb25maXJtLXN1Ym1pc3Npb24ge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWxldGUtYnV0dG9uLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jb25maXJtLXN1Ym1pc3Npb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWRpdC1idXR0b24tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybS1zdWJtaXNzaW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXQtYnV0dG9uLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGgzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0biB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tbGVmdDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQWRkIHRhc2sgYnV0dG9uKi9cXHJcXG5cXHJcXG4uYWRkLWl0ZW0tYnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMjBweDtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pdGVtLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA4MiwgNik7XFxyXFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pdGVtLWJ1dHRvbjpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGRlZmF1bHRQcm9qZWN0SW1hZ2UgZnJvbSBcIi4vaW1nL3BvdW5kLnN2Z1wiO1xyXG5cclxuY29uc3QgdGFza0RvbSA9ICh0aXRsZSwgdGFzaywgZGF0ZSwgcHJpb3JpdHkpID0+IHtcclxuICAvLyBTZWxlY3QgdGhlIHRvZG8tbGlzdC1ib2R5LWNvbnRhaW5lclxyXG4gIGNvbnN0IHRvZG9MaXN0Qm9keUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi50b2RvLWxpc3QtYm9keVwiXHJcbiAgKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgbmV3IHRhc2sgaGVhZGVyXHJcbiAgY29uc3QgdGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICB0YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xyXG4gIGNvbnN0IGhlYWRlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgaGVhZGVyTmFtZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gIGhlYWRlck5hbWUuY29sU3BhbiA9IDQ7XHJcbiAgdGFza0hlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJOYW1lKTtcclxuXHJcbiAgLy8gQXBwZW5kIHRoZSB0YXNrIGhlYWRlciB0byB0aGUgdG9kby1saXN0LWJvZHktY29udGFpbmVyXHJcbiAgdG9kb0xpc3RCb2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpO1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIHRhc2sgZGVzY3JpcHRpb25cclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gIGNvbnN0IGVkaXRBbmREZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgZWRpdEFuZERlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1kZWxldGUtYnV0dG9uLWNvbnRhaW5lclwiKTtcclxuICAvLyBBZGQgdGV4dCBjb250ZW50IHRvIHRoZSBlbGVtZW50c1xyXG4gIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzaztcclxuICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XHJcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gcHJpb3JpdHk7XHJcbiAgLy8gQ3JlYXRlIHRoZSBlZGl0IGFuZCBkZWxldGUgYnV0dG9ucyBhbmQgYXBwZW5kIHRvIGVkaXRBbmREZWxldGVCdXR0b25cclxuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XHJcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xyXG4gIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XHJcbiAgZWRpdEFuZERlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICBlZGl0QW5kRGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgLy8gQXBwZW5kIHRoZSBlbGVtZW50cyB0byB0aGUgdGFza0Rlc2NyaXB0aW9uXHJcbiAgdGFza0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICB0YXNrRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChlZGl0QW5kRGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgLy8gQXBwZW5kIHRoZSB0YXNrRGVzY3JpcHRpb24gdG8gdGhlIHRvZG8tbGlzdC1ib2R5LWNvbnRhaW5lclxyXG4gIHRvZG9MaXN0Qm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG59O1xyXG5cclxuY29uc3QgcHJvamVjdERPTSA9IChwcm9qZWN0TmFtZSwgYmFkZ2VOdW0pID0+IHtcclxuICAvLyBTZWxlY3QgdGhlIHByb2plY3QtbGlzdCBjb250YWluZXJcclxuICBjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIHByb2plY3QgbGlzdFxyXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cclxuICAvLyBDb250ZW50cyBvZiB0aGUgbGlzdFxyXG4gIGNvbnN0IHByb2plY3ROYW1lQW5kSW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3ROYW1lQW5kSW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpZGUtaXRlbS1uYW1lLWljb25cIik7XHJcbiAgLy8gQXBwZW5kIGNvbnRlbnRzIG9mIHRoZSBuZXdseSBjcmVhdGVkIGRpdlxyXG4gIGNvbnN0IHByb2plY3REZWZhdWx0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIHByb2plY3REZWZhdWx0SW1hZ2Uuc3JjID0gZGVmYXVsdFByb2plY3RJbWFnZTtcclxuICBwcm9qZWN0RGVmYXVsdEltYWdlLmFsdCA9IFwiUHJvamVjdCBJbWFnZVwiO1xyXG4gIHByb2plY3ROYW1lQW5kSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlZmF1bHRJbWFnZSk7XHJcbiAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwcm9qTmFtZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG4gIHByb2plY3ROYW1lQW5kSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvak5hbWUpO1xyXG4gIC8vIE1ha2UgY29udGVudCBhZGphY2VudCB0byBkaXZcclxuICBjb25zdCBiYWRnZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGJhZGdlTnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJiYWRnZVwiKTtcclxuICBiYWRnZU51bWJlci50ZXh0Q29udGVudCA9IGJhZGdlTnVtO1xyXG5cclxuICAvLyBBcHBlbmQgdGhlIGNvbnRlbnRzIHRvIHRoZSBwcm9qZWN0IGxpc3RcclxuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUFuZEltYWdlQ29udGFpbmVyKTtcclxuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChiYWRnZU51bWJlcik7XHJcblxyXG4gIC8vIEFwcGVuZCB0aGUgcHJvamVjdCBsaXN0IHRvIHRoZSBwcm9qZWN0TGlzdENvbnRhaW5lclxyXG4gIHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VQcm9qZWN0VGl0bGUgPSAodGl0bGUpID0+IHtcclxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XHJcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbn07XHJcblxyXG5jb25zdCBzaG93QW5kQ2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ0blwiKTtcclxuXHJcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBtb2RhbC5jbG9zZSgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuICBtb2RhbC5jbG9zZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyB0YXNrRG9tLCBwcm9qZWN0RE9NLCBjaGFuZ2VQcm9qZWN0VGl0bGUsIHNob3dBbmRDbG9zZU1vZGFsLCBjbG9zZU1vZGFsIH07IiwiY29uc3QgcHJvamVjdExpYnJhcnkgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcclxuICAgIHJldHVybiB7IGFkZFByb2plY3QsIGdldFByb2plY3RzIH07XHJcbiAgICB9KSgpO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3QgPSB7XHJcbiAgICBwcm9qZWN0TmFtZSxcclxuICAgIHRhc2tzOiBbXSxcclxuICAgIG51bVRhc2s6IDAsXHJcbiAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICB0aGlzLm51bVRhc2srKztcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gcHJvamVjdDtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RMaWJyYXJ5IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyB0YXNrRG9tLCBwcm9qZWN0RE9NLCBzaG93QW5kQ2xvc2VNb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0TGlicmFyeSB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgc2hvd0FuZENsb3NlTW9kYWwoKTtcclxufSk7XHJcblxyXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25maXJtLXN1Ym1pc3Npb25cIik7XHJcblxyXG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWZvcm1cIik7XHJcblxyXG4gIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcclxuICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgcHJvamVjdERPTShwcm9qZWN0TmFtZSwgcHJvamVjdC5udW1UYXNrKTtcclxuICBjbG9zZU1vZGFsKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=