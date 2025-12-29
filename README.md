# Reproduction of stencil react output target CustomEvent issue

## Explanation

1. pnpm install
2. run `pnpm run build` in `./packages/stencil-foo-core`
3. Check my-component with many different events `packages/stencil-foo-core/src/components/my-component/my-component.tsx`
4. Compare `./packages/stencil-foo-core/src/components.d.ts` and `./packages/stencil-foo-react/lib/components/stencil-generated/components.ts`
  <img width="1525" height="581" alt="image" src="https://github.com/user-attachments/assets/001e521b-51da-4baa-b205-79542402e569" />
  
5. Notice that for simple types like primitives, nullish, void, plain object, plain array, the generated types are using `CustomEvent` instead of `MyComponentCustomEvent`
