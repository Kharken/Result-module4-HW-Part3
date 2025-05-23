
export interface Locations {
    id: number;
    name: string;
    type: string;
    dimension: string;
    created: string;
}

export interface LocationCardProps {
    isLoading: boolean;
    error: unknown;
    data: Locations;
}
