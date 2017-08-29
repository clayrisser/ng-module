import '../../src/index.js';
import './index.scss';
import angular from 'angular';
import view from './index.html';

const demo = angular.module('Demo', ['SomeModule']);
demo.directive('root', () => {
  return {
    templateUrl: view
  };
});
demo.controller('DemoCtrl', ($scope) => {

});

const demoElement = document.getElementById('demo');
const rootElement = document.createElement('root');
demoElement.setAttribute('ng-app', 'Demo');
demoElement.appendChild(rootElement);
