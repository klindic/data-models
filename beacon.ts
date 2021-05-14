export interface Beacon {
    id: string;
    kioskId: string;
    uuid: string;
    major: string;
    minor: string;
    name?: string;
    priority: number;
    latlong: [number, number];
}

export enum BeaconEventType {
    ENTER = 'enter',
    EXIT = 'exit'
}

export type BeaconEvent = {
    type: BeaconEventType,
    beaconId: string;
    kioskId?: string;
    uid: string;
}

export type KontaktSearchMeta = {
    filter: string;
    startIndex: number;
    maxResult: number;
    prevResults: number;
    count: number | null;
    orderBy: "CREATED";
    queryType: "NORMAL" | "COUNTED" | "SEARCH_META";
    order: "ASC" | "DESC";
}

/**
 * Represents the response from the Kontakt GET /venue endpoint
 */
export type KontaktVenueResponse = {
    searchMeta: KontaktSearchMeta;
    venues: KontaktVenue[];
}

/**
 * Represents data about who a venue has been shared with.
 */
export type KontaktShareData = {
    managerMail: string;
    access: "VIEWER" | "EDITOR";
    expirationDate: number;
}

/**
 * Venue metadata for connecting kontakt venues with our kiosks
 */
export type KontaktVenueMeta = {
    kioskId: string;
}

/**
 * Data about a venue in Kontakt Cloud.
 */
export type KontaktVenue = {
    id: string;
    name: string;
    description: string;
    devicesCount: number;
    access: "OWNER" | "SUPERVISOR";
    shares: KontaktShareData[];
    metadata: KontaktVenueMeta | null;
    lat: number | null;
    lng: number | null;
    managerId: string;
}

export type KontaktDeviceMeta = {};

export type KontaktDeviceFutureId = {
    IBEACON: {
        proximity: string;
        major: number;
        minor: number;
    }[];

    EDDYSTONE: {
        namespace: string;
        instanceId: string;
    }[];
}

export type KontaktDevice = {
    id: string;
    uniqueId: string;
    alias: string | null;
    tags: string[];
    deviceType: "BEACON" | "GATEWAY" | "EXTERNAL";
    model: "SMART_BEACON" | "USB_BEACON" | "BEACON_PRO" | "CARD_BEACON" | "TAG_BEACON" | "HEAVY_DUTY_BEACON" | "CARD_BEACON_2" | "TOUGH_BEACON_2" | "BRACELET_TAG" | "SMART_BEACON_3" | "GATEWAY";
    product: string;
    specification: "STANDARD" | "TOUGH";
    managerId: string;
    ownerId: string;
    access: "OWNER" | "SUPERVISOR" | "EDITOR" | "VIEWER";
    venue: KontaktVenue;
    shares: KontaktShareData[];
    firmware: string;
    metadata: KontaktDeviceMeta | null;
    lat: number | null;
    lng: number | null;
    deployedlat: number | null;
    deployedlng: number | null;
    orderId: string;
    name: string;
    mac: string;
    profiles: ("IBEACON" | "EDDYSTONE")[];
    packets: ("KONTAKT" | "KONTAKT_TLM" | "KONTAKT_LOCATION" | "IBEACON" | "EDDYSTONE_UID" | "EDDYSTONE_URL" | "EDDYSTONE_TLM" | "EDDYSTONE_EID" | "EDDYSTONE_ETLM" | "BUTTON_IBEACON")[];
    proximity: string;
    major: number;
    minor: number;
    namespace: string;
    instanceId: string;
    url: string;
    shuffled: boolean;
    secureProximity: string;
    secureNamespace: string;
    futureId: KontaktDeviceFutureId;
    rssi1m: number[];
    rssi0m: number[];
    customConfiguration: any | null;
    lastSeen: number | null;
    batteryLevel: number | null;
    txPower: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    interval: number;
    kontaktFrameInterval: number;
    telemetryInterval: number | null;
    locationFrameInterval: number | null;
    locationFrameChannel: number | null;
    accelerometer: {
        features: ("ACCELEROMETER" | "X_AXIS" | "Y_AXIS" | "Z_AXIS" | "MOVE_DETECTION" | "DOUBLE_TAP_DETECTION")[];
        sensitivity: 16 | 32 | 64 | 128;
        preset: "MOVEMENT" | "FREE_FALL" | "DOUBLE_TAP" | "DOUBLE_TAP_AND_MOVEMENT" | "DOUBLE_TAP_AND_FREE_FALL";
        move: {
            threshold: number;
            duration: number;
            detectionFlags: ("X_POSITIVE" | "Y_POSITIVE" | "Z_POSITIVE" | "X_NEGATIVE" | "Y_NEGATIVE" | "Z_NEGATIVE")[];
            detectionFlagsJunction: "AND" | "OR";
        };
        doubleTap: {
            threshold: number;
            timeLimit: number;
            timeLatency: number;
            timeWindow: number;
            detectionFlags: ("X_AXIS" | "Y_AXIS" | "Z_AXIS")[];
        };
        highPass: {
            accelerometerData: boolean;
            moveDetection: boolean;
            doubleTapDetection: boolean;
            mode: "NORMAL" | "NORMAL_RESET" | "AUTORESET" | "REFERENCE";
            cutoffFrequency: 0.05 | 0.1 | 0.2 | 0.5;
            reference: number;
        };
    };
    powerSaving: {
        features: ("LIGHT_SENSOR" | "RTC" | "MOTION_DETECTION" | "BURST_MODE")[];
        moveSuspendTimeout: number | null;
        powerSaverAdvertiseInterval: number | null;
        rtc: {
            day: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
            hours: number[];
        }[] | null;
        lightSensorThreshold: number | null;
        lightSensorHysteresis: number | null;
        burstOnTime: number | null;
        burstOffTime: number | null;
    };
    eidInitialTimestamp: string;
    eidRotationPeriodExponent: number;
}

export type KontaktDevicesResponse = {
    devices: KontaktDevice[];
    searchMeta: KontaktSearchMeta;
}

export type KontaktDeviceStatus = {
    uniqueId: string;
    lastEventTimestamp: number;
    avgEventInterval: number;
    batteryLevel: number;
}

export type KontaktDeviceStatusResponse = {
    statuses: KontaktDeviceStatus[];
    searchMeta: KontaktSearchMeta;
}
