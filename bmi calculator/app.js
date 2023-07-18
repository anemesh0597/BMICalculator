window.onload=()=>{
    const button=document.querySelector('#btn');
    button.addEventListener('click',calculatebmi);
}

function calculatebmi(){
    const height=document.querySelector('#height').value;
    const weight=document.querySelector('#weight').value;
    const result=document.querySelector('#result');

    if(!height||height<0||isNaN(height)){
        result.innerText="please provide a valid height";
        return ;
    }else if(!weight ||isNaN(weight) ||weight<0){
        result.innerText="plese provide valid weight";
        return ;
    }
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.5){
        result.innerText= `you are underweight ${bmi}`;
    }else if(bmi>=18.5 && bmi< 24.9){
        result.innerText=`you are Normal: ${bmi}`;
    }else if(bmi>25 && bmi<29.9){
        result.innerText=`you are Overweight: ${bmi}`;
    }else if(bmi>=30 &&bmi<34.9){
        result.innerText=`you are obese(class1): ${bmi}`;
    }else if(bmi>=35.5 && bmi<39.9){
        result.innerText=`you are obeseclass2: ${bmi}`;
    }else {
        result.innerText=`you are Extremely obese: ${bmi}`;
    }

}