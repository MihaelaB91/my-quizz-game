
// Create the Quiz questions
(function () {
    const myQuestions = [
        {
            question: "What type of boats did the Vikings use when exploring and raiding??",
            answers: {
                a: "Deck Boats",
                b: "Bowrider Boats",
                c: "Longships",
                d: "Cruise ship"
            },
            correctAnswer: "c"
        },
        {
            question: "In Ancient Rome, what was a thermae??",
            answers: {
                a: "Sauna",
                b: "Thermal river",
                c: "Public baths",
                d: "Shower"
            },
            correctAnswer: "c"
        },
        {
            question: "Who discovered penicillin?",
            answers: {
                a: "Rosalind Franklin",
                b: "Alexander Fleming",
                c: "Marie Curie",
                d: "Rachel Carson"
            },
            correctAnswer: "b"
        },
        {
            question: "Which 3 countries made up the Triple Entente in World War I?",
            answers: {
                a: "Great Britain, France & Germany",
                b: "Germany, China, USA",
                c: "Germany, Belgium , France",
                d: "Great Britain, France & Russia"
            },
            correctAnswer: "d"
        },
        {
            question: "Who was the first human to travel into space?",
            answers: {
                a: "Yuri Gagarin",
                b: "John Glenn",
                c: "Scott Kelly",
                d: "Neil Amstrong"
            },
            correctAnswer: "a"
        },
        {
            question: "Who was the first President of the United States?",
            answers: {
                a: "James Monroe",
                b: "Thomas Jefferson",
                c: "John Adams",
                d: "George Washington"
            },
            correctAnswer: "d"
        },
        {
            question: "Which English king was defeated at the Battle of Hastings?",
            answers: {
                a: "George IV",
                b: "George III",
                c: "Alfred the Great",
                d: "Harold Godwinson"
            },
            correctAnswer: "d"
        },
        {
            question: "How many wives did Henry VIII have?",
            answers: {
                a: "6",
                b: "10",
                c: "5",
                d: "3"
            },
            correctAnswer: "a"
        },
        {
            question: "Francisco Franco ruled which European country from 1939 to 1975?",
            answers: {
                a: "France",
                b: "Spain",
                c: "Romania",
                d: "Italy"
            },
            correctAnswer: "b"
        },
        {
            question: "What language was spoken in Ancient Rome??",
            answers: {
                a: "Latin",
                b: "Tamil",
                c: "Sanskrit",
                d: "Greek"
            },
            correctAnswer: "a"
        },
    ];

    // Store the HTML output for each question and the list of answer choices and for each available answer
    function buildQuiz() {
        const output = [];
        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answers = [];
            for (letter in currentQuestion.answers) {

                // Add an HTML radio button
                answers.push(
                    `<label>
			   <input type="radio" name="question${questionNumber}" value="${letter}">
				${letter} :
				${currentQuestion.answers[letter]}
			 </label>`
                );
            }