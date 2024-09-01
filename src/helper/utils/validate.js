export const englishOnly = (text) => {
    const englishRegex = /[^a-zA-Z0-9!@#$%^&*(),.?":{}|<>]/g;
    return text.replace(englishRegex, '');
};