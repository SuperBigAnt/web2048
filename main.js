var board=[];
var score=0;



$(document).ready(function () {
    newgame();

});

function newgame(){
//    初始化棋盘格
    init();
//    棋盘上生成随机数字
    generatenumber();
    generatenumber();
    setTimeout("updateview()",200);

}

function init(){
     for(var i=0;i<4;i++) {
         for (var j= 0; j < 4; j++) {
             var bodycell = $("#body-cell-" + i + "-" + j);
             bodycell.css('top', gettop(i, j));
             bodycell.css('left', getleft(i, j));


         }
     }
    for(var i=0;i<4;i++){

           board[i]=[];
        for(var j=0;j<4;j++){
          board[i][j]=0;
        }
    }

    score=0;
    updatescore();
    updateview();
}




function updatescore() {
    $('#score').text( score );
}






function updateview(){
    if(isgameover()){
        $("#gameoverTip").css('width', '50%');
        $('#gameoverTip').css('height', '50%');
        $('#gameoverTip').css('top', "25%");
        $('#gameoverTip').css('left', "25%");
        $('#gameoverTip').css('color','black');
        $('#gameoverTip').text('GAME OVER');
        $('#gameoverTip').css('z-index','10');
    }
    else{
        $('#gameoverTip').css('width', '0');
        $('#gameoverTip').css('height', '0');
        $('#gameoverTip').text('');
    }
    $(".number-cell").remove();
    for(var i=0;i<4;i++) {
        for (var j = 0; j < 4; j++) {
            $("#body").append('<div class="number-cell" id="number-cell-' + i + '-' + j + '"> </div>');
            var numbercell = $('#number-cell-' + i + '-' + j);
            if (board[i][j] === 0) {
                numbercell.css('width', '0');
                numbercell.css('height', '0');
                numbercell.css('top', gettop(i, j) + 50);
                numbercell.css('left', getleft(i, j) + 50);
            }
            else {


                numbercell.css('width', '100px');
                numbercell.css('height', '100px');
                numbercell.css('top', gettop(i, j));
                numbercell.css('left', getleft(i, j));
                numbercell.css('background-color', getbackgroundcolor(board[i][j]));
                numbercell.text(board[i][j]);
                numbercell.css('color', 'black');
            }


        }
    }

}


$(document).keydown(function(event){
    switch(event.keyCode){
        case 37:
                if(moveleft()) {
                    generatenumber();
                }
            break;
        case 38:
            if(moveup()) {
                    generatenumber();
            }
            break;
        case 39:
            if(moveright()) {
                generatenumber();
            }
            break;
        case 40:
            if(movedown()) {
            generatenumber();
            }
            break;
    }
    updatescore();
    setTimeout("updateview()",200);
});


