import axios, { AxiosPromise } from "axios";
import { eventData } from "./data/event-data";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080/';

const fetchData = async (): AxiosPromise<eventData[]> => {
    return await axios.get(`${API_URL}users`);
};

export function EventsData(){
    const query = useQuery({
        queryKey: ['events-data'],
        queryFn: fetchData,
        retry:2
    })
    return {
        ...query,
        data: query.data?.data || []
    };
}
