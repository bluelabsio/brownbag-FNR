#import endpoints here
from app.routes.info import INFO_ROUTES

# Add endpoints here
ENDPOINTS = [
    INFO_ROUTES
]

def initialize_routes(api):
    for endpoint in ENDPOINTS:
        endpoint['routes'] = [f'/api{route}' for route in endpoint['routes']]
        api.add_resource(endpoint['api'], *endpoint['routes'])