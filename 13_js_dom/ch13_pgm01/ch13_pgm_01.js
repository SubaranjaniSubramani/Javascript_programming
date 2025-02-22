
const firstParagraph = document.querySelector("p");
console.log(firstParagraph);


const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");
const para4 = document.querySelector("#para4");

console.log(para1, para2, para3, para4);

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);


paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});


para4.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur et distinctio dolorem. Repellat, accusantium cum!';


paragraphs[0].setAttribute("id", "id1");
paragraphs[0].setAttribute("class", "first");

paragraphs[1].id = "id2";
paragraphs[1].className = "second";

paragraphs[2].id = "id3";
paragraphs[2].classList.add("third");

paragraphs[3].id = "id4";
paragraphs[3].classList.add("fourth");

// Change style of each paragraph
paragraphs[0].style.color = 'blue';
paragraphs[0].style.backgroundColor = 'lightgray';
paragraphs[0].style.border = '1px solid black';
paragraphs[0].style.fontSize = '20px';
paragraphs[0].style.fontFamily = 'Arial';

paragraphs[1].style.color = 'blue';
paragraphs[1].style.backgroundColor = 'lightgray';
paragraphs[1].style.border = '1px solid black';
paragraphs[1].style.fontSize = '20px';
paragraphs[1].style.fontFamily = 'Arial';

paragraphs[2].style.color = 'blue';
paragraphs[2].style.backgroundColor = 'lightgray';
paragraphs[2].style.border = '1px solid black';
paragraphs[2].style.fontSize = '20px';
paragraphs[2].style.fontFamily = 'Arial';

paragraphs[3].style.color = 'blue';
paragraphs[3].style.backgroundColor = 'lightgray';
paragraphs[3].style.border = '1px solid black';
paragraphs[3].style.fontSize = '20px';
paragraphs[3].style.fontFamily = 'Arial';


paragraphs.forEach((paragraph, index) => {
    if (index % 2 === 0) { 
        paragraph.style.color = 'green';
    } else { 
        paragraph.style.color = 'red';
    }
});


paragraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Paragraph ${index + 1}`;
    paragraph.id = `newId${index + 1}`;
    paragraph.className = `newClass${index + 1}`;
});