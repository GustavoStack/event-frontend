interface CardProps{
    firstName: string,
    lastName: string,
    email: string,
    balance:number,
    typeUser:string,
}

export default function CardListUser({ firstName, lastName, email, balance, typeUser }: CardProps) {
    return (
        <div className="flex items-center justify-between p-2 border-b border-gray-300 w-full">
            {/* Imagem e Nome */}
            <div className="flex items-center gap-x-3">
                <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg"
                    alt={`${firstName} ${lastName}`}
                    className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                    <h6 className="text-slate-800 font-semibold">
                        {firstName} {lastName}
                    </h6>
                    <p className="text-slate-600 text-sm">
                        {email}
                    </p>
                </div>
            </div>

            {/* Tipo de Usuário */}
            <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-md">
                {typeUser}
            </span>

            {/* Saldo */}
            <h6 className="text-slate-600 font-medium">
                ${balance}
            </h6>
        </div>
    );
}