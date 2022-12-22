// all variables
var filterInput = document.getElementById("filterInput");
var ul = document.getElementById("names");
var li = ul.querySelectorAll("li.collection-item");

//event listener
filterInput.addEventListener("keyup", () => {
    let filterValue = filterInput.value.toUpperCase();
    li.forEach((item) => {
        let a = item.getElementsByTagName("a")[0];

        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1)
            item.style.display = "";
        else item.style.display = "none";
    });
});
