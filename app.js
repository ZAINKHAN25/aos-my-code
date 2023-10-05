var windowHeight = window.innerHeight;

window.addEventListener("scroll", revealdiv);

function revealdiv(){
    var cards = document.querySelectorAll(".left-fade");
    for (var i = 0; i < cards.length; i++) {
        var revealTop = cards[i].getBoundingClientRect().top;
        var revealPoint = 200;

        if (revealTop < windowHeight - revealPoint) {
            cards[i].classList.add("active");
        } else {
            cards[i].classList.remove("active");
        }
    }
    var cardstwo = document.querySelectorAll(".right-fade");
    for (var i = 0; i < cardstwo.length; i++) {
        var revealTop = cardstwo[i].getBoundingClientRect().top;
        var revealPoint = 20;

        if (revealTop < windowHeight - revealPoint) {
            cardstwo[i].classList.add("active");
        } else {
            cardstwo[i].classList.remove("active");
        }
    }
}
