from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Listing(BaseModel):
    title: str
    description: str

@app.post("/listings")
async def create_listing(listing: Listing):
    # AI Data Management will process this
    return {"status": "received"}