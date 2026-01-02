# Contributing to 101 Ways to Deploy Kubernetes

Thank you for your interest in contributing to this project! This guide will help you understand what belongs in this list and how to contribute effectively.

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

## Category Definitions

Understanding which category your contribution belongs to:

### Desktop
Tools for running Kubernetes on local development machines (laptops, workstations). These are typically single-node or small clusters for development and testing.

**Examples**: Minikube, kind, Docker Desktop, Rancher Desktop

### IaC (Infrastructure as Code)
Tools and frameworks that use code to automate the deployment of Kubernetes clusters across various infrastructure providers.

**Examples**: Kubespray (Ansible), Terraform modules, Pulumi, Crossplane, Cluster API

### Kubernetes in Kubernetes
Solutions that run Kubernetes clusters inside existing Kubernetes clusters (virtual clusters, nested clusters).

**Examples**: vcluster, k3k

### Kubernetes OS
Operating systems specifically designed to run Kubernetes, often immutable or container-optimized.

**Examples**: Talos Linux, Kairos Linux, Flatcar (when used for K8s)

### Managed
Cloud provider or third-party managed Kubernetes services where the control plane is managed for you.

**Examples**: EKS, AKS, GKE, Civo, Scaleway Kapsule

### Management Platform
Platforms that help you deploy and manage multiple Kubernetes clusters across different infrastructures.

**Examples**: Rancher, Gardener, Kubermatic, Tanzu Kubernetes Grid

### Selfhosted
Tools for deploying production-grade Kubernetes clusters on your own infrastructure with full control.

**Examples**: kubeadm, k3s, k0s, RKE2, Kops

### Other
Educational resources, playgrounds, and unique deployment methods that don't fit other categories.

**Examples**: Kubernetes the Hard Way, Play with K8s, manual deployment tutorials

### Other Useful Projects
Related projects that complement Kubernetes deployment but aren't deployment tools themselves (autoscalers, OS distributions, edge computing frameworks).

**Examples**: Karpenter, Flatcar, KubeEdge

## How to Contribute

### Adding a New Tool

1. **Verify it belongs**: Ensure your contribution fits the "What Belongs" criteria above
2. **Choose the right category**: Use the category definitions to determine where it belongs
3. **Gather required information**:
   - Name of the tool/service
   - Publisher/Project name (if applicable)
   - URL (GitHub repo for open source, official website for commercial)
   - License information (specific license for open source, ❌ for proprietary, "☁️ N/A" for managed services)
   - "Based on" information (what underlying technology it uses, if applicable)
   - External references (blog posts, tutorials, documentation)

4. **Follow the table format**:
   ```markdown
   | Name | Publisher / Project | URL | Open source | Based on | External References |
   |------|---------------------|-----|-------------|----------|---------------------|
   | Tool Name | Publisher | [GitHub](url) or [Website](url) | Apache 2.0 / MIT / ❌ | Base technology | [[ref]](#anchor) |
   ```

5. **Add external references**: If you have blog posts, tutorials, or documentation, add them to the References section at the bottom of the README with the appropriate anchor

### Adding External References

External references should be:
- **Written content only**: Tutorials, guides, or blog posts that explain **how to deploy Kubernetes using the tool** with specific commands, steps, or configuration examples (such as command-line examples, YAML configuration files, or step-by-step setup procedures)
- Case studies or real-world deployment examples
- In any language (mark with [EN], [FR], etc.)
- ❌ NOT official documentation (these are already available with the tool link)
- ❌ NOT high-level overviews or marketing content without practical deployment instructions
- ❌ NOT videos (written content is easier to review and reference)

Format:
```markdown
### Tool Name

- [EN] [Article Title](url)
- [FR] [Titre de l'article](url)
```

### Modifying Existing Entries

- **Updating URLs**: If a project has moved or changed URLs
- **Correcting information**: License changes, publisher updates, etc.
- **Adding references**: New tutorials or guides for existing tools

### Category Placement Guidelines

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

## Pull Request Guidelines

1. **One tool per PR**: Makes review easier and faster
2. **Clear description**: Explain what the tool does and why it belongs
3. **Test your markdown**: Ensure tables render correctly
4. **Alphabetical order**: New entries should maintain alphabetical order within their category (if the category is already sorted)
5. **Complete information**: Fill in all columns, use "N/A" or leave empty if not applicable

## Questions?

If you're unsure whether your contribution fits or which category to use:
1. Check existing similar entries for guidance
2. Open an issue to discuss before creating a PR
3. Tag @zwindler in your issue for guidance

## License

By contributing, you agree that your contributions will be licensed under the same [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en) license as the project.
