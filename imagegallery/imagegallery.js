let message = () => console.log("Я учу JavaScript!");
message();
const img = document.getElementById("pic");

function getPrevPic() {
  img.src = "./img_1.jpg";
}

function getNextPic() {
  img.src = "./img_3.jpg";
}
