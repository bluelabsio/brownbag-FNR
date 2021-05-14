"""Application entry point."""
from app import create_app

# https://stackoverflow.com/a/63144071/3447555
class ReverseProxied(object):
    """
    Because we are reverse proxied from an aws load balancer
    use environ/config to signal https
    since flask ignores preferred_url_scheme in url_for calls
    """

    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        # if one of x_forwarded or preferred_url is https, prefer it.
        forwarded_scheme = environ.get("HTTP_X_FORWARDED_PROTO", None)
        preferred_scheme = app.config.get("PREFERRED_URL_SCHEME", None)

        if "https" in [forwarded_scheme, preferred_scheme]:
            environ["wsgi.url_scheme"] = "https"
        return self.app(environ, start_response)

app = create_app()
app.wsgi_app = ReverseProxied(app.wsgi_app)

if __name__ == "__main__":
    app.run(host='localhost', port='8080', debug=True)
