from rest_framework import serializers
from .models import Blocker, Follower, Pet
from django.conf import settings


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ("birth_date", "name", "species", "breed", "biography", "pet_picture")
        lookup_field = "name"


class PetAbridgedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ("name", "pet_picture_comment")


class AccountSerializer(serializers.ModelSerializer):
    pets = PetAbridgedSerializer(many=True, read_only=True)

    class Meta:
        model = settings.AUTH_USER_MODEL
        fields = ("username", "email", "id", "pets")
        lookup_field = "username"


class FollowerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Follower
        fields = ("followed", "follower", "created_at")
        lookup_field = "followed"


class BlockerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Blocker
        fields = ("blocked", "blocker")
        lookup_field = "blocked"
