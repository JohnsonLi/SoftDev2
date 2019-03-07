# Team Bob
# SoftDev2 pd07
# K08 -- Ay Mon, Go Git It From Yer Flask
# 2019-03-06

import os

from flask import Flask, render_template, request, flash, redirect, url_for

import mongo
       
app = Flask(__name__)
SERVER_ADDR = '206.81.0.191'

app.secret_key = os.urandom(32)

@app.route('/')
def home():
    return render_template('index.html') 

@app.route('/connect')
def connect():
    ip = request.args['ip'].strip()
    if ip:
        print('IP SET')
        SERVER_ADDR = ip

        try:
            mongo.import_data(SERVER_ADDR, 'chinagdp.json')
            return redirect(url_for('options'))
        except:
            flash('enter a valid ip please')
            return render_template('index.html')
    
    else:
        flash('enter an ip please')
        return render_template('index.html')
    
    
@app.route('/options')
def options():
    return render_template('options.html')

@app.route('/result')
def result():
    if request.args['option'] == 'year':
        year = request.args['year']
        if int(year) > 2017 or int(year) < 1960:
            flash('enter a valid year please')
            return redirect(url_for('options'))

        data = mongo.year_search(SERVER_ADDR, year)
        return '<h3> GDP of China in {} was ${} </h3>'.format(year,data[0]['value'])

    if request.args['option'] == 'between':
        year0 = request.args['year0']
        year1 = request.args['year1']
        data = mongo.yearbtwn_search(SERVER_ADDR, year0, year1)
        parsed = []
        for item in data:
            parsed.append({'year': item['date'], 'gdp': item['value']})
        return render_template('results.html', data=parsed)

    if request.args['option'] == 'abovebelow':
        if request.args['abovebelow'] == 'above':
            data = mongo.gdp_search(SERVER_ADDR, request.args['value'], 1)
        else:
            data = mongo.gdp_search(SERVER_ADDR, request.args['value'], 0)
        parsed = []
        for item in data:
            parsed.append({'year': item['date'], 'gdp': item['value']})
        return render_template('results.html', data=parsed)

if __name__ == "__main__":
    app.debug = True

app.run()
