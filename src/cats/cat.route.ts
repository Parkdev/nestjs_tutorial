import { Cat, CatType } from './cat.model';
import { Router } from 'express';

const router = Router();

//* READ 고양이 데이터 전체 조회
router.get('/cats', (req, res) => {
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
router.get('/cats/:id', (req, res) => {
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
router.post('/cats', (req, res) => {
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

export default router;
