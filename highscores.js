const highScoreList = document.getElementById('highScoreList');
const highScore = JSON.parse(localStorage.getItem('highScore'))||[];

highScoreList.innerHTML = 
highScore.map(score => {
    return`<li class="high-score">${score.name} - ${score.score}</li>`;
}).join("");