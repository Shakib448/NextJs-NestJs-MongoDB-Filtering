<p align="center">
  <img src="https://i.ibb.co/FgPGL1K/nest-FIlter.png" alt="Nest Filter" />
</p>

## Installation

```bash
$ npm install
# or
$ yarn install
```

## Change api to local server

```bash
# Go to client/pages/api/client.ts
  const apiClient = create({ baseURL: process.env.NEXT_PUBLIC_URI });
# Just copy this line
  const apiClient = create({ baseURL: "http://localhost:5000" });
```

## Running the app

```bash
# Make sure you are in the server directory.
- cd server
# Just copy this line
# In npm
  npm run dev
# In yarn
  yarn dev
```

## Stay in touch

- Author - MUKTADIR AHAMED SHAKIB
- Twitter - [@Muktadir Ahmed Shakib](https://twitter.com/muktadir_shakib)
