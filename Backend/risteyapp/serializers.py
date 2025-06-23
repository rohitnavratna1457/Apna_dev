from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        try:
            user = User.objects.get(username=username, password=password)
        except User.DoesNotExist:
            raise serializers.ValidationError("Invalid username or password")

        if not user:
            raise serializers.ValidationError("User not found")

        data['user'] = user
        return data


class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = '__all__'
# class PhoneOtpSerializer(serializers.Serializer):
#     phone = serializers.CharField(max_length=15) 

# class VerifyOtpSerializer(serializers.Serializer):
#     phone = serializers.RegexField(regex=r'^\d{10,15}$', error_messages={"invalid": "Invalid phone number"})
#     otp = serializers.RegexField(regex=r'^\d{6}$', error_messages={"invalid": "Invalid OTP"})
    
    
# serializers.py

class EmailSerializer(serializers.Serializer):
    # subject = serializers.CharField()
    # message = serializers.CharField()
    recipient = serializers.EmailField()

class UserImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserImages
        fields = '__all__'
    
class PostChargesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostCharges
        fields = '__all__'

class UserTotalRevenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTotalRevenue
        fields = '__all__'

class AdminTotalRevenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminTotalRevenue
        fields = '__all__'

class StaffTotalRevenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = StaffTotalRevenue
        fields = '__all__'

class DevTotalRevenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = DevTotalRevenue
        fields = '__all__'


class StaffTransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StaffTransactions
        fields = '__all__'
        
class UserTransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTransactions
        fields = '__all__'

class User_CasteSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Caste
        fields = '__all__'
        
class User_StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_State
        fields = '__all__'


class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = '__all__'
