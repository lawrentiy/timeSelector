Package.describe({
  name: 'lawrentiy:timeselector',
  version: '0.1.0',
  summary: 'timeSelector is fine and simple way to select time',
  git: 'https://github.com/lawrentiy/timeSelector.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('pinglamb:bootstrap3@3.2.1', 'client'); //!!!!!!!!!!! нужно выбрать правильный пакет?
  api.use(['templating'], 'client');
  //'manuel:reactivearray', 'reactive-var', 'minimongo', 'mongo-livedata',

  api.addFiles(['timeSelector.html', 'timeSelector.js'], 'client');
  api.addFiles(['timeIntervalSelector.html', 'timeIntervalSelector.js'], 'client');
  //if (api.export) {
  //  api.export(['ScheduleIt'], 'client');
  //}
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lawrentiy:timeselector');
  api.addFiles('tests.js', 'client');
});
