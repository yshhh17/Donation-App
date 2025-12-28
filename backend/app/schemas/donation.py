class DonationCreate(BaseModel):
    amount: int  # in INR

class DonationResponse(BaseModel):
    id: int
    amount: int
    status: str
    payment_reference: str | None
    created_at: datetime
