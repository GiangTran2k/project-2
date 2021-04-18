const arr = [1, 2, 3, 4,6,3,4,5,3,4,2];

console.log(arr);
var tong=0;
var dem =0;
for (var i = 0; i < arr.length; i++) {
	if (arr[i]%2==0) {
		tong+=arr[i];
		dem++;

	}
}
var avg = tong/dem*1.0;
console.log("trung binh gia tri chan la   " + avg);