/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { ApitureApi } from "../../../..";
import * as core from "../../../../core";
export declare const NewJointOwnerInvitation: core.serialization.ObjectSchema<serializers.NewJointOwnerInvitation.Raw, ApitureApi.NewJointOwnerInvitation>;
export declare namespace NewJointOwnerInvitation {
    interface Raw extends serializers.AbstractBody.Raw, serializers.JointOwnerInvitationFields.Raw {
    }
}