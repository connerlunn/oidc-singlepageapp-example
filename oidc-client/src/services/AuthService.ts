import { UserManager, WebStorageStateStore, User, SessionStatus } from "oidc-client-ts";

class AuthService {
    private userManager: UserManager;

    constructor() {
        const AUTH0_DOMAIN: string = "";
        
        const settings: any = {
            userStore: new WebStorageStateStore({ store: window.localStorage }),
            authority: AUTH0_DOMAIN,
            client_id: "",
            redirect_uri: "https://localhost:8080/callback",
            response_type: "code",
            scope: "openid profile",
            filterProtocolClaims: true,
            metadata: {
                issuer: AUTH0_DOMAIN + "/",
                token_endpoint: AUTH0_DOMAIN + "/oauth/token" ,
                authorization_endpoint: AUTH0_DOMAIN + "/authorize",
                userinfo_endpoint: AUTH0_DOMAIN + "/userinfo",
                end_session_endpoint: AUTH0_DOMAIN + "/v2/logout?returnTo=https://localhost:8080/",
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
        }).catch(function (err) {
            console.log(err);
        });
    }

    public logout(): Promise<void> {
        return this.userManager.signoutRedirect();
    }

    public async isLoggedIn(): Promise<boolean> {
        const user = await this.getUser();
        return (user !== null && !user.expired);
    }
}

export const authService = new AuthService();