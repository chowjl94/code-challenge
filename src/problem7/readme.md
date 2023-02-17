# Problem 6

# Task

Write an SQL query that returns the the list of addresses which has recently made a trade, and wallet has at least $500 (total balance) in it.

`trades`

| id | address | denom| amount | block_height |
| 1 | 0xabab..| swth | 400000000000 | 733756 |
| 2 | 0x99cc..| usdc | 3500000000000 | 733757 |
| 3 | 0x67f3..| swth | 72000000000000| 733758 |

`balances`

| id | address | denom | amount | block_height |
| 1 | 0xabab.. | usdc | 50000000000000 | 733755 |
| 2 | 0x99cc.. | swth | -20000000 | 733757 |
| 3 | 0xabab.. | usdc | -50000000000 | 733855 |
