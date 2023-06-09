/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { ApitureApi } from "../../../..";
import * as core from "../../../../core";
export declare const JointOwnerInvitationFields: core.serialization.ObjectSchema<serializers.JointOwnerInvitationFields.Raw, ApitureApi.JointOwnerInvitationFields>;
export declare namespace JointOwnerInvitationFields {
    interface Raw {
        firstName: string;
        lastName: string;
        taxId?: string | null;
        sharedSecret: string;
        emailAddress: string;
        disallowDebitCardAccess?: boolean | null;
    }
}
