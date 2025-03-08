import { UsersData } from "../../hooks/use-user-data.ts";
import CardListUser from './card-list-user.tsx'
export default function UsersList(){
    const {data} = UsersData();
    return(
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-dvh">
        <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
                <h5 className="text-slate-800 text-lg font-semibold">
                    Latest Customers
                </h5>
                <a
                href="#"
                className="text-slate-600"
                >
                    View all
                </a>
            </div>
            <div className="divide-y divide-slate-200">
                <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
                    <div className="w-full">
                        {data?.map(users =>
                            <CardListUser firstName={users.firstName} lastName={users.lastName} balance={users.balance} email={users.email} typeUser={users.userType} />
                        )}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}