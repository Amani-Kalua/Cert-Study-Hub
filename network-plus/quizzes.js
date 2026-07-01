/* ===========================================================
   Network+ N10-009 — Quiz bank
   VIDEO_QUIZZES: keyed by YouTube video id (short quiz per video)
   SECTION_EXAMS: keyed by section number (cumulative exam)
   Each question: { q, options[], answer (index), explain }
   =========================================================== */
const VIDEO_QUIZZES = {};
const SECTION_EXAMS = {};

/* ===================== SECTION 1: Networking Concepts ===================== */
Object.assign(VIDEO_QUIZZES, {
// 1.1 OSI Model
"AYgXr1dynKU": [
  {q:"At which OSI layer do IP addresses and routing operate?",
   options:["Layer 2 – Data Link","Layer 3 – Network","Layer 4 – Transport","Layer 7 – Application"], answer:1,
   explain:"Layer 3 (Network) handles logical addressing (IP) and routing between networks."},
  {q:"A switch that forwards frames using MAC addresses operates primarily at which OSI layer?",
   options:["Layer 1","Layer 2","Layer 3","Layer 5"], answer:1,
   explain:"Traditional switches operate at Layer 2 (Data Link) using MAC addresses."},
  {q:"Which OSI layer is responsible for reliable, connection-oriented delivery using TCP?",
   options:["Network","Transport","Session","Presentation"], answer:1,
   explain:"Layer 4 (Transport) provides end-to-end delivery; TCP adds reliability and sequencing."}
],
// 1.2 Networking Devices
"iqjj4ZSPV08": [
  {q:"Which device makes forwarding decisions between different IP networks?",
   options:["Router","Unmanaged switch","Hub","Media converter"], answer:0,
   explain:"A router forwards traffic between separate IP networks using Layer 3 addressing."},
  {q:"A hub differs from a switch because a hub:",
   options:["Forwards traffic only to the destination port","Repeats incoming traffic out all ports","Routes between subnets","Performs NAT"], answer:1,
   explain:"A hub is a Layer 1 repeater that floods all ports; a switch forwards intelligently by MAC."},
  {q:"Which device provides wireless clients access to the wired network?",
   options:["Access point","Firewall","Load balancer","Proxy"], answer:0,
   explain:"An access point (AP) bridges wireless clients onto the wired LAN."}
],
// 1.2 Networking Functions
"9uDpWfMbAdQ": [
  {q:"What is the primary purpose of Content Delivery Networks (CDNs)?",
   options:["Cache content geographically closer to users for speed","Encrypt all traffic","Assign IP addresses","Block malware only"], answer:0,
   explain:"CDNs distribute cached content across regions to reduce latency and load."},
  {q:"A device that distributes incoming requests across multiple servers is a:",
   options:["Load balancer","Repeater","Modem","Patch panel"], answer:0,
   explain:"Load balancers spread traffic across servers for availability and performance."},
  {q:"A proxy server placed between clients and the internet can provide:",
   options:["Caching and content filtering","IP routing between VLANs only","Physical cabling","Power over Ethernet"], answer:0,
   explain:"Proxies intermediate requests, enabling caching, filtering, and monitoring."}
],
// 1.3 Designing the Cloud
"HzF7sg6Nx0c": [
  {q:"Which cloud connectivity option provides a dedicated private link between an organization and its cloud provider?",
   options:["Direct Connect / private connection","Public internet only","Dial-up","A crossover cable"], answer:0,
   explain:"A dedicated/direct private connection bypasses the public internet for performance and security."},
  {q:"Grouping cloud resources into an isolated, logically separate network is achieved with a:",
   options:["VPC (virtual private cloud)","Patch panel","Hub","Modem"], answer:0,
   explain:"A VPC provides an isolated virtual network within a cloud provider."},
  {q:"Cloud 'elasticity' refers to the ability to:",
   options:["Scale resources up or down based on demand","Permanently fix capacity","Avoid all security","Remove redundancy"], answer:0,
   explain:"Elasticity dynamically adjusts resources to match workload demand."}
],
// 1.3 Cloud Models
"wI2x6eGF1Yg": [
  {q:"In which cloud service model does the provider manage everything and the customer just uses the application?",
   options:["SaaS","IaaS","PaaS","On-premises"], answer:0,
   explain:"Software as a Service delivers a ready-to-use application; the provider manages all layers."},
  {q:"A cloud environment shared by several organizations with common concerns is a:",
   options:["Community cloud","Public cloud only","Private cloud","Air-gapped cloud"], answer:0,
   explain:"A community cloud is shared among organizations with shared requirements."},
  {q:"Combining on-premises infrastructure with public cloud resources describes a:",
   options:["Hybrid cloud","Pure private cloud","Pure public cloud","Serverless only"], answer:0,
   explain:"A hybrid cloud mixes private/on-prem and public cloud resources."}
],
// 1.4 Introduction to IP
"ueth6WvFVMU": [
  {q:"Which protocol is connectionless and does NOT guarantee delivery?",
   options:["UDP","TCP","FTP over TCP","HTTP over TCP"], answer:0,
   explain:"UDP is connectionless with no delivery guarantee — faster but unreliable."},
  {q:"The TCP three-way handshake consists of which sequence?",
   options:["SYN, SYN-ACK, ACK","ACK, SYN, FIN","SYN, FIN, RST","PSH, URG, ACK"], answer:0,
   explain:"TCP establishes a connection with SYN → SYN-ACK → ACK."},
  {q:"At which layer does IP (the Internet Protocol) operate?",
   options:["Network (Layer 3)","Data Link (Layer 2)","Transport (Layer 4)","Application (Layer 7)"], answer:0,
   explain:"IP is a Layer 3 protocol handling logical addressing and routing."}
],
// 1.4 Common Ports
"jX1pobYmZdE": [
  {q:"Which port does HTTPS use by default?",
   options:["443","80","22","3389"], answer:0,
   explain:"HTTPS (HTTP over TLS) uses TCP port 443."},
  {q:"SSH provides secure remote access on which port?",
   options:["22","23","21","25"], answer:0,
   explain:"SSH uses TCP port 22; Telnet (insecure) uses 23."},
  {q:"Which port pair is used by DNS?",
   options:["UDP/TCP 53","80","110","143"], answer:0,
   explain:"DNS uses port 53 (UDP for most queries, TCP for zone transfers/large responses)."}
],
// 1.4 Other Useful Protocols
"5BahWbszVAY": [
  {q:"Which protocol automatically assigns IP addresses to hosts?",
   options:["DHCP","DNS","SNMP","ICMP"], answer:0,
   explain:"DHCP dynamically leases IP configuration to clients."},
  {q:"ICMP is most commonly associated with which utility?",
   options:["ping / traceroute","nslookup","ipconfig only","telnet"], answer:0,
   explain:"ICMP carries echo requests/replies used by ping and traceroute."},
  {q:"Which protocol synchronizes clocks across network devices?",
   options:["NTP","SMTP","LDAP","RDP"], answer:0,
   explain:"Network Time Protocol keeps device clocks accurate and synchronized."}
],
// 1.4 Network Communication
"9Vx-awO6qfc": [
  {q:"Traffic sent from one host to all hosts on a subnet is:",
   options:["Broadcast","Unicast","Anycast","Multicast to one"], answer:0,
   explain:"A broadcast is delivered to every host in the broadcast domain."},
  {q:"Traffic sent to a group of interested receivers (but not all) is:",
   options:["Multicast","Broadcast","Unicast","Loopback"], answer:0,
   explain:"Multicast delivers to a subscribed group of receivers."},
  {q:"One-to-one communication between a single sender and single receiver is:",
   options:["Unicast","Broadcast","Multicast","Anycast"], answer:0,
   explain:"Unicast is a single-source, single-destination transmission."}
],
// 1.5 Wireless Networking
"NeTwL-040ds": [
  {q:"Which 802.11 standard (Wi-Fi 6) operates in both 2.4 GHz and 5 GHz bands?",
   options:["802.11ax","802.11b","802.11a","802.11g"], answer:0,
   explain:"802.11ax (Wi-Fi 6) operates on 2.4 and 5 GHz (and 6 GHz for Wi-Fi 6E)."},
  {q:"Which frequency band generally offers longer range but lower speeds?",
   options:["2.4 GHz","5 GHz","6 GHz","60 GHz"], answer:0,
   explain:"2.4 GHz travels farther and penetrates walls better but is slower and more congested."},
  {q:"Overlapping channels in 2.4 GHz cause interference; which channels are non-overlapping?",
   options:["1, 6, and 11","1, 2, 3","4, 5, 6","all channels overlap equally"], answer:0,
   explain:"In 2.4 GHz, channels 1, 6, and 11 do not overlap in most regions."}
],
// 1.5 Ethernet Standards
"BxpRuARS56g": [
  {q:"1000BASE-T Gigabit Ethernet runs over which cabling?",
   options:["Twisted-pair copper (Cat 5e+)","Single-mode fiber only","Coaxial only","Wireless"], answer:0,
   explain:"1000BASE-T runs over Cat 5e or better twisted-pair copper."},
  {q:"What does the 'T' in 10GBASE-T signify?",
   options:["Twisted-pair copper","Thicknet","Token ring","Transceiver"], answer:0,
   explain:"'T' denotes twisted-pair copper cabling."},
  {q:"What is the typical maximum distance for twisted-pair Ethernet?",
   options:["100 meters","10 meters","500 meters","2 kilometers"], answer:0,
   explain:"Twisted-pair Ethernet is generally limited to 100 m per segment."}
],
// 1.5 Optical Fiber
"qLsNZSaj35E": [
  {q:"Single-mode fiber is best suited for:",
   options:["Long-distance runs","Very short patch cables only","Wireless backhaul","Power delivery"], answer:0,
   explain:"Single-mode fiber carries light over long distances with minimal attenuation."},
  {q:"Multimode fiber is typically used for:",
   options:["Shorter distances within a campus/building","Transoceanic links","Copper replacement in phones","Coaxial TV"], answer:0,
   explain:"Multimode fiber suits shorter runs (e.g., within data centers/campuses)."},
  {q:"A key advantage of fiber over copper is:",
   options:["Immunity to electromagnetic interference","It carries electrical power better","It is always cheaper","It needs no connectors"], answer:0,
   explain:"Fiber uses light, so it is immune to EMI and supports longer distances."}
],
// 1.5 Copper Cabling
"zoefzxHIfPc": [
  {q:"Which twisted-pair category supports 10 Gbps up to 100 meters?",
   options:["Cat 6a","Cat 3","Cat 5","Cat 1"], answer:0,
   explain:"Cat 6a supports 10GBASE-T to 100 m; Cat 6 supports 10 Gbps only to ~55 m."},
  {q:"Shielded twisted pair (STP) is chosen primarily to:",
   options:["Reduce electromagnetic interference","Carry light signals","Provide PoE only","Increase length beyond 1 km"], answer:0,
   explain:"STP adds shielding to reduce EMI/crosstalk in noisy environments."},
  {q:"A plenum-rated cable is required in air-handling spaces because it:",
   options:["Produces less toxic smoke when burning","Is faster","Is cheaper","Carries more power"], answer:0,
   explain:"Plenum cabling has fire-resistant, low-smoke jacketing for airflow spaces."}
],
// 1.5 Network Transceivers
"0aMmwkiuT0o": [
  {q:"An SFP+ transceiver is commonly used to provide which speed?",
   options:["10 Gbps","100 Mbps","1 Mbps","56 Kbps"], answer:0,
   explain:"SFP+ modules commonly support 10 Gigabit connections."},
  {q:"Transceivers that convert between fiber and the switch interface are hot-swappable so you can:",
   options:["Change media/speeds without replacing the switch","Add PoE to any device","Route between VLANs","Assign IPs"], answer:0,
   explain:"Modular transceivers let you change connection type/speed by swapping the module."},
  {q:"A QSFP transceiver is typically used for:",
   options:["High-density 40/100 Gbps connections","Dial-up","Analog phone lines","USB"], answer:0,
   explain:"QSFP (Quad SFP) supports high-speed 40G/100G links."}
],
// 1.5 Fiber Connectors
"PNoqhs5QvFw": [
  {q:"Which is a common fiber optic connector type?",
   options:["LC","RJ45","BNC for copper","DB9"], answer:0,
   explain:"LC (and SC, ST) are common fiber connectors; RJ45 is for twisted-pair copper."},
  {q:"An APC (angled physical contact) fiber connector is polished at an angle to:",
   options:["Reduce back reflection","Add electrical grounding","Increase copper speed","Provide PoE"], answer:0,
   explain:"APC's angled polish minimizes return loss/back reflection compared to UPC."},
  {q:"Keeping fiber connector end-faces clean matters because contamination causes:",
   options:["Signal loss and errors","Higher voltage","EMI","PoE failures"], answer:0,
   explain:"Dirt/oil on fiber end-faces scatters light, causing attenuation and errors."}
],
// 1.5 Copper Connectors
"Ca6rzoQm15w": [
  {q:"Which connector terminates twisted-pair Ethernet cables?",
   options:["RJ45 (8P8C)","LC","SC","BNC"], answer:0,
   explain:"RJ45 (8P8C) is the standard connector for twisted-pair Ethernet."},
  {q:"The T568A and T568B standards define:",
   options:["The pin/pair wiring order in RJ45 terminations","Fiber polishing angles","Wireless channels","IP subnetting"], answer:0,
   explain:"T568A/B specify the wire color order for terminating twisted-pair to RJ45."},
  {q:"A cable wired T568A on one end and T568B on the other is a:",
   options:["Crossover cable","Straight-through cable","Rollover cable","Loopback plug"], answer:0,
   explain:"Different standards on each end creates a crossover cable (crosses TX/RX)."}
],
// 1.6 Network Topologies
"3ARTjvpZCoQ": [
  {q:"In a star topology, all devices connect to a:",
   options:["Central switch/hub","Single shared bus","Ring of neighbors","Mesh of peers"], answer:0,
   explain:"Star topology connects each node to a central device; a failure of one link doesn't affect others."},
  {q:"A full mesh topology is characterized by:",
   options:["Every node connected to every other node","One central hub","A single cable loop","A linear chain"], answer:0,
   explain:"Full mesh links every node to every other, maximizing redundancy at high cost."},
  {q:"A hub-and-spoke topology's main weakness is:",
   options:["The central hub is a single point of failure","It requires fiber only","It cannot use IP","It has no redundancy option ever"], answer:0,
   explain:"If the central hub fails in hub-and-spoke, connected spokes lose connectivity."}
],
// 1.6 Network Architectures
"vVEL1LokboE": [
  {q:"The traditional three-tier network architecture consists of core, distribution, and:",
   options:["Access layers","Cloud layer","Transport layer","Physical-only layer"], answer:0,
   explain:"Three-tier design uses core, distribution (aggregation), and access layers."},
  {q:"In data center design, a spine-and-leaf architecture improves:",
   options:["Predictable low latency and scalability","Copper distance","Wireless range","Power delivery"], answer:0,
   explain:"Spine-leaf provides consistent, low-latency any-to-any connectivity that scales well."},
  {q:"'North-south' traffic in a data center refers to traffic that:",
   options:["Enters/leaves the data center (client-server)","Stays between servers only","Is wireless only","Is broadcast only"], answer:0,
   explain:"North-south is client-to-server (in/out); east-west is server-to-server within the DC."}
],
// 1.7 Binary Math
"94dcHJfEAIo": [
  {q:"What is the decimal value of the binary octet 11000000?",
   options:["192","128","224","240"], answer:0,
   explain:"128+64 = 192, so 11000000 = 192."},
  {q:"How many bits are in a single IPv4 octet?",
   options:["8","4","16","32"], answer:0,
   explain:"Each of the four IPv4 octets is 8 bits (0–255)."},
  {q:"The binary number 11111111 equals which decimal value?",
   options:["255","256","254","128"], answer:0,
   explain:"All eight bits set = 128+64+32+16+8+4+2+1 = 255."}
],
// 1.7 IPv4 Addressing
"JNNcyZ_VE2A": [
  {q:"Which of these is a private IPv4 address range (RFC 1918)?",
   options:["10.0.0.0/8","8.8.8.0/24","172.15.0.0/16","192.0.2.0/24"], answer:0,
   explain:"Private ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16."},
  {q:"The APIPA address range (169.254.x.x) indicates a host that:",
   options:["Failed to obtain a DHCP address","Has a valid public IP","Is using IPv6","Is on the loopback"], answer:0,
   explain:"APIPA (169.254.0.0/16) is self-assigned when DHCP fails."},
  {q:"127.0.0.1 is reserved as the:",
   options:["Loopback address","Default gateway","Broadcast address","APIPA address"], answer:0,
   explain:"127.0.0.1 is the IPv4 loopback (localhost) address."}
],
// 1.7 Classful Subnetting
"XVIOtj-Z9m0": [
  {q:"A Class C network has which default subnet mask?",
   options:["255.255.255.0","255.0.0.0","255.255.0.0","255.255.255.255"], answer:0,
   explain:"Class C default mask is /24 = 255.255.255.0."},
  {q:"Which class provides the largest default number of hosts per network?",
   options:["Class A","Class B","Class C","Class D"], answer:0,
   explain:"Class A (/8) has the most host bits, allowing the most hosts per network."},
  {q:"Class D addresses (224–239) are reserved for:",
   options:["Multicast","Unicast hosts","Broadcast only","Loopback"], answer:0,
   explain:"Class D (224.0.0.0–239.255.255.255) is used for multicast."}
],
// 1.7 IPv4 Subnet Masks
"p5NJ5Jt6oJo": [
  {q:"What does the subnet mask /26 equal in dotted decimal?",
   options:["255.255.255.192","255.255.255.0","255.255.255.224","255.255.255.128"], answer:0,
   explain:"/26 = 26 network bits = 255.255.255.192."},
  {q:"The subnet mask determines which part of an IP is the:",
   options:["Network portion vs host portion","MAC address","Default gateway","DNS server"], answer:0,
   explain:"The mask separates the network bits from the host bits."},
  {q:"How many usable hosts are in a /24 network?",
   options:["254","256","255","252"], answer:0,
   explain:"/24 has 256 addresses minus network and broadcast = 254 usable hosts."}
],
// 1.7 Calculating IPv4 Subnets and Hosts
"cYQOMifDlKI": [
  {q:"How many usable hosts does a /28 subnet provide?",
   options:["14","16","30","62"], answer:0,
   explain:"/28 = 16 addresses − 2 (network + broadcast) = 14 usable hosts."},
  {q:"The formula for usable hosts in a subnet is:",
   options:["2^(host bits) − 2","2^(network bits)","host bits × 2","network bits − 2"], answer:0,
   explain:"Usable hosts = 2^(number of host bits) − 2 (network and broadcast excluded)."},
  {q:"A /30 subnet is commonly used for point-to-point links because it provides:",
   options:["2 usable hosts","6 usable hosts","0 usable hosts","254 usable hosts"], answer:0,
   explain:"/30 gives 4 addresses − 2 = 2 usable hosts, ideal for point-to-point links."}
],
// 1.7 Magic Number Subnetting
"P1ROXMLjL04": [
  {q:"For a /26 mask (255.255.255.192), the subnet 'block size' (magic number) is:",
   options:["64","32","128","16"], answer:0,
   explain:"256 − 192 = 64, so subnets increment by 64 (0, 64, 128, 192)."},
  {q:"With a block size of 32 in the last octet, the third subnet would start at:",
   options:["64","32","96","128"], answer:0,
   explain:"Subnets start at 0, 32, 64... so the third subnet begins at 64."},
  {q:"The 'magic number' is calculated as:",
   options:["256 minus the interesting octet's mask value","The number of subnets","The number of hosts × 2","The default gateway"], answer:0,
   explain:"Magic number (block size) = 256 − the mask value in the interesting octet."}
],
// 1.7 Seven Second Subnetting
"I3LBYMXBhus": [
  {q:"'Seven second subnetting' is a technique to quickly determine subnet details using:",
   options:["Powers of two and the block size","A protocol analyzer","DNS lookups","SNMP polling"], answer:0,
   explain:"It relies on memorized powers of two and block sizes to compute subnets rapidly."},
  {q:"Knowing the block size lets you quickly find a subnet's:",
   options:["Network, broadcast, and host range","MAC address","DNS record","Cable category"], answer:0,
   explain:"The block size reveals where each subnet begins/ends and its host range."},
  {q:"For fast subnetting, it helps to memorize the powers of two:",
   options:["128, 64, 32, 16, 8, 4, 2, 1","10, 20, 30, 40","3, 6, 9, 12","100, 200, 300"], answer:0,
   explain:"The bit values 128–1 are the foundation of quick subnet math."}
],
// 1.8 SDN
"A6tPNGEfOzc": [
  {q:"Software Defined Networking separates the control plane from the:",
   options:["Data (forwarding) plane","Power supply","Physical cabling","DNS service"], answer:0,
   explain:"SDN decouples control (decision-making) from the data/forwarding plane for centralized control."},
  {q:"The SDN component that programs the network devices centrally is the:",
   options:["SDN controller","Access point","Patch panel","Modem"], answer:0,
   explain:"An SDN controller centrally manages and programs the forwarding devices."},
  {q:"A key benefit of SDN is:",
   options:["Centralized, programmable, automated network management","Elimination of all switches","No need for IP addresses","Guaranteed wireless range"], answer:0,
   explain:"SDN enables centralized, programmable, and automated control of the network."}
],
// 1.8 VXLAN
"eBhqN6d6lRU": [
  {q:"VXLAN is used to:",
   options:["Extend Layer 2 segments over a Layer 3 network","Assign IP addresses","Replace DNS","Provide PoE"], answer:0,
   explain:"VXLAN tunnels Layer 2 traffic across a Layer 3 underlay, greatly expanding segment scalability."},
  {q:"VXLAN dramatically increases the number of available segments compared to VLANs by using a:",
   options:["24-bit VNI (vs 12-bit VLAN ID)","32-bit IP","48-bit MAC","16-bit port"], answer:0,
   explain:"VXLAN's 24-bit VNI allows ~16 million segments vs 4094 with 12-bit VLAN IDs."},
  {q:"VXLAN is especially useful in:",
   options:["Large multi-tenant data centers","Home dial-up","Analog phone systems","Single-PC setups"], answer:0,
   explain:"VXLAN scales Layer 2 across data centers, ideal for multi-tenant environments."}
],
// 1.8 Zero Trust
"jlMwWL4yalM": [
  {q:"Zero Trust networking is based on the principle:",
   options:["Never trust, always verify","Trust the internal LAN fully","Trust after first login","Trust all VLANs"], answer:0,
   explain:"Zero Trust removes implicit trust and verifies every access request."},
  {q:"Dividing the network into very small zones to limit lateral movement is:",
   options:["Microsegmentation","Broadcasting","Trunking","Looping"], answer:0,
   explain:"Microsegmentation isolates workloads so a breach can't spread freely."},
  {q:"In Zero Trust, access decisions are ideally based on:",
   options:["Identity, device posture, and context per request","Network location alone","MAC address only","Cable type"], answer:0,
   explain:"Zero Trust evaluates identity, device health, and context for each request."}
],
// 1.8 Infrastructure as Code
"n6jIaKWixF4": [
  {q:"Infrastructure as Code (IaC) manages infrastructure using:",
   options:["Machine-readable configuration files","Manual CLI steps each time","Paper runbooks","Phone calls"], answer:0,
   explain:"IaC defines infrastructure in version-controlled files for automation and consistency."},
  {q:"A major benefit of IaC is:",
   options:["Consistent, repeatable, automated deployments","Slower provisioning","Undocumented changes","Random configurations"], answer:0,
   explain:"IaC yields repeatable, consistent, and auditable deployments."},
  {q:"Playbooks and templates in IaC support:",
   options:["Automation and orchestration of configuration","Physical cable runs","Fiber polishing","Analog modems"], answer:0,
   explain:"IaC uses templates/playbooks to automate and orchestrate configuration."}
],
// 1.8 IPv6 Addressing
"CpLznUxkzg8": [
  {q:"How many bits is an IPv6 address?",
   options:["128","32","64","48"], answer:0,
   explain:"IPv6 addresses are 128 bits, vastly larger than IPv4's 32 bits."},
  {q:"Which IPv6 address type begins with FE80:: and is used only on the local link?",
   options:["Link-local","Global unicast","Multicast","Loopback"], answer:0,
   explain:"FE80::/10 link-local addresses are valid only on the local segment."},
  {q:"IPv6 eliminates the need for which IPv4 technology in many cases?",
   options:["NAT","DNS","Routing","Switching"], answer:0,
   explain:"IPv6's huge address space reduces the need for NAT (though it uses other transition tools)."}
]
});

/* ===================== SECTION 2: Network Implementation ===================== */
Object.assign(VIDEO_QUIZZES, {
// 2.1 Static Routing
"23a6_qexTvs": [
  {q:"A static route is best described as:",
   options:["A manually configured route entry","A route learned automatically from neighbors","A wireless channel","A VLAN tag"], answer:0,
   explain:"Static routes are manually entered by an administrator and don't change automatically."},
  {q:"A default route (0.0.0.0/0) is used to:",
   options:["Send traffic with no specific route match to a next hop","Block all traffic","Assign IPs","Filter MAC addresses"], answer:0,
   explain:"The default route (gateway of last resort) handles destinations not in the routing table."},
  {q:"A drawback of static routing in large networks is:",
   options:["It doesn't adapt automatically to topology changes","It uses too much CPU learning routes","It floods the network","It requires DHCP"], answer:0,
   explain:"Static routes must be manually updated, which doesn't scale and can't react to failures automatically."}
],
// 2.1 Dynamic Routing
"YRZxshxI1xs": [
  {q:"Which of the following is a dynamic routing protocol?",
   options:["OSPF","ARP","DHCP","ICMP"], answer:0,
   explain:"OSPF (and EIGRP, BGP, RIP) are dynamic routing protocols that share route information."},
  {q:"OSPF is classified as which type of routing protocol?",
   options:["Link-state","Distance-vector","Path-vector only","Static"], answer:0,
   explain:"OSPF is a link-state protocol that builds a map of the network using link costs."},
  {q:"BGP is the routing protocol that:",
   options:["Routes between autonomous systems on the internet","Only works on a single LAN","Assigns IP addresses","Encrypts traffic"], answer:0,
   explain:"BGP is the path-vector protocol used for routing between autonomous systems (the internet)."}
],
// 2.1 Routing Technologies
"hU9bbmFhKxk": [
  {q:"Administrative distance is used by a router to:",
   options:["Choose between routes learned from different sources","Encrypt routing updates","Assign VLANs","Set the MTU"], answer:0,
   explain:"Administrative distance ranks the trustworthiness of route sources when multiple exist."},
  {q:"A routing metric such as hop count or bandwidth helps a router:",
   options:["Select the best path to a destination","Assign IP addresses","Filter MAC addresses","Provide PoE"], answer:0,
   explain:"Metrics let a protocol choose the best route among multiple options to the same network."},
  {q:"Traffic shaping / QoS on a router is used to:",
   options:["Prioritize certain traffic and manage bandwidth","Encrypt the disk","Assign DNS","Terminate fiber"], answer:0,
   explain:"QoS/traffic shaping prioritizes important traffic (e.g., voice) and controls bandwidth use."}
],
// 2.1 NAT
"UILwCNOC5EI": [
  {q:"Network Address Translation (NAT) primarily allows:",
   options:["Multiple private hosts to share public IP address(es)","Faster DNS lookups","VLAN trunking","Wireless roaming"], answer:0,
   explain:"NAT maps private addresses to public ones, conserving public IPs and hiding internal hosts."},
  {q:"PAT (Port Address Translation) distinguishes multiple internal hosts by using:",
   options:["Unique source port numbers","Different MAC addresses","Separate VLANs","Different cables"], answer:0,
   explain:"PAT (NAT overload) multiplexes many hosts onto one public IP using unique port numbers."},
  {q:"A device that translates a single public IP to one specific internal server uses:",
   options:["Static NAT / port forwarding","Dynamic routing","STP","DHCP snooping"], answer:0,
   explain:"Static NAT/port forwarding maps a public IP:port to a specific internal host."}
],
// 2.2 VLANs and Trunking
"ATbzbST_OIw": [
  {q:"A VLAN provides:",
   options:["Logical segmentation of a switch into separate broadcast domains","Physical cabling","IP address assignment","Power over Ethernet"], answer:0,
   explain:"VLANs logically separate a switch into isolated broadcast domains."},
  {q:"A trunk port between switches typically uses which tagging standard?",
   options:["802.1Q","802.3af","802.11ax","802.1X"], answer:0,
   explain:"802.1Q tags frames with VLAN IDs so multiple VLANs traverse a single trunk link."},
  {q:"The native VLAN on an 802.1Q trunk carries traffic that is:",
   options:["Untagged","Double-tagged always","Encrypted","Dropped"], answer:0,
   explain:"Frames on the native VLAN are sent untagged across the trunk."}
],
// 2.2 Interface Configurations
"dno_MRp57UQ": [
  {q:"A duplex mismatch (one side full, other half) typically causes:",
   options:["Late collisions and poor performance","Faster throughput","IP conflicts","VLAN hopping"], answer:0,
   explain:"Duplex mismatches cause collisions, retransmissions, and severe performance drops."},
  {q:"Enabling Power over Ethernet (PoE) on a switch port allows it to:",
   options:["Supply electrical power to devices like APs and phones","Route between VLANs","Encrypt traffic","Assign DNS"], answer:0,
   explain:"PoE delivers power over the Ethernet cable to devices such as APs, phones, and cameras."},
  {q:"Jumbo frames increase performance by:",
   options:["Allowing larger MTU payloads, reducing overhead","Encrypting each frame","Shrinking packets","Disabling VLANs"], answer:0,
   explain:"Jumbo frames raise MTU (e.g., ~9000 bytes), reducing per-frame overhead for bulk transfers."}
],
// 2.2 Spanning Tree Protocol
"Jm0BOz1Ur28": [
  {q:"Spanning Tree Protocol (STP) prevents:",
   options:["Layer 2 switching loops","IP address conflicts","DNS poisoning","Wireless interference"], answer:0,
   explain:"STP blocks redundant paths to prevent broadcast storms and Layer 2 loops."},
  {q:"An STP port that is placed into blocking to prevent a loop will:",
   options:["Not forward user frames until needed","Assign IPs","Provide PoE","Terminate fiber"], answer:0,
   explain:"Blocked ports don't forward frames, breaking the loop while providing a backup path."},
  {q:"BPDU Guard is used to:",
   options:["Disable a port if it unexpectedly receives BPDUs","Speed up DNS","Assign VLANs automatically","Encrypt trunks"], answer:0,
   explain:"BPDU Guard protects edge/access ports by shutting them down if a switch (BPDU) is detected."}
],
// 2.3 Wireless Technologies
"_VwpcLiBkAQ": [
  {q:"A wireless network in infrastructure mode connects clients through a(n):",
   options:["Access point","Ad-hoc peer","Router loopback","Patch panel"], answer:0,
   explain:"Infrastructure mode uses an AP as the central connection point (vs ad-hoc peer-to-peer)."},
  {q:"Multiple access points sharing the same SSID to allow roaming form a(n):",
   options:["Extended Service Set (ESS)","Single BSS only","VLAN trunk","Mesh of routers"], answer:0,
   explain:"An ESS is multiple BSSs (APs) with the same SSID enabling seamless roaming."},
  {q:"MIMO (multiple input, multiple output) improves wireless by:",
   options:["Using multiple antennas/streams to boost throughput","Encrypting frames","Assigning IPs","Reducing range to zero"], answer:0,
   explain:"MIMO uses multiple antennas and spatial streams to increase throughput and reliability."}
],
// 2.3 Wireless Networking
"YEDutqG4C4U": [
  {q:"When designing wireless coverage, a heat map is used to:",
   options:["Visualize signal strength across an area","Measure CPU temperature","Assign IP addresses","Configure VLANs"], answer:0,
   explain:"Wireless heat maps show signal coverage/strength to guide AP placement."},
  {q:"To avoid co-channel interference between nearby APs in 2.4 GHz, you should:",
   options:["Use non-overlapping channels (1, 6, 11)","Set them all to channel 1","Disable encryption","Use the same channel everywhere"], answer:0,
   explain:"Assigning non-overlapping channels (1/6/11) minimizes interference between adjacent APs."},
  {q:"Increasing AP transmit power too high can cause:",
   options:["Co-channel interference and roaming issues","Better security","Lower latency always","More IP addresses"], answer:0,
   explain:"Excessive power causes overlap/interference and poor roaming; proper cell sizing is better."}
],
// 2.3 Network Types
"8ExS_LYAe-M": [
  {q:"A network covering a single building or campus is a:",
   options:["LAN","WAN","PAN","MAN spanning cities"], answer:0,
   explain:"A LAN (Local Area Network) covers a limited area like a building or campus."},
  {q:"A network connecting sites across large geographic distances is a:",
   options:["WAN","LAN","PAN","SAN"], answer:0,
   explain:"A WAN (Wide Area Network) spans large distances, often between cities/countries."},
  {q:"A high-speed network dedicated to block-level storage access is a:",
   options:["SAN","PAN","WLAN","CAN"], answer:0,
   explain:"A SAN (Storage Area Network) provides high-speed access to consolidated storage."}
],
// 2.3 Wireless Encryption
"YNcobcHXnnY": [
  {q:"Which is the most secure current wireless encryption standard?",
   options:["WPA3","WEP","WPA","Open"], answer:0,
   explain:"WPA3 is the latest and most secure; WEP and original WPA are deprecated."},
  {q:"WPA3-Personal improves on WPA2-Personal by using which handshake?",
   options:["SAE (Simultaneous Authentication of Equals)","4-way WEP handshake","PAP","CHAP"], answer:0,
   explain:"WPA3 uses SAE, which resists offline dictionary attacks better than WPA2-PSK."},
  {q:"WPA2/WPA3-Enterprise authenticates users via which server?",
   options:["RADIUS (802.1X)","DHCP","DNS","NTP"], answer:0,
   explain:"Enterprise mode uses 802.1X with a RADIUS server for per-user authentication."}
],
// 2.4 Installing Networks
"7NLsuBIvVVA": [
  {q:"A structured cabling run from a wall jack back to the wiring closet terminates at a:",
   options:["Patch panel","Router loopback","Modem","Access point"], answer:0,
   explain:"Horizontal cabling terminates at a patch panel in the telecommunications room."},
  {q:"The main distribution frame (MDF) connects to intermediate distribution frames (IDFs) to:",
   options:["Extend the network to different floors/areas","Encrypt traffic","Assign IPs","Provide DNS"], answer:0,
   explain:"The MDF is the main hub; IDFs distribute connectivity to different building areas/floors."},
  {q:"A 66/110 punch-down block is used to:",
   options:["Terminate and organize twisted-pair cabling","Convert fiber to copper","Route between subnets","Provide PoE"], answer:0,
   explain:"Punch-down blocks terminate and cross-connect twisted-pair wiring."}
],
// 2.4 Power
"Ok0XpAzwCVQ": [
  {q:"A UPS in a network closet provides:",
   options:["Short-term battery power during outages","Long-term power for weeks","IP addressing","Fiber termination"], answer:0,
   explain:"A UPS supplies temporary battery power to ride through outages and allow graceful shutdown."},
  {q:"A PDU (Power Distribution Unit) in a rack is used to:",
   options:["Distribute power to multiple devices","Assign VLANs","Terminate fiber","Route packets"], answer:0,
   explain:"A PDU distributes electrical power to rack-mounted equipment, often with monitoring."},
  {q:"A generator complements a UPS by providing:",
   options:["Longer-term power during extended outages","Faster CPUs","Encryption","DNS resolution"], answer:0,
   explain:"Generators supply longer-term power; the UPS bridges the gap until the generator starts."}
],
// 2.4 Environmental Factors
"v7AIXZi7pyA": [
  {q:"Data center HVAC systems are critical because equipment failure often results from:",
   options:["Excessive heat / poor cooling","Too much bandwidth","Low IP address counts","Fiber that is too clean"], answer:0,
   explain:"Proper temperature and humidity control prevents overheating and hardware failure."},
  {q:"Hot aisle/cold aisle layout in a data center is designed to:",
   options:["Improve cooling efficiency","Increase Wi-Fi range","Assign IPs","Encrypt data"], answer:0,
   explain:"Alternating hot/cold aisles separates intake and exhaust air for efficient cooling."},
  {q:"Monitoring humidity matters because low humidity increases the risk of:",
   options:["Electrostatic discharge (ESD)","Broadcast storms","IP conflicts","VLAN hopping"], answer:0,
   explain:"Low humidity raises ESD risk; high humidity risks condensation — both must be controlled."}
]
});

/* ===================== SECTION 3: Network Operations ===================== */
Object.assign(VIDEO_QUIZZES, {
// 3.1 Network Documentation
"CEZyq-fBn3w": [
  {q:"A physical network diagram primarily shows:",
   options:["Actual device locations, cabling, and ports","IP subnets and VLANs only","Routing protocols only","User passwords"], answer:0,
   explain:"Physical diagrams depict real device placement, racks, and cabling; logical diagrams show IP/VLAN flow."},
  {q:"An IP Address Management (IPAM) system helps to:",
   options:["Track and manage IP address assignments","Encrypt traffic","Provide PoE","Terminate fiber"], answer:0,
   explain:"IPAM centrally tracks IP allocations, subnets, and DNS/DHCP data."},
  {q:"A rack diagram documents:",
   options:["The layout of equipment within a rack (U positions)","Wireless coverage","Routing tables","DNS records"], answer:0,
   explain:"Rack diagrams show what device occupies each rack unit (U) position."}
],
// 3.1 Life Cycle Management
"E8423-hdsHg": [
  {q:"'End of life' (EOL) for network hardware means the vendor:",
   options:["No longer sells or fully supports the product","Will support it forever","Ships free upgrades","Encrypts it automatically"], answer:0,
   explain:"EOL products are no longer sold/updated and should be planned for replacement."},
  {q:"'End of support' (EOS) is a security concern because:",
   options:["No more patches/updates are released","Speeds increase","IPs expire","Cables degrade"], answer:0,
   explain:"After EOS, no security patches are issued, leaving known flaws unfixed."},
  {q:"A software/firmware update process should always include:",
   options:["Testing and a rollback plan","Skipping backups","Applying to all devices at once with no testing","Disabling monitoring"], answer:0,
   explain:"Updates should be tested and have a rollback plan to recover if issues arise."}
],
// 3.1 Configuration Management
"cbHcjzlLjuc": [
  {q:"A configuration baseline is used to:",
   options:["Define a known-good standard configuration to compare against","Assign IP addresses","Encrypt the disk","Provide PoE"], answer:0,
   explain:"A baseline is the documented standard configuration used to detect drift and restore devices."},
  {q:"Keeping backups of device configurations allows you to:",
   options:["Quickly restore a device after failure or misconfiguration","Increase bandwidth","Skip documentation","Disable STP"], answer:0,
   explain:"Config backups enable rapid recovery/restore after a failure or bad change."},
  {q:"Version control for network configs helps by:",
   options:["Tracking changes and enabling rollback","Encrypting frames","Assigning VLANs automatically","Providing DNS"], answer:0,
   explain:"Versioning records what changed and lets you revert to a prior working config."}
],
// 3.2 SNMP
"We5MkaEJOs0": [
  {q:"SNMP is used to:",
   options:["Monitor and manage network devices","Assign IP addresses","Encrypt web traffic","Resolve domain names"], answer:0,
   explain:"Simple Network Management Protocol collects status/metrics and can manage devices."},
  {q:"Which SNMP version adds authentication and encryption?",
   options:["SNMPv3","SNMPv1","SNMPv2c","SNMPv0"], answer:0,
   explain:"SNMPv3 adds security (authentication and encryption); v1/v2c use plaintext community strings."},
  {q:"An SNMP 'trap' is:",
   options:["An unsolicited alert sent from a device to the manager","A query from the manager","A DNS record","A VLAN tag"], answer:0,
   explain:"Traps are device-initiated notifications sent to the SNMP manager when events occur."}
],
// 3.2 Logs and Monitoring
"ieqSi5Aicxc": [
  {q:"Centralizing logs from many devices to one server is done with:",
   options:["Syslog","DHCP","STP","ARP"], answer:0,
   explain:"Syslog forwards log messages to a central collector for storage and analysis."},
  {q:"Syslog severity levels help administrators:",
   options:["Prioritize messages from emergencies to informational","Assign IPs","Encrypt frames","Set VLANs"], answer:0,
   explain:"Severity levels (0 emergency … 7 debug) let you filter and prioritize log messages."},
  {q:"Baseline metrics for network monitoring are important because they:",
   options:["Establish 'normal' so anomalies can be detected","Encrypt traffic","Assign DNS","Provide PoE"], answer:0,
   explain:"A performance baseline defines normal behavior, making deviations easier to spot."}
],
// 3.2 Network Solutions
"zIX_SzezCi0": [
  {q:"A SIEM in network operations is used to:",
   options:["Aggregate and correlate logs/events for analysis and alerting","Assign IP addresses","Terminate fiber","Provide PoE"], answer:0,
   explain:"SIEM centralizes logs and correlates events to detect and alert on issues."},
  {q:"NetFlow (or similar flow data) provides visibility into:",
   options:["Traffic patterns and top talkers on the network","Cable lengths","Fiber polish angles","Rack U positions"], answer:0,
   explain:"Flow data reveals who is talking to whom and how much, useful for capacity and security."},
  {q:"SNMP polling combined with a monitoring dashboard helps teams:",
   options:["Track device health and utilization over time","Encrypt the disk","Assign VLANs","Set DNS records"], answer:0,
   explain:"Polling device metrics and visualizing them supports proactive operations."}
],
// 3.3 Disaster Recovery
"NaXMohP4-vU": [
  {q:"RTO (Recovery Time Objective) defines:",
   options:["The maximum acceptable time to restore a service","How much data can be lost","The number of hosts","The cable category"], answer:0,
   explain:"RTO is the target time to bring a service back online after disruption."},
  {q:"RPO (Recovery Point Objective) defines:",
   options:["The maximum acceptable data loss in time","How fast to restore","The MTU size","The VLAN ID"], answer:0,
   explain:"RPO is how much data (in time) can be lost, which drives backup frequency."},
  {q:"A fully equipped alternate facility ready to take over almost immediately is a:",
   options:["Hot site","Cold site","Warm site","Empty site"], answer:0,
   explain:"A hot site is fully operational and ready; cold sites provide only space/power."}
],
// 3.3 Network Redundancy
"dsvNPjK0ihM": [
  {q:"First Hop Redundancy Protocols (like HSRP/VRRP) provide:",
   options:["A redundant default gateway for hosts","Wireless roaming","IP address leasing","DNS resolution"], answer:0,
   explain:"FHRPs (HSRP, VRRP, GLBP) present a virtual gateway so hosts keep connectivity if one router fails."},
  {q:"Link aggregation (LACP) combines multiple physical links to:",
   options:["Increase bandwidth and provide redundancy","Assign IPs","Encrypt traffic","Reduce MTU"], answer:0,
   explain:"LACP bundles links for greater throughput and failover if one link goes down."},
  {q:"High availability is achieved by:",
   options:["Eliminating single points of failure with redundancy","Using a single powerful device only","Disabling backups","Reducing links to one"], answer:0,
   explain:"HA uses redundant components and failover paths to maintain uptime."}
],
// 3.4 DHCP
"b7fiXM3vO18": [
  {q:"What does DHCP provide to clients?",
   options:["IP address, subnet mask, gateway, and DNS","Only a MAC address","Only a hostname","Only a VLAN tag"], answer:0,
   explain:"DHCP leases full IP configuration: address, mask, default gateway, and DNS servers."},
  {q:"The DHCP process follows which order?",
   options:["Discover, Offer, Request, Acknowledge (DORA)","Request, Reply, Reset","SYN, ACK, FIN","Query, Response"], answer:0,
   explain:"DHCP uses DORA: Discover → Offer → Request → Acknowledge."},
  {q:"A DHCP reservation ensures a device always receives:",
   options:["The same IP address (mapped to its MAC)","A random IP each time","No IP address","A public IP always"], answer:0,
   explain:"A reservation ties a specific IP to a device's MAC so it gets a consistent address."}
],
// 3.4 Configuring DHCP
"Zu70w3YTtpg": [
  {q:"A DHCP relay agent (IP helper) is needed when:",
   options:["Clients and the DHCP server are on different subnets","All devices share one subnet","There is no DNS","Using static IPs only"], answer:0,
   explain:"Because DHCP Discover is a broadcast, a relay forwards it to a server on another subnet."},
  {q:"The DHCP 'scope' defines:",
   options:["The range of IP addresses available to lease","The encryption key","The VLAN native ID","The routing metric"], answer:0,
   explain:"A scope is the pool of addresses (and options) a DHCP server can hand out."},
  {q:"An exclusion range within a DHCP scope is used to:",
   options:["Reserve addresses (e.g., for servers) from being leased","Encrypt leases","Speed up DNS","Create VLANs"], answer:0,
   explain:"Exclusions keep specific addresses from being dynamically assigned (e.g., static devices)."}
],
// 3.4 IPv6 and SLAAC
"A6WVj82by3Y": [
  {q:"SLAAC allows an IPv6 host to:",
   options:["Automatically configure its own address without a DHCP server","Only use IPv4","Get a MAC address","Encrypt traffic"], answer:0,
   explain:"Stateless Address Autoconfiguration lets hosts self-assign IPv6 addresses using router advertisements."},
  {q:"Which ICMPv6 message do routers send to help hosts with SLAAC?",
   options:["Router Advertisement (RA)","DHCP Offer","ARP Reply","DNS Response"], answer:0,
   explain:"Routers send Router Advertisements containing the prefix hosts use for SLAAC."},
  {q:"EUI-64 is a method to generate the IPv6 interface ID from the:",
   options:["MAC address","IP subnet mask","VLAN ID","Serial number"], answer:0,
   explain:"EUI-64 derives the 64-bit interface identifier from the device's 48-bit MAC address."}
],
// 3.4 An Overview of DNS
"S4s3vgm4h84": [
  {q:"DNS primarily provides:",
   options:["Resolution of domain names to IP addresses","IP address leasing","Encryption of web traffic","Time synchronization"], answer:0,
   explain:"DNS translates human-friendly names (e.g., example.com) to IP addresses."},
  {q:"A recursive DNS resolver:",
   options:["Queries other servers on the client's behalf until it finds the answer","Only stores zone files","Assigns IPs","Provides PoE"], answer:0,
   explain:"A recursive resolver performs the full lookup chain and returns the final answer to the client."},
  {q:"DNS primarily uses which port?",
   options:["53","80","443","25"], answer:0,
   explain:"DNS uses port 53 (UDP for queries, TCP for zone transfers/large responses)."}
],
// 3.4 DNS Records
"qAyVND44jaE": [
  {q:"Which DNS record maps a hostname to an IPv4 address?",
   options:["A record","AAAA record","MX record","CNAME"], answer:0,
   explain:"An A record maps a name to an IPv4 address; AAAA maps to IPv6."},
  {q:"An MX record is used to identify:",
   options:["The mail server for a domain","A web server","A name alias","A text value"], answer:0,
   explain:"MX (Mail Exchange) records specify the mail servers responsible for a domain."},
  {q:"A CNAME record provides:",
   options:["An alias pointing one name to another name","An IPv6 address","A mail server","A reverse lookup only"], answer:0,
   explain:"CNAME (canonical name) aliases one hostname to another."}
],
// 3.4 Time Protocols
"9MwHexC3Fkc": [
  {q:"NTP is used to:",
   options:["Synchronize clocks across devices","Assign IP addresses","Resolve names","Encrypt traffic"], answer:0,
   explain:"Network Time Protocol keeps device clocks accurate and synchronized."},
  {q:"Accurate time is critical for which of the following?",
   options:["Log correlation, certificates, and authentication (e.g., Kerberos)","Cable termination","Fiber polishing","PoE budgeting"], answer:0,
   explain:"Many systems (logs, TLS certs, Kerberos) depend on synchronized, accurate time."},
  {q:"NTP 'stratum' indicates:",
   options:["The distance/hierarchy from an authoritative time source","The VLAN ID","The IP class","The cable category"], answer:0,
   explain:"Stratum levels show how many hops a time source is from a reference clock (stratum 0)."}
],
// 3.5 VPNs
"tm7i0zEitPQ": [
  {q:"A site-to-site VPN is used to:",
   options:["Securely connect two networks over the internet","Connect one laptop to Wi-Fi","Assign IP addresses","Provide DNS"], answer:0,
   explain:"Site-to-site VPNs link entire networks (e.g., branch offices) securely over the internet."},
  {q:"Which protocol suite is commonly used to build secure VPN tunnels?",
   options:["IPsec","HTTP","SNMPv1","Telnet"], answer:0,
   explain:"IPsec provides encryption/authentication at the network layer for VPNs."},
  {q:"In a full-tunnel client VPN, which traffic goes through the tunnel?",
   options:["All of the client's traffic","Only local LAN traffic","No traffic","Only DNS"], answer:0,
   explain:"Full tunnel sends all client traffic through the VPN; split tunnel sends only some."}
],
// 3.5 Remote Access
"QbEDRTjcom4": [
  {q:"Which protocol provides secure command-line remote access?",
   options:["SSH","Telnet","HTTP","FTP"], answer:0,
   explain:"SSH encrypts remote CLI sessions, replacing insecure Telnet."},
  {q:"RDP (Remote Desktop Protocol) uses which default port?",
   options:["3389","22","23","443"], answer:0,
   explain:"RDP uses TCP port 3389 for remote graphical desktop access."},
  {q:"A clientless remote access solution often uses which technology in a browser?",
   options:["SSL/TLS VPN (HTTPS portal)","Telnet","SNMP","ARP"], answer:0,
   explain:"Clientless SSL/TLS VPNs provide access through an HTTPS browser portal without a full VPN client."}
]
});

/* ===================== SECTION 4: Network Security ===================== */
Object.assign(VIDEO_QUIZZES, {
// 4.1 Security Concepts
"51W4Fhds7DQ": [
  {q:"The CIA triad stands for:",
   options:["Confidentiality, Integrity, Availability","Control, Identity, Access","Cipher, Index, Auth","Cloud, Internet, Access"], answer:0,
   explain:"The CIA triad is Confidentiality, Integrity, and Availability."},
  {q:"Defense in depth refers to:",
   options:["Layering multiple security controls","Using a single strong firewall only","Disabling logging","Trusting the internal LAN"], answer:0,
   explain:"Defense in depth layers controls so no single failure exposes everything."},
  {q:"The principle of least privilege means giving users:",
   options:["Only the access needed to do their job","Full admin rights","Access to all VLANs","No access at all"], answer:0,
   explain:"Least privilege limits access to the minimum necessary, reducing risk."}
],
// 4.1 Authentication
"enyRd-8m8SI": [
  {q:"Multifactor authentication requires factors from:",
   options:["Different categories (e.g., know + have)","Two passwords","The same category twice","One factor only"], answer:0,
   explain:"MFA combines different factor types: something you know, have, are, etc."},
  {q:"Which protocol is commonly used for centralized network device authentication (AAA)?",
   options:["RADIUS or TACACS+","DHCP","ICMP","NTP"], answer:0,
   explain:"RADIUS and TACACS+ provide centralized authentication, authorization, and accounting."},
  {q:"802.1X port-based authentication involves a supplicant, an authenticator, and a(n):",
   options:["Authentication server (RADIUS)","DNS server","DHCP relay","NTP server"], answer:0,
   explain:"802.1X uses the supplicant (client), authenticator (switch/AP), and RADIUS auth server."}
],
// 4.1 Security Technologies
"qIQQKCv6P_s": [
  {q:"An IPS differs from an IDS in that an IPS can:",
   options:["Actively block malicious traffic inline","Only log events","Only send email","Assign IPs"], answer:0,
   explain:"An IPS sits inline and blocks; an IDS only detects and alerts."},
  {q:"A NAC (Network Access Control) solution is used to:",
   options:["Assess and control device access based on posture/policy","Assign DNS records","Terminate fiber","Provide PoE only"], answer:0,
   explain:"NAC checks device compliance/identity before granting network access."},
  {q:"A honeypot is deployed to:",
   options:["Attract and study attackers","Speed up the network","Assign IPs","Encrypt backups"], answer:0,
   explain:"A honeypot is a decoy that lures attackers so their behavior can be observed."}
],
// 4.1 Regulatory Compliance
"5KjXu7SvU6E": [
  {q:"PCI DSS compliance applies to organizations that:",
   options:["Handle credit card / payment data","Only use IPv6","Have no internet","Run DNS servers"], answer:0,
   explain:"PCI DSS governs the secure handling of payment card data."},
  {q:"Regulations like HIPAA primarily protect:",
   options:["Health information (PHI)","Router configs","Cable standards","VLAN IDs"], answer:0,
   explain:"HIPAA protects sensitive health information (PHI)."},
  {q:"A key reason to maintain regulatory compliance is to avoid:",
   options:["Fines, penalties, and legal liability","Faster networks","More IP addresses","Better Wi-Fi"], answer:0,
   explain:"Non-compliance carries fines, penalties, and legal/reputational consequences."}
],
// 4.1 Segmentation Enforcement
"DsOzQLX5cg4": [
  {q:"Network segmentation improves security by:",
   options:["Limiting lateral movement between zones","Increasing broadcast domains for speed","Removing authentication","Disabling encryption"], answer:0,
   explain:"Segmentation isolates zones so a compromise can't spread freely across the network."},
  {q:"Placing IoT devices on a separate VLAN is an example of:",
   options:["Segmentation to contain risk","Trunking all traffic","Disabling STP","Static routing only"], answer:0,
   explain:"Isolating IoT on its own VLAN limits exposure if those devices are compromised."},
  {q:"A screened subnet (DMZ) is used to:",
   options:["Host public-facing services separated from the internal LAN","Store backups offline","Assign IPs","Provide PoE"], answer:0,
   explain:"A DMZ isolates internet-facing servers from the trusted internal network."}
],
// 4.2 Denial of Service
"x8dIr6JYkjA": [
  {q:"A Distributed Denial of Service (DDoS) attack uses:",
   options:["Many compromised hosts (a botnet) to overwhelm a target","A single phishing email","One stolen password","A DNS record"], answer:0,
   explain:"DDoS leverages many distributed hosts to flood and overwhelm a target's availability."},
  {q:"A DoS/DDoS attack primarily harms which security goal?",
   options:["Availability","Confidentiality","Integrity","Non-repudiation"], answer:0,
   explain:"DoS attacks aim to make services unavailable to legitimate users."},
  {q:"An amplification attack (e.g., DNS/NTP) works by:",
   options:["Generating large responses to small spoofed requests","Encrypting the target","Assigning IPs","Filtering MACs"], answer:0,
   explain:"Amplification abuses protocols so small spoofed requests trigger large responses at the victim."}
],
// 4.2 VLAN Hopping
"hcaGiWteVTM": [
  {q:"VLAN hopping allows an attacker to:",
   options:["Access traffic on VLANs they shouldn't reach","Assign IP addresses","Encrypt frames","Provide PoE"], answer:0,
   explain:"VLAN hopping lets an attacker send/receive traffic on other VLANs, bypassing segmentation."},
  {q:"Double-tagging VLAN hopping is mitigated by:",
   options:["Not using the native VLAN for user data / changing native VLAN","Enabling PoE","Using longer cables","Disabling DNS"], answer:0,
   explain:"Avoiding/hardening the native VLAN and pruning trunks prevents double-tagging attacks."},
  {q:"Switch-spoofing VLAN hopping is prevented by:",
   options:["Disabling DTP / setting ports to access mode","Enabling jumbo frames","Increasing MTU","Using fiber"], answer:0,
   explain:"Disabling auto-trunk negotiation (DTP) and hardcoding access ports stops switch spoofing."}
],
// 4.2 MAC Flooding
"ttLNYwt-aq0": [
  {q:"A MAC flooding attack targets a switch's:",
   options:["MAC address table (CAM table)","Routing table","DNS cache","DHCP scope"], answer:0,
   explain:"Flooding fake MACs overflows the CAM table, forcing the switch to flood traffic."},
  {q:"When a switch's MAC table is overflowed, the switch behaves like a:",
   options:["Hub, flooding frames out all ports","Router","Firewall","DNS server"], answer:0,
   explain:"An overflowed switch floods frames to all ports, letting the attacker sniff traffic."},
  {q:"Which feature mitigates MAC flooding?",
   options:["Port security (limit MACs per port)","Jumbo frames","PoE","Longer cables"], answer:0,
   explain:"Port security limits the number of MAC addresses per port, stopping flooding attacks."}
],
// 4.2 ARP and DNS Poisoning
"2QijB5GtNE4": [
  {q:"ARP poisoning enables an on-path attack by:",
   options:["Associating the attacker's MAC with another host's IP","Changing DNS records","Overflowing the CAM table","Assigning IPs"], answer:0,
   explain:"Spoofed ARP replies redirect traffic through the attacker for interception."},
  {q:"DNS poisoning results in:",
   options:["Users being sent to a malicious IP for a legitimate name","Faster lookups","More IP addresses","PoE failures"], answer:0,
   explain:"Poisoning corrupts DNS resolution so a trusted name resolves to an attacker's server."},
  {q:"Which feature helps mitigate ARP poisoning on a switch?",
   options:["Dynamic ARP Inspection (DAI)","Jumbo frames","PoE","Rollover cables"], answer:0,
   explain:"Dynamic ARP Inspection validates ARP packets against trusted DHCP snooping data."}
],
// 4.2 Rogue Services
"6AcRzyPuOL8": [
  {q:"A rogue DHCP server on a network can cause:",
   options:["Clients receiving incorrect IP/gateway settings","Faster DNS","More bandwidth","Better encryption"], answer:0,
   explain:"A rogue DHCP server can hand out bad configs, redirecting or disrupting clients."},
  {q:"DHCP snooping mitigates rogue DHCP servers by:",
   options:["Only allowing DHCP offers from trusted ports","Encrypting leases","Increasing MTU","Disabling VLANs"], answer:0,
   explain:"DHCP snooping marks trusted ports and drops DHCP server messages from untrusted ports."},
  {q:"A rogue access point is dangerous because it:",
   options:["Provides an unauthorized, often insecure entry to the network","Speeds up Wi-Fi","Assigns DNS","Adds PoE"], answer:0,
   explain:"A rogue AP creates an unmanaged, insecure entry point that attackers can exploit."}
],
// 4.2 Social Engineering
"sF0uBtavItI": [
  {q:"Phishing is a social engineering attack that:",
   options:["Tricks users into revealing information or clicking malicious links","Floods a switch","Poisons ARP","Overflows a buffer"], answer:0,
   explain:"Phishing manipulates people via fraudulent messages to steal data or deliver malware."},
  {q:"An attacker following an employee through a secure door without badging is:",
   options:["Tailgating","Vishing","Smishing","Pharming"], answer:0,
   explain:"Tailgating (piggybacking) is physically following an authorized person through access control."},
  {q:"The best overall defense against social engineering is:",
   options:["User security awareness training","A faster firewall","More bandwidth","Longer cables"], answer:0,
   explain:"Educated, aware users are the strongest defense against social engineering."}
],
// 4.2 Malware
"rnfViZdGfmA": [
  {q:"Ransomware is malware that:",
   options:["Encrypts data and demands payment","Speeds up the network","Assigns IPs","Provides PoE"], answer:0,
   explain:"Ransomware encrypts files and demands ransom; offline backups aid recovery."},
  {q:"A worm differs from a virus because it:",
   options:["Self-replicates across networks without user action","Needs a host file to run","Cannot spread","Only affects printers"], answer:0,
   explain:"Worms propagate automatically over networks; viruses need a host and user action."},
  {q:"Which is a strong defense against malware on endpoints?",
   options:["Anti-malware/EDR plus patching","Disabling backups","Opening all ports","Sharing admin accounts"], answer:0,
   explain:"Endpoint protection combined with regular patching reduces malware risk."}
],
// 4.3 Device Security
"TZUh1qF6ypI": [
  {q:"A key step in hardening a network device is to:",
   options:["Change default credentials and disable unused services","Leave defaults in place","Open all ports","Disable logging"], answer:0,
   explain:"Removing/changing defaults and disabling unneeded services reduces attack surface."},
  {q:"Disabling unused switch ports helps prevent:",
   options:["Unauthorized devices connecting","Faster routing","DNS caching","PoE budgeting"], answer:0,
   explain:"Shutting unused ports stops rogue devices from gaining network access."},
  {q:"Using SSH instead of Telnet for device management provides:",
   options:["Encrypted management sessions","Faster CLI","More IP addresses","PoE"], answer:0,
   explain:"SSH encrypts management traffic; Telnet sends credentials in plaintext."}
],
// 4.3 Security Rules
"ORRcLSS9_Ps": [
  {q:"An ACL (Access Control List) on a router/firewall:",
   options:["Permits or denies traffic based on defined rules","Assigns IP addresses","Encrypts the disk","Provides PoE"], answer:0,
   explain:"ACLs filter traffic by criteria like source/destination IP, port, and protocol."},
  {q:"Firewall rules are typically processed:",
   options:["Top-down, with an implicit deny at the end","Randomly","Bottom-up only","Alphabetically"], answer:0,
   explain:"Most firewalls evaluate rules in order and apply an implicit deny for unmatched traffic."},
  {q:"URL/content filtering is used to:",
   options:["Block access to malicious or disallowed websites","Assign VLANs","Terminate fiber","Provide DHCP"], answer:0,
   explain:"Content filters restrict access to categories/URLs deemed risky or against policy."}
]
});

/* ===================== SECTION 5: Network Troubleshooting ===================== */
Object.assign(VIDEO_QUIZZES, {
// 5.1 Troubleshooting Methodology
"dovuPm3dGhc": [
  {q:"What is the FIRST step in the CompTIA troubleshooting methodology?",
   options:["Identify the problem","Establish a theory of probable cause","Implement the solution","Document findings"], answer:0,
   explain:"Step 1 is identify the problem (gather info, question users, determine changes)."},
  {q:"After establishing and testing a theory, the next step is to:",
   options:["Establish a plan of action to resolve the problem","Close the ticket immediately","Skip documentation","Reboot everything"], answer:0,
   explain:"Once the theory is confirmed, you create a plan of action to implement the solution."},
  {q:"The FINAL step in the troubleshooting process is to:",
   options:["Document findings, actions, and outcomes","Identify the problem","Escalate to vendor","Replace all hardware"], answer:0,
   explain:"The last step is documenting the problem, solution, and lessons learned."}
],
// 5.2 Cable Issues
"L6P6ovTEPvU": [
  {q:"Exceeding the 100-meter limit on twisted-pair Ethernet can cause:",
   options:["Attenuation and connectivity/performance problems","Faster speeds","More IP addresses","Better security"], answer:0,
   explain:"Beyond 100 m, signal attenuation degrades or breaks the connection."},
  {q:"Crosstalk between wire pairs is measured with tests like:",
   options:["NEXT/FEXT (near/far-end crosstalk)","Ping","Traceroute","nslookup"], answer:0,
   explain:"Crosstalk (NEXT/FEXT) is signal bleed between pairs, tested by a cable certifier."},
  {q:"A cable that is wired incorrectly with swapped pairs may show as a:",
   options:["Miswire / split pair on a cable tester","DNS failure","VLAN mismatch","Routing loop"], answer:0,
   explain:"A cable tester detects miswires, opens, shorts, and split pairs in terminations."}
],
// 5.2 Interface Issues
"7b4RkdITO4Q": [
  {q:"Increasing CRC errors on an interface usually indicate:",
   options:["Physical layer problems (bad cable, interference, duplex)","A DNS misconfiguration","An IP conflict","A VLAN error"], answer:0,
   explain:"CRC/frame errors point to physical issues like faulty cabling, EMI, or duplex mismatch."},
  {q:"Interface 'runts' and 'giants' refer to frames that are:",
   options:["Smaller or larger than allowed sizes","Encrypted or signed","On the wrong VLAN","Routed incorrectly"], answer:0,
   explain:"Runts are undersized frames; giants exceed the max size — often from errors or MTU issues."},
  {q:"An interface repeatedly going up and down is described as:",
   options:["Flapping","Trunking","Routing","Subnetting"], answer:0,
   explain:"Interface flapping (link up/down cycling) often stems from cabling or hardware faults."}
],
// 5.2 Hardware Issues
"_IeIUxDe1fo": [
  {q:"A network device that is overheating and shutting down is likely a(n):",
   options:["Environmental/hardware issue (cooling)","DNS issue","Routing loop","VLAN mismatch"], answer:0,
   explain:"Overheating points to cooling/environmental or hardware failures, not logical config."},
  {q:"A transceiver (SFP) that shows no light or errors should be:",
   options:["Reseated or replaced, and end-faces cleaned","Assigned a new IP","Added to a VLAN","Given more bandwidth"], answer:0,
   explain:"Faulty/dirty transceivers cause link issues; reseat/clean or replace the module."},
  {q:"Exceeding a switch's PoE power budget can cause:",
   options:["Powered devices failing to power on","Faster links","IP conflicts","DNS errors"], answer:0,
   explain:"If total PoE demand exceeds the budget, some devices won't receive power."}
],
// 5.3 Switching Issues
"rUONzfO11m8": [
  {q:"A device unable to reach others on the network may be in the wrong:",
   options:["VLAN","DNS zone","Time zone","Rack unit"], answer:0,
   explain:"An incorrect VLAN assignment isolates a device from its intended network."},
  {q:"A broadcast storm on a switched network is often caused by:",
   options:["A switching loop (missing/failed STP)","A DNS error","An expired certificate","A bad DHCP scope"], answer:0,
   explain:"Loops without STP cause broadcasts to circulate endlessly, saturating the network."},
  {q:"A native VLAN mismatch on a trunk between two switches can cause:",
   options:["VLAN traffic being misdirected and connectivity issues","Faster throughput","More IPs","Better security"], answer:0,
   explain:"Mismatched native VLANs cause traffic to cross into the wrong VLAN, breaking connectivity."}
],
// 5.3 Routing and IP Issues
"pbOi48USeVw": [
  {q:"Two devices with the same IP address will experience:",
   options:["An IP address conflict","Faster routing","Better security","More bandwidth"], answer:0,
   explain:"Duplicate IPs cause conflicts and intermittent connectivity for both devices."},
  {q:"A host with a wrong default gateway will typically:",
   options:["Reach local devices but not remote networks","Reach only the internet","Have faster DNS","Get more IPs"], answer:0,
   explain:"Without a correct gateway, a host can talk locally but can't reach other networks."},
  {q:"A missing or incorrect route on a router causes:",
   options:["Traffic to certain networks failing to reach the destination","Faster convergence","Automatic VLANs","PoE issues"], answer:0,
   explain:"Without a valid route, the router can't forward traffic to that destination network."}
],
// 5.4 Performance Issues
"FVxENIjdAJk": [
  {q:"High latency and packet loss on a link commonly cause:",
   options:["Poor application/VoIP performance","Faster downloads","More IP addresses","Better encryption"], answer:0,
   explain:"Latency, jitter, and loss degrade real-time apps like voice and video."},
  {q:"Jitter is best defined as:",
   options:["Variation in packet delay","Total bandwidth","The number of hops","The MTU size"], answer:0,
   explain:"Jitter is the variability in delay between packets, harmful to real-time traffic."},
  {q:"Bandwidth saturation (a link running near 100%) is best addressed with:",
   options:["QoS prioritization and/or more capacity","Disabling logging","Shortening cables","Removing VLANs"], answer:0,
   explain:"QoS prioritizes critical traffic; adding capacity relieves a saturated link."}
],
// 5.4 Wireless Issues
"UO3G_OJhBS4": [
  {q:"A client far from the AP experiencing slow speeds is likely suffering from:",
   options:["Low signal strength / attenuation","Too many IP addresses","A routing loop","A DNS error"], answer:0,
   explain:"Weak signal (distance/obstacles) reduces data rates and reliability."},
  {q:"Two nearby APs on the same 2.4 GHz channel cause:",
   options:["Co-channel interference","Faster roaming","Better throughput","More range"], answer:0,
   explain:"Overlapping/same channels create interference; use 1/6/11 to avoid it."},
  {q:"Microwaves and cordless phones commonly interfere with which band?",
   options:["2.4 GHz","5 GHz only","60 GHz only","Fiber"], answer:0,
   explain:"Many household devices operate in 2.4 GHz, causing interference."}
],
// 5.5 Software Tools
"b81_GeoN12I": [
  {q:"A protocol analyzer (packet capture tool like Wireshark) is used to:",
   options:["Capture and inspect network traffic in detail","Assign IP addresses","Terminate fiber","Provide PoE"], answer:0,
   explain:"Protocol analyzers capture packets so you can inspect traffic and diagnose issues."},
  {q:"A port scanner (e.g., Nmap) is used to:",
   options:["Discover open ports and services on hosts","Encrypt traffic","Assign VLANs","Provide DHCP"], answer:0,
   explain:"Port scanners identify open ports/services, useful for auditing and troubleshooting."},
  {q:"A Wi-Fi analyzer helps identify:",
   options:["Channel usage, interference, and signal strength","Routing tables","DNS records","Cable length"], answer:0,
   explain:"Wi-Fi analyzers show channel congestion, signal levels, and interference for tuning."}
],
// 5.5 Command Line Tools
"iYojIK1173k": [
  {q:"Which command tests reachability using ICMP echo?",
   options:["ping","nslookup","arp","route"], answer:0,
   explain:"ping sends ICMP echo requests to test connectivity to a host."},
  {q:"Which command shows the path (hops) packets take to a destination?",
   options:["traceroute / tracert","ipconfig","netstat","dig"], answer:0,
   explain:"traceroute/tracert reveals each hop along the route to a destination."},
  {q:"Which command resolves a hostname to an IP for DNS troubleshooting?",
   options:["nslookup / dig","ping -t","arp -a","route print"], answer:0,
   explain:"nslookup and dig query DNS to resolve names and diagnose DNS issues."}
],
// 5.5 Hardware Tools
"ytcAqNxkI9I": [
  {q:"A cable tester is used to:",
   options:["Verify wiring continuity and detect faults","Capture packets","Assign IPs","Scan for open ports"], answer:0,
   explain:"Cable testers check continuity, wiring order, opens, shorts, and miswires."},
  {q:"A toner and probe (tone generator) helps to:",
   options:["Locate/trace a specific cable among many","Encrypt traffic","Resolve DNS","Assign VLANs"], answer:0,
   explain:"A toner injects a signal so the probe can identify and trace a cable's other end."},
  {q:"An optical power meter or OTDR is used with:",
   options:["Fiber optic cabling","Copper only","Wireless only","DNS servers"], answer:0,
   explain:"Optical power meters/OTDRs measure light levels and locate faults on fiber."}
],
// 5.5 Basic Network Device Commands
"3-KakmVmEpo": [
  {q:"Which command displays the IP configuration on a Windows host?",
   options:["ipconfig","ifconfig only","ping","tracert"], answer:0,
   explain:"ipconfig shows IP settings on Windows; ifconfig/ip is used on Linux/Unix."},
  {q:"The 'show interface' command on a switch/router is used to:",
   options:["Display interface status, errors, and statistics","Assign IP addresses","Encrypt traffic","Create VLANs only"], answer:0,
   explain:"'show interface' reveals status, counters, and errors, key for troubleshooting."},
  {q:"Which command shows active connections and listening ports on a host?",
   options:["netstat","route","arp","dig"], answer:0,
   explain:"netstat displays active connections, listening ports, and related stats."}
]
});

/* ===================== SECTION EXAMS ===================== */
Object.assign(SECTION_EXAMS, {
"1": [
  {q:"Which OSI layer handles logical addressing and routing?",
   options:["Layer 3 – Network","Layer 2 – Data Link","Layer 4 – Transport","Layer 1 – Physical"], answer:0,
   explain:"Layer 3 (Network) manages IP addressing and routing between networks."},
  {q:"A switch forwards frames based on which address?",
   options:["MAC address","IP address","Port number","DNS name"], answer:0,
   explain:"Switches use MAC addresses at Layer 2 to forward frames."},
  {q:"Which protocol is connection-oriented and reliable?",
   options:["TCP","UDP","ICMP","ARP"], answer:0,
   explain:"TCP provides reliable, connection-oriented delivery via the three-way handshake."},
  {q:"HTTPS uses which port by default?",
   options:["443","80","22","53"], answer:0,
   explain:"HTTPS uses TCP 443."},
  {q:"Which is a private IPv4 range?",
   options:["192.168.0.0/16","8.8.8.0/24","1.1.1.0/24","172.15.0.0/16"], answer:0,
   explain:"192.168.0.0/16 (plus 10.0.0.0/8 and 172.16.0.0/12) are RFC 1918 private ranges."},
  {q:"How many usable hosts are in a /26 subnet?",
   options:["62","64","30","126"], answer:0,
   explain:"/26 = 64 addresses − 2 = 62 usable hosts."},
  {q:"Which cloud model has the provider manage everything and the user just uses the app?",
   options:["SaaS","IaaS","PaaS","On-prem"], answer:0,
   explain:"SaaS delivers a fully managed application to the user."},
  {q:"Which Wi-Fi channels are non-overlapping in 2.4 GHz?",
   options:["1, 6, 11","1, 2, 3","2, 5, 8","all of them"], answer:0,
   explain:"Channels 1, 6, and 11 do not overlap in 2.4 GHz."},
  {q:"Single-mode fiber is best for:",
   options:["Long distances","Very short patch cables","Wireless","Power delivery"], answer:0,
   explain:"Single-mode carries light long distances with low attenuation."},
  {q:"What is the max standard distance for twisted-pair Ethernet?",
   options:["100 meters","500 meters","10 meters","2 km"], answer:0,
   explain:"Twisted-pair Ethernet is limited to ~100 m per segment."},
  {q:"An IPv6 address is how many bits?",
   options:["128","32","64","48"], answer:0,
   explain:"IPv6 addresses are 128 bits."},
  {q:"Which connector is used for twisted-pair Ethernet?",
   options:["RJ45","LC","SC","BNC"], answer:0,
   explain:"RJ45 (8P8C) terminates twisted-pair Ethernet."},
  {q:"SDN separates the control plane from the:",
   options:["Data (forwarding) plane","Physical layer","Application layer","Power supply"], answer:0,
   explain:"SDN decouples control decisions from packet forwarding for centralized management."},
  {q:"A star topology connects all devices to a:",
   options:["Central switch","Shared bus","Ring","Mesh"], answer:0,
   explain:"Star topology uses a central device; one failed link doesn't affect others."},
  {q:"The binary octet 11000000 equals which decimal?",
   options:["192","128","224","240"], answer:0,
   explain:"128 + 64 = 192."},
  {q:"An APIPA address (169.254.x.x) indicates:",
   options:["DHCP failed","A valid public IP","IPv6 in use","Loopback"], answer:0,
   explain:"APIPA is self-assigned when a client can't reach a DHCP server."}
],
"2": [
  {q:"A static route is:",
   options:["Manually configured","Learned automatically","A wireless setting","A VLAN tag"], answer:0,
   explain:"Static routes are entered manually and don't adapt automatically."},
  {q:"Which is a link-state routing protocol?",
   options:["OSPF","RIP","ARP","DHCP"], answer:0,
   explain:"OSPF is a link-state protocol; RIP is distance-vector."},
  {q:"NAT primarily allows:",
   options:["Private hosts to share public IP(s)","Faster DNS","VLAN trunking","Wireless roaming"], answer:0,
   explain:"NAT maps private addresses to public IPs, conserving public addresses."},
  {q:"Which standard tags frames for VLANs on a trunk?",
   options:["802.1Q","802.3af","802.11ax","802.1X"], answer:0,
   explain:"802.1Q adds VLAN tags to frames on trunk links."},
  {q:"Spanning Tree Protocol prevents:",
   options:["Layer 2 loops","IP conflicts","DNS poisoning","Wireless interference"], answer:0,
   explain:"STP blocks redundant paths to prevent switching loops and broadcast storms."},
  {q:"PoE allows a switch port to:",
   options:["Supply power to devices","Route between VLANs","Encrypt traffic","Assign DNS"], answer:0,
   explain:"Power over Ethernet delivers power to devices like APs, phones, and cameras."},
  {q:"A duplex mismatch typically causes:",
   options:["Collisions and poor performance","Faster speeds","IP conflicts","VLAN hopping"], answer:0,
   explain:"Duplex mismatches cause late collisions and severe slowdowns."},
  {q:"The most secure current wireless encryption is:",
   options:["WPA3","WEP","WPA","Open"], answer:0,
   explain:"WPA3 is the latest and most secure standard."},
  {q:"WPA3/WPA2-Enterprise authenticates users via:",
   options:["RADIUS (802.1X)","DHCP","DNS","NTP"], answer:0,
   explain:"Enterprise mode uses 802.1X with a RADIUS server."},
  {q:"PAT distinguishes internal hosts sharing one public IP using:",
   options:["Unique source ports","Different MACs","Separate VLANs","Different cables"], answer:0,
   explain:"PAT multiplexes hosts onto one public IP using unique port numbers."},
  {q:"A UPS provides:",
   options:["Short-term battery power","Weeks of power","IP addressing","Fiber termination"], answer:0,
   explain:"A UPS supplies temporary battery power during outages."},
  {q:"Hot aisle/cold aisle design improves:",
   options:["Cooling efficiency","Wi-Fi range","IP assignment","Encryption"], answer:0,
   explain:"Alternating aisles separates hot exhaust from cold intake air."},
  {q:"BPDU Guard protects a port by:",
   options:["Shutting it down if BPDUs appear","Speeding DNS","Assigning VLANs","Encrypting trunks"], answer:0,
   explain:"BPDU Guard disables edge ports that unexpectedly receive BPDUs."},
  {q:"An access point in infrastructure mode connects clients to the:",
   options:["Wired network","Loopback","Patch panel only","Modem only"], answer:0,
   explain:"An AP bridges wireless clients onto the wired LAN."},
  {q:"Multiple APs with the same SSID for roaming form an:",
   options:["Extended Service Set (ESS)","Single BSS","VLAN trunk","Router mesh"], answer:0,
   explain:"An ESS uses multiple APs sharing an SSID to enable roaming."}
],
"3": [
  {q:"A physical network diagram shows:",
   options:["Device locations and cabling","IP subnets only","Routing protocols only","Passwords"], answer:0,
   explain:"Physical diagrams depict real placement and cabling; logical shows IP/VLAN."},
  {q:"SNMPv3 adds which capability over v1/v2c?",
   options:["Authentication and encryption","Faster polling only","More OIDs only","DNS support"], answer:0,
   explain:"SNMPv3 adds security (auth + encryption); earlier versions use plaintext community strings."},
  {q:"Centralized logging is achieved with:",
   options:["Syslog","DHCP","STP","ARP"], answer:0,
   explain:"Syslog forwards log messages to a central server."},
  {q:"RTO defines the maximum acceptable:",
   options:["Time to restore a service","Data loss","Number of hops","Cable length"], answer:0,
   explain:"RTO is the target recovery time after disruption."},
  {q:"RPO defines the maximum acceptable:",
   options:["Data loss (in time)","Restore time","MTU size","VLAN count"], answer:0,
   explain:"RPO is how much data (in time) can be lost, driving backup frequency."},
  {q:"HSRP/VRRP provide:",
   options:["Redundant default gateway","Wireless roaming","IP leasing","DNS resolution"], answer:0,
   explain:"First Hop Redundancy Protocols give hosts a virtual, redundant gateway."},
  {q:"The DHCP process order is:",
   options:["Discover, Offer, Request, Acknowledge","Request, Reply, Reset","SYN, ACK, FIN","Query, Response"], answer:0,
   explain:"DHCP uses DORA."},
  {q:"A DHCP relay (IP helper) is needed when:",
   options:["The DHCP server is on another subnet","All hosts share a subnet","There is no DNS","Using static IPs"], answer:0,
   explain:"A relay forwards broadcast DHCP requests to a server on a different subnet."},
  {q:"Which DNS record maps a name to an IPv4 address?",
   options:["A","AAAA","MX","CNAME"], answer:0,
   explain:"An A record maps a hostname to an IPv4 address."},
  {q:"An MX record identifies:",
   options:["A domain's mail server","A web server","An alias","An IPv6 address"], answer:0,
   explain:"MX records specify mail servers for a domain."},
  {q:"NTP is used to:",
   options:["Synchronize clocks","Assign IPs","Resolve names","Encrypt traffic"], answer:0,
   explain:"NTP keeps device clocks accurate and synchronized."},
  {q:"A site-to-site VPN connects:",
   options:["Two networks over the internet","One laptop to Wi-Fi","A printer to USB","A phone to Bluetooth"], answer:0,
   explain:"Site-to-site VPNs securely link entire networks."},
  {q:"RDP uses which port?",
   options:["3389","22","23","443"], answer:0,
   explain:"RDP uses TCP 3389."},
  {q:"SLAAC lets an IPv6 host:",
   options:["Auto-configure its address without DHCP","Only use IPv4","Get a MAC","Encrypt traffic"], answer:0,
   explain:"SLAAC uses router advertisements so hosts self-assign IPv6 addresses."},
  {q:"A configuration baseline is used to:",
   options:["Define a known-good standard config","Assign IPs","Encrypt disks","Provide PoE"], answer:0,
   explain:"A baseline is the standard config used to detect drift and restore devices."}
],
"4": [
  {q:"The CIA triad is:",
   options:["Confidentiality, Integrity, Availability","Control, Identity, Access","Cloud, Internet, Access","Cipher, Index, Auth"], answer:0,
   explain:"CIA = Confidentiality, Integrity, Availability."},
  {q:"Least privilege means giving users:",
   options:["Only the access they need","Full admin rights","All VLAN access","No access"], answer:0,
   explain:"Least privilege limits access to the minimum necessary."},
  {q:"An IPS differs from an IDS because it can:",
   options:["Block traffic inline","Only log","Only email","Assign IPs"], answer:0,
   explain:"An IPS blocks inline; an IDS only detects/alerts."},
  {q:"Centralized AAA for network devices uses:",
   options:["RADIUS or TACACS+","DHCP","ICMP","NTP"], answer:0,
   explain:"RADIUS and TACACS+ provide centralized authentication/authorization/accounting."},
  {q:"A DDoS attack primarily harms:",
   options:["Availability","Confidentiality","Integrity","Non-repudiation"], answer:0,
   explain:"DoS/DDoS attacks make services unavailable."},
  {q:"Port security mitigates which attack?",
   options:["MAC flooding","DNS poisoning only","Phishing","Buffer overflow"], answer:0,
   explain:"Port security limits MACs per port, stopping CAM-table flooding."},
  {q:"DHCP snooping mitigates:",
   options:["Rogue DHCP servers","MAC flooding","ARP-only attacks","VLAN hopping"], answer:0,
   explain:"DHCP snooping only allows DHCP server replies from trusted ports."},
  {q:"Dynamic ARP Inspection (DAI) mitigates:",
   options:["ARP poisoning","DNS poisoning","MAC flooding","VLAN hopping"], answer:0,
   explain:"DAI validates ARP packets against trusted bindings to stop ARP spoofing."},
  {q:"Switch-spoofing VLAN hopping is prevented by:",
   options:["Disabling DTP / hardcoding access ports","Enabling jumbo frames","Using fiber","Disabling DNS"], answer:0,
   explain:"Disabling auto-trunk negotiation stops switch-spoofing attacks."},
  {q:"Following someone through a secure door without badging is:",
   options:["Tailgating","Vishing","Smishing","Pharming"], answer:0,
   explain:"Tailgating is physically following an authorized person through access control."},
  {q:"A rogue access point is dangerous because it:",
   options:["Creates an unauthorized entry point","Speeds Wi-Fi","Assigns DNS","Adds PoE"], answer:0,
   explain:"Rogue APs provide unmanaged, insecure network access."},
  {q:"A screened subnet (DMZ) is used to:",
   options:["Isolate public-facing servers from the LAN","Store backups","Assign IPs","Provide PoE"], answer:0,
   explain:"A DMZ separates internet-facing servers from the internal network."},
  {q:"PCI DSS governs the handling of:",
   options:["Payment card data","Health records","Router configs","Cable standards"], answer:0,
   explain:"PCI DSS applies to credit/payment card data."},
  {q:"Firewall rules are processed:",
   options:["Top-down with implicit deny","Randomly","Bottom-up","Alphabetically"], answer:0,
   explain:"Rules are evaluated in order with an implicit deny at the end."}
],
"5": [
  {q:"The FIRST step of the troubleshooting methodology is:",
   options:["Identify the problem","Establish a theory","Implement a fix","Document"], answer:0,
   explain:"Step 1 is identifying the problem."},
  {q:"The FINAL step of the troubleshooting methodology is:",
   options:["Document findings and outcomes","Identify the problem","Escalate","Reboot"], answer:0,
   explain:"The last step is documenting findings, actions, and lessons learned."},
  {q:"Increasing CRC errors usually indicate:",
   options:["Physical-layer problems","DNS misconfiguration","IP conflicts","VLAN errors"], answer:0,
   explain:"CRC/frame errors point to cabling, EMI, or duplex issues."},
  {q:"Which command tests reachability via ICMP?",
   options:["ping","nslookup","arp","route"], answer:0,
   explain:"ping sends ICMP echo requests to test connectivity."},
  {q:"Which command shows the hop-by-hop path to a destination?",
   options:["traceroute/tracert","ipconfig","netstat","dig"], answer:0,
   explain:"traceroute/tracert reveals each hop en route to a destination."},
  {q:"Two devices with the same IP experience:",
   options:["An IP address conflict","Faster routing","Better security","More bandwidth"], answer:0,
   explain:"Duplicate IPs cause conflicts and intermittent connectivity."},
  {q:"A host with the wrong default gateway can:",
   options:["Reach local devices but not remote networks","Reach only the internet","Get faster DNS","Get more IPs"], answer:0,
   explain:"Without a correct gateway, only local communication works."},
  {q:"A broadcast storm is typically caused by:",
   options:["A switching loop (no STP)","A DNS error","An expired cert","A bad DHCP scope"], answer:0,
   explain:"Loops without STP flood broadcasts endlessly."},
  {q:"Jitter is:",
   options:["Variation in packet delay","Total bandwidth","Hop count","MTU size"], answer:0,
   explain:"Jitter is variability in delay, harmful to real-time traffic."},
  {q:"A protocol analyzer (Wireshark) is used to:",
   options:["Capture and inspect packets","Assign IPs","Terminate fiber","Provide PoE"], answer:0,
   explain:"Protocol analyzers capture traffic for detailed inspection."},
  {q:"A toner and probe is used to:",
   options:["Trace/locate a specific cable","Capture packets","Resolve DNS","Assign VLANs"], answer:0,
   explain:"A tone generator and probe identify and trace cables."},
  {q:"Which command resolves a hostname via DNS?",
   options:["nslookup/dig","ping -t","arp -a","route print"], answer:0,
   explain:"nslookup and dig query DNS for name resolution."},
  {q:"Exceeding the switch PoE budget causes:",
   options:["Devices failing to power on","Faster links","IP conflicts","DNS errors"], answer:0,
   explain:"If PoE demand exceeds the budget, some devices won't power up."},
  {q:"Co-channel interference in 2.4 GHz is reduced by:",
   options:["Using channels 1, 6, 11","Using channel 1 everywhere","Disabling encryption","Raising power to max"], answer:0,
   explain:"Non-overlapping channels (1/6/11) minimize interference."},
  {q:"An interface cycling up and down repeatedly is:",
   options:["Flapping","Trunking","Routing","Subnetting"], answer:0,
   explain:"Interface flapping usually indicates cabling or hardware faults."}
]
});

/*__APPEND__*/
