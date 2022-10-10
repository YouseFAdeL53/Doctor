let myClick = document.querySelector(".edit-btn");
let myTable = document.querySelector(".table");
let table = document.getElementById("example");


console.log(table)


myClick.addEventListener("click", function () {
  myTable.classList.toggle("show");
  table.classList.toggle("show");
  if (myClick.innerHTML == "عرض") {
    myClick.innerHTML = "اخفاء"
  } else if (myClick.innerHTML === "اخفاء") {
    myClick.innerHTML = "عرض";
  }
});

