// var str = "       Tran Quoc Giang        ";
function XoaKiTu(str,n,k) {
	// for (var i = k; i < k+n; i++) {
	// 	if ((k+n)>str.length) {
	// 		console.log("khong hop le");
	// 	}
	// 	else{

	// 		str[i]=str[i+n];
	// 	}
	// }
	str = str.substring(0,k)// cat tu 0 den k
      +str.substring(k+n,str.length);// cong them tu k+n den het
	
console.log(str);
}

var str = "123456789";
XoaKiTu(str,3,3);