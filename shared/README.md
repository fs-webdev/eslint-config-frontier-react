# @fs/eslint-config-shared

Self-contained ESLint configuration for FamilySearch projects. This configuration is completely independent of external config packages like Airbnb, providing full control over ESLint updates and rule management.

## Features

- **Self-contained**: No external config dependencies - all rules are inlined for complete control
- **Independent updates**: Not blocked by Airbnb's or other external configs' ESLint version support
- **React & TypeScript ready**: Built-in support for React and TypeScript projects
- **Testing framework support**: Optimized for Jest, Cypress, and other testing frameworks
- **Custom rules**: Includes custom rules for better code quality and RTL support
- **Multi-environment**: Supports browser, Node.js, and test environments

## Installation

```bash
npm install --save-dev @fs/eslint-config-shared
```

You'll also need to install the required peer dependencies. Install only what your project uses:

### Core dependencies (required for all projects):
```bash
npm install --save-dev eslint @babel/eslint-parser eslint-plugin-import eslint-plugin-prettier
```

### For React projects:
```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

### For TypeScript projects:
```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Usage

### Basic Configuration

Create an `.eslintrc.cjs` file in your project root:

```javascript
module.exports = {
  "extends": ["@fs/eslint-config-shared"]
}
```

### With Custom Rules

To use the custom rules provided by this package:

```javascript
module.exports = {
  "extends": ["@fs/eslint-config-shared"],
  "plugins": ["@fs/eslint-config-shared/plugin"],
  "rules": {
    "shared/logical-over-directional": "warn",
    "shared/no-eslint-disable": "warn"
  }
}
```

## Custom Rules

### `logical-over-directional`

Enforces logical CSS properties over directional ones for better RTL (right-to-left) language support.

**Bad:**
```javascript
const styles = {
  marginLeft: '10px',
  paddingRight: '5px'
}
```

**Good:**
```javascript
const styles = {
  marginInlineStart: '10px',
  paddingInlineEnd: '5px'
}
```

### `no-eslint-disable`

Requires explanatory comments when using `eslint-disable` directives.

**Bad:**
```javascript
// eslint-disable-next-line no-console
console.log('debug')
```

**Good:**
```javascript
// eslint-disable-next-line no-console -- debugging during development
console.log('debug')
```

## License

ISC
