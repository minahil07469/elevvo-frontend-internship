const form = document.querySelector(".form");
const form_container = document.querySelector(".form-container");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const subInput = document.querySelector(".sub-input");
const login = document.querySelector(".login");
const textArea=document.querySelector(".textarea")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm();
});

function submitForm() {
    if (nameInput.value === '' || emailInput.value === '' || subInput.value === '' || textArea==='') {
        return;
    }

    alert("Form submitted successfully 🎉")
    nameInput.value = '';
    emailInput.value = '';
    subInput.value = '';
}


