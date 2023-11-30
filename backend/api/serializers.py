from rest_framework import serializers
from .models import *

class PetSerializer(serializers.ModelSerializer):
    species = serializers.ChoiceField(choices=Pet.PetSpecies.choices)
    class Meta:
        model: Pet
        fields = '__all__'
