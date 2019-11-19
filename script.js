const sayHello = () => alert('Hello world!');
sayHello();

//Zadanie 1.
//Twoim zadaniem będzie stworzenie dwóch zmiennych z wartościami Hello oraz World, a następnie połączenie ich metodą inną niż wymienione powyżej.
const hello = 'Hello';
const world = 'World';

function helloWorld() {
	console.log(`${hello} ${world}`);
};
//zadanie 2.
//Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b. Przykładowo
 const multiply = (x, y) => { return x * y} ;

 console.log(multiply(2,5));
 console.log(multiply(6,6));

// zadanie 3.
//Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami:
//average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4

const average = (...args) => args.forEach((a, b, c) => a + b + c) / args.length;

function calculate(array) {
    return array.reduce( (a,b) => a + b) / array.length;
}
console.log(calculate([1, 3, 6, 6]));

console.log(average(1))
console.log(average(1, 3));
console.log(multiply(1, 3, 6, 6))

//zadanie 4.
//Stwórz tablicę z ocenami const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], a następnie w umiejętny sposób przekaż oceny do funkcji average tak, aby otrzymać wynik. Skorzystaj z operatora spread!
const grades = [1,5,5,5,4,3,3,2,1];

console.log(average(...grades));

//zadanie 5.
//Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych - [1, 4, 'Iwona', false, 'Nowak']. Twoim zadaniem jest skorzystanie z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.
const name = [1,4, 'Iwona', false, 'Nowak'];
const [ ,, fristName, , lastName] = names;
console.log(`${fristName} ${lastName}`);