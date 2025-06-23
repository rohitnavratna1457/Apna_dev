from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(User)
admin.site.register(UserImages)
admin.site.register(PostCharges)
admin.site.register(UserTotalRevenue)
admin.site.register(AdminTotalRevenue)
admin.site.register(StaffTotalRevenue)
admin.site.register(DevTotalRevenue)
admin.site.register(StaffTransactions)
admin.site.register(UserTransactions)
admin.site.register(UserData)
admin.site.register(User_Caste)
admin.site.register(User_State)
admin.site.register(Subscriber)

