// нужно установить драйвер: npm i mongodb -S
const {MongoClient} = require('mongodb') // подключаем основной его объект mondoClient

class Connection {
    static async connectToMongo() {
        if(this.db) return this.db
        const client = await MongoClient.connect(this.url, this.options)
        this.db=client.db(process.env.DB_NAME) // название БД в переменной окружения
        return this.db
    }
}

connection.db=null
connection.url=process.env.DB_CONNECT
connection.options = {
    useNewUrlParser:true,
    useUnifieldTopology:true
}

module.exports={Connection}
