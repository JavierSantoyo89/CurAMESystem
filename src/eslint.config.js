import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
	{ files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
	{ files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.browser } },
	{ files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
	{
		rules: {
			// "no-console": "warn",
			'no-debugger': 'warn',
		},
		ignores: [
			'**/node_modules/**',
			'**/dist/**',
			'dist/**',
			'**/*.mjs',
			'eslint.config.mjs',
			'**/*.js',
			'**/*.ts',
			'**/*.tsx',
			'**/*.jsx',
			'**/*.cjs',
			'**/*.json',
			'**/*.css',
			'**/*.html',
			'**/*.svg',
			'**/*.png',
			'**/*.jpg',
			'**/*.jpeg',
			'**/*.gif',
			'**/*.webp',
			'**/*.ico',
			'**/*.mp3',
			'**/*.ogg',
			'**/*.wav',
			'**/*.mp4',
			'**/*.webm',
			'**/*.avi',
		],
	},
])
