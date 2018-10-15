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

        // if (e.target.className === "btn btn-outline-success btn-sm" ||
        //     e.target.className === "btn btn-outline-danger btn-sm") {
        //     if (confirm("Are you sure?")) {
        //         var idActivator = e.target.getAttribute('data-id');
        //
        //         fetch('/quiz/' + idActivator + '/reactive', {
        //             method: 'POST'
        //         }).then(res => window.location.reload());
        //     }
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmI3YjMzMmFmODY3M2FiNjJlNTEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuY3NzPzc3Y2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicXVpeiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VyIiwicmVwbHkiLCJjb250cm9sIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJjb25maXJtIiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImFuc3dlciIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNoYW5nZSIsInF1aXpOYW1lIiwicmVzcG9uc2UiLCJidXR0b24iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdGF0dXMiLCJpbm5lckhUTUwiLCJxdWl6SWQiLCJpZEFjdGl2YXRvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBLHlDOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPQSxDQUFDLDRDQUFSOztBQUVBO0FBQ0E7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QixXQUF0QixHQUFvQyxHQUFwQyxHQUEwQ0QsTUFBaEQsRUFBd0Q7QUFDcERoQix3QkFBUTtBQUQ0QyxhQUF4RCxFQUVHQyxJQUZILENBRVE7QUFBQSx1QkFBT0MsT0FBT0MsUUFBUCxDQUFnQkMsTUFBaEIsRUFBUDtBQUFBLGFBRlI7QUFHSDtBQUNKLEtBNUJEO0FBNkJILEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvYXBwLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJiN2IzMzJhZjg2NzNhYjYyZTUxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9jc3MvYXBwLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9hc3NldHMvY3NzL2FwcC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5yZXF1aXJlKCcuLi9jc3MvYXBwLmNzcycpO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIHJlcXVpcmUgaXQuXG4vLyB2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5jb25zdCBxdWl6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWl6XCIpO1xuY29uc3QgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcnNcIik7XG5jb25zdCByZXBseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVwbGllc1wiKTtcbmNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyb2xcIik7XG5cbmlmICh1c2VyKSB7XG4gICAgdXNlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYnRuIGJ0bi1kYW5nZXIgZGVsZXRlLXVzZXJcIikge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgICAgICAgICBmZXRjaCgnL3VzZXIvJyArIGlkLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuaWYgKHF1aXopIHtcbiAgICBxdWl6LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICAgICAgICAgIGZldGNoKCcvcXVpei9kZWxldGUvJyArIGlkLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gMC8qd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKi8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc21cIiB8fFxuICAgICAgICAvLyAgICAgZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCIpIHtcbiAgICAgICAgLy8gICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlP1wiKSkge1xuICAgICAgICAvLyAgICAgICAgIHZhciBpZEFjdGl2YXRvciA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgIGZldGNoKCcvcXVpei8nICsgaWRBY3RpdmF0b3IgKyAnL3JlYWN0aXZlJywge1xuICAgICAgICAvLyAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAvLyAgICAgICAgIH0pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9KVxufVxuXG5pZiAocmVwbHkpIHtcbiAgICByZXBseS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYnRuIGJ0bi1zdWNjZXNzXCIpIHtcbiAgICAgICAgICAgIHZhciBhbnN3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYW5zd2VyXCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJhbnN3ZXJcIl06Y2hlY2tlZCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2Vyc1wiKTtcbiAgICAgICAgICAgIHZhciBxdWl6TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICAgICAgZmV0Y2goJy9jaGVjay8nICsgaWQgKyAnLycgKyBhbnN3ZXIgKyBcIi9cIiArIHF1aXpOYW1lLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNyZXQtYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1sZ1wiO1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBcIkNPUlJFQ1RcIjtcblxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuaW5uZXJIVE1MID0gYW5zd2VyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1kYW5nZXIgYnRuLWxnXCI7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IFwiSU5DT1JSRUNUXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmlubmVySFRNTCA9IGFuc3dlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmlmIChjb250cm9sKSB7XG4gICAgY29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIikge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgICAgICAgICBmZXRjaCgnL3F1ZXN0aW9uLycgKyBpZCArICcvZGVsZXRlJywge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcXVpeklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWl6SWRcIikuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc21cIikge1xuICAgICAgICAgICAgdmFyIGlkQWN0aXZhdG9yID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgICAgIGZldGNoKCcvcXVlc3Rpb24vYWN0aXZlLycgKyBpZEFjdGl2YXRvciArICcvJyArIHF1aXpJZCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCIpIHtcbiAgICAgICAgICAgIHZhciBpZEFjdGl2YXRvciA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgICAgICBmZXRjaCgnL3F1ZXN0aW9uL2RlbGV0ZS8nICsgaWRBY3RpdmF0b3IgKyAnLycgKyBxdWl6SWQsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==