const loadAdvice =()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(res=>res.json())
    .then(data=>displayAdvice(data))
}

const displayAdvice=data=>{
    // console.log(data.slip.advice);
    document.getElementById('title').innerText=`${data.slip.id}`;
    document.getElementById('advice').innerText=`${data.slip.advice}`
    
}

loadAdvice();