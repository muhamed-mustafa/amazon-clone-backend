import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;

  onModuleInit() {
    this.client = new Redis({
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT, 10),
    });
    console.log('✅ Redis client connected');
  }

  onModuleDestroy() {
    this.client.quit();
    console.log('🛑 Redis client disconnected');
  }

  async set<T>({
    key,
    value,
    ttlSeconds,
  }: {
    key: string;
    value: T;
    ttlSeconds?: number;
  }): Promise<void> {
    const val = JSON.stringify(value);
    if (ttlSeconds !== undefined) {
      await this.client.set(key, val, 'EX', ttlSeconds);
      return;
    }

    await this.client.set(key, val);
  }

  async get<T>(key: string): Promise<T | null> {
    const val = await this.client.get(key);
    return val && (JSON.parse(val) as T);
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
    console.log(`🔹 Redis DEL ${key}`);
  }
}
