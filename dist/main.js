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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("    let inputExit = document.getElementById('inputexit');\r\n\r\n    class Sound {\r\n\r\n        constructor(context) {\r\n            this.context = context;\r\n        }\r\n\r\n        setup() {\r\n            this.oscillator = this.context.createOscillator();\r\n            this.gainNode = this.context.createGain();\r\n\r\n            this.oscillator.connect(this.gainNode);\r\n            this.gainNode.connect(this.context.destination);\r\n            this.oscillator.type = 'sine';\r\n        }\r\n\r\n        play(value) {\r\n            this.setup();\r\n\r\n            this.oscillator.frequency.value = value;\r\n            this.gainNode.gain.setValueAtTime(0, this.context.currentTime);\r\n            this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.01);\r\n\r\n            this.oscillator.start(this.context.currentTime);\r\n            this.stop(this.context.currentTime);\r\n        }\r\n\r\n        stop() {\r\n            this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);\r\n            this.oscillator.stop(this.context.currentTime + 1);\r\n        }\r\n\r\n    }\r\n\r\n    let context = new(window.AudioContext || window.webkitAudioContext)();\r\n\r\n\r\n    document.addEventListener('click', cursor);\r\n    const stick = document.querySelector('.stick');\r\n    const glow1 = document.querySelector('.stick .glow-1');\r\n    const glow2 = document.querySelector('.stick .glow-2');\r\n    const notes = document.querySelectorAll('.note');\r\n\r\n    notes.forEach((note) => {\r\n        note.addEventListener('click', () => {\r\n            playSound(note);\r\n            showGlow();\r\n            setTimeout(hideGlow, 300);\r\n        })\r\n        note.addEventListener('click', hideGlow);\r\n    })\r\n\r\n    function playSound(note) {\r\n        let sound = new Sound(context);\r\n        let value = note.dataset.frequency;\r\n        sound.play(value);\r\n        sound.stop();\r\n    }\r\n\r\n    function showGlow() {\r\n\r\n    }\r\n\r\n    function hideGlow() {\r\n\r\n    }\r\n\r\n    function cursor(e) {\r\n\r\n    }\r\n\r\n    notes.forEach((note) => {\r\n        note.addEventListener('click', () => {\r\n            inputExit.value = note.textContent\r\n        })\r\n        note.addEventListener('click', hideGlow);\r\n    })\r\n\r\n    \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });