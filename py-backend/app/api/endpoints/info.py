from flask_restful import Resource
from flask import Response
import json

class InfoApi(Resource):
    def get(self):
        from app.routes import ENDPOINTS
        return Response(
            json.dumps({
                "endpoints": {
                    endpoint['name']: endpoint['routes']
                    for endpoint in ENDPOINTS
                }
            }),
            mimetype="application/json",
            status=200
        )
    
