function ChuanHoa(str) {
	// body...
	str = (str.trim());//cat khoang trang 2 dau
	str = str.toLowerCase();//chuyen tat ca thanh chu thuong
	str[0]=str[0].toUpperCase();
	for (var i = 1; i < str.length; i++) {
		if(str[i]==' '&&str[i+1]!=' '){
			str[i+1]=str[i+1].toUpperCase();
		}
	}

	console.log(str);
}
var str= " truong TAM pHONG ";
ChuanHoa(str);