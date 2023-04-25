/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
import { ApitureApi } from "../../../..";
export declare namespace Accounts {
    interface Options {
        environment: string;
        acessToken: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
    }
}
export declare class Accounts {
    protected readonly options: Accounts.Options;
    constructor(options: Accounts.Options);
    /**
     * Return a paginated list of the customer's accounts, consisting of internal accounts at this financial institution and accounts at other financial institutions, if any.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    listAccounts(request?: ApitureApi.ListAccountsRequest): Promise<ApitureApi.Accounts>;
    /**
     * Return details of the customer's internal account.
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     */
    getAccount(accountId: string): Promise<ApitureApi.Account>;
    /**
     * Return a list of the requested internal accounts' balances. The `accounts` query parameter is a list of account IDs which typically comes from the `getAccounts` operation response. The returned list does not include external accounts. The caller must have entitlements to view each account's details, as indicated by a `true` value for `account.allows.view`. Requests to list balances for accounts the user is not allowed to read results in a 403 Forbidden response. The response may be incomplete. Given a `Retry-After` response header, the client can retry the operation after a short delay, requesting only the accounts which are incomplete; see the 202 Accepted response for details.
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    listAccountBalances(request?: ApitureApi.ListAccountBalancesRequest): Promise<ApitureApi.AccountBalances>;
    /**
     * Return a paginated list of a customer's accounts that are eligible for ACH transfers based on allowed privileges. Optionally, an agent can access a business customer's ACH accounts when acting on behalf of that business customer via the optional `customerId` query parameter.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    listEligibleAchAccounts(request: ApitureApi.ListEligibleAchAccountsRequest): Promise<ApitureApi.Accounts>;
    /**
     * Return a collection of account joint owners. The user must have the `account.manageJointOwners` permission to use this operation.
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     */
    listAccountJointOwners(accountId: string): Promise<ApitureApi.AccountJointOwners>;
    /**
     * Create and send an invitation to another person to become a joint owner of the account. The invitation will be sent to the invitee's email address. The invitation directs the invitee to a web page to verify and accept the invitation, and if necessary, enroll in digital banking. The authenticated user must have the `account.allows.manageJointOwners` permission to use this operation.
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    createJointOwnerInvitation(accountId: string, request: ApitureApi.NewJointOwnerInvitation): Promise<ApitureApi.JointOwnerInvitation>;
    /**
     * Return a paginated list of a customer's accounts that are eligible to serve as overdraft protection accounts for the given account. An overdraft protection account is a deposit account that the financial institution can transfer funds from to prevent the account balance from going negative and incurring non-sufficient funds fees. The user must have the `allows.manageOverdraftAccounts` permission on the account to use this operation. To obtain available balances for these accounts, use [`listAccountBalances`](#op-listAccountBalances).
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    listEligibleOverdraftAccounts(accountId: string, request?: ApitureApi.ListEligibleOverdraftAccountsRequest): Promise<ApitureApi.EligibleOverdraftAccounts>;
    /**
     * Return the JSON representation of this account's overdraft protection settings.
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     */
    getOverdraftProtection(accountId: string): Promise<ApitureApi.OverdraftProtection>;
    /**
     * Perform a partial update of the overdraft accounts. Only fields in the request body are updated on the resource; fields which are omitted are not updated. To add, replace, or remove an overdraft account, add, replace, or remove the corresponding account item from the `items` array. Only the account `id` in the items is significant. The user must have the `allows.manageOverdraftAccounts` permission on the account to use this operation.
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    patchOverdraftAccounts(accountId: string, request: ApitureApi.OverdraftProtectionPatch): Promise<ApitureApi.OverdraftProtection>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}
