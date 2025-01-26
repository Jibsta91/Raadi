from fastapi import FastAPI
app = FastAPI()
@app.post("/scan")
async def scan_request(request: dict):
    return {"threat_detected": False}
