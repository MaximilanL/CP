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

var quiz = document.getElementById("quiz");
var user = document.getElementById("users");
var reply = document.getElementById("replies");
var control = document.getElementById("control");

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
                    return 0;
                } /*window.location.reload()*/);
            }
        }
    });
}

if (reply) {
    reply.addEventListener("click", function (e) {
        if (e.target.className === "btn btn-success") {
            var answer = document.querySelector('input[name="answer"]:checked').value;
            var id = document.querySelector('input[name="answer"]:checked').getAttribute('data-id');
            var change = document.getElementById("answers");
            var quizName = document.getElementById("name").getAttribute('data-id');

            fetch('/check/' + id + '/' + answer + "/" + quizName, {
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

if (control) {
    control.addEventListener("click", function (e) {
        if (e.target.className === "btn btn-outline-secondary btn-sm") {
            if (confirm("Are you sure?")) {
                var id = e.target.getAttribute('data-id');

                fetch('/question/' + id + '/delete', {
                    method: 'POST'
                }).then(function (res) {
                    return window.location.reload();
                });
            }
        }

        var quizId = document.getElementById("quizId").getAttribute('data-id');

        if (e.target.className === "btn btn-outline-success btn-sm") {
            var idActivator = e.target.getAttribute('data-id');

            fetch('/question/active/' + idActivator + '/' + quizId, {
                method: 'DELETE'
            }).then(function (res) {
                return window.location.reload();
            });
        }

        if (e.target.className === "btn btn-outline-danger btn-sm") {
            var idActivator = e.target.getAttribute('data-id');

            fetch('/question/delete/' + idActivator + '/' + quizId, {
                method: 'DELETE'
            }).then(function (res) {
                return window.location.reload();
            });
        }
    });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWMyNzBjMWI3ZTVkNTAzZGI0ODgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuY3NzPzc3Y2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicXVpeiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VyIiwicmVwbHkiLCJjb250cm9sIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJjb25maXJtIiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImFuc3dlciIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNoYW5nZSIsInF1aXpOYW1lIiwicmVzcG9uc2UiLCJidXR0b24iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdGF0dXMiLCJpbm5lckhUTUwiLCJxdWl6SWQiLCJpZEFjdGl2YXRvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBLHlDOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPQSxDQUFDLDRDQUFSOztBQUVBO0FBQ0E7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QUFENEMsYUFBeEQsRUFFR0MsSUFGSCxDQUVRO0FBQUEsdUJBQU9DLE9BQU9DLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBQVA7QUFBQSxhQUZSO0FBR0g7QUFDSixLQTVCRDtBQTZCSCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1YzI3MGMxYjdlNWQ1MDNkYjQ4OCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvY3NzL2FwcC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vYXNzZXRzL2Nzcy9hcHAuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxucmVxdWlyZSgnLi4vY3NzL2FwcC5jc3MnKTtcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxuLy8gdmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuY29uc3QgcXVpeiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVpelwiKTtcbmNvbnN0IHVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJzXCIpO1xuY29uc3QgcmVwbHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcGxpZXNcIik7XG5jb25zdCBjb250cm9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cm9sXCIpO1xuXG5pZiAodXNlcikge1xuICAgIHVzZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0biBidG4tZGFuZ2VyIGRlbGV0ZS11c2VyXCIpIHtcbiAgICAgICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlP1wiKSkge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgICAgICAgICAgZmV0Y2goJy91c2VyLycgKyBpZCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmlmIChxdWl6KSB7XG4gICAgcXVpei5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIikge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgICAgICAgICBmZXRjaCgnL3F1aXovZGVsZXRlLycgKyBpZCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IDAvKndpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSovKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmlmIChyZXBseSkge1xuICAgIHJlcGx5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLXN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgdmFyIGFuc3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJhbnN3ZXJcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImFuc3dlclwiXTpjaGVja2VkJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXJzXCIpO1xuICAgICAgICAgICAgdmFyIHF1aXpOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgICAgICBmZXRjaCgnL2NoZWNrLycgKyBpZCArICcvJyArIGFuc3dlciArIFwiL1wiICsgcXVpek5hbWUsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY3JldC1idXR0b25cIik7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID0gXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWxnXCI7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IFwiQ09SUkVDVFwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZS5pbm5lckhUTUwgPSBhbnN3ZXI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID0gXCJidG4gYnRuLWRhbmdlciBidG4tbGdcIjtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gXCJJTkNPUlJFQ1RcIjtcblxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuaW5uZXJIVE1MID0gYW5zd2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuaWYgKGNvbnRyb2wpIHtcbiAgICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICAgICAgICAgIGZldGNoKCcvcXVlc3Rpb24vJyArIGlkICsgJy9kZWxldGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBxdWl6SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aXpJZFwiKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbVwiKSB7XG4gICAgICAgICAgICB2YXIgaWRBY3RpdmF0b3IgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICAgICAgZmV0Y2goJy9xdWVzdGlvbi9hY3RpdmUvJyArIGlkQWN0aXZhdG9yICsgJy8nICsgcXVpeklkLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIikge1xuICAgICAgICAgICAgdmFyIGlkQWN0aXZhdG9yID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgICAgIGZldGNoKCcvcXVlc3Rpb24vZGVsZXRlLycgKyBpZEFjdGl2YXRvciArICcvJyArIHF1aXpJZCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9