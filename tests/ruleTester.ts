import {RuleTester} from "eslint";
import * as path from "path";

export const ruleTester = new RuleTester({
    parser: path.resolve(path.join(__dirname, '../node_modules', '@typescript-eslint/parser')),
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
});
