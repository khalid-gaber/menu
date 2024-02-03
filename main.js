document.getElementById('main-menu').addEventListener('click', ev => {
    if (ev.target.tagName === 'A' && ev.target.parentElement.parentElement.id === 'main-menu') {
        document.getElementById('main-menu').querySelectorAll('.active').forEach(el => {
            el.classList.remove('active');
        })
        ev.target.classList.add('active')
    }
})
document.querySelector('.second-menu>a').addEventListener('mouseenter', () => {
    let thirdMenuLeftMargin = getComputedStyle(document.querySelector('.second-menu>ul')).width;
    let thirdMenuTopMargin = getComputedStyle(document.querySelector('.third-menu')).height;
    document.querySelectorAll('.third-menu > ul').forEach(el => {
        el.style.marginLeft = thirdMenuLeftMargin;
    })
    document.querySelectorAll('.third-menu > ul').forEach(el => {
        el.style.marginTop = `-${parseFloat(thirdMenuTopMargin)}px`;
    })
})

