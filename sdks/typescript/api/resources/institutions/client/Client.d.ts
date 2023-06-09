/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
import { ApitureApi } from "../../../..";
export declare namespace Institutions {
    interface Options {
        environment: string;
        acessToken: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
    }
}
export declare class Institutions {
    protected readonly options: Institutions.Options;
    constructor(options: Institutions.Options);
    /**
     * Look up a financial institution by their country code and either [American Bankers Association routing number](https://www.aba.com/about-us/routing-number), by [International Bank Account Number (IBAN)](https://www.ecbs.org/iban.htm), or by [SWIFT Business Identifier Code (BIC) code](https://www.swift.com/standards/data-standards/bic-business-identifier-code). Optionally, include a list of intermediary institutions that may be necessary to complete international wire transfers.
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    lookUpInstitutionByLocator(request: ApitureApi.LookUpInstitutionByLocatorRequest): Promise<ApitureApi.InstitutionLookupResult>;
    /**
     * Return a transfer schedule list for this institution.
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    listTransferSchedule(institutionId: string, request: ApitureApi.ListTransferScheduleRequest): Promise<ApitureApi.TransferSchedules>;
    /**
     * Return daily cutoff times for different money movement processes at a financial institution. Money movement requests (account to account transfers, ACH, wire transfers, etc.) must be submitted before the cutoff time in order for the financial institution to begin processing the request that day. Some [cutoff time types](#schema-cutoffTimeType) may have multiple cutoff times per day. Cutoff times are very slowly changing data. This is a _conditional operation_ when the `If-None-Match` header is used. If the client has a `getCutoffTimes` response and the `ETag` returned from a previous call to this operation, this operation returns a 304 Not Modified when called again if the cutoff times have not changed.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    getCutoffTimes(institutionId: string, request?: ApitureApi.GetCutoffTimesRequest): Promise<ApitureApi.CutoffTimes>;
    /**
     * Return the transfer date restrictions for a date range and transfer parameters. The result is a list of days and dates that the financial institution does not allow scheduling specific types of transfers. This information provides hints to clients, allowing bank customers to select transfer dates from a calendar picker. However, these dates are not strictly enforced; a transfer can still be scheduled to occur on restricted dates but the financial institution may shift the date when funds are drafted to account for holidays, closures, or to adjust based on the risk level of the funding account.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    getTransferDateRestrictions(institutionId: string, request?: ApitureApi.GetTransferDateRestrictionsRequest): Promise<ApitureApi.TransferDateRestrictions>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}
