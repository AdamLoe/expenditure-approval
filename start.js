console.log('Starting Up Database...');
console.log('Database working fine')


console.log('Setting Up Server');

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
        console.log(`Express running → PORT ${server.address().port}`);
});