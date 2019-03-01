# Team watermelonsoda -- Johnson Li, Kenny Li
# SoftDev2 pd07
# K07 -- Import/Export Bank
# 2019-03-01

import json

import pymongo

SERVER_ADDR = '157.230.230.46'

connection = pymongo.MongoClient(SERVER_ADDR)
db = connection['watermelonsoda']
collection = db['chinagdp']

with open('chinagdp.json', 'r') as data:
    collection.insert(json.load(data))
