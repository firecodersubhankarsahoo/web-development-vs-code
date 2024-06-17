// JavaScript for Tribute Page

document.addEventListener('DOMContentLoaded', function() {
    // Toggle section visibility
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const button = document.createElement('button');
        button.textContent = 'Toggle Content';
        button.classList.add('toggle-button');
        section.appendChild(button);

        button.addEventListener('click', () => {
            section.classList.toggle('active');
            button.textContent = section.classList.contains('active') ? 'Hide Content' : 'Toggle Content';
        });
    });
});
