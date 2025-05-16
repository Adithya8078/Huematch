import json

input_file = "test_data.json"  # Replace with your actual file
output_file = "valid_data.json"

data = []

# Read NDJSON file line by line and convert it into a valid JSON array
with open(input_file, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data.append(json.loads(line.strip()))
        except json.JSONDecodeError as e:
            print(f"Skipping invalid line: {line.strip()}\nError: {e}")

# Save as a properly formatted JSON array
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4)

print(f"Successfully converted {len(data)} records to valid JSON format in {output_file}!")
