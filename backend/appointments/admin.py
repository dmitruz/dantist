from django.contrib import admin

from .models import Appointment


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ("last_name", "first_name", "phone", "email", "status", "created_at")
    list_filter = ("status", "created_at")
    search_fields = ("first_name", "last_name", "phone", "email")
    list_editable = ("status",)
