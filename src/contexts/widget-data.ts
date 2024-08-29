import { SxProps } from "@mui/material/styles";

export interface ApiStatus {
    title: string;
    status: string;
    userUsed: number;
    userPending: number;
    sx?: SxProps;
}

export const API_STATUS_DATA: ApiStatus = {
    title: 'Estado de la API',
    status: 'Normal',
    userUsed: 179,
    userPending: 394
};