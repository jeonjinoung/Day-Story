const fs = require('fs')

function getVersion() {
    const { version } = JSON.parse(fs.readFileSync("../package.json"))
    // console.log('package=',package.toString('utf8'))
    // console.log('JSON.parse(package)=',JSON.parse(package))
    // console.log('JSON.parse(package) version=',JSON.parse(package).version)
    return version
}

function getCurrentTime() {
    return Math.ceil(new Date().getTime() / 1000)
}



module.exports = {getVersion, getCurrentTime}