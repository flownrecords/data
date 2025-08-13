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
    name: string;
    id: string;
    coords: Coordinates;
}

export type Coordinates = {
    lat: number;
    long: number;
}

export type Navaid = {
    id: string;
    type: "VOR" | "VOR/DME" | "NDB" | "DME";
    freq: number;
    coords: Coordinates;
}