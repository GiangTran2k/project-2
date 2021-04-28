const arr = [1, 2, 3, 4];
console.log(arr);
function xoaPhanTuThu(k){
    if(k>arr.length){
        console.log("k vuot qua so phan tu cua mang");
    }
    else {
        const removed = arr.splice(k, 1);
        console.log(arr);  
        console.log(removed); 
    }
        
    
    
    
}
xoaPhanTuThu(7);
xoaPhanTuThu(2);
