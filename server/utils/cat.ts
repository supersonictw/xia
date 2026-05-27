export interface UseCatParams {
  status?: number;
  message?: string;
}

/**
 * Generates an ASCII cat response or string.
 * @param {UseCatParams} params - Destructured parameters.
 * @param {number} [params.status] - Optional HTTP status code.
 * @param {string} [params.message] - Optional message prefix.
 * @returns {Response|string} The formatted ASCII cat.
 */
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
    },
  }) as T;
}
