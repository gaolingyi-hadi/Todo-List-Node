const path = require('path')
const fs = require('fs')
const todoPath = path.join(__dirname, '.todo')
const db = {
    read(dbPath = todoPath) {
        return new Promise((resolve, reject) => {
            fs.readFile(dbPath, {flag: 'a+'}, (error, data) => {
                if (error) return reject(error)
                let list
                try {
                    list = JSON.parse(data.toString())
                } catch (e) {
                    list = []
                }
                resolve(list)
            })
        })
    },
    write(list, dbPath = todoPath) {
        return new Promise((resolve, reject) => {
            const string = JSON.stringify(list)
            fs.writeFile(dbPath, string + '\n', (error) => {
                if (error) return reject(error)
                resolve()
            })
        })
    }
}
module.exports = db