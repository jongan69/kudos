// TodoApp Task Contract
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

contract FavorsContractV2 {
    event AddFavor(address recipient, uint favorId);
    event DeleteFavor(uint favorId, bool isDeleted);

    struct Favor {
     uint id;
     string favorText;
     bool isDeleted;
    }


    Favor[] private favors;
    mapping(uint256 => address) favorToOwner;

    function addFavor(string memory favorText, bool isDeleted) external {
        uint favorId = favors.length;
        favors.push(Favor(favorId, favorText, isDeleted));
        favorToOwner[favorId] = msg.sender;
        emit AddFavor(msg.sender, favorId);
    }


    function getMyTasks() external view returns (Favor[] memory){
        Favor[] memory temporary = new Favor[](favors.length);
        uint counter = 0;

        for(uint i = 0; i<favors.length; i++) {
            if(favorToOwner[i] == msg.sender && favors[i].isDeleted == false) {
                temporary[counter] = favors[i];
                counter++;
            }
        }
        Favor[] memory result = new Favor[](counter);
        for ( uint i=0; i < counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }


    function deleteTasks(uint favorId, bool isDeleted) external {
        if(favorToOwner[favorId] == msg.sender){
            favors[favorId].isDeleted = isDeleted;
            emit DeleteFavor(favorId, isDeleted);
        }
    }
}