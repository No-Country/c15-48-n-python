from django.forms import ImageField
from django.utils.translation import gettext_lazy as _
from django.db import models
from accounts.models import Pet


class Post(models.Model):
    pet = models.ForeignKey(
        Pet, verbose_name=_("Author of post"), on_delete=models.CASCADE
    )
    caption = models.CharField(verbose_name=_("Post description"), max_length=255)
    created_at = models.DateField(auto_now_add=True)


# TODO check more info
class PostImage(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    image = ImageField()
    alt_text = models.CharField(verbose_name=_("Alternative text"), max_length=2000)


# TODO check more info
class PostVideo(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    video = models.FileField()
    alt_text = models.CharField(verbose_name=_("Alternative text"), max_length=2000)


class Comment(models.Model):
    post = models.ForeignKey(
        Post, verbose_name=_("Comment from post"), on_delete=models.CASCADE
    )
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)


class Like(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["post", "pet"], name="unique pet per like")
        ]
