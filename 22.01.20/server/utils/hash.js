const cryptoJs = require('crypto-js')

function createHash(block) {
    const {
        version,
        index,
        previousHash,
        merkletime,
        merkleRoot
    } = block.header
    const blockString = version + index + previousHash + merkletime + merkleRoot;
    //암호화 진행
    const Hash = cryptoJs.SHA256(blockString).toString()
    return Hash
}
module.exports = {createHash}