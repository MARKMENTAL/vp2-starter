# VuePress 2 Starter with Pre-registered Components

This project is a VuePress 2 starter with pre-registered Vue components. It aims to help you kickstart your VuePress 2 project with ease and speed.

## How Components are Pre-registered

Components in this starter are pre-registered using the `@vuepress/plugin-register-components` plugin. This allows you to use the components in your markdown files without having to register them manually. 

In this starter, all Vue components located in the `docs/.vuepress/components` directory are automatically imported and registered. This means you can just create your `.vue` component files in that directory and they'll be ready to use in your markdown files.

### How to Use the Pre-registered Components

To use a pre-registered component in your markdown file, simply use it as a custom HTML tag. For example, if there's a pre-registered component named `HelloComponent`, you can use it in your markdown file like this:

```markdown
<HelloComponent />
```

## Getting Started

To get started with this VuePress 2 starter, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-name>
npm install
```

Then, start the VuePress 2 development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:8080` to see your VuePress site in action.

## Thanks
Happy coding!
