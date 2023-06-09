/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * Describes whether the transfer amount in the transfer varies or is fixed when the transfer recurs. This is ignored if the transfer frequency is `once`. <strong><code>transferRecurrenceType</code></strong> strings may have one of the following [enumerated values](https://dx.apiture.com/docs/api-documentation/concepts/label-groups#enumerations): <table> <tr>
 *   <th>Value</th><th>Description</th>
 * </tr> <tr>
 *     <td><strong><code>fixed</code></strong></td><td>Fixed: <p>The transfer amounts are the same each time a transfer recurs</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>variable</code></strong></td><td>Variable: <p>The transfer amounts vary and must be entered/verified each time a transfer recurs</p>
 * </td>
 *     </tr>
 * </table>
 *
 */
export declare type TransferRecurrenceType = "fixed" | "variable";
export declare const TransferRecurrenceType: {
    readonly Fixed: "fixed";
    readonly Variable: "variable";
};
