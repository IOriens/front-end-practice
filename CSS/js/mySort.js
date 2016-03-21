/**
 * Created by IOriens on 2016/3/11.
 */
function mySort() {
    var tags = new Array();//使用数组作为参数存储容器
    //请补充你的代码
   // for(var i in arguments){
   //     tags[i] = arguments[i]
   // }
   //tags.sort(function(a,b){
   //    return a - b
   //})
    tags = arguments.sort(function(a,b){
        return a - b
    })
    console.info(tags);//显示结果
    return tags;//返回已经排序的数组
}

var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定
console.info(result);//显示结果