import { Router } from "express";
import { authController } from "../controllers";
import { validateRegister } from "../middlewares";

const router = Router();

router.post("/register", validateRegister, authController.register); // 회원가입 경로
router.post("/login", authController.login); // 로그인 경로

export default router;
