/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { ApitureApi } from "../../../..";
import * as core from "../../../../core";
export declare const TransferAccountReference: core.serialization.ObjectSchema<serializers.TransferAccountReference.Raw, ApitureApi.TransferAccountReference>;
export declare namespace TransferAccountReference {
    interface Raw {
        id: serializers.ResourceId.Raw;
        label?: string | null;
        type?: serializers.ProductType.Raw | null;
        location?: serializers.AccountLocation.Raw | null;
    }
}
