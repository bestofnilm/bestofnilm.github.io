declare module "cloudflare:workers" {
  export const env: Record<string, unknown> & {
    DB?: any;
  };
}
