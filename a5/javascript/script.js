var myImages = [
  "https://uhdwallpapers.org/uploads/converted/19/04/03/spring-bee-blossom-flower-picture-1920x1080_479654-mm-90.webp",
  "https://h2.gifposter.com/bingImages/HoneycombBee_1920x1080.jpg",
  "https://wallpaperswide.com/download/bee_20-wallpaper-1920x1080.jpg",
  "https://c.wallhere.com/photos/b8/e5/1920x1080_px_bee_Bees_flower_flowers_insect-1657467.jpg!d",
  "https://wallpaperfx.com/view_image/swarm-of-bees-1920x1080-wallpaper-16962.jpg"
];
var captionImages = [
  "This image depicts a bee pollinating a mirabelle plum (Prunus domestica subsp. syriaca) tree.",
  "This image depicts a bee interacting with honeycomb strengthening the hive.",
  "This image depicts a bee landing on a latice structure.",
  "This image depicts a close up intircate photograph of a bee.",
  "This image depicts a swarm of over 100 bees in their hive."
];
var index = 0;

function updateImage() {
  document.querySelector("slideshow").src = myImages[index];
  document.querySelector("slideshow").alt = captionImages[index];
  document.querySelector("caption").textContent = captionImages[index];
}

function next() {
  if (index === myImages.length - 1) {
    index = 0;
  } else {
    index++;
  }
  updateImage();
  restartInterval();
}

function back() {
  if (index === 0) {
    index = myImages.length - 1;
  } else {
    index--;
  }
  updateImage();
  restartInterval();
}

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);

function autoSlide() {
  if (document.getElementById("auto").checked) {
    next();
  }
}

var intervalId;

function startInterval() {
  intervalId = setInterval(autoSlide, 2000);
}

function restartInterval() {
  clearInterval(intervalId);
  startInterval();
}

startInterval();
