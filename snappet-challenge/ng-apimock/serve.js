const apimock = require('@ng-apimock/core');
const devInterface = require('@ng-apimock/dev-interface');
const express = require('express');
const app = express();
app.set('port', 3000);

apimock.processor.process({
  src: 'ng-apimock/mocks'
});

app.use(apimock.middleware);
app.use('/dev-interface', express.static(devInterface));

app.listen(app.get('port'), () => {
  console.log('@ng-apimock/core running on port', app.get('port'));
  console.log('@ng-apimock/dev-interface is available under /dev-interface');
});
