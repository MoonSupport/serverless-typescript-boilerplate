export const DB_URL =
  process.env.PG_URI || 'postgresql://postgres:devup123@localhost/postgres'
export const COMMON_CDN_S3_BUCKET = process.env.COMMON_CDN_S3_BUCKET || 'cdn'
export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:4000'
