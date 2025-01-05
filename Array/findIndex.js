Array.prototype.myFindIndex = function(callbackFn){
    for(let i=0; i<this.length; i++) {
        if(callbackFn.call(this, this[i], i, this)){
            return i
        } 
    }
    return -1
}

