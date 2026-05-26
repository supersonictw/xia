export default defineEventHandler(
  () => useCat({
    status: 404,
    message: 'Resource not exists.',
  }),
);
