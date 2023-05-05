async function main() {
    const uri = "mongodb+srv://diarndt:MyByu1Password@cluster0.xihsoea.mongodb.net/test";

    const client = new MongoClient(uri);

    try{
        await client.connect();

        await listDatabases(client);

    }catch (e) {
        console.error(e);
    }finally {
        await client.close();
    }

}node

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};