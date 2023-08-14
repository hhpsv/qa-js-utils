import * as esbuild from 'esbuild'

await esbuild.build({
    entryPoints: ['src/copy-email.js', 'src/copy-session.js'],
    bundle: true,
    outdir: 'dist/',
    minify: true,
    supported: {
        'arrow': false,
        'arbitrary-module-namespace-names': false
    }
})