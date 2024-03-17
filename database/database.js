try {
    const mysql = require('mysql');
      
    function handleDisconnect() {
        connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'API',
            port: 3309,
        }); 
        
        connection.connect(function(err) {              
            if(err) {                                   
                console.log('Error:', err);
                setTimeout(handleDisconnect, 2000);
            } else {
                console.log('Conectado exitosamente a MySQL.');
            }                                     
        });                                     
                                        
        connection.on('error', function(err) {
            console.log('db error', err);
            if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
                handleDisconnect();                         
            } else {                                      
                throw err;     
            }
        });

        module.exports = connection;
    }
    
    handleDisconnect();

} catch (error) {
    
}