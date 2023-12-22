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
    post = models.ForeignKey(Post, related_name="post_image", on_delete=models.CASCADE)
    image = models.URLField()
    alt_text = models.CharField(
        verbose_name=_("Alternative text"), max_length=2000, null=True
    )


# TODO check more info
class PostVideo(models.Model):
    post = models.ForeignKey(Post, related_name="post_video", on_delete=models.CASCADE)
    video = models.URLField()
    alt_text = models.CharField(
        verbose_name=_("Alternative text"), max_length=2000, null=True
    )


class Comment(models.Model):
    post = models.ForeignKey(
        Post,
        verbose_name=_("Comment from post"),
        related_name="post_comment",
        on_delete=models.CASCADE,
    )
    pet = models.ForeignKey(Pet, related_name="pet_comment", on_delete=models.CASCADE)
    description = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)


class Like(models.Model):
    post = models.ForeignKey(Post, related_name="post_like", on_delete=models.CASCADE)
    pet = models.ForeignKey(Pet, related_name="pet_like", on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["post", "pet"], name="unique pet per like")
        ]
