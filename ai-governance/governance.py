from fastapi import FastAPI
from prometheus_client import make_asgi_app, Gauge

app = FastAPI()
metrics_app = make_asgi_app()
app.mount("/metrics", metrics_app)

COMPLIANCE_CHECK = Gauge('compliance_checks', 'Total compliance validations')