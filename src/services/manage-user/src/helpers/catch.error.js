'use strict'

const handleDatabaseError = (error) => {
    console.error('Database query failed:', error);
    throw error;
}

export {
    handleDatabaseError
}