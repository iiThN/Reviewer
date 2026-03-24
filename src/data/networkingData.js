// src/data/networkingData.js

export const networkingCategory = {
  id: 'networking',
  label: 'Networking',
  description: 'Cisco ITN reviewer from Module 1 to Module 10.',
  accentColor: '#4fd1c5',
  accentRgb: '79,209,197',
  modules: [
    {
      id: 'net1',
      num: 'Module 1',
      shortTitle: 'Network Today',
      title: 'Networking · Network Today',
      accentColor: '#4fd1c5',
      accentRgb: '79,209,197',
      terms: [
        { term: 'Network', def: 'A group of connected devices that can communicate and share resources.' },
        { term: 'LAN', def: 'A Local Area Network covers a small geographic area like a home, school, or office.' },
        { term: 'WAN', def: 'A Wide Area Network covers a large geographic area and connects multiple LANs.' },
        { term: 'Internet', def: 'A global collection of interconnected networks.' },
        { term: 'Intranet', def: 'A private network used inside an organization.' },
        { term: 'Extranet', def: 'A private network that gives secure access to outside users or partners.' },
        { term: 'BYOD', def: 'Bring Your Own Device; users connect personal devices to the network.' },
        { term: 'QoS', def: 'Quality of Service; manages traffic priority for better network performance.' },
        { term: 'Fault Tolerance', def: 'A network’s ability to keep working even if a device or path fails.' },
        { term: 'Scalability', def: 'A network’s ability to grow without major performance problems.' },
      ],
      codeExamples: [
        {
          lang: 'CLI',
          desc: 'Check local IP configuration on Windows',
          code: `ipconfig`,
        },
        {
          lang: 'CLI',
          desc: 'Test connectivity to another device',
          code: `ping 192.168.1.1`,
        },
        {
          lang: 'CLI',
          desc: 'Trace the path to a destination',
          code: `tracert 8.8.8.8`,
        },
      ],
      bestPractices: [
        'Know the difference between LAN and WAN',
        'Remember the four reliable network characteristics: fault tolerance, scalability, QoS, and security',
        'Understand how networks support communication, collaboration, and cloud access',
        'Review common connection types used at home and in business',
        'Focus on real-world networking uses, not just definitions',
      ],
    },

    {
      id: 'net2',
      num: 'Module 2',
      shortTitle: 'Basic Switch Config',
      title: 'Networking · Basic Switch and End Device Configuration',
      accentColor: '#56d6cb',
      accentRgb: '86,214,203',
      terms: [
        { term: 'Cisco IOS', def: 'The operating system used on Cisco networking devices.' },
        { term: 'CLI', def: 'Command Line Interface used to configure and manage devices.' },
        { term: 'User EXEC Mode', def: 'Limited mode for basic monitoring commands.' },
        { term: 'Privileged EXEC Mode', def: 'Advanced mode for viewing and managing the device.' },
        { term: 'Global Configuration Mode', def: 'Mode used to change the running configuration of the device.' },
        { term: 'Console Access', def: 'Direct physical access to the device through the console port.' },
        { term: 'VTY', def: 'Virtual terminal lines used for remote access such as Telnet or SSH.' },
        { term: 'SVI', def: 'Switch Virtual Interface used to assign an IP address to a switch for management.' },
        { term: 'Startup Config', def: 'Saved configuration loaded when the device starts.' },
        { term: 'Running Config', def: 'Current active configuration stored in RAM.' },
      ],
      codeExamples: [
        {
          lang: 'CLI',
          desc: 'Enter privileged EXEC mode',
          code: `enable`,
        },
        {
          lang: 'CLI',
          desc: 'Enter global configuration mode',
          code: `configure terminal`,
        },
        {
          lang: 'CLI',
          desc: 'Set hostname',
          code: `hostname S1`,
        },
        {
          lang: 'CLI',
          desc: 'Set console password',
          code: `line console 0
password cisco
login`,
        },
        {
          lang: 'CLI',
          desc: 'Set enable secret',
          code: `enable secret class`,
        },
        {
          lang: 'CLI',
          desc: 'Encrypt passwords',
          code: `service password-encryption`,
        },
        {
          lang: 'CLI',
          desc: 'Create banner message',
          code: `banner motd #Unauthorized access is prohibited#`,
        },
        {
          lang: 'CLI',
          desc: 'Configure management IP on VLAN 1',
          code: `interface vlan 1
ip address 192.168.1.2 255.255.255.0
no shutdown`,
        },
        {
          lang: 'CLI',
          desc: 'Save configuration',
          code: `copy running-config startup-config`,
        },
      ],
      bestPractices: [
        'Know the IOS modes and how to move between them',
        'Secure console, VTY, and privileged EXEC access',
        'Always save your configuration after changes',
        'Use meaningful hostnames',
        'Verify connectivity with ping after configuration',
      ],
    },

    {
      id: 'net3',
      num: 'Module 3',
      shortTitle: 'Protocols & Models',
      title: 'Networking · Protocols and Models',
      accentColor: '#62dbd1',
      accentRgb: '98,219,209',
      terms: [
        { term: 'Protocol', def: 'A set of rules that govern communication between devices.' },
        { term: 'Protocol Suite', def: 'A group of related protocols that work together, like TCP/IP.' },
        { term: 'Standards Organization', def: 'A group that develops and promotes networking standards.' },
        { term: 'OSI Model', def: 'A 7-layer reference model for understanding network communication.' },
        { term: 'TCP/IP Model', def: 'A 4-layer model used in real-world networking.' },
        { term: 'Encapsulation', def: 'The process of adding protocol information to data as it moves down layers.' },
        { term: 'PDU', def: 'Protocol Data Unit; the form of data at a specific layer.' },
        { term: 'Segment', def: 'PDU at the transport layer.' },
        { term: 'Packet', def: 'PDU at the network layer.' },
        { term: 'Frame', def: 'PDU at the data link layer.' },
      ],
      codeExamples: [
        {
          lang: 'TXT',
          desc: 'OSI model layers',
          code: `7 Application
6 Presentation
5 Session
4 Transport
3 Network
2 Data Link
1 Physical`,
        },
        {
          lang: 'TXT',
          desc: 'TCP/IP model layers',
          code: `Application
Transport
Internet
Network Access`,
        },
        {
          lang: 'TXT',
          desc: 'Encapsulation order',
          code: `Data -> Segment -> Packet -> Frame -> Bits`,
        },
      ],
      bestPractices: [
        'Memorize both the OSI and TCP/IP models',
        'Understand why protocols are needed',
        'Review sender, receiver, and channel as communication elements',
        'Remember the PDU names in order',
        'Know that standards improve interoperability',
      ],
    },

    {
      id: 'net4',
      num: 'Module 4',
      shortTitle: 'Physical Layer',
      title: 'Networking · Physical Layer',
      accentColor: '#6fe0d7',
      accentRgb: '111,224,215',
      terms: [
        { term: 'Physical Layer', def: 'Layer responsible for transmitting bits over network media.' },
        { term: 'NIC', def: 'Network Interface Card that connects a device to the network.' },
        { term: 'Encoding', def: 'Converts bits into a pattern that can be recognized by the next device.' },
        { term: 'Signaling', def: 'How 1s and 0s are represented on the medium.' },
        { term: 'Bandwidth', def: 'The capacity of a medium to carry data.' },
        { term: 'Throughput', def: 'The actual amount of data transferred successfully.' },
        { term: 'Copper Cabling', def: 'Network media that uses electrical signals.' },
        { term: 'Fiber-Optic Cabling', def: 'Network media that uses light pulses and supports high speeds.' },
        { term: 'UTP', def: 'Unshielded Twisted Pair cable commonly used in Ethernet networks.' },
        { term: 'Wireless Media', def: 'Network communication through radio or microwave signals.' },
      ],
      codeExamples: [
        {
          lang: 'TXT',
          desc: 'Physical layer standards areas',
          code: `1. Physical components
2. Encoding
3. Signaling`,
        },
        {
          lang: 'TXT',
          desc: 'Signals by medium',
          code: `Copper  -> Electrical signals
Fiber   -> Light pulses
Wireless-> Microwave/radio signals`,
        },
        {
          lang: 'TXT',
          desc: 'Common UTP cable categories',
          code: `Cat5e
Cat6
Cat6a`,
        },
      ],
      bestPractices: [
        'Know that the physical layer transports bits',
        'Differentiate copper, fiber, and wireless media',
        'Review encoding and signaling clearly',
        'Understand the purpose of NICs and connectors',
        'Compare bandwidth, throughput, and goodput',
      ],
    },

    {
      id: 'net5',
      num: 'Module 5',
      shortTitle: 'Number Systems',
      title: 'Networking · Number Systems',
      accentColor: '#7ce5dc',
      accentRgb: '124,229,220',
      terms: [
        { term: 'Binary', def: 'Base-2 numbering system using only 0 and 1.' },
        { term: 'Decimal', def: 'Base-10 numbering system used by humans.' },
        { term: 'Hexadecimal', def: 'Base-16 numbering system using 0-9 and A-F.' },
        { term: 'Bit', def: 'A binary digit, either 0 or 1.' },
        { term: 'Byte', def: 'Eight bits.' },
        { term: 'Nibble', def: 'Four bits; one hexadecimal digit.' },
        { term: 'IPv4 Address', def: 'A 32-bit logical address usually shown in dotted decimal form.' },
        { term: 'Octet', def: 'An 8-bit section of an IPv4 address.' },
      ],
      codeExamples: [
        {
          lang: 'TXT',
          desc: 'Binary place values',
          code: `128 64 32 16 8 4 2 1`,
        },
        {
          lang: 'TXT',
          desc: 'Decimal 168 to binary',
          code: `168 = 10101000`,
        },
        {
          lang: 'TXT',
          desc: 'Binary octet example',
          code: `11000000 = 192`,
        },
        {
          lang: 'TXT',
          desc: 'Hexadecimal example',
          code: `255 decimal = FF hexadecimal`,
        },
      ],
      bestPractices: [
        'Practice decimal to binary conversion often',
        'Memorize common place values for 8 bits',
        'Understand how IPv4 uses binary even if displayed in decimal',
        'Review binary, decimal, and hexadecimal side by side',
        'Be comfortable converting one octet manually',
      ],
    },

    {
      id: 'net6',
      num: 'Module 6',
      shortTitle: 'Data Link Layer',
      title: 'Networking · Data Link Layer',
      accentColor: '#89e9e1',
      accentRgb: '137,233,225',
      terms: [
        { term: 'Data Link Layer', def: 'Layer responsible for node-to-node delivery over a local link.' },
        { term: 'LLC', def: 'Logical Link Control sublayer that communicates with upper layers.' },
        { term: 'MAC Sublayer', def: 'Media Access Control sublayer responsible for data encapsulation and media access.' },
        { term: 'Frame', def: 'The PDU used at the data link layer.' },
        { term: 'Media Access Control', def: 'Controls how devices place data on the medium.' },
        { term: 'Error Detection', def: 'Mechanism for identifying corrupted frames.' },
        { term: 'Topology', def: 'The physical or logical arrangement of network devices.' },
      ],
      codeExamples: [
        {
          lang: 'TXT',
          desc: 'Data Link Layer sublayers',
          code: `Data Link Layer
├─ LLC
└─ MAC`,
        },
        {
          lang: 'TXT',
          desc: 'PDU at Layer 2',
          code: `Layer 2 PDU = Frame`,
        },
        {
          lang: 'TXT',
          desc: 'Basic frame idea',
          code: `Header + Data + Trailer`,
        },
      ],
      bestPractices: [
        'Distinguish LLC from MAC',
        'Remember that Layer 2 uses frames',
        'Review local delivery and media access concepts',
        'Understand how addressing supports local communication',
        'Connect Layer 2 concepts with switching',
      ],
    },

    {
      id: 'net7',
      num: 'Module 7',
      shortTitle: 'Ethernet Switching',
      title: 'Networking · Ethernet Switching',
      accentColor: '#96ede6',
      accentRgb: '150,237,230',
      terms: [
        { term: 'Ethernet', def: 'A family of networking technologies that operates at the data link and physical layers.' },
        { term: 'MAC Address', def: 'A 48-bit Layer 2 address used to identify network interfaces.' },
        { term: 'FCS', def: 'Frame Check Sequence used for error detection in Ethernet frames.' },
        { term: 'MAC Address Table', def: 'A switch table that maps MAC addresses to switch ports.' },
        { term: 'Store-and-Forward', def: 'A switching method that checks the whole frame for errors before forwarding.' },
        { term: 'Cut-Through', def: 'A switching method that forwards a frame as soon as the destination MAC is read.' },
        { term: 'Full-Duplex', def: 'Both ends can send and receive at the same time.' },
        { term: 'Half-Duplex', def: 'Only one end can send at a time.' },
        { term: 'Auto-MDIX', def: 'A feature that automatically detects the cable type needed on a port.' },
        { term: 'CSMA/CD', def: 'Carrier Sense Multiple Access with Collision Detection used in legacy half-duplex Ethernet.' },
      ],
      codeExamples: [
        {
          lang: 'CLI',
          desc: 'Show learned MAC addresses',
          code: `show mac address-table`,
        },
        {
          lang: 'CLI',
          desc: 'Show interface status',
          code: `show interfaces status`,
        },
        {
          lang: 'CLI',
          desc: 'Enable auto-MDIX on an interface',
          code: `interface fastEthernet 0/1
mdix auto`,
        },
        {
          lang: 'TXT',
          desc: 'Ethernet frame fields',
          code: `Preamble | SFD | Destination MAC | Source MAC | EtherType | Data | FCS`,
        },
      ],
      bestPractices: [
        'Memorize the basic Ethernet frame fields',
        'Know how a switch learns MAC addresses',
        'Compare store-and-forward and cut-through switching',
        'Understand duplex mismatch problems',
        'Review full-duplex vs half-duplex carefully',
      ],
    },

    {
      id: 'net8',
      num: 'Module 8',
      shortTitle: 'Network Layer',
      title: 'Networking · Network Layer',
      accentColor: '#a3f0ea',
      accentRgb: '163,240,234',
      terms: [
        { term: 'Network Layer', def: 'Layer responsible for logical addressing and path selection.' },
        { term: 'IPv4', def: 'The primary network layer communication protocol using 32-bit addresses.' },
        { term: 'Packet', def: 'The PDU used at the network layer.' },
        { term: 'Router', def: 'A Layer 3 device that forwards packets between networks.' },
        { term: 'Source IP Address', def: 'The IPv4 address of the sending device.' },
        { term: 'Destination IP Address', def: 'The IPv4 address of the receiving device.' },
        { term: 'TTL', def: 'Time To Live; limits how many hops a packet can travel.' },
        { term: 'Routing', def: 'The process of determining a path for packets across networks.' },
      ],
      codeExamples: [
        {
          lang: 'CLI',
          desc: 'Display IP settings on a router interface',
          code: `show ip interface brief`,
        },
        {
          lang: 'CLI',
          desc: 'Trace packet path',
          code: `traceroute 8.8.8.8`,
        },
        {
          lang: 'TXT',
          desc: 'Layer 3 PDU',
          code: `Layer 3 PDU = Packet`,
        },
      ],
      bestPractices: [
        'Remember that IPv4 works at Layer 3',
        'Focus on logical addressing and routing',
        'Know the role of routers in packet forwarding',
        'Review source and destination IP fields',
        'Connect packet forwarding with path selection',
      ],
    },

    {
      id: 'net9',
      num: 'Module 9',
      shortTitle: 'Address Resolution',
      title: 'Networking · Address Resolution',
      accentColor: '#b0f3ee',
      accentRgb: '176,243,238',
      terms: [
        { term: 'ARP', def: 'Address Resolution Protocol used to map an IPv4 address to a MAC address.' },
        { term: 'ARP Request', def: 'A broadcast message asking who has a specific IPv4 address.' },
        { term: 'ARP Reply', def: 'A unicast response containing the requested MAC address.' },
        { term: 'ARP Table', def: 'A cache of known IPv4-to-MAC address mappings.' },
        { term: 'Default Gateway', def: 'The router interface used to reach remote networks.' },
        { term: 'Broadcast', def: 'A frame sent to all devices on the local network.' },
        { term: 'Unicast', def: 'A frame sent to one specific destination device.' },
      ],
      codeExamples: [
        {
          lang: 'CLI',
          desc: 'View ARP table on Windows',
          code: `arp -a`,
        },
        {
          lang: 'CLI',
          desc: 'View ARP table on Cisco device',
          code: `show arp`,
        },
        {
          lang: 'TXT',
          desc: 'Basic ARP flow',
          code: `Host checks ARP table
No match found
Send ARP request
Receive ARP reply
Store entry in ARP table`,
        },
      ],
      bestPractices: [
        'Know when ARP is used on the same network',
        'Remember that remote traffic resolves the default gateway MAC address',
        'Review ARP request vs ARP reply',
        'Understand that ARP table entries can expire',
        'Practice reading ARP tables',
      ],
    },

    {
        id: 'net10',
        num: 'Module 10',
        shortTitle: 'Basic Router Config',
        title: 'Networking · Basic Router Configuration',
        accentColor: '#bdf6f2',
        accentRgb: '189,246,242',
        terms: [
            { term: 'Router', def: 'A networking device that connects different networks and forwards packets.' },
            { term: 'Interface', def: 'A port on a router used for network connections.' },
            { term: 'Default Gateway', def: 'The address hosts use to reach other networks.' },
            { term: 'Routing Table', def: 'A table containing known routes and destination networks.' },
            { term: 'Directly Connected Network', def: 'A network attached to one of the router’s active interfaces.' },
            { term: 'IPv4 Interface Configuration', def: 'Assigning an IP address and enabling the router interface.' },
            { term: 'Loopback', def: 'A logical interface used for testing and management.' },
        ],
        codeExamples: [
            {
            lang: 'CLI',
            desc: 'Set router hostname',
            code: `enable
    configure terminal
    hostname R1`,
            },
            {
            lang: 'CLI',
            desc: 'Configure a router interface',
            code: `interface gigabitEthernet 0/0
    ip address 192.168.1.1 255.255.255.0
    no shutdown`,
            },
            {
            lang: 'CLI',
            desc: 'Show interface summary',
            code: `show ip interface brief`,
            },
            {
            lang: 'CLI',
            desc: 'Show routing table',
            code: `show ip route`,
            },
            {
            lang: 'CLI',
            desc: 'Save router configuration',
            code: `copy running-config startup-config`,
            },
        ],
        bestPractices: [
            'Always assign correct IP addresses to router interfaces',
            'Do not forget no shutdown',
            'Verify interfaces with show ip interface brief',
            'Review the meaning of directly connected routes',
            'Save the configuration after successful setup',
        ],
        },
        {
    id: 'net11',
    num: 'Additional',
    shortTitle: 'Number Conversion',
    title: 'Networking · Binary, Decimal, Hex Conversion',
    accentColor: '#6fa8ff',
    accentRgb: '111,168,255',

    terms: [
        { term: 'Binary', def: 'Base-2 system using only 0 and 1.' },
        { term: 'Decimal', def: 'Base-10 system used in everyday numbers.' },
        { term: 'Hexadecimal', def: 'Base-16 system using 0-9 and A-F.' },
        { term: 'Bit', def: 'A single binary digit (0 or 1).' },
        { term: 'Byte', def: '8 bits grouped together.' },
        { term: 'Octet', def: 'Another term for 8 bits, used in IPv4.' },
        { term: 'Place Value', def: 'Each position in binary has a value (128, 64, 32, etc).' },
    ],

    codeExamples: [
    {
        lang: 'TXT',
        desc: 'Binary place values (guide)',
        code: `128  64  32  16   8   4   2   1
    ^    ^   ^   ^    ^   ^   ^   ^
    Each position represents a power of 2`,
    },

    {
        lang: 'TXT',
        desc: 'Binary → Decimal (with explanation)',
        code: `10101000

    Step 1: Match with place values
    1   0   1   0   1   0   0   0
    128 64  32  16  8   4   2   1

    Step 2: Add only the 1s
    128 + 32 + 8

    Step 3: Final answer
    = 168`,
    },

    {
        lang: 'TXT',
        desc: 'Decimal → Binary (with explanation)',
        code: `Convert 168 to binary

    Step 1: Start from largest value (128)
    168 - 128 = 40  → ✔

    Step 2: Next (64)
    40 < 64 → ✖

    Step 3: Next (32)
    40 - 32 = 8 → ✔

    Step 4: Continue
    16 ✖
    8 ✔
    4 ✖
    2 ✖
    1 ✖

    Step 5: Combine results
    = 10101000`,
    },

    {
        lang: 'TXT',
        desc: 'Binary → Hexadecimal (with explanation)',
        code: `10101000

    Step 1: Group into 4 bits
    1010 1000

    Step 2: Convert each group
    1010 = A
    1000 = 8

    Step 3: Final answer
    = A8`,
    },

    {
        lang: 'TXT',
        desc: 'Hexadecimal → Binary (with explanation)',
        code: `A8

    Step 1: Convert each hex digit
    A = 1010
    8 = 1000

    Step 2: Combine
    = 10101000`,
    },

    {
        lang: 'TXT',
        desc: 'Decimal → Hexadecimal (with explanation)',
        code: `Convert 168 to hex

    Step 1: Divide by 16
    168 ÷ 16 = 10 remainder 8

    Step 2: Convert quotient
    10 = A

    Step 3: Final answer
    = A8`,
    },

    {
        lang: 'TXT',
        desc: 'Hexadecimal reference (important)',
        code: `A = 10
    B = 11
    C = 12
    D = 13
    E = 14
    F = 15

    Tip: Memorize this for faster conversion`,
    },
    ],

    bestPractices: [
        'Always memorize binary place values (128 to 1)',
        'Practice converting one octet (8 bits)',
        'Group binary into 4 bits when converting to hex',
        'Use division by 16 for decimal to hex',
        'Double-check your conversions to avoid mistakes',
        'Practice IPv4 octet conversions often',
    ],
    }
  ],
}