const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

const conditionValue = (id) => {
    const { value } = display;
    if (id == "=") return eval(value);
    if (id === "ac") return "";
    if (id == "de") return value.slice(0, -1);
    return value + id;
};

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        display.value = conditionValue(btn.id);
    });
});
