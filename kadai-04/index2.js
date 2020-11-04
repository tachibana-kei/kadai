// 3秒待ってHello　と表示し、２秒待ってBye と表示する
setTimeout(() => { 
    console.log('やっはろー') 
setTimeout(() => { 
    console.log('ばいならー')
     }, 2000)
},3000)