export interface BridgeId {
    id: string;
    name: string;
}

export interface Bridge extends BridgeId{
    lat: number;
    lng: number;
    year: number;
    length: number | null;
    width: number | null;
}