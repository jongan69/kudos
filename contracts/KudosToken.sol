// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KudosToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Kudos", "KDS") {
        _mint(msg.sender, initialSupply);
    }
}