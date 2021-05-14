"""Initialize Flask app."""
from flask import Flask
from flask_restful import Api
import logging

logger = logging.getLogger("app")


def create_app():
    """Construct core Flask application with embedded Dash app."""
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')
    app.debug = True
    # session.init_app(app)

    api = Api(app)

    logger.info("Starting app")
    with app.app_context():
        from app.routes import initialize_routes 
        initialize_routes(api)
        return app
