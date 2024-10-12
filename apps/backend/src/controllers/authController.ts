import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import zxcvbn from "zxcvbn";
import jwt from "jsonwebtoken";
import type { RegisterUserDTO, LoginUserDTO } from "../dto";

// 회원가입 API
export const register = async (
  req: Request<{}, {}, RegisterUserDTO>,
  res: Response
) => {
  const { name, email, password } = req.body;

  const passwordStrength = zxcvbn(password);
  if (passwordStrength.score < 3) {
    throw new Error(
      "비밀번호가 너무 약합니다. 더 강한 비밀번호를 설정해주세요.",
      {
        cause: {
          status: 400,
        },
      }
    );
  }

  // 이메일 중복 체크
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("이미 사용 중인 이메일입니다.", {
      cause: {
        status: 400,
      },
    });
  }

  // 비밀번호 해시 처리
  const hashedPassword = await bcrypt.hash(password, 10);

  // 사용자 생성
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();

  res.status(201).json({ message: "회원가입이 완료되었습니다." });
};

// 로그인 처리
export const login = async (
  req: Request<{}, {}, LoginUserDTO>,
  res: Response
) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("이메일 또는 비밀번호가 잘못되었습니다.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("이메일 또는 비밀번호가 잘못되었습니다.");
  }

  const token = jwt.sign({ userId: user._id }, Bun.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  res.status(200).json({ token });
};
