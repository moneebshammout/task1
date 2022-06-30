function customAnimation(props,seconds,element){
    let animation=element.animate(props,seconds);
    animation.onfinish = () => {
        Object.keys(props).forEach(key=>{
            element.style[key]=props[key];
        });
      };

}
//for mobile users
function toggleDropDown(){
    let dropDowncontainer=document.body.getElementsByClassName('drop-down-container')[0];
    let navBar=document.body.getElementsByClassName('top-nav')[0];
    let displayType=dropDowncontainer.style.display;
    if(displayType==='none'||displayType==''){
        dropDowncontainer.style.display='inline';
        customAnimation({'height':'15rem'},300,navBar);
        return;
    }   
    customAnimation({'height':'4.5rem'},300,navBar);
    setTimeout(function(){
        dropDowncontainer.style.display='none';
    },300);
}