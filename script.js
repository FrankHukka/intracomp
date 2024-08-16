const stylesheet = document.styleSheets[0];

const numberCont = document.querySelector(".numbers");
const numbers = numberCont.querySelectorAll("button");
const submitBtn = document.getElementById("submit");

const thx = document.getElementsByClassName("thanks card")[0];
const ratCard = document.getElementsByClassName("rating card")[0];

let rating;
for (const numButt of numbers) {
    numButt.addEventListener("click", () => {
        rating = numButt.textContent;
    })
}

submitBtn.addEventListener("click", (ev) => {
    if (rating === undefined) {
        console.log("No rating");
        ev.preventDefault;
    } else {
        console.log(`You selected ${rating} out of 5`);
        thx.classList.remove("hidden");
        ratCard.classList.add("hidden");
    }
});