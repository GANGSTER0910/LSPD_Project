from pydantic import BaseModel, Field
from typing import Optional

class User(BaseModel):
    username : str
    email : str
    password : str
    role : Optional[str] = "user"

class User_login(BaseModel):
    email : str
    password: str
    
class User_list(BaseModel):
    role : str

class Most_Wanted(BaseModel):
    name : str
    alais : Optional[str] = None
    description : str

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

