// export const Mnav = () => {
//     var navtoggle = document.getElementById('navi-toggle');
// }

export function Mnav() {
    const navtoggle = document.getElementById('navi-toggle');
    const navlist = document.getElementById('navlist');
    const navlink = navlist.querySelectorAll('.mob__navigation__item');

    // console.log(navlink.length);
    navlink.forEach(function(e){
        e.addEventListener("click", function(){
            navtoggle.checked = false;
        })
    });
}