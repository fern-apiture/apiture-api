/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { ApitureApi } from "../../../..";
import * as core from "../../../../core";
export declare const TransactionCategories: core.serialization.ObjectSchema<serializers.TransactionCategories.Raw, ApitureApi.TransactionCategories>;
export declare namespace TransactionCategories {
    interface Raw {
        items: serializers.TransactionCategory.Raw[];
    }
}
