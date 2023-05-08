//create object array
// write a form section that will be displayed on the index html page with a "NAME" label and the an input field with "Enter your name" placeholder. then create a similar section for comment but bigger with "Add a new comment" written as a placeholder. they will be later used to add comments to the index page.
// write a function that will be called when the form is submitted. it will take the name and comment from the form and add them to the comments array. then it will call the renderComments function to display the comments on the page.

const comments = [
  {
    userName: "Connor Walton",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "02/17/2021",
  },
  {
    userName: "Emilie Beach",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "01/09/2021",
  },
  {
    userName: "Miles Acosta",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough..",
    date: "12/20/2020",
  },
];

const commentContainer = document.querySelector(".review");
const displayComment = (name, date, reviews) => {
  const listItem = document.createElement("li");
  const userImage = document.createElement("div");
  const reviewContainer = document.createElement("div");
  const userName = document.createElement("h2");
  const dateSpan = document.createElement("span");
  const comment = document.createElement("p");
  const divider = document.createElement("hr");

  listItem.classList.add("review__card");
  userImage.classList.add("review__card--user--img");
  userName.classList.add("review__card--container--name");
  reviewContainer.classList.add("review__card--container");
  dateSpan.classList.add("review__card--container--date");
  comment.classList.add("review__card--container--comment");

  userName.innerText = name;
  dateSpan.innerText = date;
  comment.innerText = reviews;

  reviewContainer.appendChild(userName);
  reviewContainer.appendChild(dateSpan);
  reviewContainer.appendChild(comment);
  listItem.appendChild(userImage);
  listItem.appendChild(reviewContainer);

  commentContainer.prepend(listItem);
};

comments.sort((a, b) => new Date(a.date) - new Date(b.date));

for (const comment of comments) {
  displayComment(comment.userName, comment.date, comment.comment);
}

const FormElement = document.querySelector(".comment-div");
const inputField = document.querySelectorAll(".comment-div__container--input");
//tagging event listener
FormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = inputField[0].value;
  const comment = inputField[1].value;
  const date = new Date().toLocaleDateString();
  comments.unshift({ userName: name, comment: comment, date: date });
  displayComment(name, date, comment);
  inputField[0].value = "";
  inputField[1].value = "";

  console.log(name, comment);
});

