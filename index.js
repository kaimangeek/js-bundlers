// Используем стрелочные функции
// Ключевое слово function
const add = (a, b) => a + b;

// Используем деструктуризацию объектов
// Ключевое слово function и метод concat
const getUserInfo = ({ name, age }) => {
    return `Name: ${name}, Age: ${age}`;
};

// Используем spread-оператор
// Замена ... на apply для spread-оператора
const numbers = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => a + b + c + d + e;
const result = sum(...numbers);

// Используем let и const
// Замена const и let на var
let count = 0;
const increment = () => {
    count++;
    console.log(count);
};

// Используем классы
// Вспомогательные функции для классов: _classCallCheck, _createClass
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

const dog = new Animal('Dog');
dog.speak();