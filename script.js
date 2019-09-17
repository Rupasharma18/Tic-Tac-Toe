var game = 1;
var c=0;
function clickBtn(btn){
    c++;
    if (game == 1){
        document.getElementById(btn).value = "💀";
        game -=1;  
        winner();
        
    }
    else if( document.getElementById(btn).value = '💣'){
        game += 1;
        winner();
      
       
    } 
        
}
// this is wins function
function winner(){
    if(
        document.getElementById('btn1').value == '💀'&&
        document.getElementById('btn2').value == '💀'&&
        document.getElementById('btn3').value == '💀'||
        document.getElementById('btn4').value == '💀'&&
        document.getElementById('btn5').value == '💀'&&
        document.getElementById('btn6').value == '💀'||
        document.getElementById('btn7').value == '💀'&&
        document.getElementById('btn8').value == '💀'&&
        document.getElementById('btn9').value == '💀'||
        document.getElementById('btn1').value == '💀'&&
        document.getElementById('btn5').value == '💀'&&
        document.getElementById('btn9').value == '💀'||
        document.getElementById('btn1').value == '💀'&&
        document.getElementById('btn4').value == '💀'&&
        document.getElementById('btn7').value == '💀'||
        document.getElementById('btn2').value == '💀'&&
        document.getElementById('btn5').value == '💀'&&
        document.getElementById('btn8').value == '💀'||
        document.getElementById('btn3').value == '💀'&&
        document.getElementById('btn6').value == '💀'&&
        document.getElementById('btn9').value == '💀'||
        document.getElementById('btn3').value == '💀'&&
        document.getElementById('btn5').value == '💀'&&
        document.getElementById('btn7').value == '💀'
        
    ){
        document.getElementById('winturn').innerHTML = "Player 💀 won!";
        setTimeout(function(){Reset(); }, 1000);
        c=0;
    }
    else if(
        document.getElementById('btn1').value == '💣'&&
        document.getElementById('btn2').value == '💣'&&
        document.getElementById('btn3').value == '💣'||
        document.getElementById('btn4').value == '💣'&&
        document.getElementById('btn5').value == '💣'&&
        document.getElementById('btn6').value == '💣'||
        document.getElementById('btn7').value == '💣'&&
        document.getElementById('btn8').value == '💣'&&
        document.getElementById('btn9').value == '💣'||
        document.getElementById('btn1').value == '💣'&&
        document.getElementById('btn5').value == '💣'&&
        document.getElementById('btn9').value == '💣'||
        document.getElementById('btn1').value == '💣'&&
        document.getElementById('btn4').value == '💣'&&
        document.getElementById('btn7').value == '💣'||
        document.getElementById('btn2').value == '💣'&&
        document.getElementById('btn5').value == '💣'&&
        document.getElementById('btn8').value == '💣'||
        document.getElementById('btn3').value == '💣'&&
        document.getElementById('btn6').value == '💣'&&
        document.getElementById('btn9').value == '💣'||
        document.getElementById('btn3').value == '💣'&&
        document.getElementById('btn5').value == '💣'&&
        document.getElementById('btn7').value == '💣'
    ){
        document.getElementById('winturn').innerHTML = "Player 💣  won!";
        setTimeout(function(){Reset(); }, 1000);
        c=0;
    }
    else if(c==9)
    {
        document.getElementById('winturn').innerHTML = "Tie!";
        setTimeout(function(){Reset(); }, 2000);
        c=0;
    }
   
   
}
// this is again play game!
function Reset(){
    document.getElementById('btn1').value = '';
    document.getElementById('btn2').value = '';
    document.getElementById('btn3').value = '';
    document.getElementById('btn4').value = '';
    document.getElementById('btn5').value = '';
    document.getElementById('btn6').value = '';
    document.getElementById('btn7').value = '';
    document.getElementById('btn8').value = '';
    document.getElementById('btn9').value = '';
   
}

function clickIcon(){
    document.getElementById('show').innerHTML =  " your 💀";      
    
}
function clickIcons(){
    document.getElementById('show').innerHTML =  " your 💣";      
    
}