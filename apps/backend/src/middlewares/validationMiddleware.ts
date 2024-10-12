import Joi from "joi";
import type { Request, Response, NextFunction } from "express";

export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required().messages({
      "string.min": "이름은 최소 3자 이상이어야 합니다.",
    }),
    email: Joi.string().email().required().messages({
      "string.email": "유효한 이메일을 입력해 주세요.",
    }),
    password: Joi.string().min(8).required().messages({
      "string.min": "비밀번호는 최소 8자 이상이어야 합니다.",
    }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    throw new Error(
      `${error.details[0].context?.key || "error"}: ${error.details[0].message}`
    );
  }
  return next();
};
