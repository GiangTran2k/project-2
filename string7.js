// var str = "       Tran Quoc      Giang        ";
function DemSoTu(str) {

// var str;
str = (str.trim());
 console.log(str);
 var dem=1;
  if(str=='') dem=0;
  else {
    for (var i = 0; i < str.length; i++) {
 	if (str[i]==' '&&str[i+1]!=' ') {
 		dem++
 	}
 }}

 console.log("So tu la: "+dem);
	
}
var str = "       Tran Quoc      Giang   a b b ba b     ";
DemSoTu(str);


// co the dung split sau do dem gia tri phan tu khac ' '