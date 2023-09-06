// Задание 1
// Вам дана заготовка и результат, который вы должны получить.
// Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

// Решение, если элементов (student) больше двух

const xmlString = `
    <list>
      <student>
        <name lang="en">
          <first>Ivan</first>
          <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
      </student>
      <student>
        <name lang="ru">
          <first>Петр</first>
          <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
      </student>
    </list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const nameNode = listNode.querySelector("name");
// получаем данные из атрибутов
const langAttr = nameNode.getAttribute("lang");

// записываем данные
const result = Array.from(listNode.querySelectorAll("student")).map(
    (student) => {
        return {
            name: `${student.querySelector("first").textContent} ${
                student.querySelector("second").textContent
            }`,
            age: Number(student.querySelector("age").textContent),
            prof: `${student.querySelector("prof").textContent}`,
            lang: langAttr,
        };
    }
);

console.log("Res XML (alternative): ", result);
