/// <reference types="vite/client" />

declare module '@fontsource-variable/noto-sans-jp' {}

interface ImportMetaEnv {
  readonly VITE_COGNITO_USER_POOL_CLIENT_ID: string
  readonly VITE_COGNITO_USER_POOL_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
