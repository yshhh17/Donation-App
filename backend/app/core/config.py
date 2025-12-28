from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    secret_key: str
    algorithm: str
    access_token_expire_time: int
    # razorpay_key_id: str
    # razorpay_key_secret: str

    class Config:
        env_file = ".env"

settings = Settings()
