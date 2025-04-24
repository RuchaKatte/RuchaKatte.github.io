const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function contact(type) {
    switch (type) {
        case 'email':
            // Opens Gmail compose window with your email in the "To" field
            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ruchakatte@gmail.com&su=&body=', '_blank');
            break;

        case 'linkedin':
            // Replace with your actual LinkedIn profile URL
            window.open('https://www.linkedin.com/in/rucha-katte-73167b314', '_blank');
            break;

        case 'github':
            // Replace with your actual GitHub profile URL
            window.open('https://github.com/RuchaKatte', '_blank');
            break;

        default:
            alert('Contact method not available.');
    }
}