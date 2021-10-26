const images = [
  ["images/Untitled23 (3).jpg", "serious"],
  ["images/photo_2021-10-14_17-55-26.jpg", "cheese"],
  ["images/photo_2021-10-14_17-33-48.jpg", "pose"],
  ["images/IMG_3561.jpeg", "serious"],
  ["images/IMG_20201106_150501_129.jpg", "smile"],
  ["images/photo_2021-10-14_17-55-18.jpg", "pose"],
  ["images/IMG_20201106_150742_643~2.jpg", "smile"],
  ["images/84332782_2578054775799597_981422897836851200_n.jpg", "smile"],
];

const glry = document.getElementById("gallery");

for (let img in images) {
  glry.innerHTML += `<img src="${images[img][0]}" alt="">`;
}

const filterByCat = (value) => {
  glry.innerHTML = "";
  for (let img in images) {
    if (images[img][1].includes(value)) {
      glry.innerHTML += `<img src="${images[img][0]}" alt="">`;
    }
  }
  if (glry.innerHTML === "") {
    glry.innerHTML = `<h1>${value} search keyword does not match any image...</h1>`;
  }
};
