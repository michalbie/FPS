/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n#panel {\\n  position: absolute;\\n  width: 100%;\\n  background-color: black;\\n  opacity: 50%;\\n  bottom: 0;\\n  padding: 15px;\\n  color: white;\\n  font-size: 24px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n}\\n\\n#panel > section {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  margin-right: 10px;\\n}\\n\\n#panel > section > div {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n\\n#panel > section > div input[type=\\\"range\\\"],\\n#panel > section > div input[type=\\\"checkbox\\\"] {\\n  margin-right: 5px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fps/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://fps/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://fps/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://fps/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./src/components/Camera.js":
/*!**********************************!*\
  !*** ./src/components/Camera.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Camera)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Camera {\r\n\tconstructor(renderer) {\r\n\t\tconst width = renderer.domElement.width;\r\n\t\tconst height = renderer.domElement.height;\r\n\r\n\t\tthis.threeCamera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, 16 / 9, 0.1, 10000);\r\n\t\t// this.threeCamera.position.set(245, 50, 249);\r\n\t\t// this.threeCamera.lookAt(new Vector3(250, 0, 250));\r\n\r\n\t\tthis.updateSize(renderer);\r\n\r\n\t\twindow.addEventListener(\"resize\", () => this.updateSize(renderer), false);\r\n\t}\r\n\r\n\tupdateSize(renderer) {\r\n\t\tthis.threeCamera.aspect = renderer.domElement.width / renderer.domElement.height;\r\n\t\tthis.threeCamera.updateProjectionMatrix();\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://fps/./src/components/Camera.js?");

/***/ }),

/***/ "./src/components/Entities/Floor.js":
/*!******************************************!*\
  !*** ./src/components/Entities/Floor.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wall)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Wall {\r\n\tconstructor(scene, tileSize) {\r\n\t\tthis.textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\r\n\t\tthis.scene = scene;\r\n\t\tthis.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(tileSize, tileSize);\r\n\t\tthis.texture = this.textureLoader.load(\"floor.jpg\");\r\n\t\tthis.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n\t\t\tshininess: 10,\r\n\t\t\tspecular: 0x545454,\r\n\t\t\tside: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,\r\n\t\t\tmap: this.texture,\r\n\t\t});\r\n\t\tthis.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, this.material);\r\n\t\tthis.mesh.rotation.x = 1.57;\r\n\t\tthis.mesh.position.x = 250;\r\n\t\tthis.mesh.position.z = 250;\r\n\t\tthis.mesh.receiveShadow = true;\r\n\t\tthis.scene.add(this.mesh);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://fps/./src/components/Entities/Floor.js?");

/***/ }),

/***/ "./src/components/Entities/Player.js":
/*!*******************************************!*\
  !*** ./src/components/Entities/Player.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Player {\r\n\tconstructor(scene, tileSize) {\r\n\t\tthis.textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\r\n\t\tthis.scene = scene;\r\n\t\tthis.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.ConeGeometry(tileSize / 2, tileSize * 1.5, 15);\r\n\t\tthis.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\r\n\t\t\tcolor: 0xff00ff,\r\n\t\t\ttransparent: true,\r\n\t\t\twireframe: true,\r\n\t\t\topacity: 0.5,\r\n\t\t});\r\n\t\tthis.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, this.material);\r\n\t\tthis.mesh.position.y = (tileSize * 1.5) / 2;\r\n\t\tthis.mesh.position.x = tileSize * 4 - tileSize / 2;\r\n\t\tthis.mesh.position.z = tileSize * 5 - tileSize / 2;\r\n\t\tthis.mesh.castShadow = true;\r\n\t\tthis.mesh.receiveShadow = true;\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://fps/./src/components/Entities/Player.js?");

/***/ }),

/***/ "./src/components/Entities/Wall.js":
/*!*****************************************!*\
  !*** ./src/components/Entities/Wall.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wall)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Wall {\r\n\tconstructor(scene, tileSize) {\r\n\t\tthis.textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\r\n\t\tthis.scene = scene;\r\n\t\tthis.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(tileSize, tileSize * 2, tileSize);\r\n\t\tthis.texture = this.textureLoader.load(\"wall.jpg\");\r\n\t\tthis.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n\t\t\tshininess: 0,\r\n\t\t\tside: three__WEBPACK_IMPORTED_MODULE_0__.FrontSide,\r\n\t\t\ttransparent: false,\r\n\t\t\tmap: this.texture,\r\n\t\t});\r\n\t\tthis.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, this.material);\r\n\t\tthis.mesh.position.y = tileSize / 2;\r\n\t\tthis.texture.wrapS = three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;\r\n\t\tthis.texture.wrapT = three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;\r\n\t\tthis.texture.repeat.x = 1;\r\n\t\tthis.texture.repeat.y = 2;\r\n\t\tthis.mesh.castShadow = true;\r\n\t\tthis.mesh.receiveShadow = true;\r\n\t\t//this.scene.add(this.mesh);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://fps/./src/components/Entities/Wall.js?");

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ \"./src/components/Renderer.js\");\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera */ \"./src/components/Camera.js\");\n/* harmony import */ var _ServerManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServerManager */ \"./src/components/ServerManager.js\");\n/* harmony import */ var _PanelManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PanelManager */ \"./src/components/PanelManager.js\");\n/* harmony import */ var _Entities_Floor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Entities/Floor */ \"./src/components/Entities/Floor.js\");\n/* harmony import */ var _Entities_Wall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Entities/Wall */ \"./src/components/Entities/Wall.js\");\n/* harmony import */ var _Entities_Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Entities/Player */ \"./src/components/Entities/Player.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Main {\r\n\tconstructor(container) {\r\n\t\tthis.serverManager = new _ServerManager__WEBPACK_IMPORTED_MODULE_2__.default();\r\n\t\tthis.tileSize = 50;\r\n\t\tthis.entities = [];\r\n\r\n\t\t// właściwości klasy\r\n\t\tthis.container = container;\r\n\t\tthis.scene = new three__WEBPACK_IMPORTED_MODULE_7__.Scene();\r\n\t\tthis.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_0__.default(this.scene, container);\r\n\t\tthis.player = new _Entities_Player__WEBPACK_IMPORTED_MODULE_6__.default(this.scene, this.tileSize);\r\n\t\tthis.scene.add(this.player.mesh);\r\n\r\n\t\tthis.camera = new _Camera__WEBPACK_IMPORTED_MODULE_1__.default(this.renderer.threeRenderer);\r\n\t\tthis.camera.threeCamera.lookAt(this.player.mesh.position);\r\n\r\n\t\tthis.camera.threeCamera.position.x = this.player.mesh.position.x;\r\n\t\tthis.camera.threeCamera.position.y = this.player.mesh.position.y;\r\n\t\tthis.camera.threeCamera.position.z = this.player.mesh.position.z - 2 * this.tileSize;\r\n\t\tthis.panelManager = new _PanelManager__WEBPACK_IMPORTED_MODULE_3__.default(this.camera, this.player, this.tileSize);\r\n\t\tthis.floor = new _Entities_Floor__WEBPACK_IMPORTED_MODULE_4__.default(this.scene, 500);\r\n\r\n\t\tthis.ambientLight = new three__WEBPACK_IMPORTED_MODULE_7__.AmbientLight(0xffffff, 0.2);\r\n\t\tthis.scene.add(this.ambientLight);\r\n\r\n\t\tthis.axes = new three__WEBPACK_IMPORTED_MODULE_7__.AxesHelper(1000);\r\n\t\tthis.scene.add(this.axes);\r\n\r\n\t\tthis.initializeLevel();\r\n\r\n\t\tthis.render();\r\n\t}\r\n\r\n\trender() {\r\n\t\tconsole.log(\"render leci\");\r\n\t\tthis.renderer.render(this.scene, this.camera.threeCamera);\r\n\r\n\t\tthis.updateValuesFromPanel();\r\n\t\trequestAnimationFrame(this.render.bind(this));\r\n\t}\r\n\r\n\tasync initializeLevel() {\r\n\t\tconst data = await this.serverManager.downloadLevel();\r\n\r\n\t\tdata.forEach((entity) => {\r\n\t\t\tswitch (entity.type) {\r\n\t\t\t\tcase \"wall\":\r\n\t\t\t\t\tconst wall = new _Entities_Wall__WEBPACK_IMPORTED_MODULE_5__.default(this.scene, this.tileSize);\r\n\t\t\t\t\twall.mesh.position.x = entity.x * this.tileSize + this.tileSize / 2; //translating to flip the level\r\n\t\t\t\t\twall.mesh.position.z = entity.z * this.tileSize + this.tileSize / 2;\r\n\t\t\t\t\tthis.scene.add(wall.mesh);\r\n\t\t\t\t\tthis.entities.push({ type: \"wall\", object: wall });\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"light\":\r\n\t\t\t\t\tvar light = new three__WEBPACK_IMPORTED_MODULE_7__.PointLight(0xffffff, 0.8);\r\n\t\t\t\t\tlight.position.x = entity.x * this.tileSize + this.tileSize / 2;\r\n\t\t\t\t\tlight.position.z = entity.z * this.tileSize + this.tileSize / 2;\r\n\t\t\t\t\tlight.position.y = 60;\r\n\t\t\t\t\tlight.castShadow = true;\r\n\t\t\t\t\tthis.scene.add(light);\r\n\t\t\t\t\tthis.entities.push({ type: \"light\", object: light });\r\n\t\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tupdateValuesFromPanel() {\r\n\t\tthis.entities.forEach((entity) => {\r\n\t\t\tif (entity.type == \"light\") {\r\n\t\t\t\tentity.object.intensity = this.panelManager.lightsIntensity;\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tif (this.panelManager.shadowsEnabled == true) {\r\n\t\t\tthis.renderer.threeRenderer.shadowMap.enabled = true;\r\n\t\t\tthis.renderer.threeRenderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_7__.PCFSoftShadowMap;\r\n\t\t\tthis.entities.forEach((entity) => {\r\n\t\t\t\tif (entity.type == \"light\") {\r\n\t\t\t\t\tentity.object.castShadow = true;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t} else {\r\n\t\t\tthis.renderer.threeRenderer.shadowMap.enabled = false;\r\n\t\t\tthis.entities.forEach((entity) => {\r\n\t\t\t\tif (entity.type == \"light\") {\r\n\t\t\t\t\tentity.object.castShadow = false;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\t// if (this.panelManager.viewFromAbove == true) {\r\n\t\t// \t// this.camera.threeCamera.rotation.x = 0;\r\n\t\t// \t// this.camera.threeCamera.rotation.y = 0;\r\n\t\t// \tthis.camera.threeCamera.position.set(250, 700, 251);\r\n\t\t// \tthis.camera.threeCamera.lookAt(new Vector3(250, 0, 250));\r\n\r\n\t\t// \tthis.camera.threeCamera.position.y = this.panelManager.cameraHeight;\r\n\t\t// \tthis.camera.threeCamera.fov = this.panelManager.cameraFov;\r\n\t\t// \tthis.camera.threeCamera.updateProjectionMatrix();\r\n\t\t// } else {\r\n\t\t// \tthis.camera.threeCamera.rotation.x = this.panelManager.cameraXAngle;\r\n\t\t// \tthis.camera.threeCamera.position.z = this.panelManager.cameraDistanceFromPlayer;\r\n\t\t// \tthis.camera.threeCamera.rotation.y = this.panelManager.cameraYAngle;\r\n\t\t// \tthis.camera.threeCamera.position.y = this.panelManager.cameraHeight;\r\n\t\t// \tthis.camera.threeCamera.fov = this.panelManager.cameraFov;\r\n\t\t// \tthis.camera.threeCamera.updateProjectionMatrix();\r\n\t\t// }\r\n\r\n\t\t// if (this.camera.threeCamera.rotation.x == 0 && this.camera.threeCamera.rotation.y == 0) {\r\n\t\t// \tconsole.log(\"tak\");\r\n\t\t// \tthis.camera.threeCamera.lookAt(this.player.mesh.position);\r\n\t\t// \tthis.panelManager.needToCorrectTarget = false;\r\n\t\t// }\r\n\r\n\t\t//this.camera.threeCamera.lookAt(new Vector3(250, 0, 250));\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://fps/./src/components/Main.js?");

/***/ }),

/***/ "./src/components/PanelManager.js":
/*!****************************************!*\
  !*** ./src/components/PanelManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PanelManager)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass PanelManager {\r\n\tconstructor(camera, player, tileSize) {\r\n\t\tthis.addListeners();\r\n\t\tthis.camera = camera;\r\n\t\tthis.player = player;\r\n\t\tthis.tileSize = tileSize;\r\n\t\tthis.needToCorrectTarget = false;\r\n\t\tthis.cameraHeight = this.camera.threeCamera.position.y;\r\n\t\tthis.cameraXAngle = this.camera.threeCamera.rotation.x;\r\n\t\tthis.cameraDistanceFromPlayer = this.camera.threeCamera.position.z;\r\n\t\tthis.cameraYAngle = this.camera.threeCamera.rotation.y;\r\n\t\tthis.cameraFov = this.camera.threeCamera.fov;\r\n\t\tthis.lightsIntensity = 0.8;\r\n\t\tthis.shadowsEnabled = true;\r\n\t\tthis.viewFromAbove = false;\r\n\t}\r\n\r\n\taddListeners() {\r\n\t\tdocument.getElementById(\"camera-height\").addEventListener(\"input\", () => {\r\n\t\t\tif (!this.viewFromAbove) {\r\n\t\t\t\tthis.cameraHeight = document.getElementById(\"camera-height\").value;\r\n\t\t\t\tthis.camera.threeCamera.position.y = this.cameraHeight;\r\n\t\t\t\tthis.camera.threeCamera.lookAt(this.player.mesh.position);\r\n\t\t\t}\r\n\t\t});\r\n\t\tdocument.getElementById(\"camera-x-angle\").addEventListener(\"input\", () => {\r\n\t\t\tif (!this.viewFromAbove) {\r\n\t\t\t\tthis.cameraXAngle = document.getElementById(\"camera-x-angle\").value;\r\n\t\t\t\tthis.camera.threeCamera.rotation.x = this.cameraXAngle;\r\n\t\t\t}\r\n\t\t});\r\n\t\tdocument.getElementById(\"camera-distance-from-player\").addEventListener(\"input\", () => {\r\n\t\t\tif (!this.viewFromAbove) {\r\n\t\t\t\tthis.cameraDistanceFromPlayer = document.getElementById(\"camera-distance-from-player\").value;\r\n\t\t\t\tthis.camera.threeCamera.position.z = this.cameraDistanceFromPlayer;\r\n\t\t\t}\r\n\t\t});\r\n\t\tdocument.getElementById(\"camera-y-angle\").addEventListener(\"input\", () => {\r\n\t\t\tif (!this.viewFromAbove) {\r\n\t\t\t\tthis.cameraYAngle = document.getElementById(\"camera-y-angle\").value;\r\n\t\t\t\tthis.camera.threeCamera.rotation.y = this.cameraYAngle;\r\n\t\t\t}\r\n\t\t});\r\n\t\tdocument.getElementById(\"camera-fov\").addEventListener(\"input\", () => {\r\n\t\t\tthis.cameraFov = document.getElementById(\"camera-fov\").value;\r\n\t\t\tthis.camera.threeCamera.fov = this.cameraFov;\r\n\t\t\tthis.camera.threeCamera.updateProjectionMatrix();\r\n\t\t});\r\n\t\tdocument.getElementById(\"lights-intensity\").addEventListener(\"input\", () => {\r\n\t\t\tthis.lightsIntensity = document.getElementById(\"lights-intensity\").value;\r\n\t\t});\r\n\t\tdocument.getElementById(\"shadows\").addEventListener(\"input\", () => {\r\n\t\t\tthis.shadowsEnabled = document.getElementById(\"shadows\").checked;\r\n\t\t});\r\n\t\tdocument.getElementById(\"view-from-above\").addEventListener(\"input\", () => {\r\n\t\t\tif ((this.viewFromAbove = document.getElementById(\"view-from-above\").checked)) {\r\n\t\t\t\tthis.cameraHeight = 700;\r\n\t\t\t\tthis.viewFromAbove = true;\r\n\t\t\t\tthis.camera.threeCamera.position.set(250, 700, 251);\r\n\t\t\t\tthis.camera.threeCamera.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(250, 0, 250));\r\n\t\t\t} else {\r\n\t\t\t\tthis.viewFromAbove = false;\r\n\t\t\t\tthis.cameraHeight = this.player.mesh.position.y;\r\n\t\t\t\tthis.camera.threeCamera.position.x = this.player.mesh.position.x;\r\n\t\t\t\tthis.camera.threeCamera.position.y = this.player.mesh.position.y;\r\n\t\t\t\tthis.camera.threeCamera.position.z = this.player.mesh.position.z - 2 * this.tileSize;\r\n\t\t\t\tthis.camera.threeCamera.lookAt(this.player.mesh.position);\r\n\r\n\t\t\t\tconsole.log(this.camera.threeCamera.position.x);\r\n\t\t\t\tconsole.log(this.camera.threeCamera.position.y);\r\n\t\t\t\tconsole.log(this.camera.threeCamera.position.z);\r\n\t\t\t}\r\n\t\t});\r\n\t\t// document.getElementById(\"camera-height\").addEventListener(\"input\", () => {\r\n\t\t// \tthis.cameraHeight = document.getElementById(\"camera-height\").value;\r\n\t\t// });\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://fps/./src/components/PanelManager.js?");

/***/ }),

/***/ "./src/components/Renderer.js":
/*!************************************!*\
  !*** ./src/components/Renderer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Renderer)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Renderer {\r\n\tconstructor(scene, container) {\r\n\t\tthis.scene = scene;\r\n\t\tthis.container = container;\r\n\t\tthis.threeRenderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });\r\n\t\tthis.threeRenderer.setClearColor(0xeeeeee);\r\n\t\tthis.threeRenderer.shadowMap.enabled = true;\r\n\t\tthis.threeRenderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_0__.PCFSoftShadowMap;\r\n\t\tthis.container.appendChild(this.threeRenderer.domElement);\r\n\t\tthis.updateSize();\r\n\r\n\t\tdocument.addEventListener(\"DOMContentLoaded\", () => this.updateSize(), false);\r\n\t\twindow.addEventListener(\"resize\", () => this.updateSize(), false);\r\n\t}\r\n\r\n\tupdateSize() {\r\n\t\tthis.threeRenderer.setSize(window.innerWidth, window.innerHeight);\r\n\t}\r\n\r\n\trender(scene, camera) {\r\n\t\tthis.threeRenderer.render(scene, camera);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://fps/./src/components/Renderer.js?");

/***/ }),

/***/ "./src/components/ServerManager.js":
/*!*****************************************!*\
  !*** ./src/components/ServerManager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ServerManager)\n/* harmony export */ });\nclass ServerManager {\r\n\tconstructor() {\r\n\t\tthis.levelData = null;\r\n\t}\r\n\r\n\tasync downloadLevel() {\r\n\t\tconst response = await fetch(\"/getLevel\", {\r\n\t\t\tmethod: \"POST\",\r\n\t\t\theaders: { \"Content-Type\": \"application/json\" },\r\n\t\t});\r\n\r\n\t\tif (!response.ok) {\r\n\t\t\tconsole.log(\"Error: \" + response.status);\r\n\t\t} else {\r\n\t\t\tlet resp = await response.json();\r\n\t\t\tconsole.log(resp);\r\n\t\t\tthis.levelData = resp;\r\n\t\t\treturn this.levelData;\r\n\t\t}\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://fps/./src/components/ServerManager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Main */ \"./src/components/Main.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\nfunction init() {\r\n\tconst container = document.getElementById(\"root\");\r\n\tnew _components_Main__WEBPACK_IMPORTED_MODULE_0__.default(container);\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://fps/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;