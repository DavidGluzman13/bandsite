let commentURL =
  "https://project-1-api.herokuapp.com/comments?api_key=3a907c48-ff85-47ed-a9c3-0e5400730f51";

axios.get(commentURL).then((response) => {
  for (const comment of response.data) {
    displayComment(comment.name, comment.timestamp, comment.comment);
  }
});

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
  dateSpan.innerText = new Date(date).toLocaleDateString();
  comment.innerText = reviews;

  reviewContainer.appendChild(userName);
  reviewContainer.appendChild(dateSpan);
  reviewContainer.appendChild(comment);
  listItem.appendChild(userImage);
  listItem.appendChild(reviewContainer);

  commentContainer.prepend(listItem);
};

// comments.sort((a, b) => new Date(a.date) - new Date(b.date));

const FormElement = document.querySelector(".comment-div");
const inputField = document.querySelectorAll(".comment-div__container--input");
//tagging event listener
FormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = inputField[0].value;
  const comment = inputField[1].value;
  let com = {
    name: name,
    comment: comment,
  };

  axios
    .post(commentURL, com) // this will be the axios post request
    // this is my conversion for a human readable time stamp

    .then((response) => {
      // this will be the response from the axios post request
      axios.get(commentURL).then((response) => {
        const array = response.data;
        array.forEach((comment) => {
          displayComment(comment.name, comment.timestamp, comment.comment);
        });
      }); // this will invoke the function displayComment

      const date = new Date().toLocaleDateString();
      comments.unshift({ userName: name, comment: comment, date: date }); // this will add the new comment to the comments array
      inputField[0].value = ""; // this will empty out the input field at index 0
      inputField[1].value = ""; // this will empty out the input field at index 1
    })
    //.catch will print "It didn't work." if the axios fails
    .catch((error) => {
      console.log("It didn't work.");
    });
});

//you should remove the unshift line and then put in a get in the .post section in the axios call.

// let commentURL =
//   "https://project-1-api.herokuapp.com/comments?api_key=3a907c48-ff85-47ed-a9c3-0e5400730f51";

// axios.get(commentURL).then((response) => {
//   for (const comment of response.data) {
//     displayComment(comment.name, comment.timestamp, comment.comment);
//   }
// });

// const commentContainer = document.querySelector(".review");

// const displayComment = (name, date, reviews) => {
//   const listItem = document.createElement("li");
//   const userImage = document.createElement("div");
//   const reviewContainer = document.createElement("div");
//   const userName = document.createElement("h2");
//   const dateSpan = document.createElement("span");
//   const comment = document.createElement("p");
//   const divider = document.createElement("hr");

//   listItem.classList.add("review__card");
//   userImage.classList.add("review__card--user--img");
//   userName.classList.add("review__card--container--name");
//   reviewContainer.classList.add("review__card--container");
//   dateSpan.classList.add("review__card--container--date");
//   comment.classList.add("review__card--container--comment");

//   userName.innerText = name;
//   dateSpan.innerText = new Date(date).toLocaleDateString();
//   comment.innerText = reviews;

//   reviewContainer.appendChild(userName);
//   reviewContainer.appendChild(dateSpan);
//   reviewContainer.appendChild(comment);
//   listItem.appendChild(userImage);
//   listItem.appendChild(reviewContainer);

//   commentContainer.prepend(listItem);
// };

// const FormElement = document.querySelector(".comment-div");
// const inputField = document.querySelectorAll(".comment-div__container--input");

// FormElement.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = inputField[0].value;
//   const comment = inputField[1].value;
//   const date = new Date().toLocaleDateString();

//   let com = {
//     name: name,
//     comment: comment,
//     timestamp: date, // Assuming the API expects a 'timestamp' field
//   };

//   axios
//     .post(commentURL, com)
//     .then((response) => {
//       displayComment(name, date, comment);
//       inputField[0].value = "";
//       inputField[1].value = "";
//     })
//     .catch((error) => {
//       console.log("It didn't work.");
//     });
// });
