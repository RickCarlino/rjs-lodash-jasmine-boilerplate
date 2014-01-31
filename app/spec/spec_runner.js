require.config({
  //invalidate the cache on every request
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: '../scripts/vendor/jquery/jquery',
    jasmine: '../scripts/vendor/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html': '../scripts/vendor/jasmine/lib/jasmine-core/jasmine-html',
    'boot': '../scripts/vendor/jasmine/lib/jasmine-core/boot',
    spec: '/app/spec/spec_runner'
  },
  shim: {
      'jasmine': {
        exports: 'jasmine'
      },
      'jasmine-html': {
        deps: ['jasmine'],
        exports: 'jasmine'
      },
      'boot': {
        deps: ['jasmine', 'jasmine-html'],
        exports: 'jasmine'
      }
    }
});

  // Define all of your specs here. These are RequireJS modules.
  var specs = [
    '/app/spec/fake_spec.js' // Why is it requiring the .js extension?
  ];

  require(['boot'], function () {

    // Load the specs
    require(specs, function () {

      // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      window.onload();
    });
  });

// require(['jquery', 'jasmine-html'], function($, jasmine){

//   var jasmineEnv = jasmine.getEnv();
//   jasmineEnv.updateInterval = 1000;

//   var htmlReporter = new jasmine.HtmlReporter();

//   jasmineEnv.addReporter(htmlReporter);

//   jasmineEnv.specFilter = function(spec) {
//     return htmlReporter.specFilter(spec);
//   };

//   var specs = [
//     'spec/fake_spec'
//   ];

//   $(function(){
//     require(specs, function(){
//       jasmineEnv.execute();
//     });
//   });
 
// });
