Package.describe({
  name: 'instafeed',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Dead-simple way to add Instagram photos to your website. No jQuery required, just good ol plain javascript.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Ethaan/instafeed-meteor',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('coffeescript','client')
  api.export('Instafeed', 'client');
  api.addFiles('instafeed.coffee','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('instafeed');
  api.addFiles('instafeed-tests.coffee');
});
