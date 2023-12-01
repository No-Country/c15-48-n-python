from rest_framework import serializers
from .models import Comment

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