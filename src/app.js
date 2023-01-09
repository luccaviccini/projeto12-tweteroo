import  express, { json }  from "express";
import cors from "cors"

// const variables
const PORT = 5000;
const server = express();
server.use(cors());

server.use(json());

//register new user

const myUsers = [
    
];
const myTweets = [];

// sign up
server.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    myUsers.push({ username, avatar });
    console.log(myUsers);
    res.status(201).send("OK");
});

// get tweets
server.get("/tweets", (req, res) => {
    // create an object with myTweets and avatar from myUser
    

    const tweets = myTweets.map((tweet) => {
        const user = myUsers.find((user) => user.username === tweet.username);
        return { ...tweet, avatar: user.avatar };
    });

    // show only last 10 tweets    
    tweets.splice(0, tweets.length - 10);
    tweets.reverse();
    

    res.status(200).send(tweets);
    console.log(tweets)
});

// post tweet
server.post("/tweets", (req, res) => {
    

    const { username, tweet } = req.body;
    // check if user exists
    const user = myUsers.find((user) => user.username === username);
    if (!user) {
        res.status(401).send("UNAUTHORIZED");
        return;
    }
    myTweets.push({ username, tweet });
    res.status(201).send("OK");
});





// server port - @ the end of the code
server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
    console.log(myUsers);
})