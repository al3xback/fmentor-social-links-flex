const formEl = document.querySelector('.form');
const emailInputEl = document.querySelector('.form__control--email');
const errorMsgEl = document.querySelector('.error-message');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validateEmail = () => {
	const enteredEmail = emailInputEl.value.trim();
	const isEmailEmpty = enteredEmail.length === 0;
	const isEmailValid = emailRegex.test(enteredEmail);

	if (isEmailEmpty) {
		errorMsgEl.textContent =
			'Whoops! It looks like you forgot to add your email';
		emailInputEl.classList.add('invalid');
	} else if (!isEmailValid) {
		errorMsgEl.textContent = 'Please provide a valid email address';
		emailInputEl.classList.add('invalid');
	} else {
		errorMsgEl.textContent = '';
		emailInputEl.classList.remove('invalid');
	}
};

formEl.addEventListener('submit', (event) => {
	event.preventDefault();

	validateEmail();
});

emailInputEl.addEventListener('input', () => {
	validateEmail();
});
