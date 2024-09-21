const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factFormEl = document.getElementsByClassName("fact-form")[0];
const shareBtnEl = document.querySelector(".btn-main"); //const btn.btn-open
const factsList = document.querySelector(".facts-list");

// creating posts
factsList.innerHTML = "";
// createFactsList(initialFacts);
loadFacts();

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `
    <li class="fact">
    <p>
    ${fact.text}
      <a href="${fact.source}">&lpar;Source&rpar;</a>
    </p>
  
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
    </li>`
  );

  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// load data
async function loadFacts() {
  const res = await fetch(
    "https://auzgrgpcgmljmknrxfwj.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1emdyZ3BjZ21sam1rbnJ4ZndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NTc1NzAsImV4cCI6MjA0MjMzMzU3MH0.njaFfwgjCKukAttOuZBG1gSFD8c8v98Vo0aZDHxxVl0",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1emdyZ3BjZ21sam1rbnJ4ZndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NTc1NzAsImV4cCI6MjA0MjMzMzU3MH0.njaFfwgjCKukAttOuZBG1gSFD8c8v98Vo0aZDHxxVl0",
      },
    }
  );
  const data = await res.json();
  // console.log(data);
  // const filteredData = data.filter((fact) => fact.category === "society");
  createFactsList(data);
}

// toggle posting
shareBtnEl.addEventListener("click", function () {
  if (factFormEl.classList.contains("hidden")) {
    factFormEl.classList.remove("hidden");
    shareBtnEl.textContent = "Close";
  } else {
    factFormEl.classList.add("hidden");
    shareBtnEl.textContent = "Share A Fact";
  }
});

//
// console.log([7, 64, 6, -23, 11].find((el) => el > 10));
console.log(CATEGORIES.find((cat) => cat.name === "society").color);
