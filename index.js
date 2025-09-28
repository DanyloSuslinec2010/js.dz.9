function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(["Mango", "Poly", "Ajax"]);

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice("Hello world", 10));

function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped"));

function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + "...";
}

console.log(formatString("Short string"));
console.log(
  formatString(
    "This is a very long string that needs to be truncated to fit within forty characters"
  )
);

function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
}

console.log(checkForSpam("Latest spam offer"));
console.log(checkForSpam("Hello world"));

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введіть число:");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (isNaN(number)) {
    alert("Було введено не число, спробуйте ще раз");
    continue;
  }

  numbers.push(number);
} while (true);

if (numbers.length > 0) {
  for (let num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  }

  allLogins.push(login);
  return "Логін успішно доданий!";
}

// Тест
const logins = ["user1", "testuser", "login123"];
console.log(addLogin(logins, "abc"));
console.log(addLogin(logins, "user1"));
console.log(addLogin(logins, "newuser"));
console.log(logins);
