# backend/ai_client.py
import httpx

class AIGovernanceClient:
    def __init__(self):
        self.base_url = "http://ai-governance:8000"
        
    async def validate_listing(self, listing_data):
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{self.base_url}/validate",
                json=listing_data,
                headers={"X-AI-Model": "grovernes-v3"}
            )
            return response.json()