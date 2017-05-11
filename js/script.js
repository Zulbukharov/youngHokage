

/*основная задача данной программы, выводить самое
большое произведениев массиве*/

console.log('Hello, World!') //выводим коронное приветсвтие

var arr = [1, 2, 3, 4]; //создаем массив

//v 1. умножоем числа в массиве, второе значение задавал вручную

var arrTwo = [];

for (var i = 0; i < arr.length; i++) {
	arrTwo.push(arr[i] * arr[0]);
	arrTwo.push(arr[i] * arr[1]);
	arrTwo.push(arr[i] * arr[2]);
	arrTwo.push(arr[i] * arr[3]);

};

console.log(arrTwo);

arrTwo.sort(function(a, b){return a-b}); //сортировка чисел в массиве (от малого к большому)

console.log(arrTwo);

console.log(arrTwo[arrTwo.length-1]); //выводим самое большое значение

//v 2.
var myArr = [15, 52, 102, 60, 321, 22]

var arrThree = [];

function secondArrow() {
	for(var c = 0; c <myArr.length; c++) {
	for (var q = 0; q < myArr.length; q++) {
	arrThree.push(myArr[q] * myArr[c]);
	}
};
}

secondArrow();

arrThree.sort(function(a, b){return a-b});

console.log(arrThree)

console.log(arrThree[arrThree.length-2]);

//v 3.

var arrFour = myArr;

arrFour.sort(function(a, b){return a-b});

console.log(arrFour);

console.log(arrFour[arrFour.length-2]*arrFour[arrFour.length-1]);

// замыкания

function recu () {
	var currentCoun = 0;
	return function () {
		return currentCoun++;
	}
}

var zxc = recu();

console.log(zxc());

console.log(zxc());

// замыкания + html

function myCounter () {
	var currentCount = document.getElementById('myButton').value ;
	currentCount = 0;
	return function() {
	 	return alert(currentCount++);
	}
}

var userCounter = myCounter();

//перебор по объекту инстуркцией for/in

var obj  = {
	a: 1,
	b: 2,
	d: 3,
};

var oneObj = 0;

var arra = []

for(oneObj in obj) {
	arra.push(oneObj + ':' + obj[oneObj])
};

console.log(arra)

// инструкция в объекте

var myObj = {
	first: 1,
	second: 2,
	letspow: function powpow (first, second) {
		 return Math.pow(first, second)
	}
};

console.log(myObj.letspow(3, 3))

//d

var matrix = [3, 4, 5, 6, 'hello'];
var sum= 0, success = false;
compute_sum: if (matrix) {
	for(var x = 0; x < matrix.length; x++) {
		var row = matrix[x];
		if (!row) break compute_sum;
		for(var y = 0; y < row.length; y++) {
			var cell = row[y];
			if (isNaN(cell)) break compute_sum;
			sum += cell;
		}
	}
	success = true;
}

console.log(matrix)

 // инсттрукции в циклах (contnue, break)

 var arow = [1, 3, 4, 5];

 for(var q = 0; q < arow.length; q++) {
 	if (arow[q] % 2 !== 1) continue;//продолжить
 	console.log(arow[q])
 }

// начинаю практиковаться с local.Storage

var myDate = new Date();
console.log(myDate);
var hours = myDate.getHours().toString();
console.log(hours);
var minutes = myDate.getMinutes().toString();
console.log(minutes)
console.log(hours + " " + minutes);
console.log(myDate.getTime());

//timer
var n = eval(n);
var dateobj;
var qa = eval(localStorage.getItem('time'));
var qw = document.getElementById('myForm');
var kekalino = document.getElementById('myForma')

function Start () {
	dateobj = new Date();
	newtimer();
};

function newtimer() {
	var timec = new Date();
	n = eval(n);
	n = eval(((timec.getTime() - dateobj.getTime()) / 1000 / 60));
	n = n.toFixed(2);
	n = eval(n) + parseFloat(qa);
	qw.textContent = (n);

};

var blya = setInterval('newtimer()', 2000);
// начало секундомера после загрузки страницы.

// функция сохранения значения времени в localstorage (Done)

window.onbeforeunload = function(e) {
	n = eval(n);
	if (n === undefined || n === NaN || n === null) n = 0;
localStorage.setItem('time', n) 
var dialogText = 'Dialog text here';
e.returnValue = dialogText;
return dialogText;
};

//самовызывающаяся функция

(function fukek () {
	kekalino.textContent = (qa);
})();
