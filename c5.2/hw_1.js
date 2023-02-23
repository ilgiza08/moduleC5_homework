
const parser = new DOMParser();

const xmlText = `
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

const xmlDOM = parser.parseFromString(xmlText, "text/xml");

const listNode = xmlDOM.querySelector("list");
const firstNode = xmlDOM.querySelector("first");
const secondNode = xmlDOM.querySelector("second");
const ageNode = xmlDOM.querySelector("age");
const profNode = xmlDOM.querySelector("prof");
const nameNode = xmlDOM.querySelector("name");
const studentNode = xmlDOM.querySelectorAll("student");
// console.log("xml", firstNode);

const langAtr = nameNode.getAttribute('lang');
//console.log('atr', langAtr);

const result = [];

studentNode.forEach((obj) => {
    result.push({
      name: firstNode.textContent + " " + secondNode.textContent,
      age: Number(ageNode.textContent),
      prof: profNode.textContent,
      lang: langAtr
  })
});



console.log({list: result});

