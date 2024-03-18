//   Task_3_JS_HW
//
let sessions = JSON.parse(localStorage.getItem('sessions'));
//
let sessionsDiv = document.getElementById('sessionsDiv');
//
sessionsDiv.appendChild(document.createElement('hr'));
//
console.log(sessions);
//
for (const session of sessions) {
    // let date = new Date(session.date);
    let date = new Date(session['date']);
    //
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let milliseconds = date.getMilliseconds();
    //
    let sessionsDivDate = document.createElement('h3');
    sessionsDivDate.innerText = `year: ${year}; month: ${month}; day: ${day}.`;
    let sessionsDivTime = document.createElement('h4');
    sessionsDivTime.innerText = `hour: ${hour}; minute: ${minute}; second: ${second}; milliseconds: ${milliseconds}.`;
    let sessionsHr = document.createElement('hr');
    let sessionDivA = document.createElement('a');
    let sessionDivAButton = document.createElement('button');
    sessionDivAButton.innerText = 'Назад на головну';
    sessionDivA.appendChild(sessionDivAButton);
    //
    sessionsDiv.append(sessionsDivDate, sessionsDivTime, sessionsHr, sessionDivA);
}
//
let sessionDivA = sessionsDiv.getElementsByTagName('a');
//
console.log(sessionDivA);
//
for (let i = 0; i < sessionDivA.length; i++) {
sessionDivA[i].onclick = function () {
    window.history.back();
}
}
