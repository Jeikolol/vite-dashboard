import { SxProps } from "@mui/material/styles";

export interface ApiStatus {
    title: string;
    status: string;
    userUsed: number;
    userPending: number;
    sx?: SxProps;
}

export const API_STATUS_DATA: ApiStatus = {
    title: 'Estado de la API / Estado JCE',
    status: 'Normal',
    userUsed: 179,
    userPending: 394
};
export interface Order {
    id: number;
    user: string;
    maxRequests: number;
    localRequests: number;
    jceRequests: number;
    totalRequests: number;
    availables: number;
    lastDateRequest: Date;
}

export const CUSTOMER_TABLE_DATA: Order[] = [
    {
        id: 1,
        user: 'Usuario 1',
        maxRequests: 20000,
        localRequests: 5,
        jceRequests: 5,
        totalRequests: 5,
        availables: 5,
        lastDateRequest: new Date(),
    },
    {
        id: 2,
        user: 'Usuario 2',
        maxRequests: 5,
        localRequests: 5,
        jceRequests: 5,
        totalRequests: 5,
        availables: 5,
        lastDateRequest: new Date(),
    },
    {
        id: 3,
        user: 'Usuario 3',
        maxRequests: 5,
        localRequests: 5,
        jceRequests: 5,
        totalRequests: 5,
        availables: 5,
        lastDateRequest: new Date(),
    },
    {
        id: 4,
        user: 'Usuario 4',
        maxRequests: 5,
        localRequests: 5,
        jceRequests: 5,
        totalRequests: 5,
        availables: 5,
        lastDateRequest: new Date(),
    },
    {
        id: 5,
        user: 'Usuario 5',
        maxRequests: 5,
        localRequests: 5,
        jceRequests: 5,
        totalRequests: 5,
        availables: 5,
        lastDateRequest: new Date(),
    },
    {
        id: 6,
        user: 'Usuario 6',
        maxRequests: 5,
        localRequests: 5,
        jceRequests: 5,
        totalRequests: 5,
        availables: 5,
        lastDateRequest: new Date(),
    },
    {
        id: 7,
        user: 'Usuario 7',
        maxRequests: 5,
        localRequests: 5,
        jceRequests: 5,
        totalRequests: 5,
        availables: 5,
        lastDateRequest: new Date(),
    },
    {
        id: 8,
        user: 'Usuario 8',
        maxRequests: 5,
        localRequests: 5,
        jceRequests: 5,
        totalRequests: 5,
        availables: 5,
        lastDateRequest: new Date(),
    },
    {
        id: 9,
        user: 'Usuario 9',
        maxRequests: 5,
        localRequests: 5,
        jceRequests: 5,
        totalRequests: 5,
        availables: 5,
        lastDateRequest: new Date(),
    },
    {
        id: 10,
        user: 'Usuario 10',
        maxRequests: 5,
        localRequests: 5,
        jceRequests: 5,
        totalRequests: 5,
        availables: 5,
        lastDateRequest: new Date(),
    },
    {
        id: 11,
        user: 'Usuario 11',
        maxRequests: 5,
        localRequests: 5,
        jceRequests: 5,
        totalRequests: 5,
        availables: 5,
        lastDateRequest: new Date(),
    },
    {
        id: 12,
        user: 'Usuario 12',
        maxRequests: 5,
        localRequests: 5,
        jceRequests: 5,
        totalRequests: 5,
        availables: 5,
        lastDateRequest: new Date(),
    },
];