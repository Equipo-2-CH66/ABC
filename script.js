
const colors = ["green", "blue", "red"];
const elementH5 = document.querySelectorAll("h5");

// Function to get a random color
function getRandomColor() {
  const randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

// Function to apply a random color to an element
function addRandomColor(element) {
  element.style.color = getRandomColor();
}

// Add clic
elementH5.forEach(h5 => {
  h5.addEventListener("click", () => {
    addRandomColor(h5);
  });
});
