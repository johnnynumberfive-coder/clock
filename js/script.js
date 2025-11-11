function rotateClockHands() {
    var now = new Date();
    var hour = now.getHours() %12;
    var min = now.getMinutes();
    var sec = now.getSeconds();

    var hourHand = document.getElementById("hour");
    var minHand = document.getElementById("min");
    var secHand = document.getElementById("sec");

    var hourRotations = (hour * 30) + (min / 2);
    var minRotations = (min * 6) + (sec / 10);
    var secRotations = (sec * 6);

    hourHand.style.transform = "rotate(" + hourRotations + "deg)";
    minHand.style.transform = "rotate(" + minRotations + "deg)";
    secHand.style.transform = "rotate(" + secRotations + "deg)";
}

setInterval(rotateClockHands, 1000);
