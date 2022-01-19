const config = {
  firebase: {
    mongo: {
      options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        socketTimeoutsMS: 30000,
        keepAlive: true,
        poolSize: 50,
        autoIndex: false,
        retryWrites: false
      },
      url: "mongodb+srv://blog_user:QVM2bOY2aQV3rgat@cluster0.etzb4.mongodb.net/myFirstDatabase"
    }
  },
  server: {
    host: "localhost",
    port: 1337
  }
};
export default config;
