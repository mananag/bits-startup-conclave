import hamburgerSVG from '../images/hamburger.svg'
import closeSVG from '../images/close.svg';
import closeSVG1 from '../images/close-reg.svg';
import scrollIconSVG from '../images/scroll-icon.svg';
import socialSVG from '../images/social-icons.svg';
import apogeeLogoSVG from '../images/apogee-logo.svg';
import timelineIcon from '../images/timeline.png';
function init() {
    //import playIconSVG from '../images/youtube_play.svg'

    const navContent = document.getElementById('nav-content');
    navContent.insertAdjacentHTML('beforeend', hamburgerSVG);

    const closeDiv = document.getElementById('menu-cross');
    closeDiv.insertAdjacentHTML('beforeend', closeSVG);

    const closeDiv1 = document.getElementById('register-cross');
    closeDiv1.insertAdjacentHTML('beforeend', closeSVG1);

    const scrollIconDiv = document.getElementById('scroll-icon');
    scrollIconDiv.insertAdjacentHTML('beforeend', scrollIconSVG);

    const socialDiv = document.getElementById('social-icons');
    socialDiv.insertAdjacentHTML('beforeend', socialSVG);

    const apogeeLogoDiv = document.getElementById('nav-logo');
    apogeeLogoDiv.insertAdjacentHTML('beforeend', apogeeLogoSVG);

    // const timeline = document.getElementById('About');
    // timeline.style.background="url('../imgs/speakers/richardstallman.jpg')";

    //const previewImage = document.getElementById('teaser-preview-image');
    //previewImage.insertAdjacentHTML('beforeend', playIconSVG);


}

init();