const {username,password}=process.env;
export const connectionSrt=`mongodb+srv://${username}:${password}@cluster0.3kab2ba.mongodb.net/?retryWrites=true&w=majority`