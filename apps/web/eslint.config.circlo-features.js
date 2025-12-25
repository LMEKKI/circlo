import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		rules: {
			"import/no-restricted-paths": [
				"error",
				{
					zones: [
						{
							target: "./src/features/auth",
							from: "./src/features",
							except: ["./auth"],
						},
						{
							target: "./src/features/images",
							from: "./src/features",
							except: ["./images"],
						},
						{
							target: "./src/features/tags",
							from: "./src/features",
							except: ["./tags"],
						},
						{
							target: "./src/features/users",
							from: "./src/features",
							except: ["./users"],
						},
					],
				},
			],
		},
	},
]);
