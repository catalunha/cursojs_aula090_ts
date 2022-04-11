import isEmail from 'validator/lib/isEmail';
const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualsPasswords(password, password2);
  if (shouldSendform(this)) {
    // form.submit();
    alert('Enviando form...');
  }
});
function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
}
showErrorMessage(username, 'msg qq');
function checkForEmptyFields(...inputs: HTMLInputElement[]) {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Este campo nao pode ser vazio');
  });
}
function checkEmail(email: HTMLInputElement) {
  if (!isEmail(email.value)) showErrorMessage(email, 'Email inválido...');
}
function checkEqualsPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas nao conferem');
    showErrorMessage(password2, 'Senhas nao conferem');
  }
}
function shouldSendform(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));
  return send;
}
