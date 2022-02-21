const Web3 = require("web3");

const fs = require("fs");
const { constants } = require("buffer");

const ABI = JSON.parse(
  fs.readFileSync("./contracts_Voting_test_sol_VotingTest.abi").toString()
);

const BYTECODE = fs
  .readFileSync("./contracts_Voting_test_sol_VotingTest.bin")
  .toString();

const accounts = [];
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

async function init() {
  await web3.eth.getAccounts().then((data) => {
    data.forEach((x) => {
      accounts.push(x);
    });
  });
}

init().then(() => {
  console.log(accounts);
  const votingContract = new web3.eth.Contract(ABI);
  votingContract
    .deploy({
      data: BYTECODE,
    })
    .send({
      from: accounts[0],
      gas: 1500000,
      gasPrice: "30000000000000",
    })
    .then((newContractsInstance) => {
      console.log(newContractsInstance.options.address);
      // console.log(newContractsInstance);
      newContractsInstance.methods
        .getVotedCount("JY.JEON")
        .call()
        .then((data) => {
          console.log("Voted Count : " + data);
        });
    });
});
