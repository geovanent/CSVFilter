import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: "./dev.sqlite3"
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'infra', 'database', 'migrations')
    },
    useNullAsDefault: true,
};
