import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/hello', (req: Request, res: Response) => {
    res.send('hello');
});

app.listen(8080, () => {
    console.log(`listening on port 8080`);
});
