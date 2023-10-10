function task3_1() {
  alert('Діалогове вікно при натисканні на посилання!');
}

function task3_2() {
  alert('Hello, world!');
}

function task3_3() {
  alert('Діалогове вікно!');
  document.write('Hello, world!');
}

function task3_4() {
  var userInput = prompt('Введіть інформацію:');
  if (userInput !== null) {
    alert('Ви ввели: ' + userInput);
  }
}

function task3_5() {
  var link = document.getElementById('task3_5_link');
  link.onmouseover = function () {
    var userInput = prompt('Введіть текст:');
    if (userInput !== null) {
      alert('Ви ввели: ' + userInput);
    }
  };
}

function task3_6() {
  var num1 = parseFloat(prompt('Введіть перше число:'));
  var num2 = parseFloat(prompt('Введіть друге число:'));
  var sum = num1 + num2;
  alert('Сума чисел: ' + sum);
}

function task3_7() {
  var num1 = parseFloat(prompt('Введіть перше число:'));
  var num2 = parseFloat(prompt('Введіть друге число:'));
  var maxNumber = Math.max(num1, num2);
  alert('Найбільше число: ' + maxNumber);
}

function task3_8() {
  var monthNumber = parseInt(prompt('Введіть номер місяця (1-12):'));
  var season = '';
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      season = 'Зима';
      break;
    case 3:
    case 4:
    case 5:
      season = 'Весна';
      break;
    case 6:
    case 7:
    case 8:
      season = 'Літо';
      break;
    case 9:
    case 10:
    case 11:
      season = 'Осінь';
      break;
    default:
      season = 'Невідомий місяць';
  }
  alert('Пора року: ' + season);
}

function task3_9() {
  if (confirm("Натиснули кнопку 'Ок'")) {
    alert("Ви натиснули 'Ок'");
  } else {
    alert("Ви натиснули 'Відміна'");
  }
}

function task3_10() {
  var numberOfStudents = prompt('Введіть кількість учнів:');
  var studentList = '';
  if (numberOfStudents !== null) {
    for (var i = 0; i < numberOfStudents; i++) {
      var lastName = prompt('Прізвище учня ' + (i + 1) + ':');
      var firstName = prompt("Ім'я учня " + (i + 1) + ':');
      studentList += 'Учень ' + (i + 1) + ': ' + lastName + ' ' + firstName + '\n';
    }
    alert('Список учнів:\n' + studentList);
  }
}
