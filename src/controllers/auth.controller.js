import { Router } from 'express';
import joiMiddleware from '../helpers/middlewares/joiMiddleware.js';
import registerSchema from '../helpers/schemas/register.schema.js';
import loginSchema from '../helpers/schemas/login.schema.js';
import * as AuthService from '../services/auth/index.js';
const router = Router();
<<<<<<< HEAD
router.post('/register', joiMiddleware(registerSchema), AuthService.register);
router.post('/login', joiMiddleware(loginSchema), AuthService.login);
export default router;
=======

router.post('/register', joiMiddleware(registerSchema), AuthService.register);
router.post('/login', joiMiddleware(loginSchema), AuthService.login);
export default router;
>>>>>>> 472a869abe46a3611e29192068c1ab8eaa2f8a43
