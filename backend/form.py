from pydantic import BaseModel
from pydantic_extra_types.phone_numbers import PhoneNumberValidator


class SendLinkForm(BaseModel):
    name: str
    number: PhoneNumberValidator(default_region="US")
