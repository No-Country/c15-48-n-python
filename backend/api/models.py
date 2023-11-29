from django.utils.translation import gettext_lazy as _
from django.utils.translation import gettext_noop
from imagekit.processors import ResizeToFill
from imagekit.models import ImageSpecField
from django.db import models


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


class Follower(models.Model):
    followed = models.ForeignKey(
        Pet, verbose_name=_("Pet being followed"), on_delete=models.CASCADE
    )
    follower = models.ForeignKey(
        Pet, verbose_name=_("Pet following another pet"), on_delete=models.CASCADE
    )
    created_at = models.DateField(auto_now_add=True)

    class Meta:
        constraints = [
            models.CheckConstraint(
                name="not_same", check=~models.Q(first=models.F("second"))
            )
        ]
