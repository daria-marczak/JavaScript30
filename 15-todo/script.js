const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
const check = document.getElementById("checkAll");
const remove = document.getElementById("delete");

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector("[name=item]")).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
};

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
  }).join("");
};


function checkAll(e) {
  items.forEach((item) => {
    done: true
    console.log(item.done);
  });

  console.log(items);
};

function removeSelected() {
  const array = JSON.parse(localStorage.getItem("items") || "[]");

  const items = array.filter(item => {
    return item.done === false;
  });

  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
};

function toggleDone(e) {
  if (!e.target.matches("input")) return; // event delegation
  const element = e.target;
  const index = element.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
};

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
check.addEventListener("click", checkAll);
remove.addEventListener("click", removeSelected);

populateList(items, itemsList);