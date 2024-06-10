let gameScore= JSON.parse(localStorage.getItem('score'));
if(!gameScore){
  gameScore={
    wins:0,
    losses:0,
    ties:0,
  }
}
scoreDisplay();

function myGame(myMove){
  const computerMove=pickcomputerMove();
  let result='';
  let result2='';
  if(myMove==='monkey'){  
    if(computerMove==='monkey'){
      result='Tie';
      result2='Game tie';
    }else if(computerMove==='robot'){
      result='You win';
      result2='Monkey unplugs Robot';
    }else if(computerMove==='pirate'){
      result='You lose';
      result2='Pirate skewers Monkey';
    }else if(computerMove==='ninja'){
      result='You win';
      result2='Monkey fools Ninja';
    }else if(computerMove==='zombie'){
      result='You lose';
      result2='Zombie savages Monkey';
    }
  }else if(myMove==='robot'){
    if(computerMove==='monkey'){
      result='You lose';
      result2='Monkey unplugs Robot';
    }else if(computerMove==='robot'){
      result='Tie';
      result2='Game tie';
    }else if(computerMove==='pirate'){
      result='You lose';
      result2='Pirate drowns Robot';
    }else if(computerMove==='ninja'){
      result='You win';
      result2='Robot chokes Ninja';
    }else if(computerMove==='zombie'){
      result='You win';
      result2='Robot crushes Zombie';
    }

  }else if(myMove==='pirate'){
    if(computerMove==='monkey'){
      result='You win';
      result2='Pirate skewers Monkey';
    }else if(computerMove==='robot'){
      result='You win';
      result2='Pirate drowns Robot';
    }else if(computerMove==='pirate'){
      result='Tie';
      result2='Game tie';
    }else if(computerMove==='ninja'){
      result='You lose';
      result2='Ninja karate chops Pirate';
    }else if(computerMove==='zombie'){
      result='You lose';
      result2='Zombie eats Pirate';
    }

  }else if(myMove==='ninja'){
    if(computerMove==='monkey'){
      result='You lose';
      result2='Monkey fools Ninja';
    }else if(computerMove==='robot'){
      result='You lose';
      result2='Robot chokes Ninja';
    }else if(computerMove==='pirate'){
      result='You win';
      result2='Ninja karate chops Pirate';
    }else if(computerMove==='ninja'){
      result='Tie';
      result2='Game tie';
    }else if(computerMove==='zombie'){
      result='You win';
      result2='Ninja decapitates Zombie';
    }

  }else if(myMove==='zombie'){
    if(computerMove==='monkey'){
      result='You win';
      result2='Zombie savages Monkey';
    }else if(computerMove==='robot'){
      result='You lose';
      result2='Robot crushes Zombie';
    }else if(computerMove==='pirate'){
      result='You win';
      result2='Zombie eats Pirate';
    }else if(computerMove==='ninja'){
      result='You lose';
      result2='Ninja decapitates Zombie';
    }else if(computerMove==='zombie'){
      result='Tie';
      result2='Game tie';
    }

  }

  scoreDisplay();
  document.querySelector('.moves').innerHTML=`You picked ${myMove}   <img src="faces/${myMove}.png" class="face2">. Computer picked ${computerMove}<img src="faces/${computerMove}.png" class="face2">`;
  document.querySelector('.result2').innerHTML=result2;
  document.querySelector('.result').innerHTML=result;

  if(result==='You win'){
    gameScore.wins+=1;
  } else if( result==='You lose'){
    gameScore.losses+=1;
  }else if(result==='Tie'){
    gameScore.ties+=1;
  } 

  localStorage.setItem('score',JSON.stringify(gameScore));
}     

function pickcomputerMove(){
  let computerMove='';
  const randomNumber= Math.random();
  if(randomNumber>=0 && randomNumber<1/5){
    computerMove='monkey';
  } else if(randomNumber>=1/5 && randomNumber<2/5){
    computerMove='robot';
  } else if(randomNumber>=2/5 && randomNumber<3/5){
    computerMove='pirate';
  } else if(randomNumber>=3/5 && randomNumber<4/5){
    computerMove='ninja';
  } else if(randomNumber>=4/5 && randomNumber<1){
    computerMove='zombie';
  } 
  return computerMove;    
}
function scoreDisplay(){
  document.querySelector('.score').innerHTML=`Wins:${gameScore.wins} , Losses:${gameScore.losses} , Ties:${gameScore.ties}`;
  
}

let isautoPlaying=false;
let intervalId='';
function autoPlay(){
  if(!isautoPlaying){
    intervalId= setInterval(() => {
      const myMove=pickcomputerMove();
      myGame(myMove);
    },2000);
    isautoPlaying=true;
  } else{
    clearInterval(intervalId);
    isautoPlaying=false;
  }
}

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='1'){
    myGame('monkey');
  } else if(event.key==='2'){
    myGame('robot');
  } else if(event.key==='3'){
    myGame('pirate');
  } else if(event.key==='4'){
    myGame('ninja')
  } else if(event.key==='5'){
    myGame('zombie')
  }
})





