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
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


