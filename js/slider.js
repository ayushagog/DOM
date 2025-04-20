var icns = document.querySelectorAll('.containers i');

// console.log(icns);
var items = document.querySelectorAll('.item');
// console.log(items);

// var images = document.querySelectorAll('.item img');

var p = 0;
icns[0].addEventListener('click',function(){

    
    if(items.length-5 <= p )return
    p++;
    console.log(p);
    // console.log(items.length);
    for(var i = 0 ;i<items.length;i++){
        // console.log(items[i]);
        items[i].style.transform=`translateX(-${p*210}px)`;

        
        
    }
    // console.log(i,items)
})

// p = 0;
icns[1].addEventListener('click',function(){
    if(p==0)return
    
    p--;
    for(var i = 0 ;i<items.length;i++){
        // console.log(items[i]);
        items[i].style.transform=`translateX(-${p*210}px)`;
        
    }
})