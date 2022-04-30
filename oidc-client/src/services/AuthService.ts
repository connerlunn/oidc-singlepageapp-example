import { UserManager, WebStorageStateStore, User } from "oidc-client-ts";

export default class AuthService {
    private userManager: UserManager;

    constructor() {
        const AUTH0_DOMAIN: string = "https://dev-k4ukwsq5.us.auth0.com"; // e.g. https://jerrie.auth0.com

        const settings: any = {
            userStore: new WebStorageStateStore({ store: window.localStorage }),
            authority: AUTH0_DOMAIN,
            client_id: "nniVtMlLbzC9Fy5iVCkSYzEcN2MJTcId",
            redirect_uri: "https://localhost:8080/callback",
            response_type: "code",
            scope: "openid profile",
            post_logout_redirect_uri: "https://localhost:8080/",
            filterProtocolClaims: true,
            metadata: {
                issuer: AUTH0_DOMAIN + "/",
                token_endpoint: AUTH0_DOMAIN + "/oauth/token" ,
                authorization_endpoint: AUTH0_DOMAIN + "/authorize",
                userinfo_endpoint: AUTH0_DOMAIN + "/userinfo",
                end_session_endpoint: AUTH0_DOMAIN + "/v2/logout?",
                jwks_uri: AUTH0_DOMAIN + "/.well-known/jwks.json",
            }
        };

        this.userManager = new UserManager(settings);
    }

    public getUser(): Promise<User | null> {
        return this.userManager.getUser();
    }

    public login(): Promise<void> {
        return this.userManager.signinRedirect();
    }

    public loginCallback(): Promise<void> {
        return this.userManager.signinRedirectCallback().then(function (user) {
            //Redirect to Home view
        }).catch(function (err) {
            console.log(err);
          });;
    }

    public logout(): Promise<void> {
        return this.userManager.signoutRedirect();
    }
}