const h5Elements = document.querySelectorAll("h5");

function getRandomColor() {
  const colors = ["green", "blue", "red"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

h5Elements.forEach(function(h5) {
  h5.addEventListener("click", function() {
    const color = getRandomColor();
    h5.style.color = color;
  });
});