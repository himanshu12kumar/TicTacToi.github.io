let cells = document.querySelectorAll('.cell');
cells = Array.from(cells);

var winMacth = [];
let currentplayer = "x";
let i;
var j;
var k=0;
var m = 0;
var n = 0;
const x = window.matchMedia("max-width:576px");
const y = window.matchMedia("max-width:768px");
let winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        document.getElementById('click_mp').playbackRate = 2;
        document.getElementById('click_mp').play();
        if(cell.innerText.trim() != "") return;
        cell.innerText = currentplayer;
        winMacth[cell.getAttribute('value')]=currentplayer;
        winningCombination.forEach(function(combination){
            if((winMacth[combination[0]] == currentplayer) && (winMacth[combination[1]] == currentplayer) && (winMacth[combination[2]] == currentplayer))
            {
                if(currentplayer == 'x'){
                    document.getElementById('wonmatch_mp1').pause();
                    document.getElementById('wonmatch_mp').play();
                    document.getElementById('result').innerHTML = currentplayer+'   Won the match';
                }
                if(currentplayer == 'o'){
                    document.getElementById('wonmatch_mp').pause();
                    document.getElementById('wonmatch_mp1').play();
                    document.getElementById('result_zero').innerHTML = currentplayer+'   Won the match';
                }
               if(y.matches){
                    document.getElementById('dance_tady').style.width = "55%";
                }
                else if(x.matches){
                    document.getElementById('dance_tady').style.width = "30%";
                }
                else{
                    document.getElementById('dance_tady').style.width = "70%";
                }   
               document.getElementById(combination[0]).style.backgroundColor = '#258cd5';
               document.getElementById(combination[1]).style.backgroundColor = '#258cd5';
               document.getElementById(combination[2]).style.backgroundColor = '#258cd5';
               for(i=0; i<8; i++){
                for(j=0; j<3; j++){
                   if(winningCombination[i][j] == combination[0]){
                    winningCombination[i][j] = 100;
                   }
                   if(winningCombination[i][j] == combination[1]){
                    winningCombination[i][j] = 100;
                   }
                   if(winningCombination[i][j] == combination[2]){
                    winningCombination[i][j] = 100;
                   }
                }
            }
            }
        });
        currentplayer = (currentplayer == "x") ? "o" : "x";
    });
    
});


function resetButton(){
    window.location = "index.html";
}
