let i = document.getElementById("counter");
let isPaused = false;
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let like = document.getElementById("heart");
let count = 0;
let pause = document.getElementById("pause");

// Increments the timer by 1 for every second after the page has loaded
document.addEventListener("DOMContentLoaded", () => {
  setInterval(function() {
    if (isPaused == false) {
      i.innerText++;
      count = 0;
    }
  }, 1000);
});

// User can manually increment the counter using the plus button
minus.addEventListener("click", function(event) {
  i.innerText--;
});

// Use can manually decrement the counter using the minus button
plus.addEventListener("click", function(event) {
  i.innerText++;
});

// User can 'like' an individual number of the counter
// Page displays the number of 'likes' associated with a number
like.addEventListener("click", function(event) {
  count += 1
  likeStatement();
});

function likeStatement() {
  let ul = document.getElementsByTagName("ul")[0];
  let fullList = document.getElementsByTagName("li");
  if (count == 1) {
    let li = document.createElement("li");
    li.innerHTML = `${i.innerText} has been liked 1 time.`;
    ul.appendChild(li);
  }
  else if (count > 1) {
    let lastItem = fullList[fullList.length - 1];
    lastItem.innerHTML = `${i.innerText} has been liked ${count} times.`;
  };
};

// User can pause the counter:
  // pauses the counter
  // disables all buttons except the pause button
  // updates button text to say "resume"
// User can resume the counter:
  // resumes the counter
  // enables all buttons except the pause button
  // updates teh button text to say "pause"
pause.addEventListener("click", function(event) {
  event.preventDefault;
  if (isPaused == false) {
    isPaused = true;
    pause.innerHTML = "resume";
    minus.disabled = true;
    plus.disabled = true;
    like.disabled = true;
  }
  else if (isPaused == true) {
    isPaused = false
    pause.innerHTML = "pause";
    minus.disabled = false;
    plus.disabled = false;
    like.disabled = false;
  }
});

// User can leave comments on gameplay, such as: "Wow, what a fun game this is."
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  addComment();
})

function addComment() {
  let comment = document.getElementById("comment-input");
  let p = document.createElement("p");
  let commentList = document.getElementById("list");
  p.innerHTML = comment.value;
  commentList.appendChild(p);
  comment.value = "";
}
