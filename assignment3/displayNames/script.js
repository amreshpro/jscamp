const showName = document.getElementById("name");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const names = [
  "Aarav",
  "Sanya",
  "Vikram",
  "Neha",
  "Rohan",
  "Priya",
  "Amit",
  "Meera",
  "Rajiv",
  "Ananya",
];
console.log(names);

//initial name on load
showName.innerText = names[0];

let currentState = {
  value: 0,
};

//next fun
const showNextName = () => {
  if (currentState.value === names.length - 1) currentState.value = -1;

  showName.innerText = names[++currentState.value];
};

//prev fun
const showPreviousName = () => {
  if (currentState.value === 0) currentState.value = names.length;

  showName.innerText = names[--currentState.value];
};
