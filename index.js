function receivesAFunction(thisFunction){
return thisFunction();
}

function returnsANamedFunction(){
    return function named(){}
}

function returnsAnAnonymousFunction(){
    return function(){};
}