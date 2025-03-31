const firebaseConfig = {

	apiKey: "AIzaSyA7lZjafzHZuQfRq8uMQvcrrwcQcvn5qQY",

	authDomain: "student-survey-86b47.firebaseapp.com",

	databaseURL: "https://student-survey-86b47-default-rtdb.firebaseio.com",

	projectId: "student-survey-86b47",

	storageBucket: "student-survey-86b47.appspot.com",

	messagingSenderId: "1052089126885",

	appId: "1:1052089126885:web:d90ce51fb130729511690c"

};

firebase.initializeApp(firebaseConfig);

const surveryFormDB = firebase.database().ref(survey);

document.getElementById('surveyForm').addEventListener("submit", submitForm);

function submitForm(e) {
	e.preventDefault();

	let question1 = getElementVal('question1');
	let question2 = getElementVal('question2');

	saveSurvey(question1, question2);

	document.getElementById('surveyForm').reset();

	document.getElementById('success-msg').style.display = 'block';
}

const saveSurvey = (question_1, question_2) => {
	let newSurveyForm = surveryFormDB.push();

	newSurveyForm.set({
		question_1: question_1,
		question_2: question_2,
	})
};

const getElementVal = (id) => {
	return document.getElementById(id).value;
};