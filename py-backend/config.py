"""Flask config."""
from os import environ, path
import logging

logger = logging.getLogger("config")

class Config:
    """Flask configuration variables."""

    # General Config
    FLASK_APP = environ.get('FLASK_APP')
    FLASK_ENV = environ.get('FLASK_ENV')
    SECRET_KEY = environ.get('SECRET_KEY')

    logger.info("Configs loaded.")
