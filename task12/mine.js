const symbols = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters){
  let key = '';
  for(let i = 0; i < length; i++){
    key += characters[Math.round(Math.random() * (characters.length - 1))];    
  }  
  return console.log(key)
}



generateKey(16, symbols)

