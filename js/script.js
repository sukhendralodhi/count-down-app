//
const endDate = "20 August 2022 00:00 AM";

document.getElementById('endDate').innerText = endDate;

// select all input 
const inputs = document.querySelectorAll('input');

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    

    //convert into days
    if(diff < 0) return;
    const days = Math.floor((diff/24/3600));
    const hours = Math.floor((diff/3600) % 24);
    const mins = Math.floor((diff/60) % 60);
    const seconds = Math.floor((diff) % 60);

    // value initialization into input 
    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = mins;
    inputs[3].value = seconds;
}

//initial call
clock();

// set interval 
setInterval(
    () => {
        clock();
    },
    1000
)