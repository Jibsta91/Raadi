from fastapi import FastAPI
from pydantic import BaseModel
from prometheus_client import make_asgi_app, Counter

app = FastAPI()

class Listing(BaseModel):
    title: str
    description: str

@app.post("/listings")
async def create_listing(listing: Listing):
    # AI Data Management will process this
    # Increment the counter for POST requests to /listings
    REQUESTS.inc()
    
    # Process the listing data
    processed_data = {
        "status": "received",
        "listing_id": hash(listing.title + listing.description),  # Simple unique ID
        "timestamp": datetime.datetime.now().isoformat(),
        "data": listing.dict()
    }
    
    return processed_data