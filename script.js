document.getElementById('add-event').addEventListener('click', function() {
    const dateInput = document.getElementById('event-date').value;
    const eventName = document.getElementById('event-name').value;

    if (dateInput && eventName) {
        const eventDate = new Date(dateInput).toDateString();
        addEventToCalendar(eventDate, eventName);
        document.getElementById('event-name').value = ''; // Clear input
    } else {
        alert('Por favor, ingrese una fecha y un nombre de evento.');
    }
});

function addEventToCalendar(date, name) {
    const calendarGrid = document.getElementById('calendar-grid');
    let dayCell = Array.from(calendarGrid.children).find(cell => cell.dataset.date === date);

    if (!dayCell) {
        dayCell = document.createElement('div');
        dayCell.classList.add('day');
        dayCell.dataset.date = date;
        dayCell.innerText = date;
        calendarGrid.appendChild(dayCell);
    }

    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');
    eventDiv.innerText = name;
    dayCell.appendChild(eventDiv);
}
