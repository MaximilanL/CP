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

                fetch('/quiz/' + id + '/delete', {
                    method: 'POST'
                }).then(function (res) {
                    return window.location.reload();
                });
            }
        }

        if (e.target.className === "btn btn-outline-success btn-sm" || e.target.className === "btn btn-outline-danger btn-sm") {
            if (confirm("Are you sure?")) {
                var idActivator = e.target.getAttribute('data-id');

                fetch('/quiz/' + idActivator + '/reactive', {
                    method: 'POST'
                }).then(function (res) {
                    return window.location.reload();
                });
            }
        }
    });
}

var reply = document.getElementById("replies");

if (reply) {
    reply.addEventListener("click", function (e) {
        if (e.target.className === "btn btn-success") {
            var answer = document.querySelector('input[name="answer"]:checked').value;
            var id = document.querySelector('input[name="answer"]:checked').getAttribute('data-id');
            var change = document.getElementById("answers");

            fetch('/check/' + id + '/' + answer, {
                method: 'POST'
            }).then(function (response) {
                var button = document.getElementById("secret-button");
                button.classList.remove("d-none");

                if (response.status === 200) {
                    e.target.className = "btn btn-success btn-lg";
                    e.target.innerHTML = "CORRECT";

                    change.innerHTML = answer;
                } else {
                    e.target.className = "btn btn-danger btn-lg";
                    e.target.innerHTML = "INCORRECT";

                    change.innerHTML = answer;
                }
            });
        }
    });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDI1NTlmMzM3OTk3OGQzYmQ3YzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuY3NzPzc3Y2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWl6IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJjb25maXJtIiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImlkQWN0aXZhdG9yIiwicmVwbHkiLCJhbnN3ZXIiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJjaGFuZ2UiLCJyZXNwb25zZSIsImJ1dHRvbiIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0YXR1cyIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBLHlDOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPQSxDQUFDLDRDQUFSOztBQUVBO0FBQ0E7O0FBRUEsSUFBTUMsT0FBT0MsU0FBU0MsY0FBVCxD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RUFOLDJCQUFPTSxTQUFQLEdBQW1CVCxNQUFuQjtBQUNILGlCQUxELE1BS087QUFDSGQsc0JBQUVDLE1BQUYsQ0FBU0MsU0FBVCxHQUFxQix1QkFBckI7QUFDQUYsc0JBQUVDLE1BQUYsQ0FBU3NCLFNBQVQsR0FBcUIsV0FBckI7O0FBRUFOLDJCQUFPTSxTQUFQLEdBQW1CVCxNQUFuQjtBQUNIO0FBQ0osYUFqQkQ7QUFrQkg7QUFDSixLQXpCRDtBQTBCSCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMjU1OWYzMzc5OTc4ZDNiZDdjMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvY3NzL2FwcC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vYXNzZXRzL2Nzcy9hcHAuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxucmVxdWlyZSgnLi4vY3NzL2FwcC5jc3MnKTtcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxuLy8gdmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuY29uc3QgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcnNcIik7XG5jb25zdCBxdWl6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWl6XCIpO1xuXG5pZiAodXNlcikge1xuICAgIHVzZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0biBidG4tZGFuZ2VyIGRlbGV0ZS11c2VyXCIpIHtcbiAgICAgICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlP1wiKSkge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgICAgICAgICAgZmV0Y2goJy91c2VyLycgKyBpZCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmlmIChxdWl6KSB7XG4gICAgcXVpei5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIikge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgICAgICAgICBmZXRjaCgnL3F1aXovJyArIGlkICsgJy9kZWxldGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtXCIgfHxcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbVwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWRBY3RpdmF0b3IgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICAgICAgICAgIGZldGNoKCcvcXVpei8nICsgaWRBY3RpdmF0b3IgKyAnL3JlYWN0aXZlJywge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCByZXBseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVwbGllc1wiKTtcblxuaWYgKHJlcGx5KSB7XG4gICAgcmVwbHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0biBidG4tc3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICB2YXIgYW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImFuc3dlclwiXTpjaGVja2VkJykudmFsdWU7XG4gICAgICAgICAgICB2YXIgaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYW5zd2VyXCJdOmNoZWNrZWQnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlcnNcIik7XG5cbiAgICAgICAgICAgIGZldGNoKCcvY2hlY2svJyArIGlkICsgJy8nICsgYW5zd2VyLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNyZXQtYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1sZ1wiO1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBcIkNPUlJFQ1RcIjtcblxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuaW5uZXJIVE1MID0gYW5zd2VyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1kYW5nZXIgYnRuLWxnXCI7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IFwiSU5DT1JSRUNUXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmlubmVySFRNTCA9IGFuc3dlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=