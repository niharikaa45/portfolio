document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
        return;
    } 

    if(!email.includes('@')) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = 'red';
        return;
    }

    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = 'green';
    document.getElementById('contactForm').reset(); // Clear the form 
    });

    document.querySelector('.menu-toggle').addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('active');
    });
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });