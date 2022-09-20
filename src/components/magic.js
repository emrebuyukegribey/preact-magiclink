import {h, Component} from 'preact';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from "@magic-ext/oauth";
import SocialLoginCheck from './socialLoginCheck';

const MAGIC_LINK_PUBLISHABLE_API_KEY = "pk_live_577AF7B3A6A46D0D"; // window.VW.MAGIC_LINK_PUBLISHABLE_API_KEY || process.env.REACT_APP_MAGIC_LINK_PUBLISHABLE_API_KEY;

// function Magic() {};
// function OAuthExtension() {};
const magic = new Magic(MAGIC_LINK_PUBLISHABLE_API_KEY, {
    extensions: [new OAuthExtension()],
    // network: 'rinkeby', endpoint: 'https://auth.magic.link/',
});

/*
export const checkUser = async(cb) => {
    const isLoggedIn = await magic.user.isLoggedIn();
    if(isLoggedIn) {
        const user = await magic.user.getMetadata();
        const {email} = user;
        return cb({ isLoggedIn, email, user });
    }
    return cb({ isLoggedIn: false });
}
*/

export const loginUser = async (email) => {
    await magic.auth.loginWithMagicLink({ email });
};

export const googleLogin = async () => {
    await magic.oauth.loginWithRedirect({
        provider: 'google',
        redirectURI: new URL('/social-login-check', window.location.origin).href
    });
};

export const facebookLogin = async () => {
    await magic.oauth.loginWithRedirect({
        provider: 'facebook',
        redirectURI: new URL('/social-login-check', window.location.origin).href
    });
};

export const linkedinLogin = async () => {
    await magic.oauth.loginWithRedirect({
        provider: 'linkedin',
        redirectURI: new URL('/social-login-check', window.location.origin).href
    });
};


export const redirectUrl = async () => {
    const result = await magic.oauth.getRedirectResult();
    return result;
};

export const logoutUser = async () => {
    await magic.user.logout();
};

export const getMetadataOfUser = async () => {
    const metadata = await magic.user.getMetadata();
    return metadata;
};

export const isLoggedIn = async () => {
    const loggedIn = await magic.user.isLoggedIn();
    return loggedIn;
}
