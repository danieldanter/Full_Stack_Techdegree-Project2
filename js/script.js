/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/




/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

var picPerPage = 9;

function showPage(data,page){

  console.log("page");
  console.log(page);
   items_page = picPerPage;

   start = (page  * items_page) - items_page;
   end  = (page * items_page);

   ul = document.querySelector(".student-list");
   ul.innerHTML = "";

   var inner ="";

   for (let i = start; i < end; i++) {

      if(data[i]!=null){
      inner  += `<li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
          <h3>${data[i].name.first} ${data[i].name.second}</h3>
          <span class="email">${data[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${data[i].registered.date}</span>
        </div>
      </li>`
      }
    } 

    ul.innerHTML =inner;

}


showPage(data,2)



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  

   numOfPages = Math.ceil(list.length / picPerPage);

   ul = document.querySelector(".link-list");
   ul.innerHTML = "";

   var inner ="";

   

   for (let i = 1; i <= numOfPages; i++) {

      inner  += `<li>
                  <button type="button">${i}</button>
               </li>`
      

    } 
    

    ul.innerHTML =inner;
    
    var btnBefore =document.querySelector(".link-list > li button")
    btnBefore.classList.add("active");
    console.log(btnBefore.innerText);
      //showPage(data,parseInt(btnBefore.innerText));
      
    var btnNow;

    ul.addEventListener("click", function(e) {

      console.log("click");
      btnNow = e.target;
      btnNow.classList.add("active");
      btnBefore.classList.remove("active");
      console.log(btnNow.innerText);
      showPage(data,parseInt(btnNow.innerText));
      btnBefore = btnNow;
      
    }); 

  
}

// Call functions
showPage(data,1)
addPagination(data);


