import angular from 'angular';
import view from './index.html';
import './index.scss';

const someModule = angular.module('SomeModule', []);
someModule.directive('someModule', () => {
  return {
    templateUrl: view
  };
});
someModule.controller('SomeModuleCtrl', ($scope) => {

});
