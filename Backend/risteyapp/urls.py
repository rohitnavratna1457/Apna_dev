from django.urls import path
from .views import *


urlpatterns = [

    #######################  WL ##################################
    path('UserReg_wl/', UserRegView_wl.as_view(), name='UserRegView'),
    path('UserReg_wl/<str:pk>', UserRegView_wl.as_view(), name='UserRegView'),
    path('UserDataReg_wl/', UserDataRegView_wl.as_view(), name='UserDataRegView'),
    path('UserDataReg_wl/<str:pk>', UserDataRegView_wl.as_view(), name='UserDataRegView'),
    path('UserImages_wl/', UserImagesView_wl.as_view(), name='UserImages'),
    ##############################################################

    path('UserRegister/', UserRegisterView.as_view(), name='UserRegisterView'),
    path('UserRegister/<str:pk>', UserRegisterView.as_view(), name='UserRegisterView'),
    path('UserLogin/', UserLoginView.as_view(), name='UserLogin'),

    path('UserData/', UserDataView.as_view(), name='UserDataView'),
    path('UserData/<str:pk>', UserDataView.as_view(), name='UserDataView'),

    # path('send-otp/', SendOtpView.as_view(), name='send-otp'),
    # path('verify-otp/', VerifyOtpView.as_view(), name='verify-otp'),

    path("send-email/", SendEmailView.as_view(), name="send_email"),


    path('UserImages/', UserImagesView.as_view(), name='UserImages'),
    path('UserImages/<str:pk>', UserImagesView.as_view(), name='UserImages'),
    

    path('PostCharges/', PostChargesView.as_view(), name='PostCharges'),
    path('PostCharges/<str:pk>', PostChargesView.as_view(), name='PostCharges'),
    
    path('UserTotalRevenue/', UserTotalRevenueView.as_view(), name='UserTotalRevenue'),
    path('UserTotalRevenue/<str:pk>', UserTotalRevenueView.as_view(), name='UserTotalRevenue'),

    path('AdminTotalRevenue/', AdminTotalRevenueView.as_view(), name='AdminTotalRevenue'),
    path('AdminTotalRevenue/<str:pk>', AdminTotalRevenueView.as_view(), name='AdminTotalRevenue'),

    path('StaffTotalRevenue/', StaffTotalRevenueView.as_view(), name='StaffTotalRevenue'),
    path('StaffTotalRevenue/<str:pk>', StaffTotalRevenueView.as_view(), name='StaffTotalRevenue'),

    path('DevTotalRevenue/', DevTotalRevenueView.as_view(), name='DevTotalRevenue'),
    path('DevTotalRevenue/<str:pk>', DevTotalRevenueView.as_view(), name='DevTotalRevenue'),

    path('StaffTransactions/', StaffTransactionsView.as_view(), name='StaffTransactions'),
    path('StaffTransactions/<str:pk>', StaffTransactionsView.as_view(), name='StaffTransactions'),

    path('UserTransactions/', UserTransactionsView.as_view(), name='UserTransactions'),
    path('UserTransactions/<str:pk>', UserTransactionsView.as_view(), name='UserTransactions'),

    path('create-order/', create_order, name='create-order'),
    path('verify-payment/', verify_payment, name='verify_payment'),

    path('caste/', UserCasteView.as_view(), name='caste_list_create'),
    path('caste/<int:pk>/', UserCasteView.as_view(), name='caste_detail'),
    
    path('state/', UserStateView.as_view(), name='state_list_create'),
    path('state/<int:pk>/', UserStateView.as_view(), name='state_detail'),



    path('send-otp/', send_otp, name='send_otp'),
    path('verify-otp/', verify_otp, name='verify_otp'),
    # path('Uuid/', UuidView.as_view(), name='Uuid'),
    # path('Uuid/<str:pk>', UuidView.as_view(), name='Uuid'),
    
    path('subscribe/', SubscriberView.as_view(), name='subscribe'),
    

] 