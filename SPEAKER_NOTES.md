1

---

2

---

3

---

4

---

5

---

6

---

7

---

8

Git is a distributed version control system
Version control systems are what we use to track the history of changes to a codebase.
There are other VCS out there like Subversion or Mercurial
Distributed means that git doesn’t require a central server. You can interact with other git repos so long as they share a common starting point.
Most teams use a central “remote” repository.
You can use git from the command line or a GUI (like gitkraken, or github desktop, or some IDEs like VSCode).
Regardless of which one you use, the concepts we cover will help you understand what’s going on under the hood.

---

9

A git repository is really a set of metadata that’s added to your codebase.
A folder named `.git` is where most of the magic happens. It tracks changes and versions of the codebase
Files like .gitignore are part of the configuration of your repo.
You can create a repo locally by running the command `git init`
You can start using an existing repository by running `git clone`
When you clone a repository you create a copy of the files and of the history. This repo is now _like_ the other, but not the same. It has a shared record of history, but as soon as you make changes to the clone, you have deviated from the original.

---

10

The changes you make to the local repository, which is the one you’re working in, are only stored on your local computer. In order to sync them with a remote, you need to _push_ to the remote.
If there are changes on the remote version that you don’t have, you need to _pull_ them.
It’s common convention to use a central remote repository where team members will push and pull code from. There are plenty of places to host a repository. You can host your own git repos or you can use a cloud resource. Probably the best known of the hosting solutions out there is GitHub, so we’ll use that as our example. GitHub has everything you need for free!

---

11

---

12

We have learned a bunch of different concepts and keywords. How do we apply them to development?
If you remember nothing else about working with git, the most important thing is that the right workflow is different for every team.
One common workflow is called the GitFlow workflow
The core concept in Gitflow is to keep one branch, often called “main” or “master” in a stable, working state. You should never merge unstable code to the main branch.
You can technically call that branch whatever you want, but calling it “main” is common convention.
The branch that you make changes to is called the development branch. It should be in a working state as much as possible, but it is the place where features can be added and tested together.
Those features are created and developed on individual branches, called feature branches.

---

13

When you merge a branch into another, git uses a strategy to decide which code to use and which to overwrite. Sometimes that strategy fails.
This is mostly the consequence of two people editing the same portion of code.
When you run into a merge conflict, you can resolve it by editing the code directly. The conflict markers will look something like this.
It can be hard to resolve a conflict, but when you do, you can add the file and continue the merge in a similar same way as you would add and commit a file in a normal commit.

---

14

What a code review looks like varies from team to team, but the best way to use git (as we mentioned earlier) is the way that makes your team the most productive. You can look at the pull requests tab on some open source github projects to see an example of what code reviews look like in practice. Typically, maintainers of an open source project will review code from contributors on every pull request before merging into the master branch

---

15

---

16 Demo Time

---

17 Resources
