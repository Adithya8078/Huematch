from elasticsearch import Elasticsearch

es = Elasticsearch("http://localhost:9200")

with open("elastic.ndjson", "r", encoding="utf-8") as f:
    data = f.read()

res = es.bulk(body=data)
print(res)
