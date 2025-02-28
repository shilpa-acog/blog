---
title: SSH
description: ssh login to servers
published: true
date: 2025-02-28T11:26:06.334Z
tags: 
editor: markdown
dateCreated: 2025-02-26T09:00:13.939Z
---

# Intro:
SSH is a basic command line tool to access any remote server. So, in this page, you will know briefly about how to login to any remote server using ssh 

# SSH Login:

Basically, we login to our servers using public key authentication. 

Below is the syntax to login:

```sh
ssh -p <port_number> <username>@<hostname>
```

### **Explanation:**

* `ssh` → The command to start an SSH connection.  
* `-p <port_number>` → Specifies the port number to connect to (if it's not the default **22**).  
* `<username>` → The user account you want to log in as on the remote machine.  
* `<hostname>` → The IP address or domain name of the remote machine.  


but based on the project you've been assigned to, system admin will give access to the servers later accordingly

Here are the dedicated servers that we have now. you can check them below:

## Servers' Info

```sh
own2 
  ssh port: 2222 
  webserver: own2.aganitha.ai
  https port: none
own3 
  ssh port: 2322  
  webserver: own3.aganitha.ai
  https port: none
own4 
  ssh port: 2222  
  webserver: own4.aganitha.ai:8443
  https port: 8443
own5 
  ssh port: 2522  
  webserver: own5.aganitha.ai:8543
  https port: 8543
own6 
  ssh port: 2622  
  webserver: own6.aganitha.ai:8643
  https port: 8643
hpc2 
  ssh port: 2222  
  webserver: hpc2.aganitha.ai
  https port: none
hpc3 
  ssh port: 2222  
  webserver: hpc3.aganitha.ai
  https port: none
hpc4 
  ssh port: 2222  
  webserver: hpc4.aganitha.ai
  https port: none
```

---


# 2. Key Pair: 

You must create a key pair(has .pub key) to first access a server if they are not generated


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

# 3. For public-key authentication:

To access any of our servers you need to <a href="/IT-HOME/Github">add the public key</a> to your github profile and provide the github username **"username-acog"** to the system admin or send the same key to him directly

---

# 4. For server access convenience:

You need to create **SSH config file** (`~/.ssh/config`) which allows you to define custom settings for different SSH server connections, making it easier to manage multiple servers.  
create the file:

```sh
touch ~/.ssh/config
chmod 600 ~/.ssh/config  # Set correct permissions
```

Basic Configuration Sample:

```sh
Host own3
    HostName own3.aganitha.ai
    User shilpa
    Port 2322
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
# 5. Adjust `.ssh` permissions:

You also must adjust proper permissions on your `~/.ssh` directory and its files which are crucial for **security** and **successful authentication** when using SSH. If permissions are too open, SSH will **reject** your keys and prevent login.  
The correct permissions are:

```sh
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
chmod 600 ~/.ssh/authorized_keys
ls -lah ~/.ssh  # Check if everything is set correctly
```

Now, you must be able to access any server using SSH

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

> Need Help? 🚀 If you encounter any issues or have any doubts, don't hesitate to ask! We're here to help troubleshoot any problems you face. Feel free to drop your questions or feedback in the comments section below—we’d love to hear from you! 💬✨
{.is-info}

