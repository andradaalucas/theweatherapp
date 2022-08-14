import './About.css';
import image from "../img/icon-man.webp"

export default function About(){
    return<div>
    <img src={image} className="icon-man-about" alt="img-programacion"  />
     <h1 className='textWelcome'>Bienvenido</h1>   
    <p className='textoAbout'>Esta pagina fue diseñada por Lucas Andrada utilizando API externa</p>
    </div>
}
