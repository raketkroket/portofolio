window.addEventListener('scroll', () => {
    document.querySelectorAll('.content').forEach(s => {
        if (s.getBoundingClientRect().top < window.innerHeight - 100) s.classList.add('show');
    });
});
