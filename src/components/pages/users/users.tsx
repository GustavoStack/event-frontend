import NavbarHome from "../../sections/navbar.tsx"
import UsersList from "./users-list-page.tsx"
export default function Users(){
    return(
        <div>
            <NavbarHome/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl m-8 font-bold">Usuários cadastrados</h1>
                <UsersList/>
            </div>
        </div>
    )
}