export const currency = (amount, minDigit = 0, maxDigit = 0) => {
    if (amount) return amount?.toLocaleString('en-US', { minimumFractionDigits: minDigit, maximumFractionDigits: maxDigit });
    if (amount === 0) return 0;
    return '';
};