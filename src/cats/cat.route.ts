import { Router } from 'express';
import {
  createCat,
  deleteCat,
  readAllcat,
  readCat,
  updateCat,
  updatePartialCat,
} from './cat.service';

const router = Router();

//* READ 고양이 데이터 전체 조회
router.get('/cats', readAllcat);

//* READ 특정 고양이 조회
router.get('/cats/:id', readCat);

//* CREATE 새로운 고양이 추가 api
router.post('/cats', createCat);

//* UPDATE 고양이 데이터 업데이트 -> PUT
router.put('/cats/:id', updateCat);

//* UPDATE 고양이 데이터 부분적 업데이트 -> PATCH
router.patch('/cats/:id', updatePartialCat);

//* DELETE 고양이 데이터 삭제 -> DELETE
router.delete('/cats/:id', deleteCat);

export default router;
