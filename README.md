### Мое резюме 
***

## Калашникова Юлия 
_tel: +79858542579_
_email: pmalian@list.ru_
__Frontend - разработчик__

### Коротко обо мне 
 Ищу стажировку на полный рабочий день

Дата рождения|Город|Гражданство|
:------|:-------|:-------
20.01.1994|Москва| РФ|

### Опыт работы

Организация|Должность|Обязанности|Год
:----|:----|:----|:---
ДОУ СОШ №103|Учитель информатики|Подготовка и проведение уроков| 2016-2019
### Ключевые навыки 
+ HTML5 CSS3
+ JavaScript
+ Git
+ Node
+ Vue.js
### Примеры кода
```
JavaScript:

function highAndLow(str){
    let numbers = str.split(' ').map(strItem => strItem * 1);
  
    let theSameLittle = +Infinity;
    let theSameBig = -Infinity;
    
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] < theSameLittle) {
        theSameLittle = numbers[i];
      }
      if(numbers[i] > theSameBig) {
        theSameBig = numbers[i];
      }
    }
    return `${theSameBig} ${theSameLittle}`;
  }
```
