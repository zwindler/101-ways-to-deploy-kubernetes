# Contributing to 101 Ways to Deploy Kubernetes

Thank you for your interest in contributing! This project aims to be the most comprehensive list of ways to deploy Kubernetes.

## What This Project Is About

This repository is a comprehensive list of **ways to deploy Kubernetes clusters**. The focus is on tools, platforms, and methods that help you **create, install, or provision** Kubernetes infrastructure.

## What Belongs in This List

### ✅ Accepted Contributions

- **Kubernetes Deployment Tools**: Tools that help you install, create, or provision Kubernetes clusters
- **Kubernetes Distributions**: Different flavors and implementations of Kubernetes
- **Infrastructure as Code Tools**: Tools that automate Kubernetes cluster deployment (Terraform, Ansible, Pulumi, etc.)
- **Managed Kubernetes Services**: Cloud provider services that provide managed Kubernetes clusters (EKS, AKS, GKE, etc.)
- **Desktop/Local Development Tools**: Tools for running Kubernetes locally for development purposes
- **Selfhosted Solutions**: Tools for deploying production Kubernetes clusters on your own infrastructure
- **Management Platforms**: Multi-cluster management platforms that help **deploy** and manage multiple Kubernetes clusters
- **Kubernetes-specific Operating Systems**: OS distributions specifically designed to run Kubernetes
- **Learning Resources**: Tutorials and guides specifically about deploying Kubernetes (like "Kubernetes the Hard Way")

**Note on Open Source vs Closed Source**: While the heart of the cloud native ecosystem is open source, **both open source and closed source (proprietary) tools are accepted** in this list. What matters is whether the tool helps deploy Kubernetes clusters, not its licensing model.

### ❌ Not Accepted

- **PaaS Offerings Running ON Kubernetes**: Platforms (in the sense of Heroku-like platforms), or any service that uses Kubernetes internally but doesn't help you deploy Kubernetes itself
- **Applications Deployed TO Kubernetes**: Tools for deploying applications to existing clusters (Helm charts, Kustomize, ArgoCD, FluxCD, etc.)
- **Kubernetes Add-ons and Extensions**: Tools that extend Kubernetes functionality but don't help with initial cluster deployment (service meshes, ingress controllers, monitoring tools, etc.)
- **Container Runtimes**: Docker, containerd, CRI-O (unless they include a complete Kubernetes deployment method)
- **General Infrastructure Tools**: Generic IaC tools without **specific** Kubernetes deployment examples or modules

## How to Contribute

### Adding a New Solution

1. **Fork the repository** and create a new branch
2. **Edit `data/solutions.yaml`** and add your solution
3. **Submit a Pull Request** with a clear description

### Solution Schema

Each solution should follow this structure:

```yaml
- name: "Solution Name"  # REQUIRED
  category: "Desktop"  # REQUIRED - See categories below
  url: "https://github.com/org/repo"  # REQUIRED
  publisher: "Company Name"  # Optional
  description: "Short description of the solution"  # Optional
  license: "Apache 2.0"  # Optional - See license types below
  open_source: true  # Optional - true or false
  based_on:  # Optional - underlying technologies
    - "kubeadm"
    - "k3s"
  tags:  # Optional - for filtering
    - "production"
    - "lightweight"
  cloud_providers:  # Optional - for Managed/IaC solutions
    - "aws"
    - "gcp"
  status: "active"  # Optional - active, deprecated, or abandoned (default: active)
  references:  # Optional - external resources
    - title: "Getting Started Guide"
      description: "Step-by-step tutorial"
      language: "en"
      url: "https://example.com/guide"
      type: "tutorial"
```

**License Types:**
- Open source: `Apache 2.0`, `MIT`, `MPL 2.0`, `AGPL 3.0`, `BSD 3-Clause`, `BUSL 1.1`, `Zlib`
- Proprietary: `proprietary`
- Cloud managed services: `cloud`

### Categories

| Category | Description |
|----------|-------------|
| `Desktop` | Local development tools |
| `IaC` | Infrastructure as Code tools |
| `KubernetesInKubernetes` | Virtual/nested clusters |
| `KubernetesOS` | Immutable OS for Kubernetes |
| `Managed` | Cloud managed services |
| `ManagementPlatform` | Multi-cluster platforms |
| `Other` | Playgrounds, education |
| `Selfhosted` | On-premise deployment tools |

#### Choosing the Right Category

If you're unsure about category placement:

1. **Primary function wins**: If a tool does multiple things, categorize by its primary use case
2. **Desktop vs Selfhosted**: 
   - Desktop: Designed for local development, single machine, easy setup
   - Selfhosted: Designed for production, multi-node, requires infrastructure
3. **IaC vs Tool**: 
   - IaC: Focuses on infrastructure automation and can work across providers
   - Selfhosted: The tool itself manages the cluster lifecycle
4. **Managed vs Management Platform**:
   - Managed: Service provides the cluster (you're a customer)
   - Management Platform: You install it to manage your own clusters

### Reference Types

| Type | Description |
|------|-------------|
| `article` | Blog post or news article |
| `book` | Book or book chapter |
| `video` | YouTube, conference talk recording |
| `tutorial` | Step-by-step guide |
| `documentation` | Official docs |
| `talk` | Conference presentation slides |

### Languages (ISO 639-1)

Supported language codes: `en`, `fr`, `de`, `es`, `zh`, `ja`, `pt`, `ko`, `it`, `ru`, `nl`, `pl`, `tr`, `ar`, `hi`

Use standard ISO 639-1 two-letter language codes for references.

## Development Setup

### Prerequisites
- Node.js 20+
- npm

### Local Development

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/101-ways-to-deploy-kubernetes.git
cd 101-ways-to-deploy-kubernetes

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
├── data/
│   ├── schema.yaml        # Schema documentation
│   └── solutions.yaml     # All solutions data
├── src/
│   ├── components/        # Astro components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Site pages
│   └── styles/            # Global styles
├── public/                # Static assets
└── .github/
    └── workflows/         # CI/CD pipelines
```

## Guidelines

### Do's
- ✅ Add solutions you have personal experience with
- ✅ Include references to tutorials or documentation
- ✅ Mark abandoned/deprecated projects appropriately
- ✅ Use English for all content
- ✅ Test your changes locally before submitting

### Don'ts
- ❌ Add duplicate solutions
- ❌ Add solutions without a working URL
- ❌ Add promotional content
- ❌ Remove existing solutions without discussion

## Pull Request Process

1. Ensure your changes follow the schema
2. Test locally with `npm run build`
3. Update descriptions if needed
4. Submit PR with clear title and description
5. Wait for review

## Questions?

Open an issue or start a discussion on GitHub!

## License

By contributing, you agree that your contributions will be licensed under CC BY-SA 4.0.
