/* ===========================================================
   Security+ SY0-701 — Quiz bank
   VIDEO_QUIZZES: keyed by YouTube video id (short quiz per video)
   SECTION_EXAMS: keyed by section number (cumulative exam)
   Each question: { q, options[], answer (index), explain }
   =========================================================== */
const VIDEO_QUIZZES = {};
const SECTION_EXAMS = {};

/* ===================== SECTION 1 ===================== */
Object.assign(VIDEO_QUIZZES, {
// 1.1 Security Controls
"STM3EUvL7wg": [
  {q:"A company installs door locks and security guards to protect a data center. These are examples of which security control category?",
   options:["Technical controls","Physical controls","Managerial controls","Operational controls"], answer:1,
   explain:"Locks, guards, and fences are physical controls — they protect with tangible, real-world barriers."},
  {q:"Which control TYPE is designed to restore systems and operations after an incident has occurred?",
   options:["Preventive","Detective","Corrective","Deterrent"], answer:2,
   explain:"Corrective controls (e.g., restoring from backup, patching) act after an event to fix or limit damage."},
  {q:"A firewall rule that blocks unauthorized traffic before it reaches a server is best described as which control type?",
   options:["Preventive","Detective","Compensating","Directive"], answer:0,
   explain:"Preventive controls stop an event from happening in the first place — a firewall blocking traffic is a classic example."}
],
// 1.2 The CIA Triad
"SBcDGb9l6yo": [
  {q:"Encrypting a file so only authorized users can read it primarily supports which part of the CIA triad?",
   options:["Integrity","Availability","Confidentiality","Non-repudiation"], answer:2,
   explain:"Confidentiality is about preventing unauthorized disclosure — encryption keeps data secret from those without the key."},
  {q:"A hash is used to verify that a downloaded file was not altered in transit. Which CIA principle does this support?",
   options:["Confidentiality","Integrity","Availability","Authentication"], answer:1,
   explain:"Integrity ensures data has not been modified. Hashing detects any change to the data."},
  {q:"Redundant power supplies and load balancing are implemented chiefly to support which goal?",
   options:["Confidentiality","Integrity","Availability","Accounting"], answer:2,
   explain:"Availability ensures systems and data are accessible when needed; redundancy keeps services running."}
],
// 1.2 Non-repudiation
"XxnCxPEllMg": [
  {q:"What does non-repudiation provide?",
   options:["Proof that data is encrypted","Assurance that a party cannot deny having performed an action","A backup of all transactions","Faster authentication"], answer:1,
   explain:"Non-repudiation provides undeniable proof of origin/action — the sender can't later deny they sent it."},
  {q:"Which technology most directly provides non-repudiation for an email?",
   options:["A symmetric session key","A digital signature","A VPN tunnel","A password"], answer:1,
   explain:"A digital signature uses the sender's private key, proving the message came from them and wasn't altered."},
  {q:"A digital signature provides both proof of integrity and proof of origin. The proof of origin is also called:",
   options:["Confidentiality","Authentication","Availability","Obfuscation"], answer:1,
   explain:"Verifying who created/sent the data is authentication; combined with integrity it yields non-repudiation."}
],
// 1.2 AAA
"AhaZtj5P2a8": [
  {q:"In AAA, what does the second 'A' (Authorization) determine?",
   options:["Who you claim to be","What resources you are allowed to access","A record of what you did","Your password complexity"], answer:1,
   explain:"Authorization defines the permissions/resources an authenticated identity is allowed to use."},
  {q:"A system records which files a user opened and when. This is an example of:",
   options:["Authentication","Authorization","Accounting","Identification"], answer:2,
   explain:"Accounting (auditing/logging) tracks the actions a user performs after gaining access."},
  {q:"When a device presents a digital certificate to prove its identity to a server, this is part of:",
   options:["Authenticating a system","Authorizing a system","Auditing a system","Encrypting a system"], answer:0,
   explain:"Certificates are commonly used to authenticate systems/devices, proving they are who they claim to be."}
],
// 1.2 Gap Analysis
"cuTVyyS5C7M": [
  {q:"What is the primary purpose of a gap analysis?",
   options:["To encrypt sensitive data","To compare the current security posture against a desired standard","To respond to an active incident","To test backups"], answer:1,
   explain:"A gap analysis measures where you are versus where you need to be (e.g., against a framework), revealing gaps to close."},
  {q:"A company compares its controls to the NIST framework and documents the differences. The output of this is:",
   options:["A list of gaps and a path to the desired state","A penetration test report","A firewall ruleset","An incident response plan"], answer:0,
   explain:"Gap analysis produces a list of shortfalls plus the remediation needed to reach the target state."},
  {q:"Gap analysis is typically performed:",
   options:["Only after a breach","Before adopting a security framework or standard","Only by attackers","Instead of risk assessment"], answer:1,
   explain:"It's commonly done when evaluating or adopting a standard to understand the work required to comply."}
],
// 1.2 Zero Trust
"zC_Pndpg8-c": [
  {q:"What core principle defines a Zero Trust architecture?",
   options:["Trust everything inside the network perimeter","Never trust, always verify","Trust users after one login for the day","Trust devices on the corporate VLAN"], answer:1,
   explain:"Zero Trust assumes no implicit trust — every request is authenticated and authorized regardless of location."},
  {q:"In Zero Trust terminology, the component that makes the access decision is the:",
   options:["Policy Enforcement Point (PEP)","Policy Decision Point (PDP)","Data plane","Edge router"], answer:1,
   explain:"The Policy Decision Point evaluates policy and decides; the Policy Enforcement Point carries out the decision."},
  {q:"Dividing the network into many small protected zones to limit lateral movement is called:",
   options:["Single sign-on","Microsegmentation","Port mirroring","Full tunneling"], answer:1,
   explain:"Microsegmentation isolates workloads so a compromise in one zone can't freely spread to others."}
],
// 1.2 Physical Security
"YtT8q2mUM9c": [
  {q:"An access control vestibule (mantrap) is primarily designed to prevent:",
   options:["Tailgating/piggybacking","Phishing emails","SQL injection","Malware infections"], answer:0,
   explain:"A vestibule allows one person through at a time, preventing an unauthorized person from following an authorized one in."},
  {q:"Which of the following is primarily a DETERRENT physical control?",
   options:["A motion sensor","Visible warning signage and lighting","An access log","A backup generator"], answer:1,
   explain:"Signs, lighting, and fences discourage attackers — they deter rather than detect or correct."},
  {q:"A security guard who can make judgment calls about unusual situations is valuable because they provide:",
   options:["Encryption","Reasoning and adaptability a sensor cannot","Faster network speeds","Automatic patching"], answer:1,
   explain:"Humans can interpret context and respond to situations automated sensors can't, though at higher cost."}
],
// 1.2 Deception and Disruption
"X_qfMVty4ts": [
  {q:"What is a honeypot?",
   options:["A backup server","A decoy system designed to attract and study attackers","An encrypted database","A type of firewall"], answer:1,
   explain:"A honeypot is a decoy that lures attackers so their methods can be observed and the real systems protected."},
  {q:"Several honeypots networked together to look like a realistic environment form a:",
   options:["Honeynet","Honeyfile","Honeytoken","Botnet"], answer:0,
   explain:"A honeynet is a network of honeypots, presenting a more convincing decoy environment."},
  {q:"A fake record placed in a database that alerts you if it is ever accessed is a:",
   options:["Honeytoken","Salt","Nonce","Hash"], answer:0,
   explain:"Honeytokens (e.g., fake credentials or records) are tripwires — any use signals an intruder."}
]
});
Object.assign(VIDEO_QUIZZES, {
// 1.3 Change Management
"48wRbMdHFVI": [
  {q:"Why is change management important to security operations?",
   options:["It speeds up every change with no review","It provides a structured, approved process so changes don't introduce risk","It eliminates the need for backups","It replaces the firewall"], answer:1,
   explain:"Formal change management ensures changes are reviewed, approved, and documented, reducing outages and security gaps."},
  {q:"Which body typically approves significant proposed changes?",
   options:["The Change Advisory Board (CAB)","The help desk","The marketing team","Individual end users"], answer:0,
   explain:"The CAB reviews and approves/denies changes, weighing risk and impact."},
  {q:"A documented way to return to the previous state if a change fails is called a:",
   options:["Backout/rollback plan","Maintenance window","Service ticket","Standard operating procedure"], answer:0,
   explain:"A backout (rollback) plan lets you reverse a change that causes problems."}
],
// 1.3 Technical Change Management
"H9TYNjcpl-0": [
  {q:"Why might a change require a scheduled maintenance window?",
   options:["To increase marketing reach","To perform the change during low-impact hours and limit disruption","To avoid documenting the change","To skip testing"], answer:1,
   explain:"Maintenance windows let changes occur when impact to users is lowest."},
  {q:"'Allow lists' and 'deny lists' are technical change considerations that control:",
   options:["Which applications/traffic are permitted or blocked","Employee vacation schedules","Physical door access only","The color of the UI"], answer:0,
   explain:"Allow/deny lists explicitly permit or block applications or traffic as part of managing technical change."},
  {q:"A change requires restarting a service or rebooting a server. This is an example of:",
   options:["A dependency with downtime impact","A managerial control","Social engineering","Tokenization"], answer:0,
   explain:"Service restarts/reboots cause downtime and must be planned within technical change management."}
]
});
Object.assign(VIDEO_QUIZZES, {
// 1.4 Public Key Infrastructure
"xHAMEF7-inQ": [
  {q:"In asymmetric cryptography, which key is used to encrypt data so that only the recipient can decrypt it?",
   options:["The recipient's public key","The recipient's private key","The sender's private key","A shared symmetric key"], answer:0,
   explain:"Encrypt with the recipient's PUBLIC key; only their matching PRIVATE key can decrypt it."},
  {q:"What is the role of a Certificate Authority (CA) in a PKI?",
   options:["To issue and digitally sign trusted certificates","To store user passwords","To act as a firewall","To generate random network traffic"], answer:0,
   explain:"A CA vouches for identities by issuing and signing digital certificates."},
  {q:"Key escrow refers to:",
   options:["A trusted third party storing a copy of cryptographic keys","Deleting all keys after use","Sharing keys publicly","Using the same key for everyone"], answer:0,
   explain:"Key escrow keeps copies of keys with a trusted party so data can be recovered if a key is lost."}
],
// 1.4 Encrypting Data
"jpsc4c7lntw": [
  {q:"Which type of encryption uses the SAME key to encrypt and decrypt?",
   options:["Asymmetric","Symmetric","Hashing","Public key"], answer:1,
   explain:"Symmetric encryption uses one shared secret key for both operations; it's fast but key distribution is the challenge."},
  {q:"Encrypting an entire disk so data is protected if the laptop is stolen is called:",
   options:["Full-disk encryption","Transport encryption","Hashing","Steganography"], answer:0,
   explain:"Full-disk encryption (FDE) protects data at rest on the whole drive."},
  {q:"A larger key size generally provides:",
   options:["Weaker security","Stronger security but more computational overhead","No change in security","Faster decryption only"], answer:1,
   explain:"Bigger keys increase the keyspace and strength, at the cost of more processing."}
],
// 1.4 Key Exchange
"U6BWn81P5Ec": [
  {q:"What problem does a key exchange algorithm like Diffie-Hellman solve?",
   options:["Securely agreeing on a shared symmetric key over an insecure channel","Compressing files","Hashing passwords","Scanning for malware"], answer:0,
   explain:"Key exchange lets two parties establish a shared secret key without sending the key itself across the network."},
  {q:"Sending a symmetric key by first encrypting it with the recipient's public key is called:",
   options:["In-band key exchange using asymmetric encryption","Steganography","Salting","Hashing"], answer:0,
   explain:"You can protect/transport a symmetric key by encrypting it with asymmetric (public) key cryptography."},
  {q:"The property that prevents a stolen long-term key from decrypting past sessions is:",
   options:["Perfect forward secrecy","Key escrow","Obfuscation","Non-repudiation"], answer:0,
   explain:"Perfect forward secrecy uses ephemeral session keys, so compromising one key doesn't expose previous sessions."}
],
// 1.4 Encryption Technologies
"u61J0xR_XPU": [
  {q:"A Trusted Platform Module (TPM) is:",
   options:["Hardware on a device that securely stores cryptographic keys","A cloud antivirus service","A type of phishing attack","A network protocol"], answer:0,
   explain:"A TPM is a hardware chip on the motherboard providing secure key storage and crypto functions for that device."},
  {q:"A Hardware Security Module (HSM) is typically used to:",
   options:["Manage and protect large numbers of keys for an enterprise","Replace the CPU","Browse the web","Send spam"], answer:0,
   explain:"HSMs are dedicated, high-performance devices for secure key generation/storage at scale."},
  {q:"A secure enclave is best described as:",
   options:["A protected area of a processor isolated for sensitive operations","A type of firewall rule","An email server","A backup tape"], answer:0,
   explain:"A secure enclave isolates sensitive data/operations from the rest of the system."}
],
// 1.4 Obfuscation
"LfuTMzZke4g": [
  {q:"Hiding a secret message inside an image file is an example of:",
   options:["Steganography","Hashing","Tokenization","Symmetric encryption"], answer:0,
   explain:"Steganography conceals data within other data (images, audio, etc.) so its existence is hidden."},
  {q:"Replacing sensitive data such as a credit card number with a non-sensitive substitute value is:",
   options:["Tokenization","Hashing","Salting","Steganography"], answer:0,
   explain:"Tokenization swaps real data for a token; the mapping is kept in a secure vault."},
  {q:"Data masking is commonly used to:",
   options:["Show only partial data (e.g., last 4 digits) to protect the rest","Permanently delete data","Encrypt the whole disk","Sign emails"], answer:0,
   explain:"Masking hides part of a value (like ****-****-****-1234) while keeping it usable for display."}
],
// 1.4 Hashing and Digital Signatures
"EcGmQjl6XEo": [
  {q:"A key property of a cryptographic hash function is that it is:",
   options:["Reversible to recover the original input","One-way — you cannot feasibly reverse it","The same as encryption","Used to compress files for storage"], answer:1,
   explain:"Hashes are one-way; you can't derive the input from the output. They verify integrity."},
  {q:"Adding random data to a password before hashing it to defeat precomputed tables is called:",
   options:["Salting","Tokenizing","Masking","Escrow"], answer:0,
   explain:"A salt makes each hash unique, defeating rainbow tables and making identical passwords hash differently."},
  {q:"When two different inputs produce the same hash output, this is a:",
   options:["Collision","Nonce","Salt","Key exchange"], answer:0,
   explain:"A collision weakens a hash algorithm's reliability for integrity (e.g., MD5/SHA-1 are deprecated due to collisions)."}
],
// 1.4 Blockchain
"-wqU_2ToP1M": [
  {q:"A blockchain is best described as a:",
   options:["Centralized database controlled by one server","Distributed, append-only public ledger","Type of antivirus","Symmetric cipher"], answer:1,
   explain:"Blockchain is a decentralized, distributed ledger where each block is cryptographically linked to the previous one."},
  {q:"What makes a blockchain tamper-evident?",
   options:["Each block contains the hash of the previous block","It is stored on one secure server","It uses a single password","Data is never written down"], answer:0,
   explain:"Because each block includes the prior block's hash, altering one block breaks the chain and is detectable."},
  {q:"The blockchain ledger is typically:",
   options:["Hidden from all participants","Replicated across many participants for transparency and resilience","Stored only on the user's laptop","Deleted after each transaction"], answer:1,
   explain:"Every participant can hold a copy of the ledger, providing transparency and removing a single point of failure."}
],
// 1.4 Certificates
"cLa94BZH_9s": [
  {q:"What standard format is used for most digital certificates?",
   options:["X.509","SHA-256","AES-128","TCP/IP"], answer:0,
   explain:"X.509 is the standard defining the format of public key certificates used in PKI."},
  {q:"A wildcard certificate (e.g., *.example.com) is useful because it:",
   options:["Secures multiple subdomains of a domain with one certificate","Works for any domain on the internet","Never expires","Encrypts the hard drive"], answer:0,
   explain:"A wildcard cert covers all subdomains of a single domain, simplifying management."},
  {q:"How can a client quickly check whether a certificate has been revoked?",
   options:["OCSP (Online Certificate Status Protocol)","DNS lookup","Ping","Traceroute"], answer:0,
   explain:"OCSP lets a client query the CA in real time for a certificate's revocation status (vs. downloading a full CRL)."}
]
});

/* ===================== SECTION 2 ===================== */
Object.assign(VIDEO_QUIZZES, {
// 2.1 Threat Actors
"6xUH0t6ugIM": [
  {q:"Which threat actor is typically the most sophisticated and well-funded, often acting on behalf of a government?",
   options:["Script kiddie","Nation-state (APT)","Hacktivist","Insider with no resources"], answer:1,
   explain:"Nation-state actors / Advanced Persistent Threats have the most resources and patience, often pursuing espionage."},
  {q:"A 'script kiddie' is best characterized by:",
   options:["High skill and custom tools","Low skill, using existing tools they didn't create","Government backing","Financial regulators"], answer:1,
   explain:"Script kiddies lack deep skill and rely on prebuilt tools/scripts made by others."},
  {q:"An attacker motivated by a political or social cause is a:",
   options:["Hacktivist","Nation-state","Competitor","Insider"], answer:0,
   explain:"Hacktivists attack to promote a political/ideological message rather than for money."}
],
// 2.2 Common Threat Vectors
"4lAbGpTDZ18": [
  {q:"A 'threat vector' is:",
   options:["The method or pathway an attacker uses to gain access","A type of antivirus","A backup location","A firewall rule"], answer:0,
   explain:"A threat vector is the route/technique used to breach a target (email, USB, web, etc.)."},
  {q:"Leaving USB drives in a parking lot hoping someone plugs one in uses which vector?",
   options:["Removable media","Encrypted VPN","DNS","Cloud API"], answer:0,
   explain:"Removable media (USB) is a physical threat vector that can deliver malware when plugged in."},
  {q:"An 'attack surface' refers to:",
   options:["The sum of all points where an attacker could try to enter or extract data","Only the company website","The data center floor","The firewall's CPU"], answer:0,
   explain:"The attack surface is every exposed entry point; reducing it lowers risk."}
],
// 2.2 Phishing
"9SD6DRCKZFU": [
  {q:"Phishing that specifically targets a particular individual or organization with tailored content is called:",
   options:["Spear phishing","Vishing","Smishing","Pharming"], answer:0,
   explain:"Spear phishing is targeted and personalized, making it more convincing than generic phishing."},
  {q:"A phishing attack carried out over voice calls is known as:",
   options:["Smishing","Vishing","Whaling","Pretexting"], answer:1,
   explain:"Vishing = voice phishing (phone calls). Smishing uses SMS text messages."},
  {q:"Phishing that targets high-profile executives like a CEO or CFO is called:",
   options:["Whaling","Tailgating","Shoulder surfing","Typosquatting"], answer:0,
   explain:"Whaling targets 'big fish' executives who have access to valuable resources."}
],
// 2.2 Impersonation
"X3yoNAVuKwA": [
  {q:"An attacker calls an employee pretending to be from the IT help desk to extract a password. This is:",
   options:["Impersonation/pretexting","A buffer overflow","SQL injection","A DDoS"], answer:0,
   explain:"Impersonation uses a fabricated identity/scenario (pretext) to manipulate the victim."},
  {q:"Which is a strong defense against impersonation attacks?",
   options:["Verifying identity through an independent channel before acting","Disabling the firewall","Sharing passwords by phone","Ignoring all callers"], answer:0,
   explain:"Independently verifying identity (callback to a known number, in-person check) stops impersonators."},
  {q:"Brand impersonation in an email typically tries to:",
   options:["Make the message look like it's from a trusted company","Improve email deliverability legitimately","Encrypt your inbox","Speed up your computer"], answer:0,
   explain:"Attackers mimic a known brand's look and domain to trick users into trusting the message."}
],
// 2.2 Watering Hole Attacks
"z413PV6l_Ys": [
  {q:"In a watering hole attack, the attacker:",
   options:["Compromises a website the target group is known to visit","Floods a server with traffic","Sends mass spam","Cracks a single password"], answer:0,
   explain:"Attackers infect a trusted third-party site that the intended victims frequent, then wait for them to visit."},
  {q:"Why are watering hole attacks effective?",
   options:["Victims trust the legitimate site they normally use","They require the victim's password first","They only work on phones","They are loud and obvious"], answer:0,
   explain:"The victims have no reason to distrust a site they regularly and safely use."},
  {q:"A strong defense against watering hole attacks includes:",
   options:["Defense in depth (layered controls) and keeping systems patched","Turning off all logging","Using one antivirus only on the server","Disabling backups"], answer:0,
   explain:"Layered security and patching reduce the chance a compromised site can exploit the visitor."}
],
// 2.2 Other Social Engineering
"akoDmeV3LQo": [
  {q:"A misinformation/disinformation campaign primarily attacks:",
   options:["People's perception and trust","The CPU cache","TLS certificates","Disk firmware"], answer:0,
   explain:"These campaigns manipulate beliefs/opinions, often via fake accounts and content."},
  {q:"An attacker creates urgency ('act now or your account closes!') to exploit which principle?",
   options:["Urgency/scarcity","Availability","Redundancy","Hashing"], answer:0,
   explain:"Social engineers use urgency and scarcity to rush victims into bypassing normal caution."},
  {q:"A typosquatting attack relies on:",
   options:["Users mistyping a URL and landing on a malicious lookalike site","Brute forcing passwords","Physical theft","Flooding the network"], answer:0,
   explain:"Typosquatting registers misspelled domains to catch users who make typos."}
],
// 2.3 Memory Injections
"kBcTczu8FsM": [
  {q:"DLL injection works by:",
   options:["Inserting a malicious library into the address space of a running process","Encrypting RAM","Formatting the disk","Blocking DNS"], answer:0,
   explain:"DLL injection forces a process to load attacker-controlled code, gaining the process's privileges."},
  {q:"Why is memory injection dangerous?",
   options:["Malicious code runs with the privileges of the targeted process","It only affects the keyboard","It requires physical access always","It cannot be hidden"], answer:0,
   explain:"Code injected into a trusted process inherits its access and can evade some defenses."},
  {q:"A primary mitigation against many memory-based attacks is:",
   options:["Keeping software patched and using memory protections (ASLR/DEP)","Disabling antivirus","Using shorter passwords","Removing the firewall"], answer:0,
   explain:"Patching and memory protections like ASLR/DEP make injection and exploitation much harder."}
],
// 2.3 Buffer Overflows
"0-qeeI5jTqU": [
  {q:"A buffer overflow occurs when:",
   options:["More data is written to a buffer than it can hold, overwriting adjacent memory","A password is too long to type","The network is congested","A file is encrypted twice"], answer:0,
   explain:"Writing beyond a buffer's boundary corrupts adjacent memory and can let an attacker run code."},
  {q:"A successful buffer overflow that overwrites a return address can allow an attacker to:",
   options:["Execute arbitrary code","Only crash a printer","Improve performance","Encrypt the disk safely"], answer:0,
   explain:"Controlling the return address lets the attacker redirect execution to their own code."},
  {q:"Which practice best prevents buffer overflows in software?",
   options:["Proper input validation and bounds checking","Longer DNS TTLs","Disabling logs","Using more RAM"], answer:0,
   explain:"Validating input length and checking bounds stops data from spilling past the buffer."}
],
// 2.3 Race Conditions
"MKptc1lPSw8": [
  {q:"A race condition vulnerability arises from:",
   options:["Timing dependence between events that aren't properly synchronized","A slow CPU","A weak password","An expired certificate"], answer:0,
   explain:"When outcomes depend on the timing/order of events without proper locking, attackers can exploit the gap."},
  {q:"The classic race condition between checking a condition and using a resource is called:",
   options:["TOCTOU (time-of-check to time-of-use)","DDoS","XSS","MITM"], answer:0,
   explain:"TOCTOU exploits the window between when a value is checked and when it is used."},
  {q:"A good mitigation for race conditions is:",
   options:["Proper locking/synchronization of shared resources","Disabling multithreading entirely is always required","Using HTTP instead of HTTPS","Longer hostnames"], answer:0,
   explain:"Locks/mutexes and atomic operations prevent two processes from unsafely interleaving."}
],
// 2.3 Malicious Updates
"KbtUrdBy9Yo": [
  {q:"What is the main risk of a malicious software update?",
   options:["Attackers deliver malware through a trusted update mechanism","Updates always slow the computer","Updates remove the need for backups","Updates encrypt the BIOS by design"], answer:0,
   explain:"If an update channel is compromised, users trust and install attacker code automatically."},
  {q:"Which control helps ensure an update is legitimate before installing?",
   options:["Verifying the digital signature of the update","Disabling antivirus first","Turning off the firewall","Skipping all updates forever"], answer:0,
   explain:"Code signing lets you verify the update truly came from the vendor and wasn't tampered with."},
  {q:"Downloading software updates only from:",
   options:["Trusted, official sources reduces risk","Random forums is safest","Email attachments is recommended","Expired links is fine"], answer:0,
   explain:"Official, verified sources minimize the chance of receiving a tampered update."}
],
// 2.3 OS Vulnerabilities
"narir8qpGq8": [
  {q:"The single most important ongoing defense against known OS vulnerabilities is:",
   options:["Timely patching/updates","Buying a faster CPU","Changing the wallpaper","Using a longer username"], answer:0,
   explain:"Most OS exploits target known, already-patched flaws; staying updated closes them."},
  {q:"A vulnerability that lets a normal user gain administrator rights is called:",
   options:["Privilege escalation","A backup","A honeypot","A salt"], answer:0,
   explain:"Privilege escalation raises an attacker's access from limited to elevated/admin."},
  {q:"Why is an unpatched, end-of-life OS especially risky?",
   options:["It no longer receives security updates for new vulnerabilities","It runs faster","It can't connect to networks","It encrypts everything automatically"], answer:0,
   explain:"EOL systems get no fixes, so newly discovered flaws remain permanently exploitable."}
],
// 2.3 SQL Injection
"qFUOLkEk8AQ": [
  {q:"SQL injection targets:",
   options:["A web application's database queries via malicious input","The power supply","DNS records only","Printer firmware"], answer:0,
   explain:"SQLi inserts malicious SQL through unvalidated input to manipulate the database."},
  {q:"The best defense against SQL injection is:",
   options:["Parameterized queries / prepared statements and input validation","Longer table names","Disabling HTTPS","Restarting the server hourly"], answer:0,
   explain:"Parameterized queries separate code from data so input can't alter the query structure."},
  {q:"A successful SQL injection could allow an attacker to:",
   options:["Read, modify, or delete database data","Only change the website font","Speed up the database safely","Encrypt user RAM"], answer:0,
   explain:"SQLi can expose or destroy data and sometimes lead to full system compromise."}
],
// 2.3 Cross-site Scripting
"PKgw0CLZIhE": [
  {q:"Cross-site scripting (XSS) involves:",
   options:["Injecting malicious scripts that run in other users' browsers","Overheating the CPU","Cracking Wi-Fi passwords","Spoofing MAC addresses"], answer:0,
   explain:"XSS injects script into a page so it executes in victims' browsers, stealing data or sessions."},
  {q:"Stored (persistent) XSS is more dangerous than reflected XSS because:",
   options:["The malicious script is saved on the server and served to many victims","It requires no browser","It only affects the attacker","It cannot steal cookies"], answer:0,
   explain:"Stored XSS persists on the site and hits every visitor, not just one tricked user."},
  {q:"A key defense against XSS is:",
   options:["Validating input and encoding/escaping output","Using HTTP instead of HTTPS","Disabling cookies entirely for all sites","Increasing the screen resolution"], answer:0,
   explain:"Proper input validation and output encoding prevent injected script from executing."}
],
// 2.3 Hardware Vulnerabilities
"TaTaEvqjjDM": [
  {q:"A major risk of end-of-life (EOL) hardware is that:",
   options:["The vendor stops providing security updates/firmware fixes","It uses too little electricity","It is always faster","It cannot be physically stolen"], answer:0,
   explain:"EOL/legacy hardware no longer gets patches, leaving known flaws unaddressed."},
  {q:"Firmware vulnerabilities are concerning because firmware:",
   options:["Runs beneath the OS and is hard to detect/patch","Is just a screensaver","Cannot be updated ever","Has no security impact"], answer:0,
   explain:"Firmware operates at a low level; compromise can be stealthy and persistent."},
  {q:"A 'legacy' system is one that:",
   options:["Is outdated but still in use, often lacking modern security","Was installed yesterday","Has the newest patches","Is fully cloud-native"], answer:0,
   explain:"Legacy systems remain in production despite being old, posing ongoing risk."}
],
// 2.3 Virtualization Vulnerabilities
"t2JrPrzRDLA": [
  {q:"A 'VM escape' attack allows an attacker to:",
   options:["Break out of a guest VM and access the host or other VMs","Speed up the hypervisor","Encrypt the network","Add more RAM"], answer:0,
   explain:"VM escape breaks isolation, letting code in one VM affect the host/hypervisor or neighboring VMs."},
  {q:"Resource reuse vulnerabilities in virtualization can lead to:",
   options:["One VM accessing leftover data from another via shared resources","Faster boot times","Better encryption","Free storage"], answer:0,
   explain:"Improperly cleared shared memory/resources can leak data between tenants/VMs."},
  {q:"VM sprawl is a problem because:",
   options:["Unmanaged, forgotten VMs go unpatched and expand the attack surface","It saves money automatically","It improves security","It reduces licensing"], answer:0,
   explain:"Too many unmanaged VMs become unmonitored, unpatched liabilities."}
],
// 2.3 Cloud-specific Vulnerabilities
"V2DCYO-sWRQ": [
  {q:"A very common cause of cloud data breaches is:",
   options:["Misconfiguration (e.g., a publicly exposed storage bucket)","Too much encryption","Using MFA","Patching too often"], answer:0,
   explain:"Misconfigured permissions/storage frequently expose cloud data publicly."},
  {q:"In the cloud shared responsibility model, the customer is generally responsible for:",
   options:["Securing their data, identities, and configurations","The physical data center","The hypervisor hardware","The provider's network cabling"], answer:0,
   explain:"Providers secure the infrastructure; customers secure what they put in it (data, IAM, config)."},
  {q:"An insecure or overly permissive cloud API can allow:",
   options:["Unauthorized access to cloud resources and data","Faster downloads only","Automatic patching","Stronger encryption"], answer:0,
   explain:"Weak API authentication/authorization is a direct path to cloud resource compromise."}
],
// 2.3 Supply Chain Vulnerabilities
"WqvCJLpwExY": [
  {q:"A supply chain attack compromises an organization by:",
   options:["Targeting a trusted vendor, supplier, or third-party component","Only attacking the firewall directly","Sending one phishing email","Guessing one password"], answer:0,
   explain:"Attackers infiltrate via trusted suppliers/software so the victim unknowingly receives malicious code."},
  {q:"Which is an example of supply chain risk?",
   options:["A compromised software library or hardware component from a vendor","A strong password policy","An MFA prompt","An updated antivirus"], answer:0,
   explain:"Tainted vendor software/hardware or service providers introduce risk into your environment."},
  {q:"A good supply chain control is:",
   options:["Vendor due diligence and assessing third-party security","Trusting all vendors implicitly","Skipping contracts","Disabling logging"], answer:0,
   explain:"Vetting suppliers and requiring security standards reduces supply chain exposure."}
],
// 2.3 Misconfiguration Vulnerabilities
"NBKzlUqzVmE": [
  {q:"Leaving default usernames and passwords on a device is an example of:",
   options:["A misconfiguration vulnerability","Strong hardening","Encryption at rest","A honeypot"], answer:0,
   explain:"Default credentials are well-known and a classic, easily exploited misconfiguration."},
  {q:"An 'open permissions' misconfiguration means:",
   options:["Access controls are too loose, exposing data to unauthorized users","The firewall is too strict","Encryption is too strong","Backups run too often"], answer:0,
   explain:"Overly permissive access lets unauthorized users reach data they shouldn't."},
  {q:"Disabling unnecessary services and ports is part of:",
   options:["Reducing misconfiguration risk / hardening","Adding attack surface","Social engineering","Key escrow"], answer:0,
   explain:"Turning off unneeded features reduces the attack surface and configuration mistakes."}
],
// 2.3 Mobile Device Vulnerabilities
"DRfAwwdzYpU": [
  {q:"'Jailbreaking' or 'rooting' a mobile device is risky because it:",
   options:["Removes built-in security restrictions and protections","Improves battery life securely","Adds vendor support","Encrypts the SIM"], answer:0,
   explain:"Rooting/jailbreaking bypasses OS security controls, exposing the device to more threats."},
  {q:"'Sideloading' refers to:",
   options:["Installing apps from outside the official app store","Charging two phones at once","Using a VPN","Encrypting messages"], answer:0,
   explain:"Sideloaded apps skip store vetting and may contain malware."},
  {q:"A key mobile security control for lost/stolen devices is:",
   options:["Remote wipe and device encryption","Disabling the screen lock","Sharing the PIN","Turning off updates"], answer:0,
   explain:"Encryption plus remote wipe protects data if the device is lost or stolen."}
],
// 2.3 Zero-day Vulnerabilities
"FDFxGLnZtoY": [
  {q:"A zero-day vulnerability is one that:",
   options:["Is unknown to the vendor and has no patch available yet","Was patched years ago","Only affects printers","Requires physical access always"], answer:0,
   explain:"Zero-days are undisclosed/unpatched flaws — defenders have had 'zero days' to fix them."},
  {q:"Why are zero-days especially valuable to attackers?",
   options:["No signature or patch exists, so defenses often miss them","They are easy for everyone to find","Antivirus always blocks them","They never work"], answer:0,
   explain:"Without a known signature or fix, zero-days bypass many traditional defenses."},
  {q:"Which approach best helps against unknown/zero-day threats?",
   options:["Behavior-based detection and defense in depth","Relying only on outdated signatures","Disabling monitoring","Using one control only"], answer:0,
   explain:"Layered defenses and anomaly/behavior detection can catch novel attacks signatures miss."}
],
// 2.4 An Overview of Malware
"-eZs8wjjGGE": [
  {q:"What does 'malware' stand for?",
   options:["Malicious software","Mainframe ware","Managed warehouse","Manual wares"], answer:0,
   explain:"Malware = malicious software designed to damage, disrupt, or gain unauthorized access."},
  {q:"Malware that demands payment to restore access to your encrypted files is:",
   options:["Ransomware","Adware","A rootkit","A keylogger"], answer:0,
   explain:"Ransomware encrypts data and demands a ransom for the decryption key."},
  {q:"The best defense to recover from a ransomware attack without paying is:",
   options:["Reliable, tested, offline backups","Paying immediately","Disabling antivirus","Sharing the decryption key"], answer:0,
   explain:"Good offline/immutable backups let you restore data without funding criminals."}
],
// 2.4 Viruses and Worms
"Su8ANmAoerU": [
  {q:"The key difference between a worm and a virus is that a worm:",
   options:["Self-replicates and spreads across networks without user action","Requires a user to run an infected file","Cannot spread at all","Only affects printers"], answer:0,
   explain:"Worms propagate automatically over networks; viruses need a host file and user execution."},
  {q:"A virus typically requires:",
   options:["A host file and some user action to execute","Nothing — it spreads on its own","A blockchain","An HSM"], answer:0,
   explain:"Viruses attach to files/programs and need the user to run them to spread."},
  {q:"Because worms spread on their own, they can cause:",
   options:["Rapid, widespread network infection and congestion","Only minor cosmetic changes","Improved performance","Stronger encryption"], answer:0,
   explain:"Self-propagation lets worms infect many systems fast, often overwhelming networks."}
],
// 2.4 Spyware and Bloatware
"-VmI3xFJw78": [
  {q:"Spyware is designed to:",
   options:["Secretly gather information about a user's activity","Speed up the computer","Back up files","Encrypt the disk for safety"], answer:0,
   explain:"Spyware covertly monitors and collects user data (browsing, keystrokes, credentials)."},
  {q:"Bloatware refers to:",
   options:["Unwanted pre-installed software that consumes resources","Critical security patches","Encryption keys","Firewall logs"], answer:0,
   explain:"Bloatware is unnecessary preinstalled apps that waste resources and may add risk."},
  {q:"A keylogger is a form of spyware that:",
   options:["Records keystrokes to capture passwords and data","Cleans the registry","Updates drivers","Defragments the disk"], answer:0,
   explain:"Keyloggers capture typed input, often to steal credentials."}
],
// 2.4 Other Malware Types
"nu27ovJ5rqw": [
  {q:"A rootkit is dangerous primarily because it:",
   options:["Hides itself deep in the system to evade detection","Always displays a warning","Cannot gain privileges","Only affects the keyboard"], answer:0,
   explain:"Rootkits embed at a low level (kernel/boot) to conceal their presence and maintain access."},
  {q:"A logic bomb is malware that:",
   options:["Executes when a specific condition or time is met","Runs immediately and loudly","Is always harmless","Only spreads via Wi-Fi"], answer:0,
   explain:"A logic bomb lies dormant until triggered by a condition (a date, an event)."},
  {q:"A backdoor provides an attacker with:",
   options:["A hidden way to bypass normal authentication and regain access","Faster internet","Automatic patching","A stronger firewall"], answer:0,
   explain:"Backdoors let attackers re-enter a system while bypassing normal access controls."}
],
// 2.4 Physical Attacks
"oIpOuTX2HRs": [
  {q:"A 'malicious USB cable' attack works by:",
   options:["Hiding electronics in a cable to inject keystrokes or malware","Charging faster","Encrypting the phone","Improving the signal"], answer:0,
   explain:"Weaponized cables contain hardware that acts as a keyboard or delivers payloads when plugged in."},
  {q:"Card cloning (skimming) is a physical attack against:",
   options:["Payment/access cards by copying their data","Wi-Fi routers","DNS servers","TLS certificates"], answer:0,
   explain:"Skimmers read and clone the data from magnetic stripe cards for fraudulent use."},
  {q:"A brute-force physical attack might involve:",
   options:["Physically forcing entry past a door or lock","Guessing passwords online","Sending phishing emails","Spoofing an IP"], answer:0,
   explain:"Physical brute force is literally forcing through barriers (doors, locks, fences)."}
],
// 2.4 Denial of Service
"Z7OntvK--PQ": [
  {q:"A Distributed Denial of Service (DDoS) attack uses:",
   options:["Many compromised systems (a botnet) to overwhelm a target","A single phishing email","One stolen password","A digital certificate"], answer:0,
   explain:"DDoS leverages many distributed hosts (often a botnet) to flood and overwhelm a target."},
  {q:"The goal of a DoS/DDoS attack is to harm which CIA principle?",
   options:["Availability","Confidentiality","Integrity","Non-repudiation"], answer:0,
   explain:"DoS attacks aim to make a service unavailable to legitimate users."},
  {q:"An amplification DDoS attack abuses protocols to:",
   options:["Generate a large response from a small request, multiplying traffic","Encrypt the target","Patch the server","Reduce bandwidth use"], answer:0,
   explain:"Amplification (e.g., DNS/NTP) turns small spoofed requests into huge responses aimed at the victim."}
],
// 2.4 DNS Attacks
"BoxeL5ybOXI": [
  {q:"DNS poisoning (spoofing) results in:",
   options:["Users being directed to a malicious IP for a legitimate domain name","Faster DNS lookups","Encrypted DNS by default","A stronger firewall"], answer:0,
   explain:"Poisoning corrupts DNS resolution so a trusted name resolves to an attacker's server."},
  {q:"A domain hijacking attack involves:",
   options:["Gaining unauthorized control over a domain's registration","Cracking a Wi-Fi password","Overheating the CPU","Cloning a smart card"], answer:0,
   explain:"Domain hijacking takes over the domain account/registration to control where it points."},
  {q:"Which helps protect the integrity of DNS responses?",
   options:["DNSSEC","Disabling DNS","Using HTTP","Turning off MFA"], answer:0,
   explain:"DNSSEC adds digital signatures to DNS data so resolvers can verify authenticity."}
],
// 2.4 Wireless Attacks
"tSLqrKhUvts": [
  {q:"An 'evil twin' attack uses:",
   options:["A rogue access point impersonating a legitimate Wi-Fi network","A cloned credit card","A DNS poisoning script only","A malicious USB cable"], answer:0,
   explain:"An evil twin is a fake AP with the same SSID to trick users into connecting through the attacker."},
  {q:"A deauthentication attack against Wi-Fi aims to:",
   options:["Force clients to disconnect (a denial of service / setup for evil twin)","Encrypt the traffic","Speed up the network","Patch the router"], answer:0,
   explain:"Deauth frames knock clients off, causing DoS or pushing them onto a rogue AP."},
  {q:"A rogue access point is:",
   options:["An unauthorized AP connected to the network","The official corporate AP","A firewall","A VPN concentrator"], answer:0,
   explain:"A rogue AP is added without authorization, creating an insecure entry point."}
],
// 2.4 On-path Attacks
"M_Af6_8JTuo": [
  {q:"An on-path (man-in-the-middle) attack lets an attacker:",
   options:["Intercept and possibly alter communication between two parties","Only crash a server","Speed up the connection","Improve encryption"], answer:0,
   explain:"The attacker positions between two parties to read or modify traffic in transit."},
  {q:"ARP poisoning enables an on-path attack on a local network by:",
   options:["Associating the attacker's MAC with another host's IP","Encrypting all traffic","Disabling the switch","Patching the router"], answer:0,
   explain:"Spoofed ARP replies redirect traffic through the attacker, enabling interception."},
  {q:"A strong defense against on-path attacks is:",
   options:["End-to-end encryption (e.g., TLS) with certificate validation","Using HTTP only","Disabling encryption","Sharing keys publicly"], answer:0,
   explain:"Proper TLS with validated certificates prevents attackers from silently reading/altering traffic."}
],
// 2.4 Replay Attacks
"ai6qS13gKRo": [
  {q:"A replay attack works by:",
   options:["Capturing valid data (e.g., a session token) and resending it to impersonate a user","Guessing passwords","Flooding a server","Encrypting files"], answer:0,
   explain:"The attacker reuses captured legitimate data to gain unauthorized access."},
  {q:"Which mechanism best prevents replay attacks?",
   options:["Timestamps, nonces, or session tokens that expire","Longer usernames","Disabling logs","Static session IDs forever"], answer:0,
   explain:"One-time values (nonces) and short-lived/expiring tokens make captured data useless to replay."},
  {q:"A session hijacking attack often relies on:",
   options:["Stealing or replaying a valid session cookie/token","Physically breaking a lock","Overheating RAM","Cloning a hard drive"], answer:0,
   explain:"Capturing a session token lets the attacker assume the victim's authenticated session."}
],
// 2.4 Malicious Code
"xDhUBQ_lnUA": [
  {q:"Malicious code can be delivered through:",
   options:["Scripts, macros, executables, and other automated instructions","Only physical theft","Only Wi-Fi","Only printers"], answer:0,
   explain:"Attackers use many code forms — scripts, macros, binaries — to run malicious instructions."},
  {q:"A common defense against malicious macros in documents is to:",
   options:["Disable macros by default and only enable from trusted sources","Always enable all macros","Disable antivirus","Open all attachments"], answer:0,
   explain:"Disabling macros by default blocks a very common malware delivery method."},
  {q:"Application allow-listing helps against malicious code by:",
   options:["Permitting only approved programs to run","Blocking all updates","Encrypting the CPU","Removing the firewall"], answer:0,
   explain:"Allow-listing ensures only known-good applications execute, stopping unknown malicious code."}
],
// 2.4 Application Attacks
"yRSqIGjeb7s": [
  {q:"A directory traversal attack attempts to:",
   options:["Access files outside the web root using paths like ../","Encrypt the database","Flood the network","Clone a card"], answer:0,
   explain:"Directory traversal uses '../' sequences to reach files outside the intended directory."},
  {q:"Privilege escalation in an application means:",
   options:["Gaining higher access rights than intended","Logging out","Reducing permissions","Patching the app"], answer:0,
   explain:"The attacker elevates from limited rights to higher (admin) privileges."},
  {q:"A request forgery attack (CSRF/SSRF) abuses:",
   options:["The trust a server or browser places in requests","The physical door lock","The power supply","The DNS cache only"], answer:0,
   explain:"Forgery attacks trick a trusted context into making unintended requests on the attacker's behalf."}
],
// 2.4 Cryptographic Attacks
"7aJaEQy6Yoc": [
  {q:"A birthday attack targets:",
   options:["Hash collisions","Wi-Fi passwords","Door locks","DNS caches"], answer:0,
   explain:"The birthday attack exploits the probability of hash collisions to forge data."},
  {q:"A downgrade attack forces a connection to:",
   options:["Use a weaker, more vulnerable cryptographic protocol","Use stronger encryption","Disconnect entirely","Patch itself"], answer:0,
   explain:"Downgrade attacks trick parties into negotiating weaker crypto that's easier to break."},
  {q:"Collision resistance in a hash function means:",
   options:["It is hard to find two inputs with the same hash","It is easy to reverse","It compresses files","It encrypts data"], answer:0,
   explain:"A strong hash makes finding collisions computationally infeasible, preserving integrity."}
],
// 2.4 Password Attacks
"-ZfbifHwEVE": [
  {q:"A dictionary attack tries:",
   options:["Common words/known passwords from a list","Every possible character combination","Only numbers 0-9","DNS records"], answer:0,
   explain:"Dictionary attacks use lists of likely passwords, which is faster than pure brute force."},
  {q:"Spraying a single common password across many accounts to avoid lockouts is called:",
   options:["Password spraying","Brute forcing one account","Phishing","Salting"], answer:0,
   explain:"Password spraying tries one/few passwords across many users to stay under lockout thresholds."},
  {q:"Capturing password hashes and testing guesses against them is:",
   options:["Offline brute forcing","Online brute forcing","DNS poisoning","ARP spoofing"], answer:0,
   explain:"Offline attacks work on stolen hashes without triggering account lockouts, allowing fast guessing."}
],
// 2.4 Indicators of Compromise
"x72hG9GvkaQ": [
  {q:"Which of the following is an Indicator of Compromise (IoC)?",
   options:["Unusual outbound traffic to an unknown IP at 3 a.m.","A normal user logging in during work hours","A scheduled backup completing","A patch installing successfully"], answer:0,
   explain:"Anomalous traffic, logins, and behavior are classic IoCs suggesting a breach."},
  {q:"Account lockouts and impossible-travel logins are IoCs that suggest:",
   options:["Possible credential compromise or attack in progress","Healthy systems","A successful backup","Good password hygiene"], answer:0,
   explain:"These anomalies often indicate stolen credentials or active attacks."},
  {q:"Why are IoCs important?",
   options:["They help detect and respond to incidents earlier","They replace firewalls","They encrypt data","They speed up the CPU"], answer:0,
   explain:"Recognizing IoCs lets teams detect, investigate, and contain incidents faster."}
],
// 2.5 Segmentation and Access Control
"yDeDGCh_PDs": [
  {q:"Network segmentation improves security by:",
   options:["Limiting how far an attacker can move (lateral movement)","Increasing the attack surface","Disabling encryption","Removing authentication"], answer:0,
   explain:"Segmentation isolates zones so a breach in one area can't spread freely."},
  {q:"An Access Control List (ACL) on a router/firewall:",
   options:["Defines which traffic is permitted or denied","Encrypts the disk","Backs up data","Cracks passwords"], answer:0,
   explain:"ACLs specify allowed/denied traffic based on rules (IP, port, etc.)."},
  {q:"Least privilege means:",
   options:["Granting users only the access they need to do their job","Giving everyone admin rights","Disabling all access","Sharing one account"], answer:0,
   explain:"Least privilege limits accounts to the minimum necessary access, reducing damage from compromise."}
],
// 2.5 Mitigation Techniques
"Fc8ZJfmapbI": [
  {q:"Disabling unused ports and services is a mitigation that:",
   options:["Reduces the attack surface","Adds vulnerabilities","Slows patching","Disables backups"], answer:0,
   explain:"Turning off what you don't need leaves attackers fewer entry points."},
  {q:"Application allow-listing is generally MORE secure than deny-listing because:",
   options:["Only explicitly approved apps can run; unknown apps are blocked by default","It allows everything","It blocks nothing","It requires no maintenance"], answer:0,
   explain:"Allow-listing blocks anything not explicitly approved, including unknown threats."},
  {q:"Applying a configuration baseline across systems helps by:",
   options:["Ensuring consistent, hardened settings everywhere","Making each system unique and unmanaged","Disabling logging","Removing patches"], answer:0,
   explain:"A standard secure baseline keeps configurations consistent and hardened."}
],
// 2.5 Hardening Techniques
"wXoC46Qr_9Q": [
  {q:"Which of these is a system hardening technique?",
   options:["Disabling default accounts and changing default passwords","Leaving all ports open","Disabling the firewall","Using guest accounts for admins"], answer:0,
   explain:"Removing/changing defaults and closing unneeded services hardens a system."},
  {q:"Host-based firewalls and host-based intrusion prevention (HIPS) harden a system by:",
   options:["Controlling and inspecting traffic at the individual host","Encrypting email only","Backing up the cloud","Replacing the OS"], answer:0,
   explain:"Host-based controls add protection directly on each endpoint."},
  {q:"Encryption of data on a hardened endpoint primarily protects:",
   options:["Data confidentiality if the device is lost or stolen","Network speed","CPU temperature","DNS records"], answer:0,
   explain:"Endpoint encryption keeps data unreadable to anyone who steals the device."}
]
});

/* ===================== SECTION 3 ===================== */
Object.assign(VIDEO_QUIZZES, {
// 3.1 Cloud Infrastructures
"8qpQ8Q6xxiU": [
  {q:"In Infrastructure as a Service (IaaS), the cloud provider is responsible for:",
   options:["The physical hardware, virtualization, and data center","Your application code","Your data classification","Your user passwords"], answer:0,
   explain:"In IaaS the provider handles the underlying infrastructure; the customer manages OS, apps, and data."},
  {q:"A key benefit of cloud elasticity is:",
   options:["Scaling resources up or down to match demand","Permanent fixed capacity","No need for any security","Free unlimited storage"], answer:0,
   explain:"Elasticity lets you add/remove resources dynamically based on workload."},
  {q:"A serverless (Function as a Service) model means:",
   options:["The provider manages servers; you deploy functions/code","There are literally no servers anywhere","You buy physical servers","You manage the data center"], answer:0,
   explain:"Serverless abstracts the servers away — you provide code and the provider runs it on demand."}
],
// 3.1 Network Infrastructure Concepts
"jd001Hj7XWM": [
  {q:"Software-defined networking (SDN) separates the:",
   options:["Control plane from the data plane","Power supply from the CPU","Disk from RAM","Keyboard from the mouse"], answer:0,
   explain:"SDN decouples the control plane (decisions) from the data plane (forwarding) for centralized programmability."},
  {q:"An 'air-gapped' network is one that is:",
   options:["Physically isolated from other/untrusted networks","Always wireless","Connected to the internet directly","Encrypted only"], answer:0,
   explain:"Air gapping provides isolation by having no network connection to untrusted systems."},
  {q:"Separating networks logically using VLANs provides:",
   options:["Segmentation without separate physical hardware","Faster CPUs","Encryption of data at rest","Automatic backups"], answer:0,
   explain:"VLANs logically segment a switch into isolated broadcast domains."}
],
// 3.1 Other Infrastructure Concepts
"HDiNPPrGhzE": [
  {q:"Infrastructure as Code (IaC) means:",
   options:["Defining and provisioning infrastructure through machine-readable configuration files","Writing code on paper","Encrypting code only","Manually clicking through setup each time"], answer:0,
   explain:"IaC automates infrastructure setup via code, improving consistency and repeatability."},
  {q:"Centralizing logic in a single, large system creates the risk of a:",
   options:["Single point of failure","Faster network","Better redundancy","Lower cost always"], answer:0,
   explain:"Centralization can create a single point of failure if that system goes down."},
  {q:"Containerization differs from full virtualization because containers:",
   options:["Share the host OS kernel and are more lightweight","Each run a full separate OS","Cannot be isolated","Require dedicated hardware each"], answer:0,
   explain:"Containers share the host kernel, making them lighter than full VMs."}
],
// 3.1 Infrastructure Considerations
"Ap3Z_0ZdqpQ": [
  {q:"When designing infrastructure, a security 'choke point' is valuable because it:",
   options:["Funnels traffic through a point where it can be inspected and controlled","Slows everything down for no reason","Removes monitoring","Disables encryption"], answer:0,
   explain:"Concentrating traffic flow lets you inspect and enforce policy efficiently."},
  {q:"'Fail-open' vs 'fail-closed' describes:",
   options:["What a device does to traffic/access when it fails","The color of cables","Encryption strength","Backup frequency"], answer:0,
   explain:"Fail-open permits traffic on failure (availability); fail-closed blocks it (security). Choose per risk."},
  {q:"Higher security controls in infrastructure often trade off against:",
   options:["Cost and complexity/usability","Better performance always","Unlimited budget","Less documentation"], answer:0,
   explain:"More security usually adds cost and complexity; design balances risk, cost, and usability."}
],
// 3.2 Secure Infrastructures
"l64La1xYXL4": [
  {q:"A screened subnet (DMZ) is used to:",
   options:["Host public-facing services separated from the internal network","Store backups offline","Encrypt the disk","Replace the firewall"], answer:0,
   explain:"A DMZ/screened subnet isolates internet-facing servers from the trusted internal LAN."},
  {q:"Placing security controls at multiple layers is known as:",
   options:["Defense in depth","Single point of failure","Fail-open","Flat networking"], answer:0,
   explain:"Defense in depth layers controls so no single failure exposes everything."},
  {q:"Why control the physical placement of security devices?",
   options:["Position determines what traffic they can see and protect","It changes the IP address","It improves Wi-Fi range only","It has no effect"], answer:0,
   explain:"Where a device sits in the data flow determines which traffic it can inspect and secure."}
],
// 3.2 Intrusion Prevention
"7QuYupuic3Q": [
  {q:"The main difference between an IDS and an IPS is that an IPS can:",
   options:["Actively block/stop malicious traffic, not just alert","Only send emails","Only log events","Encrypt data at rest"], answer:0,
   explain:"An IDS detects and alerts; an IPS sits inline and can actively block the traffic."},
  {q:"Signature-based detection identifies threats by:",
   options:["Matching known attack patterns","Random guessing","Encrypting traffic","Blocking all traffic"], answer:0,
   explain:"Signature-based detection compares traffic to a database of known attack patterns."},
  {q:"Anomaly-based detection is useful because it can:",
   options:["Detect previously unknown attacks by spotting unusual behavior","Only detect known threats","Replace all firewalls","Encrypt the network"], answer:0,
   explain:"Anomaly detection flags deviations from normal baselines, catching novel attacks."}
],
// 3.2 Network Appliances
"WlOslEy3ztg": [
  {q:"A jump server (jump box) is used to:",
   options:["Provide a secure, controlled access point to manage internal systems","Store all backups","Host the public website","Generate certificates"], answer:0,
   explain:"A hardened jump server is the single controlled gateway admins use to reach sensitive systems."},
  {q:"A load balancer primarily provides:",
   options:["Distribution of traffic across servers for availability and performance","Encryption of data at rest","Password storage","DNS hosting only"], answer:0,
   explain:"Load balancers spread requests across servers, improving availability and scalability."},
  {q:"A proxy server can improve security by:",
   options:["Intermediating and filtering requests between clients and servers","Removing all logs","Disabling authentication","Broadcasting traffic"], answer:0,
   explain:"Proxies sit between clients and destinations, allowing filtering, caching, and monitoring."}
],
// 3.2 Port Security
"QhLQ6J4satw": [
  {q:"802.1X provides:",
   options:["Port-based network access control requiring authentication before access","Disk encryption","Faster Wi-Fi","DNS resolution"], answer:0,
   explain:"802.1X authenticates devices/users at the network port before granting access."},
  {q:"Switch port security can prevent attacks by:",
   options:["Limiting which MAC addresses can use a port","Encrypting the disk","Hosting websites","Generating keys"], answer:0,
   explain:"Port security restricts the MACs allowed on a port, blocking rogue devices and MAC flooding."},
  {q:"In 802.1X, the device requesting access is the:",
   options:["Supplicant","Authenticator","Authentication server","Proxy"], answer:0,
   explain:"The supplicant requests access; the authenticator (switch) brokers; the auth server (RADIUS) decides."}
],
// 3.2 Firewall Types
"mq1HRM-zGtQ": [
  {q:"A Next-Generation Firewall (NGFW) differs from a traditional firewall because it can:",
   options:["Inspect application-layer traffic and identify specific applications","Only filter by IP and port","Only block ICMP","Not log anything"], answer:0,
   explain:"NGFWs add deep packet/application inspection, IPS, and app awareness beyond port/IP filtering."},
  {q:"A stateful firewall is one that:",
   options:["Tracks the state of active connections to make decisions","Treats each packet independently with no context","Only works on Wi-Fi","Encrypts the disk"], answer:0,
   explain:"Stateful firewalls track connection state, allowing return traffic for established sessions."},
  {q:"A Web Application Firewall (WAF) specifically protects against:",
   options:["Web app attacks like SQL injection and XSS","Physical theft","Power outages","DNS caching"], answer:0,
   explain:"A WAF inspects HTTP/S traffic to block web-specific attacks targeting applications."}
],
// 3.2 Secure Communication
"uU3e_ntg-3g": [
  {q:"A site-to-site VPN is typically used to:",
   options:["Securely connect two networks (e.g., two offices) over the internet","Connect one laptop to Wi-Fi","Host a website","Store backups"], answer:0,
   explain:"Site-to-site VPNs link entire networks securely across untrusted networks."},
  {q:"In a 'full tunnel' VPN configuration:",
   options:["All client traffic is routed through the VPN","Only some traffic goes through the VPN","No traffic is encrypted","Traffic bypasses the VPN"], answer:0,
   explain:"Full tunnel sends all traffic through the VPN; split tunnel sends only some."},
  {q:"IPsec is commonly used to:",
   options:["Provide encrypted, authenticated VPN connections at the network layer","Render web pages","Compress files","Manage DNS"], answer:0,
   explain:"IPsec secures IP traffic with encryption and authentication, widely used for VPNs."}
],
// 3.3 Data Types and Classifications
"R0W0_gZCVzk": [
  {q:"Why classify data (e.g., public, confidential, restricted)?",
   options:["To apply appropriate protection based on sensitivity","To delete it faster","To make it public","To avoid backups"], answer:0,
   explain:"Classification ensures controls match the sensitivity/impact of each data type."},
  {q:"Personally Identifiable Information (PII) includes:",
   options:["Data that can identify an individual (name, SSN, etc.)","Only public marketing data","Server uptime metrics","Firewall logs only"], answer:0,
   explain:"PII is data that identifies a specific person and requires protection."},
  {q:"Regulated data (e.g., PHI under HIPAA) must be handled according to:",
   options:["Applicable laws and compliance requirements","Personal preference","No rules","Marketing goals"], answer:0,
   explain:"Regulated data is governed by laws/standards dictating how it must be protected."}
],
// 3.3 States of Data
"71RQaYQ4QSw": [
  {q:"Which state of data is protected by full-disk encryption?",
   options:["Data at rest","Data in transit","Data in use","Data in motion"], answer:0,
   explain:"Data at rest is stored data; disk/file encryption protects it."},
  {q:"TLS protects data in which state?",
   options:["Data in transit","Data at rest","Data in use","Archived data"], answer:0,
   explain:"TLS encrypts data in transit as it moves across networks."},
  {q:"Data in use (being processed in memory) can be protected with:",
   options:["Secure enclaves / confidential computing","Tape backups","DNS","A firewall rule only"], answer:0,
   explain:"Protecting data actively in memory uses secure enclaves and similar in-use protections."}
],
// 3.3 Protecting Data
"leX_Qa7wqB4": [
  {q:"Data Loss Prevention (DLP) systems are designed to:",
   options:["Detect and prevent unauthorized exfiltration of sensitive data","Speed up the network","Back up the cloud","Generate certificates"], answer:0,
   explain:"DLP monitors and blocks sensitive data from leaving the organization improperly."},
  {q:"Geographic restrictions (geofencing) on data help with:",
   options:["Controlling where data can be accessed or stored for compliance","Improving CPU speed","Encrypting the BIOS","Cracking passwords"], answer:0,
   explain:"Geographic controls enforce data sovereignty/compliance based on location."},
  {q:"Tokenization protects data by:",
   options:["Replacing sensitive values with non-sensitive tokens","Deleting all data","Publishing data","Compressing files"], answer:0,
   explain:"Tokenization substitutes sensitive data with tokens, keeping the real data in a secure vault."}
],
// 3.4 Resiliency
"sb0dRaQbuBA": [
  {q:"High availability (HA) is achieved primarily through:",
   options:["Redundancy and eliminating single points of failure","A single powerful server","Disabling backups","One internet link"], answer:0,
   explain:"HA uses redundant components and failover so service continues despite failures."},
  {q:"A 'hot site' for disaster recovery is:",
   options:["A fully equipped, ready-to-run alternate site","An empty building only","A cloud account with no data","A backup tape"], answer:0,
   explain:"A hot site is fully operational and can take over almost immediately; cold sites have only space."},
  {q:"RAID provides resiliency for:",
   options:["Disk storage by combining drives for redundancy/performance","Network bandwidth","Power supplies","DNS"], answer:0,
   explain:"RAID combines multiple disks so data survives a drive failure (depending on level)."}
],
// 3.4 Capacity Planning
"WGlT6-gNwqY": [
  {q:"Capacity planning ensures that:",
   options:["Resources (people, compute, infrastructure) can meet current and future demand","Data is encrypted","Passwords are rotated","Firewalls are installed"], answer:0,
   explain:"Capacity planning forecasts and provisions enough resources to maintain availability."},
  {q:"Under-provisioning capacity risks:",
   options:["Outages and degraded performance under load","Better security","Lower attack surface","Stronger encryption"], answer:0,
   explain:"Too little capacity leads to failures and downtime when demand spikes."},
  {q:"Capacity planning considers people, technology, and:",
   options:["Infrastructure","Encryption keys only","Marketing","Door locks"], answer:0,
   explain:"Capacity spans staffing (people), technology, and infrastructure to meet demand."}
],
// 3.4 Recovery Testing
"IhT7Odu4xHc": [
  {q:"Why perform recovery (DR) testing?",
   options:["To verify that backups and recovery plans actually work before a real disaster","Backups never fail","To delete data","To skip documentation"], answer:0,
   explain:"Testing confirms backups are restorable and plans work, avoiding nasty surprises during a real event."},
  {q:"A tabletop exercise is:",
   options:["A discussion-based walkthrough of a scenario without affecting live systems","A full system shutdown","A penetration test","A backup rotation"], answer:0,
   explain:"Tabletop exercises talk through a scenario to validate plans and roles without operational impact."},
  {q:"A failover test specifically verifies that:",
   options:["Systems can switch to a redundant/standby system successfully","Passwords are strong","The website loads faster","Logs are deleted"], answer:0,
   explain:"Failover testing confirms redundant systems take over correctly when the primary fails."}
],
// 3.4 Backups
"8mGSwRScqIM": [
  {q:"A full backup followed by daily backups of only changed data since the last FULL backup describes a:",
   options:["Differential backup","Incremental backup","Snapshot only","Mirror"], answer:0,
   explain:"Differential backups capture all changes since the last full backup (growing each day)."},
  {q:"An incremental backup captures:",
   options:["Only data changed since the last backup (full OR incremental)","Everything every time","Nothing","Only deleted files"], answer:0,
   explain:"Incrementals back up changes since the last backup of any type, making them small and fast."},
  {q:"Keeping backups offline or immutable is especially important to defend against:",
   options:["Ransomware encrypting/deleting your backups","Slow networks","Bright screens","Short passwords"], answer:0,
   explain:"Offline/immutable backups can't be encrypted or deleted by ransomware, ensuring recovery."}
],
// 3.4 Power Resiliency
"-EY45MimSBM": [
  {q:"A UPS (Uninterruptible Power Supply) primarily provides:",
   options:["Short-term battery power to ride through outages and allow graceful shutdown","Weeks of power","Internet access","Data encryption"], answer:0,
   explain:"A UPS gives short-term battery backup for brief outages and clean shutdown/transition."},
  {q:"A generator is used for power resiliency when:",
   options:["Longer-term power is needed during extended outages","Only for a few seconds","To encrypt data","To speed up the CPU"], answer:0,
   explain:"Generators supply longer-term power; UPS bridges the gap until the generator starts."},
  {q:"Dual power supplies and redundant power feeds help eliminate:",
   options:["A single point of failure in power delivery","Encryption overhead","DNS errors","Phishing"], answer:0,
   explain:"Redundant power paths keep systems running if one supply or feed fails."}
]
});

/* ===================== SECTION 4 ===================== */
Object.assign(VIDEO_QUIZZES, {
// 4.1 Secure Baselines
"BWPJD9Eb9iE": [
  {q:"A secure baseline is:",
   options:["A documented standard secure configuration for a system","A type of backup","An encryption key","A phishing test"], answer:0,
   explain:"A baseline defines the approved secure configuration that systems should match."},
  {q:"After establishing a baseline, the next steps are typically to:",
   options:["Deploy it and then continually monitor/maintain it","Delete it","Ignore changes","Disable logging"], answer:0,
   explain:"You establish, deploy, and then maintain the baseline as systems and threats change."},
  {q:"Configuration drift is a problem because:",
   options:["Systems gradually deviate from the secure baseline over time","It improves security","It speeds up patching","It encrypts data"], answer:0,
   explain:"Drift means systems no longer match the hardened baseline, reintroducing risk."}
],
// 4.1 Hardening Targets
"YQKbs0ug0XQ": [
  {q:"Hardening an IoT device often includes:",
   options:["Changing default credentials and disabling unnecessary features","Leaving defaults in place","Removing all updates","Opening all ports"], answer:0,
   explain:"IoT devices ship with weak defaults; changing creds and reducing features hardens them."},
  {q:"Which is a common server hardening step?",
   options:["Removing unnecessary services and applying least privilege","Installing more games","Disabling antivirus","Sharing admin accounts"], answer:0,
   explain:"Minimizing services and enforcing least privilege reduces a server's attack surface."},
  {q:"Why is hardening mobile devices challenging?",
   options:["They are diverse, portable, and easily lost or stolen","They never connect to networks","They cannot run apps","They have no data"], answer:0,
   explain:"Mobility, variety, and loss/theft risk make consistent mobile hardening difficult."}
],
// 4.1 Securing Wireless and Mobile
"iAR6SgvtezY": [
  {q:"BYOD (Bring Your Own Device) introduces the challenge of:",
   options:["Securing corporate data on personally owned devices","Free hardware for IT","Stronger encryption automatically","No management needed"], answer:0,
   explain:"BYOD mixes personal and corporate data, complicating control and data protection."},
  {q:"Mobile Device Management (MDM) allows an organization to:",
   options:["Enforce policies, push configs, and remotely wipe devices","Replace the firewall","Host websites","Generate certificates only"], answer:0,
   explain:"MDM centrally manages mobile devices — policies, apps, encryption, and remote wipe."},
  {q:"A COPE (Corporate-Owned, Personally Enabled) deployment means:",
   options:["The company owns the device but allows some personal use","The employee owns everything","No corporate data is allowed","Devices are never managed"], answer:0,
   explain:"COPE devices are company-owned and managed, with limited personal use permitted."}
],
// 4.1 Wireless Security Settings
"KaqKoKNEKnE": [
  {q:"Which wireless security standard is the most current and secure?",
   options:["WPA3","WEP","WPA","Open/none"], answer:0,
   explain:"WPA3 is the latest standard; WEP and original WPA are deprecated and insecure."},
  {q:"In enterprise Wi-Fi, WPA3-Enterprise uses which server for authentication?",
   options:["RADIUS","DNS","DHCP","NTP"], answer:0,
   explain:"Enterprise mode uses 802.1X with a RADIUS server for centralized authentication."},
  {q:"WPA3 improves on WPA2 partly by using:",
   options:["SAE (Simultaneous Authentication of Equals) to resist offline attacks","WEP keys","No encryption","Shorter keys"], answer:0,
   explain:"SAE strengthens the handshake against offline dictionary attacks compared to WPA2-PSK."}
],
// 4.1 Application Security
"fFvXy3WkLpA": [
  {q:"Input validation in application security prevents:",
   options:["Injection attacks by ensuring data conforms to expected formats","Power outages","DNS errors","Physical theft"], answer:0,
   explain:"Validating input stops malicious data (e.g., SQLi/XSS) from being processed."},
  {q:"Code signing helps users verify that software is:",
   options:["From a trusted source and unaltered","Free of cost","Faster","Open source"], answer:0,
   explain:"Code signing uses a digital signature to confirm origin and integrity of the software."},
  {q:"Static (SAST) and dynamic (DAST) analysis are used to:",
   options:["Find vulnerabilities in application code/behavior","Encrypt the disk","Manage DNS","Back up data"], answer:0,
   explain:"SAST scans source code; DAST tests the running app — both find security flaws."}
],
// 4.2 Asset Management
"BJ2UMB4a04g": [
  {q:"Why is an accurate asset inventory important to security?",
   options:["You can't protect or patch assets you don't know you have","It increases costs only","It replaces firewalls","It encrypts data"], answer:0,
   explain:"Knowing all assets is foundational — unknown assets go unpatched and unmonitored."},
  {q:"Secure data sanitization before disposing of a drive ensures:",
   options:["Data cannot be recovered from the discarded media","The drive runs faster","The drive is encrypted","The drive is backed up"], answer:0,
   explain:"Sanitization (wiping/destruction) prevents data recovery from retired media."},
  {q:"Asset 'enumeration' refers to:",
   options:["Identifying and tracking all hardware and software assets","Encrypting assets","Deleting assets","Selling assets"], answer:0,
   explain:"Enumeration discovers and catalogs assets so they can be managed and secured."}
],
// 4.3 Vulnerability Scanning
"9B0mtWk_AM0": [
  {q:"A credentialed (authenticated) vulnerability scan:",
   options:["Logs into systems for a deeper, more accurate assessment","Is always less accurate","Cannot run on servers","Skips all checks"], answer:0,
   explain:"Credentialed scans see configuration and patch details, yielding fewer false negatives."},
  {q:"A false positive in a vulnerability scan is:",
   options:["A reported vulnerability that doesn't actually exist","A missed real vulnerability","A successful exploit","An encrypted file"], answer:0,
   explain:"A false positive flags something as vulnerable when it isn't, wasting remediation effort."},
  {q:"A false negative is dangerous because:",
   options:["A real vulnerability exists but the scan didn't detect it","It reports too many issues","It encrypts data","It speeds up scanning"], answer:0,
   explain:"False negatives leave real, undetected vulnerabilities unaddressed."}
],
// 4.3 Threat Intelligence
"86fruE9jkKk": [
  {q:"Open-Source Intelligence (OSINT) refers to:",
   options:["Threat information gathered from publicly available sources","Classified government data only","Encrypted backups","Firewall logs only"], answer:0,
   explain:"OSINT uses publicly available data (websites, social media, public records) for intelligence."},
  {q:"Indicators of Compromise (IoCs) shared via threat feeds help defenders:",
   options:["Detect and block known malicious indicators proactively","Encrypt the network","Replace MFA","Speed up the CPU"], answer:0,
   explain:"Threat feeds supply IoCs (IPs, hashes, domains) so defenses can block known threats."},
  {q:"The dark web can be a threat intelligence source for:",
   options:["Discovering leaked credentials or planned attacks","Faster downloads","Free certificates","Better Wi-Fi"], answer:0,
   explain:"Monitoring dark web markets/forums can reveal breached data and emerging threats."}
],
// 4.3 Penetration Testing
"-LevHAzXgFs": [
  {q:"In a 'black box' penetration test, the tester:",
   options:["Has no prior knowledge of the internal systems","Has full source code and diagrams","Is an internal admin","Only reads documentation"], answer:0,
   explain:"Black box simulates an external attacker with no inside knowledge; white box has full knowledge."},
  {q:"The 'rules of engagement' in a pentest define:",
   options:["Scope, boundaries, and authorized actions for the test","The lunch schedule","Marketing goals","Encryption keys"], answer:0,
   explain:"Rules of engagement set what's in scope, methods allowed, and limits to avoid harm/legal issues."},
  {q:"Active reconnaissance differs from passive reconnaissance because it:",
   options:["Directly interacts with the target (e.g., scanning), risking detection","Uses only public data quietly","Never touches the target","Is always illegal"], answer:0,
   explain:"Active recon probes the target directly; passive recon gathers info without interacting."}
],
// 4.3 Analyzing Vulnerabilities
"eyVy1gKCuAU": [
  {q:"The CVSS score is used to:",
   options:["Rate the severity of a vulnerability","Encrypt data","Authenticate users","Back up systems"], answer:0,
   explain:"CVSS (Common Vulnerability Scoring System) gives a standardized severity rating 0-10."},
  {q:"A CVE is:",
   options:["A unique identifier for a publicly known vulnerability","A type of firewall","An encryption algorithm","A backup format"], answer:0,
   explain:"CVE (Common Vulnerabilities and Exposures) provides a standard ID for each known flaw."},
  {q:"When prioritizing vulnerabilities, you should consider severity AND:",
   options:["Exposure/exploitability and business impact (environmental context)","Only the alphabetical name","The screen color","The vendor's logo"], answer:0,
   explain:"Prioritization weighs severity together with real exposure and impact to your environment."}
],
// 4.3 Vulnerability Remediation
"P9xakfmX70c": [
  {q:"The most common remediation for a known vulnerability is:",
   options:["Applying a patch/update","Ignoring it","Deleting all data","Disabling monitoring"], answer:0,
   explain:"Patching closes most known vulnerabilities and is the primary remediation."},
  {q:"When a vulnerability can't be immediately patched, you might use a:",
   options:["Compensating control or mitigation (e.g., segmentation, WAF rule)","Stronger marketing plan","Faster CPU","New logo"], answer:0,
   explain:"Compensating controls reduce risk until a permanent fix can be applied."},
  {q:"Accepting a low-severity risk that costs more to fix than it poses is called:",
   options:["Risk acceptance / exception","Risk transference","Patching","Exploitation"], answer:0,
   explain:"When remediation cost outweighs the risk, formally accepting the risk (with sign-off) is valid."}
],
// 4.4 Security Monitoring
"np2WI_rM-Ok": [
  {q:"A SIEM system primarily:",
   options:["Aggregates and correlates logs from many sources for analysis and alerting","Encrypts hard drives","Hosts websites","Replaces backups"], answer:0,
   explain:"SIEM centralizes log collection, correlation, alerting, and reporting for security monitoring."},
  {q:"Continuous monitoring helps an organization:",
   options:["Detect threats and anomalies in near real time","Reduce visibility","Avoid logging","Disable alerts"], answer:0,
   explain:"Ongoing monitoring catches issues quickly rather than only during periodic reviews."},
  {q:"SNMP is commonly used in monitoring to:",
   options:["Collect status and metrics from network devices","Encrypt email","Crack passwords","Host DNS"], answer:0,
   explain:"SNMP gathers device health/metrics; SNMPv3 adds security (auth/encryption)."}
],
// 4.4 Security Tools
"nNiNTviiacU": [
  {q:"SOAR platforms add which capability on top of monitoring?",
   options:["Automation and orchestration of response actions","Disk defragmentation","Web hosting","Power backup"], answer:0,
   explain:"SOAR (Security Orchestration, Automation, and Response) automates and coordinates incident response."},
  {q:"Antivirus/anti-malware tools primarily:",
   options:["Detect and remove malicious software on endpoints","Encrypt the network","Manage DNS","Balance traffic"], answer:0,
   explain:"AV/anti-malware identifies and removes known malware from systems."},
  {q:"DLP tools complement monitoring by:",
   options:["Detecting and preventing sensitive data from leaving the organization","Speeding up the CPU","Generating certificates","Hosting websites"], answer:0,
   explain:"DLP focuses on preventing data exfiltration, adding to overall security visibility/control."}
],
// 4.5 Firewalls
"VgNyh4HEqSU": [
  {q:"A screened subnet uses firewalls to:",
   options:["Separate public-facing servers from the internal network","Encrypt the disk","Host the database publicly","Disable logging"], answer:0,
   explain:"Firewalls create a DMZ/screened subnet isolating internet-facing systems from the LAN."},
  {q:"A Unified Threat Management (UTM) device combines:",
   options:["Multiple security functions (firewall, IPS, AV, filtering) in one appliance","Only one function","Backup tapes","DNS only"], answer:0,
   explain:"UTM consolidates several security features into a single device for simpler management."},
  {q:"Firewall rules are typically processed:",
   options:["Top-down, with an implicit deny at the end","Randomly","Bottom-up only","Alphabetically"], answer:0,
   explain:"Most firewalls evaluate rules in order and apply an implicit deny for anything not matched."}
],
// 4.5 Web Filtering
"I_c0D49uCwQ": [
  {q:"A URL/content filter is used to:",
   options:["Block access to malicious or inappropriate websites","Encrypt the disk","Back up data","Host DNS"], answer:0,
   explain:"Web filters restrict access to categories/URLs deemed risky or against policy."},
  {q:"An agent-based web filter:",
   options:["Runs software on the endpoint to enforce filtering anywhere the device goes","Only works in the office","Requires no software","Cannot be bypassed ever"], answer:0,
   explain:"Endpoint agents enforce web filtering even when the device is off the corporate network."},
  {q:"Block rules based on website categories (e.g., gambling, malware) are an example of:",
   options:["Content categorization filtering","Disk encryption","MAC filtering","Port security"], answer:0,
   explain:"Category-based filtering blocks groups of sites by classification rather than one URL at a time."}
],
// 4.5 Operating System Security
"4dpTyRM6BU8": [
  {q:"Windows Group Policy (GPO) is used to:",
   options:["Centrally enforce security and configuration settings across systems","Encrypt the network","Host websites","Replace antivirus"], answer:0,
   explain:"GPOs push standardized security/configuration settings to many Windows systems centrally."},
  {q:"SELinux and AppArmor provide:",
   options:["Mandatory access control on Linux systems","Wi-Fi encryption","DNS hosting","Backup scheduling"], answer:0,
   explain:"These enforce mandatory access control policies, confining what processes can do on Linux."},
  {q:"Keeping the OS patched and removing unneeded software is part of:",
   options:["OS hardening","Adding attack surface","Social engineering","Key escrow"], answer:0,
   explain:"Patching and minimizing installed software harden the operating system."}
],
// 4.5 Secure Protocols
"9NAKCyOtFH0": [
  {q:"Which is the secure replacement for Telnet?",
   options:["SSH","FTP","HTTP","SNMPv1"], answer:0,
   explain:"SSH provides encrypted remote access, replacing the cleartext Telnet protocol."},
  {q:"HTTPS secures web traffic using:",
   options:["TLS","Telnet","SNMP","FTP"], answer:0,
   explain:"HTTPS = HTTP over TLS, encrypting web communications."},
  {q:"Which protocol securely transfers files over SSH?",
   options:["SFTP","FTP","TFTP","HTTP"], answer:0,
   explain:"SFTP runs file transfer over the encrypted SSH channel (different from plain FTP/FTPS)."}
],
// 4.5 Email Security
"v6ht9efsnRI": [
  {q:"SPF, DKIM, and DMARC are used to:",
   options:["Validate email sender authenticity and reduce spoofing","Encrypt hard drives","Host websites","Back up mail"], answer:0,
   explain:"These email authentication mechanisms help prevent spoofing and phishing from forged senders."},
  {q:"DMARC builds on SPF/DKIM by:",
   options:["Telling receivers what to do with failing messages and providing reporting","Encrypting attachments","Replacing TLS","Storing passwords"], answer:0,
   explain:"DMARC sets policy (none/quarantine/reject) for failures and enables reporting back to the domain owner."},
  {q:"An email gateway can improve security by:",
   options:["Filtering spam, phishing, and malicious attachments","Speeding up the CPU","Generating certificates","Hosting DNS"], answer:0,
   explain:"Secure email gateways scan and filter inbound/outbound mail for threats."}
],
// 4.5 Monitoring Data
"ZDJ-BLPLWq4": [
  {q:"A SIEM correlates data to:",
   options:["Identify patterns and security events across many log sources","Encrypt the disk","Host the website","Replace backups"], answer:0,
   explain:"Correlation connects related events from different sources to reveal incidents."},
  {q:"Log aggregation refers to:",
   options:["Collecting logs from many systems into a central location","Deleting all logs","Encrypting one file","Disabling monitoring"], answer:0,
   explain:"Aggregation centralizes logs for unified search, analysis, and retention."},
  {q:"Alerting and reporting from monitoring data help teams:",
   options:["Respond quickly to issues and demonstrate compliance","Avoid all work","Disable logging","Remove the firewall"], answer:0,
   explain:"Alerts drive timely response; reports support compliance and trend analysis."}
],
// 4.5 Endpoint Security
"83pCkSSj1IQ": [
  {q:"EDR (Endpoint Detection and Response) goes beyond traditional antivirus by:",
   options:["Continuously monitoring endpoint behavior and enabling investigation/response","Only scanning on a schedule","Encrypting email","Hosting DNS"], answer:0,
   explain:"EDR provides continuous behavioral monitoring, detection, and response capabilities on endpoints."},
  {q:"A host-based firewall (HIDS/HIPS) protects by:",
   options:["Controlling/inspecting traffic and activity on the individual host","Encrypting the WAN","Balancing load","Hosting websites"], answer:0,
   explain:"Host-based controls protect each endpoint directly, complementing network defenses."},
  {q:"XDR extends EDR by:",
   options:["Correlating data across endpoints, network, cloud, and more","Only watching one laptop","Disabling logging","Removing antivirus"], answer:0,
   explain:"XDR (Extended Detection and Response) unifies telemetry across multiple layers for broader visibility."}
],
// 4.6 Identity and Access Management
"ZoOyyqhptik": [
  {q:"Provisioning and deprovisioning user accounts is important because:",
   options:["Accounts should be created with proper access and promptly disabled when no longer needed","Accounts should never be removed","Everyone needs admin","Passwords should be shared"], answer:0,
   explain:"Timely provisioning/deprovisioning ensures access matches employment status and least privilege."},
  {q:"Single Sign-On (SSO) provides:",
   options:["One authentication that grants access to multiple systems","A separate password for every app","No authentication","Disk encryption"], answer:0,
   explain:"SSO lets users authenticate once to access many connected services."},
  {q:"Federation allows:",
   options:["Authentication across organizations using a trusted identity provider","Only local logins","No external access","Password reuse only"], answer:0,
   explain:"Federation lets users use credentials from one trusted domain/IdP to access another's resources."}
],
// 4.6 Access Controls
"9ANHcZwJfdQ": [
  {q:"Role-Based Access Control (RBAC) grants permissions based on:",
   options:["A user's role/job function","Random assignment","The time of day only","Hair color"], answer:0,
   explain:"RBAC assigns access according to roles, simplifying management and enforcing consistency."},
  {q:"In Mandatory Access Control (MAC), access decisions are based on:",
   options:["Labels/classifications enforced by the system, not the owner","The data owner's discretion","User preference","Random chance"], answer:0,
   explain:"MAC uses system-enforced labels (e.g., classification levels); users can't change permissions at will."},
  {q:"The principle of least privilege requires that users have:",
   options:["Only the minimum access needed to perform their job","Full administrative rights","Access to all data","No access at all"], answer:0,
   explain:"Least privilege limits access to the minimum necessary, reducing risk."}
],
// 4.6 Multifactor Authentication
"MpIzA4fNWew": [
  {q:"Which combination represents true multifactor authentication?",
   options:["Something you know + something you have","Two different passwords","A password typed twice","Two security questions"], answer:0,
   explain:"MFA requires factors from different categories: knowledge, possession, inherence (and location/behavior)."},
  {q:"A hardware token or smartphone authenticator app is which factor?",
   options:["Something you have","Something you know","Something you are","Somewhere you are"], answer:0,
   explain:"Tokens/authenticator apps are possession factors — something you have."},
  {q:"A fingerprint or facial scan is which authentication factor?",
   options:["Something you are","Something you have","Something you know","Somewhere you are"], answer:0,
   explain:"Biometrics are inherence factors — something you are."}
],
// 4.6 Password Security
"eMOe-PLBy1k": [
  {q:"A password manager improves security by:",
   options:["Enabling strong, unique passwords for every account without memorization","Reusing one password everywhere","Storing passwords in plaintext on a sticky note","Disabling MFA"], answer:0,
   explain:"Password managers generate and store unique complex passwords, removing reuse."},
  {q:"Why is increasing password LENGTH usually more effective than just adding complexity?",
   options:["Length dramatically increases the keyspace and resists brute force","Length is easier to crack","Complexity has no effect","Short passwords are stronger"], answer:0,
   explain:"Each added character multiplies possible combinations, often outweighing complexity rules."},
  {q:"Password salting protects stored passwords by:",
   options:["Making identical passwords hash differently and defeating rainbow tables","Encrypting the whole disk","Sending passwords by email","Shortening the hash"], answer:0,
   explain:"A unique salt per password makes precomputed attacks (rainbow tables) ineffective."}
],
// 4.7 Scripting and Automation
"R9ojg881dLs": [
  {q:"A key benefit of security automation and orchestration is:",
   options:["Consistent, fast execution of repetitive tasks with fewer human errors","More manual work","Slower response","Less reliability"], answer:0,
   explain:"Automation handles repetitive tasks consistently and quickly, scaling operations and reducing mistakes."},
  {q:"Automated user provisioning helps by:",
   options:["Creating/removing accounts with correct access consistently and quickly","Sharing one account","Disabling logging","Removing MFA"], answer:0,
   explain:"Automated provisioning enforces consistent, least-privilege account lifecycle management."},
  {q:"A risk of automation/scripting is that:",
   options:["A flawed or malicious script can cause widespread, fast damage","It is always perfectly safe","It can never be misused","It removes the need for testing"], answer:0,
   explain:"Because automation scales, errors or malicious code also scale — scripts must be tested and secured."}
],
// 4.8 Incident Response
"X2UiMLxRdhE": [
  {q:"What is the correct order of the core incident response phases?",
   options:["Preparation → Detection/Analysis → Containment → Eradication → Recovery → Lessons learned","Recovery → Preparation → Detection","Containment → Preparation → Lessons learned","Lessons learned → Detection → Preparation"], answer:0,
   explain:"The standard NIST lifecycle: prepare, detect/analyze, contain, eradicate, recover, then learn."},
  {q:"The containment phase aims to:",
   options:["Limit the spread and impact of the incident","Delete all logs","Notify the press first","Skip analysis"], answer:0,
   explain:"Containment stops the incident from spreading while you prepare to eradicate and recover."},
  {q:"The 'lessons learned' phase is used to:",
   options:["Improve future response and prevent recurrence","Assign blame only","Delete evidence","Ignore the incident"], answer:0,
   explain:"A post-incident review identifies improvements to people, process, and technology."}
],
// 4.8 Incident Planning
"CYFe16lCRMk": [
  {q:"A tabletop exercise is used to:",
   options:["Walk through an incident scenario in discussion to validate the plan","Physically destroy servers","Patch all systems","Encrypt data"], answer:0,
   explain:"Tabletop exercises test plans and roles via discussion without operational impact."},
  {q:"A 'simulation' (e.g., phishing test) differs from a tabletop because it:",
   options:["Actively tests response with a realistic but controlled scenario","Is only a conversation","Requires no planning","Cannot be measured"], answer:0,
   explain:"Simulations actively exercise detection/response, providing more realistic results than discussion alone."},
  {q:"Incident response training and exercises help ensure:",
   options:["Staff know their roles and can respond effectively under pressure","Plans are never tested","Only one person knows the plan","Logs are deleted"], answer:0,
   explain:"Regular training/exercises build readiness so the team performs well during real incidents."}
],
// 4.8 Digital Forensics
"UtDWApdO8Zk": [
  {q:"Chain of custody documentation ensures that:",
   options:["Evidence handling is tracked and admissible (who, what, when, where)","Evidence is deleted","Logs are encrypted","Backups run faster"], answer:0,
   explain:"Chain of custody records every transfer of evidence to maintain its integrity and admissibility."},
  {q:"When collecting digital evidence, you should prioritize data based on its:",
   options:["Order of volatility (most volatile first, e.g., RAM)","Alphabetical name","File size only","Color"], answer:0,
   explain:"Volatile data (memory, cache) disappears quickly, so it's collected first per order of volatility."},
  {q:"Legal hold (preservation) requires an organization to:",
   options:["Preserve relevant data that may be needed for litigation","Delete all old data","Encrypt everything","Ignore the request"], answer:0,
   explain:"A legal hold suspends normal deletion to preserve potentially relevant evidence."}
],
// 4.9 Log Data
"EDru1LTYDJw": [
  {q:"Why should logs be sent to a centralized, secured log server?",
   options:["To prevent tampering and enable correlation/analysis","To make them easier to delete","To slow down systems","To avoid backups"], answer:0,
   explain:"Centralized, protected logging preserves integrity and supports correlation across sources."},
  {q:"Which log type would most directly show failed login attempts?",
   options:["Security/authentication logs","Printer logs","DNS zone files","Backup catalogs"], answer:0,
   explain:"Authentication/security logs record login successes and failures, key for detecting attacks."},
  {q:"Accurate log analysis depends heavily on:",
   options:["Synchronized time (e.g., NTP) across systems","Random timestamps","Deleting old logs","Disabling NTP"], answer:0,
   explain:"Synchronized clocks (NTP) let you correlate events across systems by accurate timestamps."}
]
});

/* ===================== SECTION 5 ===================== */
Object.assign(VIDEO_QUIZZES, {
// 5.1 Security Policies
"5kY9kvzeWjA": [
  {q:"A security policy is best described as:",
   options:["A high-level document defining management's security expectations and goals","A detailed step-by-step task list","A firewall rule","An encryption key"], answer:0,
   explain:"Policies are high-level, mandatory directives set by management; procedures provide the detailed steps."},
  {q:"An Acceptable Use Policy (AUP) defines:",
   options:["How employees may use organizational systems and resources","The backup schedule","The encryption algorithm","The network topology"], answer:0,
   explain:"An AUP sets the rules for acceptable use of company IT resources by users."},
  {q:"A Business Continuity policy focuses on:",
   options:["Keeping critical business functions running during/after a disruption","Marketing strategy","Hiring practices only","Office decor"], answer:0,
   explain:"Business continuity ensures essential operations continue despite disruptions."}
],
// 5.1 Security Standards
"jBvdRpXaomk": [
  {q:"How do standards differ from policies?",
   options:["Standards specify mandatory, specific requirements that support policies","Standards are optional suggestions","Standards are higher-level than policies","Standards are the same as procedures"], answer:0,
   explain:"Standards define specific mandatory requirements (e.g., which encryption) to implement policy goals."},
  {q:"A password standard might specify:",
   options:["Minimum length, complexity, and rotation requirements","The company mission statement","The office address","Marketing copy"], answer:0,
   explain:"Standards give concrete, mandatory specifications such as exact password requirements."},
  {q:"Following an external standard like ISO 27001 helps an organization:",
   options:["Align with recognized best practices and demonstrate due diligence","Avoid all security work","Eliminate the need for policies","Ignore compliance"], answer:0,
   explain:"Adopting recognized standards provides a vetted framework and shows commitment to security."}
],
// 5.1 Security Procedures
"vJINnOZyQNg": [
  {q:"A procedure is:",
   options:["A detailed, step-by-step set of instructions to accomplish a task","A high-level goal","An optional idea","A firewall appliance"], answer:0,
   explain:"Procedures provide the specific steps to carry out policies and standards consistently."},
  {q:"An onboarding procedure typically includes:",
   options:["Steps to create accounts, grant access, and provide security training","Steps to delete the company","Marketing tasks only","Nothing security-related"], answer:0,
   explain:"Onboarding procedures ensure new hires get appropriate access and security awareness."},
  {q:"A change management procedure ensures:",
   options:["Changes follow a consistent, approved, documented process","Changes happen randomly","No changes are ever allowed","Changes skip approval"], answer:0,
   explain:"Procedures make change management repeatable, controlled, and auditable."}
],
// 5.1 Security Considerations
"4tGFraaP48Q": [
  {q:"Governance must consider regulatory factors because:",
   options:["Laws and regulations impose requirements the organization must meet","Regulations never apply","Compliance is optional","Only competitors matter"], answer:0,
   explain:"Local, national, and industry regulations drive mandatory security and privacy requirements."},
  {q:"Governance structures can be centralized or:",
   options:["Decentralized (distributed across business units)","Always external","Nonexistent","Random"], answer:0,
   explain:"Governance may be centralized for consistency or decentralized for flexibility/local control."},
  {q:"Monitoring and revising governance documents is necessary because:",
   options:["Threats, technology, and regulations change over time","Documents are perfect forever","Change is impossible","Security is static"], answer:0,
   explain:"Governance must be reviewed and updated to stay relevant as the environment evolves."}
],
// 5.1 Data Roles and Responsibilities
"gxNi-04yP8Q": [
  {q:"The data OWNER is typically:",
   options:["A senior/management role accountable for the data and its classification","The end user","The janitor","An external attacker"], answer:0,
   explain:"The data owner (often management) is accountable for the data, including classification and protection decisions."},
  {q:"The data CUSTODIAN (or steward) is responsible for:",
   options:["The day-to-day technical handling and protection of the data","Setting business strategy","Marketing the data","Owning the company"], answer:0,
   explain:"Custodians implement and maintain the controls/storage as directed by the owner."},
  {q:"The data PROCESSOR is an entity that:",
   options:["Processes data on behalf of the data controller","Owns all the data outright","Sets all policy","Has no defined role"], answer:0,
   explain:"Under privacy frameworks, the processor acts on behalf of the controller, which determines purpose/means."}
],
// 5.2 Risk Management
"cLhUMoQS1a8": [
  {q:"Risk is commonly understood as a function of:",
   options:["Threat and vulnerability (likelihood) combined with impact","Only the number of employees","Office size","The company logo"], answer:0,
   explain:"Risk considers the likelihood (threat exploiting a vulnerability) and the impact if it occurs."},
  {q:"A risk register is used to:",
   options:["Document identified risks, their assessment, and treatment","Store passwords","Encrypt backups","Host the website"], answer:0,
   explain:"A risk register tracks risks, owners, scores, and mitigation status over time."},
  {q:"Risk appetite refers to:",
   options:["The amount of risk an organization is willing to accept to meet its objectives","The number of firewalls","The encryption strength","The backup size"], answer:0,
   explain:"Risk appetite is the level of risk leadership is willing to tolerate pursuing its goals."}
],
// 5.2 Risk Analysis
"Ykx7t54y-oo": [
  {q:"Quantitative risk analysis expresses risk in:",
   options:["Numerical/monetary terms (e.g., ALE in dollars)","Vague labels only","Colors","Letters A-F"], answer:0,
   explain:"Quantitative analysis assigns numeric values (SLE, ARO, ALE) to risk, often monetary."},
  {q:"Annualized Loss Expectancy (ALE) is calculated as:",
   options:["SLE × ARO (single loss expectancy times annual rate of occurrence)","SLE − ARO","ARO ÷ SLE","SLE + impact"], answer:0,
   explain:"ALE = SLE × ARO, the expected yearly loss from a risk."},
  {q:"Qualitative risk analysis uses:",
   options:["Relative ratings like high/medium/low based on judgment","Exact dollar figures only","Only ALE","Encryption keys"], answer:0,
   explain:"Qualitative analysis ranks risks subjectively (high/med/low) when precise numbers aren't available."}
],
// 5.2 Risk Management Strategies
"pmyuWY7Pbag": [
  {q:"Buying cyber insurance to offset potential losses is an example of risk:",
   options:["Transference","Avoidance","Acceptance","Mitigation"], answer:0,
   explain:"Transference shifts the financial impact of risk to a third party (e.g., insurer)."},
  {q:"Discontinuing a risky activity entirely is risk:",
   options:["Avoidance","Acceptance","Transference","Mitigation"], answer:0,
   explain:"Avoidance eliminates the risk by not engaging in the activity at all."},
  {q:"Applying controls to reduce the likelihood or impact of a risk is risk:",
   options:["Mitigation","Acceptance","Transference","Avoidance"], answer:0,
   explain:"Mitigation reduces risk to an acceptable level through safeguards/controls."}
],
// 5.2 Business Impact Analysis
"myI-v3mj7Kc": [
  {q:"RTO (Recovery Time Objective) defines:",
   options:["The maximum acceptable time to restore a function after disruption","The amount of data loss allowed","The encryption key length","The backup file size"], answer:0,
   explain:"RTO is the target time to get a service back online after an outage."},
  {q:"RPO (Recovery Point Objective) defines:",
   options:["The maximum acceptable amount of data loss measured in time","How fast systems restore","The number of users","The firewall rules"], answer:0,
   explain:"RPO is how much data (in time) you can afford to lose — it drives backup frequency."},
  {q:"MTBF (Mean Time Between Failures) measures:",
   options:["The average time a system operates before failing","Recovery time","Data loss","Password strength"], answer:0,
   explain:"MTBF estimates reliability — the average operating time between failures."}
],
// 5.3 Third-party Risk Assessment
"13KNjPexnEI": [
  {q:"Vendor due diligence is the process of:",
   options:["Evaluating a third party's security posture before/during engagement","Ignoring vendor risk","Sharing all passwords with vendors","Skipping contracts"], answer:0,
   explain:"Due diligence assesses a vendor's security/reliability to manage third-party risk."},
  {q:"Ongoing vendor monitoring is important because:",
   options:["A vendor's risk posture can change after onboarding","Vendors never change","One assessment lasts forever","Monitoring is illegal"], answer:0,
   explain:"Continuous monitoring catches new vendor risks that emerge over the relationship."},
  {q:"A supply chain analysis evaluates risk from:",
   options:["Hardware/software suppliers and service providers in the chain","Only internal staff","The weather","Office furniture"], answer:0,
   explain:"Supply chain assessment looks at risks introduced by suppliers and providers."}
],
// 5.3 Agreement Types
"HSZxjj1YAh8": [
  {q:"An SLA (Service Level Agreement) defines:",
   options:["The expected level of service, metrics, and responsibilities","An employee's salary","Encryption algorithms","The office lease"], answer:0,
   explain:"An SLA specifies measurable service expectations (uptime, response times) between parties."},
  {q:"An NDA (Non-Disclosure Agreement) is used to:",
   options:["Protect confidential information shared between parties","Define uptime","Set the budget","Configure firewalls"], answer:0,
   explain:"NDAs legally bind parties to keep shared confidential information secret."},
  {q:"An MOU (Memorandum of Understanding) is generally:",
   options:["A less formal agreement outlining intentions between parties","A strict legal contract with penalties","A firewall rule","A password policy"], answer:0,
   explain:"An MOU expresses mutual intent and is typically less binding than a formal contract."}
],
// 5.4 Compliance
"IjJf4jLtONQ": [
  {q:"Non-compliance with regulations can result in:",
   options:["Fines, sanctions, reputational damage, and loss of business","Nothing at all","Automatic security","Free certifications"], answer:0,
   explain:"Failing to comply carries legal, financial, and reputational consequences."},
  {q:"Compliance monitoring and reporting are used to:",
   options:["Demonstrate and maintain adherence to requirements over time","Avoid all audits","Delete records","Disable controls"], answer:0,
   explain:"Ongoing monitoring and reporting prove continued compliance and catch gaps early."},
  {q:"A 'compliance attestation' is:",
   options:["A formal statement/confirmation that requirements are being met","An attack technique","An encryption key","A backup file"], answer:0,
   explain:"Attestation formally affirms (often via sign-off or third party) that compliance obligations are met."}
],
// 5.4 Privacy
"WGXrbAh0LUI": [
  {q:"Under privacy regulations like GDPR, the 'data controller' is the entity that:",
   options:["Determines the purposes and means of processing personal data","Only stores data physically","Has no responsibility","Attacks the data"], answer:0,
   explain:"The controller decides why and how personal data is processed and bears primary responsibility."},
  {q:"The 'right to be forgotten' allows individuals to:",
   options:["Request deletion of their personal data","Demand free products","Access any company's data","Bypass security"], answer:0,
   explain:"This privacy right lets individuals request erasure of their personal data under certain conditions."},
  {q:"Data sovereignty refers to:",
   options:["Data being subject to the laws of the country where it is stored","Data never being stored","Encryption strength","Backup frequency"], answer:0,
   explain:"Data sovereignty means data is governed by the legal jurisdiction in which it physically resides."}
],
// 5.5 Audits and Assessments
"uo2Yw720mv4": [
  {q:"The key difference between an internal and external audit is:",
   options:["External audits are performed by an independent third party","Internal audits are illegal","External audits use no standards","They are identical"], answer:0,
   explain:"External audits add independence/objectivity; internal audits are conducted by the organization itself."},
  {q:"An attestation in an audit context is:",
   options:["A formal declaration that findings/controls are accurate or in place","An attack","A backup","A firewall rule"], answer:0,
   explain:"Attestation is a formal confirmation, often by an auditor, regarding the state of controls."},
  {q:"Regular audits and assessments help an organization:",
   options:["Verify controls are working and identify gaps","Avoid all responsibility","Eliminate the need for security","Hide problems"], answer:0,
   explain:"Audits validate control effectiveness and surface weaknesses to remediate."}
],
// 5.5 Penetration Tests
"wEMzVfwBiWY": [
  {q:"The purpose of a penetration test is to:",
   options:["Actively exploit vulnerabilities to demonstrate real-world risk","Only list vulnerabilities without testing","Encrypt the network","Replace the firewall"], answer:0,
   explain:"Pentests go beyond scanning by actively exploiting flaws to show real impact."},
  {q:"A 'known environment' (white box) test means the tester:",
   options:["Is given full information about the systems in advance","Has no information","Is an outside attacker only","Cannot run any tools"], answer:0,
   explain:"Known-environment tests provide full detail; unknown-environment (black box) provides none."},
  {q:"After exploitation, the pentester typically performs:",
   options:["Reporting and recommendations for remediation","Nothing","Permanent damage","Data destruction"], answer:0,
   explain:"A pentest concludes with a report of findings and remediation guidance."}
],
// 5.6 Security Awareness
"W_Npxwk4fbI": [
  {q:"Security awareness training primarily aims to:",
   options:["Reduce human risk by teaching users to recognize and avoid threats","Replace all technical controls","Speed up computers","Encrypt data"], answer:0,
   explain:"Humans are a major attack target; awareness training reduces susceptibility to social engineering."},
  {q:"Simulated phishing campaigns are used to:",
   options:["Measure and improve users' ability to spot phishing","Actually steal credentials","Punish the IT team","Encrypt email"], answer:0,
   explain:"Simulations test and reinforce phishing recognition in a safe, measurable way."},
  {q:"Recognizing anomalous behavior (e.g., a coworker accessing odd systems) supports:",
   options:["An aware workforce acting as a human sensor","Ignoring security","Disabling monitoring","Sharing passwords"], answer:0,
   explain:"Trained users who report anomalies extend the organization's detection capability."}
],
// 5.6 User Training
"WQRZMMLUkGE": [
  {q:"Role-based security training is valuable because:",
   options:["Different roles face different risks and need tailored guidance","Everyone faces identical risks","Training is unnecessary","Only IT needs training"], answer:0,
   explain:"Tailoring training to roles (developers, finance, execs) addresses their specific threats."},
  {q:"How often should security awareness training generally occur?",
   options:["Regularly/recurring (e.g., at least annually plus ongoing reinforcement)","Once, ever","Never","Only after a breach"], answer:0,
   explain:"Ongoing, recurring training keeps security top-of-mind as threats evolve."},
  {q:"Effective training programs measure success by:",
   options:["Metrics like reduced phishing click rates and improved reporting","The length of the slides","The number of emails sent","Office attendance only"], answer:0,
   explain:"Metrics (click rates, reporting rates, incident trends) show whether training is working."}
]
});

/* ===================== SECTION EXAMS ===================== */
Object.assign(SECTION_EXAMS, {
"1": [
  {q:"A company places bollards and security lighting around its building. These are which category and type of control?",
   options:["Physical, deterrent/preventive","Technical, detective","Managerial, corrective","Operational, compensating"], answer:0,
   explain:"Bollards and lighting are physical controls that deter and help prevent unauthorized access."},
  {q:"Which element of the CIA triad is harmed by a successful DoS attack?",
   options:["Availability","Confidentiality","Integrity","Non-repudiation"], answer:0,
   explain:"DoS attacks target availability by making resources inaccessible."},
  {q:"A digital signature provides integrity, authentication, and:",
   options:["Non-repudiation","Confidentiality","Availability","Redundancy"], answer:0,
   explain:"A digital signature proves origin so the signer cannot deny it — non-repudiation."},
  {q:"In AAA, recording the actions a user takes after logging in is:",
   options:["Accounting","Authentication","Authorization","Identification"], answer:0,
   explain:"Accounting logs/audits user actions after access is granted."},
  {q:"Which best describes Zero Trust?",
   options:["Never trust, always verify — authenticate every request","Trust the internal network fully","Authenticate once per day","Trust devices on the corporate VLAN"], answer:0,
   explain:"Zero Trust removes implicit trust and verifies each access request."},
  {q:"A gap analysis is performed to:",
   options:["Compare current posture to a desired standard and find shortfalls","Respond to an active breach","Encrypt data at rest","Block phishing emails"], answer:0,
   explain:"Gap analysis measures the difference between current and target states."},
  {q:"An access control vestibule (mantrap) primarily prevents:",
   options:["Tailgating/piggybacking","SQL injection","DDoS","Malware"], answer:0,
   explain:"A vestibule allows one person at a time, stopping unauthorized followers."},
  {q:"A network of decoy systems set up to attract attackers is a:",
   options:["Honeynet","Botnet","Subnet","VPN"], answer:0,
   explain:"A honeynet is multiple honeypots forming a realistic decoy environment."},
  {q:"A formal change is reviewed and approved by the:",
   options:["Change Advisory Board (CAB)","Marketing department","Help desk only","End users"], answer:0,
   explain:"The CAB evaluates and approves significant changes based on risk/impact."},
  {q:"To encrypt a message so only the recipient can read it, the sender uses the recipient's:",
   options:["Public key","Private key","Symmetric salt","Hash"], answer:0,
   explain:"Encrypt with the recipient's public key; only their private key decrypts it."},
  {q:"Which uses the SAME key for encryption and decryption?",
   options:["Symmetric encryption","Asymmetric encryption","Hashing","Digital signatures"], answer:0,
   explain:"Symmetric encryption uses one shared secret key for both operations."},
  {q:"Adding random data to a password before hashing is called:",
   options:["Salting","Tokenizing","Escrow","Masking"], answer:0,
   explain:"Salting makes each hash unique and defeats rainbow tables."},
  {q:"A cryptographic hash function is:",
   options:["One-way and used to verify integrity","Reversible to recover input","The same as encryption","Used only to compress files"], answer:0,
   explain:"Hashes are one-way and validate data integrity."},
  {q:"Hiding data inside an image is an example of:",
   options:["Steganography","Tokenization","Key exchange","Hashing"], answer:0,
   explain:"Steganography conceals data within other files."},
  {q:"Which protocol lets a client check a single certificate's revocation status in real time?",
   options:["OCSP","DNS","ICMP","NTP"], answer:0,
   explain:"OCSP queries the CA for one certificate's revocation status."},
  {q:"A TPM is best described as:",
   options:["A hardware chip that securely stores keys on a device","A cloud antivirus","A type of phishing","A firewall ruleset"], answer:0,
   explain:"A TPM is on-device hardware for secure key storage and crypto operations."}
],
"2": [
  {q:"Which threat actor is typically the most sophisticated and well-resourced?",
   options:["Nation-state (APT)","Script kiddie","Hacktivist","Lone amateur"], answer:0,
   explain:"Nation-state/APT actors have the most funding, skill, and persistence."},
  {q:"A phishing attack conducted by phone is called:",
   options:["Vishing","Smishing","Whaling","Pharming"], answer:0,
   explain:"Vishing is voice phishing via phone calls."},
  {q:"Compromising a website that a target group is known to visit is a:",
   options:["Watering hole attack","Brute force attack","Replay attack","Buffer overflow"], answer:0,
   explain:"Watering hole attacks infect trusted sites the victims frequent."},
  {q:"A buffer overflow happens when:",
   options:["More data is written to a buffer than it can hold","A password is too long","The CPU overheats","DNS resolves slowly"], answer:0,
   explain:"Overflowing a buffer overwrites adjacent memory and can enable code execution."},
  {q:"The best defense against SQL injection is:",
   options:["Parameterized queries and input validation","Longer table names","Disabling HTTPS","Hourly reboots"], answer:0,
   explain:"Prepared statements separate code from data, blocking injection."},
  {q:"Stored XSS is more dangerous than reflected XSS because:",
   options:["The script is saved on the server and served to many victims","It needs no browser","It only affects the attacker","It can't steal cookies"], answer:0,
   explain:"Stored XSS persists and affects every visitor to the page."},
  {q:"A zero-day vulnerability is one that:",
   options:["Has no available patch and is unknown to the vendor","Was patched years ago","Only affects printers","Requires physical access"], answer:0,
   explain:"Zero-days are unpatched, undisclosed flaws."},
  {q:"Ransomware is best mitigated for recovery by:",
   options:["Reliable offline/immutable backups","Paying immediately","Disabling antivirus","Sharing the key"], answer:0,
   explain:"Offline backups let you restore without paying the ransom."},
  {q:"The defining trait of a worm versus a virus is that a worm:",
   options:["Self-replicates across networks without user action","Needs a host file and user to run","Cannot spread","Only affects RAM"], answer:0,
   explain:"Worms propagate automatically; viruses need user execution."},
  {q:"A rogue access point impersonating a legitimate SSID is an:",
   options:["Evil twin","On-path proxy","Logic bomb","Amplifier"], answer:0,
   explain:"An evil twin mimics a real AP to intercept connections."},
  {q:"An on-path (man-in-the-middle) attack allows an attacker to:",
   options:["Intercept and possibly modify traffic between two parties","Only crash a server","Speed up the link","Encrypt traffic for users"], answer:0,
   explain:"The attacker sits between the parties to read/alter communications."},
  {q:"Resending a captured authentication token to impersonate a user is a:",
   options:["Replay attack","Birthday attack","Race condition","DoS"], answer:0,
   explain:"Replay attacks reuse captured valid data; nonces/timestamps prevent them."},
  {q:"Trying one common password across many accounts to avoid lockouts is:",
   options:["Password spraying","Dictionary attack on one account","Phishing","Salting"], answer:0,
   explain:"Spraying uses few passwords across many users to evade lockout."},
  {q:"Which is an Indicator of Compromise (IoC)?",
   options:["Unusual outbound traffic to an unknown IP at 3 a.m.","A normal workday login","A successful backup","A completed patch"], answer:0,
   explain:"Anomalous traffic/behavior signals possible compromise."},
  {q:"Application allow-listing mitigates malware by:",
   options:["Permitting only approved programs to run","Allowing everything by default","Blocking nothing","Disabling the firewall"], answer:0,
   explain:"Allow-listing blocks any unapproved/unknown software."},
  {q:"Disabling default credentials on a device addresses which weakness?",
   options:["Misconfiguration vulnerability","Strong hardening flaw","Encryption at rest","A honeypot"], answer:0,
   explain:"Default credentials are a classic misconfiguration; changing them hardens the device."},
  {q:"A supply chain attack compromises a victim by:",
   options:["Targeting a trusted vendor or component","Sending one phishing email","Guessing one password","Flooding the firewall"], answer:0,
   explain:"Attackers infiltrate through trusted suppliers/software."}
],
"3": [
  {q:"In IaaS, the cloud provider is responsible for:",
   options:["The physical hardware and virtualization layer","Your application code","Your data classification","Your user passwords"], answer:0,
   explain:"In IaaS the provider manages infrastructure; the customer manages OS/apps/data."},
  {q:"SDN separates which two planes?",
   options:["Control plane and data plane","Power and cooling","Disk and RAM","Input and output"], answer:0,
   explain:"Software-defined networking decouples control (decisions) from data (forwarding)."},
  {q:"An air-gapped system is secured by:",
   options:["Physical isolation from untrusted networks","Always being wireless","Direct internet exposure","Encryption only"], answer:0,
   explain:"Air gapping removes network connectivity to untrusted systems."},
  {q:"Infrastructure as Code (IaC) provides:",
   options:["Automated, consistent provisioning via configuration files","Manual setup each time","Encryption of code only","Paper documentation"], answer:0,
   explain:"IaC automates infrastructure for consistency and repeatability."},
  {q:"The main difference between an IPS and an IDS is that an IPS can:",
   options:["Actively block malicious traffic inline","Only send alerts","Only log","Encrypt data"], answer:0,
   explain:"IPS blocks inline; IDS only detects and alerts."},
  {q:"A hardened gateway that admins use to reach internal systems is a:",
   options:["Jump server","Load balancer","Honeypot","Proxy cache"], answer:0,
   explain:"A jump server is the controlled access point for managing sensitive systems."},
  {q:"802.1X provides:",
   options:["Port-based network access control requiring authentication","Disk encryption","Faster Wi-Fi","DNS resolution"], answer:0,
   explain:"802.1X authenticates devices/users before granting port access."},
  {q:"A Web Application Firewall (WAF) specifically protects against:",
   options:["Web attacks like SQLi and XSS","Power outages","Physical theft","DNS caching"], answer:0,
   explain:"A WAF inspects HTTP/S to block web application attacks."},
  {q:"A site-to-site VPN is used to:",
   options:["Connect two networks securely over the internet","Connect one laptop to Wi-Fi","Host a website","Store backups"], answer:0,
   explain:"Site-to-site VPNs securely link entire networks."},
  {q:"TLS protects data in which state?",
   options:["Data in transit","Data at rest","Data in use","Archived data"], answer:0,
   explain:"TLS encrypts data moving across networks (in transit)."},
  {q:"Why classify data (public, confidential, restricted)?",
   options:["To match protection to sensitivity","To delete it faster","To publish everything","To skip backups"], answer:0,
   explain:"Classification ensures controls align with each data type's sensitivity."},
  {q:"DLP systems are designed to:",
   options:["Detect and prevent unauthorized data exfiltration","Speed up the network","Generate certificates","Host DNS"], answer:0,
   explain:"DLP stops sensitive data from leaving the organization improperly."},
  {q:"A fully equipped, ready-to-run disaster recovery location is a:",
   options:["Hot site","Cold site","Warm site","Empty site"], answer:0,
   explain:"A hot site is fully operational and can take over almost immediately."},
  {q:"A differential backup captures:",
   options:["All changes since the last FULL backup","Only changes since the last backup of any type","Everything every time","Only deleted files"], answer:0,
   explain:"Differentials grow daily, capturing all changes since the last full backup."},
  {q:"A UPS primarily provides:",
   options:["Short-term battery power for outages and graceful shutdown","Weeks of power","Internet access","Encryption"], answer:0,
   explain:"A UPS bridges short outages; generators handle longer ones."},
  {q:"RAID improves resiliency by:",
   options:["Combining disks for redundancy and/or performance","Encrypting the WAN","Backing up to tape","Filtering web traffic"], answer:0,
   explain:"RAID lets data survive a drive failure depending on the level used."}
],
"4": [
  {q:"A secure baseline is:",
   options:["A documented standard secure configuration","A type of backup","An encryption key","A phishing simulation"], answer:0,
   explain:"A baseline defines the approved secure configuration systems should match."},
  {q:"Configuration drift refers to:",
   options:["Systems gradually deviating from the secure baseline","Improved security over time","Faster patching","Disk encryption"], answer:0,
   explain:"Drift reintroduces risk as systems move away from the hardened baseline."},
  {q:"The most current and secure Wi-Fi standard is:",
   options:["WPA3","WEP","WPA","Open"], answer:0,
   explain:"WPA3 is the latest; WEP/WPA are deprecated."},
  {q:"MDM allows an organization to:",
   options:["Enforce policy and remotely wipe mobile devices","Replace the firewall","Host websites","Generate certificates only"], answer:0,
   explain:"MDM centrally manages mobile devices, including remote wipe."},
  {q:"A credentialed vulnerability scan:",
   options:["Logs in for deeper, more accurate results","Is always less accurate","Can't scan servers","Skips checks"], answer:0,
   explain:"Authenticated scans see config/patch detail, reducing false negatives."},
  {q:"A false negative in scanning is dangerous because:",
   options:["A real vulnerability went undetected","It reports too many issues","It encrypts data","It speeds scanning"], answer:0,
   explain:"False negatives leave real flaws unaddressed."},
  {q:"CVSS is used to:",
   options:["Rate vulnerability severity","Encrypt data","Authenticate users","Back up systems"], answer:0,
   explain:"CVSS provides a standardized 0-10 severity score."},
  {q:"A SIEM primarily:",
   options:["Aggregates and correlates logs for analysis and alerting","Encrypts disks","Hosts websites","Replaces backups"], answer:0,
   explain:"SIEM centralizes logging, correlation, and alerting."},
  {q:"SOAR adds which capability to security operations?",
   options:["Automation and orchestration of response","Disk defragmentation","Web hosting","Power backup"], answer:0,
   explain:"SOAR automates and coordinates incident response workflows."},
  {q:"Firewall rules are typically processed:",
   options:["Top-down with an implicit deny at the end","Randomly","Bottom-up","Alphabetically"], answer:0,
   explain:"Rules are evaluated in order with an implicit deny for unmatched traffic."},
  {q:"SSH is the secure replacement for:",
   options:["Telnet","HTTPS","TLS","SFTP"], answer:0,
   explain:"SSH provides encrypted remote access, replacing cleartext Telnet."},
  {q:"SPF, DKIM, and DMARC are used to:",
   options:["Authenticate email senders and reduce spoofing","Encrypt disks","Host websites","Back up mail"], answer:0,
   explain:"These mechanisms validate sender authenticity to fight spoofing/phishing."},
  {q:"EDR differs from traditional antivirus by:",
   options:["Continuously monitoring behavior and enabling response","Only scanning on a schedule","Encrypting email","Hosting DNS"], answer:0,
   explain:"EDR adds continuous behavioral detection and response on endpoints."},
  {q:"True multifactor authentication requires:",
   options:["Factors from different categories (e.g., know + have)","Two passwords","A password typed twice","Two security questions"], answer:0,
   explain:"MFA combines different factor types: knowledge, possession, inherence."},
  {q:"The principle of least privilege means users get:",
   options:["Only the access needed for their job","Full admin rights","Access to all data","No access"], answer:0,
   explain:"Least privilege limits access to the minimum necessary."},
  {q:"What is the correct incident response order?",
   options:["Preparation, Detection/Analysis, Containment, Eradication, Recovery, Lessons Learned","Recovery, Preparation, Detection","Containment, Preparation, Lessons Learned","Lessons Learned, Detection, Preparation"], answer:0,
   explain:"This is the standard NIST incident response lifecycle."},
  {q:"During evidence collection, which is gathered first?",
   options:["The most volatile data (e.g., RAM)","The largest files","Backup tapes","Printed documents"], answer:0,
   explain:"Order of volatility dictates collecting volatile memory before disk."},
  {q:"Accurate log correlation across systems depends on:",
   options:["Synchronized time via NTP","Random timestamps","Deleting old logs","Disabling NTP"], answer:0,
   explain:"NTP keeps clocks aligned so events can be correlated by time."}
],
"5": [
  {q:"A security policy is:",
   options:["A high-level statement of management's security expectations","A step-by-step task list","A firewall rule","An encryption key"], answer:0,
   explain:"Policies are high-level directives; procedures provide the detailed steps."},
  {q:"How do standards differ from policies?",
   options:["Standards specify mandatory specific requirements supporting policies","Standards are optional","Standards are higher level","Standards equal procedures"], answer:0,
   explain:"Standards define concrete mandatory requirements that implement policy goals."},
  {q:"The data OWNER is typically:",
   options:["A management role accountable for the data","The end user","An external vendor","The attacker"], answer:0,
   explain:"The owner (management) is accountable for data classification and protection."},
  {q:"Risk is a function of:",
   options:["Likelihood (threat × vulnerability) and impact","Employee count","Office size","Logo design"], answer:0,
   explain:"Risk combines the likelihood of an event with its impact."},
  {q:"ALE is calculated as:",
   options:["SLE × ARO","SLE − ARO","ARO ÷ SLE","SLE + ARO"], answer:0,
   explain:"Annualized Loss Expectancy = Single Loss Expectancy × Annual Rate of Occurrence."},
  {q:"Buying insurance to offset losses is risk:",
   options:["Transference","Avoidance","Acceptance","Mitigation"], answer:0,
   explain:"Transference shifts financial impact to a third party."},
  {q:"Discontinuing a risky activity entirely is risk:",
   options:["Avoidance","Acceptance","Transference","Mitigation"], answer:0,
   explain:"Avoidance eliminates the risk by not doing the activity."},
  {q:"RTO defines:",
   options:["The maximum acceptable time to restore a function","Acceptable data loss","Key length","Backup size"], answer:0,
   explain:"RTO is the target recovery time after a disruption."},
  {q:"RPO defines:",
   options:["The maximum acceptable data loss (in time)","Restore speed","User count","Firewall rules"], answer:0,
   explain:"RPO drives backup frequency by setting tolerable data loss."},
  {q:"An SLA defines:",
   options:["Expected service levels, metrics, and responsibilities","Employee salaries","Encryption algorithms","Office leases"], answer:0,
   explain:"SLAs set measurable service expectations between parties."},
  {q:"An NDA is used to:",
   options:["Protect confidential information shared between parties","Define uptime","Set budgets","Configure firewalls"], answer:0,
   explain:"NDAs legally bind parties to keep shared information confidential."},
  {q:"Vendor due diligence is performed to:",
   options:["Assess a third party's security posture before/during engagement","Ignore vendor risk","Share all passwords","Skip contracts"], answer:0,
   explain:"Due diligence evaluates vendor security to manage third-party risk."},
  {q:"Non-compliance with regulations can result in:",
   options:["Fines, sanctions, and reputational damage","Automatic security","Free certifications","Nothing"], answer:0,
   explain:"Non-compliance carries legal, financial, and reputational consequences."},
  {q:"Under GDPR, the entity that determines the purposes and means of processing is the:",
   options:["Data controller","Data custodian","Data subject","Processor only"], answer:0,
   explain:"The controller decides why and how personal data is processed."},
  {q:"An external audit adds value through:",
   options:["Independence and objectivity","Lower standards","Hiding findings","Avoiding documentation"], answer:0,
   explain:"External auditors are independent third parties, adding objectivity."},
  {q:"A penetration test differs from a vulnerability scan because it:",
   options:["Actively exploits flaws to demonstrate real risk","Only lists vulnerabilities","Encrypts the network","Replaces the firewall"], answer:0,
   explain:"Pentests exploit vulnerabilities to show actual impact, beyond scanning."},
  {q:"Simulated phishing campaigns are used to:",
   options:["Measure and improve users' phishing recognition","Steal real credentials","Punish IT","Encrypt email"], answer:0,
   explain:"Phishing simulations safely test and reinforce user awareness."},
  {q:"Security awareness training reduces risk by:",
   options:["Teaching users to recognize and avoid threats","Replacing technical controls","Speeding up computers","Encrypting data"], answer:0,
   explain:"Training lowers human susceptibility to social engineering and mistakes."}
]
});

/*__APPEND__*/
