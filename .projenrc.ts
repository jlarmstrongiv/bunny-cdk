import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'John L. Armstrong IV',
  authorAddress: '20903247+jlarmstrongiv@users.noreply.github.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  name: 'bunny-cdk',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/20903247+jlarmstrongiv/bunny-cdk.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();