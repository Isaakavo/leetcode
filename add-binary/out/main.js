function addBinary(a, b) {
    var ptra = a.length;
    var ptrb = b.length;
    var carry = '';
    var result = '';
    while (ptra >= 0 && ptrb >= 0) {
        ptra--;
        ptrb--;
        var aItem = a[ptra];
        var bItem = b[ptrb];
        if (aItem === '1' && bItem === '1') {
            if (carry) {
                result = '1' + result;
                continue;
            }
            result = '0' + result;
            carry = '1';
        }
        else {
            if (carry) {
                result = '1' + result;
                carry = '';
                continue;
            }
            result = ((aItem > bItem) ? aItem : bItem) + result;
        }
    }
    return result;
}
addBinary('11', '1');
addBinary('10', '1');
addBinary('1010', '1011');
addBinary('1111', '1111');
//# sourceMappingURL=main.js.map