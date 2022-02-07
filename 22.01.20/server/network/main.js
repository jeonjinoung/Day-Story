const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const {Blocks, getBlocks} = require('../blockchain/blocks')
const { getVersion } = require('../utils/isValidBlock')

app.use(express.json())

app.get('/blocks', (req,res)=>{
    res.send(getBlocks())
})

app.get('/version', (req,res)=>{
    res.send(getVersion());
})


app.listen(port,()=>{
    console.log(`server start port ${port}`)
})

/*
<웹서버 구축 목적>
블록 가져오기 
peer / 간단한 기록들 / 버전
중단 
*/

//블럭읽어오기
//curl -X GET http://localhost:3000/block

//블럭 파이썬 제이슨형태로 블럭을 읽어옴
//curl -X GET http://localhost:3000/blocks python -m json.tool


