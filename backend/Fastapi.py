import os
from dotenv import load_dotenv, dotenv_values
from pymongo import *
from fastapi import *
from fastapi import Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.responses import RedirectResponse
from starlette.middleware.base import BaseHTTPMiddleware
from typing import *
from schema import *
import jwt
from bson import ObjectId
from jwt import JWT, jwk_from_dict
from datetime import *
import shutil
from typing import Optional
from passlib.context import CryptContext

app = FastAPI()
images_dir = os.path.abspath("D:\\LSPD_Project\\backend\\images")
app.mount("/images", StaticFiles(directory=images_dir), name="images")
load_dotenv()
origins = [
    "http://localhost:3000",
    "http://localhost:3000/login",
    "http://localhost:3000/signup",
    "http://localhost:3000/home",
    "http://localhost:5173",
    ]    
    
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

def getcookie(token:str):
    response = JSONResponse(content="Admin Login Succesfully")
    response.get

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
@app.post("/admin")
async def create_admin(name:str = Form(...),email:str = Form(...),password:str = Form(...), file: UploadFile = File(...)):
    try:
        file_location = os.path.join(images_dir, file.filename)
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        password = get_password_hash(password)   
        user_dict ={
            "name":name,
            "email":email,
            "password":password,
            "role":"admin",
            "img":file.filename
        }
        # expire_timedelta = timedelta(minutes=access_token_expire_time)
        # user_token = create_access_token(user_dict,expire_timedelta)
        db1.get_collection('Admin').insert_one(user_dict)
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
    user_list = db1.get_collection('Admin').find({"role":role.role})
    return[admin(**i) for i in user_list ]

@app.post("/most_wanted_person")
async def add_most_Wanted_person(name : str= Form(...),
    description : str= Form(...),
    duration:str= Form(...),
    age:int= Form(...),
    dob: str= Form(...),
    city: str= Form(...),
    rank:int= Form(...),
    commited:str= Form(...),
    sex:str= Form(...),
    height:float= Form(...),file: UploadFile = File(...)):
    file_location = os.path.join(images_dir, file.filename)
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    most_wanted_per ={
        "img" : file.filename,
        "description":description,
        "name" : name,
        "duration":duration,
        "age":age,
        "dob": dob,
        "city": city,
        "rank":rank,
        "commited":commited,
        "sex":sex,
        "height":height    
    }
    result = db1.get_collection('Most_Wanted').insert_one(most_wanted_per)
    most_wanted_per['_id'] = str(result.inserted_id)
    return most_wanted_per

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
async def add_announcement(title: str = Form(...),content: str = Form(...), by: str = Form(...),file: UploadFile = File(...)):
    file_location = os.path.join(images_dir, file.filename)
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    announce_add = {
        "title":title,
        "content" : content,
        "by":by,
        "img": file.filename
    }
    result = db1.get_collection('Announcements').insert_one(announce_add)
    announce_add['_id'] = str(result.inserted_id)
    return announce_add
 
@app.get("/announcements/list", response_model=List[Announcements])
async def get_announcements():
    announcements_cursor = db1.get_collection('Announcements').find()
    announcements = []
    for announce in announcements_cursor:
        announce["_id"] = str(announce["_id"])  # Convert ObjectId to string
        announcements.append(Announcements(**announce))
    return announcements

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
    