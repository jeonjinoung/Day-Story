// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract VotingTest {
  mapping (string => uint) public candidatesVotedCount;

  constructor(){
    //컨트렉트가 실행되면 득표수를 5
    candidatesVotedCount['JY.JEON'] = 5;
  }

  function getVotedCount(string memory _name) external view returns (uint) {
    return candidatesVotedCount[_name];
  }
}