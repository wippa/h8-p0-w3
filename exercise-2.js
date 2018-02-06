unction balikKata(str) {
    var temp = '';
    var i = str.length;

    while (i > 0) {
        temp += str.substring(i - 1, i);
        i--;
    }


    return temp;
}
