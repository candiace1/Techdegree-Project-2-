/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const studentList = document.querySelector('ul');
const singleStudent = studentList.children;
const studentsPerPage = 10;

//Function to determine # of pages based on # of students
function numberOfPages() {
let pages = Math.ceil(eachStudent.length / studentsPerPage);
return pages;

// function that determines how many pages will be created based on number of studentsPerPage

const totalPages = () => {
   let pageNumbers = Math.ceil(singleStudent.length / studentsPerPage);
   return pageNumbers;
}

// function that displays 10 students per page

const tenPeople = () => {
   for (let i = 0; i < singleStudent.length; i++) {
       if (i < studentsPerPage) {
          singleStudent[i].style.display= '';
       } else {
           singleStudent[i].style.display= 'none';
       }
   }
}
}

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
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
totalPages();
tenPeople();
appendPageLinks();