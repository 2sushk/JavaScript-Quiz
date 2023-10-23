const quizData = [{
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<scripting>",
        c: "<script>",
        d: "<javaScript>",
        correct: "c",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "the <head> section",
        b: " the <body> section",
        c: "both",
        d: "none",
        correct: "c",
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        a: "demo.innerHTML = 'Hello World!';",
        b: "document.getElement('p').innerHTML = 'Hello World!';",
        c: "document.getElementByName('p').innerHTML = 'Hello World!';",
        d: "document.getElementById('demo').innerHTML = 'Hello World!';",
        correct: "d",
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: "<script name='xxx.js'>",
        b: "<script src='xxx.js'>",
        c: "<script href='xxx.js'>",
        d: "none",
        correct: "b",
    },
    {
        question: "The external JavaScript file must contain the <script> tag.?",
        a: "True",
        b: "False ",
        c: "both",
        d: "none",
        correct: "b",
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function myFunction()",
        b: "function:myFunction()",
        c: "function = myFunction()",
        d: "none",
        correct: "a",
    },
    {
        question: "How do you call a function named 'myFunction'?",
        a: "call myFunction()",
        b: "myFunction()",
        c: "call function myFunction()",
        d: "none",
        correct: "b",
    },
    {
        question: "How does a WHILE loop start?",
        a: "while i = 1 to 10",
        b: "while i = 1 to 10",
        c: "while (i <= 10)",
        d: "none",
        correct: "c",
    },
    {
        question: "How can you add a comment in a JavaScript?",
        a: "<!--This is a comment-->",
        b: "This is a comment",
        c: "//This is a comment",
        d: "none",
        correct: "c",
    },

       {
        question: "How can you detect the client's browser name?",
        a: "navigator.appName  ",
        b: "browser.name",
        c: "client.navName",
        d: "none",
        correct: "a",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Thank you so much for taking Quiz!, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);