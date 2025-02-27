---
title: Github
description: Create your account today !
published: true
date: 2025-02-27T09:37:46.722Z
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
To do the same git cloning on other servers as well you need to add/copy the key pair at the same path where you have generated the key pair in your local machine.

* Suppose you have your key pair in your local machine like
```sh
username@penguin .ssh $pwd
/home/username/.ssh 
```
* Then you need to add your key pair in the same path of the Server like 
```sh
username@server .ssh $pwd 
/home/username/.ssh.**
```

For example, 
* This is the local machine path
```sh
shilpamudusu@penguin .ssh $ pwd
/home/shilpamudusu/.ssh
```
* You should add the same keypair in the same path of the directory, like this
```sh
shilpa@own3 .ssh $ pwd
/home/shilpa/.ssh	
```
> **Note**: Remember, you can do this only when you get the login access to any server using rsync.  
* Below is the command to copy the key in the server


```sh
rsync -av ~/.ssh/id_rsa ~/.ssh/id_rsa.pub username@servername:~/.ssh/
```
* For example,
```sh
rsync -av ~/.ssh/id_rsa ~/.ssh/id_rsa.pub shilpa@own3:~/.ssh/
```




## Git: basics you need to know:

* We are using github for our corporate use. Here is the way you work:
* Ask for your project to be created with the right permissions. Since this is a flat hierarchy, do  not break it down to too small a project. 
* Make sure you start with the right template. 
* Especially with the right .gitignore. 
* If your template does not provide one, look for it here:
```sh
https://github.com/github/gitignore.
```
* We do not want to check generated, transient files to git. 
* **On branching:**
* Do not create branches unnecessarily. 
* You can work on your code and make it work and update the main branch.
* Usually, it is best to have just one branch – main. If you are making a release, tag the release so that you can get that release whenever you want. 
* Only justification for multiple parallel branches is when the same code is being used by different customers. 
* Even then, try to manage with configuration even with different code bases.
* Sometimes we have main and dev branches. 
* Do this only if your main branch is in production. 
* That way, you can make quick fixes to the main branch while we continue to develop the dev branch.
* **Here is the usual workflow:**
```sh
git clone url # ssh based.
```
* **Works because you have your ssh key setup**

… edit your code …
… test your code …
```sh
Git add .
```
```sh
Git commit -m “add a commit statement. Make it around 2 to 3 lines.”
```
```sh
Git push
```
* There is a lot more to learn. Start with GIT CHEAT SHEET ; if you are using it from the command line, you can use it with ssh. 
* If you are using ohmyzsh, you can check out plugins for git and git extras etc.
* We already have seen how to use it from vscode and pycharm. 
* For advanced material, you can turn to google.
* **Note to remember:** The default branch is main, not master, in github.
* When you are reading and practising a tutorial, watch out for it. 

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
* example command for git clone using ssh url 
```sh
git clone git@github.com:shilpa-acog/blog.git
```
# Request Access to acog repo 🛗
* After Completing all the above steps, you need to request access to acog repo through the google chat.
* Go to **google chats > Search for ramana@aganitha.ai > send request**
* Plese Send the request by Introducing yourself to him like 
```sh
Hi Ramana,

I hope you're doing well. My name is [Your Name], and I recently joined Aganitha as a [Your Role]. I have created my github account with the username **( your_name-acog )**

could you please send me an invite so that I can join our github organisation's repo 

awaiting for your response...
```
* Whenever the message reached to ramana, He will send you the Invitation mail to join the Aganitha Organisation.
* You need to check the mail and when you receive the invitation mail, click on **join@aganitha.**
* He will add you in the acog repos also. And You will receive the mail about ramana added you in a particular team or something.
* Now you can access our aganitha repos 👍

