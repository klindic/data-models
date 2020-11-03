/*
 * Copyright Automated Coffee Shop, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alec Chan <me@alecchan.io>, 2020
 */

export type Kiosk = {
    name: string;
    addressLine1: string;
    addressLine2?: string;
    latLong: [number, number];
    id: string;
}
