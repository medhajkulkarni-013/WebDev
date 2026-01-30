// this is a closure : A function bundeled together with its lexical enviroment
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x(); 

function x(){
    var a = 8;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
z() // This will still print 8 because the returned function y will still retain its lexical scope.