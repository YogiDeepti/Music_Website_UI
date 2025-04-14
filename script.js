let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

$(document).ready(function(){

    $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')
        if(filter == 'all'){
            $('.gallery .image').show(400);
        }
        else{
            $('.gallery .image').not('.' +filter).hide(200);
            $('.gallery .image').filter('.' +filter).show(200);
        }

    });

    $('.gallery').magnificPopup({
        delegate:'a',
        type: 'image',
        gallery:{
            enabled:true,
        }
    });
   
 

});

var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register(){
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login(){
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}

var modal = document.getElementById('login-form');
window.onclick = function(event)
{
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}
