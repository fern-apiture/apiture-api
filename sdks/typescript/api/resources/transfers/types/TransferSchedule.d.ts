/**
 * This file was auto-generated by Fern from our API Definition.
 */
import { ApitureApi } from "../../../..";
/**
 * The scheduled date when the transfer should be completed, the recurrence, if any, and other derived dates based on the scheduled date. For recurring transfer schedules, `endsOn`, `count`, and `amountLimit` are mutually exclusive.
 */
export interface TransferSchedule {
    /** The date the the customer scheduled the transfer to occur in `YYYY-MM-DD` [RFC 3339](https://tools.ietf.org/html/rfc3339) `date` format. */
    scheduledOn?: string;
    recurrenceType?: ApitureApi.TransferRecurrenceType;
    frequency: ApitureApi.TransferFrequency;
    /** The optional date when the recurring transfer schedule ends, in `YYYY-MM-DD` [RFC 3339](https://tools.ietf.org/html/rfc3339) date format. Subsequent recurring transfers may be scheduled up to and including this date, but not after. This property is ignored if `frequency` is `once`. */
    endsOn?: string;
    /** For recurring schedules (`frequency` is not `once`), this is the total number of transfers to make, including the first transfer. This property is ignored if `frequency` is `once`. */
    count?: number;
    amountLimit?: ApitureApi.MonetaryValue;
}