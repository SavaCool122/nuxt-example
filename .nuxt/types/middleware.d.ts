import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/sava/Documents/code/projects/learn/javascript/nuxt-fast-project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}