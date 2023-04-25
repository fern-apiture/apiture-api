/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * Values for the `?allows=` filter in [`listAccounts`](#op-listAccounts). <strong><code>accountAllowsFilter</code></strong> strings may have one of the following [enumerated values](https://dx.apiture.com/docs/api-documentation/concepts/label-groups#enumerations): <table> <tr>
 *   <th>Value</th><th>Description</th>
 * </tr> <tr>
 *     <td><strong><code>billPay</code></strong></td><td>Bill Pay: <p>Include each account where the caller is allowed to use the bill pay feature.</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>transferFrom</code></strong></td><td>Transfer From: <p>Include each account where the caller is allowed to transfer money from the account.</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>transferTo</code></strong></td><td>Transfer To: <p>Include each account where the caller is allowed to transfer money into the account.</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>mobileCheckDeposit</code></strong></td><td>Mobile Check Deposit: <p>Include each account where the caller is allowed to deposit mobile checks.</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>view</code></strong></td><td>View: <p>Include each account where the caller is allowed to view full account details (balances, full account number, transactions, etc).</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>viewCards</code></strong></td><td>View Cards: <p>Include each account where the caller is allowed to view debit card details.</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>manageCards</code></strong></td><td>Manage Cards: <p>Include each account where the caller is allowed to manage debit card details.</p>
 * </td>
 *     </tr>
 * </table>
 *
 */
export declare type AccountAllowsFilter = "billPay" | "transferFrom" | "transferTo" | "mobileCheckDeposit" | "view" | "viewCards" | "manageCards";
export declare const AccountAllowsFilter: {
    readonly BillPay: "billPay";
    readonly TransferFrom: "transferFrom";
    readonly TransferTo: "transferTo";
    readonly MobileCheckDeposit: "mobileCheckDeposit";
    readonly View: "view";
    readonly ViewCards: "viewCards";
    readonly ManageCards: "manageCards";
};
