from rest_framework import permissions

class IsOwnerOrReadOnlyUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
                
        return obj.user == request.user


class IsOwnerOrReadOnlyPet(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
                
        return obj.user == request.user


class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user:
            if request.user.is_superuser:
                return True
            else:
                return obj.blocker == request.user
        else:
            return False
