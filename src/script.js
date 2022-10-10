// Import Modules
import { calculateBmiValue } from "./modules/bmiCalculator.js";
import { getBmiType } from "./modules/bmiType.js";

// Select HTML Elements
const formElement = document.querySelector("form");
const heightValueElement = document.querySelector("#height");
const weightValueElement = document.querySelector("#weight");
const headerResultElement = document.querySelector("#result").firstElementChild;
const bmiValueElement = document.querySelector("#bmi-value");
const bmiTypeElement = document.querySelector("#bmi-type");

// Set Submit Button Events
formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const [weight, height] = [weightValueElement.value, heightValueElement.value];
    const bmiValue = calculateBmiValue(weight, height);
    const bmiType = getBmiType(bmiValue);

    // Update Content
    headerResultElement.classList.remove("hidden");
    bmiValueElement.textContent = bmiValue;
	bmiTypeElement.textContent = bmiType;

    // Reset Input Field
    formElement.reset();
});