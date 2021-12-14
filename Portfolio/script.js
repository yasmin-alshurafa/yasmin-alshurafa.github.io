/* chnage image when mouse is over the icon image */
const image = document.querySelector("img");

image.addEventListener("mouseover", () => {
  image.src = "images/hover.png";
});
image.addEventListener("mouseout", () => {
  image.src = "images/default.png";
});
