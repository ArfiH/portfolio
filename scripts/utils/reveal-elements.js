const revealElements = () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        console.log(entries);
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
            }
        }, {
            threshold: 1,
            rootMargin: "-5rem"
        })
    });
    sections.forEach(section => {
        observer.observe(section);
    });
};

export default revealElements;