from flask import Blueprint, request
from utils import verify_token

user_bp = Blueprint('user', __name__)

@user_bp.route('/users/gSigin', methods=['GET'])
@verify_token
def googleSigin(userData):
    return {"uinfo": userData}