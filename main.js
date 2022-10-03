console.log('Hello World!');

var load=document.getElementById('loading');
function loading(){
        console.log("loades")
       load.style.display="none"
}
function warn(){
        alert('are u sure');
        console.log('hy');
};
function goupside(){
       

       location.href='#';
       
}


        
function send(){
var name=document.getElementById('name').value;
var description=document.getElementById('descriptions').value;

        if ( document.getElementById('name'). value==='') {
                window.navigator.vibrate('200');

                alert('Enter something🔍');
        }
        else{
                window.location.href='https://wa.me/919811192234/?text='+'Hy'+
              ' '+'I'+' '+'Am'+' '+ document.getElementById('name'). value+' '+ description;
 

                
}
}

function messageme(){

        var name=document.getElementById('name1').value;
var phone=document.getElementById('number1').value;
var email=document.getElementById('email1').value;
var message=document.getElementById('message1').value;

console.log('hy');

        if ( document.getElementById('name1'). value==='') {
                window.navigator.vibrate('200');

                alert('Enter something🔍');
        }
        else{
                window.location.href='https://wa.me/919811192234/?text='+'Hy'+
              ' '+'I'+' '+'Am'+' '+document.getElementById('name1'). value+'                                                  '+document.getElementById('number1').value +'                                              '+email+'                                                                                                                                                                            '+message ;
 
alert(name+' '+'please wait....');
                
}
}
      
function popup(){
document.getElementById("popup").style.visibility="visible";
}
setTimeout(popup,2000);


function hide(){
document.getElementById("popup").style.display='none';
        console.log('working');
}

        
