import requests
from locations import glasgow_east,glasgow_west,glasgow_north,glasgow_south,glasgow_centre
from dotenv import load_dotenv
import os
import json 

# Api key load
load_dotenv()
api_key = os.getenv('VITE_API_KEY')
search_radius = '1000' # this is in meters - so a 1km radius across the given area
venue_type = 'bar' # this is in place of pubs 


# Function to locate different bars within each given location within glasgow
def locate_pubs(area_coords):
    search = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
    
    search_parameters = {
        'location': area_coords,
        'radius': search_radius,
        'type': venue_type,
        'key': api_key,
    }

    response = requests.get(search, params=search_parameters)
    
    with open('./src/backend/data.json', 'w') as f:
        json.dump(response.json(), f)

    if response.status_code == 200:
        query_data = response.json()
        print("Glasgow pubs located!: ")
        for bar in query_data['results']:
            print (bar)
            print('\n')
       
    else:
        print("Error in query!", response.status_code, response.text)


locate_pubs(glasgow_centre)


        


