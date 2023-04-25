/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import { ApitureApi } from "../../../../..";
import * as core from "../../../../../core";
export declare const NewTransfer: core.serialization.Schema<serializers.NewTransfer.Raw, Omit<ApitureApi.NewTransfer, "challenge">>;
export declare namespace NewTransfer {
    interface Raw extends serializers.AbstractBody.Raw, serializers.TransferFields.Raw {
        schedule?: serializers.TransferSchedule.Raw | null;
    }
}
