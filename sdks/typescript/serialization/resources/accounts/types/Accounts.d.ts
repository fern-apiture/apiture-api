/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { ApitureApi } from "../../../..";
import * as core from "../../../../core";
export declare const Accounts: core.serialization.ObjectSchema<serializers.Accounts.Raw, ApitureApi.Accounts>;
export declare namespace Accounts {
    interface Raw extends serializers.AbstractPagedBody.Raw {
        items: serializers.AccountItem.Raw[];
        count?: number | null;
        primaryAccountId?: serializers.ReadOnlyResourceId.Raw | null;
    }
}
