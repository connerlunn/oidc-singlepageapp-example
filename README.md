## About The Project

Demo of a Single Page Application with an OIDC login and logout functionality. This project uses Auth0 as an OIDC provider.
Based on the inplementation from this article https://www.jerriepelser.com/blog/using-auth0-with-vue-oidc-client-js/.

### Built With
* [Vue.js 3](https://vuejs.org/)
* [Vue Router](https://router.vuejs.org/)
* [oidc-client-ts](https://github.com/authts/oidc-client-ts)

## Getting Started

### Prerequisites

* npm

### Installation

1. Setup a free developer account at [https://auth0.com](https://auth0.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
   
<!-- ROADMAP -->
## Roadmap

- [ ] Flesh out readme setup instructions
- [ ] Change About page to Account and make a basic user profile page
