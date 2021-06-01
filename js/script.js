let num = 266219;

let numString = String(num);

let numDegree = (numString[0] * numString[1] * numString[2] * numString[3] * numString[4] * numString[5])**3;

let numDegreeString = String(numDegree);

for (var i = 0; i < numDegreeString.length; i++) {
    if (i < 2) {
        console.log(numDegreeString[i]);
    }
    
    

};