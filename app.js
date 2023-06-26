// get UI variables
let btn = document.querySelector(".btn");
let inputText = document.getElementById("inputtext");
let ul = document.getElementById("parentList");

btn.addEventListener("click", addtodo);

function addtodo(e) {
  if (inputText.value === "") {
    alert("Enter a task");
  } else {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between mt-2";
    li.innerHTML = `
    <h3 class="flex-grow-1"> ${inputText.value} </h3>
    <button class="btn btn-warning mx-5" onclick="editlist(this)">Edit</button>
    <button class="btn btn-danger" onclick="removelist(this)">Remove</button>
    `;
    ul.appendChild(li);
  }

  inputText.value = "";
}

// remove
function removelist(e) {
  console.log(e.parentElement);
  e.parentElement.remove();
}

// edit
function editlist(currentelement) {
  if (currentelement.textContent == "Done") {
    currentelement.textContent = "Edit";
    let currentListName = currentelement.previousElementSibling.value;
    let currHeading = document.createElement("h3");
    currHeading.className = "flex-grow-1";
    currHeading.textContent = currentListName;
    currentelement.parentElement.replaceChild(
      currHeading,
      currentelement.previousElementSibling
    );
  } else {
    currentelement.textContent = "Done";
    console.log(currentelement.previousElementSibling);
    let currentListName = currentelement.previousElementSibling.textContent;
    let currInput = document.createElement("input");
    currInput.type = "text";
    currInput.placeholder = "Change Todo";
    currInput.className = "form-control";
    currInput.value = currentListName;

    currentelement.parentElement.replaceChild(
      currInput,
      currentelement.previousElementSibling
    );
  }
}
