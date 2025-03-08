
import NavbarHome from "../sections/navbar.tsx";
import {FadeInSection} from '../animations/fade-animation/fade.tsx';
import FormUser from './form-user.tsx'
export default function CreateUser(){
    return(
        <div>
            <NavbarHome/>
            <FormUser/>
        </div>
    )
}