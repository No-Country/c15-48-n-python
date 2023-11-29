from django.utils.translation import gettext_lazy as _
from django.utils.translation import gettext_noop
from imagekit.processors import ResizeToFill
from imagekit.models import ImageSpecField
from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Pet(models.Model):
    class PetSpecies(models.IntegerChoices):
        DOG = 1, gettext_noop("DOG")
        CAT = 2, gettext_noop("CAT")

    birth_date = models.DateField(
        verbose_name=_("Pet Birth Date"), auto_now=False, auto_now_add=False
    )
    name = models.CharField(verbose_name=_("Name of pet"), max_length=255)
    species = models.IntegerField(
        verbose_name=_("Species of pet"), choices=PetSpecies.choices
    )
    breed = models.CharField(verbose_name=_("Breed of pet"), blank=True, max_length=255)
    biography = models.TextField(verbose_name=_("Pet biography"))
    pet_picture = models.ImageField(verbose_name=_("Profile picture for pet"))
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

    # class Meta:
    #     constraints = [
    #         models.CheckConstraint(
    #             name="not_same_follower", check=~models.Q(followed=models.F("follower"))
    #         )
    #     ]


class Blocker(models.Model):
    blocked = models.ForeignKey(
        User, verbose_name=_("User being blocked"), on_delete=models.CASCADE
    )
    blocker = models.ForeignKey(
        User, verbose_name=_("User blocking another user"), on_delete=models.CASCADE
    )

    # class Meta:
    #     constraints = [
    #         models.CheckConstraint(
    #             name="not_same_blocker", check=~models.Q(blocked=models.F("blocker"))
    #         )
    #     ]
