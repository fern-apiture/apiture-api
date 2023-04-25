/**
 * This file was auto-generated by Fern from our API Definition.
 */
import { ApitureApi } from "../../../..";
/**
 * A list of the financial institution's transfer date restrictions. This is a list of weekdays and specific dates when the institution cannot perform the requested transfers. The response may include dates prior to requested the start date, as that is useful for populating a calendar that shows the current month and the last few days of the previous month.
 */
export interface TransferDateRestrictions extends ApitureApi.AbstractBody {
    /** A list of restricted transfer dates as determined by the requested transfer parameters, holidays, and scheduled closures. This includes dates that correspond to normal day-of-week restrictions as listed in `restrictedDays`. */
    restrictedDates?: ApitureApi.TransferDateRestriction[];
    /** The service only knows [bank holidays](https://www.federalreserve.gov/aboutthefed/k8.htm) for about two to four years in advance. This date is the end of that known holiday schedule, although the requested dates may extend well beyond this date. Any dates in the response beyond this date may omit holidays but may include other restricted dates based on the financial institution's normal scheduled closures such as Saturdays and Sundays. */
    accuracyEndsOn?: string;
}
