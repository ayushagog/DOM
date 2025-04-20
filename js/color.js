var containerpick = document.querySelector('.containerpick');
var overlay = document.querySelector('.overlay');
var array = ['well done' ,'copied' ,'thankyou' ,'goodbye' , 'picked','thanks','Hurry'];
var music = document.querySelector('#music')

for(var i =0;i<40;i++){


    var dive=document.createElement('div');
    // console.log(dive);
    dive.classList.add('items');
    // console.log(dive);
    containerpick.appendChild(dive);

    var r = parseInt(Math.random()*255).toString(16).padStart(2,'0');
    var g = parseInt(Math.random()*255).toString(16).padStart(2,'0');
    var b = parseInt(Math.random()*255).toString(16).padStart(2,'0');
    var code = '#'+r+g+b;
    // console.log(code)
    dive.style.background=code;
    dive.innerText=code;



    dive.addEventListener('click',function(event){
        
        navigator.clipboard.writeText(event.target.innerText);
        overlay.style.transform='scale(1)';
        overlay.style.background=event.target.innerText;
       
        overlay.innerText=array[parseInt(Math.random()*array.length)];
        music.play();
      
    
        setTimeout(() => {
            overlay.style.transform='scale(0)';
            
        }, 2000);
        

    })

}
