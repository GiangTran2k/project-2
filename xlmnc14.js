const arr = [1,2,3,2,1];
var j =arr.length-1;
console.log(arr);
for (var i = 0; i <=j-1; i++) {
	if (arr[i]!=arr[j]){

		console.log("mang khong co tinh doi xung");
		break;
	}
	if (j-2==i || j-1==i) {
		console.log("mang co tinh doi xung");
		break;
	}
  j--;

}