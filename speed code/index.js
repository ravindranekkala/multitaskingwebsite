




let timer = document.getElementById("timer");
let quote = document.getElementById("quoteDisplay");
let text = document.getElementById("quoteInput");
let para = document.getElementById("result");
let btn1 = document.getElementById("submitBtn");
let btn2 = document.getElementById("resetBtn");
let spin = document.getElementById("spinner");
let container = document.getElementById("speedTypingTest");
let count = 0;
let data;
let setTimer;

function reset() {

    spinner.classList.remove("d-none");
    container.classList.add("d-none");

    text.textContent = "";
    setTimer = setInterval(function() {
        count += 1;
        timer.textContent = count;
    }, 1000);

    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            data = json.content;

            spinner.classList.add("d-none");
            container.classList.remove("d-none");

            quote.textContent = data;
        });
}
reset();
btn2.onclick = function() {
    clearInterval(setTimer);
    para.textContent = "";
    timer.textContent = 0;
    count = 0;
    reset();

};
btn1.onclick = function() {

    clearInterval(setTimer);

    if (text.value === data) {
        para.textContent = " you did in " + count + " seconds";
    } else {
        para.textContent = " you typed incorrect sentence";
    }
};