from fastapi import APIRouter
from pydantic import BaseModel
import requests
from utils import utils
import groq as groq
groq_api_key = "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"
router = APIRouter()
class FashionRequest(BaseModel):
    image_url: str

class FashionResponse(BaseModel):
    image_url: str
    suggestions: dict[str, str]

@router.post("/suggest-fashion/")
def get_suggestions(request: FashionRequest):
    suggestions = utils.suggest_fashion(request.image_url)
    return {"image_url": request.image_url, "suggestions": suggestions}