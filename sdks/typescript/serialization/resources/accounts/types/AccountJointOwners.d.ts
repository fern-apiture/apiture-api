/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { ApitureApi } from "../../../..";
import * as core from "../../../../core";
export declare const AccountJointOwners: core.serialization.ObjectSchema<serializers.AccountJointOwners.Raw, ApitureApi.AccountJointOwners>;
export declare namespace AccountJointOwners {
    interface Raw {
        items: serializers.AccountJointOwner.Raw[];
    }
}
