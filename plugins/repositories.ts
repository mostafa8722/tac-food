import { Plugin } from '@nuxt/types'
import Repositories from '~/data/repositories/repositories'

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $repositories: Repositories
  }
}

const repositoriesPlugin: Plugin = (context, inject) => {
  inject('repositories', new Repositories(context.$axios))
}

export default repositoriesPlugin
