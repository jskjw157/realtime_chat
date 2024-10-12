import type { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    console.error(`[Error]: ${err.message}`); // 서버 콘솔에 에러 로그 출력

    const statusCode =
      (err.cause as { status: number } | undefined)?.status || 500;
    res.status(statusCode).json({
      message: err.message || "서버 내부 오류가 발생했습니다.",
    });
  }
};
