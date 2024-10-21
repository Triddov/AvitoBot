function sleep(sec){
    let ms = sec*1000
    return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = { sleep }
