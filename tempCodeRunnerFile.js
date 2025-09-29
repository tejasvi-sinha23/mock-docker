//GET all users
app.get("/getUsers", async (req, res) => {
    await client.connect(URL);
    console.log('Connected successfully to server');

    const db = client.db("apnacollege-db");
    const data = await db.collection('users').find({}).toArray();
    
    client.close();
    res.send(data);
});