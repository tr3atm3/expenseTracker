const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const description = document.querySelector("#description");
const category = document.querySelector("#category");
const ul = document.querySelector("#ul");
let obj = {
  amount: amount.value,
  description: description.value,
  category: category.value,
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //saving the item in localStorage
  localStorage.setItem(description.value, JSON.stringify(obj));
  //creating an li list
  const li = document.createElement("li");
  li.innerHTML = amount.value + "-" + description.value + "-" + category.value;
  //creating the delete button
  const dlt = document.createElement("button");
  dlt.textContent = "Delete";
  dlt.classList.add("btn");
  dlt.classList.add("btn-primary");
  //delete btn functionality
  dlt.addEventListener("click", function (e) {
    e.preventDefault();
    const cur = e.target.parentElement;
    localStorage.removeItem(cur.firstChild.textContent.split("-")[1]);
    cur.style.display = "none";
  });
  //creating the edit button
  const edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.classList.add("btn");
  edit.classList.add("btn-primary");
  //edit functionality
  edit.addEventListener("click", function (e) {
    e.preventDefault();
    const cur = e.target.parentElement.textContent.split("-");
    amount.value = cur[0];
    description.value = cur[1];
    category.value = cur[2];

    localStorage.removeItem(cur[1]);
    e.target.parentElement.style.display = "none";
  });
  //appending them on the html
  li.appendChild(dlt);
  li.appendChild(edit);
  ul.appendChild(li);

  amount.value = "";
  description.value = "";
});
