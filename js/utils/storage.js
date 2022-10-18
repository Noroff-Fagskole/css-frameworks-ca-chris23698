const tokenKey = "token";
const userKey = "user";

function saveToken(token) {
    saveToStorage(tokenKey, token);
}

function getToken() {
    return getFromStorage(tokenKey);
}

function saveUser(user) {
    saveToStorage(userKey, user);
}

function getUserName() {
    const user = getFromStorage(userKey);
    if (userKey) {
        return user.name
    } else {
        return null;
    }
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value); // convert to JS
    } else {
        return []
    }
}
function clearStorage() {
    localStorage.clear();
}

export {getToken, saveToken, saveUser, getUserName, clearStorage}