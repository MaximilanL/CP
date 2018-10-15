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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDE3ZWViN2RkYjhmNmJhMDhhOTgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuY3NzPzc3Y2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWl6IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJjb25maXJtIiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImlkQWN0aXZhdG9yIiwicmVwbHkiLCJhbnN3ZXIiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJjaGFuZ2UiLCJxdWl6TmFtZSIsInJlc3BvbnNlIiwiYnV0dG9uIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3RhdHVzIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REEseUM7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O0FBT0E7QUFDQUEsbUJBQU9BLENBQUMsNENBQVI7O0FBRUE7QUFDQTs7QUFFQSxJQUFNQyxPQUFPQyxT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VCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QnZCLHNCQUFFQyxNQUFGLENBQVNDLFNBQVQsR0FBcUIsd0JBQXJCO0FBQ0FGLHNCQUFFQyxNQUFGLENBQVN1QixTQUFULEdBQXFCLFNBQXJCOztBQUVBUCwyQkFBT08sU0FBUCxHQUFtQlYsTUFBbkI7QUFDSCxpQkFMRCxNQUtPO0FBQ0hkLHNCQUFFQyxNQUFGLENBQVNDLFNBQVQsR0FBcUIsdUJBQXJCO0FBQ0FGLHNCQUFFQyxNQUFGLENBQVN1QixTQUFULEdBQXFCLFdBQXJCOztBQUVBUCwyQkFBT08sU0FBUCxHQUFtQlYsTUFBbkI7QUFDSDtBQUNKLGFBakJEO0FBa0JIO0FBQ0osS0ExQkQ7QUEyQkgsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9hcHAuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDE3ZWViN2RkYjhmNmJhMDhhOTgiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2Nzcy9hcHAuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL2Fzc2V0cy9jc3MvYXBwLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuY3NzJyk7XG5cbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gcmVxdWlyZSBpdC5cbi8vIHZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbmNvbnN0IHVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJzXCIpO1xuY29uc3QgcXVpeiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVpelwiKTtcblxuaWYgKHVzZXIpIHtcbiAgICB1c2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLWRhbmdlciBkZWxldGUtdXNlclwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICAgICAgICAgIGZldGNoKCcvdXNlci8nICsgaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5pZiAocXVpeikge1xuICAgIHF1aXouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLXNtXCIpIHtcbiAgICAgICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlP1wiKSkge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgICAgICAgICAgZmV0Y2goJy9xdWl6LycgKyBpZCArICcvZGVsZXRlJywge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbVwiIHx8XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIikge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkQWN0aXZhdG9yID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgICAgICAgICBmZXRjaCgnL3F1aXovJyArIGlkQWN0aXZhdG9yICsgJy9yZWFjdGl2ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgcmVwbHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcGxpZXNcIik7XG5cbmlmIChyZXBseSkge1xuICAgIHJlcGx5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidG4gYnRuLXN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgdmFyIGFuc3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJhbnN3ZXJcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImFuc3dlclwiXTpjaGVja2VkJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXJzXCIpO1xuICAgICAgICAgICAgdmFyIHF1aXpOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgICAgICBmZXRjaCgnL2NoZWNrLycgKyBpZCArICcvJyArIGFuc3dlciArIFwiL1wiICsgcXVpek5hbWUsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY3JldC1idXR0b25cIik7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID0gXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWxnXCI7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IFwiQ09SUkVDVFwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZS5pbm5lckhUTUwgPSBhbnN3ZXI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID0gXCJidG4gYnRuLWRhbmdlciBidG4tbGdcIjtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gXCJJTkNPUlJFQ1RcIjtcblxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuaW5uZXJIVE1MID0gYW5zd2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==