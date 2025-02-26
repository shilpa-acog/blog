---
title: ssh
description: ssh login
published: true
date: 2025-02-26T09:04:39.272Z
tags: 
editor: markdown
dateCreated: 2025-02-26T09:00:13.939Z
---

# SSH
In this page, you can know briefly about how to login to a server using ssh.
# SSH Login:

Basically, we log in to our servers using password and public key authentication. Now we are using public key authentication by disabling password authentication.

The information for SSH login includes the user, port number, and domain name. Below is the syntax for SSH login:

```sh
ssh -p <port_number> <username>@<hostname>
```
<button onclick="copyToClipboard('ssh -p <port_number> <username>@<hostname>')"></button>

### **Explanation:**

* `ssh` → The command to start an SSH connection.  
* `-p <port_number>` → Specifies the port number to connect to (if it's not the default **22**).  
* `<username>` → The user account you want to log in as on the remote machine.  
* `<hostname>` → The IP address or domain name of the remote machine.  

### **Example Usage:**

```sh
ssh -p 2322 shilpa@own3.aganitha.ai
```
<button onclick="copyToClipboard('ssh -p 2322 shilpa@own3.aganitha.ai')"></button>

---

# 2. Server Responds and Key Exchange Happens:

* The server checks if it supports the SSH **protocol version** of the client.  
* They perform a **key exchange**.  
* The server presents its **public key** to the client.  
* If the client has connected before, it verifies the server's fingerprint using `~/.ssh/known_hosts`.  

Check before generating the key pair using the following command:

```sh
cat ~/.ssh/id_rsa.pub
```
<button onclick="copyToClipboard('cat ~/.ssh/id_rsa.pub')"></button>

If SSH keys are not generated, please generate them using the following command:

```sh
ssh-keygen
```
<button onclick="copyToClipboard('ssh-keygen')"></button>

Follow the prompts while generating the keys (press **Enter** to accept defaults). After generation, a key pair will be created.

* **Private key:** `~/.ssh/id_rsa` (**Keep this secret**)  
* **Public key:** `~/.ssh/id_rsa.pub` (**Can be shared**)  

---

# 3. Public-key authentication:

The client presents an SSH key instead of a password:

```sh
ssh -i ~/.ssh/id_rsa username@hostname
```
<button onclick="copyToClipboard('ssh -i ~/.ssh/id_rsa username@hostname')"></button>

---

# 4. SSH Configuration (`~/.ssh/config`):

The **SSH config file** (`~/.ssh/config`) allows you to define custom settings for different SSH connections, making it easier to manage multiple servers.  
If the file doesn’t exist, create it:

```sh
touch ~/.ssh/config
chmod 600 ~/.ssh/config  # Set correct permissions
```
<button onclick="copyToClipboard('touch ~/.ssh/config\nchmod 600 ~/.ssh/config')"></button>

Basic Configuration Example:

```sh
Host own3
    HostName own3.aganitha.ai
    User shilpa
    Port 2222
```
<button onclick="copyToClipboard('Host own3\n    HostName own3.aganitha.ai\n    User shilpa\n    Port 2222')"></button>

Now, instead of running:

```sh
ssh -p 2222 shilpa@own3.aganitha.ai
```
<button onclick="copyToClipboard('ssh -p 2222 shilpa@own3.aganitha.ai')"></button>

You can simply use:

```sh
ssh own3
```
<button onclick="copyToClipboard('ssh own3')"></button>

---

# 5. Adjust `.ssh` directory permissions:

Proper permissions on your `~/.ssh` directory and its files are crucial for **security** and **successful authentication** when using SSH. If permissions are too open, SSH will **reject** your keys and prevent login.  
The correct permissions are:

```sh
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
chmod 600 ~/.ssh/authorized_keys
ls -lah ~/.ssh  # Check if everything is set correctly
```
<button onclick="copyToClipboard('chmod 700 ~/.ssh\nchmod 600 ~/.ssh/id_rsa\nchmod 644 ~/.ssh/id_rsa.pub\nchmod 600 ~/.ssh/authorized_keys\nls -lah ~/.ssh')"></button>

---

