# gunicorn_config.py

# Worker configuration
workers = 4  # Number of worker processes
worker_class = 'gevent'  # Worker type - gevent works well for Flask
worker_connections = 1000  # Maximum number of simultaneous connections
timeout = 30  # Worker timeout in seconds

# Server socket configuration
bind = "0.0.0.0:$PORT"  # Bind to the port specified by Render
forwarded_allow_ips = '*'  # Trust X-Forwarded-* headers

# Logging configuration
accesslog = '-'  # Log to stdout
errorlog = '-'  # Log errors to stdout
loglevel = 'info'

# Process naming
proc_name = 'gunicorn_flask_app'

# Graceful timeout
graceful_timeout = 30