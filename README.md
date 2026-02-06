# 101 Ways to Deploy Kubernetes

A comprehensive list of ways to deploy Kubernetes, organized by deployment type.

> **🌐 Visit the website:** [https://zwindler.github.io/101-ways-to-deploy-kubernetes](https://zwindler.github.io/101-ways-to-deploy-kubernetes)
>
> Browse all deployment solutions in a beautiful, searchable interface!

<img width="1332" height="854" alt="Capture d’écran 2026-02-06 à 14 22 50" src="https://github.com/user-attachments/assets/5ae14e41-ab93-411e-81b6-e91243b3c8db" />

This repository is based on the original work [@zwindler](https://github.com/zwindler) did in a [Google Sheet file](https://docs.google.com/spreadsheets/d/1zjOLU8MblsN8VPwUyHNDFbBQ7EihHM2joD2Q9Tv2DiI/edit?usp=sharing).

## 📚 About

This project catalogs 100+ ways to deploy Kubernetes across different categories:
- **Desktop** - Local development environments
- **InfraAsCode** - Infrastructure as Code solutions
- **Managed** - Cloud provider services
- **Self-hosted** - On-premises deployments
- And more...

All data is maintained in [`data/solutions.yaml`](./data/solutions.yaml) and powers the static website built with Astro and TailwindCSS.

## 🤝 Contributing

Want to add a solution or improve the site? Check out our [Contributing Guidelines](CONTRIBUTING.md)!

We welcome contributions of:
- **New Kubernetes deployment solutions** - Add tools you've used or discovered
- **References and documentation** - Share tutorials, articles, and guides
- **Updates to existing entries** - Fix outdated information or broken links
- **Site improvements** - Enhance the UI, add features, or improve documentation

All contributions are reviewed and must follow our [schema guidelines](./data/schema.yaml).

## 💻 Development

To run the website locally:

```bash
# Install dependencies
npm install

# Start development server (available at http://localhost:4321)
npm run dev

# Build for production
npm run build
```

## License

This document is shared under the [CC BY-SA 4.0 (Attribution - Share Alike)](https://creativecommons.org/licenses/by-sa/4.0/deed.fr) license.
