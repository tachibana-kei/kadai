// 丸写ししてください
const max = parseInt(process.argv[2])

//　３ の倍数の時に特別なメッセージを出力する
for(let n=1; n <= max; n = n + 1) {
    if(n % 3 === 0){
        console.log('ヒノカミ神楽　円舞')
    }　else {
        console.log(n)
    }
}