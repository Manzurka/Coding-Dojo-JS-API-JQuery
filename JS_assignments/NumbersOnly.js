function NumbersOnly(arr){
  var newArray = [];
    for(i=0; i<arr.length; i++){
        if(typeof arr[i] === "number") {
           newArray.push(arr[i]);
        }
    }
     return(newArray);
}
  NumbersOnly([34,56,"string"])