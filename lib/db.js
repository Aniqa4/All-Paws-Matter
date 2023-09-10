const {user_name,password}=process.env;
export const connectionSrt=`mongodb+srv://${user_name}:${password}@cluster0.3kab2ba.mongodb.net/services?retryWrites=true&w=majority`