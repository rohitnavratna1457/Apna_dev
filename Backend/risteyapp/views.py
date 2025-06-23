# from rest_framework.permissions import IsAuthenticated
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework_simplejwt.authentication import JWTAuthentication
# from .models import *
# from .serializers import *

# class UserRegisterView(APIView):
#     authentication_classes = [JWTAuthentication]  # ✅ Check Token
#     permission_classes = [IsAuthenticated]

#     def get(self, request, pk=None):
#         # if request.user.role in ['admin', 'staff', 'user', 'developer']:
#         if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only admin can access
#             try:
#                 if pk:
#                     # ✅ Fetch single user if pk is provided
#                     employee = User.objects.get(pk=pk)
#                     serializer = UserSerializer(employee)
#                     return Response(serializer.data, status=status.HTTP_200_OK)

#                 # ✅ Fetch all users if no pk
#                 employees = User.objects.all()
#                 serializer = UserSerializer(employees, many=True)
#                 return Response(serializer.data, status=status.HTTP_200_OK)

#             except User.DoesNotExist:
#                 return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

#             except Exception as e:
#                 return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
#         else:
#             return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

#     def post(self, request):
#         if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only admin can create a user
#             serializer = UserSerializer(data=request.data)
#             if serializer.is_valid():
#                 user = serializer.save()
#                 return Response(serializer.data, status=status.HTTP_201_CREATED)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         else:
#             return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

#     def delete(self, request, pk=None):
#         if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only admin can delete
#             try:
#                 user = User.objects.get(pk=pk)
#                 user.delete()
#                 return Response({"msg": "User deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
#             except User.DoesNotExist:
#                 return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
#         else:
#             return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

#     def put(self, request, pk=None):
#         if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only admin can update
#             try:
#                 user = User.objects.get(pk=pk)
#                 serializer = UserSerializer(user, data=request.data, partial=True)
#                 if serializer.is_valid():
#                     serializer.save()
#                     return Response(serializer.data, status=status.HTTP_200_OK)
#                 return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#             except User.DoesNotExist:
#                 return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
#         else:
#             return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)


# ######################## User Login #######################

# class UserLoginView(APIView):
#     def post(self, request):
#         serializer = UserLoginSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.validated_data['user']
#             token_data = get_tokens_for_user(user)

#             return Response({
#                 'msg': 'Login Successful',
#                 'token': token_data,
#                 'user_id': user.id,
#                 'role': user.role
#             }, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
# # from rest_framework import status
# # from rest_framework_simplejwt.tokens import RefreshToken
# # class AdminLoginView(APIView):
# #     # def post(self, request):
# #     #     if request:
# #     #         login_phone = request.data.get('username')
# #     #         login_password = request.data.get('password')
# #     #         user = AdminRegister.objects.get(username=login_phone,password=login_password)
# #     #         if user:
# #     #             return Response({'msg':'Login Successfully','Admin':user.id})
# #     #         else:
# #     #             return Response({'msg':'invalid credentials'})
            
# #     def post(self, request):
# #         username = request.data.get('username')
# #         password = request.data.get('password')

# #         try:
# #             user = AdminRegister.objects.get(username=username, password=password)
# #             refresh = RefreshToken.for_user(user)
# #             return Response({
# #                 'refresh': str(refresh),
# #                 'access': str(refresh.access_token),
# #                 # 'user_id': user.id,
# #             }, status=status.HTTP_200_OK)
# #         except AdminRegister.DoesNotExist:
# #             return Response({'msg': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
# ############################ Staff #############################

# # class StaffRegisterView(APIView):
# #     def get(self,request, pk=None):
# #         # # pdb.set_trace()
# #         # print(request)
# #         if pk:
# #             employee = StaffRegister.objects.get(pk=pk)
# #             serializer = StaffRegisterSerializer(employee)
# #             return Response(serializer.data)
# #         else:
# #             employees = StaffRegister.objects.all()
# #             serializer = StaffRegisterSerializer(employees, many=True)
# #         return Response(serializer.data)
    
# #     def post(self, request):

# #         # pdb.set_trace()
# #         # print(request)
# #         serializer = StaffRegisterSerializer(data=request.data)
# #         if serializer.is_valid():
# #             serializer.save()
# #             employees = StaffRegister.objects.all()
# #             serializers = StaffRegisterSerializer(employees, many=True)
# #             return Response(serializers.data,status=200)
# #         return Response(serializer.errors, status=400)
    
# #     def delete(self,request, pk):
# #         Attend = StaffRegister.objects.get(pk=pk)
# #         Attend.delete()
# #         employees = StaffRegister.objects.all()
# #         serializer = StaffRegisterSerializer(employees, many=True)
# #         return Response(serializer.data,status=200)
    
# #     def put(self, request, pk=None):
# #         # print(request)
# #         # pdb.set_trace()
# #         Attend = StaffRegister.objects.get(pk=pk)
# #         serializer = StaffRegisterSerializer(Attend, data=request.data, partial=True)
# #         if serializer.is_valid():
# #             serializer.save()
# #             employees = StaffRegister.objects.all()
# #             serializers = StaffRegisterSerializer(employees, many=True)
# #             return Response(serializers.data,status=200)
# #         return Response(serializer.errors, status=400)
    
    
# # class StaffLoginView(APIView):
# #     def post(self, request):
# #         if request:
# #             login_phone = request.data.get('username')
# #             login_password = request.data.get('password')
# #             user = StaffRegister.objects.get(username=login_phone,password=login_password)
# #             if user:
# #                 return Response({'msg':'Login Successfully','Staff':user.id})
# #             else:
# #                 return Response({'msg':'invalid credentials'})
            
# ######################## User ######################

# # class UserRegisterView(APIView):
# #     def get(self,request, pk=None):
# #         # # pdb.set_trace()
# #         # print(request)
# #         if pk:
# #             employee = UserRegister.objects.get(pk=pk)
# #             serializer = UserRegisterSerializer(employee)
# #             return Response(serializer.data)
# #         else:
# #             employees = UserRegister.objects.all()
# #             serializer = UserRegisterSerializer(employees, many=True)
# #         return Response(serializer.data)
    
# #     def post(self, request):

# #         # pdb.set_trace()
# #         # print(request)
# #         serializer = UserRegisterSerializer(data=request.data)
# #         if serializer.is_valid():
# #             serializer.save()
# #             employees = UserRegister.objects.all()
# #             serializer = UserRegisterSerializer(employees, many=True)
# #             return Response(serializer.data,status=200)
# #         return Response(serializer.errors, status=400)
    
# #     def delete(self,request, pk=None):
# #         if pk:
# #             Attend = UserRegister.objects.get(pk=pk)
# #             Attend.delete()
# #             employees = UserRegister.objects.all()
# #             serializer = UserRegisterSerializer(employees, many=True)
# #             return Response(serializer.data,status=200)
    
# #     def put(self, request, pk=None):
# #         # print(request)
# #         # pdb.set_trace()
# #         Attend = UserRegister.objects.get(pk=pk)
# #         serializer = UserRegisterSerializer(Attend, data=request.data, partial=True)
# #         if serializer.is_valid():
# #             serializer.save()
# #             employees = UserRegister.objects.all()
# #             serializers = UserRegisterSerializer(employees, many=True)
# #             return Response(serializers.data,status=200)
# #         return Response(serializer.errors, status=400)
    
    

            

# # class SendOtpView(APIView):
# #     def post(self, request):
# #         # Validate incoming data with serializer
# #         serializer = PhoneOtpSerializer(data=request.data)
        
# #         if serializer.is_valid():
# #             phone = serializer.validated_data['phone']
            
# #             # Generate OTP
# #             otp = str(random.randint(100000, 999999))  # Generate 6-digit OTP

# #             cache.set(phone, otp, timeout=300) # Store OTP in cache for 5 minutes (300 seconds)
            
# #             # Send OTP through Fast2SMS
# #             response = send_otp(phone, otp)
            
# #             if response.get("return", False):
# #                 return Response({"message": "OTP sent successfully", "phone": phone}, status=status.HTTP_200_OK)
# #             else:
# #                 return Response({"error": "Failed to send OTP"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
# #         return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)

# # class VerifyOtpView(APIView):
# #     def post(self, request):
# #         serializer = VerifyOtpSerializer(data=request.data)

# #         if serializer.is_valid():
# #             phone = serializer.validated_data['phone']
# #             otp = serializer.validated_data['otp']

# #             # Retrieve OTP from cache
# #             stored_otp = cache.get(phone)  

# #             if stored_otp == otp:
# #                 cache.delete(phone)  # Remove OTP after successful verification
# #                 return Response({"message": "OTP verified successfully"}, status=status.HTTP_200_OK)

# #             return Response({"error": "Invalid or expired OTP"}, status=status.HTTP_400_BAD_REQUEST)

# #         return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)
        
# class UserImagesView(APIView):
#     def get(self,request, pk=None):
#         # # pdb.set_trace()
#         # print(request)
#         if pk:
#             employee = UserImages.objects.get(pk=pk)
#             serializer = UserImagesSerializer(employee)
#             return Response(serializer.data)
#         else:
#             employees = UserImages.objects.all()
#             serializer = UserImagesSerializer(employees, many=True)
#         return Response(serializer.data)
    
#     def post(self, request):

#         # pdb.set_trace()
#         # print(request)
#         serializer = UserImagesSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=200)
#         return Response(serializer.errors, status=400)
    
#     def delete(self, pk):
#         Attend = UserImages.objects.get(pk=pk)
#         Attend.delete()
#         return Response(status=400)
    
#     def put(self, request, pk=None):
#         # print(request)
#         # pdb.set_trace()
#         Attend = UserImages.objects.get(pk=pk)
#         serializer = UserImagesSerializer(Attend, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=200)
#         return Response(serializer.errors, status=400)
    

# # ######################## Developer ######################

# # class DeveloperRegisterView(APIView):
# #     def get(self,request, pk=None):
# #         # # pdb.set_trace()
# #         # print(request)
# #         if pk:
# #             employee = DeveloperRegister.objects.get(pk=pk)
# #             serializer = DeveloperRegisterSerializer(employee)
# #             return Response(serializer.data)
# #         else:
# #             employees = DeveloperRegister.objects.all()
# #             serializer = DeveloperRegisterSerializer(employees, many=True)
# #         return Response(serializer.data)
    
# #     def post(self, request):

# #         # pdb.set_trace()
# #         # print(request)
# #         serializer = DeveloperRegisterSerializer(data=request.data)
# #         if serializer.is_valid():
# #             serializer.save()
# #             return Response(serializer.data, status=200)
# #         return Response(serializer.errors, status=400)
    
# #     def delete(self, pk):
# #         Attend = DeveloperRegister.objects.get(pk=pk)
# #         Attend.delete()
# #         return Response(status=400)
    
# #     def put(self, request, pk=None):
# #         # print(request)
# #         # pdb.set_trace()
# #         Attend = DeveloperRegister.objects.get(pk=pk)
# #         serializer = DeveloperRegisterSerializer(Attend, data=request.data, partial=True)
# #         if serializer.is_valid():
# #             serializer.save()
# #             return Response(serializer.data, status=200)
# #         return Response(serializer.errors, status=400)
    
    
# # class DeveloperLoginView(APIView):
# #     def post(self, request):
# #         if request:
# #             login_phone = request.data.get('username')
# #             login_password = request.data.get('password')
# #             user = DeveloperRegister.objects.get(username=login_phone,password=login_password)
# #             if user:
# #                 return Response({'msg':'Login Successfully','user_id':user.id})
# #             else:
# #                 return Response({'msg':'invalid credentials'})

    
    
# # from django.core.mail import send_mail

# # from django.conf import settings

# # from django.core.mail import EmailMultiAlternatives
# # from django.conf import settings
# # from rest_framework.response import Response
# # from rest_framework import status
# # from rest_framework.views import APIView
# # from django.template.loader import render_to_string
# # from .models import *  # Import your UserRegister model
# # from .serializers import EmailSerializer  # Import your serializer

# # class SendEmailView(APIView):
# #     def post(self, request):
# #         serializer = EmailSerializer(data=request.data)

# #         if serializer.is_valid():
# #             recipient_email = serializer.validated_data["recipient"]

# #             try:
# #                 user = UserRegister.objects.get(email=recipient_email)  # ✅ Fetch user details
# #                 subject = "Your Account Credentials"
                
# #                 # Render the HTML email template
# #                 html_message = render_to_string("email_template.html", {
# #                     "username": user.username,
# #                     "password": user.password
# #                 })

# #                 # Sending HTML Email
# #                 email = EmailMultiAlternatives(
# #                     subject=subject,
# #                     body="This is an HTML email. Please enable HTML in your email client.",
# #                     from_email=settings.DEFAULT_FROM_EMAIL,
# #                     to=[recipient_email],
# #                 )
# #                 email.attach_alternative(html_message, "text/html")  # Attach HTML content
# #                 email.send()

# #                 return Response({"success": "Email sent successfully!"}, status=status.HTTP_200_OK)

# #             except UserRegister.DoesNotExist:
# #                 return Response({"error": "User with this email does not exist"}, status=status.HTTP_404_NOT_FOUND)

# #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class PostChargesView(APIView):
#     def get(self,request, pk=None):
#         # # pdb.set_trace()
#         # print(request)
#         if pk:
#             employee = PostCharges.objects.get(pk=pk)
#             serializer = PostChargesSerializer(employee)
#             return Response(serializer.data)
#         else:
#             employees = PostCharges.objects.all()
#             serializer = PostChargesSerializer(employees, many=True)
#         return Response(serializer.data)
    
#     def post(self, request):

#         # pdb.set_trace()
#         # print(request)
#         serializer = PostChargesSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=200)
#         return Response(serializer.errors, status=400)
    
#     def delete(self, pk):
#         Attend = PostCharges.objects.get(pk=pk)
#         Attend.delete()
#         return Response(status=400)
    
#     def put(self, request, pk=None):
#         # print(request)
#         # pdb.set_trace()
#         Attend = PostCharges.objects.get(pk=pk)
#         serializer = PostChargesSerializer(Attend, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=200)
#         return Response(serializer.errors, status=400)
    
    
# class AdminTotalRevenueView(APIView):
#     def get(self,request, pk=None):
#         # # pdb.set_trace()
#         # print(request)
#         if pk:
#             employee = AdminTotalRevenue.objects.get(pk=pk)
#             serializer = AdminTotalRevenueSerializer(employee)
#             return Response(serializer.data)
#         else:
#             employees = AdminTotalRevenue.objects.all()
#             serializer = AdminTotalRevenueSerializer(employees, many=True)
#         return Response(serializer.data)
    
#     def post(self, request):

#         # pdb.set_trace()
#         # print(request)
#         serializer = AdminTotalRevenueSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=200)
#         return Response(serializer.errors, status=400)
    
#     def delete(self, pk):
#         Attend = AdminTotalRevenue.objects.get(pk=pk)
#         Attend.delete()
#         return Response(status=400)
    
#     def put(self, request, pk=None):
#         # print(request)
#         # pdb.set_trace()
#         Attend = AdminTotalRevenue.objects.get(pk=pk)
#         serializer = AdminTotalRevenueSerializer(Attend, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             employees = AdminTotalRevenue.objects.all()
#             serializer1 = AdminTotalRevenueSerializer(employees, many=True)
#             return Response(serializer1.data, status=200)
#         return Response(serializer.errors, status=400)
    
# class StaffTotalRevenueView(APIView):
#     def get(self,request, pk=None):
#         # # pdb.set_trace()
#         # print(request)
#         if pk:
#             employee = StaffTotalRevenue.objects.get(pk=pk)
#             serializer = StaffTotalRevenueSerializer(employee)
#             return Response(serializer.data)
#         else:
#             employees = StaffTotalRevenue.objects.all()
#             serializer = StaffTotalRevenueSerializer(employees, many=True)
#         return Response(serializer.data)
    
#     def post(self, request):

#         # pdb.set_trace()
#         # print(request)
#         serializer = StaffTotalRevenueSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=200)
#         return Response(serializer.errors, status=400)
    
#     def delete(self, pk):
#         Attend = StaffTotalRevenue.objects.get(pk=pk)
#         Attend.delete()
#         return Response(status=400)
    
#     def put(self, request, pk=None):
#         # print(request)
#         # pdb.set_trace()
#         Attend = StaffTotalRevenue.objects.get(pk=pk)
#         serializer = StaffTotalRevenueSerializer(Attend, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             employees = StaffTotalRevenue.objects.all()
#             serializer1 = StaffTotalRevenueSerializer(employees, many=True)
#             return Response(serializer1.data, status=200)
#         return Response(serializer.errors, status=400)
    
# class DevTotalRevenueView(APIView):
#     def get(self,request, pk=None):
#         # # pdb.set_trace()
#         # print(request)
#         if pk:
#             employee = DevTotalRevenue.objects.get(pk=pk)
#             serializer = DevTotalRevenueSerializer(employee)
#             return Response(serializer.data)
#         else:
#             employees = DevTotalRevenue.objects.all()
#             serializer = DevTotalRevenueSerializer(employees, many=True)
#         return Response(serializer.data)
    
#     def post(self, request):

#         # pdb.set_trace()
#         # print(request)
#         serializer = DevTotalRevenueSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=200)
#         return Response(serializer.errors, status=400)
    
#     def delete(self, pk):
#         Attend = DevTotalRevenue.objects.get(pk=pk)
#         Attend.delete()
#         return Response(status=400)
    
#     def put(self, request, pk=None):
#         # print(request)
#         # pdb.set_trace()
#         Attend = DevTotalRevenue.objects.get(pk=pk)
#         serializer = DevTotalRevenueSerializer(Attend, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             employees = DevTotalRevenue.objects.all()
#             serializer1 = DevTotalRevenueSerializer(employees, many=True)
#             return Response(serializer1.data, status=200)
#         return Response(serializer.errors, status=400)
    
# class StaffTransactionsView(APIView):
#     def get(self,request, pk=None):
#         # # pdb.set_trace()
#         # print(request)
#         if pk:
#             employee = StaffTransactions.objects.get(pk=pk)
#             serializer = StaffTransactionsSerializer(employee)
#             return Response(serializer.data)
#         else:
#             employees = StaffTransactions.objects.all()
#             serializer = StaffTransactionsSerializer(employees, many=True)
#         return Response(serializer.data)
    
#     def post(self, request):

#         # pdb.set_trace()
#         # print(request)
#         serializer = StaffTransactionsSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             employees = StaffTransactions.objects.all()
#             serializer1 = StaffTransactionsSerializer(employees, many=True)
#             return Response(serializer1.data, status=200)
#         return Response(serializer.errors, status=400)
    
#     def delete(self, pk):
#         Attend = StaffTransactions.objects.get(pk=pk)
#         Attend.delete()
#         return Response(status=400)
    
#     def put(self, request, pk=None):
#         # print(request)
#         # pdb.set_trace()
#         Attend = StaffTransactions.objects.get(pk=pk)
#         serializer = StaffTransactionsSerializer(Attend, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             employees = StaffTransactions.objects.all()
#             serializer1 = StaffTransactionsSerializer(employees, many=True)
#             return Response(serializer1.data, status=200)
#         return Response(serializer.errors, status=400)
    
# class UserTransactionsView(APIView):
#     def get(self,request, pk=None):
#         # # pdb.set_trace()
#         # print(request)
#         if pk:
#             employee = UserTransactions.objects.get(pk=pk)
#             serializer = UserTransactionsSerializer(employee)
#             return Response(serializer.data)
#         else:
#             employees = UserTransactions.objects.all()
#             serializer = UserTransactionsSerializer(employees, many=True)
#         return Response(serializer.data)
    
#     def post(self, request):

#         # pdb.set_trace()
#         # print(request)
#         serializer = UserTransactionsSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=200)
#         return Response(serializer.errors, status=400)
    
#     def delete(self, pk):
#         Attend = UserTransactions.objects.get(pk=pk)
#         Attend.delete()
#         return Response(status=400)
    
#     def put(self, request, pk=None):
#         # print(request)
#         # pdb.set_trace()
#         Attend = UserTransactions.objects.get(pk=pk)
#         serializer = UserTransactionsSerializer(Attend, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             employees = UserTransactions.objects.all()
#             serializer1 = UserTransactionsSerializer(employees, many=True)
#             return Response(serializer1.data, status=200)
#         return Response(serializer.errors, status=400)
    

# # import razorpay
# # from django.conf import settings
# # from django.http import JsonResponse
# # from django.views.decorators.csrf import csrf_exempt

# # razorpay_client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

# # @csrf_exempt
# # def create_order(request):
# #     if request.method == "POST":
# #         data = request.POST
# #         amount = int(data.get("amount")) * 100  # Convert to paise

# #         order_data = {
# #             "amount": amount,  # Amount in paise
# #             "currency": "INR",
# #             "payment_capture": 1,  # Auto capture
# #         }

# #         order = razorpay_client.order.create(order_data)
# #         return JsonResponse(order)
# #     return JsonResponse({"error": "Invalid request"}, status=400)

# # @csrf_exempt
# # def verify_payment(request):
# #     if request.method == "POST":
# #         data = request.POST
# #         try:
# #             razorpay_client.utility.verify_payment_signature(data)  # Auto verifies signature
# #             return JsonResponse({"status": "Payment verified"})
# #         except:
# #             return JsonResponse({"error": "Verification failed"}, status=400)
# #     return JsonResponse({"error": "Invalid request"}, status=400)


#######################################################################################################################


from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import *
from .serializers import *

from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string


class UserRegView_wl(APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()

#             # After saving the user, send confirmation email
#             recipient_email = user.email
#             subject = "🎉 Welcome to Ristey!"

#             text_message = f"Hello {user.username},\n\nThank you for registering with us!"

#             html_message = f"""
# <html>
# <head>
#     <style>
#         body {{
#             font-family: Arial, sans-serif;
#             background-color: #f9f9f9;
#             margin: 0;
#             padding: 0;
#         }}
#         .email-container {{
#             max-width: 600px;
#             margin: 0 auto;
#             background-color: #ffffff;
#             border-radius: 8px;
#             overflow: hidden;
#             box-shadow: 0 0 10px rgba(0,0,0,0.1);
#         }}
#         .header {{
#             background-color: #004aad;
#             color: white;
#             padding: 20px;
#             text-align: center;
#         }}
#         .header h1 {{
#             margin: 0;
#         }}
#         .content {{
#             padding: 20px;
#             text-align: center;
#         }}
#         .content p {{
#             font-size: 16px;
#             color: #333;
#         }}
#         .footer {{
#             background-color: #f0f0f0;
#             text-align: center;
#             padding: 15px;
#             font-size: 13px;
#             color: #777;
#         }}
#     </style>
# </head>
# <body>
#     <div class="email-container">
#         <div class="header">
#             <h1>Welcome to Ristey!</h1>
#         </div>
#         <div class="content">
#             <p>Hi <strong>{user.username}</strong>,</p>
#             <p>🎊 Your registration was successful!</p>
#             <p>We're excited to have you join us.</p>
#             <p>Feel free to <a href="http://127.0.0.1:8000/login">login</a> anytime.</p>
#             <p style="margin-top: 30px;">Cheers,<br>The Ristey Team</p>
#         </div>
#         <div class="footer">
#             <p>Need help? Contact us at <a href="mailto:support@ristey.com">support@ristey.com</a></p>
#         </div>
#     </div>
# </body>
# </html>
# """

#             email = EmailMultiAlternatives(
#                 subject=subject,
#                 body=text_message,
#                 from_email=settings.DEFAULT_FROM_EMAIL,
#                 to=[recipient_email],
#             )
#             email.attach_alternative(html_message, "text/html")
#             email.send()

            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, pk=None):
        # if request.user.role in ['admin', 'staff', 'user', 'developer']:
            try:
                if pk:
                    # ✅ Fetch single user if pk is provided
                    employee = User.objects.get(pk=pk)
                    serializer = UserSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)

                # ✅ Fetch all users if no pk
                employees = User.objects.all()
                serializer = UserSerializer(employees, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)

            except User.DoesNotExist:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
    def put(self, request, pk=None):
            try:
                user = User.objects.get(pk=pk)
                serializer = UserSerializer(user, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    employees = User.objects.all()
                    serializer = UserSerializer(employees, many=True)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except User.DoesNotExist:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)


# class SendOtpView(APIView):
#     def post(self, request):
#         # Validate incoming data with serializer
#         serializer = PhoneOtpSerializer(data=request.data)
#         print('ooooooooooooo')
#         if serializer.is_valid():
#             phone = serializer.validated_data['phone']
            
#             # Generate OTP
#             otp = str(random.randint(100000, 999999))  # Generate 6-digit OTP

#             cache.set(phone, otp, timeout=300) # Store OTP in cache for 5 minutes (300 seconds)
            
#             # Send OTP through Fast2SMS
#             response = send_otp(phone, otp)
            
#             if response.get("return", False):
#                 return Response({"message": "OTP sent successfully", "phone": phone}, status=status.HTTP_200_OK)
#             else:
#                 return Response({"error": "Failed to send OTP"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
#         return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)

# class VerifyOtpView(APIView):
#     def post(self, request):
#         serializer = VerifyOtpSerializer(data=request.data)

#         if serializer.is_valid():
#             phone = serializer.validated_data['phone']
#             otp = serializer.validated_data['otp']

#             # Retrieve OTP from cache
#             stored_otp = cache.get(phone)  

#             if stored_otp == otp:
#                 cache.delete(phone)  # Remove OTP after successful verification
#                 return Response({"message": "OTP verified successfully"}, status=status.HTTP_200_OK)

#             return Response({"error": "Invalid or expired OTP"}, status=status.HTTP_400_BAD_REQUEST)

#         return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)


# class VerifyOtpView(APIView):
#     def post(self, request):
#             serializer = UserSerializer(data=request.data)
#             if serializer.is_valid():
#                 serializer.save()
#                 employees = User.objects.all()
#                 serializer1 = UserSerializer(employees, many=True)
#                 return Response(serializer1.data, status=status.HTTP_200_OK)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
      

        
class UserDataRegView_wl(APIView):
    # def post(self, request):
    #         serializer = UserDataSerializer(data=request.data)
    #         if serializer.is_valid():
    #             serializer.save()
    #             employees = UserData.objects.all()
    #             serializer1 = UserDataSerializer(employees, many=True)
    #             return Response(serializer1.data, status=status.HTTP_200_OK)
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
         serializer = UserDataSerializer(data=request.data)
         if serializer.is_valid():
            user = serializer.save()

         # Gender match logic
            opposite_gender = 'Female' if user.gender == 'Male' else 'Male'

         # Step 1: Match by caste and opposite gender
            matches = UserData.objects.filter(
             caste=user.caste,
              gender=opposite_gender
              ).exclude(id=user.id)

         # Step 2: If no caste match, try district and opposite gender
            if not matches.exists():
                matches = UserData.objects.filter(
                disttrict=user.disttrict,
                gender=opposite_gender
                ).exclude(id=user.id)

             # Prepare matched user info for template
                matched_users = [{
                "name": m.firstname,
                "disttrict": m.disttrict,
                "caste": m.caste
                } for m in matches]

         # HTML Email Template
                html_message = render_to_string("welcome_email.html", {
                "user": user,
                "matched_users": matched_users
                })

         # Plain text fallback
                plain_message = f"Hi {user.firstname}, welcome to our platform!"

                send_mail(
                subject="Welcome to Our Platform",
                message=plain_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[user.email],
                fail_silently=True,
                html_message=html_message,
                 )
            return Response({"message": "User saved and welcome email sent!"}, status=status.HTTP_201_CREATED)

         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, pk=None):
            try:
                if pk:
                    # ✅ Fetch single user if pk is provided
                    employee = UserData.objects.get(User_id=pk)
                    serializer = UserDataSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)

                # ✅ Fetch all users if no pk
                employees = UserData.objects.all()
                serializer = UserDataSerializer(employees, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)

            except UserData.DoesNotExist:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
            
    def put(self, request, pk=None):
            try:
                user = UserData.objects.get(pk=pk)
                serializer = UserDataSerializer(user, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    employees = UserData.objects.all()
                    serializer = UserDataSerializer(employees, many=True)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except UserData.DoesNotExist:
                return Response({"error": "UserData not found"}, status=status.HTTP_404_NOT_FOUND)
  
class UserImagesView_wl(APIView):

    def get(self, request, pk=None):
            if pk:
                try:
                    employee = UserImages.objects.get(pk=pk)
                    serializer = UserImagesSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                except UserImages.DoesNotExist:
                    return Response({"error": "User image not found"}, status=status.HTTP_404_NOT_FOUND)
            else:
                employees = UserImages.objects.all()
                serializer = UserImagesSerializer(employees, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)

######################################################################################


class UserRegisterView(APIView):
    authentication_classes = [JWTAuthentication]  # ✅ Check Token
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None):
        # if request.user.role in ['admin', 'staff', 'user', 'developer']:
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only admin can access
            try:
                if pk:
                    # ✅ Fetch single user if pk is provided
                    employee = User.objects.get(pk=pk)
                    serializer = UserSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)

                # ✅ Fetch all users if no pk
                employees = User.objects.all()
                serializer = UserSerializer(employees, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)

            except User.DoesNotExist:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only admin can create a user
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                employees = User.objects.all()
                serializer1 = UserSerializer(employees, many=True)
                return Response(serializer1.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only admin can delete
            try:
                user = User.objects.get(pk=pk)
                user.delete()
                employees = User.objects.all()
                serializer1 = UserSerializer(employees, many=True)
                return Response(serializer1.data, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)


    def put(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only admin can update
            try:
                user = User.objects.get(pk=pk)
                serializer = UserSerializer(user, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    employees = User.objects.all()
                    serializer = UserSerializer(employees, many=True)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except User.DoesNotExist:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)


######################## User Login #######################

class UserLoginView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token_data = get_tokens_for_user(user)

            return Response({
                'msg': 'Login Successful',
                'token': token_data,
                'user_id': user.id,
                'role': user.role,
                'refer':user.refer
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDataView(APIView):
    authentication_classes = [JWTAuthentication]  # ✅ Check Token
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Access for allowed roles
            try:
                if pk:
                    # ✅ Fetch single user if pk is provided
                    employee = UserData.objects.get(User_id=pk)
                    serializer = UserDataSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)

                # ✅ Fetch all users if no pk
                employees = UserData.objects.all()
                serializer = UserDataSerializer(employees, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)

            except UserData.DoesNotExist:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only admin can create a user
            serializer = UserDataSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                employees = UserData.objects.all()
                serializer1 = UserDataSerializer(employees, many=True)
                return Response(serializer1.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only admin can delete
            try:
                user = UserData.objects.get(User_id=pk)
                user.delete()
                return Response({"msg": "User deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except UserData.DoesNotExist:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def put(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only admin can update
            try:
                user = UserData.objects.get(User_id=pk)
                serializer = UserDataSerializer(user, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    employees = UserData.objects.all()
                    serializer1 = UserDataSerializer(employees, many=True)
                    return Response(serializer1.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except UserData.DoesNotExist:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)
        

# class SendOtpView(APIView):
#     def post(self, request):
#         # Validate incoming data with serializer
#         serializer = PhoneOtpSerializer(data=request.data)
        
#         if serializer.is_valid():
#             phone = serializer.validated_data['phone']
            
#             # Generate OTP
#             otp = str(random.randint(100000, 999999))  # Generate 6-digit OTP

#             cache.set(phone, otp, timeout=300) # Store OTP in cache for 5 minutes (300 seconds)
            
#             # Send OTP through Fast2SMS
#             response = send_otp(phone, otp)
            
#             if response.get("return", False):
#                 return Response({"message": "OTP sent successfully", "phone": phone}, status=status.HTTP_200_OK)
#             else:
#                 return Response({"error": "Failed to send OTP"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
#         return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)

# class VerifyOtpView(APIView):
#     def post(self, request):
#         serializer = VerifyOtpSerializer(data=request.data)

#         if serializer.is_valid():
#             phone = serializer.validated_data['phone']
#             otp = serializer.validated_data['otp']

#             # Retrieve OTP from cache
#             stored_otp = cache.get(phone)  

#             if stored_otp == otp:
#                 cache.delete(phone)  # Remove OTP after successful verification
#                 return Response({"message": "OTP verified successfully"}, status=status.HTTP_200_OK)

#             return Response({"error": "Invalid or expired OTP"}, status=status.HTTP_400_BAD_REQUEST)

#         return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)
        
class UserImagesView(APIView):
    authentication_classes = [JWTAuthentication]  # ✅ Token Check
    permission_classes = [IsAuthenticated]  # ✅ Only Authenticated Users

    def get(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Admin & Staff can get
            if pk:
                try:
                    employee = UserImages.objects.get(pk=pk)
                    serializer = UserImagesSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                except UserImages.DoesNotExist:
                    return Response({"error": "User image not found"}, status=status.HTTP_404_NOT_FOUND)
            else:
                employees = UserImages.objects.all()
                serializer = UserImagesSerializer(employees, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Permission denied!"}, status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin & Staff can add
            serializer = UserImagesSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                employees = UserImages.objects.all()
                serializer1 = UserImagesSerializer(employees, many=True)
                return Response(serializer1.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Permission denied!"}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can delete
            try:
                attend = UserImages.objects.get(pk=pk)
                attend.delete()
                employees = UserImages.objects.all()
                serializer1 = UserImagesSerializer(employees, many=True)
                return Response(serializer1.data, status=status.HTTP_200_OK)
            except UserImages.DoesNotExist:
                return Response({"error": "User image not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied!"}, status=status.HTTP_403_FORBIDDEN)

    def put(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin & Staff can update
            try:
                attend = UserImages.objects.get(pk=pk)
                serializer = UserImagesSerializer(attend, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    employees = UserImages.objects.all()
                    serializer1 = UserImagesSerializer(employees, many=True)
                    return Response(serializer1.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except UserImages.DoesNotExist:
                return Response({"error": "User image not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied!"}, status=status.HTTP_403_FORBIDDEN)
    
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import EmailSerializer

class SendEmailView(APIView):
    def post(self, request):
        serializer = EmailSerializer(data=request.data)

        if serializer.is_valid():
            recipient_email = serializer.validated_data["recipient"]

            try:
                user = User.objects.get(email=recipient_email)

                subject = "Your Account Credentials"
                html_content = render_to_string("email_template.html", {
                    "username": user.username,
                    "password": user.password
                })

                email = EmailMultiAlternatives(
                    subject=subject,
                    body="Please enable HTML to view this email.",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    to=[recipient_email]
                )
                email.attach_alternative(html_content, "text/html")
                email.send()

                return Response({"message": "Email sent successfully"}, status=status.HTTP_200_OK)

            except User.DoesNotExist:
                return Response({"error": "User with this email does not exist"}, status=status.HTTP_404_NOT_FOUND)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class PostChargesView(APIView):
    authentication_classes = [JWTAuthentication]  # ✅ Check Token
    permission_classes = [IsAuthenticated]       # ✅ Only Authenticated Users

    def get(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Admin & Staff can view
            if pk:
                try:
                    employee = PostCharges.objects.get(pk=pk)
                    serializer = PostChargesSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                except PostCharges.DoesNotExist:
                    return Response({"error": "Post charge not found"}, status=status.HTTP_404_NOT_FOUND)
            employees = PostCharges.objects.all()
            serializer = PostChargesSerializer(employees, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Permission denied!"}, status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can add charges
            serializer = PostChargesSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                employees = PostCharges.objects.all()
                serializer1 = PostChargesSerializer(employees, many=True)
                return Response(serializer1.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Permission denied!"}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can delete
            try:
                attend = PostCharges.objects.get(pk=pk)
                attend.delete()
                return Response({"msg": "Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
            except PostCharges.DoesNotExist:
                return Response({"error": "Post charge not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied!"}, status=status.HTTP_403_FORBIDDEN)

    def put(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Admin & Staff can update
            try:
                attend = PostCharges.objects.get(pk=pk)
                serializer = PostChargesSerializer(attend, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    employees = PostCharges.objects.all()
                    serializer1 = PostChargesSerializer(employees, many=True)
                    return Response(serializer1.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except PostCharges.DoesNotExist:
                return Response({"error": "Post charge not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied!"}, status=status.HTTP_403_FORBIDDEN)
    
    
class UserTotalRevenueView(APIView):
    authentication_classes = [JWTAuthentication]  # ✅ Check Token
    permission_classes = [IsAuthenticated]       # ✅ Only Authenticated Users

    def get(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only User can view revenue
            if pk:
                try:
                    employee = UserTotalRevenue.objects.get(pk=pk)
                    serializer = UserTotalRevenueSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                except UserTotalRevenue.DoesNotExist:
                    return Response({"error": "Revenue record not found"}, status=status.HTTP_404_NOT_FOUND)

            employees = UserTotalRevenue.objects.all()
            serializer = UserTotalRevenueSerializer(employees, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Permission denied! User only."}, status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only User can add revenue
            serializer = UserTotalRevenueSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                employees = UserTotalRevenue.objects.all()
                serializer1 = UserTotalRevenueSerializer(employees, many=True)
                return Response(serializer1.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Permission denied! User only."}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only User can delete revenue
            try:
                attend = UserTotalRevenue.objects.get(pk=pk)
                attend.delete()
                return Response({"msg": "Revenue record deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except UserTotalRevenue.DoesNotExist:
                return Response({"error": "Revenue record not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! User only."}, status=status.HTTP_403_FORBIDDEN)

    def put(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only User can update revenue
            try:
                attend = UserTotalRevenue.objects.get(pk=pk)
                serializer = UserTotalRevenueSerializer(attend, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    # ✅ Fetch all records after update
                    employees = UserTotalRevenue.objects.all()
                    serializer1 = UserTotalRevenueSerializer(employees, many=True)
                    return Response(serializer1.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except UserTotalRevenue.DoesNotExist:
                return Response({"error": "Revenue record not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! User only."}, status=status.HTTP_403_FORBIDDEN)
        

class AdminTotalRevenueView(APIView):
    authentication_classes = [JWTAuthentication]  # ✅ Check Token
    permission_classes = [IsAuthenticated]       # ✅ Only Authenticated Users

    def get(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can view revenue
            if pk:
                try:
                    employee = AdminTotalRevenue.objects.get(pk=pk)
                    serializer = AdminTotalRevenueSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                except AdminTotalRevenue.DoesNotExist:
                    return Response({"error": "Revenue record not found"}, status=status.HTTP_404_NOT_FOUND)

            employees = AdminTotalRevenue.objects.all()
            serializer = AdminTotalRevenueSerializer(employees, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can add revenue
            serializer = AdminTotalRevenueSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                employees = AdminTotalRevenue.objects.all()
                serializer1 = AdminTotalRevenueSerializer(employees, many=True)
                return Response(serializer1.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can delete revenue
            try:
                attend = AdminTotalRevenue.objects.get(pk=pk)
                attend.delete()
                return Response({"msg": "Revenue record deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except AdminTotalRevenue.DoesNotExist:
                return Response({"error": "Revenue record not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def put(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can update revenue
            try:
                attend = AdminTotalRevenue.objects.get(pk=pk)
                serializer = AdminTotalRevenueSerializer(attend, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    # ✅ Fetch all records after update
                    employees = AdminTotalRevenue.objects.all()
                    serializer1 = AdminTotalRevenueSerializer(employees, many=True)
                    return Response(serializer1.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except AdminTotalRevenue.DoesNotExist:
                return Response({"error": "Revenue record not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)
    
class StaffTotalRevenueView(APIView):
    authentication_classes = [JWTAuthentication]  # ✅ Check Token
    permission_classes = [IsAuthenticated]       # ✅ Only Authenticated Users

    def get(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin and Staff can view revenue
            if pk:
                try:
                    employee = StaffTotalRevenue.objects.get(pk=pk)
                    serializer = StaffTotalRevenueSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                except StaffTotalRevenue.DoesNotExist:
                    return Response({"error": "Revenue record not found"}, status=status.HTTP_404_NOT_FOUND)

            employees = StaffTotalRevenue.objects.all()
            serializer = StaffTotalRevenueSerializer(employees, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Permission denied! Admin and Staff only."}, status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can add revenue
            serializer = StaffTotalRevenueSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                employees = StaffTotalRevenue.objects.all()
                serializer1 = StaffTotalRevenueSerializer(employees, many=True)
                return Response(serializer1.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can delete revenue
            try:
                attend = StaffTotalRevenue.objects.get(pk=pk)
                attend.delete()
                return Response({"msg": "Revenue record deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except StaffTotalRevenue.DoesNotExist:
                return Response({"error": "Revenue record not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def put(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can update revenue
            try:
                attend = StaffTotalRevenue.objects.get(pk=pk)
                serializer = StaffTotalRevenueSerializer(attend, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    # ✅ Fetch all records after update
                    employees = StaffTotalRevenue.objects.all()
                    serializer1 = StaffTotalRevenueSerializer(employees, many=True)
                    return Response(serializer1.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except StaffTotalRevenue.DoesNotExist:
                return Response({"error": "Revenue record not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)
import pdb
 
class DevTotalRevenueView(APIView):
    authentication_classes = [JWTAuthentication]  # ✅ Check Token
    permission_classes = [IsAuthenticated]       # ✅ Only Authenticated Users

    def get(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Admin, Staff, and Developer can view revenue
            if pk:
                try:
                    employee = DevTotalRevenue.objects.get(pk=pk)
                    serializer = DevTotalRevenueSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                except DevTotalRevenue.DoesNotExist:
                    return Response({"error": "Revenue record not found"}, status=status.HTTP_404_NOT_FOUND)

            employees = DevTotalRevenue.objects.all()
            serializer = DevTotalRevenueSerializer(employees, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Permission denied! Only Admin, Staff, and Developer can access."},
                            status=status.HTTP_403_FORBIDDEN)
    def post(self, request):
        pdb.set_trace
        print(request.data)
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can add revenue
            serializer = DevTotalRevenueSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                employees = DevTotalRevenue.objects.all()
                serializer1 = DevTotalRevenueSerializer(employees, many=True)
                return Response(serializer1.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can delete revenue
            try:
                attend = DevTotalRevenue.objects.get(pk=pk)
                attend.delete()
                return Response({"msg": "Revenue record deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except DevTotalRevenue.DoesNotExist:
                return Response({"error": "Revenue record not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def put(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can update revenue
            try:
                attend = DevTotalRevenue.objects.get(pk=pk)
                serializer = DevTotalRevenueSerializer(attend, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    # ✅ Fetch all records after update
                    employees = DevTotalRevenue.objects.all()
                    serializer1 = DevTotalRevenueSerializer(employees, many=True)
                    return Response(serializer1.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except DevTotalRevenue.DoesNotExist:
                return Response({"error": "Revenue record not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)
    
class StaffTransactionsView(APIView):
    authentication_classes = [JWTAuthentication]  # ✅ Check Token
    permission_classes = [IsAuthenticated]       # ✅ Only Authenticated Users

    def get(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Admin & Staff can access
            if pk:
                try:
                    employee = StaffTransactions.objects.get(pk=pk)
                    serializer = StaffTransactionsSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                except StaffTransactions.DoesNotExist:
                    return Response({"error": "Transaction record not found"}, status=status.HTTP_404_NOT_FOUND)

            employees = StaffTransactions.objects.all()
            serializer = StaffTransactionsSerializer(employees, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Permission denied! Only Admin and Staff can access."},
                            status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can add transactions
            serializer = StaffTransactionsSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                employees = StaffTransactions.objects.all()
                serializer1 = StaffTransactionsSerializer(employees, many=True)
                return Response(serializer1.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can delete
            try:
                attend = StaffTransactions.objects.get(pk=pk)
                attend.delete()
                return Response({"msg": "Transaction deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except StaffTransactions.DoesNotExist:
                return Response({"error": "Transaction record not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def put(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can update
            try:
                attend = StaffTransactions.objects.get(pk=pk)
                serializer = StaffTransactionsSerializer(attend, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    employees = StaffTransactions.objects.all()
                    serializer1 = StaffTransactionsSerializer(employees, many=True)
                    return Response(serializer1.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except StaffTransactions.DoesNotExist:
                return Response({"error": "Transaction record not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)
    
class UserTransactionsView(APIView):
    authentication_classes = [JWTAuthentication]  # ✅ Token Check
    permission_classes = [IsAuthenticated]       # ✅ Only Authenticated Users

    def get(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user']:  # ✅ Admin, Staff, and User can view
            if pk:
                try:
                    employee = UserTransactions.objects.get(pk=pk)
                    serializer = UserTransactionsSerializer(employee)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                except UserTransactions.DoesNotExist:
                    return Response({"error": "Transaction record not found"}, status=status.HTTP_404_NOT_FOUND)

            employees = UserTransactions.objects.all()
            serializer = UserTransactionsSerializer(employees, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Permission denied! Only Admin, Staff, and Users can access."},
                            status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can add
            serializer = UserTransactionsSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                employees = UserTransactions.objects.all()
                serializer1 = UserTransactionsSerializer(employees, many=True)
                return Response(serializer1.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can delete
            try:
                attend = UserTransactions.objects.get(pk=pk)
                attend.delete()
                return Response({"msg": "Transaction deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except UserTransactions.DoesNotExist:
                return Response({"error": "Transaction record not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)

    def put(self, request, pk=None):
        if request.user.role in ['admin', 'staff', 'user', 'developer']:  # ✅ Only Admin can update
            try:
                attend = UserTransactions.objects.get(pk=pk)
                serializer = UserTransactionsSerializer(attend, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    employees = UserTransactions.objects.all()
                    serializer1 = UserTransactionsSerializer(employees, many=True)
                    return Response(serializer1.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except UserTransactions.DoesNotExist:
                return Response({"error": "Transaction record not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Permission denied! Admin only."}, status=status.HTTP_403_FORBIDDEN)
    

import razorpay
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

razorpay_client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

@csrf_exempt
def create_order(request):
    if request.method == "POST":
        data = request.POST
        amount = int(data.get("amount")) * 100  # Convert to paise

        order_data = {
            "amount": amount,  # Amount in paise
            "currency": "INR",
            "payment_capture": 1,  # Auto capture
        }

        order = razorpay_client.order.create(order_data)
        return JsonResponse(order)
    return JsonResponse({"error": "Invalid request"}, status=400)

@csrf_exempt
def verify_payment(request):
    if request.method == "POST":
        data = request.POST
        try:
            razorpay_client.utility.verify_payment_signature(data)  # Auto verifies signature
            return JsonResponse({"status": "Payment verified"})
        except:
            return JsonResponse({"error": "Verification failed"}, status=400)
    return JsonResponse({"error": "Invalid request"}, status=400)


class UserCasteView(APIView):
    def get(self, request, pk=None):
        if pk:
            try:
                caste = User_Caste.objects.get(pk=pk)
                serializer = User_CasteSerializer(caste)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except User_Caste.DoesNotExist:
                return Response({"error": "Caste not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            castes = User_Caste.objects.all()
            serializer = User_CasteSerializer(castes, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = User_CasteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk=None):
        try:
            caste = User_Caste.objects.get(pk=pk)
            serializer = User_CasteSerializer(caste, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except User_Caste.DoesNotExist:
            return Response({"error": "Caste not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk=None):
        try:
            caste = User_Caste.objects.get(pk=pk)
            caste.delete()
            return Response({"msg": "Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
        except User_Caste.DoesNotExist:
            return Response({"error": "Caste not found"}, status=status.HTTP_404_NOT_FOUND)
        
class UserStateView(APIView):

    def get(self, request, pk=None):
        if pk:
            try:
                state = User_State.objects.get(pk=pk)
                serializer = User_StateSerializer(state)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except User_State.DoesNotExist:
                return Response({"error": "State not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            states = User_State.objects.all()
            serializer = User_StateSerializer(states, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = User_StateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk=None):
        try:
            state = User_State.objects.get(pk=pk)
            serializer = User_StateSerializer(state, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except User_State.DoesNotExist:
            return Response({"error": "State not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk=None):
        try:
            state = User_State.objects.get(pk=pk)
            state.delete()
            return Response({"msg": "Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
        except User_State.DoesNotExist:
            return Response({"error": "State not found"}, status=status.HTTP_404_NOT_FOUND)


# views.py
class SubscriberView(APIView):
    def post(self, request):
        serializer = SubscriberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Subscribed successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

import random
from django.core.cache import cache
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import EmailMultiAlternatives
from django.contrib.auth import get_user_model
from django.template.loader import render_to_string

User = get_user_model()

@api_view(['POST'])
def send_otp(request):
    email = request.data.get('email')
    if not email:
        return Response({"error": "Email is required"}, status=400)

    if User.objects.filter(email=email).exists():
        return Response({"message": "Email already exists."}, status=200)

    otp = str(random.randint(100000, 999999))
    cache.set(email, otp, timeout=300)  # 5 minutes

    # Render HTML template with OTP
    html_content = render_to_string('otp_email_template.html', {'otp': otp})
    subject = 'Your OTP Code'
    from_email = 'your_email@gmail.com'  # Replace with your sender email

    msg = EmailMultiAlternatives(subject, f'Your OTP is: {otp}', from_email, [email])
    msg.attach_alternative(html_content, "text/html")
    msg.send()

    return Response({"message": "OTP sent to your email."}, status=200)


from django.core.cache import cache
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model

User = get_user_model()

@api_view(['POST'])
def verify_otp(request):
    email = request.data.get('email')
    otp = str(request.data.get('otp'))

    if not email or not otp:
        return Response({"error": "Email and OTP required"}, status=400)

    saved_otp = cache.get(email)
    if saved_otp is None:
        return Response({"error": "OTP expired or not found"}, status=400)

    if saved_otp != otp:
        return Response({"error": "Invalid OTP"}, status=400)

    user, created = User.objects.get_or_create(username=email)
    user.email = email
    user.save()

    cache.delete(email)  # remove used OTP
    return Response({"message": "OTP verified", "email": user.email,"user_id": user.id})


