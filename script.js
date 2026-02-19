const btn=document.querySelector('#btn');
btn.addEventListener('click',()=>{
    const height=(document.querySelector('.height input').value)/100;
    const weight=document.querySelector('.weight input').value;
    const bmi=weight/(height*height);
    document.querySelector('.calc input').value=bmi;
    if(bmi<18.5)
    {
        document.querySelector('.verdict p').innerText="Weight Condition:Under Weight"
    }
   else if(bmi>=18.5&&bmi<=25)
    {
        document.querySelector('.verdict p').innerText="Weight Condition:Normal Weight"
    }
    else if(bmi>25&&bmi<=30)
    {
        document.querySelector('.verdict p').innerText="Weight Condition:Over Weight"
    }
    else{
        document.querySelector('.verdict p').innerText="Weight Condition:Obesity"
    }

})
