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
