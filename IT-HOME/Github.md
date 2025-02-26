---
title: Github
description: Create your account today !
published: true
date: 2025-02-26T16:20:09.248Z
tags: 
editor: markdown
dateCreated: 2025-02-26T10:50:40.536Z
---

# The Steps 🪜
* There are three steps involving in the creation Github. So you need to follow them. They are **Create a Github Account**, **Request access to acog repo**, **Adding public key in your account**.
* Let's see more descriptively into the steps.
# Create a Github Account 🧾
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

# Adding Public Key in Github Account 🔐
* Open your terminal 
* Run the command:
```sh
cat ~/.ssh/id_rsa.pub
```
* <a href="/IT-HOME/SSH"> To Know more about the ssh </a>
* Copy the displayed key.
* Go to **Github > Settings > SSH and GPG Keys** 
* There you can find the **SSH Keys > Authentication keys**
* Paste the copied key into the Key field.
* Click Add **SSH Key**
* Your SSH key is now successfully added to GitHub! 🔑

# Best Practices 🌟
## Basic Git Commands
1. Initialize a New Git Repository
```sh
git init
```
2. Clone an Existing Repository
```sh
git clone <repo_url>
```
3. Check Repository Status
```sh
git status
```
4. Add Files to Staging Area
```sh
git add .
```
5. Commit Changes
```sh
git commit -m "Your commit message"
```
6. Push Changes to Remote Repository
```sh
git push origin <branch_name>
```
7. Pull Latest Changes from Remote
```sh
git pull origin <branch_name>
```
## Git Clone:
* Ensure Your SSH Key is Set Up (clearly discussed in the above > Adding public key in github account)
* Test SSH Connection to GitHub by running the following command 
```sh
ssh -T git@github.com
```
you can see the output as follows
> shilpamudusu@penguin ~ $ ssh -T git@github.com
Hi shilpa-acog! You've successfully authenticated
{.is-success}
* Clone the Repository
```sh
git clone git@github.com:username/repository.git
```
For cloning the repository, we need to naviagte to the repository path, then we can find the code of the repository in three variants. They are **HTTPS**, **SSH**, **Github CLI**. You can see in the following image

![screenshot_2025-02-26_9.41.43_pm.png](/screenshot_2025-02-26_9.41.43_pm.png)

* **To Clone any one of our repo into your home directory of any server, you need to copy the ssh url and clone the repository**
* Dont go for https cloning because it is deprecated for private github repos.
## Example 
* git clone using ssh url
```sh
git clone git@github.com:shilpa-acog/blog.git
```



best practices
to clone any one of our repo into your home directory of any server need to get the ssh github url link
dont go for https cloning because it is deprecated for private github repos 

basic github push and pull


