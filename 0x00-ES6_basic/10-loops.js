export default function appendToEachArrayValue(array, appendString) {
	const returnedArray = [];
	for (const items in array){
		returnedArray.push(appendString + item);
	}

	return returnedArray;
}
