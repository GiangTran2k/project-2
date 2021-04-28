var A=[1,23,4,1,3,123,12,3,41,23,123,12,3123,23,23,23];

function PhanTuLonThuk(k) {
A.sort(function(a, b){return b - a});
console.log(A);
console.log("phan tu lon thu " + k);
console.log(A[k]);
  
}
PhanTuLonThuk(3);
