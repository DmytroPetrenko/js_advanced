window.onload = function () {
  var imgRow = document.getElementById("img-row");
  for (let i = 0; i < imgRow.children.length; i++) {
    if (imgRow.children[i].tagName === "IMG") {
      const img = imgRow.children[i];
      img.onclick = () =>
        (document.getElementById("img-container").innerHTML = img.outerHTML);
    }
  }
};
