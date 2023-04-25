/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * Indicates the type of the institution `locator`. <strong><code>institutionLocatorType</code></strong> strings may have one of the following [enumerated values](https://dx.apiture.com/docs/api-documentation/concepts/label-groups#enumerations): <table> <tr>
 *   <th>Value</th><th>Description</th>
 * </tr> <tr>
 *     <td><strong><code>abaRoutingNumber</code></strong></td><td>ABA Routing Number: <p>The <a href="https://www.aba.com/about-us/routing-number">American Bankers Association routing number</a> of a financial institution</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>swiftBicCode</code></strong></td><td>swiftBicCode: <p>The <a href="https://www.swift.com/standards/data-standards/bic-business-identifier-code">SWIFT Business Identifier Code (BIC) code</a> of a financial institution</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>ibanAccountNumber</code></strong></td><td>IBAN: <p><a href="https://www.ecbs.org/iban.htm">International Bank Account Number (IBAN)</a></p>
 * </td>
 *     </tr>
 * </table>
 *
 */
export declare type InstitutionLocatorType = "abaRoutingNumber" | "swiftBicCode" | "ibanAccountNumber";
export declare const InstitutionLocatorType: {
    readonly AbaRoutingNumber: "abaRoutingNumber";
    readonly SwiftBicCode: "swiftBicCode";
    readonly IbanAccountNumber: "ibanAccountNumber";
};
