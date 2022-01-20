class BlockHeader{
    constructor(version, index, previousHash, timestamp, merkleRoot){
        this.version = version
        this.index = index
        this.previousHash = previousHash
        this.timestamp = timestamp
        this.merkleRoot = merkleRoot
    }
}
class Block {
    constructor(header, body){
        this.header = header
        this.body = body
    }
}

module.exports = { Block, BlockHeader }





/*
블롴체인 개념 설명

 

- 네트워크 (http, socket..) 

- 분산원장 (데이터를 저장하는 코드) 

  - hash sha 256 -> JWT 

  - 단반향 암호화 ( 자리수는 고정되어 있다.) 

  - 머클 (Merkle) 

  - 작업증명 (pow) = 마이닝 

    Merkle 사용 이유 : 너무 많은 노드(블록)들을 찾기에 리소스의 낭비가 크고 효율성이 떨어짐 (완전탐색)
    -> merkle 사용으로 연결된 데이터 중 찾고자하는 데이터를 효율적으로 찾을 수 있음. 

*/