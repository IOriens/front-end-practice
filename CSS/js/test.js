/**
 * Created by IOriens on 2016/3/11.
 */
Array.prototype.dup_detection = function(){
    var arr = []
    var i = 0
    var curr = 0
    var arr_num = 0

    while (i<this.length) {
        i = curr
        var flag= 1
        var j = i+1
        var lenth_temp = this.length
        for(;j<lenth_temp;j++) {
            if(this[i] === this[j]) {
                this.splice(j,1)
                lenth_temp--
                j--
                if(flag === 1) {
                    arr[arr_num++] = this[i]
                    flag = 0
                }
            }
        }
        curr++
    }
    return arr
}

var b =[1,2,3,3,3,4,4,5,4,6,7,6]
console.log(b.join('-'))
var c = b.dup_detection()
console.log(b.join('-'))
console.log(c.join('-'))