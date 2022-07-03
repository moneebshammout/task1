
function customAnimation(props, seconds, element) {
    let animation = element.animate(props, seconds);
    animation.onfinish = () => {
        Object.keys(props).forEach(key => {
            element.style[key] = props[key];
        });
    };

}

//for mobile users
function toggleDropDown() {
    let dropDowncontainer = document.body.getElementsByClassName('drop-down-container')[0];
    let navBar = document.body.getElementsByClassName('top-nav')[0];
    let displayType = dropDowncontainer.style.display;
    if (displayType === 'none' || displayType == '') {
        dropDowncontainer.style.display = 'inline';
        customAnimation({'height': '15rem'}, 300, navBar);
        return;
    }
    customAnimation({'height': '4.5rem'}, 300, navBar);
    setTimeout(function () {
        dropDowncontainer.style.display = 'none';
    }, 300);
}
function aboutusSweetAssignEvent() {
    //cant stop propagation unless using native events
    let sweet = document.querySelector('.aboutus-sweet');
    sweet.addEventListener('click', (elem) => {
        return toggleAboutBorder(elem);
    });
}
function defaultAboutBorder() {
    let border = document.querySelector('.aboutus-border');
    customAnimation({'margin-top': '-2rem', 'margin-left': '4rem'}, 300, border);
}
function toggleAboutBorder(element) {
    element.stopPropagation();
    let border = document.querySelector('.aboutus-border');
    customAnimation({'margin-top': '-0.5rem', 'margin-left': '5rem'}, 300, border);
}
function searchItems() {
    var formData = new FormData(document.querySelector('.search-bar'))
}