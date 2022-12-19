function btnClick(This) {
    document.getElementById("footprint").style.display = "none";
    clearAll();

    if (This.classList.contains('foodBtn')) {
        document.getElementsByClassName('foods')[0].style.opacity = "1";
    }
    else if (This.classList.contains('houseBtn')) {
        document.getElementsByClassName('house')[0].style.opacity = "1";
    }
    else {
        document.getElementsByClassName('toys')[0].style.opacity = "1";
    }
}

function clearAll() {
    const elements = document.getElementsByClassName('infoText');

    for (i = 0; i <= 2; i++) {
        elements[i].style.opacity = "0";
    }
}