{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const questions = [\
    \{\
        question: "What is the synonym of 'ephemeral'?",\
        choices: ["Temporary", "Permanent", "Lasting", "Immortal"],\
        answer: 0,\
        difficulty: 1\
    \},\
    \{\
        question: "What is the next number in the sequence: 2, 6, 12, 20, 30, ___?",\
        choices: ["42", "40", "36", "32"],\
        answer: 0,\
        difficulty: 1\
    \},\
    \{\
        question: "Which one of the following is the odd one out?",\
        choices: ["7", "11", "15", "19"],\
        answer: 2,\
        difficulty: 2\
    \},\
    \{\
        question: "If a cube has 12 edges and 6 faces, how many total corner points does it have?",\
        choices: ["4", "6", "8", "10"],\
        answer: 2,\
        difficulty: 1\
    \},\
    \{\
        question: "Which one of the following comes next in the sequence: A, C, F, J, O, ___?",\
        choices: ["P", "R", "M", "T"],\
        answer: 1,\
        difficulty: 2\
    \},\
    \{\
        question: "Solve for x: 5/2 * x - 7 = 13",\
        choices: ["4", "8", "10", "20"],\
        answer: 1,\
        difficulty: 2\
    \},\
    \{\
        question: "Which word is the odd one out?",\
        choices: ["Shakespeare", "Dickens", "Wilde", "Newton"],\
        answer: 3,\
        difficulty: 2\
    \},\
    \{\
        question: "What comes next in the series: 1, 4, 9, 16, 25, ___?",\
        choices: ["36", "30", "40", "45"],\
        answer: 0,\
        difficulty: 1\
    \},\
    \{\
        question: "Which of the following fits the sequence? 2, 3, 5, 8, 12, ___?",\
        choices: ["15", "18", "20", "17"],\
        answer: 3,\
        difficulty: 2\
    \},\
    \{\
        question: "Which one of the following does not belong to the group?",\
        choices: ["Circle", "Square", "Triangle", "Sphere"],\
        answer: 3,\
        difficulty: 1\
    \},\
    \{\
        question: "A train travels 60 miles in 1 hour and 30 minutes. What is the average speed of the train in miles per hour?",\
        choices: ["40", "45", "50", "55"],\
        answer: 0,\
        difficulty: 3\
    \},\
    \{\
        question: "What is the next number in the series: 3, 9, 27, 81, ___?",\
        choices: ["243", "256", "100", "200"],\
        answer: 0,\
        difficulty: 1\
    \},\
    \{\
        question: "Find the missing number: 3, 6, 11, 18, 27, ___?",\
        choices: ["36", "38", "40", "42"],\
        answer: 1,\
        difficulty: 2\
    \},\
    \{\
        question: "What is the next image in the pattern?",\
        choices: ["Black square", "White square", "Black circle", "White circle"],\
        answer: 0,\
        difficulty: 2\
    \},\
    \{\
        question: "A car travels 200 miles on 10 gallons of fuel. How many miles does the car travel on 1 gallon of fuel?",\
        choices: ["20", "25", "30", "35"],\
        answer: 1,\
        difficulty: 1\
    \},\
    \{\
        question: "If all roses are flowers and some flowers fade quickly, can we deduce that some roses fade quickly?",\
        choices: ["Yes", "No", "Not enough information", "Impossible to know"],\
        answer: 2,\
        difficulty: 3\
    \},\
    \{\
        question: "What is the next number in the series? 1, 4, 10, 20, 35, ___?",\
        choices: ["50", "45", "51", "63"],\
        answer: 0,\
        difficulty: 2\
    \},\
    \{\
        question: "Which word is most opposite in meaning to 'benevolent'?",\
        choices: ["Kind", "Malevolent", "Generous", "Loving"],\
        answer: 1,\
        difficulty: 1\
    \},\
    \{\
        question: "What is the next number in the series? 1, 4, 9, 16, 25, ___?",\
        choices: ["36", "30", "40", "45"],\
        answer: 0,\
        difficulty: 1\
    \},\
    \{\
        question: "Which of the following is most logically consistent with the statement \'91All men are mortal, Socrates is a man\'92?",\
        choices: ["Socrates is immortal", "Socrates is mortal", "Socrates is a philosopher", "None of the above"],\
        answer: 1,\
        difficulty: 3\
    \}\
];\
\
let score = 0;\
\
function startTest() \{\
    const dob = document.getElementById('dob').value;\
    if (!dob) \{\
        alert('Please enter your date of birth.');\
        return;\
    \}\
    document.getElementById('welcome-page').style.display = 'none';\
    document.getElementById('test-page').style.display = 'block';\
    loadQuestions();\
\}\
\
function loadQuestions() \{\
    const form = document.getElementById('test-form');\
    questions.forEach((q, index) => \{\
        const questionHTML = `\
            <div class="question">\
                <p>$\{q.question\}</p>\
                $\{q.choices.map((choice, i) => `\
                    <label>\
                        <input type="radio" name="q$\{index\}" value="$\{i\}">\
                        $\{choice\}\
                    </label>\
                `).join('')\}\
            </div>\
        `;\
        form.innerHTML += questionHTML;\
    \});\
\}\
\
function submitTest() \{\
    const form = document.getElementById('test-form');\
    let totalScore = \
}
