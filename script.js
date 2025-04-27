
document.querySelectorAll('section, .project-card').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(48px)";
    setTimeout(() => {
        el.style.transition = "all 0.7s cubic-bezier(.65,.05,.36,1)";
        el.style.opacity = 1;
        el.style.transform = "none";
    }, 300 + i*120);
});


document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mousemove', e => {
        const x = e.offsetX, y = e.offsetY;
        section.style.boxShadow = `0 8px 48px 0 var(--accent2), 0 2px 8px #0001, 0 0 32px 8px rgba(0,201,255,0.12)`;
        section.style.background = `radial-gradient(circle at ${x}px ${y}px, #00c9ff22 0%, #fff 100%)`;
    });
    section.addEventListener('mouseleave', () => {
        section.style.boxShadow = '';
        section.style.background = 'var(--card-bg)';
    });
});