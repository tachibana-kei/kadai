//数字　n が　偶数である
//数字 n　が　３の倍数である

const n = 9
const isGusu = false
const is3x   = true

//数字　n が　偶数である　かつ　３の倍数である => AND 演算
isGusu && is3x // false && true // false

// 数字 n が　偶数である　または　３の倍数である　=> OR 演算
isGusu || is3x // false || true === true

// 数字 n が 偶数でない　