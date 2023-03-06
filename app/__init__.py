import sys
import os
from flask import Flask, request
from flask_cors import CORS

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), './')))
import resources 
def create_app():
    app = Flask(__name__)
    CORS(app,resources={r"/*":{"origins":"*"}})
    
    return app
