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

const quiz = document.getElementById("quiz");
const user = document.getElementById("users");
const reply = document.getElementById("replies");
const control = document.getElementById("control");

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
                }).then(res => 0/*window.location.reload()*/);
            }
        }
    })
}

if (reply) {
    reply.addEventListener("click", e => {
        if (e.target.className === "btn btn-success") {
            var answer = document.querySelector('input[name="answer"]:checked').value;
            var id = document.querySelector('input[name="answer"]:checked').getAttribute('data-id');
            var change = document.getElementById("answers");
            var quizName = document.getElementById("name").getAttribute('data-id');

            fetch('/check/' + id + '/' + answer + "/" + quizName, {
                method: 'POST'
            }).then(function(response) {
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
    })
}

if (control) {
    control.addEventListener("click", e => {
        if (e.target.className === "btn btn-outline-secondary btn-sm") {
            if (confirm("Are you sure?")) {
                var id = e.target.getAttribute('data-id');

                fetch('/question/' + id + '/delete', {
                    method: 'POST'
                }).then(res => window.location.reload());
            }
        }

        var quizId = document.getElementById("quizId").getAttribute('data-id');

        if (e.target.className === "btn btn-outline-success btn-sm") {
            var idActivator = e.target.getAttribute('data-id');

            fetch('/question/active/' + idActivator + '/' + quizId, {
                method: 'DELETE'
            }).then(res => window.location.reload());
        }

        if (e.target.className === "btn btn-outline-danger btn-sm") {
            var idActivator = e.target.getAttribute('data-id');

            fetch('/question/delete/' + idActivator + '/' + quizId, {
                method: 'DELETE'
            }).then(res => window.location.reload());
        }
    })
}