const btns = document.getElementsByClassName("start");
const path = [
    "./Quizsections/htmlquiz.html",
    "./Quizsections/cssquiz.html",
    "./Quizsections/javascriptquiz.html",
    "./Quizsections/microquiz.html",
    "./Quizsections/pythonquiz.html",
    "./Quizsections/c++quiz.html"
];

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        alert("Instructions:\n\n1. Read each question carefully before answering.\n2. Choose the best answer from the given options.\n3. There is a time limit, so try to answer promptly.\n4. Click 'Submit' after completing the quiz.\n\nGood luck!");
        window.location.href = path[i];
    });
}
