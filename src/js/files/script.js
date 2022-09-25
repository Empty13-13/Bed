// Подключение функционала "Чертогов Фрилансера"
import {spollers} from "./functions.js";

spollers()

//Табы
document.addEventListener("DOMContentLoaded", function () {
  let btn1 = document.querySelector('.btn1');
  let btn2 = document.querySelector('.btn2');
  let btn3 = document.querySelector('.btn3');
  let text1 = document.querySelector('.text1');
  let text2 = document.querySelector('.text2');
  let text3 = document.querySelector('.text3');

  btn1.classList.add('_active')
  text2.classList.add('_hidden')
  text3.classList.add('_hidden')

  btn1.addEventListener("click", function (e) {
    btn1.classList.add('_active')
    btn2.classList.remove('_active')
    btn3.classList.remove('_active')
    text1.classList.remove('_hidden')
    text2.classList.add('_hidden')
    text3.classList.add('_hidden')
  });
  btn2.addEventListener("click", function (e) {
    btn2.classList.add('_active')
    btn1.classList.remove('_active')
    btn3.classList.remove('_active')
    text1.classList.add('_hidden')
    text2.classList.remove('_hidden')
    text3.classList.add('_hidden')
  });
  btn3.addEventListener("click", function (e) {
    btn3.classList.add('_active')
    btn2.classList.remove('_active')
    btn1.classList.remove('_active')
    text1.classList.add('_hidden')
    text2.classList.add('_hidden')
    text3.classList.remove('_hidden')
  });

});

//Кнопки на товарах
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    let titles = document.querySelectorAll('.t-product__option-title_buttons')
    let btns = document.querySelectorAll('.t-product__option-checkmark_image');
    console.log(btns.length,titles.length)

    let colorData = [
      {
        title: 'Velutto 02', color: '#C09F7E'
      }, {
        title: 'Velutto 03', color: '#876957'
      }, {
        title: 'Velutto 04', color: '#C9B4A9'
      }, {
        title: 'Velutto 05', color: '#D4C2B4'
      }, {
        title: 'Velutto 06', color: '#C0AEAE'
      }, {
        title: 'Velutto 08', color: '#827C7E'
      }, {
        title: 'Velutto 09', color: '#A2959D'
      }, {
        title: 'Velutto 10', color: '#80728C'
      }, {
        title: 'Velutto 11', color: '#B8A0B8'
      }, {
        title: 'Velutto 14', color: '#8BB2AB'
      }, {
        title: 'Velutto 15', color: '#924B77'
      }, {
        title: 'Velutto 17', color: '#C5BDB2'
      }, {
        title: 'Velutto 20', color: '#015058'
      }, {
        title: 'Velutto 21', color: '#C7B8B1'
      }, {
        title: 'Velutto 22', color: '#7C6869'
      }, {
        title: 'Velutto 23', color: '#4A3A36'
      }, {
        title: 'Velutto 24', color: '#392E2C'
      }, {
        title: 'Velutto 25', color: '#472749'
      }, {
        title: 'Velutto 26', color: '#1C3D6A'
      }, {
        title: 'Velutto 27', color: '#D75C25'
      }, {
        title: 'Velutto 28', color: '#B7A411'
      }, {
        title: 'Velutto 29', color: '#622832'
      }, {
        title: 'Velutto 30', color: '#677965'
      }, {
        title: 'Velutto 31', color: '#5EA555'
      }, {
        title: 'Velutto 32', color: '#626471'
      }, {
        title: 'Velutto 33', color: '#036554'
      },{
        title: 'Velutto 34', color: '#101010'
      },{
        title: 'Velutto 35', color: '#654256'
      }, {
        title: 'Velutto 36', color: '#816765'
      }, {
        title: 'Velutto 37', color: '#AF999B'
      }, {
        title: 'Velutto 38', color: '#CF0047'
      }, {
        title: 'Velutto 39', color: '#DF6649'
      }, {
        title: 'Velutto 40', color: '#F7D23F'
      }, {
        title: 'Velutto 41', color: '#B65FB6'
      }, {
        title: 'Velutto 42', color: '#3DC593'
      }, {
        title: 'Velutto 43', color: '#6AB0A8'
      }, {
        title: 'Velutto 44', color: '#03B4C9'
      }, {
        title: 'Velutto 45', color: '#0374D9'
      }, {
        title: 'Velutto 46', color: '#688FCE'
      }, {
        title: 'Velutto 47', color: '#5585AD'
      }, {
        title: 'Velutto 48', color: '#6171A6'
      }, {
        title: 'Velutto 52', color: '#989AA1'
      }, {
        title: 'Velutto 53', color: '#223132'
      }, {
        title: 'Velutto 54', color: '#015278'
      }, {
        title: 'Velutto 55', color: '#A0574F'
      }, {
        title: 'Velutto 56', color: '#CA8A25'
      },
    ]
    if (titles.length && btns.length) {
      titles.forEach((item,index) => {
        let color = ''
        colorData.forEach(data => {
          if(data.title === item.innerHTML) {
            color = data.color
          }
        })
        if(color.length > 0) {
          btns[index].style.cssText += `background: ${color};`;
        } else {
          btns[index].style.cssText += `background: linear-gradient(blue, pink);`;
        }
      })
    }
  }, 1000)
})
