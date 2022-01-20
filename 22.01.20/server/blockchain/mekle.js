
const { MerkleTree } = require('merkletreejs')
//MerkleTree 모듈 가져오기
const SHA256 = require('crypto-js/sha256')
//SHA256 모듈 가져오기

console.log( SHA256('emily').toString())
//여기까지 sha256를 string으로 암호화 한 것 ! 

const testSet = ['a','b','c'].map((v)=>SHA256(v))
//이제 배열로 만들 것 (a,b,c를 배열에 담아 암호화) 각각 256암호화 해서
//배열에 넣기
console.log(testSet)

//a,b,c를 머클에 적용해보기
const tree = new MerkleTree(testSet, SHA256)
console.log(tree)

//Merkle에는 최상위 노드 (root)를 가져오는 매서드가 있음 !
const root = tree.getRoot().toString('hex')
console.log('root=',root)

const testRoot = 'a'
const leaf = SHA256(testRoot)

// 첫번째 인자값 : 우리가 찾을 sha256 값 
const proof = tree.getProof(leaf)
console.log(tree.verify(proof,leaf, root))