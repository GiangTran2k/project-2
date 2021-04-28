function DemSoKhoangTrang(a) {
	var dem=0;

	for (var i = 0; i < a.length; i++) {
		if (a[i]==' ') {
			dem++;

		}
	}

	console.log("so ki tu khoan trang la: "+dem);

	// body...
}
var a="Tran quoc giang sdas asd ad ad sad sa";
DemSoKhoangTrang(a);