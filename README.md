# Slackline App

Collection of slackline tools and resources

**Technical Overview:**
* Its [PWA]. Works offline with service workers and can be added to mobile devices as an application
* Web app is built with **React** and **Typescript**
* Its built on top of the [react-boilerplate] (Typescript version)
---

# Getting Started

There are two environment: `test` and `production`. You should have either `.env.test` or `.env.production` file depending on the environment you want to run. Check `.env.example` file and fill it with the credentials and rename the file to the either of the environments mentioned above. 

### Running on local (dev environment)

Install dependencies

```shell
npm install
```

Start localhost

```shell
npm start
```

Web application is served at `localhost:3000/`

[PWA]: <https://en.wikipedia.org/wiki/Progressive_web_applications>
[react-boilerplate]: <https://github.com/Can-Sahin/react-boilerplate-typescript>
