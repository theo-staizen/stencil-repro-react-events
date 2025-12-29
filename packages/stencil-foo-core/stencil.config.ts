import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'foo',
  outputTargets: [
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: '../stencil-foo-react/lib/components/stencil-generated/',
    }),
    // {
    //   type: 'docs-readme',
    // },
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
