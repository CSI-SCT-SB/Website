from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/events")
def events():
    return render_template('event-details.html')

@app.route("/team")
def team():
    return render_template('teams.html')