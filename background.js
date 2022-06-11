var images = [
    'adventure-time.png',
    'kurzgesagt.png'
];

var img = document.getElementById("img");

function imgDisp(num) {
    var num = Math.floor(Math.random() * 2);
    img.style.backgroundImage = 'url("images/backgrounds/' + images[num] + '")';
    img.style.backgroundRepeat = "no-repeat";
}
imgDisp();