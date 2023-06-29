//Задание 1 - Решение:


function getDataType(arg) {
  return typeof arg;
}

console.log(getDataType(5));
console.log(getDataType('Hello'));
console.log(getDataType(undefined));


//Задание 2 - Решение:


const a = () => console.log("a");
const b = () => console.log("b");
const c = a || b ? a() : b();
console.log(c);


//В консоль будет выведено:
//a
//undefined

//Потому что `a || b` вернет функцию a, и функция a() выполнится и выведет в консоль 'a'. Затем переменной `c` будет присвоено значение `undefined`, потому что функция a() ничего не возвращает.

//Задание 1 (Функции) - Решение:


function sumAllArguments(arg1, arg2, arg3, arg4, arg5) {
    let sum = 0;
  
    if (typeof arg1 === 'number') {
      sum += arg1;
    }
    if (typeof arg2 === 'number') {
      sum += arg2;
    }
    if (typeof arg3 === 'number') {
      sum += arg3;
    }
    if (typeof arg4 === 'number') {
      sum += arg4;
    }
    if (typeof arg5 === 'number') {
      sum += arg5;
    }
  
    return sum;
  }

  console.log(sumAllArguments(1, 2, 3, '4', 5));


//Задание 1 (Объекты и Массивы) - Решение:


function convertArrToObj(arr) {
  const obj = {};
  arr.forEach((item, index) => obj[index] = item);
  return obj;
}

const arr = [1, null, 'test', undefined];
const obj = convertArrToObj(arr);
console.log(obj);


//Задание 2 (Объекты и Массивы) - Решение:


function countFromArr(arr) {
  const obj = {};
  arr.forEach((item) => {
    if(obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  });
  return obj;
}

const arr = [1, 1, 1, 'test', 'test'];
const res = countFromArr(arr);
console.log(res);


//Задание 3 (Объекты и Массивы) - Решение:


function groupByField(arr, field) {
  const obj = {};
  arr.forEach((item) => {
    const fieldValue = item[field];
    if(obj[fieldValue]) {
      obj[fieldValue].push(item);
    } else {
      obj[fieldValue] = [item];
    }
  });
  return obj;
}

const arr = [{test: 1},{test: 2},{test: 3},{test: 1},{test: 1}];
const res = groupByField(arr, 'test');
console.log(res);


//Задание 1 (Прототипы, наследование) - Решение:


Number.prototype.plus = function(num) {
  return this + num;
}

console.log((1).plus(2)); // 3

//Задание 1 Асинхронная работа в JS

//В консоль будет выведено:

//start
//promise constructor
//final
//p2
//p4