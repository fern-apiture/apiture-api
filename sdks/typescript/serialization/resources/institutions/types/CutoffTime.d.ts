/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { ApitureApi } from "../../../..";
import * as core from "../../../../core";
export declare const CutoffTime: core.serialization.ObjectSchema<serializers.CutoffTime.Raw, ApitureApi.CutoffTime>;
export declare namespace CutoffTime {
    interface Raw {
        type: serializers.CutoffTimeType.Raw;
        time: string;
    }
}
