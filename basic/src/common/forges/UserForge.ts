import { CanForge } from '@atomikjs/runtime';

export class UserForge implements CanForge {
  forge(body: any) {
    if (!body.name) {
      throw new Error('Missing required field: name');
    }
    if (typeof body.name !== 'string') {
      throw new Error('Invalid type for field: name');
    }
    if (body.name.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
    return {
      ...body,
      name: body.name.trim(),
      createdAt: new Date().toISOString()
    };
  }
}
