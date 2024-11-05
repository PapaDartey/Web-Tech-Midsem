const eventTitle = document.getElementById('event-title');

eventTitle.addEventListener('mouseover', () => {
    eventTitle.style.backgroundColor = 'pink';
});

eventTitle.addEventListener('mouseout', () => {
    eventTitle.style.backgroundColor = '';
});

const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    form.reset();
});
