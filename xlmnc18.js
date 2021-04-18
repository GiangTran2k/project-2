const arr = [1, 2, 3, 4,6,3,4,5,3,4,2,7,8,5,7,8,9,7,8,9,9,9];

console.log(arr);
var arr10=[0,0,0,0,0,0,0,0,0,0];
for (var i = 0; i < arr.length; i++) {
	if (arr[i]==0) arr10[0]++;
	if (arr[i]==1) arr10[1]++;
	if (arr[i]==2) arr10[2]++;
	if (arr[i]==3) arr10[3]++;
	if (arr[i]==4) arr10[4]++;
	if (arr[i]==5) arr10[5]++;
	if (arr[i]==6) arr10[6]++;
	if (arr[i]==7) arr10[7]++;
	if (arr[i]==8) arr10[8]++;
	if (arr[i]==9) arr10[9]++;
	

}
var k= Math.max(...arr10);
for (let index = 0; index < arr10.length; index++) {
  if (arr10[index]==k){
    console.log("gia tri nhieu nhat la: " +index);
    break;

  }
  
}
console.log("co so phan tu la : " +k )