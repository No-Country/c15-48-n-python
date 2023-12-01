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
    class Meta:
        model = Comment
        fields = '__all__'

    def validate_description(self, value):
        if len(value) > 2000:
            raise serializers.ValidationError("The description must be less than 2000 characters")
        return value
    
    def create(self, validated_data):
        comment = Comment.objects.create(**validated_data)
        return comment
    
class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'

    def create(self, validated_data):
        return Like.objects.create(**validated_data)