// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract RetrieveBal {
    struct TokenBalance {
        address token;
        uint256 balance;
    }

    function getBalances(address wallet, address[] calldata tokens)
        public
        view
        returns (TokenBalance[] memory)
    {
        TokenBalance[] memory balances = new TokenBalance[](tokens.length);
        for (uint256 i = 0; i < tokens.length; i++) {
            IERC20 token = IERC20(tokens[i]);
            uint256 balance = token.balanceOf(wallet);
            balances[i] = TokenBalance(tokens[i], balance);
        }
        return balances;
    }
}
