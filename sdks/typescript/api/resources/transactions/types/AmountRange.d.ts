/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * A monetary amount range, supporting inclusive or exclusive endpoints. The value may have the following forms: <ul> <li>`1200.50` match the dollar amount 1,200.50 exactly</li> <li>`[1000.00,1200.00)` matches items where `1000.00 <= amount < 1200.00`</li> <li>`[1000.00,1199.99]` matches items where `1000.00 <= amount <= 1199.99`</li> <li>`[999.99,1200.00]` matches items where `999.99 < amount < 1200.00`</li> <li>`[1200.50,]` matches items where `amount >= 1200.50`</li> <li>`(1200.50,)` matches items where `amount >= 1200.50`</li> <li>`[,1200.50]` matches items where `amount <= 1200.50`</li> <li>`(,1200.50)` matches items where `amount < 1200.50`</li> </ul>
 */
export declare type AmountRange = string;