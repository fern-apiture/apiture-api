/**
 * This file was auto-generated by Fern from our API Definition.
 */
import { ApitureApi } from "../../../..";
/**
 * A page of zero or more accounts that are eligible to be assigned as an overdraft protection account for another account.
 */
export interface EligibleOverdraftAccounts extends ApitureApi.AbstractPagedBody {
    /** The items in this page of accounts. */
    items?: unknown;
    /** The maximum number of overdraft protection accounts that may be linked to the account. */
    maximumOverdraftAccounts: number;
}
