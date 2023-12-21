from rest_framework import serializers
from .models import Post, Pet, Like, Comment
from accounts.serializers import PetAbridgedSerializer

class PostSerializer(serializers.ModelSerializer):
    pet = PetAbridgedSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ['pet', 'image', 'video', 'caption', 'created_at']
        read_only_fields = ('created_at', )




class CommentSerializer(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(read_only=True)
    pet = PetAbridgedSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['post', 'pet', 'description', 'created_at']
        read_only_fields = ('created_at', )
    

class LikeSerializer(serializers.ModelSerializer):
    pet = PetAbridgedSerializer(read_only=True)
    post = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Like
        fields = ['pet', 'post']