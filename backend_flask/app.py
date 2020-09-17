from flask import Flask, make_response, request, jsonify
import requests
import json
import re  # 正则
from bs4 import BeautifulSoup
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Cross origin


# Page request
def request_page(url):
    page_request = requests.get(url)
    page_request.encoding = 'GB2312'
    return page_request


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/getNovelCategory')
def get_category():
    # Pre set to retrieve data
    home_page_url = 'http://www.ybdu.co'
    page_info = request_page(home_page_url)  #
    soup = BeautifulSoup(page_info.text, 'html.parser')  # BeautifulSoup Html Parser

    # Used for loop and make response
    data = {}  # data
    data_array = []

    # loop the page and find the category link
    for cate_link in soup.find('ul', 'nav navbar-nav').find_all('a'):
        if cate_link.get('href').find('list') != -1:
            temp_dict = {'Cate_name': cate_link.get_text(), 'link_ID': 'Cate_'+cate_link.get('href')[6]}  # Append name and the link to temp dict
            data_array.append(temp_dict)  # append to the array
    data['data'] = data_array  # covert the array back to dict format
    json_data = json.dumps(data, ensure_ascii=False)
    response = make_response(json_data)
    return response


@app.route('/CategoryType', methods={'POST'})
def get_category_info():
    # Used for loop and make response
    data = {}  # data
    data_array = []

    # Receive Data from front end
    request_data = request.get_json()  # Request Json Format data from react
    received_type = request_data['CateType']  # Read Email from json
    received_page = request_data['CatePage']  # Read password from json

    # Edit the URL to request data
    page_url = 'http://www.ybdu.co/list/' + str(received_type[5]) + '-' + str(received_page) + '.html'
    page_request = request_page(page_url)
    soup = BeautifulSoup(page_request.text, 'html.parser')  # BeautifulSoup Html Parser

    # Select The Info that is necessary
    for Book in soup.find('div', 'panel-body').find_all('div', 'media'):
        book_img = Book.find('img')['src']
        book_link = re.findall(r'[0-9]\d*', Book.find('a')['href'])  # only retrieve Number from it
        book_intro = re.sub('\[点击阅读]$', '', Book.find('p', 'book-intro-index').get_text())  # find the intro remove
        book_name = Book.find('h4', 'media-heading book-title').get_text()
        temp_dict = {'Name': book_name, 'Intro': book_intro, 'Link': book_link, 'img': book_img, 'book_id': book_link[0], 'book_chapter': book_link[1]}
        data_array.append(temp_dict)  # append to the array
    data['data'] = data_array  # covert the array back to dict format
    json_data = json.dumps(data, ensure_ascii=False)
    response = make_response(json_data)
    return response


@app.route('/BookChapter', methods={'POST'})
def get_book_chapter():
    # Used for loop and make response
    data = {}  # data
    data_array = []

    # Receive Data from front end
    request_data = request.get_json()  # Request Json Format data from react
    received_book_id = request_data['bookID']  # Read Email from json
    received_book_chapter = request_data['bookChapter']  # Read password from json

    # Edit the URL to request data
    page_url = 'http://www.ybdu.co/' + str(received_book_id) + '/' + str(received_book_chapter) + '/'
    page_request = request_page(page_url)
    soup = BeautifulSoup(page_request.text, 'html.parser')  # BeautifulSoup Html Parser

    # Find
    for chapter in soup.find('ul', 'list-group list-charts').find_all('a'):
        temp_dict = {'Chapter_Name': chapter.get_text(),
                     'Chapter_Link': chapter.get('href')[10:-5]}  # Append name and the link to temp dict

        data_array.append(temp_dict)  # append to the array

    data['data'] = data_array  # covert the array back to dict format
    json_data = json.dumps(data, ensure_ascii=False)
    response = make_response(json_data)
    return response


@app.route('/BookParagraph', methods=['POST'])
def get_book_paragraph():
    # Receive Data from front end
    request_data = request.get_json()  # Request Json Format data from react
    received_book_id = request_data['Book_ID']  # Read Book_ID from json
    received_book_chapter = request_data['Book_Chapter']  # Read Book_Chapter from json
    received_book_paragraph = request_data['Book_paragraph']  # Read Book_paragraph from json

    # Edit the URL to request data
    page_url = 'http://www.ybdu.co/' + str(received_book_id) + '/' + str(received_book_chapter) + '/' + str(received_book_paragraph) + '.html'
    page_request = request_page(page_url)
    soup = BeautifulSoup(page_request.text, 'html.parser')  # BeautifulSoup Html Parser

    soup.find('div', 'panel-body content-body content-ext')
    paragraph = soup.find('div', 'panel-body content-body content-ext').get_text()
    response = make_response(jsonify(paragraph=paragraph))

    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0')
