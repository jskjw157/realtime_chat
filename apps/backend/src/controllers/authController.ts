import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import zxcvbn from "zxcvbn";

// 회원가입 API
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // 유효성 검사
  if (!name || !email || !password) {
    //return res.status(400).json({ message: "모든 필드를 입력해 주세요." });
  }

  const passwordStrength = zxcvbn(password);
  if (passwordStrength.score < 3) {
    // return res.status(400).json({
    //   password: "비밀번호가 너무 약합니다. 더 강한 비밀번호를 설정해주세요.",
    // });
    throw new Error(
      "비밀번호가 너무 약합니다. 더 강한 비밀번호를 설정해주세요."
    );
  }

  // 이메일 중복 체크
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    // return res.status(400).json({ email: "이미 사용 중인 이메일입니다." });
    throw new Error("이미 사용 중인 이메일입니다.");
  }

  // 비밀번호 해시 처리
  const hashedPassword = await bcrypt.hash(password, 12);

  // 사용자 생성
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();

  res.status(201).json({ message: "회원가입이 완료되었습니다." });
};
