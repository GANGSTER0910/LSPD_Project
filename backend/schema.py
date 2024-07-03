from pydantic import BaseModel, Field
# from bson import ObjectId
from typing import Optional
# from database import *
class User(BaseModel):
    username : str
    email : str
    password : str
    role : Optional[str] = "user"

class Most_Wanted(BaseModel):
    name : str
    alais : Optional[str] = None
    description : str
    photo : str

class Tip(BaseModel):
    description : str
    
class Announcements(BaseModel):
    title: str
    content : str
    like : Optional[int] = 0

class Job(BaseModel):
    position: str
    description:str
    requirements: str
    application_procedure : str


# async def start_mongodb():
#     client1 = pymongo.MongoClient("mongodb://localhost:27017/")
#     db1 = client1['LSPD']
#     return "connected"

