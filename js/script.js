(function () {
    'use strict';
    document.addEventListener("DOMContentLoaded",function () {
        var porta = document.getElementById('porta'),
expe=document.getElementById('expe'),
 conta = document.getElementById('conta');


 porta.addEventListener("click",()=>{
    porta.classList.remove('bounceInDown')
    if(porta.classList.contains('jello')){
        porta.classList.remove('jello')
    }else{
        porta.classList.add('jello');
    }
})



expe.addEventListener("click",()=>{
    expe.classList.remove('bounceInDown')
    if(expe.classList.contains('jello')){
        expe.classList.remove('jello')
    }else{
        expe.classList.add('jello');
    }
})


conta.addEventListener("click",()=>{
    conta.classList.remove('bounceInDown')
    if(conta.classList.contains('jello')){
        conta.classList.remove('jello')
    }else{
        conta.classList.add('jello');
    }
})







      })
}());