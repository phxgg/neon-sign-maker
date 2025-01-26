import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const __dirname = import.meta.dirname;
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const configs = [...compat.extends('next/core-web-vitals')];

export default configs;
