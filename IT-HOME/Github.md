---
title: Github
description: Create your account today !
published: true
date: 2025-02-26T11:55:33.798Z
tags: 
editor: markdown
dateCreated: 2025-02-26T10:50:40.536Z
---

# The Steps:
* There are three steps involving in the creation Github. So you need to follow them. They are **Create a Github Account**, **Request access to acog repo**, **Adding public key in your account**.
* Let's see more descriptively into the steps.
# Create a Github Account:
* For Creating the github account, open your web browser.
* Go to https://github.com/
* Click on Sign up in the top-right corner.
* Enter your details:

    * **Username**: should follow the company's naming convention like name-acog. for example ( **shilpa-acog** )

    * **Email Address**: Provide your email.

    * **Password**: Create a strong password.
* Click **Continue** after filling in each field.
* GitHub will send a verification email to your provided email address.
* Open the email and click on the verification link. This will confirm your account.
* Solve the puzzle challenge to prove you're human.Click Create Account.
* Click **Continue**.
* Your GitHub account is now ready! 🎉

# Adding Public Key in Github Account:
* Open your terminal 
* Run the command:
```sh
cat ~/.ssh/id_rsa.pub
```
<a href="/IT-HOME/SSH"> To Know more about the ssh </a>
* Copy the displayed key.
* Go to **Github > Settings > SSH and GPG Keys** 
* There you can find the **SSH Keys > Authentication keys**
* Paste the copied key into the Key field.
* Click Add **SSH Key**
* Your SSH key is now successfully added to GitHub! 🔑

best practices
to clone any one of our repo into your home directory of any server need to get the ssh github url link
dont go for https cloning because it is deprecated for private github repos 

basic github push and pull


