function gettop(i,j){
    return 20+i*120;
}
function getleft(i,j){
    return 20+j*120;
}

function generatenumber() {
//检测棋盘是否有位置
    if(noSpace( ))
        return false;
    var randx=parseInt(Math.floor(Math.random()*4));
    var randy=parseInt(Math.floor(Math.random()*4));
//    分配数字位置
    while(board[randx][randy]!==0){

        randx=parseInt(Math.floor(Math.random()*4));
        randy=parseInt(Math.floor(Math.random()*4));
    }

    randNumber= Math.random()<0.5?2:4;
    board[randx][randy]=randNumber;
    showNumberWithAnimation( randx , randy , randNumber );
}

function noSpace(){
    for(var i=0;i<4;i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] === 0)
                return false;


        }
    }
    return true;
}

function getbackgroundcolor(number) {
switch (number){
    case 2:return "#eee4da";
    case 4:return "#ede0c8";
    case 8:return "#f2b179";
    case 16:return "#f59563";
    case 32:return "#f67c5f";
    case 64:return "#f65e3b";
    case 128:return "#edcf72";
    case 256:return "#edcc61";
    case 512:return "#9c0";
    case 1024:return "#33b5e5";
    case 2048:return "#09c";
    case 4096:return "#a6c";
    case 8192:return "#93c";
}
return "black";
}


function isgameover(){
    for(var i=0;i<4;i++ ){
        for(var j=0;j<3;j++) {
            if (board[i][j] === board[i][j + 1]||board[j][i]===board[j+1][i])
                return false;

        }
    }
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]===0)
                return false;
        }
    }
 return true;
}


function noHBarrier(row,col1,col2) {
    for(var a=col2+1;a<col1;a++){
        if(board[row][a]!==0)
            return false;
    }
return true;
}


function noVBarrier(row1,col,row2){
    for(var a=row2+1;a<row1;a++){
        if(board[a][col]!==0){
            return false;
        }
    }
    return true;

}






function moveleft() {
    var movedone=0;
    var hasdone=[];
    for(var i=0 ;i<4; i++ ){
        hasdone[i]=[];
        for(var j=0;j<4;j++){
            hasdone[i][j] = false;
        }
    }

    for(var i=0 ;i<4; i++ ) {
        for (var j = 1; j < 4; j++) {
                for (var k = 0; k < j; k++) {
                    if (board[i][j] !== 0) {
                        if ((board[i][k] === 0 || (board[i][k] === board[i][j] && !hasdone[i][k])) && noHBarrier(i, j, k)) {
                        moveanimation(i, j, i, k);
                        if (board[i][k] !== 0)
                        hasdone[i][k] = true;

                        score +=board[i][k] * 2;
                        board[i][k] += board[i][j];
                        board[i][j] = 0;

                        movedone = 1;

                    }
                }
            }
        }
    }
setTimeout("updateview()",200);
    if(movedone===1)
        return true;
    return false;
}

function moveright() {
    var movedone=0;
    var hasdone=[];
    for(var i=0 ;i<4; i++ ){
        hasdone[i]=[];
        for(var j=0;j<4;j++){
            hasdone[i][j] = false;
        }
    }
    for(var i=0 ;i<4; i++ ){
        for(var j=2;j>=0;j--){
            
                for(var k=3;k>j;k--) {
                    if(board[i][j]!==0){
                    if ((board[i][k] === 0 || ( board[i][k] === board[i][j]&&!hasdone[i][k])) && noHBarrier(i, k, j)) {
                        moveanimation(i,j,i,k);
                        if(board[i][k]!==0)
                        hasdone[i][k]=true;
                        score += board[i][k] * 2;
                        board[i][k] += board[i][j];
                        board[i][j] = 0;

                        movedone=1;

                    }
                }
            }
        }
    }
    setTimeout("updateview()",200);
    if(movedone===1)
        return true;
    return false;
}


function moveup() {
    var movedone=0;
    var hasdone=[];
    for(var i=0 ;i<4; i++ ){
        hasdone[i]=[];
        for(var j=0;j<4;j++){
            hasdone[i][j] = false;
        }
    }
    for(var j=0 ;j<4; j++ ){
        for(var i=1;i<4;i++){
            
                for(var k=0;k<i;k++) {
                    if(board[i][j]!==0){
                    if ((board[k][j] === 0 || (board[k][j] === board[i][j]&&!hasdone[k][j])) && noVBarrier(i, j, k)) {
                        moveanimation(i,j,k,j);
                        if(board[k][j]!==0)
                        hasdone[k][j]=true;

                        score +=  board[k][j] * 2;
                        board[k][j] += board[i][j];
                        board[i][j] = 0;

                        movedone=1;

                    }
                }
            }
        }
    }
    setTimeout("updateview()",200);
    if(movedone===1)
        return true;
    return false;
}

function movedown() {
    var movedone=0;
    var hasdone=[];
    for(var i=0 ;i<4; i++ ){
        hasdone[i]=[];
        for(var j=0;j<4;j++){
            hasdone[i][j] = false;
        }
    }
    for(var j=0 ;j<4; j++ ){
        for(var i=2;i>=0;i--){
            
                for(var k=3;k>i;k--) {
                    if(board[i][j]!==0){
                    if ((board[k][j] === 0 || (board[k][j] === board[i][j]&&!hasdone[k][j])) && noVBarrier(k, j, i)) {
                        moveanimation(i,j,k,j);
                        if(board[k][j]!==0)
                        hasdone[k][j]=true;

                        score +=  board[k][j] * 2;
                        board[k][j] += board[i][j];
                        board[i][j] = 0;

                        movedone=1;

                    }
                }
            }
        }
    }
    setTimeout("updateview()",200);
    if(movedone===1)
        return true;
    return false;
}