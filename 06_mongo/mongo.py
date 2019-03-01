# Team Nemo -- Johnson Li, Tabassum Fabiha
# SoftDev2 pd07
# K06 -- Yummy Mongo Py
# 2019-02-28  

import pymongo

SERVER_ADDR = '206.81.0.191'

connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def borough_search(borough):
  return list(collection.find({'borough': borough.title()}))

def zipcode_search(zipcode):
  return list(collection.find({'address.zipcode': str(zipcode)}))

def zipgrade_search(zipcode, grade):
  # The 0 in query for grade is so that it only looks at the first element in the array
  # of grades. The first element is the most recent grade.
  return list(collection.find({'$and': [{'address.zipcode': str(zipcode)}, 
                                        {'grades.0.grade': grade.upper()}  
                                       ]}                     
                             ))

def zipscore_search(zipcode, score):
  return list(collection.find({'$and': [{'address.zipcode': str(zipcode)}, 
                                        {'grades.0.score': {'$lt': int(score)}}  
                                       ]}                     
                             ))

# find a restaurant that is a certain (zipcode, cuisine, and grade,) 
# or (if it is in a certain borough, 
# but only if the restaurant that matches the borough is a certain cuisine)
def query(zipcode, cuisine, grade, borough):
  query = {
    '$or': [
              {'$and': [
                        {'address.zipcode': str(zipcode)},
                        {'cuisine': cuisine.title()},
                        {'grades.0.grade': grade.upper()},
                       ]
              },

              {'$and': [
                        {'borough': borough.title()},
                        {'cuisine': cuisine.title()}
                       ]
              }
           ]
  }
  
  return list(collection.find(query))

# print(borough_search('Brooklyn'))
# print(zipcode_search(10282))
# print(zipgrade_search('10282', 'a'))
# print(zipscore_search('10282', 3))
# print(query('11220', 'american', 'a', 'manhattan'))
# print(query('11220', 'american', 'a', ''))