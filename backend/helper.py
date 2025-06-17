import os
import urllib.parse
import uuid


FRONTEND_HOST = os.environ.get("DOC_INVITE_FRONTEND_HOST") or "http://localhost:3000"


def generate_link(name):
    """Randomized link generation"""
    unique_uuid = uuid.uuid4()
    quoted_name = urllib.parse.quote(name)
    link = f"{FRONTEND_HOST}/visit/{quoted_name}?ref={unique_uuid}"
    return link


def create_message(link):
    """Message for patient"""
    message = f"Visit my doctor profile page at: {link}"
    return message


def send_text(message, number):
    """Send SMS to patient. To be implemented."""
    pass
