# 101 Ways to Deploy Kubernetes

A comprehensive list of ways to deploy Kubernetes, organized by deployment type.  

This repository is based on the original work [@zwindler](https://github.com/zwindler) did in a [Google Sheet file](https://docs.google.com/spreadsheets/d/1zjOLU8MblsN8VPwUyHNDFbBQ7EihHM2joD2Q9Tv2DiI/edit?usp=sharing)

---

## Desktop

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| canonical kubernetes (snap) | Canonical | [GitHub](https://github.com/kube-hetzner/terraform-hcloud-kube-hetzner) | Apache 2.0 | | [[ref]](#canonical-kubernetes-snap) |
| colima | | [GitHub](https://github.com/abiosoft/colima) | Apache 2.0 | lima-vm | [[ref]](#colima) |
| crc (openshift 4 on a desktop) | Openshift | [GitHub](https://github.com/crc-org/crc) | Apache 2.0 | OpenShift | [[ref]](#crc-openshift-4-on-a-desktop) |
| Desktop-Kubernetes | | [GitHub](https://github.com/aceeric/desktop-kubernetes) | Apache 2.0 | | [[ref]](#desktop-kubernetes) |
| Docker desktop | Docker (Mirantis) | [Website](https://www.docker.com/products/docker-desktop/) | ❌ | kubeadm, kind | [[ref]](#docker-desktop) |
| k3d | Rancher | [GitHub](https://github.com/k3d-io/k3d) | Apache 2.0 | k3s | [[ref]](#k3d) |
| kind | | [GitHub](https://github.com/kubernetes-sigs/kind) | Apache 2.0 | kubeadm | [[ref]](#kind) |
| kubefire | | [GitHub](https://github.com/innobead/kubefire) | Apache 2.0 | kubeadm, k3s, rke2, k0s | [[ref]](#kubefire) |
| lima-vm | | [GitHub](https://github.com/lima-vm/lima/blob/master/examples/k8s.yaml) | Apache 2.0 | kubeadm, k3s, rke2 | [[ref]](#lima-vm) |
| microk8s | Canonical | [GitHub](https://github.com/canonical/microk8s) | Apache 2.0 | | [[ref]](#microk8s) |
| Minikube | | [GitHub](https://github.com/kubernetes/minikube) | Apache 2.0 | kubeadm | [[ref]](#minikube) |
| Minishift | Redhat | [GitHub](https://github.com/minishift/minishift) | Apache 2.0 | OpenShift | [[ref]](#minishift) |
| mykube | | [GitHub](https://github.com/guyst16/mykube) | Apache 2.0 | kubeadm | |
| Oracle Cloud Native Environment | Oracle | [GitHub](https://github.com/oracle-cne/ocne) | Apache 2.0 | | |
| Orbstack | | [Website](https://orbstack.dev/) | ❌ | | [[ref]](#orbstack) |
| Rancher Desktop | Rancher | [GitHub](https://github.com/rancher-sandbox/rancher-desktop) | Apache 2.0 | LimaVM and k3s | [[ref]](#rancher-desktop) |

---

## IaC (Infrastructure as Code)

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| aks-engine (abandoned) | Azure | [GitHub](https://github.com/Azure/aks-engine) | Apache 2.0 | | |
| Alvistack Ansible | Alvistack | [GitHub](https://github.com/alvistack/ansible-collection-kubernetes) | Apache 2.0 | kubeadm | |
| Alvistack Vagrant-kubernetes | Alvistack | [GitHub](https://github.com/alvistack/vagrant-kubernetes) | Apache 2.0 | kubeadm | [[ref]](#alvistack-vagrant-kubernetes) |
| Crossplane | | [GitHub](https://github.com/crossplane/crossplane) | Apache 2.0 | | [[ref]](#crossplane) |
| Kube-hetzner | Hetzner | [GitHub](https://github.com/kube-hetzner/terraform-hcloud-kube-hetzner) | MIT | Terraform / OpenTofu | [[ref]](#kube-hetzner) |
| Kubernetes ClusterAPI | | [GitHub](https://github.com/kubernetes-sigs/cluster-api) | Apache 2.0 | | [[ref]](#kubernetes-clusterapi) |
| Kubespray | | [GitHub](https://github.com/kubernetes-sigs/kubespray) | Apache 2.0 | kubeadm | [[ref]](#kubespray) |
| OpenTofu | | [GitHub](https://github.com/opentofu/opentofu) | MPL 2.0 | | [[ref]](#opentofu) |
| Pulumi | | [GitHub](https://github.com/pulumi/pulumi) | Apache 2.0 | | [[ref]](#pulumi) |
| Puppet | | [Puppet Forge](https://forge.puppet.com/modules/puppetlabs/kubernetes/readme) | Apache 2.0 | Terraform / OpenTofu | [[ref]](#puppet) |
| typhoon | | [GitHub](https://github.com/poseidon/typhoon) | MIT | Terraform / OpenTofu | [[ref]](#typhoon) |

---

## Kubernetes in Kubernetes

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| k3k | Rancher | [GitHub](https://github.com/rancher/k3k) | Apache 2.0 | k3s | [[ref]](#k3k) |
| vcluster | loft.sh | [GitHub](https://github.com/loft-sh/vcluster) | Apache 2.0 | kubeadm, k3s or k0s | [[ref]](#vcluster) |

---

## Kubernetes OS

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| elemental (ex k3os) | Rancher | [GitHub](https://github.com/rancher/elemental) | Apache 2.0 | | [[ref]](#elemental-ex-k3os) |
| Kairos Linux | Spectro cloud | [GitHub](https://github.com/kairos-io/kairos) | Apache 2.0 | | [[ref]](#kairos-linux) |
| RKE (abandoned) | Rancher | [GitHub](https://github.com/rancher/rke) | Apache 2.0 | | [[ref]](#rke-abandoned) |
| Talos Linux | SideroLabs | [GitHub](https://github.com/siderolabs/talos) | MPL 2.0 | | [[ref]](#talos-linux) |

---

## Managed

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| AKS | Azure | [Website](https://azure.microsoft.com/fr-fr/products/kubernetes-service) | Not applicable | | [[ref]](#aks) |
| Alibaba Cloud Container Service for Kubernetes (ACK) | Alibaba Cloud | [Website](https://www.alibabacloud.com/fr/product/kubernetes) | Not applicable | | |
| Civo | | [Website](https://www.civo.com/) | Not applicable | k3s or Talos Linux | [[ref]](#civo) |
| Clever Kubernetes Engine (CKE) | Clever Cloud | [Website](https://www.clever-cloud.com/product/kubernetes/) | Not applicable | | |
| DOKS | Digital Ocean | [Website](https://www.digitalocean.com/products/kubernetes/) | Not applicable | | |
| EKS | AWS | [Website](https://aws.amazon.com/fr/eks/) | Not applicable | | [[ref]](#eks) |
| GKE | Google Cloud Platform | [Website](https://cloud.google.com/kubernetes-engine?hl=fr) | Not applicable | | |
| Gridscale Managed Kubernetes (GSK) | | [Website](https://gridscale.io/en/products/kubernetes/) | Not applicable | | |
| IBM Cloud (IKS) | IBM Cloud | [Website](https://www.ibm.com/cloud/container-service/) | Not applicable | | |
| IONOS Kubernetes Service | IONOS | [Website](https://cloud.ionos.com/managed/kubernetes) | Not applicable | | |
| Kapsule | Scaleway | [Website](https://www.scaleway.com/en/kubernetes-kapsule/) | Not applicable | | [[ref]](#kapsule) |
| Kosmos | Scaleway | [Website](https://www.scaleway.com/fr/kubernetes-kosmos/) | Not applicable | | [[ref]](#kosmos) |
| LeafCloud | | [Website](https://www.leaf.cloud/) | Not applicable | Gardener | |
| Linode Kubernetes Engine (LKE) | Linode | [Website](https://www.linode.com/docs/kubernetes/) | Not applicable | | |
| MetaKube | SysEleven | [Website](https://www.syseleven.de/en/) | Not applicable | | |
| MKS | OVHcloud | [Website](https://www.ovhcloud.com/fr/public-cloud/kubernetes/) | Not applicable | | [[ref]](#mks) |
| Oracle Cloud Infrastructure Container Engine for Kubernetes (OKE) | Oracle Cloud Infrastructure | [Website](https://www.oracle.com/fr/cloud/cloud-native/container-engine-kubernetes/) | Not applicable | | [[ref]](#oracle-cloud-infrastructure-container-engine-for-kubernetes-oke) |
| Redhat Openshift cloud | Redhat | [Website](https://www.redhat.com/fr/technologies/cloud-computing/openshift/openshift-cloud-services) | Not applicable | Openshift | |
| SKS | Exoscale | [Website](https://community.exoscale.com/documentation/sks/overview/) | Not applicable | | [[ref]](#sks) |
| UpCloud Managed Kubernetes (UKS) | UpCloud | [Website](https://upcloud.com/products/managed-kubernetes) | Not applicable | | |
| VKE | Vultr | [Website](https://www.vultr.com/kubernetes/) | Not applicable | | |

---

## Management Platform

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| Gardener | | [GitHub](https://github.com/gardener/gardener) | Apache 2.0 | | [[ref]](#gardener) |
| hypershift | redhat | [GitHub](https://github.com/openshift/hypershift) | Apache 2.0 | Openshift/OKD | |
| k0rdent | Mirantis | [GitHub](https://github.com/k0rdent/kcm) | Apache 2.0 | k0smotron and cluster API | |
| Kamaji | Clastix | [GitHub](https://github.com/clastix/kamaji) | Apache 2.0 | kubeadm and Cluster API | |
| KubeClipper | | [GitHub](https://github.com/kubeclipper/kubeclipper) | Apache 2.0 | kubeadm | |
| Kubermatic Kubernetes Platform | Kubermatic | [GitHub](https://github.com/kubermatic/kubermatic) | Apache 2.0 | | [[ref]](#kubermatic-kubernetes-platform) |
| Omni | SideroLabs | [Website](https://www.siderolabs.com/platform/saas-for-kubernetes/) | BUSL 1.1 | Talos Linux | [[ref]](#omni) |
| Palette | Spectro Cloud | [Website](https://www.spectrocloud.com/product/palette/) | ❌ | Cluster API | |
| Platform9 | Platform9 | [Website](https://platform9.com/) | ❌ | | |
| Portainer | Portainer.io | [Website](https://www.portainer.io/) | Zlib (CE) / ❌ (BE) | | |
| Rafay | Rafay Systems | [Website](https://rafay.co/) | ❌ | | |
| Rancher | Rancher | [GitHub](https://github.com/rancher/rancher) | Apache 2.0 | | [[ref]](#rancher) |
| Tanzu | VMware | [Website](https://docs.vmware.com/en/VMware-Tanzu-Application-Platform/index.html) | ❌ | | |

---

## Other

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| By hand, using containers | | [GitHub](https://github.com/kubernetes/registry.k8s.io) | Apache 2.0 | | |
| By hand, using binaries | | [GitHub](https://github.com/kubernetes/kubernetes) | Apache 2.0 | | |
| Devops playgrounds | | [Website](https://labs.iximiuz.com/playgrounds) | Not applicable | | [[ref]](#devops-playgrounds) |
| Kubernetes the hard way | | [GitHub](https://github.com/kelseyhightower/kubernetes-the-hard-way) | Apache 2.0 | | |
| Kubernetes the hard way w/ Terraform (GCP) | | [GitHub](https://github.com/aidanSoles/kubernetes-the-hard-way-terraform) | Apache 2.0 | Terraform / OpenTofu | |
| Kubernetes the hard way w/ Terraform (AWS) | | [GitHub](https://github.com/escarti/kubernetes-the-hard-way-tf-aws) | Apache 2.0 | Terraform / OpenTofu | [[ref]](#kubernetes-the-hard-way-w-terraform-aws) |
| KwoK | | [GitHub](https://github.com/kubernetes-sigs/kwok) | Apache 2.0 | | [[ref]](#kwok) |
| Play with k8s | | [GitHub](https://github.com/play-with-docker/play-with-k8s) | Apache 2.0 | | [[ref]](#play-with-k8s) |

---

## Selfhosted

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| EKS Anywhere | AWS | [GitHub](https://github.com/aws/eks-anywhere) | Apache 2.0 | EKS | |
| Harvester | Rancher | [GitHub](https://github.com/harvester/harvester) | Apache 2.0 | | [[ref]](#harvester) |
| Hepto | | [Forge Tedomum](https://forge.tedomum.net/acides/hepto) | Apache 2.0 | | |
| Juju | Canonical | [GitHub](https://github.com/juju/juju) | Apache 2.0 | | |
| k0s | Mirantis | [GitHub](https://github.com/k0sproject/k0s) | Apache 2.0 | | [[ref]](#k0s) |
| k0smotron | Mirantis | [GitHub](https://github.com/k0sproject/k0smotron) | Apache 2.0 | k0s and clusterAPI | [[ref]](#k0smotron) |
| k3s | Rancher | [GitHub](https://github.com/k3s-io/k3s) | Apache 2.0 | | [[ref]](#k3s) |
| k3sup | | [GitHub](https://github.com/alexellis/k3sup) | MIT | k3s | [[ref]](#k3sup) |
| k8e - Kubernetes easy engine | | [GitHub](https://github.com/xiaods/k8e) | Apache 2.0 | k3s | [[ref]](#k8e-kubernetes-easy-engine) |
| K8S The Easy way | | [GitHub](https://github.com/darxkies/k8s-tew) | MIT | | [[ref]](#k8s-the-easy-way) |
| Kops | | [GitHub](https://github.com/kubernetes/kops) | Apache 2.0 | kubeadm | [[ref]](#kops) |
| kubeadm w/ CLI | | [GitHub](https://github.com/kubernetes/kubernetes) | Apache 2.0 | | [[ref]](#kubeadm-w-cli) |
| kubeadm w/ ClusterConfiguration | | [GitHub](https://github.com/kubernetes/kubernetes) | Apache 2.0 | | [[ref]](#kubeadm-w-clusterconfiguration) |
| Kubean | | [GitHub](https://github.com/kubean-io/kubean) | Apache 2.0 | Kubespray | |
| KubeKey | | [GitHub](https://github.com/kubesphere/kubekey) | Apache 2.0 | kubeadm / k3s | [[ref]](#kubekey) |
| KubeMarine | | [GitHub](https://github.com/Netcracker/KubeMarine) | Apache 2.0 | Kubeadm | [[ref]](#kubemarine) |
| KubeOne | Kubermatic | [GitHub](https://github.com/kubermatic/kubeone) | Apache 2.0 | Kubeadm / ClusterAPI | [[ref]](#kubeone) |
| KubeSolo | portainer.io | [GitHub](https://github.com/portainer/kubesolo) | Apache 2.0 | k3s | |
| Kurl | ReplicatedHQ | [GitHub](https://github.com/replicatedhq/kurl) | Apache 2.0 | Kubeadm | [[ref]](#kurl) |
| Magnum | OpenStack | [GitHub](https://github.com/openstack/magnum) | Apache 2.0 | Cluster API | [[ref]](#magnum) |
| MKE (Mirantis Kubernetes Engine) | Mirantis | [Website](https://docs.mirantis.com/mke4k/latest/) | ❌ | k0s | |
| NKP (Nutanix Kubernetes Platform) | Nutanix | [Website](https://www.nutanix.com/products/kubernetes-management-platform) | ❌ | | |
| OKD (open source openshift) | Redhat | [GitHub](https://github.com/okd-project/okd) | Apache 2.0 | OpenShift | [[ref]](#okd-open-source-openshift) |
| OneKE | OpenNebula | [GitHub](https://github.com/OpenNebula/one-apps) | Apache 2.0 | rke2 | [[ref]](#oneke) |
| RKE2 | Rancher | [GitHub](https://github.com/rancher/rke2) | Apache 2.0 | k3s and RKE | |
| SIGHUP | | [GitHub](https://github.com/sighupio/distribution) | BSD 3-Clause | | |
| TALM | Cosystack | [GitHub](https://github.com/cozystack/talm) | Apache 2.0 | Talos Linux | |
| tarook | | [GitHub](https://github.com/alasca-association/tarook) | Apache 2.0 | Terraform / Opentofu | |
| Welkin | Elastisys | [GitHub](https://github.com/elastisys/welkin) | Apache 2.0 | Cluster API | |

---

## Other Useful Projects

| Name | URL | Description |
|------|-----|-------------|
| Karpenter (AWS) | [Website](https://karpenter.sh/) / [Article](https://medium.com/israeli-tech-radar/karpenter-and-the-future-of-kubernetes-4ab7428b7f87) | High-performance autoscaler for Kubernetes that provisions nodes in seconds based on workload demands, optimizing costs and resource usage |
| Flatcar | [Website](https://www.flatcar.org/docs/latest/#getting-started) | Lightweight, immutable container-optimized Linux OS with atomic updates, designed for secure and reliable Kubernetes deployments |
| KubeEdge | [Website](https://kubeedge.io/) / [GitHub](https://github.com/kubeedge/kubeedge) | Extends Kubernetes to edge computing, enabling cloud-native orchestration of IoT devices and applications at the edge with offline autonomy |

---

## References

### AKS

- [FR] [J'ai testé pour vous AKS, la plateforme Kubernetes managée d'Azure](https://blog.zwindler.fr/2018/12/18/jai-teste-pour-vous-aks-la-plateforme-kubernetes-managee-dazure/)

### Alvistack Vagrant-kubernetes

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 11 (Alvistack Vagrant-kubernetes)

### By hand, using binaries

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 50 (By hand, using binaries)
- [FR] [Démystifions Kubernetes](https://github.com/zwindler/demystifions-kubernetes)

### canonical kubernetes (snap)

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 9 (canonical kubernetes)

### Civo

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 14 (Civo)
- [FR] [Civo - Du Kubernetes managé à partir de 4€/mois, vraiment?](https://blog.zwindler.fr/2021/07/16/civo-du-kubernetes-manage-a-partir-de-4-mois-vraiment/)

### colima

- [EN] [Cloud Native development with Colima](https://dischord.org/2024/10/27/cloud-native-development-with-colima/)

### crc (openshift 4 on a desktop)

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 13 (crc)
- [EN] [Setting up Redhat Openshift Local on your Laptop](https://virtutechnotes.in/setting-up-redhat-openshift-local-on-your-laptop/)

### Crossplane

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 37 (Crossplane)
- [EN] [Step-by-step guide to working with Crossplane and Kubernetes](https://www.techtarget.com/searchitoperations/tutorial/Step-by-step-guide-to-working-with-Crossplane-and-Kubernetes)

### Desktop-Kubernetes

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 10 (Desktop-Kubernetes)

### Devops playgrounds

- [EN] [Server-Side Playgrounds Reimagined: Build, Boot, and Network Your Own VMs](https://iximiuz.com/en/posts/iximiuz-labs-playgrounds-2.0/)

### Docker desktop

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 3 (Docker desktop)
- [EN] [Kubernetes on Docker Desktop in 2 Minutes](https://collabnix.com/kubernetes-on-docker-desktop-in-2-minutes/)

### EKS

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 18 (EKS)

### elemental (ex k3os)

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 40 (elemental)
- [FR] [K3OS - Le reboot de RancherOS à la sauce K3S](https://blog.zwindler.fr/2020/12/08/k3os-le-reboot-de-rancheros-a-la-sauce-k3s/)
- [EN] [Elemental - How to download and setup](https://srclog.com/rancherelemental)

### Gardener

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 45 (Gardener)

### Harvester

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 48 (Harvester)
- [FR] [Test Rancher Labs Harvester HCI](https://blog.zwindler.fr/2023/01/24/test-rancher-labs-harvester-hci/)

### k0s

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 23 (k0s)

### k0smotron

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 41 (k0smotron)

### k3d

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 7 (k3d)
- [EN] [Local Kubernetes stack with k3d in seconds](https://ianhomer.com/deploying-a-local-kubernetes-cluster-with-k3d/)

### k3k

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 47 (k3k)
- [EN] [Kubernetes Rancher: The Basics and a Quick Tutorial](https://komodor.com/learn/kubernetes-rancher-the-basics-and-a-quick-tutorial/)
- [EN] [Installing Rancher on K3s with Ingress, Domain, and SSL Configuration](https://code2deploy.com/blog/installing-rancher-on-k3s-with-ingress-domain-and-ssl-configuration/)

### k3s

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 21 (k3s)
- [FR] [K3S et Cilium - Rapide et facile](https://blog.zwindler.fr/2023/09/01/k3s-et-cilium-rapide-et-facile/)

### k3sup

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 22 (k3sup)

### k8e - Kubernetes easy engine

- [FR] [Test K8E](https://blog.zwindler.fr/2025/09/19/test-k8e/)

### K8S The Easy way

- [FR] [Test K8S-TEW](https://blog.zwindler.fr/2025/05/26/test-k8s-tew/)

### Kairos Linux

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 39 (Kairos Linux)
- [EN] [Using Kairos to fully bootstrap a Kubernetes cluster with almost zero intervention](https://tyzbit.blog/using-kairos-to-fully-bootstrap-a-kubernetes-cluster-with-almost-zero-intervention)
- [EN] [Livin' Kubernetes on the (Immutable) Edge with Kairos Project](https://www.spectrocloud.com/blog/livin-kubernetes-on-the-immutable-edge-with-kairos-project)
- [EN] [Kairos: The immutable Linux meta-distribution for edge Kubernetes](https://cloudification.io/cloud-blog/kairos-the-immutable-linux-meta-distribution-for-edge-kubernetes/)
- [EN] [Building secure Kubernetes Edge images with Kairos and k0s](https://www.cncf.io/blog/2025/03/25/building-secure-kubernetes-edge-images-with-kairos-and-k0s/)

### Kapsule

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 17 (Kapsule)

### kind

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 1 (kind)
- [EN] [Getting Started with Kind for Local Kubernetes Development](https://betterstack.com/community/guides/scaling-docker/kind/)

### Kops

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 24 (Kops)

### Kosmos

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 17 (Kosmos)

### kubeadm w/ CLI

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 19 (kubeadm w/ CLI)
- [FR] [Installer un cluster Kubernetes sur des VM CentOS](https://blog.zwindler.fr/2017/06/07/installer-cluster-kubernetes-vm-centos/)

### kubeadm w/ ClusterConfiguration

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 20 (kubeadm w/ ClusterConfiguration)
- [FR] [KubeadmCfg - Introduction à l'API Kubeadm](https://blog.zwindler.fr/2023/12/17/kubeadmcfg-introduction-api-kubeadm/)

### kubefire

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 12 (kubefire)

### KubeKey

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 26 (KubeKey)

### KubeMarine

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 28 (KubeMarine)

### KubeOne

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 25 (KubeOne)

### Kubermatic Kubernetes Platform

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 44 (Kubermatic Kubernetes Platform)

### Kubernetes ClusterAPI

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 33 (Kubernetes ClusterAPI)
- [EN] [Cluster API Quickstart: A Step-by-Step Guide](https://www.plural.sh/blog/cluster-api-quickstart-guide/)
- [EN] [Getting Started with Kubernetes Cluster API](https://sesamedisk.com/getting-started-with-kubernetes-cluster-api-a-comprehensive-guide/)

### Kubernetes the hard way w/ Terraform (AWS)

- [EN] [Kubernetes The Hard Way on AWS with Packer and Terraform](https://andygolubev.com/articles/kubernetes-the-hard-way-on-aws-with-packer-and-terraform/)

### Kubespray

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 32 (Kubespray)
- [FR] [Installer Kubernetes avec Kubespray (Ansible)](https://blog.zwindler.fr/2017/12/05/installer-kubernetes-kubespray-ansible/)
- [EN] [How to Install Kubernetes Cluster Using Kubespray](https://itsfoss.gitlab.io/post/how-to-install-kubernetes-cluster-using-kubespray/)
- [EN] [How to deploy Kubernetes using Kubespray](https://upcloud.com/resources/tutorials/deploy-kubernetes-using-kubespray/)
- [EN] [How to Deploy a Kubernetes Cluster Using Kubespray](https://www.densify.com/kubernetes-tools/kubespray/)

### Kube-hetzner

- [EN] [Getting Started with Kube-Hetzner](https://deepwiki.com/kube-hetzner/terraform-hcloud-kube-hetzner/1.1-getting-started)
- [EN] [Kubernetes cluster on Hetzner using k3s and Terraform](https://bogoyavlensky.com/blog/kubernetes-hetzner/)

### Kurl

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 27 (Kurl)

### KwoK

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 49 (KwoK)

### lima-vm

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 8 (lima-vm)
- [EN] [Mac - how to use kubernetes with Lima-VM](https://infoheap.com/mac-use-kubernetes-with-lima-vm/)

### Magnum

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 31 (Magnum)

### microk8s

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 2 (microk8s)
- [FR] [Installer MicroK8s dans WSL 2](https://blog.zwindler.fr/2020/06/01/installer-microk8s-dans-wsl-2/)
- [EN] [Setting Up a MicroK8s Kubernetes Cluster on Ubuntu](https://mangohost.net/blog/setting-up-a-microk8s-kubernetes-cluster-on-ubuntu-24/)

### Minikube

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 6 (Minikube)
- [FR] [Minikube sur Hyper-V - Part 2 - Troubleshooting de l'installation](https://blog.zwindler.fr/2018/10/02/minikube-sur-hyper-v-part-2-troubleshooting-de-linstallation/)
- [EN] [A Guide to Local Kubernetes Development with Minikube](https://betterstack.com/community/guides/scaling-docker/minikube/)

### Minishift

- [EN] [Getting Started with Minishift](https://www.gleamingthekube.com/getting-started-with-minishift/)

### MKS

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 36 (MKS)
- [FR] [J'ai testé pour vous l'offre Kubernetes as a Service d'OVH](https://blog.zwindler.fr/2019/07/09/jai-teste-pour-vous-loffre-kubernetes-as-a-service-dovh/)

### OKD (open source openshift)

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 30 (OKD)

### Omni

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 42 (Omni)

### OneKE

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 29 (OneKE)

### OpenTofu

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 34 (OpenTofu)
- [EN] [How to Deploy Applications in Kubernetes using OpenTofu](https://www.itwonderlab.com/kubernetes-with-opentofu/)
- [EN] [OpenTofu Tutorial: Getting Started & Examples](https://spacelift.io/blog/opentofu-tutorial)

### Oracle Cloud Infrastructure Container Engine for Kubernetes (OKE)

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 16 (OKE)

### Orbstack

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 5 (Orbstack)
- [EN] [Running Containers Natively on Mac with Orbstack](https://www.corpit.org/running-containers-natively-on-mac-with-orbstack/)

### Play with k8s

- [EN] [Getting Started with Kubernetes on Play with Kubernetes Platform in 5 Minutes](https://dockerlabs.collabnix.com/kubernetes/beginners/getting-started-on-pwk.html)

### Pulumi

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 36 (Pulumi)
- [EN] [Create a Kubernetes Deployment with Pulumi](https://www.pulumi.com/guides/how-to/kubernetes-deployment/)
- [EN] [Infrastructure as Code (IaC) on OVHcloud - Pulumi](https://blog.ovhcloud.com/infrastructure-as-code-iac-on-ovhcloud-part-1-terraform-opentofu/)

### Puppet

- [EN] [Puppet and Kubernetes - DEV Community Tutorial](https://dev.to/betadots/puppet-and-kubernetes-182e)
- [EN] [Puppet & Kubernetes Configuration Management Guide](https://betanet.net/view-post/puppet-and-kubernetes-a-comprehensive-guide)

### Rancher

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 43 (Rancher)

### Rancher Desktop

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 4 (Rancher Desktop)

### RKE (abandoned)

- [FR] [Kubernetes avec RancherOS et RKE - Partie 2](https://blog.zwindler.fr/2020/11/30/kubernetes-avec-rancheros-et-rke-partie-2/)
- [EN] [Install Kubernetes with Rancher RKE (Step-by-Step)](https://computingforgeeks.com/install-kubernetes-production-cluster-using-rancher-rke/)

### SKS

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 15 (SKS)
- [FR] [Test de SKS, le Kubernetes managé chez Exoscale](https://blog.zwindler.fr/2021/05/03/test-de-sks-le-kubernetes-manage-chez-exoscale/)

### Talos Linux

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 38 (Talos Linux)
- [FR] [Talos Linux](https://une-tasse-de.cafe/blog/talos/)
- [EN] [Set Up Talos Linux on Your Machine](https://thenewstack.io/set-up-talos-linux-on-your-machine/)
- [EN] [Setting Up a k8s Cluster on Talos Linux](https://hostkey.com/blog/102-setting-up-a-k8s-cluster-on-talos-linux/)
- [EN] [Kubernetes Homelab Series Part 1 - Talos Linux & Proxmox](https://blog.dalydays.com/post/kubernetes-homelab-series-part-1-talos-linux-proxmox/)

### typhoon

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 35 (typhoon)

### vcluster

- [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 46 (vcluster)
- [EN] [vCluster: The Complete Guide to Virtual Kubernetes Clusters](https://collabnix.com/vcluster-the-complete-guide-to-virtual-kubernetes-clusters-in-2025/)
- [EN] [Build On Weekly vcluster demo](https://hackmd.io/@KNFb-hAMT7-2CZWxFt822g/SJaRSHa0q)

---

## License

This document is shared under the [CC BY-SA 4.0 (Attribution - Share Alike)](https://creativecommons.org/licenses/by-sa/4.0/deed.fr) license.
