import adapter from '@sveltejs/adapter-static';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const rawBasePath = process.env.BASE_PATH;
const configuredBasePath =
  rawBasePath === '/'
    ? ''
    : rawBasePath ?? (process.env.GITHUB_ACTIONS && repoName ? `/${repoName}` : '');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : configuredBasePath
    },
    prerender: {
      entries: ['*']
    }
  }
};

export default config;
