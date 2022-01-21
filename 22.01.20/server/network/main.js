const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const {Blocks, getBlocks} = require('../blockchain/blocks')

app.use(express.json())

app.get('/blocks', (req,res)=>{
    res.send(getBlocks())
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

