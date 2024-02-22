/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ["@taskgrove"],
  plugins: ["turbo"],
  ignorePatterns: [
    "**.cjs",
    "**/dist/**/*.*",
    ".output",
    "**/__generated__/**/*.*",
    "**/generated/**/*.*",
    "node_modules",
    "*.config.*",
    "output",
    "vercel",
    "./packages/grpc-web-client/src/**/*.*",
    "**/dev-dist/**/*.*",
  ],
  rules: {
    ["@typescript-eslint/no-non-null-assertion"]: "off",
  },
};
