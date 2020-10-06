/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

document.addEventListener('mousemove', (e) => {
  const moveAt = (e) => {
    e.target.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';
    e.target.style.top = e.pageY - e.target.offsetHeight / 2 + 'px';
  };
  e.target.addEventListener('mousedown', (e) => {
    moveAt(e);
  });
  //moveAt(e);
  e.target.addEventListener('mouseup', (e) => {
    console.log(123);
  });
});

export function createDiv() {
  function randNum() {
    return Math.round(Math.random() * 500);
  }
  const div = document.createElement('div');
  div.classList = 'draggable-div';
  div.style.width = `${randNum()}px`;
  div.style.height = `${randNum()}px`;
  div.style.top = `${randNum()}px`;
  div.style.left = `${randNum()}px`;
  div.style.background = `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
  homeworkContainer.append(div);
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  createDiv();
});
