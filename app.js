let max = 50;
let num = 0;
let count = 0;

while(num < max){
  num = num + 1;
  count++;
  if((count % 10) == 0 && count < 41){
    console.log('今'+ count +'回ループしました。');
  }else if((count % 4)== 0){
    console.log('4で割れる数です。'+ count);
  }else if(count == 50){
    alert('50回カウントが終わりました。');
  }
  
}


