/// <reference types="astro/client" />

declare module '*.yaml' {
  const value: Record<string, unknown>;
  export default value;
}
