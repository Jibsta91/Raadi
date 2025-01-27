-- ai-db/init.sql
CREATE EXTENSION IF NOT EXISTS pgvector;
CREATE TABLE ai_decisions (
    id UUID PRIMARY KEY,
    decision_time TIMESTAMPTZ DEFAULT NOW(),
    service_name VARCHAR(50),
    input_data JSONB,
    output_data JSONB,
    vector_embedding VECTOR(1536)
);