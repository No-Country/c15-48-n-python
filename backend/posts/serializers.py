from rest_framework import serializers
from .models import Post, Pet, Like, Comment, PostImage, PostVideo
from accounts.serializers import PetAbridgedSerializer


class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = ["image", "alt_text"]


class PostVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostVideo
        fields = ["video", "alt_text"]


class PostSerializer(serializers.ModelSerializer):
    pet = PetAbridgedSerializer(read_only=True)
    post_image = PostImageSerializer(many=True)
    post_video = PostVideoSerializer(many=True, required=False)

    class Meta:
        model = Post
        fields = ["id", "pet", "post_image", "post_video", "caption", "created_at"]
        read_only_fields = ("created_at",)

    def create(self, validated_data):
        images_data = validated_data.pop("post_image")

        videos_data = validated_data.pop("post_video", None)
        post = Post.objects.create(**validated_data)

        for image_data in images_data:
            PostImage.objects.create(post=post, **image_data)

        if videos_data:
            for video_data in videos_data:
                PostVideo.objects.create(post=post, **video_data)

        return post


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