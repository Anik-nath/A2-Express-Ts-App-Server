import config from './App/config';
import app from './app';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    app.listen(config.port, () => {
      console.log(`Assignment-2 app is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
