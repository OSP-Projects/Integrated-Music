// Insert the following in a file inside your root directory
global.__rootdir__ = __dirname || process.cwd();

// This allows TypeScript to detect our global value
declare global {
  var __rootdir__: string;
}