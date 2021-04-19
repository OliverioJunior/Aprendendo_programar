var XouBola = 'X'
var tabuleiro = [0,0,0,
                0,0,0,
                0,0,0];         

var quadrados = [document.querySelector('.quadrado-1'),document.querySelector('.quadrado-2'),document.querySelector('.quadrado-3'),
               document.querySelector('.quadrado-4'),document.querySelector('.quadrado-5'),document.querySelector('.quadrado-6'),
               document.querySelector('.quadrado-7'),document.querySelector('.quadrado-8'),document.querySelector('.quadrado-9')];


var square = [quadrados[0],quadrados[1],quadrados[2],
quadrados[3],quadrados[4],quadrados[5],
quadrados[6],quadrados[7],quadrados[8]];

var reset = document.querySelector('.reset_play')

reset.addEventListener('click', function(){
        reset_game()
})
square[0].addEventListener('click', function(){
    winner()
    
    
    if (square[0].innerHTML === '' && !winner()){
        square[0].innerHTML = XouBola
       
    if(XouBola === 'X'){
        XouBola = 'O'
        tabuleiro[0] = 1
        
    }else{
        XouBola = 'X'
        tabuleiro[0] = 2
    }
    
}
});

square[1].addEventListener('click', function(){
    winner()
    
    
    if (square[1].innerHTML === ''&& !winner() ){
        square[1].innerHTML = XouBola
        
        if(XouBola === 'X' ){
            XouBola = 'O'
            tabuleiro[1] = 1
        }else{
            XouBola = 'X'
            tabuleiro[1] = 2
        }
    }
});
square[2].addEventListener('click', function(){
    winner()
    
    
    if (square[2].innerHTML === ''&& !winner() ){
        square[2].innerHTML = XouBola
        
        if(XouBola === 'X'){
            XouBola = 'O'
            tabuleiro[2] = 1
        }else{
            XouBola = 'X'
            tabuleiro[2] = 2
        }
}
});
square[3].addEventListener('click', function(){
    winner()
    
    
    if (square[3].innerHTML === '' && !winner()){
        square[3].innerHTML = XouBola
        
        if(XouBola === 'X'){
            XouBola = 'O'
            tabuleiro[3] = 1
        }else{
            XouBola = 'X'
            tabuleiro[3] = 2
        }
}
});
square[4].addEventListener('click', function(){
    winner()
    
    
    if (square[4].innerHTML === '' && !winner() ){
        square[4].innerHTML = XouBola
        
        if(XouBola === 'X'){
            XouBola = 'O'
            tabuleiro[4] = 1
        }else{
            XouBola = 'X'
            tabuleiro[4] = 2
        }
    }
});
square[5].addEventListener('click', function(){
    winner()
    
    
    if (square[5].innerHTML === ''&& !winner() ){
        square[5].innerHTML = XouBola
        
        if(XouBola === 'X'){
            XouBola = 'O'
            tabuleiro[5] = 1
        }else{
            XouBola = 'X'
            tabuleiro[5] = 2
        }
}
});
square[6].addEventListener('click', function(){
    winner()
    
    
    if (square[6].innerHTML === ''&& !winner() ){
        square[6].innerHTML = XouBola
       
    
    if(XouBola === 'X'){
        XouBola = 'O'
        tabuleiro[6] = 1
    }else{
        XouBola = 'X'
        tabuleiro[6] = 2
    }
}
});
square[7].addEventListener('click', function(){
    winner()
    
    
    if (square[7].innerHTML === ''&& !winner() ){
        square[7].innerHTML = XouBola
       
    square[7].disabled 
    if(XouBola === 'X'){
        XouBola = 'O'
        tabuleiro[7] = 1
    }else{
        XouBola = 'X'
        tabuleiro[7] = 2
    }
}
});
square[8].addEventListener('click', function(){
    winner()
    
    
    if (square[8].innerHTML === ''&& !winner() ){
        square[8].innerHTML = XouBola
        
    square[8].disabled 
    if(XouBola === 'X'){
        XouBola = 'O'
        tabuleiro[8] = 1
    }else{
        XouBola = 'X'
        tabuleiro[8] = 2
    }
}
});
function winner() {
      
    if(tabuleiro[0] === 1 && tabuleiro[1] ===1 && tabuleiro[2] === 1 || tabuleiro[0] === 2 && tabuleiro[1] ===2 && tabuleiro[2] === 2){
        alert('Ganhou')
        
    } else if(tabuleiro[3] === 1 && tabuleiro[4] ===1 && tabuleiro[5] === 1 || tabuleiro[3] === 2 && tabuleiro[4] ===2 && tabuleiro[5] === 2){
        alert('Ganhou')
        
    }else if(tabuleiro[6] === 1 && tabuleiro[7] ===1 && tabuleiro[8] === 1 || tabuleiro[6] === 2 && tabuleiro[7] ===2 && tabuleiro[8] === 2){
        alert('Ganhou')
        
    }else if(tabuleiro[0] === 1 && tabuleiro[3] ===1 && tabuleiro[6] === 1 || tabuleiro[0] === 2 && tabuleiro[3] === 2 && tabuleiro[6] === 2){
        alert('Ganhou')
        
    }else if(tabuleiro[1] === 1 && tabuleiro[4] ===1 && tabuleiro[7] === 1 || tabuleiro[1] === 2 && tabuleiro[4] === 2 && tabuleiro[7] === 2){
        alert('Ganhou')
        
    }else if(tabuleiro[2] === 1 && tabuleiro[5] ===1 && tabuleiro[8] === 1 || tabuleiro[2]=== 2 && tabuleiro[5] === 2 && tabuleiro[8] === 2){
        alert('Ganhou')
        
    }else if(tabuleiro[0] === 1 && tabuleiro[4] ===1 && tabuleiro[8] === 1 || tabuleiro[0] === 2 && tabuleiro[4] ===2 && tabuleiro[8] === 2){
        
        
    }else if(tabuleiro[2] === 1 && tabuleiro[4] ===1 && tabuleiro[6] === 1 || tabuleiro[2] === 2 && tabuleiro[4] ===2 && tabuleiro[6] === 2){
        alert('Ganhou')
        
    }

}

function reset_game(){
    
    for (var i = 0; i<9; i++){
        square[i].innerHTML = ''
        tabuleiro[i] = 0
        XouBola = 'X'
    }
 }



    