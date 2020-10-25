function bootsequence(){
    $("#equal").addClass('border border-success  text-info animated pulse fast');
    var divs = $( '.h-btns' );
    var index=0;
    var delay = setInterval( function(){
  if ( index <= divs.length ){
    $( divs[ index ] ).addClass( 'border border-primary  text-info animated pulse fast' );
    index += 1;
  }else{
    clearInterval( delay );
    removeAnim()
  }
}, 100);
operatorAnim();
clearAnim();
}
function operatorAnim(){
    var divs1 = $( '.h-btns-w' );
    var index1=0;
    var delay1 = setInterval( function(){
  if ( index1 <= divs1.length ){
    $( divs1[ index1 ] ).addClass( 'border border-warning  text-info animated pulse fast' );
    index1 += 1;
  }else{
    clearInterval( delay1 );
    removeAnim1()
  }
}, 250);
}
function clearAnim(){
    var divs2 = $( '.h-btns-d' );
    var index2=0;
    var delay2 = setInterval( function(){
  if ( index2 <= divs2.length ){
    $( divs2[ index2 ] ).addClass( 'border border-danger  text-info animated pulse fast' );
    index2 += 1;
  }else{
    clearInterval( delay2 );
    removeAnim2()
  }
}, 250);

}



function removeAnim(){
    $("#equal").removeClass('border border-success  text-info animated pulse fast');
    var divs = $( '.h-btns' );
    var index=0;
    var delay = setInterval( function(){
  if ( index <= divs.length ){
    $( divs[ index ] ).removeClass( 'border border-primary  text-info animated pulse fast' );
    index += 1;
  }else{
    clearInterval( delay );
  }
}, 200);
}
function removeAnim1(){
    var divs = $( '.h-btns-w' );
    var index=0;
    var delay = setInterval( function(){
  if ( index <= divs.length ){
    $( divs[ index ] ).removeClass( 'border border-warning  text-info animated pulse fast' );
    index += 1;
  }else{
    clearInterval( delay );
  }
}, 200);
}
function removeAnim2(){
    var divs = $( '.h-btns-d' );
    var index=0;
    var delay = setInterval( function(){
  if ( index <= divs.length ){
    $( divs[ index ] ).removeClass( 'border border-danger  text-info animated pulse fast' );
    index += 1;
  }else{
    clearInterval( delay );
  }
}, 200);
}


