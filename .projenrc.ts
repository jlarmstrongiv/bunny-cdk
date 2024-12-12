import { awscdk } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'John L. Armstrong IV',
  authorAddress: '20903247+jlarmstrongiv@users.noreply.github.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  name: 'bunny-cdk',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/jlarmstrongiv/bunny-cdk.git',
  gitignore: ['/.env', '.DS_Store', '.AppleDouble', '.LSOverride'],
  license: 'AGPL-3.0-or-later',
  readme: {
    contents: `# bunny-sdk

## Documentation

Please read the [docs](https://bunny-launcher.net/bunny-cdk/quickstart/) for usage and examples.`,
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */

  // publishDryRun: true,
  packageName: 'bunny-cdk',

  publishToNuget: {
    dotNetNamespace: 'BunnyLauncher.BunnyCdk',
    packageId: 'BunnyLauncher.BunnyCdk',
  },
  // publishToMaven: {
  //   javaPackage: 'bunny.cdk',
  //   mavenArtifactId: 'bunny-cdk',
  //   mavenGroupId: 'com.bunny-launcher',
  //   // serverId: 'github',
  //   // repositoryUrl: 'https://maven.pkg.github.com/bunny-cdk/bunny-cdk',
  // },
  publishToPypi: {
    distName: 'bunny-cdk',
    module: 'bunny_cdk',
  },
  publishToGo: {
    moduleName: 'github.com/jlarmstrongiv/bunnycdkgo',
    packageName: 'bunnycdkgo',
  },
});
project.synth();
