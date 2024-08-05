import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { json, urlencoded } from 'body-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
