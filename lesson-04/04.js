/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
  let doubleChar = [];
  for (let i = 0; i < str.length; i++) {
    let char; // Переменная для хранения символа
    //   str = str[i];
    char = str[i] + str[i];
      doubleChar.push(char);
      doubleChar.join("");
  }
  let doubleCharJoin = doubleChar.join("");
  return doubleCharJoin;
}
