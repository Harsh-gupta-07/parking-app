import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const psql = postgres(connectionString)

export default psql