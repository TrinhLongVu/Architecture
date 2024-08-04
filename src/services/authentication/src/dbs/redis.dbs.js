import { createClient } from 'redis';

let clientInstance = null;

const Database = async () => {
    if (!clientInstance) {
        clientInstance = createClient({
            url: 'redis://127.0.0.1:6379'
        });

        clientInstance.on('error', (err) => console.log('Redis Client Error', err));

        try {
            await clientInstance.connect();
            console.log('Redis client connected successfully');
        } catch (err) {
            console.error('Redis client failed to connect', err);
        }
    }

    return clientInstance;
};

export default Database;
