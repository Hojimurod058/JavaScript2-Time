var time = prompt("Soat nechida?");

if (isNaN(time) || time < 1 || time > 24) {
    alert("Notog'ri vaqt kiritildi");
} else {
    time = +time;

    if (time >= 1 && time <= 10) {
        alert("Ertalabki soat " + time);
    } else if (time >= 11 && time <= 13) {
        alert("Tushlikdan oldingi soat " + time);
    } else if (time >= 14 && time <= 16) {
        alert("Tushlikdan keyingi soat " + time);
    } else if (time >= 17 && time <= 24) {
        alert("Kechki  soati " + time);
    } else {
        alert("Notog'ri vaqt kiritildi");
    }
}
