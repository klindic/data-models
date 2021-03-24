import { QuantifiedDrink } from "./drink";

export interface Order {
    drinks: QuantifiedDrink[];
    id: string;
    uid: string;
    status: number;
    totalPrice: number;
    kioskId: string;
    transportMode: string;
    date: number;
    qrcode: string;
    pickupCode: string;
    lastLocation: [number, number];
    eta?: number;
    priority?: number;
}
export enum OrderStatus {
    STAGING = 0,
    VERIFIED,
    BAD_DATA,
    PAID,
    IN_PROGRESS,
    COMPLETED
}
