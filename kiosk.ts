/*
 * Copyright Automated Coffee Shop, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alec Chan <me@alecchan.io>, 2020
 */

export enum KioskStatus {
    OK = 0,
    NOT_OK
}
export interface KioskType {
    latlong: number[];
    id: string;
    name: string;
    status: KioskStatus;
    address: string;
}