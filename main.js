var monk = [];

// Функция для поиска случайных целых чисел
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для поиска случайных целых чисел без повторений
function Randrand(mond){
  for(i=0; i<11; i++){
    num = getRandomInt(1, 11);
    h=1;
    while(h == 1){
      k=0; j=0;
      while(k < 11){
        if(mond[k] === num){
          j++;
        }
        k++;
      }
      if(j === 0){
        mond[i]=num;
        h=2;
      } else {
        num = getRandomInt(1, 11);
      }
    }
  }
  return mond;
}

function stepEvil () {
  i++; j++;
  evil_amount = evil_amount + rand_num[i];
card_evil[j].innerHTML = rand_num[i];
card_evil[j].style.display = "block";
}
function stepHero () {
  i++; k++;
    hero_amount = hero_amount + rand_num[i];
    card_hero[k].innerHTML = rand_num[i];
    card_hero[k].style.display = "block";
    amount_hero.innerHTML = hero_amount;
}

var doc = document,
    card_evil=doc.getElementsByClassName("card_evil"),
    card_hero=doc.getElementsByClassName("card_hero"),
    amount_evil=doc.getElementById("amount_evil"),
    amount_hero=doc.getElementById("amount_hero"),
    win_evil=doc.getElementById("win_evil"),
    win_hero=doc.getElementById("win_hero"),
    more=doc.getElementById("more"),
    pass=doc.getElementById("pass");

var rand_num = Randrand(monk);
var i = -1, j = -1, k=-1, h=0, l=0, g=0;
var evil_amount = 0, hero_amount = 0;

// Вывод первых двух карт противника и одного героя
stepEvil();
amount_evil.innerHTML = evil_amount - rand_num[0];
stepHero();
stepEvil();
amount_evil.innerHTML = evil_amount - rand_num[0];

// Если кликнешь по еще, то дадут карту тебе и противнику
more.onclick = function () {
  if(hero_amount < 22 && g === 0){
   stepHero();
  }
  if((evil_amount + rand_num[i+1]) < 22){
    stepEvil();
    amount_evil.innerHTML = evil_amount - rand_num[0];
  }else{
    h=1;
  }
}

// Если кликнешь по пропустить, то дадут карту противнику и проверят на наличие выйгрыша
pass.onclick = function () {
  l=1;
  if((evil_amount + rand_num[i+1]) < 22){
    stepEvil();
    amount_evil.innerHTML = evil_amount - rand_num[0];
  }else{
    h=1;
  }
  if(l == 1 && h == 1){
    if((evil_amount < hero_amount)  && (hero_amount < 22)){
      win_evil.innerHTML = "Поражение";
      win_hero.innerHTML = "Победа";
    }else{
      win_hero.innerHTML = "Поражение";
      win_evil.innerHTML = "Победа";
    }
    card_evil[0].style.color = "black";
    amount_evil.innerHTML = evil_amount;
    g=1;
  }
}
