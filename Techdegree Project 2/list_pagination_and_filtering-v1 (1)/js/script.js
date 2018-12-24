/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const studentList = document.querySelectorAll('.student-item');

// function that displays 10 students per page


function tenPeople (studentList, page) {
   for (let i = 0; i < studentList.length; i++) {
      if(i >= (page * 10) - 10 && i < (page * 10)){
          studentList[i].style.display= '';
       } else {
           studentList[i].style.display= 'none';
       }
   }
}
tenPeople(studentList, 1);


function pageButtons(studentList){
   const buttonDiv = document.createElement('div');
   buttonDiv.className = 'buttons';
   let ul = document.createElement( "ul" );
   let li = document.createElement('li');
   const a = document.createElement('a');
 
   li.appendChild(a);
   ul.appendChild(li);
 const currentpage = document.getElementsByClassName('active');
   const pageNumber = Math.max(studentList.length / 10);
   for(let i = 0; i < pageNumber; i++){
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
     })
   }
   const mainPage = document.querySelector('main');
   mainPage.appendChild(ul);
 }//end pageButtons


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   ()
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.


