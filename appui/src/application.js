angular
  .module('baseline-ui', [
      'ui.bootstrap',
      'ui.router',
  ])
    .constant('_', _)
    .config(function ($httpProvider, $compileProvider) {
        $compileProvider.preAssignBindingsEnabled(true);
    })
    .run(function () {
    })
;
