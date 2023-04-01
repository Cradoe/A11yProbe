# A11yProbe

A11yProbe is a tool that helps you run automated accessibility tests on your website and displays a report of any issues found. The tool uses testing library that supports the Web Content Accessibility Guidelines (WCAG) 2.1.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
<!-- - [License](#license) -->

## Installation

You can install A11yProbe using npm or yarn:

```javascript
npm install a11yprobe
```

or

```javascript
yarn add a11yprobe
```

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
npx a11yprobe
```

## Contributing

Thank you for considering contributing to this project! We welcome any contributions, including bug fixes, new features, and documentation improvements. Before getting started, please take a moment to review the following guidelines:

- **Code of Conduct:** This project follows a Code of Conduct that outlines expected behavior for all contributors. Please read and follow this code of conduct in all interactions.

- **Issues and Pull Requests:** Before opening a new issue or pull request, please search for existing ones to avoid duplicates. When submitting a new issue or pull request, please provide a clear and detailed description of the problem or feature request.

- **Branching and Committing:** Please create a new branch for any changes you make and keep commits focused on specific changes. Follow [semantic commit messages](https://www.conventionalcommits.org/en/v1.0.0/) and ensure your changes pass all tests and linting.

- **Testing:** Whenever possible, please include tests for your changes to ensure they function as expected and to prevent future regressions.

- **Documentation:** Improving documentation is just as important as code changes! Please update any relevant documentation when making changes, including this README file.

We appreciate all contributions and will review them as quickly as possible. Thanks for helping make this project better!

<!-- ## License -->

<!-- This project is licensed under the [ISC](LICENSE) - see the [LICENSE](LICENSE) file for details. -->
