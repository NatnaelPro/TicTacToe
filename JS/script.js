let record = [];

let choice = 'x';

let hasAWinner = false;

let level = 'medium';

let human = 'x';

let xWinCount = 0;

let yWinCount = 0;


let displayResult = (str, position) => {

    hasAWinner = true;

    document.querySelector('.dash-line-container').style.display = 'block';
    //document.querySelector('.game-result').style.display = 'block';

    if(position !== 'draw'){
        if(position ===  'h1'){
            let line = document.createElement('div');
            line.classList.add('horizontal-dashed-line');
            document.querySelector('.dash-line-container').appendChild(line);
            document.querySelector('.horizontal-dashed-line').style.top = '13%';
        }else if(position ===  'h2'){
            let line = document.createElement('div');
            line.classList.add('horizontal-dashed-line');
            document.querySelector('.dash-line-container').appendChild(line);
            document.querySelector('.horizontal-dashed-line').style.top = '43%';
        }else if(position ===  'h3'){
            let line = document.createElement('div');
            line.classList.add('horizontal-dashed-line');
            document.querySelector('.dash-line-container').appendChild(line);
            document.querySelector('.horizontal-dashed-line').style.top = '73%';
        }else if(position ===  'v1'){
            let line = document.createElement('div');
            line.classList.add('vertical-dashed-line');
            document.querySelector('.dash-line-container').appendChild(line);
            document.querySelector('.vertical-dashed-line').style.left = '22%';
        }else if(position ===  'v2'){
            let line = document.createElement('div');
            line.classList.add('vertical-dashed-line');
            document.querySelector('.dash-line-container').appendChild(line);
            document.querySelector('.vertical-dashed-line').style.left = '48%';
        }else if(position ===  'v3'){
            let line = document.createElement('div');
            line.classList.add('vertical-dashed-line');
            document.querySelector('.dash-line-container').appendChild(line);
            document.querySelector('.vertical-dashed-line').style.left = '76%';
        }else if(position ===  'c1'){
            let line = document.createElement('div');
            line.classList.add('cross-dashed-line');
            document.querySelector('.dash-line-container').appendChild(line);
            document.querySelector('.cross-dashed-line').style.transform = 'rotate(135deg)';
        }else if(position ===  'c2'){
            let line = document.createElement('div');
            line.classList.add('cross-dashed-line');
            document.querySelector('.dash-line-container').appendChild(line);
            document.querySelector('.cross-dashed-line').style.transform = 'rotate(45deg)';
        }
    }
    


    setTimeout(function(){
        
        document.querySelector('.turn-conrainer').style.display = "none";

        //document.querySelector('.container').removeChild(document.querySelector('.hash_sign_container'));
        document.querySelector('.hash_sign_container').style.display = 'none';
        let container = document.querySelector('.game-result');
        let winner = document.createElement('p');
        winner.classList.add('result');
        if(level != 'playWithFriend' && str != 'XO'){
            winner.innerHTML = 'You';
        }else{
            winner.innerHTML = str;
        }
        container.appendChild(winner);
        let winnerText = document.createElement('p');
        winnerText.classList.add('result');
        if(str === 'XO')
            winnerText.innerHTML = 'Draw!';
        else{
            if(human == str || level == 'playWithFriend')
                winnerText.innerHTML = 'Win!';
            else
                winnerText.innerHTML = 'Lose';
        }
        container.appendChild(winnerText);

        if(str == 'x'){
            document.querySelector('.xwin').innerHTML = ++xWinCount;
        }else if(str == 'o'){
            document.querySelector('.ywin').innerHTML = ++yWinCount;
        }


    //document.querySelector('.choice-x').disabled = true;
    //document.querySelector('.choice-o').disabled = true;
    
    document.querySelector('.choice-o').removeEventListener('click', choiceOBtnClick);

    }, 1000);

    record = [];
}

let gameResult = (player, ai = false) => {

    let isRecordFull = 0;
    for(val of record){
        if(val === undefined)
            isRecordFull++;
    }

    if(record[0] !== undefined && record[0] === record[1] && record[1] === record[2]){
        if(ai){
            return record[0];
        }else
            displayResult(player, 'h1');
    }
    else if(record[3] !== undefined && record[3] === record[4] && record[4] === record[5]){
        if(ai){
            return record[3];
        }else
            displayResult(player, 'h2');
    }
        
    else if(record[6] !== undefined && record[6] === record[7] && record[7] === record[8]){
        if(ai){
            return record[6];
        }else
            displayResult(player, 'h3');
    }
        
    else if(record[0] !== undefined && record[0] === record[3] && record[3] === record[6]){
        if(ai){
            return record[0];
        }else
            displayResult(player, 'v1');
    }
        
    else if(record[1] !== undefined && record[1] === record[4] && record[4] === record[7]){
        if(ai){
            return record[1];
        }else
            displayResult(player, 'v2');
    }
    else if(record[2] !== undefined && record[2] === record[5] && record[5] === record[8]){
        if(ai){
            return record[2];
        }else
            displayResult(player, 'v3');
    }
    else if(record[0] !== undefined && record[0] === record[4] && record[4] === record[8]){
        if(ai){
            return record[0];
        }else
            displayResult(player, 'c1');
    }
    else if(record[2] !== undefined && record[2] === record[4] && record[4] === record[6]){
        if(ai){
            return record[2];
        }else
            displayResult(player, 'c2');
    }
    else if(isRecordFull === 0 && record.length == 9){
        if(ai){
            return 'tie';
        }else
            displayResult("XO", "draw");
    }else{
        return null;
    }
        
}


let numberToString = num => {
    switch(num){
        case 0: 
            return "first";
            break;
        case 1: 
            return "second";
            break;
        case 2: 
            return "third";
            break;
        case 3: 
            return "fourth";
            break;
        case 4: 
            return "fifth";
            break;
        case 5: 
            return "sixth";
            break;
        case 6: 
            return "seventh";
            break;
        case 7: 
            return "eighth";
            break;
        case 8: 
            return "ninth";
            break;
        default:
            return "unknown string";
            break
    }
}

let createXSign = container => {
    if(!hasAWinner){
        let xContainer = document.createElement('div');
        xContainer.classList.add('x-container');

        let leftX = document.createElement('div');
        leftX.classList.add('left-x');

        let rightX = document.createElement('div');
        rightX.classList.add('right-x');

        xContainer.appendChild(leftX);
        xContainer.appendChild(rightX);

        container.appendChild(xContainer);
        
        container.classList.remove('empty');
    }
    
}

let createOSign = container => {
    if(!hasAWinner){
        let circleContainer = document.createElement('div');
        circleContainer.classList.add('circle-container');

        let bigCicle = document.createElement('div');
        bigCicle.classList.add('big-circle')

        circleContainer.appendChild(bigCicle);

        let smallCircle = document.createElement('div');
        smallCircle.classList.add('small-circle');
        
        bigCicle.appendChild(smallCircle);

        if(container.classList.contains('empty')){
            container.appendChild(circleContainer);
        }
        
        
        container.classList.remove('empty');
    }
    
}


document.querySelector('.choice-x').addEventListener('click', ()=> {
    if(choice == 'x' && record.length == 0){
            document.querySelector('.choice-x').style.boxShadow =  "0px 0px 20px 5px #0eb67e";
    
        setTimeout(()=> {
            document.querySelector('.choice-x').style.boxShadow =  "0px 0px 0px 1px rgba(112, 111, 211, 0)";
        }, 300);
    }
});

function choiceOBtnClick(){
        document.querySelector('.choice-o').style.boxShadow =  "0px 0px 20px 5px #0eb67e";

    setTimeout(()=> {
        document.querySelector('.choice-o').style.boxShadow =  "0px 0px 0px 1px rgba(112, 111, 211, 0)";
    }, 400);

    human = 'o';
    let turnContaienr = document.querySelector('.turn-conrainer');

    document.querySelector('.inst-para').style.visibility = "hidden";
    document.querySelector('.inst-para').style.margin = "0";
    if(turnContaienr.hasChildNodes()){
        turnContaienr.removeChild(document.querySelector('.turn'));
    }
        
    let span = document.createElement('span');
    span.classList.add('turn');
    if(level == 'playWithFriend'){
        document.querySelector('.choice-x').style.border = 'none';
        document.querySelector('.choice-o').style.borderBottom = '5px solid #fff';
        span.innerText = 'O turn';
    }else
        span.innerText = 'X turn';
    turnContaienr.appendChild(span);
    document.querySelector('.turn-conrainer').style.display = "block";
    setTimeout(function(){
        if(level != 'playWithFriend')
        generatRandomPosition();
        choice = 'o';
    }, 300);
    document.querySelector('.choice-o').removeEventListener('click', choiceOBtnClick);
    
}

document.querySelector('.choice-o').addEventListener('click', choiceOBtnClick);

document.querySelector('.btn-restart').addEventListener('click', gameRestart);


function gameRestart(){
    setTimeout(()=> {
        document.querySelector('.btn-restart').style.boxShadow =  "0px 0px 20px 5px #0eb67e";
    }, 100);

    setTimeout(()=> {
        document.querySelector('.btn-restart').style.boxShadow =  "0px 0px 0px 1px rgba(112, 111, 211, 0)";
    }, 400);

    if(document.querySelector('.dash-line-container').hasChildNodes()){
        for(let val of document.querySelectorAll('.dash-line-container')){
            val.removeChild(val.lastElementChild);
        }
    }
    
    
    document.querySelector('.inst-para').style.visibility = "visible";
    document.querySelector('.inst-para').style.margin = "20px";


    if(document.querySelector('.game-result').hasChildNodes()){
        document.querySelector('.game-result').children[0].remove();
        document.querySelector('.game-result').children[0].remove();
    }
    

    document.querySelector('.hash_sign_container').style.display = 'block';


    choice = 'x';
    document.querySelector('.choice-x').style.borderBottom = '5px solid #fff';
    document.querySelector('.choice-o').style.border = 'none';

    hasAWinner = false;

    
    //document.querySelector('.choice-x').disabled = false;
    //document.querySelector('.choice-o').disabled = false;

    let element = document.querySelectorAll('.hash_sign');
    for(let val of element){
        if(val.lastElementChild != null){
            val.removeChild(val.lastElementChild);
            // val.lastElementChild.remove();
        }
        val.classList.add('empty');
    }
    document.querySelector('.turn-conrainer').style.display = "none";

    document.querySelector('.choice-o').addEventListener('click', choiceOBtnClick);


    record = [];
}


let registerRecord = (cell, sign) => {
    if(cell.classList.contains('empty')){
        if(cell.classList.contains('first'))
            record[0] = sign;
        else if(cell.classList.contains('second'))
            record[1] = sign;
        else if(cell.classList.contains('third'))
            record[2] = sign;
        else if(cell.classList.contains('fourth'))
            record[3] = sign;
        else if(cell.classList.contains('fifth'))
            record[4] = sign;
        else if(cell.classList.contains('sixth'))
            record[5] = sign;
        else if(cell.classList.contains('seventh'))
            record[6] = sign;
        else if(cell.classList.contains('eighth'))
            record[7] = sign;
        else if(cell.classList.contains('ninth'))
            record[8] = sign;
    }
}

let scoresO = {
    'x': -1,
    'o': 1,
    'tie': 0
}

let scoresX = {
    'x': 1,
    'o': -1,
    'tie': 0
}

function minimax(board, depth, isMaximizing){
    let result = gameResult('o', true);
    if(result !== null){
        let score;
        if(choice == 'o')
            score = scoresO[result];
        else 
            score = scoresX[result];
        return score;
    }

    if(isMaximizing){
        let bestScore = -Infinity;
        let cls = '';
        for(let i=0; i<9; i++){
            cls = numberToString(i);
            if(document.querySelector("." + cls).classList.contains('empty')){
                record[i] = choice;
                document.querySelector("." + cls).classList.remove('empty');
                let score = minimax(board, depth + 1, false);
                record[i] = undefined;
                document.querySelector("." + cls).classList.add('empty');
                //bestScore = Math.max(score, bestScore);
                if(score > bestScore){
                    bestScore = score;
                }
            }
        }
        return bestScore;
    }else{
        let bestScore = Infinity;
        let cls = '';
        for(let i=0; i<9; i++){
            cls = numberToString(i);
            if(document.querySelector("." + cls).classList.contains('empty')){
                record[i] = choice == 'x' ? 'o' : 'x';
                document.querySelector("." + cls).classList.remove('empty');
                let score = minimax(board, depth + 1, true);
                record[i] = undefined;
                document.querySelector("." + cls).classList.add('empty');
                if(score < bestScore){
                    bestScore = score;
                }
            }
        }
        return bestScore;
    }
}

function bestMove(){
    let bestScore = -Infinity;
    let move;
    let cls = '';
    for(let i=0; i<9; i++){
        cls = numberToString(i);
        if(document.querySelector("." + cls).classList.contains('empty')){
            record[i] = choice;
            document.querySelector("." + cls).classList.remove('empty');
            let score = minimax(record, 0, false);
            record[i] = undefined;
            document.querySelector("." + cls).classList.add('empty');
            if(score > bestScore){
                bestScore = score;
                move = i;
            }
        }
    }
    return move;
}

function findBestMediumMove(){
    let cls = '';
    for(let i=0; i<9; i++){
        cls = numberToString(i);
        if(document.querySelector("." + cls).classList.contains('empty')){
            record[i] = 'o';
            let resultO = gameResult('o', true);
            record[i] = undefined;
            record[i] = 'x';
            let resultX = gameResult('x', true);
            record[i] = undefined;
            if(resultO != null || resultX != null)
                return i;
        }
    }  
    return null;
}

function mediumLevelMove(){
    let result = 0;
    let cls = '';
    result = findBestMediumMove();
    if(result != null)
        return result;
    else {
        for(let i=0; i<9; i++){
            cls = numberToString(i);
            if(document.querySelector("." + cls).classList.contains('empty')){
                return i;
            }
        }
    }
}



let generatRandomPosition = () => {
    while(true){
        let randomNum;
        if(level === 'easy')
            randomNum = Math.floor(Math.random() * 9);
        else if(level == 'medium')
            randomNum = mediumLevelMove();
        else
            randomNum = bestMove();
        
        if(record[randomNum] == undefined){
            record[randomNum] = choice;
            let className = numberToString(randomNum);
            if(choice === 'o'){
                document.querySelector('.choice-x').style.border = 'none';
                document.querySelector('.choice-o').style.borderBottom = '5px solid #fff';

                createOSign(document.querySelector('.' + className));
                gameResult('o');
                choice = 'x';

                
                let turnContaienr = document.querySelector('.turn-conrainer');

                if(turnContaienr.hasChildNodes()){
                    turnContaienr.removeChild(document.querySelector('.turn'));
                }
                    
                let span = document.createElement('span');
                span.classList.add('turn');
                span.innerText = 'X turn';
                turnContaienr.appendChild(span);

                setTimeout(function(){
                    document.querySelector('.choice-x').style.borderBottom = '5px solid #fff';
                    document.querySelector('.choice-o').style.border = 'none';
                }, 500);
                
            }
            else {                
                createXSign(document.querySelector('.' + className));
                gameResult('x');
                choice = 'o';

                let turnContaienr = document.querySelector('.turn-conrainer');

                if(turnContaienr.hasChildNodes()){
                    turnContaienr.removeChild(document.querySelector('.turn'));
                }
                    
                let span = document.createElement('span');
                span.classList.add('turn');
                span.innerText = 'O turn';
                turnContaienr.appendChild(span);

                setTimeout(function(){
                    document.querySelector('.choice-x').style.border = 'none';
                    document.querySelector('.choice-o').style.borderBottom = '5px solid #fff';
                }, 500);
            }
            //document.querySelector("." + className).classList.remove('empty');
            break;
        }

        let count = 0;
        let temp = document.querySelectorAll('.hash_sign');
        for(let val of temp){
            if(val.classList.contains('empty'))
                count++;
        }
        if(count == 0)
            break;
    }
}


let cells = document.querySelectorAll('.hash_sign');

for(let val of cells){
    val.addEventListener('click',  function(){
        if(val.classList.contains('empty')){
            if(choice === 'o'){
                document.querySelector('.inst-para').style.visibility = "hidden";
                document.querySelector('.inst-para').style.margin = "0";
                document.querySelector('.turn-conrainer').style.display = "block"
                document.querySelector('.choice-x').style.borderBottom = '5px solid #fff';
                document.querySelector('.choice-o').style.border = 'none';
                registerRecord(val, 'o');
                createOSign(val);
                choice = 'x'
                gameResult('o');
                setTimeout(function(){
                    if(level != 'playWithFriend')
                        generatRandomPosition();
                }, 500);

                let turnContaienr = document.querySelector('.turn-conrainer');

                if(turnContaienr.hasChildNodes()){
                    turnContaienr.removeChild(document.querySelector('.turn'));
                }
                    
                let span = document.createElement('span');
                span.classList.add('turn');
                span.innerText = 'X turn';
                turnContaienr.appendChild(span);

            } else if(record.length === 0 || choice === 'x'){
                document.querySelector('.choice-o').removeEventListener('click', choiceOBtnClick);
                document.querySelector('.turn-conrainer').style.display = "block";
                document.querySelector('.choice-x').style.borderBottom = '5px solid #fff';
                document.querySelector('.choice-o').style.border = 'none';
                document.querySelector('.inst-para').style.visibility = "hidden";
                document.querySelector('.inst-para').style.margin = "0";
                registerRecord(val, 'x');
                createXSign(val);
                choice = 'o';
                gameResult('x');
                setTimeout(function(){
                    if(level != 'playWithFriend')
                        generatRandomPosition();
                    else{
                        document.querySelector('.choice-x').style.border = 'none';
                        document.querySelector('.choice-o').style.borderBottom = '5px solid #fff';
                    }
                }, 500);

                let turnContaienr = document.querySelector('.turn-conrainer');

                if(turnContaienr.hasChildNodes()){
                    turnContaienr.removeChild(document.querySelector('.turn'));
                }
                    
                let span = document.createElement('span');
                span.classList.add('turn');
                span.innerText = 'O turn';
                turnContaienr.appendChild(span);
            }
        }            
    });
}



let select = document.getElementById('level');
select.addEventListener('change', ()=>{
    let value = select.options[select.selectedIndex].value;
    if(value == 'easy')
        level = 'easy';
    else if(value == 'medium')
        level = 'medium';
    else if(value == 'playWithFriend')
        level = 'playWithFriend';
    else
        level = 'hard';
    
    gameRestart()
});

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const loadeContainer = document.querySelector('.loader-container');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.diplay = "none";
        loadeContainer.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
        
    }, 4000);
}

init();