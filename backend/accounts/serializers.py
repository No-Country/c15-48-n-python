from rest_framework import serializers
from .models import Blocker, Follower, Pet, User
from django.conf import settings


class PetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pet
        fields = ("user", "birth_date", "name", "species", "breed", "biography", "pet_picture")
        read_only_field = ("user",)
        lookup_field = "name"



class PetAbridgedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ("name", "pet_picture_comment")


class AccountSerializer(serializers.ModelSerializer):
    pets = PetAbridgedSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ("id", "username", "email", "pets")
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
