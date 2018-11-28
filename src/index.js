var variableManager = camForm.variableManager;

$scope.customerId = null;

camForm.on('form-loaded', function() {
  // fetch the variable 'customVariable'
  variableManager.fetchVariable('customVariable');
});

camForm.on('variables-fetched', function() {
  // value has been fetched, bind to $scope.customerId
  $scope.customerId = variableManager.variable('customVariable').value;
});

camForm.on('submit', function(evt) {
  // set value in variable manager so that it can be sent to backend
  variableManager.variableValue('customVariable', $scope.customerId);
});
