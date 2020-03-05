import * as Router from 'koa-router';
import * as compose from 'koa-compose';
import { selfish } from '../util/helper';
import AuthController from '../controller/auth';
const authController = selfish(new AuthController());
const router = new Router();
router.prefix('/api/auth')
router.post('/login', authController.auth)
router.get('/getAccount', authController.getAccount)

const routes = router.routes();

export default () => compose([
    routes
]);
