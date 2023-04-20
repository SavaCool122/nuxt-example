import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "products"
declare module "/Users/sava/Documents/code/projects/learn/javascript/nuxt-fast-project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}