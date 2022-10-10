export const getBmiType = (bmiValue) => {
    const bmiTypes = {
        Underweight: bmiValue < 18.5,
        Normal: bmiValue < 25,
        Overweight: bmiValue < 30,
        Obesity: bmiValue >= 30,
    };

    return Object.keys(bmiTypes).find((key) => bmiTypes[key]);
};