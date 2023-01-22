var interval;

var h1 = document.getElementById("h1")
var h2 = document.getElementById("h2")
var m1 = document.getElementById("m1")
var m2 = document.getElementById("m2")
var s1 = document.getElementById("s1")
var s2 = document.getElementById("s2")


var hour = h1.innerHTML + h2.innerHTML;
var minute = m1.innerHTML + m2.innerHTML;
var second = s1.innerHTML + s2.innerHTML;


console.log(hour)
console.log(minute)
console.log(second)

setInterval(function () {

    if (parseInt(second) == 0) {
        if (parseInt(minute) == 0) {
            if (parseInt(hour) > 0) {
                second = 59;
                updateDigits('s', second)

                minute = 59;
                updateDigits('m', minute)

                hour = hour - 1;
                updateDigits('h', hour)
            }
        } else if (parseInt(minute) > 0) {
            minute = minute - 1;
            updateDigits('m', minute)

            second = 59;
            updateDigits('s', second)
        }
    } else if (parseInt(second) > 0) {
        second = second - 1;
        updateDigits('s', second)
    }
    updateTitle(hour, minute, second)
}, 1000);

function updateDigits(mode, digit) {
    var element1;
    var element2;
    switch(mode) {
        case 's':
            element1 = s1;
            element2 = s2;
            break;
        case 'm':
            element1 = m1;
            element2 = m2;
            break;
        case 'h':
            element1 = h1;
            element2 = h2;
            break;
        default:
            break;
    }

    if (digit > 9) {
        var digitString = Array.from(String(digit), Number);
        console.log()
        element1.innerHTML = digitString[0];
        element2.innerHTML = digitString[1];
    } else {
        element1.innerHTML = 0;
        element2.innerHTML = digit;
    }
}

function updateTitle(hour, minute, second) {
    var hourString = (hour == 0) ? "00" : String(hour);
    var minuteString = (minute == 0) ? "00" : String(minute);
    var secondString = (second == 0) ? "00" : String(second);

    document.title = `${hourString}:${minuteString}:${secondString}`
}