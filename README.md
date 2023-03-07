# eslint-plugin-react-strict-hooks

Plugin for enforcing stricter rules on react hooks

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-react-strict-hooks`:

```sh
npm install eslint-plugin-react-strict-hooks --save-dev
```

## Usage

Add `react-strict-hooks` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "react-strict-hooks"
    ]
}
```

Make sure that [type checking in eslint](https://typescript-eslint.io/custom-rules/#typed-rules) is enabled

```javascript
{
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  }
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "react-strict-hooks/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                                     |
| :------------------------------------------------------- |
| [no-useeffect-misuse](docs/rules/no-useeffect-misuse.md) |

<!-- end auto-generated rules list -->


