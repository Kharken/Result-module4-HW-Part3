import {CommonData, CommonProps} from "./common-types";


export interface Episode extends CommonData {
    air_date: string;
    episode: string;
    created: string;
}

export interface EpisodeCardProps extends CommonProps {
    data: Episode;
}
