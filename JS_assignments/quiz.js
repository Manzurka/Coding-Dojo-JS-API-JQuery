function oneto255(){
    for(var i=1; i<=255;i++){
        console.log(i);
    }
}
oneto255();

function Odds(){
    for(var i=1; i<=255; i+=2){
        console.log(i);
    }
}
Odds();

function IntSum(){
    var sum=0;
    for(var i=0; i<=255;i++){
        sum+=i;
        console.log(i,sum);
    }
}
IntSum();

function iterateArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
iterateArray([1,2,3,4,5]);

function findMax(arr){
    var max=arr[0]
    for(var i=0; i<arr.length; i++){
        arr[i]>max;
        max=arr[i]
    }
    console.log(max);
}
findMax([1,2,3,4,5]);

function getAverage(arr){
    var sum =0;
    for(var i=0; i<arr.length;i++){
        sum+=arr[i]
    }
    var avrg=sum/arr.length;
    console.log(avrg);
}
getAverage([1,2,3,4,5]);

function arrayWithOdds(){
    newarr=[];
    for(var i=1;i<=255;i+=2){
        newarr.push(i);
    }
    console.log(newarr);
}
arrayWithOdds();

function squareValues(arr){
    for(var i=0;i<arr.length; i++){
        arr[i]*=arr[i];
        }
    console.log(arr);
}
squareValues([1,2,3,4]);

function greaterThanY(arr, y){
    var count=0;
    for(var i=0; i<arr.length; i++){
        if (arr[i]>y){
            count+=1;
            console.log(count,arr[i]);
        }
    }
}

greaterThanY([1,2,3,4],2);

function zeroOutNegatives(arr){
    for(var i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]=0;
        }
    }
    console.log(arr);
}
zeroOutNegatives([-2,-5,3,8]);

function maxMinAvrg(arr){
    var max=arr[0];
    var min=arr[0];
    var sum=0;
    for(var i=0;i<arr.length; i++){
        arr[i]>max;
        max=arr[i];
    for(var i=0;i<arr.length; i++){
        arr[i]<min;
        min=arr[i];
        sum+=arr[i];
    }
    }
    var avrg=sum/arr.length;
    console.log(max,min,avrg);
}
maxMinAvrg([1,2,3,4]);

function shiftArray(arr){
    for(var i=1; i<arr.length-1; i++){
        arr[i-1]=arr[i];
    }
    arr[arr.length-1]=0;
    console.log(arr);
}
shiftArray([1,2,3]);

function swapStringforNeg(arr){
    for(var i=0;i<arr.length;i++){
        if (arr[i]<0){
            arr[i]='Dojo'
        }
    }
    console.log(arr);
}
swapStringforNeg([-1,4,7,-9]);