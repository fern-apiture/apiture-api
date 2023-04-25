/**
 * This file was auto-generated by Fern from our API Definition.
 */
import { ApitureApi } from "../../../..";
/**
 * List of transfer methods. The items in the list are ordered in the `items` array.
 */
export interface TransferSchedules extends ApitureApi.AbstractBody {
    /** An array containing upcoming transfer schedule items. */
    items: ApitureApi.TransferScheduleItem[];
}
