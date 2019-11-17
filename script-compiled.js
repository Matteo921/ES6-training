'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var sayHello = function sayHello() {
  return alert('Hello world!');
};
sayHello();

//Zadanie 1.
//Twoim zadaniem będzie stworzenie dwóch zmiennych z wartościami Hello oraz World, a następnie połączenie ich metodą inną niż wymienione powyżej.
var hello = 'Hello';
var world = 'World';

function helloWorld() {
  console.log(hello + ' ' + world);
};
//zadanie 2.
//Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b. Przykładowo
var multiply = function multiply(x, y) {
  return x * y;
};

console.log(multiply(2, 5));
console.log(multiply(6, 6));

// zadanie 3.
//Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami:
//average(1) // 1
average(1, 3); // 2
average(1, 3, 6, 6); // 4

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.forEach(function (a, b, c) {
    return a + b + c;
  }) / args.length;
};

console.log(average(1));
console.log(average(1, 3));
console.log(multiply(1, 3, 6, 6));

//zadanie 4.
//Stwórz tablicę z ocenami const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], a następnie w umiejętny sposób przekaż oceny do funkcji average tak, aby otrzymać wynik. Skorzystaj z operatora spread!
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//zadanie 5.
//Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych - [1, 4, 'Iwona', false, 'Nowak']. Twoim zadaniem jest skorzystanie z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.
var name = [1, 4, 'Iwona', false, 'Nowak'];

var _names = names,
    _names2 = _slicedToArray(_names, 5),
    fristName = _names2[2],
    lastName = _names2[4];

console.log(fristName + ' ' + lastName);
