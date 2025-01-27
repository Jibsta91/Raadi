# ai/data_management/vector_db.py
from milvus import Milvus, DataType

class AIVectorDB:
    def __init__(self):
        self.client = Milvus(
            host="ai-vector-db",
            port="19530"
        )
        
    async def store_embedding(self, data: dict):
        # Generate AI embeddings
        embedding = await self._generate_embedding(data)
        
        # Store in vector DB
        self.client.insert(
            collection_name="product_embeddings",
            records=[embedding],
            ids=[data['id']]
        )
    
    async def semantic_search(self, query: str):
        query_embedding = await self._generate_embedding({"text": query})
        return self.client.search(
            collection_name="product_embeddings",
            query_records=[query_embedding],
            top_k=10
        )