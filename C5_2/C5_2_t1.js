// Задание 1
// Вам дана заготовка и результат, который вы должны получить.
// Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

// XML, который мы будем парсить
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

/* Этап 1. Подготовка данных */
// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

/* Этап 2. Получение данных */
// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector('list');

const studentNode_1 = listNode.getElementsByTagName('student')[0];
const nameNode_1 = studentNode_1.querySelector('name');
const firstNameNode_1 = nameNode_1.querySelector('first').innerHTML;
const secondNameNode_1 = nameNode_1.querySelector('second').innerHTML;
const ageNode_1 = Number(studentNode_1.querySelector('age').innerHTML);
const profNode_1 = studentNode_1.querySelector('prof').innerHTML;
const langAttr_1 = nameNode_1.getAttribute('lang');

const studentNode_2 = listNode.getElementsByTagName('student')[1];
const nameNode_2 = studentNode_2.querySelector('name');
const firstNameNode_2 = nameNode_2.querySelector('first').innerHTML;
const secondNameNode_2 = nameNode_2.querySelector('second').innerHTML;
const ageNode_2 = Number(studentNode_2.querySelector('age').innerHTML);
const profNode_2 = studentNode_2.querySelector('prof').innerHTML;
const langAttr_2 = nameNode_2.getAttribute('lang');

// Формирование объекта
const arr = [
    { name: (firstNameNode_1 + ' ' + secondNameNode_1), age: ageNode_1, prof: profNode_1, lang: langAttr_1 },
    { name: (firstNameNode_2 + ' ' + secondNameNode_2), age: ageNode_2, prof: profNode_2, lang: langAttr_2 },
]

const dataXML = {}
dataXML.list = arr
console.log("Res XML: ", dataXML)

