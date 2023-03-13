import sys
import os
from flask import Flask, request
from flask_cors import CORS
from flask_socketio import SocketIO
from pymongo import MongoClient
from config import MONGODB_URL
#setting curreny directory
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), './')))
from .socket import socketio
import resources 


client = MongoClient(MONGODB_URL)
db = client["chatApp"]

def create_app():
    app = Flask(__name__)
    CORS(app,resources={r"/*":{"origins":"*"}})
    app.register_blueprint(resources.user_bp)
   
    socketio.init_app(app, cors_allowed_origins="*")
    return app
