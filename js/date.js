const todayDate = document.querySelector("h3#date");

function showTodayDate() {
    const date = new Date();
    const year = String(date.getFullYear()).padStart(2, "0");
    const month = String(date.getMonth()+1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");
    const day = String(date.getDay()).padStart(2, "0");

    todayDate.innerText = `${year}.${month}.${days}.${day}`;
}

showTodayDate();