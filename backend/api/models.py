from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils.translation import gettext_noop
from imagekit.processors import ResizeToFill
from imagekit.models import ImageSpecField


class Pet(models.Model):
    class PetSpecies(models.IntegerChoices):
        DOG = 1, gettext_noop("DOG")
        CAT = 2, gettext_noop("CAT")

    birth_date = models.DateField(
        verbose_name=_("Pet Birth Date"), auto_now=False, auto_now_add=False
    )
    name = models.CharField(verbose_name=_("Name of Pet"), max_length=255)
    species = models.Choices(PetSpecies)
    breed = models.CharField(verbose_name=_("Breed of Pet"), verblank=True)
    biography = models.TextField(verbose_name=_("Pet Biography"))
    pet_picture = models.ImageField(verbose_name=_("Profile Picture for pe"))
    pet_picture_comment = ImageSpecField(
        processors=[ResizeToFill(100, 100)],
        format="WEBM",
        options={"quality": 80},
    )
