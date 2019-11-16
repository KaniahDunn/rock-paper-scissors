const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const lizard = document.querySelector('.lizard')
const spock = document.querySelector('.spock')
const result = document.querySelector('.result')


rock.addEventListener('click', ()=>{
    let compChoice = Math.random();
    if (compChoice < 0.21) {
        compChoice = "rock";
    } else if(compChoice <= 0.42) {
        compChoice = "paper";
    } else if (compChoice <= 0.63){
        compChoice = "scissors";
    }else if (compChoice <= 0.84){
        compChoice = "lizard"
    }else{
        compChoice = "spock"
    }
    console.log(compChoice);
    
    if (compChoice === "rock"){
        result.textContent = 'Sorry, it\'s a tie'
    }else if (compChoice === "spock"){
        result.textContent = 'Sorry, Spock vaporizes rock';
    }else if (compChoice === "paper"){
        result.textContent = 'Sorry, paper covers rock';
    }else if(compChoice === 'scissors'){
        result.textContent = 'Yay, you win!! Rock crushes scissors';
    }else{
        result.textContent = 'Yay, you win!! Rock crushes lizard :(';
        
    }

})

paper.addEventListener('click', ()=>{
    let compChoice = Math.random();
    if (compChoice < 0.21) {
        compChoice = "rock";
    } else if(compChoice <= 0.42) {
        compChoice = "paper";
    } else if (compChoice <= 0.63){
        compChoice = "scissors";
    }else if (compChoice <= 0.84){
        compChoice = "lizard"
    }else{
        compChoice = "spock"
    }
    console.log(compChoice);
    
    
    if (compChoice === "paper"){
        result.textContent = 'Sorry, it\'s a tie'
    }else if (compChoice === "spock"){
        result.textContent = 'Yay, you win!! Paper disproves spock';
    }else if (compChoice === "rock"){
        result.textContent = 'Yay, you win!! Paper covers rock';
    }else if(compChoice === 'scissors'){
        result.textContent = 'Sorry, scissors cuts paper';
    }else{
        result.textContent = 'Sorry, lizard eats paper';
    }
})

scissors.addEventListener('click', ()=>{
    let compChoice = Math.random();
    if (compChoice < 0.21) {
        compChoice = "rock";
    } else if(compChoice <= 0.42) {
        compChoice = "paper";
    } else if (compChoice <= 0.63){
        compChoice = "scissors";
    }else if (compChoice <= 0.84){
        compChoice = "lizard"
    }else{
        compChoice = "spock"
    }
    console.log(compChoice);
    
    if (compChoice === "scissors"){
        result.textContent = 'Sorry, it\'s a tie'
    }else if (compChoice === "spock"){
        result.textContent = 'Sorry, spock smashes scissors';
    }else if (compChoice === "rock"){
        result.textContent = 'Sorry, rock crushes scissors ';
    }else if(compChoice === 'paper'){
        result.textContent = 'Yay, you win!! Scissors cuts paper';
    }else{
        result.textContent = 'Yay, you win!! Scissors decapitates lizard';
    }
})

lizard.addEventListener('click', ()=>{
    let compChoice = Math.random();
    if (compChoice < 0.21) {
        compChoice = "rock";
    } else if(compChoice <= 0.42) {
        compChoice = "paper";
    } else if (compChoice <= 0.63){
        compChoice = "scissors";
    }else if (compChoice <= 0.84){
        compChoice = "lizard"
    }else{
        compChoice = "spock"
    }
    console.log(compChoice);
    
    if (compChoice === "lizard"){
        result.textContent = 'Sorry, it\'s a tie'
    }else if (compChoice === "spock"){
        result.textContent = 'Yay, you win!! Lizard poisons Spock';
    }else if (compChoice === "rock"){
        result.textContent = 'Sorry, rock crushes lizard ';
    }else if(compChoice === 'paper'){
        result.textContent = 'Yay, you win!! Lizard eats paper';
    }else{
        result.textContent = 'Sorry, scissors decapitates lizard';
    }
})

spock.addEventListener('click', ()=>{
    let compChoice = Math.random();
    if (compChoice < 0.21) {
        compChoice = "rock";
    } else if(compChoice <= 0.42) {
        compChoice = "paper";
    } else if (compChoice <= 0.63){
        compChoice = "scissors";
    }else if (compChoice <= 0.84){
        compChoice = "lizard"
    }else{
        compChoice = "spock"
    }
    console.log(compChoice);
    
    if (compChoice === "spock"){
        result.textContent = 'Sorry, it\'s a tie'
    }else if (compChoice === "scissors"){
        result.textContent = 'Yay, you win!! Spock smashes scissors';
    }else if (compChoice === "rock"){
        result.textContent = 'Yay, you win!! Spock vaporizes rock';
    }else if(compChoice === 'paper'){
        result.textContent = 'Sorry, paper disproves spock';
    }else{
        result.textContent = 'Sorry, lizzard poisons spock';
    }
})