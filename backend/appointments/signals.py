from django.db import transaction
from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Appointment
from .notifications import notify_new_appointment


@receiver(post_save, sender=Appointment)
def appointment_created(sender, instance, created, **kwargs):
    if created:
        transaction.on_commit(lambda: notify_new_appointment(instance))