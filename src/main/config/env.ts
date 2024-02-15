export default {
    mongoUrl:
      process.env.MONGO_URL ||
      'mongodb://localhost:27017/js_dashboard',
    port: process.env.PORT || 8000
  }
  