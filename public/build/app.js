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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');

var user = document.getElementById("users");
var quiz = document.getElementById("quiz");

if (user) {
    user.addEventListener("click", function (e) {
        if (e.target.className === "btn btn-danger delete-user") {
            if (confirm("Are you sure?")) {
                var id = e.target.getAttribute('data-id');

                fetch('/user/' + id, {
                    method: 'DELETE'
                }).then(function (res) {
                    return window.location.reload();
                });
            }
        }
    });
}

if (quiz) {
    quiz.addEventListener("click", function (e) {
        if (e.target.className === "btn btn-outline-secondary btn-sm") {
            if (confirm("Are you sure?")) {
                var id = e.target.getAttribute('data-id');

                fetch('/quiz/delete/' + id, {
                    method: 'POST'
                }).then(function (res) {
                    return window.location.reload();
                });
            }
        }

        if (e.target.className === "btn btn-outline-success btn-sm" || e.target.className === "btn btn-outline-danger btn-sm") {
            if (confirm("Are you sure?")) {
                var idActivator = e.target.getAttribute('data-id');

                fetch('/quiz/reactive/' + idActivator, {
                    method: 'POST'
                }).then(function (res) {
                    return window.location.reload();
                });
            }
        }
    });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDRmZjEwMDVmMTgwMmFjY2JmMGUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuY3NzPzc3Y2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWl6IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJjb25maXJtIiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImlkQWN0aXZhdG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REEseUM7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O0FBT0E7QUFDQUEsbUJBQU9BLENBQUMsNENBQVI7O0FBRUE7QUFDQTs7QUFFQSxJQUFNQyxPQUFPQyxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQSxJQUFNQyxPQUFPRixTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWI7O0FBRUEsSUFBSUYsSUFBSixFQUFVO0FBQ05BLFNBQUtJLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLGFBQUs7QUFDaEMsWUFBSUMsRUFBRUMsTUFBRixDQUFTQyxTQUFULEtBQXVCLDRCQUEzQixFQUF5RDtBQUNyRCxnQkFBSUMsUUFBUSxlQUFSLENBQUosRUFBOEI7QUFDMUIsb0JBQUlDLEtBQUtKLEVBQUVDLE1BQUYsQ0FBU0ksWUFBVCxDQUFzQixTQUF0QixDQUFUOztBQUVBQyxzQkFBTSxXQUFXRixFQUFqQixFQUFxQjtBQUNqQkcsNEJBQVE7QUFEUyxpQkFBckIsRUFFR0MsSUFGSCxDQUVRO0FBQUEsMkJBQU9DLE9BQU9DLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBQVA7QUFBQSxpQkFGUjtBQUdIO0FBQ0o7QUFDSixLQVZEO0FBV0g7O0FBRUQsSUFBSWIsSUFBSixFQUFVO0FBQ05BLFNBQUtDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLGFBQUs7QUFDaEMsWUFBSUMsRUFBRUMsTUFBRixDQUFTQyxTQUFULEtBQXVCLGtDQUEzQixFQUErRDtBQUMzRCxnQkFBSUMsUUFBUSxlQUFSLENBQUosRUFBOEI7QUFDMUIsb0JBQUlDLEtBQUtKLEVBQUVDLE1BQUYsQ0FBU0ksWUFBVCxDQUFzQixTQUF0QixDQUFUOztBQUVBQyxzQkFBTSxrQkFBa0JGLEVBQXhCLEVBQTRCO0FBQ3hCRyw0QkFBUTtBQURnQixpQkFBNUIsRUFFR0MsSUFGSCxDQUVRO0FBQUEsMkJBQU9DLE9BQU9DLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBQVA7QUFBQSxpQkFGUjtBQUdIO0FBQ0o7O0FBRUQsWUFBSVgsRUFBRUMsTUFBRixDQUFTQyxTQUFULEtBQXVCLGdDQUF2QixJQUNBRixFQUFFQyxNQUFGLENBQVNDLFNBQVQsS0FBdUIsK0JBRDNCLEVBQzREO0FBQ3hELGdCQUFJQyxRQUFRLGVBQVIsQ0FBSixFQUE4QjtBQUMxQixvQkFBSVMsY0FBY1osRUFBRUMsTUFBRixDQUFTSSxZQUFULENBQXNCLFNBQXRCLENBQWxCOztBQUVBQyxzQkFBTSxvQkFBb0JNLFdBQTFCLEVBQXVDO0FBQ25DTCw0QkFBUTtBQUQyQixpQkFBdkMsRUFFR0MsSUFGSCxDQUVRO0FBQUEsMkJBQU9DLE9BQU9DLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBQVA7QUFBQSxpQkFGUjtBQUdIO0FBQ0o7QUFDSixLQXJCRDtBQXNCSCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNGZmMTAwNWYxODAyYWNjYmYwZSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvY3NzL2FwcC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vYXNzZXRzL2Nzcy9hcHAuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxucmVxdWlyZSgnLi4vY3NzL2FwcC5jc3MnKTtcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxuLy8gdmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuY29uc3QgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcnNcIik7XG5jb25zdCBxdWl6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWl6XCIpO1xuXG5pZiAodXNlcikge1xuICAgIHVzZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0biBidG4tZGFuZ2VyIGRlbGV0ZS11c2VyXCIpIHtcbiAgICAgICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlP1wiKSkge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgICAgICAgICAgZmV0Y2goJy91c2VyLycgKyBpZCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmlmIChxdWl6KSB7XG4gICAgcXVpei5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIikge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgICAgICAgICBmZXRjaCgnL3F1aXovZGVsZXRlLycgKyBpZCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbVwiIHx8XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIikge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkQWN0aXZhdG9yID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgICAgICAgICBmZXRjaCgnL3F1aXovcmVhY3RpdmUvJyArIGlkQWN0aXZhdG9yLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==