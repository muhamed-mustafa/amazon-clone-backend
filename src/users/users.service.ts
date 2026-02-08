import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class UsersService {
  constructor(private readonly redisService: RedisService) {}

  async testRedisConnection() {
    await this.redisService.set<{ message: string }>({
      key: 'test-key',
      value: { message: 'Redis is working!' },
      ttlSeconds: 60,
    });
    const value = await this.redisService.get('test-key');
    return `✅ Redis Test Successful: ${JSON.stringify(value)}`;
  }
}
