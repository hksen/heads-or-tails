

let coin = document.querySelector('.coin'); 
let flipBtn = document.querySelector('.flip'); 

let heads = 0; 
let tails = 0; 

coin.addEventListener('animationend', () => {
    updateStats();
});

flipBtn.addEventListener("click", ()=> {

  heads = 0;
  tails = 0;


  const i = Math.floor(Math.random() * 2);

  coin.style.animation = i ? 'spin-heads 3s forwards' : 'spin-tails 3s forwards';

  i ? heads++ : tails++;

}); 


function updateStats() {
    stats.textContent = (tails === 1) ? 'Tails' : 'Heads';
}
