/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { ApitureApi } from "../../../..";
import * as core from "../../../../core";
export declare const TransferSchedules: core.serialization.ObjectSchema<serializers.TransferSchedules.Raw, ApitureApi.TransferSchedules>;
export declare namespace TransferSchedules {
    interface Raw extends serializers.AbstractBody.Raw {
        items: serializers.TransferScheduleItem.Raw[];
    }
}
