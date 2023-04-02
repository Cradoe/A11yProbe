# A11yProbe

A11yProbe is a tool that helps you run automated accessibility tests on your website and displays a report of any issues found. The tool uses testing library that supports the Web Content Accessibility Guidelines (WCAG) 2.1.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install A11yProbe using npm:

```javascript
$ npm install a11yprobe
```

<!-- or

```javascript
yarn add a11yprobe
``` -->

## Usage

To use A11yProbe, create a **a11yprobe.json** file in the root of your project, fill the URL of your application:

```json
{
  "url": "http://localhost:3000"
}
```

**NB: Change 3000 to the port your app is currently running.**

Open another terminal (**_while your app is running_**), then run

```javascript
$ npx a11yprobe
```

## Contributing

Thank you for considering contributing to this project! We welcome any contributions, including bug fixes, new features, and documentation improvements.

### [See Contributor's guide](./CONTRIBUTING.md)

## License

This project is licensed under the [MIT](./LICENSE) - see the [LICENSE](./LICENSE) file for details.
