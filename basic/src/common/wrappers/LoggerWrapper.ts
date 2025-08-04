export class LoggerWrapper {
  constructor() {
    console.log('[LoggerWrapper] Constructed');
  }

  async wrap(context: { req: any, res: any }, next: () => Promise<any>) {
    console.log('[LoggerWrapper] ➜ Before handler');
    const result = await next();
    console.log('[LoggerWrapper] ➜ After handler');
    return result;
  }
}
