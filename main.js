//typed word changing animation
const typed = new Typed('#typed', {
    strings: ['Software Engineer', 'Data Scientist', 'Full Stack Web Developer', 'API Engineer', 'Application Developer'],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
});



// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation background change on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.backgroundColor = 'var(--background)';
    }
});

// Mobile menu toggle
const logo = document.querySelector('.logo');
const navLinks = document.querySelector('.nav-links');

logo.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
    }
});

tsParticles.load("tsparticles", {
    fullScreen: {
        enable: false
    },
    background: {
        color: "#ffffff"
    },
    particles: {
        size: {
            value: { min: 1, max: 3 }
        },
        move: {
            enable: true,
            speed: 0.5
        },
        links: {
            enable: true,
            distance: 150,
            opacity: 1,
            width: 1,
            color: {
                value: "#000000"
            },
            
        },
        color: {
            value: "#000000"
        },
        opacity: {
            value: 0.6
        },
        number: {
            value: 80,
            density: {
                enable: true,
                area: 800
            }
        },
        size: {
            value: { min: 1, max: 3 }
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: ["grab", "bubble", ""]
            },
            resize: true
        },
        modes: {
            light: {
                area: {
                    gradient: {
                        start: {
                            value: "#bbbbbb"
                        },
                        stop: {
                            value: "#ffffff"
                        }
                    },
                    radius: 500
                },
                shadow: {
                    color: {
                        value: "#000000"
                    },
                    length: 0
                }
            },
            grab: {
                distance: 160,
                links: {
                  opacity: 0.8
                }
            },
            bubble: {
                distance: 150,
                size: 7,
                opacity: 1,
                color: {
                    value: "#000000"
                },
                links: {
                    enable: true,
                    distance: 180,
                    opacity: 0,
                    width: 1,
                    color: {
                        value: "#000000"
                    }
                }
            }
        }
    },
    detectRetina: true
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('./content/about_me.txt')
        .then(response => response.text())
        .then(data => {
        document.getElementById('about-me').innerText = data;
        })
        .catch(error => console.error('Error loading the text file:', error));

    fetch('./content/experiences.json')
        .then(response => response.json())
        .then(data => {
            const experiencesGrid = document.getElementById('experiences-grid');
            for (const experience of Object.values(data)) {
                const experienceCard = document.createElement('div');
                experienceCard.className = 'experience-card';
                experienceCard.innerHTML = `
                    <h3>${experience.company}</h3>
                    <h4>${experience.title}</h4>
                    <h5>${experience.location}</h5>
                    <h5>${experience.time}</h5>
                    ${experience.description.map(bulletpoint => `<p>• ${bulletpoint}</p>`).join('')}
                    `
                experiencesGrid.appendChild(experienceCard);
            }
        })
        .catch(error => console.error('Error loading the JSON file:', error));

    fetch('./content/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsGrid = document.getElementById('projects-grid');
            for (const project of Object.values(data)) {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.innerHTML = `
                    <h3>${project.projectName}</h3>
                    ${project.description.map(bulletpoint => `<p>• ${bulletpoint}</p>`).join('')}
                    <div class="project-links">
                        ${Object.entries(project.links).map(([linkTitle, linkUrl]) => `<a href="${linkUrl}" class="button">${linkTitle}</a>`).join('')}
                    </div>
                    `
                projectsGrid.appendChild(projectCard);
            }
        })
        .catch(error => console.error('Error loading the JSON file:', error));
});