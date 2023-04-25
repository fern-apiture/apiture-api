/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * The type (or category) of bank account. <strong><code>productType</code></strong> strings may have one of the following [enumerated values](https://dx.apiture.com/docs/api-documentation/concepts/label-groups#enumerations): <table> <tr>
 *   <th>Value</th><th>Description</th>
 * </tr> <tr>
 *     <td><strong><code>savings</code></strong></td><td>Savings: <p>Savings Account</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>checking</code></strong></td><td>Checking: <p>Checking Account</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>cd</code></strong></td><td>CD: <p>Certificate of Deposit Account</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>ira</code></strong></td><td>IRA: <p>Individual Retirement Account</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>loan</code></strong></td><td>Loan: <p>Loan Account</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>creditCard</code></strong></td><td>Credit Card: <p>Credit Card Account</p>
 * </td>
 *     </tr>
 * </table>
 *
 */
export declare type ProductType = "savings" | "checking" | "cd" | "ira" | "loan" | "creditCard";
export declare const ProductType: {
    readonly Savings: "savings";
    readonly Checking: "checking";
    readonly Cd: "cd";
    readonly Ira: "ira";
    readonly Loan: "loan";
    readonly CreditCard: "creditCard";
};