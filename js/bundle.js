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
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./generator.js":
/*!**********************!*\
  !*** ./generator.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const Generator = (symbols = 0) => {

    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let date, ms, result = '';
    
    for (let i = 0; i < Math.ceil(symbols/2); i++) {
        date = new Date();
        ms = date.getMilliseconds();
        for(let x = 0; x < 1000900000; x++){}

        if (result.length < symbols) {
            if (ms <= 26) {
                result = result + letters[ms].toUpperCase() + String(ms).slice(0,1);
            } else if (ms > 26 && ms <= 99){
                result = result + letters[Math.floor(ms / 4)].toUpperCase() + String(ms).slice(0,2);
            } else {
                result = result + letters[Math.floor(ms / 10/ 4)] + String(ms).slice(2,3);
            }
        }
    }

    return result.slice(0, symbols);
};

/* harmony default export */ __webpack_exports__["default"] = (Generator);

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ "./generator.js");


window.addEventListener('DOMContentLoaded', () => {

    const result = document.querySelector('.result'),
          btn = document.querySelector('.generate'),
          symbols = document.querySelector('.symbols');

    symbols.addEventListener('input', e => {
        if (+e.target.value <= 0 || +e.target.value > 30) {
            symbols.style.background = 'red';
        } else {
            symbols.style.background = '';
        }
    });

    btn.addEventListener('click', e => {
        e.preventDefault();

        result.textContent = '...wait';

        setTimeout(() => {
            if (+symbols.value > 0 && +symbols.value <= 30) {
                result.textContent = Object(_generator__WEBPACK_IMPORTED_MODULE_0__["default"])(+symbols.value);
            } else {
                result.textContent = '...oops, you want a lot of symbols!';
            }
        }, 0);
    });

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map