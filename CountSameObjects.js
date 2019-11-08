function compressArray(original) {
 
	var compressed = [];
	// make a copy of the input array
	var copy = original.slice(0);
	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w =0; w < copy.length; w++) {
			if(original[i] != undefined || copy[w] != undefined){
            if (original[i].rel == copy[w].rel && original[i].prec == copy[w].prec){

				// increase amount of times duplicate is found
				myCount++;
               copy.splice(w, 1);
               w--;
			}
		}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
 
	return compressed;
};

var data2=[
    {"rel":6,"prec":20},
    {"rel":6,"prec":20},
    {"rel":6,"prec":10},
    {"rel":6,"prec":5},
    {"rel":6,"prec":5},
    {"rel":6,"prec":5},
    {"rel":6,"prec":20}]
var newArray = compressArray(data2);
console.log(newArray);
