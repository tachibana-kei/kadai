try {
    const str1 = "abc"
    JSON.parse(str1)
}catch (error){
   //
   //
   //
   console.log(error)
}
try {
    const str2 = "'abc'"
    JSON.parse(str2)

    const str3 = '"abc"'
    JSON.parse(str3