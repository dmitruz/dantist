import re

from rest_framework import serializers

from .models import Appointment

PHONE_RE = re.compile(r"^\+?[0-9\s()\-]{9,18}$")


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ["id", "first_name", "last_name", "phone", "email"]
        read_only_fields = ["id"]

    def validate_phone(self, value: str) -> str:
        value = value.strip()
        if not PHONE_RE.match(value):
            raise serializers.ValidationError("Некоректний номер телефону.")
        return value
