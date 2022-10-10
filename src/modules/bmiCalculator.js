export const calculateBmiValue = (weight, height) => {
    [weight, height] = [Number(weight), Number(height)];

    return Number((weight / Math.pow(height / 100, 2)).toFixed(1));
};