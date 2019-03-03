# Multi-Tenant SASS Compilation.

This is an exmaple repo for the [following PR](https://github.com/webpack-contrib/sass-loader/pull/583). It will run webpack for multiple tenant configurations (example and example-two, example-import-override). 

Run `yarn build` this will install all yarn dependencies and run `webpack`.

Files will be written to `dist/{tenant}/css/bundle.css`, each bundle will have a different `color` property in the `.example` css selector.
 
The functionality allows us to create `module.scss`, and swap it out at build time with `module.example.scss` for the example tenant providing a tenant-specific version of a module. We can go further with the import-override example where we can use most of the `module.scss` file by importing it with the file extension and overriding properties within the file.

If you need more information than this, let me know.