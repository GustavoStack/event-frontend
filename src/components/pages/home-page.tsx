import NavbarHome from "../sections/navbar.tsx";
import {FadeInSection} from '../animations/fade-animation/fade.tsx';
import FAQ from '../sections/faq.tsx'
import UsersList from './users/users-list-page.tsx'

export default function HomePage(){
    return(
        <div className="content">
            {/* Seçao da barra de navegação*/}
            <NavbarHome/>
            {/* Seção Principal */}
            <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 animate-fade-left animate-duration-1000 animate-delay-[250ms] animate-ease-linear">
                <section className="text-center">
                    <h1 className="mb-8 text-4xl md:text-6xl lg:text-7xl font-bold">
                        agendamento online.com
                    </h1>
                    <img
                        className="m-4 rounded-2xl w-full max-w-4xl mx-auto"
                        src="https://placehold.co/1200x600"
                        alt=""
                    />
                    <p className="m-4 text-lg md:text-xl">
                        Crie ou agende eventos de maneira rápida e prática.
                    </p>
                    <button className="text-white text-lg font-bold bg-button hover:bg-gray-800 hover:cursor-pointer py-2 px-6 rounded">
                        Get started
                    </button>
                </section>
            </div>
            <div className="flex items-center justify-center">
                {/*<UsersList/>*/}
            </div>
            {/* Seção de Recursos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-background w-full p-6 md:p-10 animate-fade-up animate-once animate-duration-700 animate-delay-[250ms] animate-ease-linear animate-fill-both">
                <FadeInSection>
                {/* Card 1 */}
                <section className="grid grid-rows-2 gap-4">
                    <img
                        className="rounded-2xl w-full h-auto"
                        src="https://placehold.co/1200x600"
                        alt=""
                    />
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="m-4 text-3xl md:text-4xl font-bold">Fast</h1>
                        <p className="m-4">Apenas e only vc pode criar e agendar tudo por aqui.</p>
                        <button className="bg-button hover:bg-gray-800 hover:cursor-pointer py-2 px-4 m-4 text-white rounded font-bold">
                            Read more
                        </button>
                    </div>
                </section>
                </FadeInSection>
                <FadeInSection>
                {/* Card 2 */}
                <section className="grid grid-rows-2 gap-4">
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="m-4 text-3xl md:text-4xl font-bold">Efficient</h1>
                        <p className="m-4">Gerencie seus eventos com rapidez e praticidade.</p>
                        <button className="bg-button hover:bg-gray-800 hover:cursor-pointer py-2 px-4 m-4 text-white rounded font-bold">
                            Read more
                        </button>
                    </div>
                    <img
                        className="rounded-2xl w-full h-auto"
                        src="https://placehold.co/1200x600"
                        alt=""
                    />
                </section>
                </FadeInSection>
            </div>
            {/* Chamada para Ação */}
            <div className="flex flex-col items-center text-center p-10 md:p-20 bg-background">
                <h1 className="text-3xl md:text-4xl font-bold">Chega mais logo po</h1>
                <button className="bg-button hover:bg-gray-800 hover:cursor-pointer text-white font-bold py-3 px-6 m-4 rounded">
                    Get started
                </button>
            </div>
            <FAQ/>           
            {/* Footer Responsivo */}
            <footer className="bg-background-banner flex flex-col md:flex-row justify-between items-center p-6">
                <p className="text-white">@ Agenda Inc. 2025</p>
                <ul className="text-white flex space-x-4">
                    <li className="hover:underline cursor-pointer">Instagram</li>
                    <li className="hover:underline cursor-pointer">Email</li>
                </ul>
            </footer>
        </div>
    )
}