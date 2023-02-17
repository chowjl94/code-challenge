SELECT 
    balances.addresses,
    SUM(balances.amount * CASE  WHEN balances.denom = 'usdc' THEN 0.000001
                                WHEN balances.denom = 'swth' THEN 0.00000005
                                WHEN balances.denom = 'tmz' THEN 0.003 END) AS total_usd
FROM balances
JOIN trades ON balances.addresses = trades.addresses
-- recent trade condition
WHERE trades.block_height > 730000 
GROUP BY balances.addresses
-- amount > 500
HAVING total_usd >= 500
