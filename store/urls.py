from django.urls import path
from .views import Cart,Prod,Login,Checkout,Signup,logout,Orders
from .middlewares import LoginCheckMiddleware,LogoutCheckMiddleware

urlpatterns = [
    path('cart',Cart.as_view(), name='cart'),
    path('prod',Prod.as_view(), name='prod'),
    path('signup',LogoutCheckMiddleware(Signup.as_view()), name='signup'),
    path("login",LogoutCheckMiddleware(Login.as_view()),name='login'),
    path("logout", LoginCheckMiddleware(logout),name='logout'),
    path("checkout",Checkout.as_view(),name='checkout'),
    path('order',LoginCheckMiddleware(Orders.as_view()), name='order'),

]
