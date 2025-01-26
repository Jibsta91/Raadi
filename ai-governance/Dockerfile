FROM python:3.11-slim
WORKDIR /app
COPY ai-governance/requirements.txt .
RUN pip install -r requirements.txt
COPY ai-governance .
CMD ["python", "governance.py"]