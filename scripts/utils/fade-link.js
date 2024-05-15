const fadeLink = () => {
    const menu = document.querySelector('.header__menu');

    menu.addEventListener('mouseover', e => {
        if (e.target.classList.contains('header__link')) {
            const links = menu.querySelectorAll('.header__link');
            links.forEach(link => {
                if (link !== e.target) {
                    link.style.opacity = '0.7';
                }
            });
        }
    });

    menu.addEventListener('mouseout', e => {
        const links = menu.querySelectorAll('.header__link');
        links.forEach(link => {   
            link.style.opacity = '1';
        });
    });
};

export default fadeLink;