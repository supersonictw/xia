export interface UseCatParams {
  status?: number;
  message?: string;
}

export function useCat<T extends Response | string = Response>({
  status = 200,
  message = '',
}: UseCatParams = {}): T {
  const body = (message ? `> ${message}\n---\n` : '') +
    '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⡶⢶⣦⡀\n' +
    '⠀⠀⠀⣴⡿⠟⠷⠆⣠⠋⠀⠀⠀⢸⣿\n' +
    '⠀⠀⠀⣿⡄⠀⠀⠀⠈⠀⠀⠀⠀⣾⡿\n' +
    '⠀⠀⠀⠹⣿⣦⡀⠀⠀⠀⠀⢀⣾⣿\n' +
    '⠀⠀⠀⠀⠈⠻⣿⣷⣦⣀⣠⣾⡿\n' +
    '⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⡿⠟\n' +
    '⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠀⠀⠀⢠⠏⡆⠀⠀⠀⠀⠀⢀⣀⣤⣤⣤⣀⡀\n' +
    '⠀⠀⠀⠀⠀⡟⢦⡀⠇⠀⠀⣀⠞⠀⠀⠘⡀⢀⡠⠚⣉⠤⠂⠀⠀⠀⠈⠙⢦⡀\n' +
    '⠀⠀⠀⠀⠀⡇⠀⠉⠒⠊⠁⠀⠀⠀⠀⠀⠘⢧⠔⣉⠤⠒⠒⠉⠉⠀⠀⠀⠀⠹⣆\n' +
    '⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⣤⠶⠶⢶⡄⠀⠀⠀⠀⢹⡆\n' +
    '⠀⣀⠤⠒⠒⢺⠒⠀⠀⠀⠀⠀⠀⠀⠀⠤⠊⠀⢸⠀⡿⠀⡀⠀⣀⡟⠀⠀⠀⠀⢸⡇\n' +
    '⠈⠀⠀⣠⠴⠚⢯⡀⠐⠒⠚⠉⠀⢶⠂⠀⣀⠜⠀⢿⡀⠉⠚⠉⠀⠀⠀⠀⣠⠟\n' +
    '⠀⠠⠊⠀⠀⠀⠀⠙⠂⣴⠒⠒⣲⢔⠉⠉⣹⣞⣉⣈⠿⢦⣀⣀⣀⣠⡴⠟\n\n' +
    '> Believe me I can fly, I\'m singing in the sky.';

  if (typeof (undefined as unknown as T) === 'string') {
    return body as T;
  }

  return new Response(body, {
    status, headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    }
  }) as T;
}
