import smtplib
from email.message import EmailMessage
import os
from ..core.config import settings
from .otp import generate_otp

def send_otp_email(to_email: str, otp: str):
    try:
        msg = EmailMessage()
        msg["Subject"] = "Your OTP Code"
        msg["From"] = settings.from_email
        msg["To"] = to_email
        msg.set_content(f"Your OTP is: {otp}")

        with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as server:
            server.starttls()
            server.login(settings.smtp_user, settings.smtp_pass)
            server.send_message(msg)

        print("✅ OTP email sent")

    except Exception as e:
        print("❌ Email failed:", e)
        raise

def send_payment_done_email(to_email: str, amount: int):
    try:
        msg = EmailMessage()
        msg["Subject"] = "Thank you for your kindness"
        msg["From"] = settings.from_email
        msg["To"] = to_email
        msg.set_content(f"your donation of ${amount} has been successfully received")

        with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as server:
            server.starttls()
            server.login(settings.smtp_user, settings.smtp_pass)
            server.send_message(msg)
        
        print("acknowledgement email send")
    except Exception as e:
        print("ack email failed", e)
        raise
