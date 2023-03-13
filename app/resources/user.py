from flask import Blueprint, request
from utils import verify_token
from bson.objectid import ObjectId

user_bp = Blueprint('user', __name__)

@user_bp.route('/users/gSigin', methods=['GET'])
@verify_token
def googleSigin(userData):
    from app import db
    usercollection = db['users']
    email = userData["email"]
    if request.method == 'GET':
        user = usercollection.find_one({"email": userData["email"]})
        if user is None:  
            usercollection.insert_one({"email":userData["email"]})
        return {"uinfo": userData}
    else:
        return {"message":"No route exist"}
        
@user_bp.route('/users/addfriend', methods=['POST'])
@verify_token
def add_friend(userData):
    from app import db
    collection = db['users']
    if request.method == 'POST':
        user = collection.find({'_id': ObjectId(request.userId)})
    

