import requests
from rest_framework_simplejwt.tokens import RefreshToken

# def send_otp(phone, otp):
#     url = "https://www.fast2sms.com/dev/bulkV2"
#     headers = {
#         "authorization": "dNVsEfQs8UHIpvzNm0VNOiL90MM9R4Fm8BHER75wtZ5unvxf7QqqAMPNiCH9",  # Replace with your Fast2SMS API Key
#         "Content-Type": "application/x-www-form-urlencoded"
#     }
#     payload = {
#         "variables_values": otp,
#         "route": "otp",
#         "numbers": phone
#     }
#     response = requests.post(url, headers=headers, data=payload)
#     return response.json()


import hashlib
import shortuuid

def secure_short_uuid():
    # Generate a short UUID (base57 compressed string)
    short_id = shortuuid.uuid()
    
    # Hash the short UUID using SHA-256
    hashed_id = hashlib.sha256(short_id.encode()).hexdigest()
    
    # Return the first 22 characters to maintain shorter length
    return hashed_id[:22]


# myapp/utils.py
import random

def generate_random_number():
    # Generate a 6-digit random number
    return str(random.randint(100000, 999999))


# utils.py


def get_tokens_for_user(user):
    """
    Generates JWT access and refresh tokens for the user.
    Returns:
        dict: Tokens and user role.
    """
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'role': user.role,  # Include user role in the token response
    }

