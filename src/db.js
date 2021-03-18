import mongo from "mongodb"

// MongoClient is declared but its value is never read
const { MongoClient } = mongo

const url = process.env.MONGO_URL

export const client = new MongoClient(url, { useNewUrlParser: true })

export async function connectDb() {
    try {
        await client.connect()

        // Confirm connection
        await client.db("admin").command({ ping: 1 })

        console.log("🗄️🗄️🗄️ Connected to DB success 🗄️🗄️🗄️")
    } catch (e) {
        console.log("error in connectDb")
        console.error(e)
        // If there is a problem close connection to db
        await client.close()
    }
}
