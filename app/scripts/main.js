require.config({
    paths: {
        "jquery": "vendor/jquery/jquery"
    }
});

require(['some_module/some_script'], function(some_script) {
    some_script.hi();
});