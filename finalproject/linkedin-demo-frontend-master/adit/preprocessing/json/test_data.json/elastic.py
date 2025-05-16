import json

# Input and output file names
input_file = "filtered_watches.json"   # Your raw JSON file
output_file = "filtered_watches.ndjson"  # Correct NDJSON for Elasticsearch bulk import

# Read the raw JSON file
with open(input_file, "r", encoding="utf-8") as f:
    data = json.load(f)  # Load entire JSON (assumes it's an array)

# Open the output file in write mode
with open(output_file, "w", encoding="utf-8") as f:
    for doc in data:
        # Write metadata line
        f.write(json.dumps({ "index": { "_index": "products" } }) + "\n")
        # Write actual document
        f.write(json.dumps(doc) + "\n")

print("NDJSON file created successfully!")
