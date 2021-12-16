if (document.documentElement.clientWidth <= 1320) {
    let options1 = {
        rootMargin: "0px",
        threshold: 0.5
    }
    let options2 = {
        rootMargin: "0px",
        threshold: 0.5
    }
    var target1 = document.querySelector('#last-column-blur');
    var target2 = document.querySelector('#scroll-bar-bottom');
    let observer1 = new IntersectionObserver(([entry]) => {

        if (entry && !entry.isIntersecting)
            document.querySelector('#blur-element').classList.add('blur-element');

        if (entry && entry.isIntersecting)
            document.querySelector('#blur-element').classList.remove('blur-element');


    }, options1);

    let observer2 = new IntersectionObserver(([entry]) => {

        if (entry && !entry.isIntersecting){
            document.querySelector('.resultados').style.transform="rotateX(180deg)";
            document.querySelector('.grid-clasif').style.transform="rotateX(180deg)";
        }
            

        if (entry && entry.isIntersecting){
            document.querySelector('.resultados').style.transform="rotateX(0deg)";
            document.querySelector('.grid-clasif').style.transform="rotateX(0deg)";
        
        }

    }, options2);

    observer1.observe(target1);
    observer2.observe(target2);

}