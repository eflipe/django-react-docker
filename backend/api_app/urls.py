from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register("v1", views.PicturesViewSet, basename="api_app")

urlpatterns = router.urls
