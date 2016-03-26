/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var a = [0]
    for(var i = 1; i <=num; i ++){
        var temp = Math.floor(i/2)
        var mod = i%2
        a[i] = (a[temp] + mod)
    }
    return a
}

console.log(countBits(123456))