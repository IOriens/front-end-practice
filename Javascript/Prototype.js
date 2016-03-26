/**
 * Created by IOriens on 2016/3/22.
 */
function Foo(y) {
    this.y = y
}

Foo.prototype.x = 10

Foo.prototype.calculate = function(z) {
    return this.x + this.y +z
}

var b = new Foo(20)
console.log(b.__proto__ === Foo.prototype, b.constructor === Foo, b.calculate(10))
