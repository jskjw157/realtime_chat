/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/shared/**/*.{js,jsx,ts,tsx}", // shared 폴더에 있는 파일들도 포함
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: "jit", // Just-In-Time 모드로 CSS 생성 최적화
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/shared/**/*.{js,jsx,ts,tsx}",
  ],
};
