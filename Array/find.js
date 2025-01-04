Array.prototype.myFind = function(callbackFn){
    for(let i =0; i<this.length; i++) {
        if(callbackFn(this[i], i, this)){
            return this[i];
        }
    }
}
