/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n    let simple = document.querySelector('.simple');\r\n    let hex = document.querySelector('.hex');\r\n    let flipper = document.querySelector('.flipper');\r\n    let buttons = document.querySelector('.menu').querySelectorAll('button');\r\n    let color = document.querySelector('.bg__color');\r\n    let click = document.querySelector('.change');\r\n    let bg = document.querySelector('.bg');\r\n    const colors = [\r\n        \"AliceBlue\",\r\n        \"AntiqueWhite\",\r\n        \"Aqua\",\r\n        \"Aquamarine\",\r\n        \"Azure\",\r\n        \"Beige\",\r\n        \"Bisque\",\r\n        \"Black\",\r\n        \"BlanchedAlmond\",\r\n        \"Blue\",\r\n        \"BlueViolet\",\r\n        \"Brown\",\r\n        \"BurlyWood\",\r\n        \"CadetBlue\",\r\n        \"Chartreuse\",\r\n        \"Chocolate\",\r\n        \"Coral\",\r\n        \"CornflowerBlue\",\r\n        \"Cornsilk\",\r\n        \"Crimson\",\r\n        \"Cyan\",\r\n        \"DarkBlue\",\r\n        \"DarkCyan\",\r\n        \"DarkGoldenRod\",\r\n        \"DarkGray\",\r\n        \"DarkGrey\",\r\n        \"DarkGreen\",\r\n        \"DarkKhaki\",\r\n        \"DarkMagenta\",\r\n        \"DarkOliveGreen\",\r\n        \"DarkOrange\",\r\n        \"DarkOrchid\",\r\n        \"DarkRed\",\r\n        \"DarkSalmon\",\r\n        \"DarkSeaGreen\",\r\n        \"DarkSlateBlue\",\r\n        \"DarkSlateGray\",\r\n        \"DarkSlateGrey\",\r\n        \"DarkTurquoise\",\r\n        \"DarkViolet\",\r\n        \"DeepPink\",\r\n        \"DeepSkyBlue\",\r\n        \"DimGray\",\r\n        \"DimGrey\",\r\n        \"DodgerBlue\",\r\n        \"FireBrick\",\r\n        \"FloralWhite\",\r\n        \"ForestGreen\",\r\n        \"Fuchsia\",\r\n        \"Gainsboro\",\r\n        \"GhostWhite\",\r\n        \"Gold\",\r\n        \"GoldenRod\",\r\n        \"Gray\",\r\n        \"Grey\",\r\n        \"Green\",\r\n        \"GreenYellow\",\r\n        \"HoneyDew\",\r\n        \"HotPink\",\r\n        \"IndianRed\",\r\n        \"Indigo\",\r\n        \"Ivory\",\r\n        \"Khaki\",\r\n        \"Lavender\",\r\n        \"LavenderBlush\",\r\n        \"LawnGreen\",\r\n        \"LemonChiffon\",\r\n        \"LightBlue\",\r\n        \"LightCoral\",\r\n        \"LightCyan\",\r\n        \"LightGoldenRodYellow\",\r\n        \"LightGray\",\r\n        \"LightGrey\",\r\n        \"LightGreen\",\r\n        \"LightPink\",\r\n        \"LightSalmon\",\r\n        \"LightSeaGreen\",\r\n        \"LightSkyBlue\",\r\n        \"LightSlateGray\",\r\n        \"LightSlateGrey\",\r\n        \"LightSteelBlue\",\r\n        \"LightYellow\",\r\n        \"Lime\",\r\n        \"LimeGreen\",\r\n        \"Linen\",\r\n        \"Magenta\",\r\n        \"Maroon\",\r\n        \"MediumAquaMarine\",\r\n        \"MediumBlue\",\r\n        \"MediumOrchid\",\r\n        \"MediumPurple\",\r\n        \"MediumSeaGreen\",\r\n        \"MediumSlateBlue\",\r\n        \"MediumSpringGreen\",\r\n        \"MediumTurquoise\",\r\n        \"MediumVioletRed\",\r\n        \"MidnightBlue\",\r\n        \"MintCream\",\r\n        \"MistyRose\",\r\n        \"Moccasin\",\r\n        \"NavajoWhite\",\r\n        \"Navy\",\r\n        \"OldLace\",\r\n        \"Olive\",\r\n        \"OliveDrab\",\r\n        \"Orange\",\r\n        \"OrangeRed\",\r\n        \"Orchid\",\r\n        \"PaleGoldenRod\",\r\n        \"PaleGreen\",\r\n        \"PaleTurquoise\",\r\n        \"PaleVioletRed\",\r\n        \"PapayaWhip\",\r\n        \"PeachPuff\",\r\n        \"Peru\",\r\n        \"Pink\",\r\n        \"Plum\",\r\n        \"PowderBlue\",\r\n        \"Purple\",\r\n        \"RebeccaPurple\",\r\n        \"Red\",\r\n        \"RosyBrown\",\r\n        \"RoyalBlue\",\r\n        \"SaddleBrown\",\r\n        \"Salmon\",\r\n        \"SandyBrown\",\r\n        \"SeaGreen\",\r\n        \"SeaShell\",\r\n        \"Sienna\",\r\n        \"Silver\",\r\n        \"SkyBlue\",\r\n        \"SlateBlue\",\r\n        \"SlateGray\",\r\n        \"SlateGrey\",\r\n        \"Snow\",\r\n        \"SpringGreen\",\r\n        \"SteelBlue\",\r\n        \"Tan\",\r\n        \"Teal\",\r\n        \"Thistle\",\r\n        \"Tomato\",\r\n        \"Turquoise\",\r\n        \"Violet\",\r\n        \"Wheat\",\r\n        \"White\",\r\n        \"WhiteSmoke\",\r\n        \"Yellow\",\r\n        \"YellowGreen\",\r\n    ];\r\n\r\n    buttons.forEach((button) => {\r\n        if (button == flipper) flipper.classList.add('active');\r\n        button.addEventListener('click', (event) => {\r\n            buttons.forEach((button) => {\r\n                button.classList.remove('active');\r\n            });\r\n            event.target.classList.toggle('active');\r\n        });\r\n    });\r\n\r\n    let setBg = (type) => {\r\n        let randomColor = '';\r\n\r\n        if (type == 'flipper'){\r\n            randomColor = (Math.floor(Math.random() * 2) + 1);\r\n            type = randomColor == 1 ? 'hex' : 'simple';\r\n        }\r\n        \r\n\r\n        if (type == 'hex')\r\n            randomColor = Math.floor(Math.random() * 16777215).toString(16);\r\n        if (type == 'simple')\r\n            randomColor = colors[Math.floor(Math.random() * colors.length)];\r\n        \r\n        \r\n        color.textContent = type == 'hex' ? \"#\" + randomColor : randomColor;\r\n        bg.style.backgroundColor = type == 'hex' ? \"#\" + randomColor : randomColor;\r\n        color.style.color = type == 'hex' ? \"#\" + randomColor : randomColor;\r\n\r\n\r\n\r\n    };\r\n\r\n    click.addEventListener('click', () => {\r\n        if (simple.classList.contains('active')) setBg('simple');\r\n        if (hex.classList.contains('active')) setBg('hex');\r\n        if (flipper.classList.contains('active')) setBg('flipper');\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });