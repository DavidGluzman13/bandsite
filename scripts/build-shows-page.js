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

const showsContainer = document.querySelector(".shows-list");
const displayShows = (date, venue, location) => {
  let list = document.querySelector(".shows-list__container");
  if (!list) {
    list = document.createElement("ul");
    list.classList.add("shows-list__container");
    showsContainer.appendChild(list); // Append the ul to the shows container only once
  }

  const listItem = document.createElement("li");
  const dateDiv = document.createElement("div");
  const venueDiv = document.createElement("div");
  const locationDiv = document.createElement("div");
  const listLabelDate = document.createElement("label");
  const showDate = document.createElement("h3");
  const listLabelVenue = document.createElement("label");
  const showVenue = document.createElement("p");
  const listLabelLocation = document.createElement("label");
  const showLocation = document.createElement("p");
  const button = document.createElement("button");

  listItem.classList.add("shows-list__container-li");
  dateDiv.classList.add("shows-list__container-li--datediv");
  venueDiv.classList.add("shows-list__container-li--venuediv");
  locationDiv.classList.add("shows-list__container-li--locationdiv");

  listLabelDate.classList.add("shows-list__container-li--datediv--label");
  showDate.classList.add("shows-list__container-li--datediv--content");

  listLabelVenue.classList.add("shows-list__container-li--venuediv--label");
  showVenue.classList.add("shows-list__container-li--venuediv--content");

  listLabelLocation.classList.add(
    "shows-list__container-li--locationdiv--label"
  );
  showLocation.classList.add("shows-list__container-li--locationdiv--content");

  button.classList.add("shows-list__container-li--button");

  listLabelDate.innerText = "DATE";
  showDate.innerText = date;
  listLabelVenue.innerText = "VENUE";
  showVenue.innerText = venue;
  listLabelLocation.innerText = "LOCATION";
  showLocation.innerText = location;
  button.innerText = "BUY TICKETS";

  dateDiv.appendChild(listLabelDate);
  dateDiv.appendChild(showDate);

  venueDiv.appendChild(listLabelVenue);
  venueDiv.appendChild(showVenue);

  locationDiv.appendChild(listLabelLocation);
  locationDiv.appendChild(showLocation);

  listItem.appendChild(dateDiv);
  listItem.appendChild(venueDiv);
  listItem.appendChild(locationDiv);
  listItem.appendChild(button);

  list.appendChild(listItem);

  // remove selection off of the previously selected item

  listItem.addEventListener("click", function (event) {
    const selected = document.querySelector("selected");
    if (!selected) {
      listItem.classList.add("selected");
    } else {
      selected.classList.remove("selected");
      listItem.classList.add("selected");
    }
  });
  return list;
};

shows.forEach((show) => {
  displayShows(show.date, show.venue, show.location);
});

const addLabelClass = () => {
  const labels = document.querySelectorAll("li:not(:first-child) label");
  labels.forEach((label) => {
    label.classList.add("label--delete");
  });
};

addLabelClass();
