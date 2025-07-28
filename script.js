const questions = [
    {
        question: "What is the synonym of 'ephemeral'?",
        choices: ["Temporary", "Permanent", "Lasting", "Immortal"],
        answer: 0,
        difficulty: 1
    },
    {
        question: "What is the next number in the sequence: 2, 6, 12, 20, 30, ___?",
        choices: ["42", "40", "36", "32"],
        answer: 0,
        difficulty: 1
    }
    // ✅ You can add more questions here (see previous answer for full list)
];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start-btn").addEventListener("click", startTest);
    document.getElementById("submit-btn").addEventListener("click", submitTest);
});

function startTest() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }

    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("test-page").style.display = "block";
    loadQuestions();
}

function loadQuestions() {
    const form = document.getElementById("test-form");
    form.innerHTML = '';

    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.choices.forEach((choice, i) => {
            div.innerHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${i}"> ${choice}
                </label>
            `;
        });
        form.appendChild(div);
    });
}

function submitTest() {
    let totalScore = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            totalScore += q.difficulty * 5; // More points for harder questions
        }
    });

    const estimatedIQ = 80 + totalScore;
    document.getElementById("test-page").style.display = "none";
    document.getElementById("result-page").style.display = "block";
    document.getElementById("iq-score").textContent = `Estimated IQ: ${estimatedIQ}`;
}
