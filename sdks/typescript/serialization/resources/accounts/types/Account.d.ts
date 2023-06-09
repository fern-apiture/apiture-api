/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { ApitureApi } from "../../../..";
import * as core from "../../../../core";
export declare const Account: core.serialization.ObjectSchema<serializers.Account.Raw, ApitureApi.Account>;
export declare namespace Account {
    interface Raw extends serializers.AbstractBody.Raw, serializers.AccountFields.Raw {
        allows: serializers.FullAccountPermissions.Raw;
        electronicStatements: boolean;
    }
}
