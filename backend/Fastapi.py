from pymongo import *
from fastapi import *
from fastapi.middleware.cors import CORSMiddleware
from typing import *
from schema import *

app = FastAPI()
    
origins = [
    "http://localhost:3000"
]    


app.add_middleware(
    CORSMiddleware,
    allow_origins= origins,
    allow_credentials= True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client1 = MongoClient("mongodb+srv://harshpanchal0910:edmJPEiESrbswYYh@lspd.ffxzjfm.mongodb.net/?retryWrites=true&w=majority&appName=LSPD")
db1 = client1['LSPD']

@app.post("/users")
async def create_user(user : User):
    user_dict = user.model_dump()
    db1.get_collection('User').insert_one(user_dict)
    return user

@app.get("/users/list", response_model= List[User])
async def get_user():
    user = db1.get_collection('User').find()
    return [User(**i) for i in user]

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

    
# .\venv\Scripts\activate