from rest_framework import generics

from .models import Appointment
from .serializers import AppointmentSerializer


class AppointmentCreateView(generics.CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    authentication_classes: list = []  # публічна форма, без сесій/CSRF
    permission_classes: list = []
