# Team watermelonsoda -- Johnson Li, Kenny Li
# SoftDev2 pd07
# K07 -- Import/Export Bank
# 2019-03-01

'''
dataset: China GDP, the dataset contains the value of China's gdp from 1960 up to and including 2017
stored at: http://api.worldbank.org/countries/CHN/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json
import mechanism: The function import_data() takes a file name as an argument and opens the file.
The data of the file is then parsed using json.load(). The data is looped through and each entry
gets inserted into the db using .insert().
'''

import json

import pymongo

SERVER_ADDR = '206.81.0.191'

connection = pymongo.MongoClient(SERVER_ADDR)
db = connection['watermelonsoda']
collection = db['chinagdp']

def import_data(filename):
    with open(filename) as f:
        data = json.load(f)
        for item in data[1]:
            collection.insert(item)

# import_data('chinagdp.json')

# returns the document that matches the year given
def year_search(year):
    return list(collection.find({'date': str(year)}))

# returns all documents that are between year(inclusive) to year1(exclusive)
def yearbtwn_search(year, year1):
    if year < 0 or year1 < 0:
        print('positive years only please')
        return

    if year > year1:
        year, year1 = year1, year
    
    query = {'$and': [
                {'date': {'$gte': str(year)}},
                {'date': {'$lt': str(year1)}}
            ]
        }

    return list(collection.find(query))

# returns all documents for when china's gdp is <=(option = 0) the value given or
# all documents for when china's gdp is >=(option = 1) the value given
# default is less than
def gdp_search(value, option=0):
    if option == 0:
        return list(collection.find({'value': {'$lte': str(value)}}))
    elif option == 1:
        return list(collection.find({'value': {'$gte': str(value)}}))
    else:
        print('enter a valid option please (0 = less than, 1 = greater than')


print(year_search(2017))
# print(yearbtwn_search(2016, 2013))
# print(gdp_search(863746717503.789, 0))

