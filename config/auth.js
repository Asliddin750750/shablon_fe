export let auth = {
  strategies: {
    local: {
      token: {
        property: 'token',
        global: true,
        required: true,
        type: 'Token',
        maxAge: 60 * 60 * 24 * 365
      },
      user: {
        property: 'data',
        autoFetch: true
      },
      endpoints: {
        login: { url: 'account/login/', method: 'post' },
        logout: { url: 'account/logout/', method: 'get' },
        user: { url: 'account/me/', method: 'get' }
      }
    }
  },
  redirect: {
    login: '/',
    logout: '/',
    callback: '/',
    home: '/'
  },
  localStorage: {
    prefix: 'auth.'
  }
}
