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
        var id = e.target.getAttribute('data-id');

        if (e.target.className === "btn btn-danger delete-user") {
            if (confirm("Are you sure?")) {
                fetch('/user/' + id, {
                    method: 'DELETE'
                }).then(function (res) {
                    return window.location.reload();
                });
            }
        }

        if (e.target.className === "btn btn-warning reactivate-user") {
            fetch('/user/reactivity/' + id, {
                method: 'POST'
            }).then(function (res) {
                return window.location.reload();
            });
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
    });
}

if (reply) {
    reply.addEventListener("click", function (e) {
        if (e.target.className === "btn btn-success") {
            var answer = document.querySelector('input[name="answer"]:checked').value,
                id = document.querySelector('input[name="answer"]:checked').getAttribute('data-id'),
                change = document.getElementById("answers"),
                quizName = document.getElementById("name").getAttribute('data-id'),
                button = document.getElementById("secret-button");

            fetch('/check/' + id + '/' + answer + "/" + quizName, {
                method: 'POST'
            }).then(function (response) {
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

        var idActivator = e.target.getAttribute('data-id'),
            quizId = document.getElementById("quizId").getAttribute('data-id');

        if (e.target.className === "btn btn-outline-success btn-sm") {

            fetch('/question/active/' + idActivator + '/' + quizId, {
                method: 'DELETE'
            }).then(function (res) {
                return window.location.reload();
            });
        }

        if (e.target.className === "btn btn-outline-danger btn-sm") {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDdiMzhhNjNlZTQ5MjY4Y2YzNDEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuY3NzPzc3Y2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicXVpeiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VyIiwicmVwbHkiLCJjb250cm9sIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlkIiwiZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNvbmZpcm0iLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImFuc3dlciIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNoYW5nZSIsInF1aXpOYW1lIiwiYnV0dG9uIiwicmVzcG9uc2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdGF0dXMiLCJpbm5lckhUTUwiLCJpZEFjdGl2YXRvciIsInF1aXpJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBLHlDOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPQSxDQUFDLDRDQUFSOztBQUVBO0FBQ0E7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QSxhQUZSO0FBR0g7O0FBRUQsWUFBSVYsRUFBRUMsTUFBRixDQUFTRSxTQUFULEtBQXVCLCtCQUEzQixFQUE0RDs7QUFFeERFLGtCQUFNLHNCQUFzQmlCLFdBQXRCLEdBQW9DLEdBQXBDLEdBQTBDQyxNQUFoRCxFQUF3RDtBQUNwRGpCLHdCQUFRO0FBRDRDLGFBQXhELEVBRUdDLElBRkgsQ0FFUTtBQUFBLHVCQUFPQyxPQUFPQyxRQUFQLENBQWdCQyxNQUFoQixFQUFQO0FBQUEsYUFGUjtBQUdIO0FBQ0osS0EzQkQ7QUE0QkgsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9hcHAuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDdiMzhhNjNlZTQ5MjY4Y2YzNDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2Nzcy9hcHAuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL2Fzc2V0cy9jc3MvYXBwLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuY3NzJyk7XG5cbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gcmVxdWlyZSBpdC5cbi8vIHZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbmNvbnN0IHF1aXogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aXpcIik7XG5jb25zdCB1c2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2Vyc1wiKTtcbmNvbnN0IHJlcGx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXBsaWVzXCIpO1xuY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbFwiKTtcblxuaWYgKHVzZXIpIHtcbiAgICB1c2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgdmFyIGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLWRhbmdlciBkZWxldGUtdXNlclwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcbiAgICAgICAgICAgICAgICBmZXRjaCgnL3VzZXIvJyArIGlkLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLXdhcm5pbmcgcmVhY3RpdmF0ZS11c2VyXCIpIHtcbiAgICAgICAgICAgIGZldGNoKCcvdXNlci9yZWFjdGl2aXR5LycgKyBpZCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuaWYgKHF1aXopIHtcbiAgICBxdWl6LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICAgICAgICAgIGZldGNoKCcvcXVpei9kZWxldGUvJyArIGlkLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmlmIChyZXBseSkge1xuICAgIHJlcGx5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLXN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgdmFyIGFuc3dlciAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImFuc3dlclwiXTpjaGVja2VkJykudmFsdWUsXG4gICAgICAgICAgICAgICAgaWQgICAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYW5zd2VyXCJdOmNoZWNrZWQnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2Vyc1wiKSxcbiAgICAgICAgICAgICAgICBxdWl6TmFtZSAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgICAgICBidXR0b24gICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VjcmV0LWJ1dHRvblwiKTtcblxuICAgICAgICAgICAgZmV0Y2goJy9jaGVjay8nICsgaWQgKyAnLycgKyBhbnN3ZXIgKyBcIi9cIiArIHF1aXpOYW1lLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgID0gXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWxnXCI7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCAgPSBcIkNPUlJFQ1RcIjtcblxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuaW5uZXJIVE1MICAgID0gYW5zd2VyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSAgPSBcImJ0biBidG4tZGFuZ2VyIGJ0bi1sZ1wiO1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgID0gXCJJTkNPUlJFQ1RcIjtcblxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuaW5uZXJIVE1MICAgID0gYW5zd2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuaWYgKGNvbnRyb2wpIHtcbiAgICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICAgICAgICAgIGZldGNoKCcvcXVlc3Rpb24vJyArIGlkICsgJy9kZWxldGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpZEFjdGl2YXRvciA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLFxuICAgICAgICAgICAgcXVpeklkICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aXpJZFwiKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbVwiKSB7XG5cbiAgICAgICAgICAgIGZldGNoKCcvcXVlc3Rpb24vYWN0aXZlLycgKyBpZEFjdGl2YXRvciArICcvJyArIHF1aXpJZCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCIpIHtcblxuICAgICAgICAgICAgZmV0Y2goJy9xdWVzdGlvbi9kZWxldGUvJyArIGlkQWN0aXZhdG9yICsgJy8nICsgcXVpeklkLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=