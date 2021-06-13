import Vue from 'vue'
import Router from 'vue-router'
import 'semantic-ui-css/semantic.min.css'

import HomeComponent from '../components/Home'
import LoginComponent from '../components/Login'
import WellKnownConfigs from '../services/api/WellKnownConfigs'

// import Auth from '@okta/okta-vue'
import OktaVue from '@okta/okta-vue'
import { OktaAuth } from '@okta/okta-auth-js'
import OAuthCallback from '../components/OAuthCallback'


var subdomain = window.location.host.split('.')[0]
var isRunningLocal = false
if (/^localhost:\d{4}$/.test(subdomain)) {
  isRunningLocal = true
}

import oktaAuthConfig from '../.config.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/login',
      component: LoginComponent
    },
    {
      path: '/implicit/callback',
      component: OAuthCallback
    } 
  ]
})

var initAuth = true
const onAuthRequired = async (from, to, next) => {
  if (initAuth) {
    initAuth = false

    if (!isRunningLocal) {
      const data = await WellKnownConfigs.getWellKnownConfigs(subdomain)
      const redirect_uri = data.redirect_uri.split('.bod.')[0] + '.bodblog.unidemo.live/implicit/callback'
      if (data) {
        oktaAuthConfig.base_url=data.okta_org_name
        oktaAuthConfig.oidc.issuer=data.issuer
        oktaAuthConfig.oidc.client_id=data.client2_id
        oktaAuthConfig.oidc.redirect_uri=redirect_uri
      }
    } 
    const oktaAuth = new OktaAuth({
      issuer: oktaAuthConfig.oidc.issuer,
      clientId: oktaAuthConfig.oidc.client_id,
      redirectUri: oktaAuthConfig.oidc.redirect_uri,
      scopes: ["openid", "profile", "email"],
      pkce: true
    })
    Vue.use(OktaVue, {
      oktaAuth,
      onAuthRequired: () => {
        router.push({ path: '/login' })
      }
    })
  }
  next();
}

router.beforeEach(onAuthRequired)

export default router

