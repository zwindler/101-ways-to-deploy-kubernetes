# 101 Ways to Deploy Kubernetes

A comprehensive list of ways to deploy Kubernetes, organized by deployment type.  

---

## Desktop

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| canonical kubernetes (snap) | Canonical | [GitHub](https://github.com/kube-hetzner/terraform-hcloud-kube-hetzner) | Apache 2.0 | | [[1]](#references) |
| colima | | [GitHub](https://github.com/abiosoft/colima) | Apache 2.0 | lima-vm | |
| crc (openshift 4 on a desktop) | Openshift | [GitHub](https://github.com/crc-org/crc) | Apache 2.0 | OpenShift | [[2]](#references) |
| Desktop-Kubernetes | | [GitHub](https://github.com/aceeric/desktop-kubernetes) | Apache 2.0 | | [[3]](#references) |
| Docker desktop | Docker (Mirantis) | [Website](https://www.docker.com/products/docker-desktop/) | No | kubeadm, kind | [[4]](#references) |
| k3d | Rancher | [GitHub](https://github.com/k3d-io/k3d) | Apache 2.0 | k3s | [[5]](#references) |
| kind | | [GitHub](https://github.com/kubernetes-sigs/kind) | Apache 2.0 | kubeadm | [[6]](#references) |
| kubefire | | [GitHub](https://github.com/innobead/kubefire) | Apache 2.0 | kubeadm, k3s, rke2, k0s | [[7]](#references) |
| lima-vm | | [GitHub](https://github.com/lima-vm/lima/blob/master/examples/k8s.yaml) | Apache 2.0 | kubeadm, k3s, rke2 | [[8]](#references) |
| microk8s | Canonical | [GitHub](https://github.com/canonical/microk8s) | Apache 2.0 | | [[9]](#references) [[10]](#references) |
| Minikube | | [GitHub](https://github.com/kubernetes/minikube) | Apache 2.0 | | [[11]](#references) [[12]](#references) |
| Minishift | Redhat | [GitHub](https://github.com/minishift/minishift) | Apache 2.0 | OpenShift | |
| mykube | | [GitHub](https://github.com/guyst16/mykube) | Apache 2.0 | kubeadm | |
| Oracle Cloud Native Environment | Oracle | [GitHub](https://github.com/oracle-cne/ocne) | Apache 2.0 | | |
| Orbstack | | [Website](https://orbstack.dev/) | No | | [[13]](#references) |
| Rancher Desktop | Rancher | [GitHub](https://github.com/rancher-sandbox/rancher-desktop) | Apache 2.0 | LimaVM and k3s | [[14]](#references) |

---

## IaC (Infrastructure as Code)

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| aks-engine (abandoned) | Azure | [GitHub](https://github.com/Azure/aks-engine) | Apache 2.0 | | |
| Alvistack Ansible | Alvistack | ansible-collection-kubernetes | Apache 2.0 | kubeadm | |
| Alvistack Vagrant-kubernetes | Alvistack | [GitHub](https://github.com/alvistack/vagrant-kubernetes) | Apache 2.0 | kubeadm | [[15]](#references) |
| Crossplane | | [GitHub](https://github.com/crossplane/crossplane) | Apache 2.0 | | [[16]](#references) [[17]](#references) |
| Kube-hetzner | Hetzner | [GitHub](https://github.com/kube-hetzner/terraform-hcloud-kube-hetzner) | MIT | Terraform / OpenTofu | |
| Kubernetes ClusterAPI | | [GitHub](https://github.com/kubernetes-sigs/cluster-api) | Apache 2.0 | | [[18]](#references) |
| Kubespray | | [GitHub](https://github.com/kubernetes-sigs/kubespray) | Apache 2.0 | kubeadm | [[19]](#references) [[20]](#references) |
| OpenTofu | | [GitHub](https://github.com/opentofu/opentofu) | MPL 2.0 | | [[21]](#references) |
| Pulumi | | [GitHub](https://github.com/pulumi/pulumi) | Apache 2.0 | | [[22]](#references) |
| Puppet | | [Puppet Forge](https://forge.puppet.com/modules/puppetlabs/kubernetes/readme) | Apache 2.0 | Terraform / OpenTofu | |
| typhoon | | [GitHub](https://github.com/poseidon/typhoon) | MIT | Terraform / OpenTofu | [[23]](#references) |

---

## Kubernetes in Kubernetes

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| k3k | Rancher | [GitHub](https://github.com/rancher/k3k) | Apache 2.0 | k3s | [[24]](#references) |
| vcluster | loft.sh | [GitHub](https://github.com/loft-sh/vcluster) | Apache 2.0 | kubeadm, k3s or k0s | [[25]](#references) |

---

## Kubernetes OS

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| elemental (ex k3os) | Rancher | [GitHub](https://github.com/rancher/elemental) | Apache 2.0 | | [[26]](#references) [[27]](#references) |
| Kairos Linux | Spectro cloud | [GitHub](https://github.com/kairos-io/kairos) | Apache 2.0 | | [[28]](#references) |
| RKE (abandoned) | Rancher | [GitHub](https://github.com/rancher/rke) | Apache 2.0 | | [[29]](#references) |
| Talos Linux | SideroLabs | [GitHub](https://github.com/siderolabs/talos) | MPL 2.0 | | [[30]](#references) [[31]](#references) |

---

## Managed

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| AKS | Azure | [Website](https://azure.microsoft.com/fr-fr/products/kubernetes-service) | Not applicable | | [[32]](#references) |
| Alibaba Cloud Container Service for Kubernetes (ACK) | Alibaba Cloud | [Website](https://www.alibabacloud.com/fr/product/kubernetes) | Not applicable | | |
| Civo | | [Website](https://www.civo.com/) | Not applicable | k3s or Talos Linux | [[33]](#references) [[34]](#references) |
| Clever Kubernetes Engine (CKE) | Clever Cloud | [Website](https://www.clever-cloud.com/product/kubernetes/) | Not applicable | | |
| DOKS | Digital Ocean | [Website](https://www.digitalocean.com/products/kubernetes/) | Not applicable | | |
| EKS | AWS | [Website](https://aws.amazon.com/fr/eks/) | Not applicable | | [[35]](#references) |
| GKE | Google Cloud Platform | [Website](https://cloud.google.com/kubernetes-engine?hl=fr) | Not applicable | | |
| Gridscale Managed Kubernetes (GSK) | | [Website](https://gridscale.io/en/products/kubernetes/) | Not applicable | | |
| IBM Cloud (IKS) | IBM Cloud | [Website](https://www.ibm.com/cloud/container-service/) | Not applicable | | |
| IONOS Kubernetes Service | IONOS | [Website](https://cloud.ionos.com/managed/kubernetes) | Not applicable | | |
| Kapsule | Scaleway | [Website](https://www.scaleway.com/en/kubernetes-kapsule/) | Not applicable | | [[36]](#references) |
| Kosmos | Scaleway | [Website](https://www.scaleway.com/fr/kubernetes-kosmos/) | Not applicable | | [[37]](#references) |
| LeafCloud | | [Website](https://www.leaf.cloud/) | Not applicable | Gardener | |
| Linode Kubernetes Engine (LKE) | Linode | [Website](https://www.linode.com/docs/kubernetes/) | Not applicable | | |
| MetaKube | SysEleven | [Website](https://www.syseleven.de/en/) | Not applicable | | |
| MKS | OVHcloud | [Website](https://www.ovhcloud.com/fr/public-cloud/kubernetes/) | Not applicable | | [[38]](#references) [[39]](#references) |
| Oracle Cloud Infrastructure Container Engine for Kubernetes (OKE) | Oracle Cloud Infrastructure | [Website](https://www.oracle.com/fr/cloud/cloud-native/container-engine-kubernetes/) | Not applicable | | [[40]](#references) |
| Redhat Openshift cloud | Redhat | [Website](https://www.redhat.com/fr/technologies/cloud-computing/openshift/openshift-cloud-services) | Not applicable | Openshift | |
| SKS | Exoscale | [Website](https://community.exoscale.com/documentation/sks/overview/) | Not applicable | | [[41]](#references) [[42]](#references) |
| VKE | Vultr | [Website](https://www.vultr.com/kubernetes/) | Not applicable | | |

---

## Management Platform

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| Gardener | | [GitHub](https://github.com/gardener/gardener) | Apache 2.0 | | [[43]](#references) |
| hypershift | redhat | [GitHub](https://github.com/openshift/hypershift) | Apache 2.0 | Openshift/OKD | |
| k0rdent | Mirantis | [GitHub](https://github.com/k0rdent/kcm) | Apache 2.0 | k0smotron and cluster API | |
| Kamaji | Clastix | [GitHub](https://github.com/clastix/kamaji) | Apache 2.0 | kubeadm and Cluster API | |
| KubeClipper | | [GitHub](https://github.com/kubeclipper/kubeclipper) | Apache 2.0 | | |
| Kubermatic Kubernetes Platform | Kubermatic | [GitHub](https://github.com/kubermatic/kubermatic) | Apache 2.0 | | [[44]](#references) |
| Omni | SideroLabs | [Website](https://www.siderolabs.com/platform/saas-for-kubernetes/) | BUSL 1.1 | Talos Linux | [[45]](#references) |
| Rancher | Rancher | [GitHub](https://github.com/rancher/rancher) | Apache 2.0 | | [[46]](#references) |
| Tanzu | VMware | [Website](https://docs.vmware.com/en/VMware-Tanzu-Application-Platform/index.html) | No | | |

---

## Other

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| By hand, using containers | | [GitHub](https://github.com/kubernetes/registry.k8s.io) | Apache 2.0 | | |
| By hand, using binaries | | [GitHub](https://github.com/kubernetes/kubernetes) | Apache 2.0 | | [[47]](#references) [[48]](#references) |
| Devops playgrounds | | [Website](https://labs.iximiuz.com/playgrounds) | Not applicable | | |
| Kubernetes the hard way | | [GitHub](https://github.com/kelseyhightower/kubernetes-the-hard-way) | Apache 2.0 | | |
| Kubernetes the hard way w/ Terraform | | [GitHub](https://github.com/aidanSoles/kubernetes-the-hard-way-terraform) | Apache 2.0 | Terraform / OpenTofu | |
| KwoK | | [GitHub](https://github.com/kubernetes-sigs/kwok) | Apache 2.0 | | [[49]](#references) |
| Play with k8s | | [GitHub](https://github.com/play-with-docker/play-with-k8s) | Apache 2.0 | | |

---

## Selfhosted

| Name | Publisher / Project | URL | Open source | Based on | External References |
|------|---------------------|-----|-------------|----------|---------------------|
| EKS Anywhere | AWS | [GitHub](https://github.com/aws/eks-anywhere) | Apache 2.0 | EKS | |
| Harvester | Rancher | [GitHub](https://github.com/harvester/harvester) | Apache 2.0 | | [[50]](#references) [[51]](#references) |
| Hepto | | [Forge Tedomum](https://forge.tedomum.net/acides/hepto) | Apache 2.0 | | |
| Juju | Canonical | [GitHub](https://github.com/juju/juju) | Apache 2.0 | | |
| k0s | Mirantis | [GitHub](https://github.com/k0sproject/k0s) | Apache 2.0 | | [[52]](#references) |
| k0smotron | Mirantis | [GitHub](https://github.com/k0sproject/k0smotron) | Apache 2.0 | k0s and clusterAPI | [[53]](#references) |
| k3s | Rancher | [GitHub](https://github.com/k3s-io/k3s) | Apache 2.0 | | [[54]](#references) [[55]](#references) |
| k3sup | | [GitHub](https://github.com/alexellis/k3sup) | MIT | k3s | [[56]](#references) |
| k8e - Kubernetes easy engine | | [GitHub](https://github.com/xiaods/k8e) | Apache 2.0 | k3s | [[57]](#references) |
| K8S The Easy way | | [GitHub](https://github.com/darxkies/k8s-tew) | MIT | | [[58]](#references) |
| Kops | | [GitHub](https://github.com/kubernetes/kops) | Apache 2.0 | kubeadm | [[59]](#references) |
| kubeadm w/ CLI | | [GitHub](https://github.com/kubernetes/kubernetes) | Apache 2.0 | | [[60]](#references) [[61]](#references) |
| kubeadm w/ ClusterConfiguration | | [GitHub](https://github.com/kubernetes/kubernetes) | Apache 2.0 | | [[62]](#references) [[63]](#references) |
| Kubean | | [GitHub](https://github.com/kubean-io/kubean) | Apache 2.0 | Kubespray | |
| KubeKey | | [GitHub](https://github.com/kubesphere/kubekey) | Apache 2.0 | kubeadm / k3s | [[64]](#references) |
| KubeMarine | | [GitHub](https://github.com/Netcracker/KubeMarine) | Apache 2.0 | Kubeadm | [[65]](#references) |
| KubeOne | Kubermatic | [GitHub](https://github.com/kubermatic/kubeone) | Apache 2.0 | Kubeadm / ClusterAPI | [[66]](#references) |
| KubeSolo | portainer.io | [GitHub](https://github.com/portainer/kubesolo) | Apache 2.0 | k3s | |
| Kurl | ReplicatedHQ | [GitHub](https://github.com/replicatedhq/kurl) | Apache 2.0 | Kubeadm | [[67]](#references) |
| Magnum | OpenStack | [GitHub](https://github.com/openstack/magnum) | Apache 2.0 | | [[68]](#references) |
| MKE (Mirantis Kubernetes Engine) | Mirantis | [Website](https://docs.mirantis.com/mke4k/latest/) | No | k0s | |
| NKP (Nutanix Kubernetes Platform) | Nutanix | [Website](https://www.nutanix.com/products/kubernetes-management-platform) | No | | |
| OKD (open source openshift) | Redhat | [GitHub](https://github.com/okd-project/okd) | Apache 2.0 | OpenShift | [[69]](#references) |
| OneKE | OpenNebula | [GitHub](https://github.com/OpenNebula/one-apps) | Apache 2.0 | rke2 | [[70]](#references) |
| RKE2 | Rancher | [GitHub](https://github.com/rancher/rke2) | Apache 2.0 | | |
| SIGHUP | | [GitHub](https://github.com/sighupio/distribution) | BSD 3-Clause | | |
| TALM | Cosystack | [GitHub](https://github.com/cozystack/talm) | Apache 2.0 | Talos Linux | |
| tarook | | [GitHub](https://github.com/alasca-association/tarook) | Apache 2.0 | Terraform / Opentofu | |
| Welkin | Elastisys | [GitHub](https://github.com/elastisys/welkin) | Apache 2.0 | CAPI | |

---

## Other Useful Projects

| Name | URL |
|------|-----|
| Karpenter (AWS) | [Website](https://karpenter.sh/) / [Article](https://medium.com/israeli-tech-radar/karpenter-and-the-future-of-kubernetes-4ab7428b7f87) |
| Flatcar | [Website](https://www.flatcar.org/docs/latest/#getting-started) |
| KubeEdge | [GitHub](https://github.com/kubeedge/kubeedge) |

---

## References

1. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 9 (canonical kubernetes)
2. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 8 (lima-vm) - colima
3. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 13 (crc)
4. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 10 (Desktop-Kubernetes)
5. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 3 (Docker desktop)
6. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 7 (k3d)
7. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 1 (kind)
8. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 12 (kubefire)
9. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 8 (lima-vm)
10. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 2 (microk8s)
11. [FR] [Installer MicroK8s dans WSL 2](https://blog.zwindler.fr/2020/06/01/installer-microk8s-dans-wsl-2/)
12. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 6 (Minikube)
13. [FR] [Minikube sur Hyper-V - Part 2 - Troubleshooting de l'installation](https://blog.zwindler.fr/2018/10/02/minikube-sur-hyper-v-part-2-troubleshooting-de-linstallation/)
14. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 13 (CRC) - Minishift
15. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 5 (Orbstack)
16. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 4 (Rancher Desktop)
17. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 11 (Alvistack Vagrant-kubernetes)
18. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 37 (Crossplane)
19. [Step-by-step guide to working with Crossplane and Kubernetes](https://www.techtarget.com/searchitoperations/tutorial/Step-by-step-guide-to-working-with-Crossplane-and-Kubernetes)
20. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 24 (kOps) - Kube-hetzner
21. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 33 (Kubernetes ClusterAPI)
22. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 32 (Kubespray)
23. [FR] [Installer Kubernetes avec Kubespray (Ansible)](https://blog.zwindler.fr/2017/12/05/installer-kubernetes-kubespray-ansible/)
24. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 34 (OpenTofu)
25. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 36 (Pulumi)
26. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 35 (typhoon)
27. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 47 (k3k)
28. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 46 (vcluster)
29. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 40 (elemental)
30. [FR] [K3OS - Le reboot de RancherOS à la sauce K3S](https://blog.zwindler.fr/2020/12/08/k3os-le-reboot-de-rancheros-a-la-sauce-k3s/)
31. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 39 (Kairos Linux)
32. [FR] [Kubernetes avec RancherOS et RKE - Partie 2](https://blog.zwindler.fr/2020/11/30/kubernetes-avec-rancheros-et-rke-partie-2/)
33. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 38 (Talos Linux)
34. [FR] [Talos Linux](https://une-tasse-de.cafe/blog/talos/)
35. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 37 (Crossplane) - AKS
36. [FR] [J'ai testé pour vous AKS, la plateforme Kubernetes managée d'Azure](https://blog.zwindler.fr/2018/12/18/jai-teste-pour-vous-aks-la-plateforme-kubernetes-managee-dazure/)
37. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 14 (Civo)
38. [FR] [Civo - Du Kubernetes managé à partir de 4€/mois, vraiment?](https://blog.zwindler.fr/2021/07/16/civo-du-kubernetes-manage-a-partir-de-4-mois-vraiment/)
39. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 44 (KKP) - DOKS
40. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 18 (EKS)
41. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 34 (OpenTofu) - GKE
42. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 17 (Kapsule)
43. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 17 (Kosmos)
44. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 45 (Gardener) - LeafCloud
45. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 36 (MKS)
46. [FR] [J'ai testé pour vous l'offre Kubernetes as a Service d'OVH](https://blog.zwindler.fr/2019/07/09/jai-teste-pour-vous-loffre-kubernetes-as-a-service-dovh/)
47. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 16 (OKE)
48. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 30 (Openshift) - Redhat Openshift cloud
49. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 15 (SKS)
50. [FR] [Test de SKS, le Kubernetes managé chez Exoscale](https://blog.zwindler.fr/2021/05/03/test-de-sks-le-kubernetes-manage-chez-exoscale/)
51. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 45 (Gardener)
52. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 41 (k0smotron) - k0rdent
53. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 41 (k0smotron) - Kamaji
54. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 44 (Kubermatic Kubernetes Platform)
55. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 42 (Omni)
56. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 43 (Rancher)
57. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 50 (By hand, using binaries)
58. [FR] [Démystifions Kubernetes](https://github.com/zwindler/demystifions-kubernetes)
59. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Introduction and Chapter 50 - Kubernetes the hard way
60. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 49 (KwoK)
61. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 18 (EKS) - EKS Anywhere
62. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 48 (Harvester)
63. [FR] [Test Rancher Labs Harvester HCI](https://blog.zwindler.fr/2023/01/24/test-rancher-labs-harvester-hci/)
64. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 9 (canonical Kubernetes) - Juju
65. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 23 (k0s)
66. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 41 (k0smotron)
67. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 21 (k3s)
68. [FR] [K3S et Cilium - Rapide et facile](https://blog.zwindler.fr/2023/09/01/k3s-et-cilium-rapide-et-facile/)
69. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 22 (k3sup)
70. [FR] [Test K8E](https://blog.zwindler.fr/2025/09/19/test-k8e/)
71. [FR] [Test K8S-TEW](https://blog.zwindler.fr/2025/05/26/test-k8s-tew/)
72. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 24 (Kops)
73. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 19 (kubeadm w/ CLI)
74. [FR] [Installer un cluster Kubernetes sur des VM CentOS](https://blog.zwindler.fr/2017/06/07/installer-cluster-kubernetes-vm-centos/)
75. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 20 (kubeadm w/ ClusterConfiguration)
76. [FR] [KubeadmCfg - Introduction à l'API Kubeadm](https://blog.zwindler.fr/2023/12/17/kubeadmcfg-introduction-api-kubeadm/)
77. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 26 (KubeKey)
78. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 28 (KubeMarine)
79. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 25 (KubeOne)
80. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 27 (Kurl)
81. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 31 (Magnum)
82. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 30 (OKD)
83. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Chapter 29 (OneKE)
84. [FR] "Kubernetes - 50 solutions pour les postes de développement et les clusters de production" - Mentioned in Chapter 40 (Elemental) - RKE2

---

## License

This document is shared under the [CC BY-SA 4.0 (Attribution - Share Alike)](https://creativecommons.org/licenses/by-sa/4.0/deed.fr) license.
