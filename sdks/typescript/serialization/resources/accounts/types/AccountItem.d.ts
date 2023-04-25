/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { ApitureApi } from "../../../..";
import * as core from "../../../../core";
export declare const AccountItem: core.serialization.ObjectSchema<serializers.AccountItem.Raw, ApitureApi.AccountItem>;
export declare namespace AccountItem {
    interface Raw {
        id?: serializers.ReadOnlyResourceId.Raw | null;
        label?: string | null;
        nickname?: serializers.AccountNickname.Raw | null;
        maskedNumber?: serializers.MaskedAccountNumber.Raw | null;
        allows: serializers.AccountPermissions.Raw;
        product?: serializers.ProductReference.Raw | null;
        location?: serializers.AccountLocation.Raw | null;
    }
}
