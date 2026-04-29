# TypeScript & Playwright Automation - Deloitte Apr 2026

A comprehensive training project demonstrating TypeScript fundamentals, API testing, and UI automation using Playwright. This repository contains progressive examples from basic TypeScript concepts to advanced automation scenarios.

## 🎯 Project Overview

This project serves as a comprehensive learning resource for:
- **TypeScript Programming**: Data types, classes, async/await, OOP concepts
- **API Testing**: REST API automation using Playwright's request context
- **UI Automation**: Web application testing with Playwright
- **Advanced Scenarios**: File operations, alerts, frames, tabs, and authentication

**Target Audience**: Automation engineers, QA professionals, and developers learning modern testing frameworks.

## 📦 Package Dependencies

### Core Dependencies (`package.json`)

| Package | Version | Purpose |
|---------|---------|---------|
| **playwright** | ^1.59.1 | Modern web testing framework for API and UI automation |
| **typescript** | ^6.0.3 | JavaScript superset with static typing |
| **ts-node** | ^10.9.2 | TypeScript execution environment for Node.js |
| **@types/node** | ^25.6.0 | TypeScript definitions for Node.js APIs |

### Key Configuration Files

- **[tsconfig.json](tsconfig.json)**: TypeScript compiler configuration
  - Target: `esnext` (latest ECMAScript features)
  - Module: `nodenext` (Node.js ES modules)
  - Source maps and declarations enabled
  - Strict type checking options

- **[package.json](package.json)**: Project metadata and dependencies
  - Module type: ES modules (`"type": "module"`)
  - Development dependencies for TypeScript and Playwright

## 🏗️ Project Structure

```
typescript-playwright-deloitte-apr-2026/
├── 📁 src-api/                    # API Testing Demos
├── 📁 src-typescript-ui/          # TypeScript & UI Automation Demos  
├── 📁 test-data/                  # JSON test data files
├── 📄 XPathAndCSS.txt            # Selector reference guide
├── 📄 package.json               # Project dependencies
├── 📄 tsconfig.json              # TypeScript configuration
└── 📄 README.md                  # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm (Node Package Manager)

### Installation Steps

1. **Clone/Navigate to the project directory**
   ```bash
   cd "d:\Mine\Company\Deloitte Apr 2026\typescript-playwright-deloitte-apr-2026"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Verify TypeScript compilation**
   ```bash
   npx tsc --noEmit
   ```

## 💡 Usage Examples

### Running API Tests
```bash
# Execute API demos using ts-node
npx ts-node src-api/demo1-get-pet-api.ts
npx ts-node src-api/demo3-add-pet.ts
```

### Running UI Automation
```bash
# Execute UI automation demos
npx ts-node src-typescript-ui/demo6-playwright-basics.ts
npx ts-node src-typescript-ui/demo7-salesforce.ts
```

### Running TypeScript Examples
```bash
# Execute TypeScript learning demos
npx ts-node src-typescript-ui/demo1-datatypes.ts
npx ts-node src-typescript-ui/demo4-employee.ts
```

## 📚 Demo Files Overview

### 🔌 API Testing Demos (`src-api/`)

| File | Purpose | Concepts Covered |
|------|---------|------------------|
| **[demo1-get-pet-api.ts](src-api/demo1-get-pet-api.ts)** | Basic GET request | HTTP methods, JSON parsing, path parameters |
| **[demo2-get-pet-by-status.ts](src-api/demo2-get-pet-by-status.ts)** | Query parameters & validation | Query strings, array handling, assertions |
| **[demo3-add-pet.ts](src-api/demo3-add-pet.ts)** | POST request creation | Request body, headers, JSON payload |
| **[demo3-update-pet.ts](src-api/demo3-update-pet.ts)** | PUT request updates | Resource modification, data updates |
| **[demo4-delete-pet.ts](src-api/demo4-delete-pet.ts)** | DELETE with authentication | API keys, custom headers, resource deletion |
| **[demo5-add-pet-json.ts](src-api/demo5-add-pet-json.ts)** | External JSON integration | File operations, external data sources |
| **[demo6-json-read-write.ts](src-api/demo6-json-read-write.ts)** | JSON file manipulation | File system operations, data processing |
| **[demo7-git-get-repo-user-api.ts](src-api/demo7-git-get-repo-user-api.ts)** | GitHub API integration | Bearer token auth, external APIs |

### 📝 TypeScript Fundamentals (`src-typescript-ui/`)

| File | Purpose | Concepts Covered |
|------|---------|------------------|
| **[demo1-datatypes.ts](src-typescript-ui/demo1-datatypes.ts)** | Basic TypeScript types | number, boolean, string, objects, arrays |
| **[demo2-methods.ts](src-typescript-ui/demo2-methods.ts)** | Function definitions | Parameters, return types, async/await |
| **[demo3-classes-variable.ts](src-typescript-ui/demo3-classes-variable.ts)** | Class basics | Static vs instance variables, scope |
| **[demo4-employee.ts](src-typescript-ui/demo4-employee.ts)** | Advanced OOP | Classes, private properties, constructors |
| **[demo5-empolyee-runner.ts](src-typescript-ui/demo5-empolyee-runner.ts)** | Class usage | Object instantiation, method calls |
| **[demo6-async.ts](src-typescript-ui/demo6-async.ts)** | Asynchronous programming | Promises, setTimeout, non-blocking code |

### 🌐 UI Automation Demos (`src-typescript-ui/`)

| File | Purpose | Concepts Covered |
|------|---------|------------------|
| **[demo6-playwright-basics.ts](src-typescript-ui/demo6-playwright-basics.ts)** | Basic browser automation | Page navigation, form filling, dropdowns |
| **[demo7-salesforce.ts](src-typescript-ui/demo7-salesforce.ts)** | Multi-step forms | Complex forms, error handling |
| **[demo8-tabs.ts](src-typescript-ui/demo8-tabs.ts)** | Tab management | Popup handling, new tab interaction |
| **[demo9-tabs-promise.ts](src-typescript-ui/demo9-tabs-promise.ts)** | Promise-based tabs | Promise.all(), simultaneous operations |
| **[demo10-tabs-promise.ts](src-typescript-ui/demo10-tabs-promise.ts)** | Advanced tab handling | Conditional logic, hover actions |
| **[demo11-tab.ts](src-typescript-ui/demo11-tab.ts)** | OAuth/SSO popups | Third-party authentication |
| **[demo12-frame-and-shadowroot.ts](src-typescript-ui/demo12-frame-and-shadowroot.ts)** | iFrame handling | frameLocator(), embedded content |
| **[demo13-alert.ts](src-typescript-ui/demo13-alert.ts)** | JavaScript alerts | Dialog handling, event listeners |
| **[demo14-upload-option1.ts](src-typescript-ui/demo14-upload-option1.ts)** | Direct file upload | setInputFiles(), input elements |
| **[demo15-upload-option2.ts](src-typescript-ui/demo15-upload-option2.ts)** | File chooser dialogs | waitForEvent('filechooser') |
| **[demo16-upload-option3.ts](src-typescript-ui/demo16-upload-option3.ts)** | Event-driven upload | page.on('filechooser') events |
| **[demo17-download-option.ts](src-typescript-ui/demo17-download-option.ts)** | File downloads | Download handling, saveAs() |

### 📊 Test Data (`test-data/`)

| File | Purpose | Content |
|------|---------|---------|
| **[new-pet.json](test-data/new-pet.json)** | Single pet data | Pet object for API testing |
| **[new-pets.json](test-data/new-pets.json)** | Multiple pets data | Pet array for bulk operations |

### 📖 Reference Files

| File | Purpose | Content |
|------|---------|---------|
| **[XPathAndCSS.txt](XPathAndCSS.txt)** | Selector reference | XPath and CSS selector examples and best practices |

## 🎓 Learning Progression

The demos are structured in a progressive learning path:

1. **Foundation**: TypeScript basics → Data types → Functions → Classes
2. **API Testing**: Simple GET → Query parameters → POST/PUT/DELETE → Authentication
3. **UI Automation**: Basic navigation → Forms → Advanced interactions
4. **Advanced Topics**: File operations → Alerts → Frames → Multi-tab scenarios

## 🔧 Key Features

- **Comprehensive Coverage**: From beginner to advanced automation concepts
- **Real-world Examples**: Using actual websites (Salesforce, GitHub, Twitter, etc.)
- **Modern Practices**: ES modules, async/await, TypeScript best practices
- **Multiple Approaches**: Different techniques for similar problems (file uploads, tab handling)
- **Authentication Examples**: API keys, Bearer tokens, OAuth flows

## 🤝 Contributing

This project is designed for educational purposes. To enhance the learning experience:

1. Ensure all examples are well-commented
2. Follow TypeScript best practices
3. Include error handling in new demos
4. Update this README when adding new examples

## 📞 Support

For questions or issues related to this training material, please refer to:
- Playwright documentation: https://playwright.dev
- TypeScript documentation: https://www.typescriptlang.org

---

**Project Context**: Deloitte Training Program - April 2026  
**Focus Areas**: TypeScript, API Testing, UI Automation, Modern Testing Practices