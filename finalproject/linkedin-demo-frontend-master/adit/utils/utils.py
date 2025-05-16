import google.generativeai as genai
from fastapi import FastAPI, HTTPException
from PIL import Image
import json
import re
import requests
from io import BytesIO

app = FastAPI()

# Configure Gemini API Key
genai.configure(api_key="AIzaSyDEmZJiVl0Ey5pEm6LgC2O2sgZxC9YqNNo")

def extract_json(text: str):
    """
    Extracts the first valid JSON object from the given text.
    """
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if match:
        try:
            return json.loads(match.group(0))
        except json.JSONDecodeError:
            return {}  # Return empty JSON if parsing fails
    return {}  # Return empty JSON if no valid JSON is found

def suggest_fashion(image_url: str):
    try:
        # Fetch the image from the URL
        response = requests.get(image_url)
        response.raise_for_status()  # Ensure the request was successful
        image = Image.open(BytesIO(response.content))

        # Initialize the Gemini Pro Vision model
        model = genai.GenerativeModel("models/gemini-2.0-flash")

        # Define the prompt
        prompt = """
        You are an expert in fashion wear and matching clothes.
        Given the clothing items already present, suggest **only** the missing matching items.
        Respond **strictly** in the following JSON format:
        {
            "top": "<suggested top clothing with color and gender (men or women)> (if missing)",
            "bottom": "<suggested bottom clothing with color and gender> (if missing)",
            "footwear": "<suggested footwear and gender> (if missing)",
            "accessories": "<suggested accessories and gender> (if missing)"
        }
        Never return empty JSON.
        """

        # Generate content using the model
        response = model.generate_content([prompt, image])

        # Extract and parse JSON response
        raw_response = response.text
        json_response = extract_json(raw_response)

        return json_response

    except Exception as e:
        # Log the exception for debugging purposes
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
