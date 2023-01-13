window.onload = function() {
    var div = document.getElementsByClassName("question");
    for (var i = 0; i < div.length; i++) {
        div[i].addEventListener("click", function() {
            this.classList.toggle("active");
        })
    }
}

