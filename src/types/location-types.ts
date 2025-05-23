import {CommonData, CommonProps} from "./common-types";

export interface Locations extends CommonData {
    type: string;
    dimension: string;
    created: string;
}

export interface LocationCardProps extends CommonProps {
    data: Locations;
}
