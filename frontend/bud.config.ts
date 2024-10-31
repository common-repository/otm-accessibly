/**
 * Build configuration for bud.js
 * @param {import('@roots/bud').Bud} bud
 */
export default async bud => {
  /**
   * The bud.js instance
   */
  bud
    /**
     * Set the project source directory
     */
    .setPath(`@src`, `src`)

    /**
     * Set custom alias paths
     */
    .setPath(`@components`, `src/components`)
    .setPath(`@utils`, `src/utils`)

    /**
     * Set the project build directory
     */
    .setPath('@dist', 'build')

    /**
     * Set the application entrypoints
     * These paths are expressed relative to the `@src` directory
     */
    .entry({
      app: [`index.tsx`, `index.css`],
    })

    /**
     * ESlint
     */
    bud.eslint
      .set(`failOnWarning`, bud.isProduction)
      .set(`failOnError`, bud.isProduction)


    /**
     * Stylelint (when used by the child compiler)
     */
    bud.stylelint
    .set(`failOnError`, bud.isProduction)
    .set(`failOnWarning`, bud.isProduction)
    .set(`fix`, true)
}

/**
 * This config is applied to all child compilers
 *
 * @param {string} label - compiler label
 * @param {Bud} child - compiler instance
 */
const applyGeneralConfig = (label, { isProduction, root, ...child }) => {
  child
    .experiments({ topLevelAwait: true })
    .minimize(isProduction)
};
