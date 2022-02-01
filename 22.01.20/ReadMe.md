# 1장 블록생성 및 폴더 구조화

폴더
1. Client

2. Server
ⓞ blockchain
-blockclass.js (BlockHeader / Block 구조화)
# 블록생성을 위한 파일 구조화 #

-blocks.js(createGenesisBlock / getLastBlock / addBlock / nextBlock)
# createGenesisBlock 최초 블럭을 생성하는 함수 #
# getLastBlock 마지막 블럭을 나타내기위함 함수 #
# add Block 블럭들을 얻기위한 함수 #
# nextBlock add블럭을 활성화하고 createGenesisBlock을 암호화하기위한 블럭 #

ⓞ config
-아직 작업을 하기전이지만 나중에 db연결되는 연결주소 및 내용저장소?

ⓞ models
-DB에 담을 내용을 정의하는 공간

ⓞ network
-메인서버 및 소케서버를 여는 공간

ⓞ utils
-hash.js(createHash)
# createHash 블록의 data안에있는 version index previousHash등을 #
# cryptoJs를 통하여 해쉬값으로변환해 내용을전달하는역할을 한다.#

###### 2장 검증하기 #######
1. AddBlock 새로운 block 추가하는 함수
2. newBlock 새로운 블록을 생성하는 함수
3. createHash 함수생성 - 이전 블록의 모든 header string값을 받아와 새 hash 암호화
4. 새로 만든 블럭 점증 -> 후에 add
뭔가 이어지는 함수가 많아서 잘 생각하기 !! 
addBlock : 새로운 블록을 추가하는 함수 
## isValidNewBlock : 새로운 블록과, 이전 블록을 세트로 검증하는 함수 ##
## isValieType : 새로운 블록의 Type 을 검증하는 함수 ##

작업구간
server

ⓞ blockchain
- blocks.js


###### 3장 웹소켓 연결하기 및 ws웹서버 구축 #######
-> WebSocket 
-> socket.io = 웹소켓으로 웹으로 구성할 때 필수적인 구성을 미리 만들어 놓은 패키지 

   이전 node.js chatting을 만들 때 사용함
   기본 기능 외 여러가지 기능이 많다. 
   처음 사용하는 사람이 사용하기 편하다

-> ws (web socket 약자) 
   접속에 대한 것만 ex) broadcast, to 

 

블록체인은 두 개의 port가 필요

1) 서버 - 클라이언트 
2) 노드끼리 통신 

 

오늘 웹서버 구축의 기초작업 / setting 예정 ! 

커밋을 위한 commit 아.... 트랜잭션 해야되는데

아직도 못하고있다..
