let string="";
const audio = new Audio("clk.mp3");
let input =document.getElementById('input');
let buttons=document.querySelectorAll('button');

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e)=>{
        audio.play();
        if (e.target.innerHTML=='Back'){
            if(string.length==0){
                string='';
            }
            else{
            string = string.substring(0, string.length - 1);
            }
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='sin'){
            string=Math.sin(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='ln'){
            string=Math.log(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='log'){
            string=Math.log10(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='sqrt'){
            string=Math.sqrt(string);
            document.querySelector('input').value=string;
        }
        
        else if(e.target.innerHTML=='e'){
            string=Math.E;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='cos'){
            string=Math.cos(string);
            document.querySelector('input').value=string;
        }
       
        
       
        else{
        console.log(e.target)
        string=string +e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})
