// In general function
function general(){
    console.log('Its a general function form');
}

// Function Expressions
let fun_expression = function(){
    console.log('Its a function expresion form');
}

// Pass function name as a parameter. 
function call_another(fun){
    fun();
}

general();
fun_expression();
call_another(general);
