const dotenv = require('dotenv');
dotenv.config();

const app =
  process.env.NODE_ENV == 'production'
    ? require('./serverProduction')
    : require('./serverDevelopment');
const PORT = 3100;

app.listen(PORT, error => {
  if (error) {
    console.log(error);
  } else {
    console.info('🌎  Server is listening on port %s.', PORT);
  }
});
