
// Dice Roll function
function xDy(x,y){
    var diceNum = 0;
    for(var j=0;j<x;j++)
        diceNum += Math.floor( Math.random()*y )+1;
    return diceNum;
}
// Copy Clipboard Function
function copyTextToClipboard(textVal){
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = textVal;
    var bodyElm = document.getElementsByTagName("body")[0];
    bodyElm.appendChild(copyFrom);
    copyFrom.select();
    var retVal = document.execCommand('copy');
    bodyElm.removeChild(copyFrom);
    return retVal;
}


// Add HTML DOM
$('body').append('<div id="hirata"><button class="dice">DiceRoll</button><button class="export">ExportData</button></div>');
$('body').append('<div id="exportModal"><h3>Data copied to clipboard</h3><button>OK</button><hr><p></p></div>');
$('body').append('<audio id="diceSound" preload="auto"><source src="https://psephopaiktes.github.io/CoC_Bookmarklet/dice.wav" type="audio/wav"></audio>');

// DiceRoll and Input
$('#hirata .dice').on('click',function(){

    // Dice Sound
    document.getElementById("diceSound").play();

    // diceRoll & input
    var i = 1;
    timer = setInterval( function(){
        switch(i){
            case 1: case 2: case 3: case 4: case 5: // input STR, CON, POW, DEX, APP
                $('#NA'+i).val( xDy(3,6) ).change();
                break;
            case 6: case 7: // input SIZ, INT
                $('#NA'+i).val( xDy(2,6)+6 ).change();
                break;
            case 8: // input EDU
                $('#NA'+i).val( xDy(3,6)+3 ).change();
                break;
            case 9: // input SAN
                $('input[name=SAN_Left]').val( $('#NA3').val()*5 ).change();
                break;
            case 10: // end
                clearInterval(timer);
                break;
        }
        i++;
    }, 200);

});

// Export Memo
$('#hirata .export').on('click',function(){
    var exportData = 'error';

    // Arts Point
    var arts= ['初期値技能のみ','初期値技能のみ','初期値技能のみ','初期値技能のみ','初期値技能のみ'];
    $('#power_disp .pc_making').each(function(i){
        var j=0;
        $(this).find('tr').each(function(){
            if(
                $(this).find('td:nth-child(4) input').val() ||
                $(this).find('td:nth-child(5) input').val() ||
                $(this).find('td:nth-child(6) input').val() ||
                $(this).find('td:nth-child(7) input').val()
            ){
                if(j==0) arts[i-1]='';
                j++;
                var addData = $(this).find('th input').val();
                if( addData == undefined ) addData = '';
                if( j%3==1 && j!=1  ){
                    arts[i-1] +=
                        '\n[' + $(this).find('th').text().replace('()',':') + addData + ']:' +
                        $(this).find('.sumTD input').val() + '%    ';
                }else{
                    arts[i-1] +=
                        '[' + $(this).find('th').text().replace('()',':') + addData + ']:' +
                        $(this).find('.sumTD input').val() + '%    ';
                }
            }

        });
    });

    // Having Item
    var items = '';
    for (var i=0; i<$('input[name="item_name[]"]').length-1; i++){
        if( (i+1)%3!=1 ) items += ' / ';
        items += $('input[name="item_name[]"]').eq(i).val();
        if( (i+1)%3==0) items += '\n';
    }
    console.log(items);

    exportData =
        $('#pc_name').val()+"\n"+
        "\n"+
        "職業："+$('#shuzoku').val()+"\n"+
        "年齢："+$('#age').val()+" / 性別："+$('#sex').val()+" / 出身："+$('#pc_kigen').val()+"\n"+
        "髪の色："+$('#color_hair').val()+" / 瞳の色："+$('#color_eye').val()+" / 肌の色："+$('#color_skin').val()+"\n"+
        "身長："+$('#pc_height').val()+" / 体重："+$('#pc_weight').val()+"\n"+
        "\n"+"\n"+
        "■■ 能力値 ■■\n"+
        "STR:"+$('#NP1').val()+"  CON:"+$('#NP2').val()+"  POW:"+$('#NP3').val()+"  DEX:"+$('#NP4').val()+"  APP:"+$('#NP5').val()+"  SIZ:"+$('#NP6').val()+"  INT:"+$('#NP7').val()+"  EDU:"+$('#NP8').val()+"\n"+
        "HP:"+$('#NP9').val()+"  MP:"+$('#NP10').val()+"  SAN:"+$('#NP11').val()+"  ｱｲﾃﾞｱ:"+$('#NP12').val()+"  幸運:"+$('#NP13').val()+"  知識:"+$('#NP14').val()+"  回避:"+$('input[name="TBAP[]"]').eq(0).val()+"  DB:"+$('input[name=dmg_bonus]').val()+"\n"+
        "\n"+"\n"+
        "■■ 技能 ■■\n"+
        "-- 戦闘系技能 --\n"+
        arts[0]+"\n"+
        "\n"+
        "-- 探索系技能 --\n"+
        arts[1]+"\n"+
        "\n"+
        "-- 行動系技能 --\n"+
        arts[2]+"\n"+
        "\n"+
        "-- 交渉系技能 --\n"+
        arts[3]+"\n"+
        "\n"+
        "-- 知識系技能 --\n"+
        arts[4]+"\n"+
        "\n"+
        "\n"+
        "■■ 所持品 ■■\n"+
        items+
        "\n"
        // "\n"+
        // "■■ メモ ■■\n"+
        // $('textarea[name=pc_making_memo]').val()+
        // "\n"
    ;
    copyTextToClipboard( exportData );
    $('#exportModal p').text( exportData );
    $('#exportModal').fadeIn();
});
$('#exportModal button').on('click',function(){
    $('#exportModal').fadeOut();
});
