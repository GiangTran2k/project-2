const arr = [1, 2, 3, 4,6,3,4,5,3,4,2];

console.log(arr);
var arr1 =[];
var arr2 =[];
var j=0;
var k=0;
for (var i = 0; i < arr.length; i++) {
	if (arr[i]%2==0) {
		arr1[j]=arr[i];
		j++;
	}
	if (arr[i]%2==1) {
		arr2[k]=arr[i];
		k++;
	}

}
console.log("mang cac phan tu chan la : " + arr1);
console.log("mang cac phan tu le la : " + arr2);