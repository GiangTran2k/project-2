function DemSoKiTu(a) {
	var hoa=0;
	var thuong=0;
	var chuso=0;

	for (var i = 0; i < a.length; i++) {
		if (a[i]>='A'&&a[i]<='Z') {
			hoa++;

		}
		if (a[i]>='a'&&a[i]<='z') {
			thuong++;

		}
		if (a[i]>='1'&&a[i]<='9') {
			chuso++;

		}
	}

	console.log("so ki tu hoa la: "+hoa);
	console.log("so ki tu thuong la: "+thuong);
	console.log("so ki tu chu so la: "+chuso);

	// body...
}
var a="Tran quoc giang sdas asd ad ad sad sa 123 456 ABCSDADA";
DemSoKiTu(a);