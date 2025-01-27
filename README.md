# Fluid Website Sources

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Run Fluid Website Locally

### Requirements
- [Node.js](https://nodejs.org/en/download/) version 18.0 or above

### Setup

1. Clone the repo to your workspace
```bash
mkdir -p /path/to/workspace
cd /path/to/workspace/
git clone https://github.com/fluid-cloudnative/fluid-cloudnative.github.io.git fluid-website
cd fluid-website
```

2. Download node modules
```bash
npm install
```

### Local development (without multi-locale support)

<details>

<summary>with `--locale=en`</summary>

```bash
npm run start
```

</details>

<details>

<summary>with `--locale=zh`</summary>

```bash
npm run start --locale=zh
```

</details>


This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

> [!NOTE]  
> Currently `localeDropdown` won't work in local development mode because of technical limitation(see related issue [here](https://github.com/facebook/docusaurus/issues/7377)). Please use `npm run serve` instead as a workaround.

### Build & serve

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. This includes multilingual contents so it would work with `localeDropdown`.

```bash
npm run serve
```

## Make Changes to Website

To make changes to the website, add or modify markdown files under `docs/` for en version and `i18n/zh/docusaurus-plugin-content-docs/` for zh version. Any commits pushed to the repo will trigger a Github workflow to re-deploy the website with the latest changes.

Any markdown files should have a header to control its appearance on the website, Take [`docs/core-concepts/what-is-fluid.md`](./docs/core-concepts/what-is-fluid.md) as an example, the header looks like:

```
---
sidebar_label: What is Fluid
sidebar_position: 1
slug: /
---
```

- `sidebar_label` indicates the label name showed in the sidebar of the website.
- `sidebar_position` indicates the sequential order under a sidebar folder.
- `slug` indicates the relative url path to the website.

For each directory under `docs/`, a special file `_category_.json` is needed to control the doc folder's appearance on the website:

```json
{
  "label": "Core Concepts",
  "position": 1,
  "link": null
}
```

- `label` indicates the doc folder's name to be showed on the website.
- `position` indicates the sequential order among all the sidecar folders.
- `link` indicates whether a category page is needed for the sidecar folder.

