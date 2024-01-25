import 'dotenv/config';
import app from './app';
import connectDB from "./database";

connectDB().then(() => {
  app.listen(process.env.APP_PORT || 3000, async function(){
    console.log('Server running on port:', this.address().port, app.settings.env)
  });
});


