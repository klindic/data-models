export interface Beacon {
    id: string;
    kioskId: string;
    uuid: string;
    major: string;
    minor: string;
    name?: string;
    latlong: [number, number];
}

export enum BeaconEventType {
    ENTER = 'enter',
    EXIT = 'exit'
}

export type BeaconEvent = {
    type: BeaconEventType,
    beaconId: string;
};
