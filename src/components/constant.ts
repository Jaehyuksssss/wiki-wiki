export interface LectureDetailParams {
  id: number
  title: string
  period: string
  price: string
  date: string
  contents: string
}

export const LectureDetail: LectureDetailParams[] = [
  {
    id: 0,
    title: '클라우드 기술 필수',
    period: '2일',
    price: '2,000불',
    date: '2023년 6월 1-2일',
    contents:
      '이 과정은 Nutanix 관리자가 그래픽 사용자 인터페이스(GUI) 및 명령 줄 인터페이스(CLI)를 사용하여 수행하는 많은 작업을 다룹니다. 또한 Nutanix 클러스터의 장애 조치 및 자가 복구 기능에 대한 통찰력을 제공하고 일반적인 문제를 해결하기위한 팁을 제공하며 Nutanix 지원과 상호 작용할 때 정보를 수집하기위한 지침을 제공합니다.본 교육에는 “Nutanix Certified Professional - Multicloud Infrastructure (NCP-MCI)” 자격 시험을 볼 수 있는 바우처(200불)가 포함되어 있습니다.',
  },
  {
    id: 1,
    title: 'Nutanix Enterprise Cloud Administration 5.15',
    period: '3일',
    price: '3,000불',
    date: '2023년 7월 10-12일',
    contents:
      '본 과정은 클라우드 컴퓨팅의 개념과 관련 기술에 대한 핵심 지식들을 단기간에 학습할 수 있습니다. 가상화 기술, 컨테이너, 쿠버네티스 등의 클라우드 핵심 기술들을 배우고 간단한 실습을 통해 실제 경험함으로써 클라우드 서비스 전반적인 기술들을 학습합니다.',
  },
  {
    id: 2,
    title: 'Kubernetes 기본 핵심',
    period: '2일',
    price: '1,500불',
    date: '2023년 8월 8-9일',
    contents:
      '본 과정은 클라우드 컴퓨팅의 개념과 관련 기술에 대한 핵심 지식들을 단기간에 학습할 수 있습니다. 가상화 기술, 컨테이너, 쿠버네티스 등의 클라우드 핵심 기술들을 배우고 간단한 실습을 통해 실제 경험함으로써 클라우드 서비스 전반적인 기술들을 학습합니다.',
  },
  {
    id: 3,
    title: 'Kubernetes 기본 핵심',
    period: '2일',
    price: '2,000불',
    date: '2023년 6월 1-2일',
    contents:
      'Kubernetes의 개념과 구성요소에 대해 학습하고, Kubernetes Cluster를 배포하는 방법을 이해합니다. Kubernetes 구성요소와 동작방식을 학습합니다.학습내용 : Kubernetes, Cluster, Master, Worker, YAML, kubectl 명령어 등',
  },
  {
    id: 4,
    title: '클라우드 기반 서비스 운영 관리(AWS)',
    period: '3일',
    price: '3,000불',
    date: '2023년 7월 10-12일',
    contents:
      '1. AWS 리소스 부하 분산AWS에서 네트워크 트래픽을 분산하는 서비스에 대해서 학습합니다.학습 내용 : 로드밸런서, Elastic Load Balancer, Health Check2. AWS 고가용성 관련 구성AWS에서 고가용성 환경을 구성하기 위한 서비스 및 방법에 대해서 학습합니다.학습 내용 : AutoScailing, AutoScaling group3. AWS 서비스 모니터링 AWS에서 사용되는 리소스를 모니터링하는 방법에 대해서 학습합니다.',
  },
  {
    id: 5,
    title: 'Kubernetes 기본 핵심',
    period: '2일',
    price: '1,500불',
    date: '2023년 8월 8-9일',
    contents:
      '본 과정은 클라우드 컴퓨팅의 개념과 관련 기술에 대한 핵심 지식들을 단기간에 학습할 수 있습니다. 가상화 기술, 컨테이너, 쿠버네티스 등의 클라우드 핵심 기술들을 배우고 간단한 실습을 통해 실제 경험함으로써 클라우드 서비스 전반적인 기술들을 학습합니다.',
  },
  {
    id: 6,
    title: '클라우드 기술 필수',
    period: '2일',
    price: '2,000불',
    date: '2023년 6월 1-2일',
    contents:
      '이 과정은 Nutanix 관리자가 그래픽 사용자 인터페이스(GUI) 및 명령 줄 인터페이스(CLI)를 사용하여 수행하는 많은 작업을 다룹니다. 또한 Nutanix 클러스터의 장애 조치 및 자가 복구 기능에 대한 통찰력을 제공하고 일반적인 문제를 해결하기위한 팁을 제공하며 Nutanix 지원과 상호 작용할 때 정보를 수집하기위한 지침을 제공합니다.본 교육에는 “Nutanix Certified Professional - Multicloud Infrastructure (NCP-MCI)” 자격 시험을 볼 수 있는 바우처(200불)가 포함되어 있습니다.',
  },
  {
    id: 7,
    title: 'Nutanix Enterprise Cloud Administration 5.15',
    period: '3일',
    price: '3,000불',
    date: '2023년 7월 10-12일',
    contents:
      '본 과정은 클라우드 컴퓨팅의 개념과 관련 기술에 대한 핵심 지식들을 단기간에 학습할 수 있습니다. 가상화 기술, 컨테이너, 쿠버네티스 등의 클라우드 핵심 기술들을 배우고 간단한 실습을 통해 실제 경험함으로써 클라우드 서비스 전반적인 기술들을 학습합니다.',
  },
  {
    id: 8,
    title: 'Kubernetes 기본 핵심',
    period: '2일',
    price: '1,500불',
    date: '2023년 8월 8-9일',
    contents:
      '본 과정은 클라우드 컴퓨팅의 개념과 관련 기술에 대한 핵심 지식들을 단기간에 학습할 수 있습니다. 가상화 기술, 컨테이너, 쿠버네티스 등의 클라우드 핵심 기술들을 배우고 간단한 실습을 통해 실제 경험함으로써 클라우드 서비스 전반적인 기술들을 학습합니다.',
  },
  {
    id: 9,
    title: '클라우드 기술 필수',
    period: '2일',
    price: '2,000불',
    date: '2023년 6월 1-2일',
    contents:
      '이 과정은 Nutanix 관리자가 그래픽 사용자 인터페이스(GUI) 및 명령 줄 인터페이스(CLI)를 사용하여 수행하는 많은 작업을 다룹니다. 또한 Nutanix 클러스터의 장애 조치 및 자가 복구 기능에 대한 통찰력을 제공하고 일반적인 문제를 해결하기위한 팁을 제공하며 Nutanix 지원과 상호 작용할 때 정보를 수집하기위한 지침을 제공합니다.본 교육에는 “Nutanix Certified Professional - Multicloud Infrastructure (NCP-MCI)” 자격 시험을 볼 수 있는 바우처(200불)가 포함되어 있습니다.',
  },
  {
    id: 10,
    title: 'Nutanix Enterprise Cloud Administration 5.15',
    period: '3일',
    price: '3,000불',
    date: '2023년 7월 10-12일',
    contents:
      '본 과정은 클라우드 컴퓨팅의 개념과 관련 기술에 대한 핵심 지식들을 단기간에 학습할 수 있습니다. 가상화 기술, 컨테이너, 쿠버네티스 등의 클라우드 핵심 기술들을 배우고 간단한 실습을 통해 실제 경험함으로써 클라우드 서비스 전반적인 기술들을 학습합니다.',
  },
  {
    id: 11,
    title: 'Kubernetes 기본 핵심',
    period: '2일',
    price: '1,500불',
    date: '2023년 8월 8-9일',
    contents:
      '본 과정은 클라우드 컴퓨팅의 개념과 관련 기술에 대한 핵심 지식들을 단기간에 학습할 수 있습니다. 가상화 기술, 컨테이너, 쿠버네티스 등의 클라우드 핵심 기술들을 배우고 간단한 실습을 통해 실제 경험함으로써 클라우드 서비스 전반적인 기술들을 학습합니다.',
  },
  {
    id: 12,
    title: '클라우드 기술 필수',
    period: '2일',
    price: '2,000불',
    date: '2023년 6월 1-2일',
    contents:
      '이 과정은 Nutanix 관리자가 그래픽 사용자 인터페이스(GUI) 및 명령 줄 인터페이스(CLI)를 사용하여 수행하는 많은 작업을 다룹니다. 또한 Nutanix 클러스터의 장애 조치 및 자가 복구 기능에 대한 통찰력을 제공하고 일반적인 문제를 해결하기위한 팁을 제공하며 Nutanix 지원과 상호 작용할 때 정보를 수집하기위한 지침을 제공합니다.본 교육에는 “Nutanix Certified Professional - Multicloud Infrastructure (NCP-MCI)” 자격 시험을 볼 수 있는 바우처(200불)가 포함되어 있습니다.',
  },
  {
    id: 13,
    title: 'Nutanix Enterprise Cloud Administration 5.15',
    period: '3일',
    price: '3,000불',
    date: '2023년 7월 10-12일',
    contents:
      '본 과정은 클라우드 컴퓨팅의 개념과 관련 기술에 대한 핵심 지식들을 단기간에 학습할 수 있습니다. 가상화 기술, 컨테이너, 쿠버네티스 등의 클라우드 핵심 기술들을 배우고 간단한 실습을 통해 실제 경험함으로써 클라우드 서비스 전반적인 기술들을 학습합니다.',
  },
  {
    id: 14,
    title: 'Kubernetes 기본 핵심',
    period: '2일',
    price: '1,500불',
    date: '2023년 8월 8-9일',
    contents:
      '본 과정은 클라우드 컴퓨팅의 개념과 관련 기술에 대한 핵심 지식들을 단기간에 학습할 수 있습니다. 가상화 기술, 컨테이너, 쿠버네티스 등의 클라우드 핵심 기술들을 배우고 간단한 실습을 통해 실제 경험함으로써 클라우드 서비스 전반적인 기술들을 학습합니다.',
  },
]
