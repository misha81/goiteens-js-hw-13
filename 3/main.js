const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const button = document.querySelector('#button');

const user = {
    name: "Misha",
    email: "example@gmail.com",
    password: "12345",

    login: function () {
        button.addEventListener("click", () => {
            if (this.email === emailInput.value && this.password === passwordInput.value) {
                console.log("Ви успішно ввійшли в акаунт!");
            } else if (this.email != emailInput.value && this.password != passwordInput.value) {
                console.log("Ви допустили помилку у email та password!");
            } else if (this.email != emailInput.value) {
                console.log("Ви допустили помилку у email!");
            } else if (this.password != passwordInput.value) {
                console.log("Ви допустили помилку у password!");
            }
        });        
    }
};

user.login();