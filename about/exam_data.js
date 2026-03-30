// 软考系统架构设计师模拟试卷 - 试题数据
// 注意：本文件仅包含试题，不含答案
// 生成时间：2026-03-30

const examData = {
  exam_id: "ruankao_20260330_001",
  exam_name: "软考系统架构设计师模拟试卷",
  exam_type: "系统架构设计师",
  total_points: 225,
  duration_minutes: 150,
  generated_at: "2026-03-30T10:00:00Z",

  // 第一部分：选择题（75 题，每题 1 分，共 75 分）
  mcq: {
    part: "选择题",
    total_questions: 75,
    total_points: 75,
    instructions: "共 75 题，每题 1 分，共 75 分。请从 A、B、C、D 四个选项中选择一个正确答案。",
    questions: [
      {
        id: 1,
        question: "在软件生命周期中，确定系统必须完成哪些工作、对系统提出完整、准确、清晰、具体的要求属于哪个阶段？",
        options: {
          A: "概要设计",
          B: "需求分析",
          C: "详细设计",
          D: "编码实现"
        },
        knowledge_point: "软件工程 - 软件生命周期",
        difficulty: "easy"
      },
      {
        id: 2,
        question: "下列关于软件测试的叙述中，正确的是？",
        options: {
          A: "测试的目的是证明程序没有错误",
          B: "测试应该由开发人员自己完成",
          C: "测试的目的是发现程序中的错误",
          D: "经过测试的程序可以保证没有错误"
        },
        knowledge_point: "软件工程 - 软件测试",
        difficulty: "easy"
      },
      {
        id: 3,
        question: "在 CMMI 能力成熟度模型中，从低到高分为 5 个等级，其中最高级别是？",
        options: {
          A: "管理级",
          B: "定义级",
          C: "量化管理级",
          D: "优化级"
        },
        knowledge_point: "软件工程-CMMI",
        difficulty: "easy"
      },
      {
        id: 4,
        question: "软件维护可分为改正性维护、适应性维护、完善性维护和预防性维护。其中占比最大的是？",
        options: {
          A: "改正性维护",
          B: "适应性维护",
          C: "完善性维护",
          D: "预防性维护"
        },
        knowledge_point: "软件工程 - 软件维护",
        difficulty: "medium"
      },
      {
        id: 5,
        question: "在软件需求分析方法中，数据流图（DFD）用于描述系统的？",
        options: {
          A: "数据结构",
          B: "加工处理",
          C: "控制流程",
          D: "功能模型"
        },
        knowledge_point: "软件工程 - 需求分析",
        difficulty: "medium"
      },
      {
        id: 6,
        question: "关于白盒测试和黑盒测试，下列说法错误的是？",
        options: {
          A: "白盒测试需要了解程序内部结构",
          B: "黑盒测试不需要了解程序内部结构",
          C: "白盒测试主要用于系统测试阶段",
          D: "黑盒测试主要用于验收测试阶段"
        },
        knowledge_point: "软件工程 - 测试方法",
        difficulty: "medium"
      },
      {
        id: 7,
        question: "在软件设计中，模块内聚度从低到高排序正确的是？",
        options: {
          A: "偶然内聚<逻辑内聚<时间内聚<过程内聚<通信内聚<顺序内聚<功能内聚",
          B: "逻辑内聚<偶然内聚<时间内聚<过程内聚<通信内聚<顺序内聚<功能内聚",
          C: "偶然内聚<时间内聚<逻辑内聚<过程内聚<通信内聚<顺序内聚<功能内聚",
          D: "偶然内聚<逻辑内聚<过程内聚<时间内聚<通信内聚<顺序内聚<功能内聚"
        },
        knowledge_point: "软件工程 - 模块设计",
        difficulty: "hard"
      },
      {
        id: 8,
        question: "软件配置管理的主要任务不包括？",
        options: {
          A: "版本控制",
          B: "变更控制",
          C: "配置审计",
          D: "性能优化"
        },
        knowledge_point: "软件工程 - 配置管理",
        difficulty: "medium"
      },
      {
        id: 9,
        question: "下列哪种设计模式属于创建型模式？",
        options: {
          A: "观察者模式",
          B: "工厂方法模式",
          C: "适配器模式",
          D: "策略模式"
        },
        knowledge_point: "软件工程 - 设计模式",
        difficulty: "medium"
      },
      {
        id: 10,
        question: "在软件开发中，螺旋模型是在瀑布模型的基础上增加了？",
        options: {
          A: "迭代开发",
          B: "风险分析",
          C: "原型制作",
          D: "增量构建"
        },
        knowledge_point: "软件工程 - 开发模型",
        difficulty: "medium"
      },
      {
        id: 11,
        question: "软件可靠性是指？",
        options: {
          A: "软件在规定时间内无故障运行的概率",
          B: "软件功能满足用户需求的程度",
          C: "软件在异常情况下继续运行的能力",
          D: "软件被修改的容易程度"
        },
        knowledge_point: "软件工程 - 软件质量",
        difficulty: "medium"
      },
      {
        id: 12,
        question: "在软件测试中，边界值分析法属于？",
        options: {
          A: "白盒测试技术",
          B: "黑盒测试技术",
          C: "灰盒测试技术",
          D: "性能测试技术"
        },
        knowledge_point: "软件工程 - 测试用例设计",
        difficulty: "easy"
      },
      {
        id: 13,
        question: "关于软件架构风格，下列说法错误的是？",
        options: {
          A: "分层架构适合大型复杂系统",
          B: "事件驱动架构适合实时系统",
          C: "微服务架构适合小型简单系统",
          D: "管道 - 过滤器架构适合数据处理系统"
        },
        knowledge_point: "软件工程 - 软件架构",
        difficulty: "medium"
      },
      {
        id: 14,
        question: "软件项目进度管理中，关键路径是指？",
        options: {
          A: "项目中最重要的任务序列",
          B: "项目中耗时最长的任务序列",
          C: "项目中风险最高的任务序列",
          D: "项目中成本最高的任务序列"
        },
        knowledge_point: "软件工程 - 项目管理",
        difficulty: "medium"
      },
      {
        id: 15,
        question: "在软件质量保证中，技术评审的主要目的是？",
        options: {
          A: "评估开发人员绩效",
          B: "尽早发现并消除缺陷",
          C: "确定项目进度",
          D: "分配开发任务"
        },
        knowledge_point: "软件工程 - 质量保证",
        difficulty: "easy"
      },
      {
        id: 16,
        question: "OSI 参考模型共有 7 层，从下到上依次是？",
        options: {
          A: "物理层、数据链路层、网络层、传输层、会话层、表示层、应用层",
          B: "物理层、网络层、数据链路层、传输层、会话层、表示层、应用层",
          C: "物理层、数据链路层、传输层、网络层、会话层、表示层、应用层",
          D: "物理层、数据链路层、网络层、会话层、传输层、表示层、应用层"
        },
        knowledge_point: "计算机网络-OSI 模型",
        difficulty: "easy"
      },
      {
        id: 17,
        question: "在 TCP/IP 协议栈中，负责端到端可靠传输的协议是？",
        options: {
          A: "IP",
          B: "UDP",
          C: "TCP",
          D: "ICMP"
        },
        knowledge_point: "计算机网络 - 传输层协议",
        difficulty: "easy"
      },
      {
        id: 18,
        question: "下列 IP 地址中，属于 C 类地址的是？",
        options: {
          A: "10.0.0.1",
          B: "172.16.0.1",
          C: "192.168.1.1",
          D: "224.0.0.1"
        },
        knowledge_point: "计算机网络-IP 地址分类",
        difficulty: "medium"
      },
      {
        id: 19,
        question: "子网掩码 255.255.255.192 对应的 CIDR 表示法是？",
        options: {
          A: "/24",
          B: "/25",
          C: "/26",
          D: "/27"
        },
        knowledge_point: "计算机网络 - 子网划分",
        difficulty: "medium"
      },
      {
        id: 20,
        question: "HTTP 协议默认使用的端口号是？",
        options: {
          A: "21",
          B: "22",
          C: "80",
          D: "443"
        },
        knowledge_point: "计算机网络 - 应用层协议",
        difficulty: "easy"
      },
      {
        id: 21,
        question: "在数据链路层，用于检测帧传输错误的常用方法是？",
        options: {
          A: "奇偶校验",
          B: "海明码",
          C: "循环冗余校验（CRC）",
          D: "校验和"
        },
        knowledge_point: "计算机网络 - 差错控制",
        difficulty: "medium"
      },
      {
        id: 22,
        question: "以太网采用的介质访问控制方法是？",
        options: {
          A: "令牌环",
          B: "CSMA/CD",
          C: "轮询",
          D: "时隙 ALOHA"
        },
        knowledge_point: "计算机网络 - 局域网技术",
        difficulty: "easy"
      },
      {
        id: 23,
        question: "DNS 服务器的主要功能是？",
        options: {
          A: "分配 IP 地址",
          B: "转发数据包",
          C: "域名解析",
          D: "加密传输"
        },
        knowledge_point: "计算机网络-DNS",
        difficulty: "easy"
      },
      {
        id: 24,
        question: "在路由协议中，属于距离向量协议的是？",
        options: {
          A: "OSPF",
          B: "RIP",
          C: "BGP",
          D: "IS-IS"
        },
        knowledge_point: "计算机网络 - 路由协议",
        difficulty: "medium"
      },
      {
        id: 25,
        question: "VLAN 的主要作用是？",
        options: {
          A: "提高网络速度",
          B: "隔离广播域",
          C: "增加网络带宽",
          D: "延长传输距离"
        },
        knowledge_point: "计算机网络-VLAN",
        difficulty: "medium"
      },
      {
        id: 26,
        question: "TCP 协议建立连接采用的机制是？",
        options: {
          A: "一次握手",
          B: "二次握手",
          C: "三次握手",
          D: "四次握手"
        },
        knowledge_point: "计算机网络-TCP 连接",
        difficulty: "easy"
      },
      {
        id: 27,
        question: "下列哪种加密算法属于非对称加密？",
        options: {
          A: "DES",
          B: "AES",
          C: "RSA",
          D: "3DES"
        },
        knowledge_point: "计算机网络 - 网络安全",
        difficulty: "medium"
      },
      {
        id: 28,
        question: "防火墙的主要功能是？",
        options: {
          A: "查杀病毒",
          B: "访问控制",
          C: "数据加密",
          D: "入侵检测"
        },
        knowledge_point: "计算机网络 - 网络安全",
        difficulty: "easy"
      },
      {
        id: 29,
        question: "在 IPv6 中，地址长度是？",
        options: {
          A: "32 位",
          B: "64 位",
          C: "96 位",
          D: "128 位"
        },
        knowledge_point: "计算机网络-IPv6",
        difficulty: "easy"
      },
      {
        id: 30,
        question: "无线局域网 IEEE 802.11 采用的介质访问控制方法是？",
        options: {
          A: "CSMA/CD",
          B: "CSMA/CA",
          C: "令牌传递",
          D: "时隙 ALOHA"
        },
        knowledge_point: "计算机网络 - 无线网络",
        difficulty: "hard"
      },
      {
        id: 31,
        question: "网络拓扑结构中，可靠性最高的是？",
        options: {
          A: "星型",
          B: "总线型",
          C: "环型",
          D: "网状"
        },
        knowledge_point: "计算机网络 - 网络拓扑",
        difficulty: "medium"
      },
      {
        id: 32,
        question: "下列协议中，用于电子邮件发送的是？",
        options: {
          A: "POP3",
          B: "IMAP",
          C: "SMTP",
          D: "MIME"
        },
        knowledge_point: "计算机网络 - 邮件协议",
        difficulty: "medium"
      },
      {
        id: 33,
        question: "在数据传输中，波特率是指？",
        options: {
          A: "每秒传输的比特数",
          B: "每秒传输的码元数",
          C: "每秒传输的字节数",
          D: "每秒传输的帧数"
        },
        knowledge_point: "计算机网络 - 数据通信",
        difficulty: "hard"
      },
      {
        id: 34,
        question: "ARP 协议的作用是？",
        options: {
          A: "将域名解析为 IP 地址",
          B: "将 IP 地址解析为 MAC 地址",
          C: "将 MAC 地址解析为 IP 地址",
          D: "将 IP 地址解析为域名"
        },
        knowledge_point: "计算机网络-ARP 协议",
        difficulty: "medium"
      },
      {
        id: 35,
        question: "下列哪种攻击属于被动攻击？",
        options: {
          A: "篡改",
          B: "伪造",
          C: "流量分析",
          D: "拒绝服务"
        },
        knowledge_point: "计算机网络 - 网络安全",
        difficulty: "hard"
      },
      {
        id: 36,
        question: "在关系数据库中，用于保证实体完整性的约束是？",
        options: {
          A: "外键约束",
          B: "唯一约束",
          C: "主键约束",
          D: "检查约束"
        },
        knowledge_point: "数据库系统 - 完整性约束",
        difficulty: "medium"
      },
      {
        id: 37,
        question: "SQL 语言中，用于数据查询的语句是？",
        options: {
          A: "INSERT",
          B: "UPDATE",
          C: "DELETE",
          D: "SELECT"
        },
        knowledge_point: "数据库系统-SQL",
        difficulty: "easy"
      },
      {
        id: 38,
        question: "数据库三级模式结构中，描述数据库中全体数据的全局逻辑结构的是？",
        options: {
          A: "内模式",
          B: "外模式",
          C: "概念模式",
          D: "存储模式"
        },
        knowledge_point: "数据库系统 - 体系结构",
        difficulty: "medium"
      },
      {
        id: 39,
        question: "关系代数的基本运算不包括？",
        options: {
          A: "选择",
          B: "投影",
          C: "连接",
          D: "排序"
        },
        knowledge_point: "数据库系统 - 关系代数",
        difficulty: "medium"
      },
      {
        id: 40,
        question: "在数据库设计中，E-R 图转换为关系模式属于哪个阶段？",
        options: {
          A: "需求分析",
          B: "概念结构设计",
          C: "逻辑结构设计",
          D: "物理结构设计"
        },
        knowledge_point: "数据库系统 - 数据库设计",
        difficulty: "medium"
      },
      {
        id: 41,
        question: "事务的 ACID 特性中，I 代表的是？",
        options: {
          A: "原子性",
          B: "一致性",
          C: "隔离性",
          D: "持久性"
        },
        knowledge_point: "数据库系统 - 事务",
        difficulty: "easy"
      },
      {
        id: 42,
        question: "下列哪种范式要求消除非主属性对码的部分函数依赖？",
        options: {
          A: "1NF",
          B: "2NF",
          C: "3NF",
          D: "BCNF"
        },
        knowledge_point: "数据库系统 - 范式理论",
        difficulty: "medium"
      },
      {
        id: 43,
        question: "在数据库并发控制中，死锁产生的必要条件不包括？",
        options: {
          A: "互斥条件",
          B: "请求与保持条件",
          C: "不可剥夺条件",
          D: "优先级条件"
        },
        knowledge_point: "数据库系统 - 并发控制",
        difficulty: "hard"
      },
      {
        id: 44,
        question: "数据库恢复技术的基础是？",
        options: {
          A: "索引",
          B: "冗余",
          C: "日志",
          D: "备份"
        },
        knowledge_point: "数据库系统 - 数据库恢复",
        difficulty: "medium"
      },
      {
        id: 45,
        question: "B+ 树索引的特点是？",
        options: {
          A: "数据存储在内部节点",
          B: "所有叶子节点包含全部数据",
          C: "不支持范围查询",
          D: "查询效率低于 B 树"
        },
        knowledge_point: "数据库系统 - 索引",
        difficulty: "hard"
      },
      {
        id: 46,
        question: "在 SQL 中，GROUP BY 子句用于？",
        options: {
          A: "排序",
          B: "分组",
          C: "过滤",
          D: "连接"
        },
        knowledge_point: "数据库系统-SQL",
        difficulty: "easy"
      },
      {
        id: 47,
        question: "数据仓库的特征不包括？",
        options: {
          A: "面向主题",
          B: "集成性",
          C: "实时性",
          D: "历史数据"
        },
        knowledge_point: "数据库系统 - 数据仓库",
        difficulty: "medium"
      },
      {
        id: 48,
        question: "分布式数据库的主要特点是？",
        options: {
          A: "数据物理分布、逻辑集中",
          B: "数据物理集中、逻辑分布",
          C: "数据完全复制",
          D: "数据完全独立"
        },
        knowledge_point: "数据库系统 - 分布式数据库",
        difficulty: "medium"
      },
      {
        id: 49,
        question: "NoSQL 数据库的主要类型不包括？",
        options: {
          A: "键值存储",
          B: "列族存储",
          C: "文档存储",
          D: "关系存储"
        },
        knowledge_point: "数据库系统-NoSQL",
        difficulty: "medium"
      },
      {
        id: 50,
        question: "数据库的安全性控制中，GRANT 语句用于？",
        options: {
          A: "撤销权限",
          B: "授予权限",
          C: "创建用户",
          D: "修改密码"
        },
        knowledge_point: "数据库系统 - 安全性",
        difficulty: "easy"
      },
      {
        id: 51,
        question: "进程和线程的主要区别是？",
        options: {
          A: "进程是资源分配单位，线程是 CPU 调度单位",
          B: "进程是 CPU 调度单位，线程是资源分配单位",
          C: "进程和线程都是资源分配单位",
          D: "进程和线程都是 CPU 调度单位"
        },
        knowledge_point: "操作系统 - 进程管理",
        difficulty: "medium"
      },
      {
        id: 52,
        question: "操作系统中，用于解决进程互斥问题的信号量机制，初值为 1 时称为？",
        options: {
          A: "计数信号量",
          B: "互斥信号量",
          C: "同步信号量",
          D: "二进制信号量"
        },
        knowledge_point: "操作系统 - 进程同步",
        difficulty: "medium"
      },
      {
        id: 53,
        question: "页面置换算法中，最佳置换算法（OPT）是？",
        options: {
          A: "最先进的算法",
          B: "最常用的算法",
          C: "理想但无法实现的算法",
          D: "效率最低的算法"
        },
        knowledge_point: "操作系统 - 存储管理",
        difficulty: "medium"
      },
      {
        id: 54,
        question: "在文件系统中，索引分配方式的主要优点是？",
        options: {
          A: "访问速度快",
          B: "空间利用率高",
          C: "支持随机访问",
          D: "实现简单"
        },
        knowledge_point: "操作系统 - 文件管理",
        difficulty: "medium"
      },
      {
        id: 55,
        question: "磁盘调度算法中，SCAN 算法又称为？",
        options: {
          A: "先来先服务",
          B: "最短寻道时间优先",
          C: "电梯算法",
          D: "循环扫描"
        },
        knowledge_point: "操作系统 - 设备管理",
        difficulty: "medium"
      },
      {
        id: 56,
        question: "操作系统中，产生死锁的四个必要条件不包括？",
        options: {
          A: "互斥条件",
          B: "请求与保持",
          C: "不可剥夺",
          D: "优先级继承"
        },
        knowledge_point: "操作系统 - 死锁",
        difficulty: "hard"
      },
      {
        id: 57,
        question: "虚拟存储器的主要作用是？",
        options: {
          A: "提高访问速度",
          B: "扩大逻辑内存容量",
          C: "减少存储成本",
          D: "简化编程"
        },
        knowledge_point: "操作系统 - 虚拟存储",
        difficulty: "medium"
      },
      {
        id: 58,
        question: "在分页存储管理中，页表的作用是？",
        options: {
          A: "存储页面数据",
          B: "实现逻辑地址到物理地址的映射",
          C: "管理空闲页面",
          D: "缓存页面内容"
        },
        knowledge_point: "操作系统 - 分页管理",
        difficulty: "medium"
      },
      {
        id: 59,
        question: "I/O 控制方式中，效率最高的是？",
        options: {
          A: "程序查询方式",
          B: "中断驱动方式",
          C: "DMA 方式",
          D: "通道控制方式"
        },
        knowledge_point: "操作系统-I/O 管理",
        difficulty: "hard"
      },
      {
        id: 60,
        question: "文件目录结构中，多级目录结构的主要优点是？",
        options: {
          A: "访问速度快",
          B: "实现简单",
          C: "便于文件分类管理和重名",
          D: "占用空间少"
        },
        knowledge_point: "操作系统 - 文件系统",
        difficulty: "easy"
      },
      {
        id: 61,
        question: "项目成本估算方法中，自底向上估算的特点是？",
        options: {
          A: "估算速度快",
          B: "估算精度低",
          C: "基于 WBS 逐层汇总",
          D: "适用于项目初期"
        },
        knowledge_point: "项目管理 - 成本管理",
        difficulty: "medium"
      },
      {
        id: 62,
        question: "在项目管理中，关键路径上的活动总时差为？",
        options: {
          A: "正值",
          B: "零",
          C: "负值",
          D: "不确定"
        },
        knowledge_point: "项目管理 - 进度管理",
        difficulty: "medium"
      },
      {
        id: 63,
        question: "风险管理中，风险规避策略是指？",
        options: {
          A: "接受风险后果",
          B: "转移风险给第三方",
          C: "改变计划消除风险",
          D: "减少风险发生概率"
        },
        knowledge_point: "项目管理 - 风险管理",
        difficulty: "medium"
      },
      {
        id: 64,
        question: "项目质量管理中，质量保证的主要目的是？",
        options: {
          A: "检验产品质量",
          B: "确保过程正确",
          C: "修复产品缺陷",
          D: "降低项目成本"
        },
        knowledge_point: "项目管理 - 质量管理",
        difficulty: "medium"
      },
      {
        id: 65,
        question: "挣值管理中，SPI<1 表示？",
        options: {
          A: "进度提前",
          B: "进度落后",
          C: "成本节约",
          D: "成本超支"
        },
        knowledge_point: "项目管理 - 挣值分析",
        difficulty: "hard"
      },
      {
        id: 66,
        question: "项目干系人管理的首要任务是？",
        options: {
          A: "满足所有干系人需求",
          B: "识别干系人",
          C: "管理干系人期望",
          D: "消除干系人冲突"
        },
        knowledge_point: "项目管理 - 干系人管理",
        difficulty: "medium"
      },
      {
        id: 67,
        question: "项目采购管理中，固定总价合同适用于？",
        options: {
          A: "需求不明确的项目",
          B: "需求明确、范围固定的项目",
          C: "风险高的项目",
          D: "工期长的项目"
        },
        knowledge_point: "项目管理 - 采购管理",
        difficulty: "medium"
      },
      {
        id: 68,
        question: "项目沟通管理中，沟通渠道数的计算公式是？（n 为干系人数）",
        options: {
          A: "n",
          B: "n(n-1)",
          C: "n(n-1)/2",
          D: "n(n+1)/2"
        },
        knowledge_point: "项目管理 - 沟通管理",
        difficulty: "medium"
      },
      {
        id: 69,
        question: "敏捷开发中，Scrum 框架的核心角色不包括？",
        options: {
          A: "产品负责人",
          B: "Scrum Master",
          C: "开发团队",
          D: "项目经理"
        },
        knowledge_point: "项目管理 - 敏捷开发",
        difficulty: "medium"
      },
      {
        id: 70,
        question: "项目章程的主要作用是？",
        options: {
          A: "详细描述项目范围",
          B: "正式授权项目启动",
          C: "制定项目进度计划",
          D: "分配项目资源"
        },
        knowledge_point: "项目管理 - 项目启动",
        difficulty: "easy"
      },
      {
        id: 71,
        question: "下列哪种排序算法的平均时间复杂度为 O(nlogn) 且是稳定的？",
        options: {
          A: "快速排序",
          B: "堆排序",
          C: "归并排序",
          D: "希尔排序"
        },
        knowledge_point: "数据结构与算法 - 排序",
        difficulty: "hard"
      },
      {
        id: 72,
        question: "在二叉树中，若某节点有左子树，则中序遍历序列中该节点的前驱是？",
        options: {
          A: "其左孩子",
          B: "其左子树中最右节点",
          C: "其父节点",
          D: "其左子树的根节点"
        },
        knowledge_point: "数据结构与算法 - 二叉树",
        difficulty: "medium"
      },
      {
        id: 73,
        question: "哈希表中解决冲突的方法不包括？",
        options: {
          A: "开放定址法",
          B: "链地址法",
          C: "再哈希法",
          D: "二分查找法"
        },
        knowledge_point: "数据结构与算法 - 哈希表",
        difficulty: "medium"
      },
      {
        id: 74,
        question: "图的最小生成树算法中，Prim 算法适用于？",
        options: {
          A: "稀疏图",
          B: "稠密图",
          C: "有向图",
          D: "带负权边的图"
        },
        knowledge_point: "数据结构与算法 - 图算法",
        difficulty: "hard"
      },
      {
        id: 75,
        question: "栈的特性是？",
        options: {
          A: "先进先出",
          B: "先进后出",
          C: "随机访问",
          D: "有序存储"
        },
        knowledge_point: "数据结构与算法 - 栈",
        difficulty: "easy"
      }
    ]
  },

  // 第二部分：问答题（6 题，选答 4 题，共 75 分）
  essay: {
    part: "问答题",
    total_questions: 6,
    total_points: 75,
    instructions: "共 6 道案例分析题。第 1 题为必答题，第 2-6 题为选答题（请任选 3 题作答）。总分 75 分。",
    questions: [
      {
        id: 1,
        type: "concept",
        domain: "软件需求工程",
        title: "需求工程基础概念",
        points: 25,
        difficulty: "medium",
        sub_questions: [
          {
            part: "1.1",
            text: "请简述软件需求的三个层次（业务需求、用户需求、功能需求）的定义及其相互关系。",
            points: 8
          },
          {
            part: "1.2",
            text: "什么是需求跟踪矩阵（RTM）？请说明其在项目管理中的作用。",
            points: 8
          },
          {
            part: "1.3",
            text: "请列举至少四种需求获取技术，并简要说明每种技术的适用场景。",
            points: 9
          }
        ],
        knowledge_points: ["需求层次", "需求跟踪", "需求获取技术"]
      },
      {
        id: 2,
        type: "concept",
        domain: "网络安全",
        title: "网络安全与加密技术",
        points: 25,
        difficulty: "medium",
        sub_questions: [
          {
            part: "2.1",
            text: "请解释对称加密与非对称加密的区别，并各举出两个典型算法。",
            points: 8
          },
          {
            part: "2.2",
            text: "什么是数字签名？请说明其工作原理及主要应用场景。",
            points: 8
          },
          {
            part: "2.3",
            text: "请简述 SSL/TLS 协议的基本工作流程，并说明其在保障网络安全中的作用。",
            points: 9
          }
        ],
        knowledge_points: ["加密技术", "数字签名", "安全协议"]
      },
      {
        id: 3,
        type: "analysis",
        domain: "系统架构设计",
        title: "电商系统架构设计",
        scenario: "某公司计划开发一个 B2C 电商平台，预计日均访问量 100 万，促销活动期间峰值可达 500 万。系统需要支持商品管理、订单处理、支付结算、会员管理、营销活动等核心功能。公司技术团队规模为 30 人，要求系统在 6 个月内上线，并具备良好的可扩展性和可维护性。",
        points: 25,
        difficulty: "hard",
        sub_questions: [
          {
            part: "3.1",
            text: "请为该电商平台设计整体系统架构，画出架构图（文字描述各层次功能），并说明采用该架构的理由。",
            points: 10
          },
          {
            part: "3.2",
            text: "针对促销活动期间的高并发场景，请提出至少三项技术措施来保障系统稳定运行。",
            points: 8
          },
          {
            part: "3.3",
            text: "请分析在该系统中引入微服务架构的利弊，并给出你的建议。",
            points: 7
          }
        ],
        knowledge_points: ["系统架构设计", "高并发处理", "微服务架构"]
      },
      {
        id: 4,
        type: "analysis",
        domain: "项目管理",
        title: "软件项目进度与风险管理",
        scenario: "某软件开发项目计划工期为 12 个月，预算 200 万元。项目进行到第 6 个月时，实际支出 120 万元，完成工作量约为计划工作量的 45%。项目团队发现以下问题：（1）核心开发人员离职 2 人；（2）客户需求变更频繁，已累积 15 项变更请求；（3）第三方接口延迟交付，影响集成测试进度。",
        points: 25,
        difficulty: "hard",
        sub_questions: [
          {
            part: "4.1",
            text: "请计算该项目的进度绩效指数（SPI）和成本绩效指数（CPI），并分析项目当前状态。",
            points: 8
          },
          {
            part: "4.2",
            text: "针对上述三个问题，请分别提出具体的应对措施。",
            points: 9
          },
          {
            part: "4.3",
            text: "请说明如何建立有效的需求变更控制流程，以减少需求变更对项目的影响。",
            points: 8
          }
        ],
        knowledge_points: ["挣值管理", "风险应对", "变更控制"]
      },
      {
        id: 5,
        type: "case",
        domain: "软件测试",
        title: "金融系统测试案例分析",
        scenario: "某银行核心系统进行版本升级，新系统上线后出现以下问题：（1）部分客户账户余额显示异常；（2）跨行转账在高峰期出现超时失败；（3）批量处理任务运行时间比预期长 3 倍。经调查，测试阶段存在以下情况：测试环境数据量仅为生产环境的 1/10；未进行充分的性能测试；测试用例覆盖率约 70%；缺少异常场景测试。",
        points: 25,
        difficulty: "hard",
        sub_questions: [
          {
            part: "5.1",
            text: "请分析导致上述问题产生的主要原因，从测试角度进行说明。",
            points: 8
          },
          {
            part: "5.2",
            text: "请为该系统设计一个完整的测试策略，包括测试类型、测试阶段和测试重点。",
            points: 9
          },
          {
            part: "5.3",
            text: "针对金融系统的特点，请说明应如何进行测试数据管理和测试环境建设。",
            points: 8
          }
        ],
        knowledge_points: ["测试策略", "性能测试", "测试环境管理"]
      },
      {
        id: 6,
        type: "case",
        domain: "数据库设计",
        title: "企业资源管理系统数据库设计案例",
        scenario: "某大型企业需要建设 ERP 系统，数据库需要存储和管理以下数据：（1）组织架构：集团 - 分公司 - 部门 - 员工，支持多层级管理；（2）产品信息：产品支持多规格、多属性，存在 BOM 结构；（3）业务流程：采购、生产、销售、库存等环节，存在复杂的业务流程和状态流转；（4）历史数据：需要保留 5 年以上的业务数据，支持历史追溯和趋势分析。系统要求支持高并发读写，数据一致性要求高。",
        points: 25,
        difficulty: "hard",
        sub_questions: [
          {
            part: "6.1",
            text: "请分析该系统的数据库设计难点，并提出相应的设计策略。",
            points: 8
          },
          {
            part: "6.2",
            text: "针对组织架构的多层级存储，请设计数据库表结构（列出主要字段），并说明如何高效查询某节点下的所有子节点。",
            points: 9
          },
          {
            part: "6.3",
            text: "请说明如何设计数据归档和历史数据查询方案，以平衡系统性能和数据可追溯性。",
            points: 8
          }
        ],
        knowledge_points: ["数据库设计", "层次数据存储", "数据归档策略"]
      }
    ]
  },

  // 第三部分：论文题（1 题，75 分）
  paper: {
    part: "论文题",
    total_questions: 1,
    total_points: 75,
    instructions: "请根据题目要求撰写一篇 2500-3000 字的论文。建议时间：120 分钟。",
    topic: {
      title: "大模型驱动的企业智能应用架构设计",
      background: "随着大语言模型（LLM）技术的快速发展，越来越多的企业开始探索将 AI 大模型融入现有业务系统，构建智能化应用。然而，大模型的引入给传统软件架构带来了新的挑战：如何保证输出质量与可控性？如何与企业现有数据和安全体系集成？如何设计可扩展、可维护的智能应用架构？\n\nRAG（检索增强生成）、Agent（智能体）、Function Calling 等技术的成熟，为企业智能应用提供了可行的技术路径。但如何在实际项目中选择合适的技术路线，设计满足性能、安全、成本要求的架构方案，是架构设计师需要解决的核心问题。\n\n本题考查考生对大模型应用架构的理解深度，以及将新技术与企业实际需求相结合的架构设计能力。",
      requirements: [
        "请在论文中论述大模型驱动的企业智能应用架构设计方法",
        "结合你的实际项目经验，说明架构设计决策过程",
        "说明技术选型的理由及权衡考虑",
        "论述架构如何满足性能、安全、可维护性要求"
      ],
      sub_questions: [
        "1. 简要叙述你参与规划和实施的软件项目，以及你在其中所承担的主要工作（300 字以内）",
        "2. 论述大模型企业应用的核心架构模式（如 RAG、Agent、API 编排等）及其适用场景（600 字左右）",
        "3. 结合你的项目，详细说明如何设计并实现大模型应用架构，包括关键技术选型、模块划分、集成方式等（1000 字左右）",
        "4. 分析所设计架构的实际应用效果，包括性能指标、用户体验改善、遇到的挑战及改进方向（600 字左右）"
      ],
      writing_guidelines: {
        "字数要求": "2500-3000 字",
        "结构建议": "摘要 (300-400 字) + 正文 (2200-2600 字)",
        "时间建议": "120 分钟",
        "格式要求": "摘要应独立成段，概括论文核心内容；正文应分节论述，层次清晰"
      }
    }
  }
};
