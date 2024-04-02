import * as express from 'express';
import catsRouter from './cats/cat.route';

const app: express.Express = express();

//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('this is logging middleware');
  next();
});

//* json middleware
app.use(express.json());

//* 라우터 사용
app.use(catsRouter);

//* 404 middleware
app.use((req, res, next) => {
  console.log('this is error middleware');
  res.send({ error: '404 not found error' });
});
app.listen(8000, () => {
  console.log('Server is running on ...');
});
