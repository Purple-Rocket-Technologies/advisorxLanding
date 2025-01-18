declare module "payload/config" {
  export interface Config {
    serverURL: string;
    admin: {
      bundler: any;
    };
    editor: any;
    db: any;
    collections: any[];
  }

  export function buildConfig(config: Config): any;
}

declare module "@payloadcms/db-mongodb" {
  export function mongooseAdapter(config: { url: string }): any;
}

declare module "@payloadcms/richtext-slate" {
  export function slateEditor(config: any): any;
}

declare module "@payloadcms/bundler-webpack" {
  export function webpackBundler(): any;
}
