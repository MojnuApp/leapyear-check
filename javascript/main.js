document.querySelector('.checkBtn').addEventListener('click', function(){
    const year = document.getElementById('year').value;
    const result = isLeapYear(+year);
    checkResult(result, year);
    clearInput();
})

document.querySelector('#year').addEventListener('keyup', function(event){
    const year = document.getElementById('year').value;
    if(event.which === 13){
       const result = isLeapYear(+year);
       checkResult(result, year);
       clearInput();
    }
})

function checkResult(result, year){
    if(result === true){
        document.querySelector('.showResult').innerHTML = `${year} is a leap year`;
    }
    else{
        document.querySelector('.showResult').innerHTML = `${year} is not a leap year`;
    }
}
function clearInput(){
    document.getElementById('year').value = "";
}

const isLeapYear = (year) =>  year%100 === 0 ? year%400 === 0 : year%4 === 0;
