const form = document.querySelector(".login-form");

form.addEventListener("submit", formValue);

function formValue(elem) {
    elem.preventDefault();
    const { email, password } = elem.currentTarget.elements;

    if (!email.value.trim() || !password.value.trim()) {
        alert("Всі поля повині бути заповнені");

    } else {
        const formData = {
            email: email.value,
            password: password.value,

        };
        console.log(formData);
        elem.currentTarget.reset();
    }
}
