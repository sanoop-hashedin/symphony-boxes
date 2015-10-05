$(document).ready(function () {
    "use strict";
    var debuggId = 1;
    var container = $('.wrapper');
    var randomBoxNumber = Math.ceil(Math.random() * 100);
    //alert(randomBoxNumber);
    var randomArray = new Array(100);
    var valueCount = 0;
    for (var i = 0; i < 100; i++) {
        randomArray[i] = i + 1;
    }
    var randorder = shuffle(randomArray);
    var colorArray = ["#2196f3", "#4caf50", "#ffeb3b", "#ff9800", "#000"];
    for (var i = 0; i < 5; i++) {
        createBoxes(colorArray[i]);
    }
    $('.box').click(function () {
        //if (56 === parseInt($(this).text())) for particular number
        if (randomBoxNumber === parseInt($(this).text())) {
            alert("Congratulations, you've one a prize");
        } else {
            alert("Sorry, try again later");
        }
    });


    function createBoxes(color) {
        for (var j = 0; j < 20; j++) {
            var box = $("<div></div>");
            var value = $("<p></p>");
            if (debuggId === 1) {
                value.css("color", "#fff");
            } else {
                value.css("color", color);
            }
            value.text(randorder[valueCount++]);
            box.append(value);
            box.addClass("box");
            box.css("background-color", color);
            container.append(box);

        }
        container.append("<br>");
    };

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
});