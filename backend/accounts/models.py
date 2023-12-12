from django.db import models
from django.utils.translation import gettext_noop
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    pass


class Pet(models.Model):
    class PetSpecies(models.IntegerChoices):
        DOG = 1, gettext_noop("DOG")
        CAT = 2, gettext_noop("CAT")

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    birth_date = models.DateField(
        verbose_name=_("Pet Birth Date"), auto_now=False, auto_now_add=False
    )
    name = models.CharField(verbose_name=_("Name of pet"), max_length=255)
    species = models.IntegerField(
        verbose_name=_("Species of pet"), choices=PetSpecies.choices
    )
    breed = models.CharField(verbose_name=_("Breed of pet"), blank=True, max_length=255)
    biography = models.TextField(verbose_name=_("Pet biography"))
    pet_picture = models.URLField()
    pet_picture_comment = models.URLField()


class Follower(models.Model):
    followed = models.ForeignKey(
        Pet,
        verbose_name=_("Pet being followed"),
        on_delete=models.CASCADE,
        related_name="followed_pet",
    )
    follower = models.ForeignKey(
        Pet, verbose_name=_("Pet following another pet"), on_delete=models.CASCADE
    )
    created_at = models.DateField(auto_now_add=True)

    class Meta:
        constraints = [
            models.CheckConstraint(
                name="not_same_follower", check=~models.Q(followed=models.F("follower"))
            )
        ]


class Blocker(models.Model):
    blocked = models.ForeignKey(
        User,
        verbose_name=_("User being blocked"),
        on_delete=models.CASCADE,
        related_name="blocked_pet",
    )
    blocker = models.ForeignKey(
        User, verbose_name=_("User blocking another user"), on_delete=models.CASCADE
    )

    class Meta:
        constraints = [
            models.CheckConstraint(
                name="not_same_blocker", check=~models.Q(blocked=models.F("blocker"))
            )
        ]
