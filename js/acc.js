var btns = document.querySelectorAll('.btns');
var cont1i = document.querySelectorAll('.cont1i');
var icn = document.querySelectorAll('.btns i');

btns.forEach(
    function(btn,i){
        // console.log(btn,i)
        btn.addEventListener('click' ,function(){
            // console.log(btn,i);
            btns.forEach(
                function(but,ind){
                    // console.log(but,ind)
                    if(i==ind){
                        cont1i[i].classList.toggle('show');
                        icn[i].classList.add('ic');
                    }
                    else{
                        cont1i[ind].classList.remove('show');
                        icn[ind].classList.remove('ic');
                    }

                }
            )
        })
    }
)