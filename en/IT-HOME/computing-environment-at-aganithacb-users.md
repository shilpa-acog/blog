---
title: computing-environment-at-aganithacb-users
description: 
published: true
date: 2025-05-21T11:23:30.586Z
tags: 
editor: markdown
dateCreated: 2025-05-21T11:23:29.031Z
---

![][image1]

# Computing environment (CB) at Aganitha

Installation and customization of software on Chromebook. It enables you to work on remote machines, develop software, and deploy software.

# Setup your Chromebook:

In this doc, we will know how to setup the chromebook 

### Step 1: Turn on your Chromebook.

1. Press the power button.

### Step 2: Follow the onscreen instructions

1. Choose your network.  
2. Accept the terms of service.

### Step 3: Sign in with your Google Account

To choose your [Chromebook owner](https://support.google.com/chromebook/answer/1059252), enter your Google Account email or phone number and password.

1. If you?ve already turned on [2-Step Verification](https://support.google.com/accounts/answer/185839), you?ll be sent a code to your selected device.  
2. Once you sign in, your bookmarks, extensions, and apps will appear automatically.

# ChangeLog

This document is updated to make it comprehensive. 

1. Added: Working on remote machines  
2. Added: Customising Chromebook

# Background

This document is focused on Chromebook Setup. I marked it as such wherever possible. 

# Installation of software:

Install the software:  
   1\. Open **Settings** ? "**About Chrome OS**" ? "Linux development environment".

       2\.  Enable **Linux development environment** (Crostini).

3. Open **Terminal**.

Follow the instructions in this sheet that you can install the prerequisites by following the instructions.

Here is the link [User-provisioning](https://docs.google.com/spreadsheets/d/1V-4Ia57Hbs6Csb85HizYEIBZCI9_q8CM4jHuPM1WV3Q/edit?gid=374682266#gid=374682266) you can install, update by following the notes and process in the sheet.

You can contact system admin for the installation of prerequisites by simply running the script. 

# Python Installation:

This section walks you through the installation of python.Install python from [User-provisioning](https://docs.google.com/spreadsheets/d/1V-4Ia57Hbs6Csb85HizYEIBZCI9_q8CM4jHuPM1WV3Q/edit?gid=374682266#gid=374682266) 

However, I hear that python may not be installed by default in the future. So, do the following:

`sudo apt update && sudo apt upgrade -y`

`sudo apt install -y python3 python3-pip`

`python3 --version`

`pip3 --version` 

If you test your system with the command type pip3 \--version it will show like this,   
pip 23.0.1 from /usr/lib/python3/dist-packages/pip (python 3.11)  
If you test with python3 \--version it should show version 3.x.y

Install pyenv : 

1. First update the System using   
   sudo apt update \-y && sudo apt upgrade \-y  
2. Then, you will have to setup pyenv with the following commands (and add to the .bashrc):  
3. Remove any existing pyenv installation directory.  
   rm \-rf "$PYENV\_DIR"  
   Run this command for installing pyenv  
   curl \-fsSL https://pyenv.run | bash

     Add the following configuration to .bashrc, vi .bashrc and then add this. Save and exit after adding by :wq . it will save and exit from the editor.  
\# Pyenv Configuration

export PYENV\_HOME="$HOME"

export PYENV\_ROOT="$HOME/.pyenv"

export PATH="$PYENV\_ROOT/bin:$PATH"

if command \-v pyenv 1\>/dev/null 2\>&1; then

    eval "$(pyenv init \-)"

    eval "$(pyenv init \--path)"

    eval "$(pyenv virtualenv-init \-)"

fi

export PYENV\_LOCAL\_SHIM="$HOME/.pyenv\_local\_shim"

export PATH="$PYENV\_LOCAL\_SHIM:$PYENV\_ROOT/bin:$PATH"

At this point, pyenv is all set up. Now, you can install any version of python.  Test Pyenv with the following command   
pyenv \--version

* Install a new python interpreter with the command pyenv install 3.11.0  
* Make it as default by pyenv global 3.11.0   
* Now, test it by running python \-v ; you should see 3.x.y as the python you are running.  
* Install pyenv install 3.10.3 as well.   
* Type pyenv versions to see what all versions are there.

## NVM Installation

Install nvm by running the following command.  
wget \-qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash  
Then run the following  
exec $SHELL  
After That, run  
nvm install \--lts  
Now check the version by nvm \-v

## Managing virtual environments

In reality, we will be using poetry which makes virtualenv obsolete. However, for legacy reasons, we can make them work too. Here is the simple way. We already set up a virtual env. All you need to do is the following:

pyenv virtualenv \<python-version\> \<name\>

For instance, you can do:

`mkdir myprj1`  
`pyenv virtualenv myproj1python 3.9.11 # Assuming you installed 3.9.11 using pyenv`  
`cd myprj1`  
`pyenv local myproj1python`  
`# Now whenever you cd to this directory, you use that python.`

Let us pause and see what all we can do:

1. You can install any version of Python you want.  
2. You can create a virtualenv on any version of python that you want.  
3. You can explicitly use that version of python or implicitly set using pyenv local. 

Finally, you can use poetry too ? which you will learn in pycharm. 

# Installing node:

Install node from [User-provisioning](https://docs.google.com/spreadsheets/d/1V-4Ia57Hbs6Csb85HizYEIBZCI9_q8CM4jHuPM1WV3Q/edit?gid=374682266#gid=374682266)  
Follow the steps below:  
We are going to install nvm for nodejs:

Install nvm and node. Make sure that you restart the terminal each time so that the changes to bashrc are processed.   
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`  
`Exec $SHELL or source .bashrc`

`nvm install ?-lts`

Verification:

1. node \-p process.arch   
   You should see arm64  
2. node \-v && npm \-v  
   You should see the latest versions.

# Setting up vscode:

VScode is the general purpose editor of our choice. Here is what to install. [User-provisioning](https://docs.google.com/spreadsheets/d/1V-4Ia57Hbs6Csb85HizYEIBZCI9_q8CM4jHuPM1WV3Q/edit?gid=374682266#gid=374682266) and follow the steps for manually installing.

1. To install VS Code through the Linux environment on your Chromebook.  
2.  First, enable Linux on your Chromebook, then download the .deb file of VS Code from the [Visual Studio Code download page](https://code.visualstudio.com/download).  
3. Finally, install it by double-clicking the downloaded file. 

Now install some extensions for better performance.

1. After installing VSCode  
2. Run VSCode shell command `code`. You can open a project folder or a file with the command code folder or code filename.   
3. Install the following extensions  
   1. remote ssh ( https://code.visualstudio.com/docs/remote/ssh )  
   2. Prettier (formats code, and can do well)  
   3. Liveshare (Collaborative editing and debugging)  
   4. Intellicode (for autosuggestions)  
   5. Bracket Pair Colorizer 2 (better bracket management)  
   6. Better Comments (comments for code management)  
   7. Markdown All-in-one (for writing documentation)  
   8. Python

Check if you can do the following:

1. Using the ssh config file that you set up earlier, you can open files and folders on the remote machine.  
2. Using the remote ssh feature, open a terminal window in vscode on the remote machine.  
3. Using remote ssh, access a port on the remote machine, without installing any additional software or setup.  
4. From terminal open a file in vscode  
5. Use git from VS Code: add files, edit files, and add commit messages and push the files to github.

For JavaScript editing, there are other extensions. For python, we prefer to use pycharm.

# Setting up Pycharm:

Install the latest version pycharm community edition. After that, install the following plugins:[User-provisioning](https://docs.google.com/spreadsheets/d/1V-4Ia57Hbs6Csb85HizYEIBZCI9_q8CM4jHuPM1WV3Q/edit?gid=374682266#gid=374682266). or  
Install by following the below steps:

To set up PyCharm on a Chromebook, you'll need to enable Linux (Debian) and then install PyCharm Community Edition through the Linux terminal using 

sudo snap install pycharm-community \--classic

Also, These are **developer tools, extensions, and plugins** that enhance software development workflows, particularly for **Git, databases, and collaboration**.

1. GitToolBox  
2. Makefile language  
3. GitLens  
4. GitLink  
5. DBNavigator  
6. Codetogether (even with the limitation of 1hr at a time, it is useful to code together).

These are found to be most useful for our work. 

You should be able to do the following:

1. Setup a python project  
2. Interpreter in pycharm ? you can choose Poetry  
3. Install packages automatically  
4. Browse through and eliminate all the errors and warnings.  
5. Run/Debug python projects  
6. Code together with another person from pycharm  
7. Invoke pycharm from the command line, in a specific folder.

# Setting up keys:

As a software developer, you should have your private key that you keep to yourself, even if you change machines. It is personal to you ? as much as your gmail password is. If you need to use a different machine, copy your private key.

Tasks:

1. Generate public, private key  keep in id\_rsa.pub and id\_rsa \[ssh-keygen \-t rsa \-b 4096 \-C "your\_email@example.com"\]  
2. Keep the public key in github.com. That is going to be your public key that you can download from any place.   
    `curl https://github.com/<yourgithubid>.keys`  
3. Keep your private key carefully. This will unlock any account that you lock with your public key.  
4. Learn how to configure ssh configuration in .ssh with file `config`. Here is a small note:

              `Host <simple>`

	`HostName <fullyqualifiedname>`  
	`Port <portnumber>`  
	`User <userid>`

5. Now you can login with the simple name `ssh simple` without giving the full name. Notice that you can manage many private keys, if you have them using this ssh config file. 

6. You will use this technique when you provision your own Unix machine in the lab.

Or follow the below process.

### **SSH Access Notes**

#### **1\. SSH Login**

* SSH is used to access remote servers.  
* Command syntax:

ssh \-p \<port\_number\> \<username\>@\<hostname\>

System admin grants access based on the project.

Here are the dedicated servers that we have now.

# Introduction to our machines

We have the following servers in our system. All have the FQDN with .aganitha.ai prefixed.

| Name | Details | Purpose | Access |
| :---- | :---- | :---- | :---- |
| Own1 | RTX 4090 GPU/64GB/32threads | GPU, general purpose | LDAP. Direct on the internet. Port 2222, 80, 443 |
| Own2 | 1080 TI GPU/64gb/22 TB disk/ 8 threads | NFS, GPU computing, general purpose | LDAP. Direct on the internet. Port 2222, 80, 443\.  |
| Own3 | In Hyderabad, 2 GPUs and 12 threads | GPU, general purpose, NFS | LDAP. Direct on the internet. Port 2322, 80,443 |
| Own4 | One gpu, 32 threads, 128GB memory  machine | GPU, general purpose, NFS | LDAP. Direct on the internet. Port 2222, 80, 8443 |
| own5 | 4090\. 32 threads. 128gb memory | GPU, general purpose, NFS | LDAP. Direct on the internet. Port 2522, 80,8543 |
| own6 | RTX 4090 GPU/64GB/32threads | GPU, general purpose, NFS | LDAP. Direct on the internet. Port 2622, 80,8643 |
| hpc2 | No GPU. 64 threads. 512 GB | CPU | ssh 2222 and https |
| hpc3 | No GPU, 80 threads, 512 GB | CPU | ssh 2222 and https |
| hpc4 | No GPU, 56 threads, 128GB | CPU | ssh 2222 and https |

#### **2\. SSH Key Pair**

* SSH key pairs (private & public) are required for authentication.  
* Check for an existing public key:

cat \~/.ssh/id\_rsa.pub

* Generate a new SSH key pair if missing:

ssh-keygen \-t rsa \-b 4096 \-N "" \-C "$USER@$(hostname)" \-f \~/.ssh/"$USER"\_rsa

* **Private Key:** `~/.ssh/username_id_rsa` (Keep secret)  
* **Public Key:** `~/.ssh/username_id_rsa.pub` (Can be shared)

#### **3\. Public Key Authentication**

* Add the public key to **GitHub**.  
* Provide the **GitHub username ("username-acog")** to the system admin.

#### **4\. SSH Config File for Convenience**

* Create an SSH config file (`~/.ssh/config`)

touch \~/.ssh/config, chmod 600 \~/.ssh/config

Sample Configuration:

Host own3

           HostName own3.aganitha.ai 

           User shilpa 

           Port 2322

Login shortcut:  ssh own3

#### **5\. Adjust `.ssh` Permissions**

Proper permissions are **mandatory** for security:  
chmod 700 \~/.ssh  
chmod 600 \~/.ssh/id\_rsa  
chmod 644 \~/.ssh/id\_rsa.pub  
chmod 600 \~/.ssh/authorized\_keys  
ls \-lah \~/.ssh  \# Verify permissions

Ensures SSH access works without security issues.

# Git: basics you need to know

We are using github for our corporate use. Here is the way you work:

* Ask for your project to be created with the right permissions. Since this is a flat hierarchy, do  not break it down to too small a project.   
* Make sure you start with the right template. Especially with the right .gitignore. If your template does not provide one, look for it here: [https://github.com/github/gitignore](https://github.com/github/gitignore). We do not want to check generated, transient files to git. 

On branching:

1. Do not create branches unnecessarily. You can work on your code and make it work and update the main branch.  
2. Usually, it is best to have just one branch ? main. If you are making a release, tag the release so that you can get that release whenever you want.   
3. The only justification for multiple parallel branches is when the same code is being used by different customers. Even then, try to manage with configuration even with different code bases.  
4. Sometimes we have main and dev branches. Do this only if your main branch is in production. That way, you can make quick fixes to the main branch while we continue to develop the dev branch.

Here is the usual workflow:

`git clone <url> # ssh based. Works because you have your ssh key setup`  
`? edit your code ?`  
`? test your code ?`  
`Git add .`  
`Git commit -m ?add a commit statement. Make it around 2 to 3 lines.?`  
`Git push` 

There is a lot more to learn. Start with [GIT CHEAT SHEET](https://education.github.com/git-cheat-sheet-education.pdf) ; if you are using it from the command line, you can use it with ssh. If you are using `ohmybash`, you can check out plugins for git and git extras etc.

We already have seen how to use it from vscode and pycharm. For advanced material, you can turn to google.

**Note to remember:** The default branch is main, not master, in github. When you are reading and practising a tutorial, watch out for it. 

# Installing Aganitha tool kit

We have not updated the Aganitha tool kit for a long time. The new version, which is continually updated can be installed as follows:

`cd /tmp`  
`rm -rf atk-setup`  
`git clone git@github.com:aganitha/atk-setup.git`  
`bash atk-setup/bin/atk-install.sh`  
`rm -rf atk-setup`

# Standards

Here are the standards for different names:

Assume that the project name is ?prj?. If there no project, then internal

1. Docker containers will be called atk-prj-\*  
2. Github Projects called prj-\* ? the github projects are named like that.

Each github project should have a README.md.x

The heading of the README.md should be as follows:

`project_name: ATK System tools`  
`short_description: System tools used for maintaining the servers`  
`tags: [scripts, internal]`  
`category: tech`  
`status: active`  
`long_description: >`  
  `These tools are used to set up the machines, add users, and automate maintenance.`  
  `There may be hardcoded details in here.`

# Concluding remarks

So far this is how you can set up a computing environment for yourself, but if you face any kind of issue while doing this or setting these things up, you can always reach out to our wf-IT-helpdesk Chatspace.

 

[image1]: <data:image/png;base64,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>