import * as express from 'express';
import catsRouter from './cats/cat.route';

class Server {
  public app: express.Application;

  constructore() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    // 각각의 라우터를 분리하기 위해서 함수로 만들어줌
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    //* logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log('this is logging middleware');
      next();
    });

    //* json middleware
    this.app.use(express.json());

    //* 라우터 사용
    this.setRoute();

    //* 404 middleware
    this.app.use((req, res, next) => {
      console.log('this is error middleware');
      res.send({ error: '404 not found error' });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log('Server is running on ...');
    });
  }
}

function init() {}

// const app: express.Express = express();
