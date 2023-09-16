(function() {
    
    emailjs.init('spfKtQYK32ZwwTd8C');
})();
function navhandler(){
    let a=document.getElementById("Navlist");
    if(a.style.display==="block"){
        a.style.display="none";
    }
    else{
        a.style.display="block";
    }
}

function closenavmenu() {
    let b=document.getElementById("Navlist");
    if(b.style.display==="block"){
        b.style.display="none";
    }
    
}


const formhandler=(e)=>{
    e.preventDefault();
    const form=document.getElementById('form');
const name=document.getElementById('name').value;
const number=document.getElementById('number').value;
const subject=document.getElementById('subject').value;
const mail=document.getElementById('email').value;
const message=document.getElementById('message').value;
if(name===''||number===''||subject===''||mail===''||message===''){
    document.getElementById('formvalidation').innerHTML='please enter all fields'
}

var templateParams = {
    name: name,
    mail: mail,
    message:message,
    subject:subject,
    number:number
};
 
emailjs.send('service_yske6th', 'template_vv25ztr', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
console.log(templateParams);
form.reset();

}
form.addEventListener("submit",formhandler)