from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):
    pet = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['pet', 'caption', 'created_at']
        read_only_fields = ('created_at', )


class PostImageSerializer(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = PostImage
        fields = ['post', 'image', 'alt_text']


class PostVideoSerializer(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = PostVideo
        fields = ['post', 'video', 'alt_text']


class CommentSerializer(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('created_at', )
    

class LikeSerializer(serializers.ModelSerializer):
    pet = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    post = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Like
        fields = '__all__'