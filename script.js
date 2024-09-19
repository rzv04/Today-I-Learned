const factFormEl = document.getElementsByClassName("fact-form")[0];
// console.log(factFormEl);
const shareBtnEl = document.querySelector(".btn-main");
shareBtnEl.addEventListener("click", function () {
  if (factFormEl.classList.contains("hidden")) {
    factFormEl.classList.remove("hidden");
    shareBtnEl.textContent = "Close";
  } else {
    factFormEl.classList.add("hidden");
    shareBtnEl.textContent = "Share A Fact";
  }
});
