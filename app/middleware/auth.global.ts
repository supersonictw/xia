import Constant from '~/client/data/const';

export default defineNuxtRouteMiddleware((to) => {
  if (!import.meta.client) return;

  const token = localStorage.getItem(Constant.LOCAL_STORAGE.ACCESS_KEY);
  const isPublicPage = to.path === '/' || to.path === '/login';

  if (!token && !isPublicPage) {
    return navigateTo('/login');
  }

  if (token && to.path === '/login') {
    return navigateTo('/dashboard');
  }
});
