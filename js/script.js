function correctDate(date) {
    return date < 10 ? "0" + date : date;
}

function saleDate(finishDate, timerIndex) {
    const day = document.getElementsByClassName("time")[timerIndex * 4];
    const hour = document.getElementsByClassName("time")[timerIndex * 4 + 1];
    const minuts = document.getElementsByClassName("time")[timerIndex * 4 + 2];
    const seconds = document.getElementsByClassName("time")[timerIndex * 4 + 3];
    
    const currentDate = new Date();
    const date = finishDate - currentDate;

    day.innerHTML = correctDate(Math.trunc(date / (1000 * 60 * 60 * 24)));
    hour.innerHTML = correctDate(Math.trunc((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    minuts.innerHTML = correctDate(Math.trunc((date % (1000 * 60 * 60)) / (1000 * 60)));
    seconds.innerHTML = correctDate(Math.trunc((date % (1000 * 60)) / 1000));
}


const finishDate1 = new Date(2025, 11, 31); 
const finishDate2 = new Date(2025, 5, 11); 


saleDate(finishDate1, 0);
saleDate(finishDate2, 1);

setInterval(function() {
    saleDate(finishDate1, 0);
    saleDate(finishDate2, 1);
}, 1000);
