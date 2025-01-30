 document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let message = document.getElementById("message").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("emailError").textContent = "";

    if (name === "") {
    document.getElementById("nameError").textContent = "Ім'я є обов'язковим";
    isValid = false;
}

    if (message.length < 5) {
    document.getElementById("messageError").textContent = "Повідомлення має містити не менше 5 символів";
    isValid = false;
}

    let phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent = "Номер телефону повинен починатися з +380 та містити 9 цифр";
    isValid = false;
}

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Введіть коректний email";
    isValid = false;
}

    if (isValid) {
    console.log("Ім'я:", name);
    console.log("Повідомлення:", message);
    console.log("Телефон:", phone);
    console.log("Email:", email);
    alert("Форма успішно відправлена!");
    document.getElementById("contactForm").reset();
}
});