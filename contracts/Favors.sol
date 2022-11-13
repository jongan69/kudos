// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol';
import '@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol';

/**
 * @notice A Chainlink VRF consumer which uses randomness to mimic the rolling
 * of a 20 sided dice
 */

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

//  interface ERC20 {
//     function transferFrom(
//         address _from,
//         address _to,
//         uint256 _value
//     ) internal {}
// }

contract Favors is VRFConsumerBaseV2 {
    // Contract Address of Kudos Token
    // ERC20 erc20Contract = ERC20("0x7f7A1D2196A6817bBF075f32C55128876F4E79AA");
    uint256 private constant ROLL_IN_PROGRESS = 42;
    VRFCoordinatorV2Interface COORDINATOR;
    // Your subscription ID.
    uint64 s_subscriptionId;
    // Goerli coordinator. For other networks,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    address vrfCoordinator = 0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D;
    // The gas lane to use, which specifies the maximum gas price to bump to.
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    bytes32 s_keyHash = 0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15;
    // Depends on the number of requested values that you want sent to the
    // fulfillRandomWords() function. Storing each word costs about 20,000 gas,
    // so 40,000 is a safe default for this example contract. Test and adjust
    // this limit based on the network that you select, the size of the request,
    // and the processing of the callback request in the fulfillRandomWords()
    // function.
    uint32 callbackGasLimit = 40000;
    // The default is 3, but you can set this higher.
    uint16 requestConfirmations = 3;
    // For this example, retrieve 1 random value in one request.
    // Cannot exceed VRFCoordinatorV2.MAX_NUM_WORDS.
    uint32 numWords = 1;
    address s_owner;

    // Array of players to prevent double mint
    address[] public playerAddresses; // store as an array

    // function storePlayer(address[] memory _playerAddress) public {
    //     playerAddresses = _playerAddress;
    // }

     function storePlayer(address roller) public returns(address[] memory){  
        playerAddresses.push(roller);
    }  

    function playerCount() public view returns (uint256) {
        return playerAddresses.length;
    }

    // map rollers to requestIds
    mapping(uint256 => address) private s_rollers;
    // map vrf results to rollers
    mapping(address => uint256) private s_results;
   

    event DiceRolled(uint256 indexed requestId, address indexed roller);
    event DiceLanded(uint256 indexed requestId, uint256 indexed result);
    /**
     * @notice Constructor inherits VRFConsumerBaseV2
     * @dev NETWORK: Goerli
     * @param subscriptionId subscription id that this consumer contract can use
     */
    constructor(uint64 subscriptionId) VRFConsumerBaseV2(vrfCoordinator) {
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        s_owner = msg.sender;
        s_subscriptionId = subscriptionId;
    }

      

    // function buyNFT(uint256 price) external {
    //     erc20Contract.transferFrom(msg.sender, price);
    //     // I'm assuming the `transferFrom` will revert if user
    //     // doesn't have sufficient balance, otherwise, we would need to check
    //     // for the return value and revert if needed
    //    _mint(msg.sender, tokenId, quantity);
    // }

    /**
     * @notice Requests randomness
     * @dev Warning: if the VRF response is delayed, avoid calling requestRandomness repeatedly
     * as that would give miners/VRF operators latitude about which VRF response arrives first.
     * @dev You must review your implementation details with extreme care.
     * @param roller address of the roller
     */
    function createPlayer(address roller) public onlyOwner returns (uint256 requestId) {
        // Iterate through players array to check if new address
        uint256 players = playerCount();
        for (uint256 i = 0; i < players; i++) {
	        if (playerAddresses[i] == roller) {
                // Not a new wallet address
                break;
            } else {
                // Store the player in playerAdrresses Array
                storePlayer(roller);
                require(s_results[roller] == 0, 'Already rolled');
                // Will revert if subscription is not set and funded.
                requestId = COORDINATOR.requestRandomWords(
                    s_keyHash,
                    s_subscriptionId,
                    requestConfirmations,
                    callbackGasLimit,
                    numWords
                );
                s_rollers[requestId] = roller;
                s_results[roller] = ROLL_IN_PROGRESS;
                emit DiceRolled(requestId, roller);
            }
        }
    }
    /**
     * @notice Callback function used by VRF Coordinator to return the random number to this contract.
     *
     * @dev Some action on the contract state should be taken here, like storing the result.
     * @dev WARNING: take care to avoid having multiple VRF requests in flight if their order of arrival would result
     * in contract states with different outcomes. Otherwise miners or the VRF operator would could take advantage
     * by controlling the order.
     * @dev The VRF Coordinator will only send this function verified responses, and the parent VRFConsumerBaseV2
     * contract ensures that this method only receives randomness from the designated VRFCoordinator.
     *
     * @param requestId uint256
     * @param randomWords  uint256[] The random result returned by the oracle.
     */
    function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords) internal override {
        uint256 d20Value = (randomWords[0] % 20) + 1;
        s_results[s_rollers[requestId]] = d20Value;
        emit DiceLanded(requestId, d20Value);
    }
    /**
     * @notice Get the favor assigned to the player once the address has rolled
     * @param player address
     * @return favor as a string
     */
    function collectBonus(address player) public view returns (uint8) {
        require(s_results[player] != 0, 'Dice not rolled');
        require(s_results[player] != ROLL_IN_PROGRESS, 'Roll in progress');
        return getBonus(s_results[player]);
    }
    /**
     * @notice get random bonus from the id
     * @param id uint256
     * @return bonus int
     */
    function getBonus(uint256 id) public pure returns (uint8) {
        // Get random value id location in bonus array
        uint8[20] memory bonus = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        // Mint that many kudos token to player
        // erc20Contract.transferFrom(msg.sender, price);
        return bonus[id - 1];
    }
    modifier onlyOwner() {
        require(msg.sender == s_owner);
        _;
    }
}
