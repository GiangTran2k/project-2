const arr = [1, 2, 3, 4,6,3,4,5,3,4,2];

console.log(arr);
function chenPhanTu(k,x){

	


	Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
	};
	// var arr = [1, 2, 3, 4,6,3,4,5,3,4,2];
	arr.insert(k, x);
	console.log(arr);
   

}
chenPhanTu(5,100);




