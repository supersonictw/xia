export default defineEventHandler(
  () => useCat({
    status: 200,
    message: 'Ping? Pong!',
  })
);
