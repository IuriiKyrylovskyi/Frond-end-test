// task_2 ----------------------
function getMin() {
	const arr = [2, 4, 5, 7, 9, 4, 1, 16];
	let minNumber = Math.min(...arr);
	return minNumber;
}
console.log("2.1 getMin: " + getMin());


let getMinArrow = () => {
	const arr = [2, 4, 5, 7, 9, 4, 9, 16];
	let minNumber = Math.min(...arr);
	return minNumber;
}
console.log("2.2 getMinArrow: " + getMinArrow());


let arrMinShort = [11, 67, 12, 56, 78, 31];
let arrMinShortFunc = () => Math.min(...arrMinShort);
console.log("2.3 arrShort: " + arrMinShortFunc());



// task_3 ----------------------
let arrEven = [11, 67, 12, 56, 78, 31];
let newArrEven = [];

function getEven(value) {
	return value % 2 === 0;
}

newArrEven = arrEven.filter(getEven);
console.log("3.1 newArrEven = " + newArrEven);


let getEvenArrow = value => value % 2 === 0;

newArrEvenArrow = arrEven.filter(getEvenArrow);
console.log("3.1 newArrEvenArrow = " + newArrEvenArrow);


let arrEvenShort = arrEven.filter(value => value % 2 === 0);
console.log("3.1 arrEvenShort = " + arrEvenShort);



// task_4 ----------------------
let peopleArr = [
	{
		name: 'John',
		birthDate: '1995-12-11'
	},
	{
		name: 'Boris',
		birthDate: '1999-01-10'
	},
	{
		name: 'John',
		birthDate: '1983-02-27'
	},
	{
		name: 'John',
		birthDate: '1994-05-05'
	},
	{
		name: 'Nicola',
		birthDate: '2001-09-21'
	}
];

let searchName = 'John';

let searchByNameFilter = peopleArr.filter(name => name.name == searchName);
console.log('searchByNameFilter - ' + JSON.stringify(searchByNameFilter));



