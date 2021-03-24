/*
 * Copyright Automated Coffee Shop, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alec Chan <me@alecchan.io>, 2020
 */


/**
 * These are the interfaces used to model a fully customizable drink building system.
 * The prices here on the client are just used to show the user an estimate
 * of the cost breakdown of the drink + options. The actual total cost will
 * be computed on our server for security.
 */

export interface ICustomization {
    id: string;
}

/** Drink interface */
export interface DrinkType extends ICustomization {
    name: string;
    basePrice: number;
    canHaveExtraShot: boolean;
    image: string;
    canHaveNoMilk: boolean;
    canHaveChocolate: boolean;
    description?: string;
}
/** Drink Size */
export interface DrinkSize extends ICustomization {
    name: string;
    sizeRank: number; // higher number means larger, lower means smaller e.g. 0 = small, 4 = large, 1 = medium.
    additionalPrice: number;
}
/** Milk interface */
export interface MilkType extends ICustomization {
    name: string;
    additionalPrice: number; // if the milk costs extra make this a positive number.
}
/** Syrup interface */
export interface SyrupType extends ICustomization {
    name: string;
    additionalPrice: number;
}

/** Syrup & # pumps combo */
export interface SyrupCombo { type: SyrupType; pumps: number; }

export type QuantifiedDrink = Drink & { quantity: number };

/** Complete Drink */
export interface Drink extends ICustomization {
    type: DrinkType;
    extraShots: number;
    size: DrinkSize;
    milk: MilkType;
    totalPrice: number;
    syrups: SyrupCombo[];
    id: string;
    status: DrinkStatus;
    name?: string;
}

export enum DrinkStatus {
    PENDING,
    DONE
}

export interface FeaturedDrink {
    name: string;
    image: string;
    description: string;
    id: string;
    drink: Drink;
}
