function tamgiac(a,b,c) {
	// body...
	if (a>0&&b>0&&c>0&&(a + b > c)&&(a + c > b)&&(b + c > a)) {
			console.log("day la 3 canh 1 tam giac");}
			console.log("chu vi tam giac la");
			var d= a+b+c;
			console.log(c);

	else console.log("day khong phai la 3 canh 1 tam giac");
}
tamgiac(3,4,5);