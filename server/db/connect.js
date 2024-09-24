const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://hanuplusitsolution:o8IJY8a7hlKrcJX2@cluster0.wzwpge2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"+"db", {useNewUrlParser: true})
/* mongoose.connect('mongodb+srv://ab8107116:pyLnlkGAq7kapreV@demoreact.af5gw.mongodb.net/?retryWrites=true&w=majority&appName=demoReact', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000, // Timeout of 10 seconds
}).then(() => {
  console.log('Database connected successfully');
}).catch(err => {
  console.error('Database connection error:', err);
}); */
