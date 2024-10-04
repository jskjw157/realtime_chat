# realtime_chat

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

```plaintext
project-root/
├── apps/                        // 애플리케이션 폴더
│   ├── frontend/                // 프론트엔드 애플리케이션
│   │   ├── public/              // 정적 리소스
│   │   ├── src/                 // 소스 코드 파일
│   │   ├── package.json         // 프론트엔드 의존성 파일
│   │   ├── bun.lockb            // Bun 패키지 락 파일
│   │   └── ...                  // 기타 설정 파일들 (tailwind.config.js 등)
│   └── backend/                 // 백엔드 애플리케이션
│       ├── controllers/         // API 핸들러
│       ├── models/              // 데이터베이스 스키마
│       ├── routes/              // API 라우팅 설정
│       ├── package.json         // 백엔드 의존성 파일
│       ├── bun.lockb            // Bun 패키지 락 파일
│       └── server.ts            // Express 서버 설정 파일
├── packages/                    // 공통으로 사용하는 패키지 및 코드
│   ├── shared/                  // 프론트엔드와 백엔드에서 공유하는 코드 (DTO, 유틸리티 등)
│   │   ├── dtos/                // 데이터 전송 객체 정의
│   │   └── utils/               // 유틸리티 함수들
│   ├── ui-library/              // 프론트엔드에서 재사용 가능한 컴포넌트 (예: 버튼, 모달 등)
│   └── ...                      // 기타 공유 가능한 모듈
├── turbo.json                   // Terborepo 설정 파일
├── package.json                 // 루트 패키지 파일
└── bun.lockb                    // Bun 의존성 파일
```
