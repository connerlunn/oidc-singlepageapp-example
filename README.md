## About The Project

Demo of a Single Page Application with an OIDC login and logout functionality. This project uses Auth0 as an OIDC provider.
Based on the implementation from this article https://www.jerriepelser.com/blog/using-auth0-with-vue-oidc-client-js/.

### Built With
* [Vue.js 3](https://vuejs.org/)
* [Vue Router](https://router.vuejs.org/)
* [oidc-client-ts](https://github.com/authts/oidc-client-ts)

## Getting Started

### Prerequisites

* npm

### Installation

1. Setup a free developer account at [https://auth0.com](https://auth0.com/) and create a demo single page app application. See docs for guide this is not an exhaustive oidc tutorial.
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your OIDC ClientId and Domain values in `.env`
   ```js
   VUE_APP_OIDC_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXX
   VUE_APP_OIDC_DOMAIN=https://youroidcdomain.com
   ```
3. Run the application
   ```sh
   npm run serve
   ```
<!-- ROADMAP -->
## Roadmap

- [ ] Flesh out readme setup instructions
- [ ] Make a basic user profile page
- [ ] Use cookie to store access token instead of local storage
- [ ] Add refresh token flows
