/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// selects entire list of students
const studentList = document.querySelectorAll('.student-item');


// function that displays 10 students per page

function tenPeople (studentList, page){
 for (let i = 0; i < studentList.length; i++) {
     if (i >= (page * 10) - 10 && i < (page * 10)){
        studentList[i].style.display= '';
     } else {
         studentList[i].style.display= 'none';
     }
 }
}
tenPeople(studentList, 1);


function pageButtons(studentList){
 //const currentPage = document.getElementsByClassName('active');
 const pageNumber = Math.max(studentList.length / 10);
 const li = document.createElement('li');
 const ul = document.createElement('ul');
 const buttonDiv = document.createElement('div');
  buttonDiv.className = 'pagination';
 const mainPage = document.querySelector('.page');
 mainPage.appendChild(buttonDiv);
 buttonDiv.appendChild(ul);
 console.log(buttonDiv);

 for(let i = 0; i < pageNumber; i++){
   const a = document.createElement('a');
   ul.appendChild(li);
   li.appendChild(a);
   a.textContent = i + 1;

   a.addEventListener('click', (event)=> {
     let click = event.target;
     if(click.className = 'active'){
       tenPeople(studentList, click.textContent);
       click.classList.remove('active');
     }
     else {
       showPage(studentList, currentPage);
     }
   });
   ul.appendChild(li); //student-list .appendChild(li);
 }
}//end pageButtons
pageButtons(studentList);