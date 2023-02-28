from django.db import models


class Property(models.Model):
    name = models.CharField("Name", max_length=240)
    address = models.CharField("Address", max_length=240)
    document = models.CharField("Document", max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name
