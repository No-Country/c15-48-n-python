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
        BIRD = 3, gettext_noop("BIRD")
        RABBIT = 4, gettext_noop("RABBIT")
        HORSE = 5, gettext_noop("HORSE")
        HAMSTER = 6, gettext_noop("HAMSTER")
        TURTLE = 7, gettext_noop("TURTLE")
        SHEEP = 8, gettext_noop("SHEEP")
        CHICKEN = 9, gettext_noop("CHICKEN")
        PIG = 10, gettext_noop("PIG")

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    nick = models.CharField(verbose_name=_("User of pet"), max_length=255, unique=True)
    birth_date = models.DateField(
        verbose_name=_("Pet Birth Date"), auto_now=False, auto_now_add=False
    )
    name = models.CharField(verbose_name=_("Name of pet"), max_length=255)
    species = models.IntegerField(
        verbose_name=_("Species of pet"), choices=PetSpecies.choices
    )
    pet_picture = models.URLField(null=True)

    followed = models.PositiveIntegerField(default=0)
    followers = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.nick

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

    def save(self, *args, **kwargs):
        if self.followed is not None:
            self.followed.followed += 1
            self.follower.followers += 1

            self.followed.save()
            self.follower.save()
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        if self.followed is not None:
            self.followed.followers -= 1
            self.follower.followed -= 1

            self.followed.save()
            self.follower.save()
        super().delete(*args, **kwargs)


class Blocker(models.Model):
    blocked = models.ForeignKey(
        User,
        verbose_name=_("User being blocked"),
        on_delete=models.CASCADE,
        related_name="blocked_user",
    )
    blocker = models.ForeignKey(
        User,
        verbose_name=_("User blocking another user"),
        related_name="blocker_user",
        on_delete=models.CASCADE,
    )

    class Meta:
        constraints = [
            models.CheckConstraint(
                name="not_same_blocker", check=~models.Q(blocked=models.F("blocker"))
            )
        ]
