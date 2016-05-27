var destructured = [1, 2];
var first = destructured[0], second = destructured[1];
function f(_a) {
    var first = _a[0], second = _a[1];
    return first + second;
}
var _a = [0, 1, 2, 3, 4], zero = _a[0], theRemaining = _a.slice(1);
var _b = [0, 1, 2, 3, 4], two = _b[2], four = _b[4];
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
(_c = { a: "baz", b: 101 }, a = _c.a, b = _c.b, _c);
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1000 : _a;
    return a + b;
}
document.write(destructured
    + '<br>' + first
    + '<br>' + second
    + '<br>' + f([1, 2])
    + '<br>' + zero
    + '<br>' + theRemaining
    + '<br>' + two
    + '<br>' + four
    + '<br>' + a
    + '<br>' + b
    + '<br>' + keepWholeObject({ a: 7 }));
var _c;
