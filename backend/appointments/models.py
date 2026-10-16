from django.db import models


class Appointment(models.Model):
    class Status(models.TextChoices):
        NEW = "new", "Нова"
        CONTACTED = "contacted", "Зв'язались"
        DONE = "done", "Завершена"

    first_name = models.CharField("Ім'я", max_length=100)
    last_name = models.CharField("Прізвище", max_length=100)
    phone = models.CharField("Телефон", max_length=32)
    email = models.EmailField("E-mail")
    status = models.CharField("Статус", max_length=12, choices=Status.choices, default=Status.NEW)
    created_at = models.DateTimeField("Створено", auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Запис на прийом"
        verbose_name_plural = "Записи на прийом"

    def __str__(self) -> str:
        return f"{self.last_name} {self.first_name} ({self.phone})"
