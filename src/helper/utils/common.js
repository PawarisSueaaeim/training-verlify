export const getCookies = (name) => {
    let cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split('=');
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
};

export const renderAgentList = (lists) => {
    if (!lists || lists.length === 0) {
        return 'All';
    }
    const agentFullname = lists?.map((agent) => `${agent.agent_name} ${agent.agent_lastname}, `);
    return agentFullname.join('\n ');
};

export function isPasswordValid(password) {
    // Check if the password has at least one special character
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
    const hasSpecialCharacter = specialCharacters.test(password);
  
    // Check if the password has a minimum length of 6 characters
    const hasMinimumLength = password.length >= 6;
  
    // Check if the password has at least one digit
    const hasDigit = /\d/.test(password);
  
    // Password is valid if it meets all conditions
    return hasSpecialCharacter && hasMinimumLength && hasDigit;
  }

export const sumValue = (data, prop) => {
    return data.reduce((acc, curr) => acc + curr[prop], 0);
};