import '/src/style.css';
import Logo from '../assets/icons8-cloud-96.png';

function component() {
    const element = document.createElement('div');
    const logo = new Image();
    logo.src = Logo;

    element.appendChild(logo);

    return element;
}

document.body.appendChild(component());