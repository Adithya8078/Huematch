from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router import router
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# Allow all origins, or you can customize the list of allowed origins
origins = [
    "http://localhost:3000",  # Example for a frontend running on a different port
    "http://localhost:3002",  # Example for a frontend running on the same port
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specific origins, or use "*" to allow all
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Include the uploads router
app.include_router(router.router, prefix="/api", tags=["uploads"])

