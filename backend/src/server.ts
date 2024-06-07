import { app } from './app'
import { env } from './env'

app
  .listen({ host: '0.0.0.0', port: env.PORT })
  .then((server) => {
    console.log('🚀HTTP SERVER RUNNING')
  })
  .catch((err) => {
    console.log(err)
  })
