const profile = {
    '名前' : '空条承太郎',
    '年齢' : 18,
    '性別' : '男',
    'スタンド' : 'スタープラチナ',
    '勤務地'　: '杜王町',
    '趣味' : 'ギャンブル',
    '専攻' : '海洋生物'
}
const keys = Object.keys(profile)
console.log(keys)

for (let index = 0; index < keys.length; index = index + 1) {
    const key = keys[index];
    console.log('私の ' + key + ' は ' + profile[key] + ' です。 ')
}