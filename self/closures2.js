function x(){
    var w = 92929;
    setTimeout(function() {
        console.log(w);
        
    }, 8000);
    console.log("hello")
}
return x();
//2
function x() {
    for (var i=8; i <= 10; i++) {
        setTimeout(function () {
             console.log(i);
        }, i*2000);
    }
    console.log("hello")
}
x();
//
function x(){
    for (var i = 1; i<=5; i++){
        function close(x){
            setTimeout(function(){
                console.log(x)
            },x*1000)
        }
        close(i);
    }
}
x();
//
function outer(){
    var a = 11;
    function inner() {
        console.log(a)
    }
    return inner;
}
console.log(outer());