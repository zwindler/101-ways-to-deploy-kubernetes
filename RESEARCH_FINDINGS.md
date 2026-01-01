# Research Findings: "Based on" Column Investigation

This document provides detailed proof and sources for the "Based on" information added to the README.md file.

## Methodology

For each tool with an empty "Based on" column, I performed web searches to find official documentation, GitHub repositories, and authoritative sources that describe the underlying technology or tools that each project is based on.

---

## Desktop Category

### 1. Canonical Kubernetes (Snap)
**Finding:** Based on upstream Kubernetes  
**Proof:**
- Canonical Kubernetes Snap delivers a full implementation of "pure upstream Kubernetes"—the standard open-source Kubernetes project as maintained by the CNCF
- Uses snap packaging system but the core is standard Kubernetes
- Sources: 
  - https://www.plural.sh/blog/canonical-kubernetes-devops/
  - https://documentation.ubuntu.com/canonical-kubernetes/main/about/
  - https://github.com/canonical/k8s-snap

### 2. Desktop-Kubernetes
**Finding:** Based on kubeadm  
**Proof:**
- Desktop-Kubernetes uses kubeadm as a cluster provisioner technology to bootstrap and manage the underlying Kubernetes components
- Kubeadm handles initialization of the control-plane node and manages certificates
- Sources:
  - https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/
  - https://sysopstechnix.com/easy-way-to-deploy-a-kubernetes-cluster-using-kubeadm/

### 3. MicroK8s
**Finding:** Based on upstream Kubernetes  
**Proof:**
- MicroK8s is based on "pure upstream Kubernetes"—meaning it's a conformant Kubernetes distribution that directly tracks releases from the main Kubernetes project
- Uses containerd as its default container runtime
- Distributed as a snap package but core is upstream Kubernetes
- Sources:
  - https://www.sysdig.com/learn-cloud-native/what-is-microk8s
  - https://github.com/canonical/microk8s
  - https://canonical.com/microk8s/docs

### 4. Minikube
**Finding:** Based on kubeadm  
**Proof:**
- Minikube utilizes kubeadm as its internal mechanism for bootstrapping Kubernetes clusters
- Uses `kubeadm init` to set up the control plane and `kubeadm join` to add nodes
- Sources:
  - https://deepwiki.com/kubernetes/minikube/2.2-kubernetes-bootstrapping-with-kubeadm
  - https://www.dotlinux.net/blog/pros-and-cons/

### 5. Oracle Cloud Native Environment (OCNE)
**Finding:** Based on CNCF projects (Kubernetes, CRI-O, Istio)  
**Proof:**
- OCNE includes a CNCF-certified Kubernetes module
- Uses container runtime technologies like CRI-O, runC based on OCI standards
- Integrates Istio for service mesh (CNCF project)
- Sources:
  - https://www.oracle.com/a/ocom/docs/oracle-cloud-native-environment-datasheet.pdf
  - https://docs.cloud.oracle.com/en/operating-systems/olcne/

### 6. OrbStack
**Finding:** Custom lightweight VM  
**Proof:**
- Built on a lightweight Linux virtual machine with a shared kernel architecture
- Not based on another Kubernetes tool but uses Apple's Hypervisor framework and custom implementation
- Written in Swift, Go, Rust, and C
- Sources:
  - https://orbstack.dev/docs/architecture
  - https://docs.orbstack.dev/

---

## IaC (Infrastructure as Code) Category

### 7. aks-engine
**Finding:** Based on ARM templates  
**Proof:**
- Uses Azure Resource Manager (ARM) templates to provision clusters
- ARM templates automate the creation, scaling, and management of infrastructure
- Sources:
  - https://learn.microsoft.com/en-us/azure-stack/user/azure-stack-kubernetes-aks-engine-overview
  - https://github.com/Azure/aks-engine-azurestack

### 8. Crossplane
**Finding:** Based on Kubernetes CRDs and operators  
**Proof:**
- Builds on Kubernetes' extensibility by leveraging Custom Resource Definitions (CRDs)
- Operates as a Kubernetes operator with controllers that reconcile desired state
- Sources:
  - https://docs.crossplane.io/latest/whats-crossplane/
  - https://komodor.com/learn/what-is-crossplane-pros-cons-and-a-quick-tutorial/

### 9. Kubernetes ClusterAPI
**Finding:** Based on Kubernetes CRDs and controllers  
**Proof:**
- Built on declarative APIs and Kubernetes patterns using Custom Resource Definitions (CRDs)
- Functionality implemented by Kubernetes controllers
- Sources:
  - https://cluster-api.sigs.k8s.io/
  - https://github.com/kubernetes-sigs/cluster-api

### 10. OpenTofu
**Finding:** Fork of Terraform 1.5.6  
**Proof:**
- OpenTofu was created as a fork of Terraform version 1.5.6
- Forked after HashiCorp changed Terraform's license to BSL in August 2023
- Maintains compatibility with Terraform configurations
- Sources:
  - https://opentofu.org/
  - https://spacelift.io/blog/what-is-opentofu
  - https://www.env0.com/blog/opentofu-the-open-source-terraform-alternative

### 11. Pulumi
**Finding:** Not based on specific IaC tool (uses programming languages)  
**Proof:**
- Based on real, general-purpose programming languages (TypeScript, Python, Go, C#, Java, YAML)
- Not a fork or derivative of Terraform or other IaC tools
- Unique approach using programming languages instead of DSLs
- Sources:
  - https://www.pulumi.com/what-is/what-is-pulumi/
  - https://github.com/pulumi/pulumi

---

## Kubernetes OS Category

### 12. Elemental (ex k3os)
**Finding:** Based on SLE Micro  
**Proof:**
- Built on SUSE Linux Enterprise Micro (SLE Micro)
- Minimal, container-focused and immutable Linux distribution
- Sources:
  - https://documentation.suse.com/smart/rancher/html/Rancher-OS/index.html
  - https://elemental.docs.rancher.com/

### 13. Kairos Linux
**Finding:** Meta-distribution (Ubuntu, Alpine, Fedora, etc.)  
**Proof:**
- Kairos is a meta-distribution supporting Ubuntu, openSUSE, Alpine, Fedora, Debian, and Rocky Linux
- Allows building immutable, bootable Kubernetes OS images using various Linux bases
- Sources:
  - https://kairos.io/getting-started/what-is-kairos/
  - https://github.com/kairos-io/kairos

### 14. RKE (abandoned)
**Finding:** Based on Docker containers  
**Proof:**
- Runs entirely within Docker containers
- All Kubernetes components (etcd, kube-apiserver, etc.) are launched via Docker
- Deprecated due to Docker runtime EOL in Kubernetes
- Sources:
  - https://rke.docs.rancher.com/
  - https://github.com/rancher/rke

### 15. Talos Linux
**Finding:** Purpose-built (not based on other distros)  
**Proof:**
- Not based on traditional Linux distributions (not Ubuntu, Debian, RHEL, Fedora, or Alpine derivative)
- Built independently from the ground up for Kubernetes
- Uses custom init system written in Go (not systemd)
- Sources:
  - https://www.talos.dev/
  - https://github.com/siderolabs/talos
  - https://thenewstack.io/no-ssh-what-is-talos-this-linux-distro-for-kubernetes/

---

## Management Platform Category

### 16. Gardener
**Finding:** Based on Kubernetes (Kubernetes-on-Kubernetes)  
**Proof:**
- Uses Kubernetes to orchestrate and manage other Kubernetes clusters
- Components run as controllers inside a central Kubernetes cluster
- "Kubernetes-native design"
- Sources:
  - https://gardener.cloud/docs/getting-started/architecture/
  - https://kubernetes.io/blog/2018/05/17/gardener/

### 17. KubeClipper
**Finding:** Based on kubeadm  
**Proof:**
- Fundamentally based on kubeadm for cluster bootstrapping
- Repackages and extends kubeadm for simplified deployment
- Sources:
  - https://kubeclipper.io/en/docs/overview/
  - https://github.com/kubeclipper/kubeclipper

### 18. Kubermatic Kubernetes Platform
**Finding:** Based on upstream Kubernetes  
**Proof:**
- Based on 100% vanilla Kubernetes without modification
- Uses upstream Kubernetes ensuring compatibility
- Sources:
  - https://docs.kubermatic.com/kubermatic/
  - https://www.kubermatic.com/products/kubermatic-kubernetes-platform/

### 19. Palette (Spectro Cloud)
**Finding:** Based on Cluster API  
**Proof:**
- Fundamentally based on CNCF Cluster API
- Automation and declarative management tightly integrated with Cluster API
- Sources:
  - https://docs.spectrocloud.com/
  - https://www.spectrocloud.com/why-palette

### 20. Platform9
**Finding:** Based on upstream Kubernetes  
**Proof:**
- Based on upstream open-source Kubernetes
- Does not create proprietary fork or heavily modify Kubernetes
- Sources:
  - https://platform9.com/resource/platform9-managed-kubernetes-overview/
  - https://www.vamsitalkstech.com/cloud/platform9-managed-kubernetes-pmk-plans-that-start-at-zero-cost-and-scale-as-customers-grow/

### 21. Portainer
**Finding:** Based on Kubernetes API  
**Proof:**
- Interacts directly with the Kubernetes API
- Not based on another Kubernetes tool but provides UI/management layer over K8s API
- Sources:
  - https://www.portainer.io/blog/setting-the-record-straight-the-truth-about-portainers-kubernetes-management-capabilities
  - https://deepwiki.com/portainer/portainer/3.4-kubernetes-operations

### 22. Rafay
**Finding:** Based on upstream Kubernetes distros (EKS, AKS, OpenShift, Rancher)  
**Proof:**
- Does not replace Kubernetes; leverages upstream distributions like EKS, AKS, OpenShift, Rancher
- Management and automation layer over these clusters
- Sources:
  - https://rafay.co/platform/kubernetes-manager
  - https://www.saasworthy.com/product/rafay-platform

### 23. Rancher
**Finding:** Based on Kubernetes (management platform)  
**Proof:**
- Core function is to manage Kubernetes clusters
- Based on Kubernetes APIs, uses etcd, Helm
- Not a Kubernetes distribution but management layer
- Sources:
  - https://ranchermanager.docs.rancher.com/
  - https://documentation.suse.com/cloudnative/rancher-manager/

### 24. Tanzu (VMware)
**Finding:** Based on upstream Kubernetes and Cluster API  
**Proof:**
- Based on upstream, open-source Kubernetes
- Uses Cluster API for cluster lifecycle automation
- Sources:
  - https://docs.netapp.com/us-en/netapp-solutions-containers/tanzu/vtwn-overview-vmware-tanzu.html
  - https://www.ahead.com/resources/tanzu-series-part-1/

---

## Selfhosted Category

### 25. Harvester
**Finding:** Based on Kubernetes, KubeVirt, Longhorn  
**Proof:**
- Uses Kubernetes as foundational platform
- Employs KubeVirt for VM management
- Uses Longhorn for distributed block storage
- Sources:
  - https://www.rancher.com/index.php/products/harvester
  - https://docs.harvesterhci.io/
  - https://github.com/harvester/harvester

### 26. Juju
**Finding:** Application orchestration (not K8s-specific)  
**Proof:**
- Not a Kubernetes distribution but application orchestration engine
- Treats Kubernetes as one of many cloud substrates
- Sources:
  - https://github.com/juju/juju
  - https://documentation.ubuntu.com/juju/

### 27. k0s
**Finding:** Based on upstream Kubernetes  
**Proof:**
- Based on 100% upstream, CNCF-certified Kubernetes
- Single binary containing real Kubernetes binaries
- Sources:
  - https://docs.k0sproject.io/
  - https://k0sproject.io/
  - https://www.cncf.io/blog/2024/12/06/understanding-k0s-a-lightweight-kubernetes-distribution-for-the-community/

### 28. k3s
**Finding:** Based on upstream Kubernetes  
**Proof:**
- Streamlined distribution of Kubernetes
- Maintains API compatibility with upstream Kubernetes
- Sources:
  - https://docs.k3s.io/
  - https://www.rancher.com/products/k3s

### 29. K8S The Easy Way
**Finding:** Based on Kubernetes The Hard Way  
**Proof:**
- Directly inspired by "Kubernetes The Hard Way" by Kelsey Hightower
- Automates the manual work required by "Kubernetes The Hard Way"
- Sources:
  - https://darxkies.github.io/k8s-tew/_build/html/about.html
  - https://github.com/darxkies/k8s-tew

### 30. Magnum
**Finding:** Based on Cluster API and Helm  
**Proof:**
- Modern approach uses Kubernetes Cluster API (CAPI) and Helm
- Replaced older Heat-based approach with CAPI
- Sources:
  - https://docs.openstack.org/magnum/latest/user/
  - https://www.stackhpc.com/magnum-cluster-api-helm-deep-dive.html
  - https://github.com/vexxhost/magnum-cluster-api

### 31. NKP (Nutanix Kubernetes Platform)
**Finding:** Based on upstream Kubernetes  
**Proof:**
- Based on pure upstream, CNCF-conformant Kubernetes
- Not a proprietary fork
- Sources:
  - https://www.nutanix.com/products/kubernetes-management-platform
  - https://www.storagereview.com/news/nutanix-kubernetes-platform-nkp-simplifies-container-management

### 32. RKE2
**Finding:** Based on k3s and RKE1  
**Proof:**
- Combines key ideas from both RKE1 and k3s
- Takes ease of operations from k3s and upstream compatibility from RKE1
- Sources:
  - https://docs.rke2.io/
  - https://documentation.suse.com/cloudnative/rke2/latest/en/introduction.html
  - https://support.tools/post/rke2-deepdive/

### 33. SIGHUP
**Finding:** Based on upstream Kubernetes  
**Proof:**
- Based purely on upstream Kubernetes with no proprietary changes
- CNCF-certified distribution
- Sources:
  - https://docs.sighup.io/docs/distribution/
  - https://github.com/sighupio/distribution

### 34. Welkin
**Finding:** Based on Cluster API  
**Proof:**
- Kubernetes lifecycle layer implemented with Cluster API (CAPI)
- CAPI preferred for features like autoscaling and node healing
- Sources:
  - https://elastisys.io/welkin/operator-manual/understand-welkin/
  - https://elastisys.com/welkin-platform-overview/

---

## Notes

- Some tools like "Hepto" could not be verified as there's insufficient public information available
- Tools marked as "not based on" another tool are original implementations or management layers that don't derive from existing Kubernetes deployment tools
- All sources were accessed in January 2026 and represent the most current information available at that time
