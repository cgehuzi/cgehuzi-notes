<< [На главную](../README.md)

# Assert - тестирование

---

Навигация:

- [Assert - тестирование](#node--assert---тестирование)
  - [Assert : встроенный модуль](#assert--встроенный-модуль)
  - [Power Assert : надстройка модуля assert](#power-assert--надстройка-модуля-assert)
  - [Assert : Основные методы](#assert--основные-методы)

---

## Assert : встроенный модуль

Node.js поставляется с модулем assert, в котором есть несколько функций, упрощающих написание утверждений (тестов).

- [Документация](https://nodejs.org/api/assert.html)

```js
import { strict as assert } from 'assert';
// assert по умолчанию считается устаревшим
// правильно использовать strict
```

## Power Assert : надстройка модуля assert

Библиотека, предоставляющая визуально понятный вывод ошибок для наиболее удобной отладки. Синтаксис на 100% совместим с модулем assert. Требует лишь подключения библтиотеки.

- [Документация](https://github.com/power-assert-js/power-assert)

```js
// npm install --save-dev power-assert
import assert from 'power-assert';
```

## Assert : Основные методы

```js
assert(expression); // проверка истинности выражения
```

<details>
<summary>Примеры</summary>

```js
const ident = (a) => a;

assert(ident(1) === 1); // ==> всё ок
assert(ident(2) === 1); // ==> выдаст ошибку

// Uncaught AssertionError [ERR_ASSERTION]: false == true
// generatedMessage: true,
// code: 'ERR_ASSERTION',
// actual: false,
// expected: true,
// operator: '=='
```

</details><br>

```js
assert.equal(actual, expected); // проверка равенства элементов (по ссылке)
assert.notEqual(actual, expected); // проверка неравенства элементов (по ссылке)
```

<details>
<summary>Примеры</summary>

```js
const ident = (a) => a;

assert.equal(ident(1), 1); // ==> всё ок
assert.equal(ident([1]), [1]); // ==> выдаст ошибку

// Uncaught AssertionError [ERR_ASSERTION]: [1] == [1]
// generatedMessage: true,
// code: 'ERR_ASSERTION',
// actual: [1],
// expected: [1],
// operator: '=='

assert.notEqual(ident(2), 1); // ==> всё ок
assert.notEqual(ident([1]), [1]); // ==> всё ок
assert.notEqual(ident(1), 1); // ==> выдаст ошибку

// Uncaught AssertionError [ERR_ASSERTION]: 1 != 1
// generatedMessage: true,
// code: 'ERR_ASSERTION',
// actual: 1,
// expected: 1,
// operator: '!='
```

</details><br>

```js
assert.deepEqual(actual, expected); // проверка равенства элементов (по значению)
assert.notDeepEqual(actual, expected); // проверка неравенства элементов (по значению)
```

<details>
<summary>Примеры</summary>

```js
const ident = (a) => a;

assert.deepEqual(ident([1]), [1]); // ==> всё ок
assert.deepEqual(ident([2]), [1]); // ==> выдаст ошибку

// Uncaught AssertionError [ERR_ASSERTION]: Expected values to be loosely deep-equal: [2] should loosely deep-equal [1]
// generatedMessage: true,
// code: 'ERR_ASSERTION',
// actual: [2],
// expected: [1],
// operator: 'deepEqual'

assert.notDeepEqual(ident([2]), [1]); // ==> всё ок
assert.notDeepEqual(ident([1]), [1]); // ==> выдаст ошибку

// Uncaught: AssertionError [ERR_ASSERTION]: Expected "actual" not to be loosely deep-equal to: [1]
// generatedMessage: true,
// code: 'ERR_ASSERTION',
// actual: [1],
// expected: [1],
// operator: 'notDeepEqual'
```

</details><br>
