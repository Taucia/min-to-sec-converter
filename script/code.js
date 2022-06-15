

let minutes = document.getElementById('minutes');
let calculate = document.getElementById('Convert');
let c= calculate;
c.addEventListener('click', () => {
   
    let m= minutes.value
    
    answer = eval((m * 60 ));
        document.getElementById('output').innerHTML = answer ;
});
