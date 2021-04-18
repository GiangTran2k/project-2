cconst arr = [1, 2, 3, 4,6,3,4,5,3,4,2];

console.log(arr);
var arr1 =[];
function XoayMangSangPhai(k) {

	if (k>arr.length) {
		console.log("gia tri k khong hop le");
	}
	else{
		for (var i = 0; i < arr.length; i++) {
			arr1[i]=arr[k];
			k++;
			if (k>arr.length-1) {
				k=0;
			}
		}
		

	}

	console.log("mang xoay sang phai "+k )
  console.log(arr1);

	
}

XoayMangSangPhai(3);