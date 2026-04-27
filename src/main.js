import './styles/main.scss';
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize tsParticles
(async () => {
    await loadSlim(tsParticles);
    
    await tsParticles.load({
        id: "tsparticles",
        options: {
            background: {
                color: {
                    value: "#0a0a0a", // Dark background
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    grab: {
                        distance: 200,
                        links: {
                            opacity: 0.5,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: ["#e50914", "#8b0000", "#ff4d4d", "#ff0000"],
                },
                links: {
                    color: "#ff4d4d",
                    distance: 140,
                    enable: true,
                    opacity: 0.3,
                    width: 1.5,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 130,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        },
    });
})();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
