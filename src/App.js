import './App.css';

function Protagonist() {
  return (
    <div class='center-text'>
      <div id='personagem' style={{
        backgroundImage:'url(./assets/playerDown.png)',
        width:'48px',
        height:'68px'
      }}
      ></div>
    </div>
  );
}

document.addEventListener('keypress', function(e){
  
  var personagem = document.getElementById('personagem');

  if (e.key === 'a' || e.key === 'A') {
    personagem.style.backgroundImage='url(./assets/playerLeft.png)';
    personagem.style.animation='Move infinite 0.7s steps(4)';
  }
  if (e.key === 'd' || e.key === 'D') {
    personagem.style.backgroundImage='url(./assets/playerRight.png)';
    personagem.style.animation='Move infinite 0.7s steps(4)';
  }
  if (e.key === 'w' || e.key === 'W') {
    personagem.style.backgroundImage='url(./assets/playerUp.png)';
    personagem.style.animation='Move infinite 0.7s steps(4)';
  }
  if (e.key === 's' || e.key === 'S') {
    personagem.style.backgroundImage='url(./assets/playerDown.png)';
    personagem.style.animation='Move infinite 0.7s steps(4)';
  }
});

document.addEventListener('keyup', function(e){
  var personagem = document.getElementById('personagem');
  personagem.style.animation='none';
});

export default Protagonist;
