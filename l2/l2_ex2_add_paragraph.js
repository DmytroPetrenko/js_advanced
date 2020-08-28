var counter = 0;
function AddParagraph() {
  if (counter >= 10) {
    document.getElementById("textbox").innerText = "";
    counter = 0;
  } else {
    counter++;
    document.getElementById("textbox").innerText += "Lorem" + counter;    
  }
}
