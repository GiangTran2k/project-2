const arr = [1, 2, 3, 4,6,3,4,5,3,4,2];

console.log(arr);
console.log("cac day con tang la:")
for (var i = 0;i< arr.length; i++) {
console.log(arr[i]);
if (arr[i]>arr[i+1]) {
	console.log("\r\n")
}
}