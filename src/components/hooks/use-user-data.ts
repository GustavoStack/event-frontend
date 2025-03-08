import axios, { AxiosPromise } from "axios";
import { userData } from "./data/user-data";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080/';

const fetchData = async (): AxiosPromise<userData[]> => {
    return await axios.get(`${API_URL}users`);
};

export function UsersData(){
    const query = useQuery({
        queryKey: ['users-data'],
        queryFn: fetchData,
        retry:2
    })
    return {
        ...query,
        data: query.data?.data || []
    };
}


