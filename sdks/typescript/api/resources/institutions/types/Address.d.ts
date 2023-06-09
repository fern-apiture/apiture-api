/**
 * This file was auto-generated by Fern from our API Definition.
 */
import { ApitureApi } from "../../../..";
/**
 * A postal address that can hold a US address or an international (non-US) postal addresses.
 */
export interface Address extends ApitureApi.AddressFields {
    /** The state, district, or outlying area of the postal address. This is required if `countryCode` is not `US`. `regionCode` and `regionName` are mutually exclusive. */
    regionName?: string;
    /** The state, district, or outlying area of the postal address. This is required if `countryCode` is `US` `regionCode` and `regionName` are mutually exclusive. */
    regionCode?: string;
    /** The postal code, which varies in format by country. If `countryCode` is `US`, this should be a five digit US ZIP code or ten character ZIP+4. */
    postalCode: string;
}
