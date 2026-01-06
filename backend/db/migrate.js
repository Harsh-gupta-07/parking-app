const fs = require('fs');
const path = require('path');
const postgres = require('postgres');
const dotenv = require('dotenv');
dotenv.config();
const connectionString = process.env.DATABASE_URL;

async function migrate() {
    const psql = postgres(connectionString);

    try {
        console.log('Starting database migration \n');

        const schemaPath = path.join(__dirname, 'schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf-8');

        await psql.unsafe(schema);

        console.log('Database migration completed successfully!');
        console.log('Created tables: users, parking_spots, cars, managers, drivers, parked_cars');

    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    } finally {
        await psql.end();
        process.exit(0);
    }
}

migrate();
