from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from .models import Blocker, Follower, Pet, User


class PetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pet
        fields = ("user", "birth_date", "name", "species", "breed", "biography", "pet_picture")
        read_only_fields = ("user",)


class PetAbridgedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ("name", "pet_picture_comment")


class AccountSerializer(serializers.ModelSerializer):
    pets = PetAbridgedSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ("username", "first_name","email","password", "pets")
        extra_kwargs = {
            "password":{"write_only":True}
        }

    def validate_password(self, value):
        validate_password(value)
        return value
    
    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class FollowerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Follower
        fields = ("followed", "follower", "created_at")


class BlockerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Blocker
        fields = ("blocked", "blocker")
