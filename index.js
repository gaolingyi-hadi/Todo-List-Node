const db = require('./db.js')

// 新增任务
module.exports.add = async (title) => {
    const list = await db.read()
    list.push({title, done: false})
    await db.write(list)
}

// 清空任务
module.exports.clear = async () => {
    await db.write([])
}

