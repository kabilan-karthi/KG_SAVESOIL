from flask import Flask, jsonify, render_template
from flask_cors import CORS
import random
from datetime import datetime
import requests
import re
import time


app = Flask(__name__)
CORS(app)  # Enable CORS to allow frontend to make cross-origin requests

# Sample list of Twitter URLs that will be rotated
TWITTER_URLS = []

def get_tweets():
    link = "https://docs.google.com/spreadsheets/d/1awmjPTnhTKV-m1ZjTzfpqXJAYCRDqmIymZXV4nffGQQ/edit?resourcekey=&gid=1707978977#gid=1707978977"
    gid = link.split("gid=")[1].split("#")[0]  # Extract GID
    base_url = link.split("/edit")[0]  # Base URL before /edit
    csv_url = f"{base_url}/export?format=csv&gid={gid}"  # Build CSV export link


    response = requests.get(csv_url)

    with open("data.csv", "w") as file:

        file.write(response.text)


    links = []
    with open("data.csv") as file:
        data = file.readlines()
        for line in data[6:]:
                    line = line.split(",")
                    if len(line) < 3:
                        continue
                    links.append(line[1].strip())
            
        return links


@app.route('/api/tweets', methods=['GET'])
def get_twitter_urls():
    def is_valid_url(url):
        # Simple regex to check if the URL is valid
        regex = re.compile(
            r'^(https?://)?'  # http:// or https://
            r'(x\.com|twitter\.com)/[a-zA-Z0-9_]+/status/\d+'  # x.com or twitter.com with status path
            r'(\?t=[a-zA-Z0-9_-]+&s=\d+)?$',  # Optional query parameters like ?t=...&s=...
            re.IGNORECASE
        )
        return re.match(regex, url) is not None

    # Select unique URLs not recently used
    available_urls = []
    link_set = get_tweets()[::-1]
    for i in link_set:
        if len(available_urls) >= 25:
            break
        temp = i.replace('x.com', 'twitter.com')
        if temp in available_urls or not is_valid_url(temp):
            continue
        else:
            available_urls.append(temp)

    response = {
        'urls': available_urls
    }

    return jsonify(response)

@app.route('/tweet_wall', methods=['GET'])
def tweet_wall():
    return render_template('tweet_wall.html')

@app.route('/', methods=['GET'])
def save_soil():
    return render_template('savesoil.html')


if __name__ == '__main__':
    app.run(debug=True)

# Requirements:
# pip install flask flask-cors