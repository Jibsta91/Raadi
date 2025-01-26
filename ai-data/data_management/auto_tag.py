# ai/data_management/auto_tag.py
def tag_listing(text):
    nlp = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
    return nlp(text, candidate_labels=["Electronics", "Furniture", "Vehicles"])