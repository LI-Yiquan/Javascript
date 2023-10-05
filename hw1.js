var x = 5;
function f(y) { return x + y; }
if(true) {
(function () {
var z = 20;
})();
}
f(z);
