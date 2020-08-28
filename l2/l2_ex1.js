/* Comment ME */ 
(function () {
    window.onload = function () {
        var arr = document.getElementsByTagName("p");
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            arr[i].innerText = "PARAGRAPH";
        }
    }
})();




/* Uncomment ME */
/* var Module = {};

Module.onload = function() {
    window.onload = function () {
        var arr = document.getElementsByTagName("p");
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            arr[i].innerText = "PARAGRAPH";
        }
    }
}
Module.onload(); */