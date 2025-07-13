export type FIR = {
    name: string;
    icao: string;
    country: string;
    region: string;
    limits: Coordinates[];
}

export type Waypoint = {
    name: string;
    id: string;
    coords: Coordinates;
    aliases?: string[];
}

export type Aerodrome = {
    name?: string;
    id: string;
    coords: Coordinates;
}

export type Coordinates = {
    lat: number;
    long: number;
}