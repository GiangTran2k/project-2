const arr = [1, 2, 3, 4,6,3,4,5,3,4,2];
console.log(arr);
var dem=0;
function xoaCacPhanTu(k){
    for (var i=0; i<arr.length; i++){
        if (arr[i]===k){
            const removed = arr.splice(i, 1);
            dem++;
        }
        
        
    }
    
    console.log(arr);
    console.log("so phan tu bi xoa la:"+dem);
        
    
    
    
}
xoaCacPhanTu(3);
