---
title: SSH
description: ssh login to servers
published: true
date: 2025-02-26T10:45:35.129Z
tags: 
editor: markdown
dateCreated: 2025-02-26T09:00:13.939Z
---

# Intro:
In this page, you can know briefly about how to login to a server using ssh.

# SSH Login:

Basically, we log in to our servers using password and public key authentication. Now we are using public key authentication by disabling password authentication.

**Note**: We disabled the password authentication, for now we are using only ssh login authentication.

The information for SSH login includes the user, port number, and domain name.
Here are the dedicated servers that we have now. you can check them below:
# Servers' Info

```sh
own1 
	ssh port: 2431
  webserver: own1.aganitha.ai
  https port: none 
own2 ssh port: 2222 https port: none webserver: own2.aganitha.ai
own3 ssh port: 2322 https port: none webserver: own3.aganitha.ai
own4 ssh port: 2222 https port: 8443 webserver: own4.aganitha.ai:8443
own5 ssh port: 2522 https port: 8543 webserver: own5.aganitha.ai:8543
own6 ssh port: 2622 https port: 8643 webserver: own6.aganitha.ai:8643
hpc2 ssh port: 2222 https port: none webserver: hpc2.aganitha.ai
hpc3 ssh port: 2222 https port: none webserver: hpc3.aganitha.ai
hpc4 ssh port: 2222 https port: none webserver: hpc4.aganitha.ai
```

---


Below is the syntax for SSH login:

```sh
ssh -p <port_number> <username>@<hostname>
```
based on the project you've been assigned to, system admin will give access to  the servers accordingly...


### **Explanation:**

* `ssh` → The command to start an SSH connection.  
* `-p <port_number>` → Specifies the port number to connect to (if it's not the default **22**).  
* `<username>` → The user account you want to log in as on the remote machine.  
* `<hostname>` → The IP address or domain name of the remote machine.  

### **Example Usage:**

```sh
ssh -p 2322 shilpa@own3.aganitha.ai
```
---

# 2. Key Pair: 

Check before generating the key pair using the following command:

```sh
cat ~/.ssh/id_rsa.pub
```

If SSH keys are not generated, please generate them using the following command:

```sh
ssh-keygen -t rsa -b 4096 -N "" -f "$USER"_rsa_key
```

After generation, a key pair will be created in the ~/.ssh directory of your home  ~/<your_username>


* **Private key:** `~/.ssh/id_rsa` (**Keep this secret**)  
* **Public key:** `~/.ssh/id_rsa.pub` (**Can be shared**)  

---

# 3. Public-key authentication:

To aacess any of our servers you need to send the public key to system admin by copy paste or by adding the public key to your github profile and send the github username to him (**"username-acog"** Follow this naming convention to <a href="/">create a github account</a>) add a github url

```sh
ssh -i ~/.ssh/id_rsa.pub username@hostname
```

---

# 4. SSH Configuration (`~/.ssh/config`):

The **SSH config file** (`~/.ssh/config`) allows you to define custom settings for different SSH connections, making it easier to manage multiple servers.  
If the file doesn’t exist, create it:

```sh
touch ~/.ssh/config
chmod 600 ~/.ssh/config  # Set correct permissions
```

Basic Configuration Example:

```sh
Host own3
    HostName own3.aganitha.ai
    User shilpa
    Port 2222
```

Now, instead of running:

```sh
ssh -p 2322 shilpa@own3.aganitha.ai
```

You can simply use:

```sh
ssh own3
```
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
# Want to know more ? 🧐
After Successfully login to the server you can work and also you can check more information about the server. You want to know more about that ? then, follow the below steps.
* open your server in the browser https://own3.aganitha.ai/
* you can see the page like this

![screenshot_2025-02-26_3.31.25_pm.png](/screenshot_2025-02-26_3.31.25_pm.png)
* There you can find the options **Home**, **Container List**, **Status**, **Reset**.
* Navigate to **Status**.
* You can find the more information like CPU Load, Disk Usage, Memory Usage and  Machine information.
* Look at the pictures below...

![screenshot_2025-02-26_3.35.56_pm.png](/screenshot_2025-02-26_3.35.56_pm.png)
![screenshot_2025-02-26_3.36.15_pm.png](/screenshot_2025-02-26_3.36.15_pm.png)

