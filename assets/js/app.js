/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');

const user = document.getElementById("users");
const quiz = document.getElementById("quiz");

if (user) {
    user.addEventListener("click", e => {
        if (e.target.className === "btn btn-danger delete-user") {
            if (confirm("Are you sure?")) {
                var id = e.target.getAttribute('data-id');

                fetch('/user/' + id, {
                    method: 'DELETE'
                }).then(res => window.location.reload());
            }
        }
    })
}

if (quiz) {
    quiz.addEventListener("click", e => {
        if (e.target.className === "btn btn-outline-secondary btn-sm") {
            if (confirm("Are you sure?")) {
                var id = e.target.getAttribute('data-id');

                fetch('/quiz/delete/' + id, {
                    method: 'POST'
                }).then(res => window.location.reload());
            }
        }

        if (e.target.className === "btn btn-outline-success btn-sm" ||
            e.target.className === "btn btn-outline-danger btn-sm") {
            if (confirm("Are you sure?")) {
                var idActivator = e.target.getAttribute('data-id');

                fetch('/quiz/reactive/' + idActivator, {
                    method: 'POST'
                }).then(res => window.location.reload());
            }
        }
    })
}
