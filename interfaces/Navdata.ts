export type Waypoint = {
    name: string;
    id: string;
    coords: Coordinates;
    aliases?: string[];
}

export type Aerodrome = {
    id: string;
    coords: Coordinates;
}

export type Coordinates = {
    lat: number;
    long: number;
}