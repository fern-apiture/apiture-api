/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * Indicates the type of transfer. This determines what business rules and adjustments to make to the date restrictions. <strong><code>transferTypeForDateRestrictions</code></strong> strings may have one of the following [enumerated values](https://dx.apiture.com/docs/api-documentation/concepts/label-groups#enumerations): <table> <tr>
 *   <th>Value</th><th>Description</th>
 * </tr> <tr>
 *     <td><strong><code>internal</code></strong></td><td>Internal: <p>Internal account to internal account transfer</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>ach</code></strong></td><td>ACH: <p>An ACH transfer that includes both debit and credit transfers</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>achCredit</code></strong></td><td>ACH Credit: <p>An ACH transfer debiting an internal account and crediting an external account</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>achDebit</code></strong></td><td>ACH Debit: <p>An ACH transfer debiting an external account and crediting an internal account</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>domesticWireTransfer</code></strong></td><td>Domestic Wire Transfer</td>
 *     </tr>
 * <tr>
 *     <td><strong><code>internationalWireTransfer</code></strong></td><td>International Wire Transfer</td>
 *     </tr>
 * </table>
 *
 */
export declare type TransferTypeForDateRestrictions = "internal" | "ach" | "achDebit" | "achCredit" | "domesticWireTransfer" | "internationalWireTransfer";
export declare const TransferTypeForDateRestrictions: {
    readonly Internal: "internal";
    readonly Ach: "ach";
    readonly AchDebit: "achDebit";
    readonly AchCredit: "achCredit";
    readonly DomesticWireTransfer: "domesticWireTransfer";
    readonly InternationalWireTransfer: "internationalWireTransfer";
};
