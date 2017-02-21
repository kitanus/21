var monk = [];
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
var i = 0, j = 0, k=0;

card_evil[j].innerHTML = rand_num[i];
i++;
card_hero[k].innerHTML = rand_num[i];
i++;
j++;
card_evil[j].innerHTML = rand_num[i];

more.onclick = function () {
  i++; k++;
  card_hero[k].innerHTML = rand_num[i];
  j++; i++;
  card_evil[j].innerHTML = rand_num[i];
}
pass.onclick = function () {
  i++; j++;
  card_evil[j].innerHTML = rand_num[i];
}
