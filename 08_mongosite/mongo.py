# Team Bob
# SoftDev2 pd07
# K08 -- Ay Mon, Go Git It From Yer Flask
# 2019-03-06

'''
dataset: China GDP, the dataset contains the value of China's gdp from 1960 up to and including 2017
stored at: http://api.worldbank.org/countries/CHN/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json
import mechanism: The function import_data() takes a file name as an argument and opens the file.
The data of the file is then parsed using json.load(). The data is looped through and each entry
gets inserted into the db using .insert().
'''

import json

import pymongo

def import_data(ip, filename):
    connection = pymongo.MongoClient(ip)
    db = connection['watermelonsoda']
    collection = db['chinagdp']

    # if collection exists, delete then remake to avoid duplicate data
    if collection.count() > 0:
        collection.drop()
        collection = db['chinagdp']
    
    with open(filename) as f:
        data = json.load(f)
        for item in data[1]:
            collection.insert(item)

# returns the document that matches the year given
def year_search(ip, year):
    connection = pymongo.MongoClient(ip)
    db = connection['watermelonsoda']
    collection = db['chinagdp']
    return list(collection.find({'date': str(year)}))

# returns all documents that are between year(inclusive) to year1(inclusive)
def yearbtwn_search(ip, year, year1):
    year = int(year)
    year1 = int(year1)
    connection = pymongo.MongoClient(ip)
    db = connection['watermelonsoda']
    collection = db['chinagdp']
    if year < 0 or year1 < 0:
        print('positive years only please')
        return

    if year > year1:
        year, year1 = year1, year
    
    query = {'$and': [
                {'date': {'$gte': str(year)}},
                {'date': {'$lte': str(year1)}}
            ]
        }

    return list(collection.find(query))

# returns all documents for when china's gdp is <=(option = 0) the value given or
# all documents for when china's gdp is >=(option = 1) the value given
# default is less than
def gdp_search(ip, value, option=0):
    connection = pymongo.MongoClient(ip)
    db = connection['watermelonsoda']
    collection = db['chinagdp']
    if option == 0:
        return list(collection.find({'value': {'$lte': str(value)}}))
    elif option == 1:
        return list(collection.find({'value': {'$gte': str(value)}}))
    else:
        print('enter a valid option please (0 = less than, 1 = greater than')


# print(year_search(2017))
# print(yearbtwn_search(2016, 2013))
# print(gdp_search(863746717503.789, 0))

