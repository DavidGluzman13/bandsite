let showsURL =
  "https://project-1-api.herokuapp.com/showdates?api_key=3a907c48-ff85-47ed-a9c3-0e5400730f51";

axios
  .get(showsURL)
  .then((response) => {
    const shows = response.data;
    shows.forEach((show) => {
      displayShows(show.date, show.place, show.location);
    });
    // changeDate(); //calling the change Date function here so that the dates are displayed in the correct format
  })
  .catch((error) => {
    console.log("It didn't work.");
  });

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

  const formattedDate = formatDate(date); // Convert the date to a human-readable format
  showDate.innerText = formattedDate; // Display the converted date

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

// Make a function that takes the date as a paremeter and returns a human-readable format
const formatDate = (date) => {
  const format = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString(undefined, format);
  return formattedDate.replace(",", ""); // I tried to get rid of the comma in the date but it didn't work
};

const shows = document.querySelectorAll(".shows-list__container-li"); // made this one to get rid of an error "shows undefined"

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
