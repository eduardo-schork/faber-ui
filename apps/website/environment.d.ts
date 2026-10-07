// Declared so the variables can be read with dot access, which is the form Next.js inlines.
declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- only an interface merges with the Node declaration
  interface ProcessEnv {
    readonly FABER_UI_BASE_PATH?: string;
    readonly FABER_UI_STATIC_EXPORT?: string;
    readonly NEXT_PUBLIC_STORYBOOK_URL?: string;
  }
}
