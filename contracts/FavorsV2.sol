// Favor V2 Contract
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

contract FavorsContractV2 {
    event AddFavor(address recipient, uint256 favorId);
    event AceeptFavor(uint256 favorId, address acceptedBy);
    event CompleteFavor(uint256 favorId, bool isCompleted);

    struct Favor {
        uint256 id;
        string favorText;
        bool isCompleted;
        address acceptedBy;
    }

    Favor[] private favors;
    mapping(uint256 => address) favorToOwner;
    address acceptedBy;

    function addFavor(string memory favorText, bool isCompleted) external {
        uint256 favorId = favors.length;
        favors.push(Favor(favorId, favorText, isCompleted, acceptedBy));
        favorToOwner[favorId] = msg.sender;
        emit AddFavor(msg.sender, favorId);
    }

    function getMyFavors() external view returns (Favor[] memory) {
        Favor[] memory temporary = new Favor[](favors.length);
        uint256 counter = 0;

        for (uint256 i = 0; i < favors.length; i++) {
            if (
                favorToOwner[i] == msg.sender && favors[i].isCompleted == false
            ) {
                temporary[counter] = favors[i];
                counter++;
            }
        }
        Favor[] memory result = new Favor[](counter);
        for (uint256 i = 0; i < counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    function getAllIncompleteFavors() external view returns (Favor[] memory) {
        Favor[] memory temporary = new Favor[](favors.length);
        uint256 counter = 0;

        for (uint256 i = 0; i < favors.length; i++) {
            if (favors[i].isCompleted == false) {
                temporary[counter] = favors[i];
                counter++;
            }
        }
        Favor[] memory result = new Favor[](counter);
        for (uint256 i = 0; i < counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    function acceptFavor(uint256 favorId) external {
        if (favorToOwner[favorId] != msg.sender) {
            favors[favorId].acceptedBy = msg.sender;
            emit AceeptFavor(favorId, acceptedBy);
        }
    }

    function completeFavor(uint256 favorId, bool isCompleted) external {
        if (favorToOwner[favorId] == msg.sender) {
            favors[favorId].isCompleted = isCompleted;
            // Need to add VRF Call to receive payment amount 
            // Pay user that completed the favor
            emit CompleteFavor(favorId, isCompleted);
        }
    }
}
