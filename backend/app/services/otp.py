from redis.asyncio import Redis
import random
from ..core.config import settings
import asyncio
import redis

redis_client = Redis(host=settings.redis_host, port=settings.redis_port, decode_responses=True)

def generate_otp():
    return str(random.randint(100000, 999999))

async def store_otp(email: str, otp: str):
    await redis_client.setex(
        f"otp:{email}",
        int(settings.otp_exp),
        otp
    )