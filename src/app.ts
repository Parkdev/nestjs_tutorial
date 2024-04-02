import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();

//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('this is logging middleware');
  next();
});

//* json middleware
app.use(express.json());

//* READ 고양이 데이터 전체 조회
app.get('/cats', (req, res) => {
  try {
    const cats = Cat;
    // throw new Error('db connect error'); // 임시로 에러 발생
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* READ 특정 고양이 조회
app.get('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.name === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* CREATE 새로운 고양이 추가 api
app.post('/cats', (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: data,
    });
    console.log(Cat);
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* 404 middleware
app.use((req, res, next) => {
  console.log('this is error middleware');
  res.send({ error: '404 not found error' });
});
app.listen(8000, () => {
  console.log('Server is running on ...');
});
