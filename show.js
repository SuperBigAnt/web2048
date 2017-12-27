function moveanimation( fromx , fromy , tox, toy ){

    var numberCell = $('#number-cell-' + fromx + '-' + fromy );
    numberCell.animate({
        top:gettop( tox , toy ),
        left:getleft( tox , toy )
    },200);
}



function showNumberWithAnimation( i , j , randNumber ){

    var numberCell = $('#number-cell-' + i + "-" + j );

    numberCell.css('background-color',getbackgroundcolor( randNumber ) );
    numberCell.css('color','black');
    numberCell.text( randNumber );

    numberCell.animate({
        width:"100px",
        height:"100px",
        top:gettop( i , j ),
        left:getleft( i , j )
    },50);
}


