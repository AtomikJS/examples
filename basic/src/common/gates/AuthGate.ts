import { CanPass, RequestFrame } from '@atomikjs/runtime';

export class AuthGate implements CanPass {
  pass(frame: RequestFrame): boolean {
    const auth = frame.req.headers['authorization'];
    console.log(`Authorization header: ${auth}`);
    return auth === 'Bearer token123';
  }
}
