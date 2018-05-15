function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = [];
       
	   if (listA === null || listB === null){
	   		return null;
	   }

	   for (var i = 0; i < listA.length; i++) {
           var nextValue = listA[i];

           for (var j = 0; j < listB.length; j++){
           		if (listB[j] === nextValue) {
           			resultList.push(listB[j])
					break;
				}
		   }
       }
       
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = [];

        if (listA === null || listB === null){
            return null;
        }

        // this also works but without loops
        // resultList = listA.concat(listB.filter(function (item){
        	// return listA.indexOf(item) < 0;
		// }));

        for (var i = 0; i < listA.length; i++) {
            var nextValue = listA[i];

            for (var j = 0; j < listB.length; j++){
                if (listB[j] === nextValue) {
                    resultList.push(listB[j])
                    break;
                }
            }
        }

        for (var i = 0; i < listA.length; i++) {
            var nextValue = listA[i];
            inList = false;

            for (var j = 0; j < listB.length; j++){
                if (listB[j] === nextValue) {
                    inList = true;
                    break;
                }
            }

            if (inList === false) {
                resultList.push(nextValue);
            }
        }

        for (var i = 0; i < listB.length; i++) {
            var nextValue = listB[i];
            inList = false;

            for (var j = 0; j < listA.length; j++){
                if (listA[j] === nextValue) {
                    inList = true;
                    break;
                }
            }

            if (inList === false) {
                resultList.push(nextValue);
            }
        }

	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

	   var resultList = [];
	   var inList = false;

        if (listA === null || listB === null){
            return null;
        }

        for (var i = 0; i < listA.length; i++) {
            var nextValue = listA[i];
            inList = false;

            for (var j = 0; j < listB.length; j++){
                if (listB[j] === nextValue) {
                    inList = true;
                    break;
                }
            }

            if (inList === false) {
            	resultList.push(nextValue);
			}
        }
       
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];

        if (listA === null || listB === null){
            return null;
        }

        for (var i = 0; i < listA.length; i++) {
            var nextValue = listA[i];
            inList = false;

            for (var j = 0; j < listB.length; j++){
                if (listB[j] === nextValue) {
                    inList = true;
                    break;
                }
            }

            if (inList === false) {
                resultList.push(nextValue);
            }
        }

        for (var i = 0; i < listB.length; i++) {
            var nextValue = listB[i];
            inList = false;

            for (var j = 0; j < listA.length; j++){
                if (listA[j] === nextValue) {
                    inList = true;
                    break;
                }
            }

            if (inList === false) {
                resultList.push(nextValue);
            }
        }

	   return resultList;
	}	
	

}
