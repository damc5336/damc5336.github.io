const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Custom Story
const storyText =
  "It was 90 degrees outside, so :insertx: decided to skateboard to :inserty:. Halfway there, they tripped over a banana peel and :insertz:. Alex saw the whole thing, but just laughed — :insertx: weighs 250 pounds, and it was a wild day.";

const insertX = ["Danny the Daredevil", "Captain Cool", "Luna the Trickster"];
const insertY = ["the skate park", "a fancy restaurant", "the beach"];
const insertZ = [
  "flipped five times before landing in a fountain",
  "crashed into a giant teddy bear display",
  "ended up covered in ice cream and sprinkles",
];

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if (customName.value !== "") {
    newStory = newStory.replace("Alex", customName.value);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(250 / 14) + " stone";
    const temperature = Math.round((90 - 32) * (5 / 9)) + " centigrade";
    newStory = newStory.replace("250 pounds", weight);
    newStory = newStory.replace("90 degrees", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
