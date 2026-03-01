let formData = { 
    email: "", 
    message: "" 
};

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener("input", (event) => {
    const { name, value } = event.target;
    
    formData[name] = value; 
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const finalEmail = formData.email.trim();
    const finalMessage = formData.message.trim();

    if (finalEmail === "" || finalMessage === "") {
        alert("Fill please all fields");
        return;
    }

    console.log({
        email: finalEmail,
        message: finalMessage
    });
    
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
});