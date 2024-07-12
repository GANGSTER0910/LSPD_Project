import os
from dotenv import load_dotenv, dotenv_values
from pymongo import *
from fastapi import *
from fastapi import Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.responses import RedirectResponse
from starlette.middleware.base import BaseHTTPMiddleware
from typing import *
from schema import *
import jwt
from jwt import JWT, jwk_from_dict
from datetime import *
from typing import Optional
from passlib.context import CryptContext

app = FastAPI()
load_dotenv()
origins = [
    "http://localhost:3000",
    "http://localhost:3000/login",
    "http://localhost:3000/signup",
    "http://localhost:3000/home"]    
    
app.add_middleware(
    CORSMiddleware,
    allow_origins= origins,
    allow_credentials= True,
    allow_methods=["*"],
    allow_headers=["*"],
)

link = os.getenv("DataBase_Link")
client1 = MongoClient(link)
db1 = client1['LSPD']
Secret_key = os.getenv("SECRET_KEY")
algorithm = os.getenv("Alogrithm")
access_token_expire_time = int(os.getenv("Access_Token_Expire_Time"))
pwd_context = CryptContext(schemes=["bcrypt"], deprecated= "auto")

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta]=None):
    to_encode = data.copy()
    jwt_instance = JWT()
    secret_key = jwk_from_dict({
        "k":Secret_key,
        "kty":"oct"
    })
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp":expire.isoformat()})
    encoded_jwt = jwt_instance.encode(to_encode, secret_key,alg= algorithm)
    print(encoded_jwt)
    return encoded_jwt

def create_cookie(token:str):
    response = JSONResponse(content= "Thank You! Succesfully Completed ")
    response.set_cookie(key="session",value=token,httponly=True,secure=True, samesite='none',max_age=3600)
    return response

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

@app.post('/checkAuthentication')
async def check(request: Request):
    session = request.cookies.get('session')
    print(session )
    if session:
        return JSONResponse(status_code=200, content={"message": "Authenticated"})
    else:
        return JSONResponse(status_code=307, content={"message": "Cookie Not Found"})

@app.post("/user")
async def create_user(user : User):
    try:
        user_dict = user.model_dump()
        user_dict["password"] = get_password_hash(user_dict["password"])
        # expire_timedelta = timedelta(minutes=access_token_expire_time)
        # user_token = create_access_token(user_dict,expire_timedelta)
        db1.get_collection('User').insert_one(user_dict)
        # return create_cookie(user_token)
        return "Succesfully"
    except:
        raise HTTPException(400)

@app.post("/users/login", response_model= List[User])
async def get_user(user: User_login):
    try:
        user1 = db1.get_collection('User').find_one({"email":user.email},{"_id":0})
    except:
        raise HTTPException(401, "Inncorect Username ot Password")
    if not verify_password(user.password, user1["password"]):
        raise HTTPException(401, "Inncorrect Username or Password")
    expire_timedelta = timedelta(minutes=access_token_expire_time)
    user_token = create_access_token(user1,expire_timedelta)
    return create_cookie(user_token)  
   
@app.post("/list")
async def get_list(role:User_list):
    user_list = db1.get_collection('User').find({"role":role.role})
    return[User(**i) for i in user_list ]

@app.post("/most_wanted_person")
async def add_most_Wanted_person(user : Most_Wanted):
    most_wanted_per = user.model_dump()
    db1.get_collection('Most_Wanted').insert_one(most_wanted_per)
    return user

@app.get("/most_wanted_list")
async def get_most_Wanted_list():
    most_wanted_list = db1.get_collection('Most_Wanted').find()
    return [Most_Wanted(**i) for i in most_wanted_list]

@app.post("/tips")
async def add_tip(tip: Tip):
    tip_add = tip.model_dump()
    db1.get_collection('Tip').insert_one(tip_add)
    return tip

@app.get("/tips/list")
async def get_all_tips():
    tip = db1.get_collection('Tip').find()
    return [Tip(**i) for i in tip]

@app.post("/announcements")
async def add_announcement(announce : Announcements):
    announce_add = announce.model_dump()
    db1.get_collection('Announcements').insert_one(announce_add)
    return announce

@app.get("/announcements/list")
async def get_announcement():
    announce = db1.get_collection('Announcements').find()
    return[Announcements(**i) for i in announce] 

@app.post("/Jobs")
async def add_job(job : Job):
    job_add = job.model_dump()
    db1.get_collection('Job').insert_one(job_add)
    return job

@app.get("/Jobs/list")
async def get_job_listing():
    job = db1.get_collection('Job').find()
    return[Job(**i) for i in job] 

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
    