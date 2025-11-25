// https://developer.dexcom.com/docs/dexcomv3/operation/getEstimatedGlucoseValuesV3/
export interface BGData {
    value: number;
    trend:
        | "doubleDown"
        | "singleDown"
        | "fortyFiveDown"
        | "flat"
        | "fortyFiveUp"
        | "singleUp"
        | "doubleUp"
        | "notComputable"
        | "rateOutOfRange"
        | "none";
    displayTime: string;
}
