shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

// const showsContainer = document.querySelector(".shows-list");
// const displayShows = (date, venue, location) => {
//   const list = document.createElement("ul");
//   const listItem = document.createElement("li");
//   const listLabelDate = document.createElement("label");
//   const showDate = document.createElement("h3");
//   const listLabelVenue = document.createElement("label");
//   const showVenue = document.createElement("p");
//   const listLabelLocation = document.createElement("label");
//   const showLocation = document.createElement("p");
//   const button = document.createElement("button");

//   list.classList.add("shows-list__container");
//   listItem.classList.add("shows-list__container-div");
//   listLabelDate.classList.add("shows-list__container-div--label");
//   showDate.classList.add("shows-list__container-div--content");
//   listLabelVenue.classList.add("shows-list__container-div--label");
//   showVenue.classList.add("shows-list__container-div--content");
//   listLabelLocation.classList.add("shows-list__container-div--label");
//   showLocation.classList.add("shows-list__container-div--content");
//   button.classList.add("shows-list__container-div--button");

//   listLabelDate.innerText = "DATE";
//   showDate.innerText = date;
//   listLabelVenue.innerText = "VENUE";
//   showVenue.innerText = venue;
//   listLabelLocation.innerText = "LOCATION";
//   showLocation.innerText = location;
//   button.innerText = "BUY TICKETS";

//   listItem.appendChild(listLabelDate);
//   listItem.appendChild(showDate);
//   listItem.appendChild(listLabelVenue);
//   listItem.appendChild(showVenue);
//   listItem.appendChild(listLabelLocation);
//   listItem.appendChild(showLocation);
//   listItem.appendChild(button);
//   list.appendChild(listItem);
//   showsContainer.appendChild(list);

//   showsContainer.appendChild(listItem);
// };

// shows.forEach((show) => {
//   displayShows(show.date, show.venue, show.location);
// });
