# 101 Ways to Deploy Kubernetes

A comprehensive list of ways to deploy Kubernetes, organized by deployment type.  

---

## Desktop

| Name | Publisher / Project | URL | Based on | External References |
|------|---------------------|-----|----------|---------------------|
| canonical kubernetes (snap) | Canonical | [GitHub](https://github.com/kube-hetzner/terraform-hcloud-kube-hetzner) | | [[1]](#references) |
| colima | | [GitHub](https://github.com/abiosoft/colima) | lima-vm | |
| crc (openshift 4 on a desktop) | Openshift | [GitHub](https://github.com/crc-org/crc) | OpenShift | [[2]](#references) |
| Desktop-Kubernetes | | [GitHub](https://github.com/aceeric/desktop-kubernetes) | | [[3]](#references) |
| Docker desktop | Docker (Mirantis) | [Website](https://www.docker.com/products/docker-desktop/) | kubeadm, kind | [[4]](#references) |
| k3d | Rancher | [GitHub](https://github.com/k3d-io/k3d) | k3s | [[5]](#references) |
| kind | | [Website](https://kind.sigs.k8s.io/) | kubeadm | [[6]](#references) |
| kubefire | | [GitHub](https://github.com/innobead/kubefire) | kubeadm, k3s, rke2, k0s | [[7]](#references) |
| lima-vm | | [GitHub](https://github.com/lima-vm/lima/blob/master/examples/k8s.yaml) | kubeadm, k3s, rke2 | [[8]](#references) |
| microk8s | Canonical | [Website](https://microk8s.io/) | | [[9]](#references) [[10]](#references) |
| Minikube | | [Website](https://kubernetes.io/fr/docs/tasks/tools/install-minikube/) | | [[11]](#references) [[12]](#references) |
| Minishift | Redhat | [GitHub](https://github.com/minishift/minishift) | OpenShift | |
| mykube | | [GitHub](https://github.com/guyst16/mykube) | kubeadm | |
| Oracle Cloud Native Environment | Oracle | [GitHub](https://github.com/oracle-cne/ocne) | | |
| Orbstack | | [Website](https://orbstack.dev/) | | [[13]](#references) |
| Rancher Desktop | Rancher | [Website](https://rancherdesktop.io/) | LimaVM and k3s | [[14]](#references) |

---

## IaC (Infrastructure as Code)

| Name | Publisher / Project | URL | Based on | External References |
|------|---------------------|-----|----------|---------------------|
| aks-engine (abandoned) | Azure | [GitHub](https://github.com/Azure/aks-engine) | | |
| Alvistack Ansible | Alvistack | ansible-collection-kubernetes | kubeadm | |
| Alvistack Vagrant-kubernetes | Alvistack | [GitHub](https://github.com/alvistack/vagrant-kubernetes) | kubeadm | [[15]](#references) |
| Crossplane | | [Website](https://www.crossplane.io/) | | [[16]](#references) [[17]](#references) |
| Kube-hetzner | Hetzner | [GitHub](https://github.com/kube-hetzner/terraform-hcloud-kube-hetzner) | Terraform / OpenTofu | |
| Kubernetes ClusterAPI | | [Website](https://cluster-api.sigs.k8s.io/) | | [[18]](#references) |
| Kubespray | | [GitHub](https://github.com/kubernetes-sigs/kubespray) | kubeadm | [[19]](#references) [[20]](#references) |
| OpenTofu | | [Website](https://opentofu.org/) | | [[21]](#references) |
| Pulumi | | [Website](https://www.pulumi.com/kubernetes/) | | [[22]](#references) |
| Puppet | | [Puppet Forge](https://forge.puppet.com/modules/puppetlabs/kubernetes/readme) | Terraform / OpenTofu | |
| typhoon | | [GitHub](https://github.com/poseidon/typhoon) | Terraform / OpenTofu | [[23]](#references) |

---

## Kubernetes in Kubernetes

| Name | Publisher / Project | URL | Based on | External References |
|------|---------------------|-----|----------|---------------------|
| k3k | Rancher | [GitHub](https://github.com/rancher/k3k) | k3s | [[24]](#references) |
| vcluster | loft.sh | [Website](https://www.vcluster.com/docs/what-are-virtual-clusters) | kubeadm, k3s or k0s | [[25]](#references) |

---

## Kubernetes OS

| Name | Publisher / Project | URL | Based on | External References |
|------|---------------------|-----|----------|---------------------|
| elemental (ex k3os) | Rancher | [Website](https://elemental.docs.rancher.com/) | | [[26]](#references) [[27]](#references) |
| Kairos Linux | Spectro cloud | [GitHub](https://github.com/kairos-io/kairos) | | [[28]](#references) |
| RKE (abandoned) | Rancher | [Website](https://rke.docs.rancher.com/) | | [[29]](#references) |
| Talos Linux | SideroLabs | [Website](https://www.talos.dev/v1.6/introduction/quickstart/) | | [[30]](#references) [[31]](#references) |

---

## Managed

| Name | Publisher / Project | URL | Based on | External References |
|------|---------------------|-----|----------|---------------------|
| AKS | Azure | [Website](https://azure.microsoft.com/fr-fr/products/kubernetes-service) | | [[32]](#references) |
| Alibaba Cloud Container Service for Kubernetes (ACK) | Alibaba Cloud | [Website](https://www.alibabacloud.com/fr/product/kubernetes) | | |
| Civo | | [Website](https://www.civo.com/) | k3s or Talos Linux | [[33]](#references) [[34]](#references) |
| Clever Kubernetes Engine (CKE) | Clever Cloud | [Website](https://www.clever-cloud.com/product/kubernetes/) | | |
| DOKS | Digital Ocean | [Website](https://www.digitalocean.com/products/kubernetes/) | | |
| EKS | AWS | [Website](https://aws.amazon.com/fr/eks/) | | [[35]](#references) |
| GKE | Google Cloud Platform | [Website](https://cloud.google.com/kubernetes-engine?hl=fr) | | |
| Gridscale Managed Kubernetes (GSK) | | [Website](https://gridscale.io/en/products/kubernetes/) | | |
| IBM Cloud (IKS) | IBM Cloud | [Website](https://www.ibm.com/cloud/container-service/) | | |
| IONOS Kubernetes Service | IONOS | [Website](https://cloud.ionos.com/managed/kubernetes) | | |
| Kapsule | Scaleway | [Website](https://www.scaleway.com/en/kubernetes-kapsule/) | | [[36]](#references) |
| Kosmos | Scaleway | [Website](https://www.scaleway.com/fr/kubernetes-kosmos/) | | [[37]](#references) |
| LeafCloud | | [Website](https://www.leaf.cloud/) | Gardener | |
| Linode Kubernetes Engine (LKE) | Linode | [Website](https://www.linode.com/docs/kubernetes/) | | |
| MetaKube | SysEleven | [Website](https://www.syseleven.de/en/) | | |
| MKS | OVHcloud | [Website](https://www.ovhcloud.com/fr/public-cloud/kubernetes/) | | [[38]](#references) [[39]](#references) |
| Oracle Cloud Infrastructure Container Engine for Kubernetes (OKE) | Oracle Cloud Infrastructure | [Website](https://www.oracle.com/fr/cloud/cloud-native/container-engine-kubernetes/) | | [[40]](#references) |
| Redhat Openshift cloud | Redhat | [Website](https://www.redhat.com/fr/technologies/cloud-computing/openshift/openshift-cloud-services) | Openshift | |
| SKS | Exoscale | [Website](https://community.exoscale.com/documentation/sks/overview/) | | [[41]](#references) [[42]](#references) |
| VKE | Vultr | [Website](https://www.vultr.com/kubernetes/) | | |

---

## Management Platform

| Name | Publisher / Project | URL | Based on | External References |
|------|---------------------|-----|----------|---------------------|
| Gardener | | [Website](https://gardener.cloud/) | | [[43]](#references) |
| hypershift | redhat | [GitHub](https://github.com/openshift/hypershift) | Openshift/OKD | |
| k0rdent | Mirantis | [GitHub](https://github.com/k0rdent/kcm) | k0smotron and cluster API | |
| Kamaji | Clastix | [Website](https://kamaji.clastix.io/getting-started/#join-worker-nodes) | kubeadm and Cluster API | |
| KubeClipper | | [GitHub](https://github.com/kubeclipper/kubeclipper) | | |
| Kubermatic Kubernetes Platform | Kubermatic | [GitHub](https://github.com/kubermatic/kubermatic) | | [[44]](#references) |
| Omni | SideroLabs | [Website](https://www.siderolabs.com/platform/saas-for-kubernetes/) | Talos Linux | [[45]](#references) |
| Rancher | Rancher | [Website](https://ranchermanager.docs.rancher.com/) | | [[46]](#references) |
| Tanzu | VMware | [Website](https://docs.vmware.com/en/VMware-Tanzu-Application-Platform/index.html) | | |

---

## Other

| Name | Publisher / Project | URL | Based on | External References |
|------|---------------------|-----|----------|---------------------|
| By hand, using containers | | [GitHub](https://github.com/kubernetes/registry.k8s.io) | | |
| By hand, using binaries | | [GitHub](https://github.com/kubernetes/kubernetes) | | [[47]](#references) [[48]](#references) |
| Devops playgrounds | | [Website](https://labs.iximiuz.com/playgrounds) | | |
| Kubernetes the hard way | | [GitHub](https://github.com/kelseyhightower/kubernetes-the-hard-way) | | |
| Kubernetes the hard way w/ Terraform | | [GitHub](https://github.com/aidanSoles/kubernetes-the-hard-way-terraform) | Terraform / OpenTofu | |
| KwoK | | [Website](https://kwok.sigs.k8s.io/) | | [[49]](#references) |
| Play with k8s | | [Website](https://labs.play-with-k8s.com/) | | |

---

## Selfhosted

| Name | Publisher / Project | URL | Based on | External References |
|------|---------------------|-----|----------|---------------------|
| EKS Anywhere | AWS | [Website](https://anywhere.eks.amazonaws.com/docs/getting-started/overview/) | EKS | |
| Harvester | Rancher | [Website](https://harvesterhci.io/) | | [[50]](#references) [[51]](#references) |
| Hepto | | [Forge Tedomum](https://forge.tedomum.net/acides/hepto) | | |
| Juju | Canonical | [Website](https://juju.is/) | | |
| k0s | Mirantis | [Website](https://k0sproject.io/) | | [[52]](#references) |
| k0smotron | Mirantis | [Website](https://k0smotron.io/) | k0s and clusterAPI | [[53]](#references) |
| k3s | Rancher | [Website](https://k3s.io/) | | [[54]](#references) [[55]](#references) |
| k3sup | | [GitHub](https://github.com/alexellis/k3sup) | k3s | [[56]](#references) |
| k8e - Kubernetes easy engine | | [GitHub](https://github.com/xiaods/k8e) | k3s | [[57]](#references) |
| K8S The Easy way | | [GitHub](https://github.com/darxkies/k8s-tew) | | [[58]](#references) |
| Kops | | [GitHub](https://github.com/kubernetes/kops) | kubeadm | [[59]](#references) |
| kubeadm w/ CLI | | [Website](https://kubernetes.io/fr/docs/setup/production-environment/tools/kubeadm/install-kubeadm/) | | [[60]](#references) [[61]](#references) |
| kubeadm w/ ClusterConfiguration | | [Website](https://kubernetes.io/fr/docs/setup/production-environment/tools/kubeadm/install-kubeadm/) | | [[62]](#references) [[63]](#references) |
| Kubean | | [GitHub](https://github.com/kubean-io/kubean) | Kubespray | |
| KubeKey | | [GitHub](https://github.com/kubesphere/kubekey) | kubeadm / k3s | [[64]](#references) |
| KubeMarine | | [GitHub](https://github.com/Netcracker/KubeMarine) | Kubeadm | [[65]](#references) |
| KubeOne | Kubermatic | [Website](https://www.kubermatic.com/products/kubermatic-kubeone/) | Kubeadm / ClusterAPI | [[66]](#references) |
| KubeSolo | portainer.io | [GitHub](https://github.com/portainer/kubesolo) | k3s | |
| Kurl | ReplicatedHQ | [GitHub](https://github.com/replicatedhq/kurl) | Kubeadm | [[67]](#references) |
| Magnum | OpenStack | [Website](https://docs.openstack.org/magnum/latest/user/index.html) | | [[68]](#references) |
| MKE (Mirantis Kubernetes Engine) | Mirantis | [Website](https://docs.mirantis.com/mke4k/latest/) | k0s | |
| NKP (Nutanix Kubernetes Platform) | Nutanix | [Website](https://www.nutanix.com/products/kubernetes-management-platform) | | |
| OKD (open source openshift) | Redhat | [Website](https://www.okd.io/#what-is-okd) | OpenShift | [[69]](#references) |
| OneKE | OpenNebula | [Website](https://docs.opennebula.io/6.8/marketplace/appliances/oneke.html) | rke2 | [[70]](#references) |
| RKE2 | Rancher | [Website](https://docs.rke2.io/) | | |
| SIGHUP | | [GitHub](https://github.com/sighupio/distribution) | | |
| TALM | Cosystack | [GitHub](https://github.com/cozystack/talm) | Talos Linux | |
| tarook | | [Website](https://tarook.cloud/en/) | Terraform / Opentofu | |
| Welkin | Elastisys | [Website](https://elastisys.io/welkin) | CAPI | |

---

## Other Useful Projects

| Name | URL |
|------|-----|
| Karpenter (AWS) | [Website](https://karpenter.sh/) / [Article](https://medium.com/israeli-tech-radar/karpenter-and-the-future-of-kubernetes-4ab7428b7f87) |
| Flatcar | [Website](https://www.flatcar.org/docs/latest/#getting-started) |
| KubeEdge | [GitHub](https://github.com/kubeedge/kubeedge) |

---

## References

1. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 9 (canonical kubernetes)
2. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 13 (crc)
3. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 10 (Desktop-Kubernetes)
4. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 3 (Docker desktop)
5. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 7 (k3d)
6. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 1 (kind)
7. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 12 (kubefire)
8. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 8 (lima-vm)
9. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 2 (microk8s)
10. [FR] [Installer MicroK8s dans WSL 2](https://blog.zwindler.fr/2020/06/01/installer-microk8s-dans-wsl-2/)
11. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 6 (Minikube)
12. [FR] [Minikube sur Hyper-V - Part 2 - Troubleshooting de l'installation](https://blog.zwindler.fr/2018/10/02/minikube-sur-hyper-v-part-2-troubleshooting-de-linstallation/)
13. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 5 (Orbstack)
14. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 4 (Rancher Desktop)
15. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 11 (Alvistack Vagrant-kubernetes)
16. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 37 (Crossplane)
17. [Step-by-step guide to working with Crossplane and Kubernetes](https://www.techtarget.com/searchitoperations/tutorial/Step-by-step-guide-to-working-with-Crossplane-and-Kubernetes)
18. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 33 (Kubernetes ClusterAPI)
19. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 32 (Kubespray)
20. [FR] [Installer Kubernetes avec Kubespray (Ansible)](https://blog.zwindler.fr/2017/12/05/installer-kubernetes-kubespray-ansible/)
21. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 34 (OpenTofu)
22. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 36 (Pulumi)
23. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 35 (typhoon)
24. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 47 (k3k)
25. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 46 (vcluster)
26. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 40 (elemental)
27. [FR] [K3OS - Le reboot de RancherOS à la sauce K3S](https://blog.zwindler.fr/2020/12/08/k3os-le-reboot-de-rancheros-a-la-sauce-k3s/)
28. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 39 (Kairos Linux)
29. [FR] [Kubernetes avec RancherOS et RKE - Partie 2](https://blog.zwindler.fr/2020/11/30/kubernetes-avec-rancheros-et-rke-partie-2/)
30. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 38 (Talos Linux)
31. [FR] [Talos Linux](https://une-tasse-de.cafe/blog/talos/)
32. [FR] [J'ai testé pour vous AKS, la plateforme Kubernetes managée d'Azure](https://blog.zwindler.fr/2018/12/18/jai-teste-pour-vous-aks-la-plateforme-kubernetes-managee-dazure/)
33. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 14 (Civo)
34. [FR] [Civo - Du Kubernetes managé à partir de 4€/mois, vraiment?](https://blog.zwindler.fr/2021/07/16/civo-du-kubernetes-manage-a-partir-de-4-mois-vraiment/)
35. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 18 (EKS)
36. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 17 (Kapsule)
37. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 17 (Kosmos)
38. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 36 (MKS)
39. [FR] [J'ai testé pour vous l'offre Kubernetes as a Service d'OVH](https://blog.zwindler.fr/2019/07/09/jai-teste-pour-vous-loffre-kubernetes-as-a-service-dovh/)
40. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 16 (OKE)
41. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 15 (SKS)
42. [FR] [Test de SKS, le Kubernetes managé chez Exoscale](https://blog.zwindler.fr/2021/05/03/test-de-sks-le-kubernetes-manage-chez-exoscale/)
43. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 45 (Gardener)
44. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 44 (Kubermatic Kubernetes Platform)
45. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 42 (Omni)
46. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 43 (Rancher)
47. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 50 (By hand, using binaries)
48. [FR] [Démystifions Kubernetes](https://github.com/zwindler/demystifions-kubernetes)
49. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 49 (KwoK)
50. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 48 (Harvester)
51. [FR] [Test Rancher Labs Harvester HCI](https://blog.zwindler.fr/2023/01/24/test-rancher-labs-harvester-hci/)
52. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 23 (k0s)
53. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 41 (k0smotron)
54. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 21 (k3s)
55. [FR] [K3S et Cilium - Rapide et facile](https://blog.zwindler.fr/2023/09/01/k3s-et-cilium-rapide-et-facile/)
56. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 22 (k3sup)
57. [FR] [Test K8E](https://blog.zwindler.fr/2025/09/19/test-k8e/)
58. [FR] [Test K8S-TEW](https://blog.zwindler.fr/2025/05/26/test-k8s-tew/)
59. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 24 (Kops)
60. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 19 (kubeadm w/ CLI)
61. [FR] [Installer un cluster Kubernetes sur des VM CentOS](https://blog.zwindler.fr/2017/06/07/installer-cluster-kubernetes-vm-centos/)
62. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 20 (kubeadm w/ ClusterConfiguration)
63. [FR] [KubeadmCfg - Introduction à l'API Kubeadm](https://blog.zwindler.fr/2023/12/17/kubeadmcfg-introduction-api-kubeadm/)
64. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 26 (KubeKey)
65. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 28 (KubeMarine)
66. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 25 (KubeOne)
67. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 27 (Kurl)
68. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 31 (Magnum)
69. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 30 (OKD)
70. [FR] ["Kubernetes - 50 solutions pour les postes de développement et les clusters de production"](https://www.eyrolles.com/Informatique/Livre/kubernetes-9782416022647/) - Chapter 29 (OneKE)

---

## License

This document is shared under the [CC BY-SA 4.0 (Attribution - Share Alike)](https://creativecommons.org/licenses/by-sa/4.0/deed.fr) license.
