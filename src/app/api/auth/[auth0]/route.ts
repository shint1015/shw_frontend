import { handleAuth, handleLogin } from '@auth0/nextjs-auth0'

const audience = process.env.AUTH0_AUDIENCE;

export const GET = handleAuth({
  login: handleLogin(
    audience
      ? {
          authorizationParams: {
            audience,
          },
        }
      : undefined
  ),
})
