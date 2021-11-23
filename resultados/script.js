if (document.documentElement.clientWidth <= 1200) {
    let options = {
        rootMargin: "0px",
        threshold: 0.5
    }
    var target = document.querySelector('#last-column-blur');
    let observer = new IntersectionObserver(([entry]) => {

        if (entry && !entry.isIntersecting)
            document.querySelector('#blur-element').classList.add('blur-element');

        if (entry && entry.isIntersecting)
            document.querySelector('#blur-element').classList.remove('blur-element');


    }, options);

    observer.observe(target);
}