/*
 * Copyright Automated Coffee Shop, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alec Chan <me@alecchan.io>, 2020
 */

export interface UserModel {
    name: string;
    email: string;
    uid: string;
    accountCreated: number;
    birthdate: string;
    image: string;
    fcmToken: string;
}
