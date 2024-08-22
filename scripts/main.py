import os
import json
import requests
import unicodedata
from bs4 import BeautifulSoup
from datetime import datetime

# FUNCTIONS
def imageDownloader(url, name = 'image'):
    with open(name, 'wb') as handle:
        response = requests.get(url, stream=True)
        handle.write(response.content)
        print('Image Downloaded: ', name)

def convertUnicodeToText(note):
    str_map = {'Š' : 'S', 'š' : 's', 'Đ' : 'D', 'đ' : 'd', 'Ž' : 'Z', 'ž' : 'z', 'Č' : 'C', 'č' : 'c', 'Ć' : 'C', 'ć' : 'c', 'À' : 'A', 'Á' : 'A', 'Â' : 'A', 'Ã' : 'A', 'Ä' : 'A', 'Å' : 'A', 'Æ' : 'A', 'Ç' : 'C', 'È' : 'E', 'É' : 'E', 'Ê' : 'E', 'Ë' : 'E', 'Ì' : 'I', 'Í' : 'I', 'Î' : 'I', 'Ï' : 'I', 'Ñ' : 'N', 'Ò' : 'O', 'Ó' : 'O', 'Ô' : 'O', 'Õ' : 'O', 'Ö' : 'O', 'Ø' : 'O', 'Ù' : 'U', 'Ú' : 'U', 'Û' : 'U', 'Ü' : 'U', 'Ý' : 'Y', 'Þ' : 'B', 'ß' : 'Ss', 'à' : 'a', 'á' : 'a', 'â' : 'a', 'ã' : 'a', 'ä' : 'a', 'å' : 'a', 'æ' : 'a', 'ç' : 'c', 'è' : 'e', 'é' : 'e', 'ê' : 'e', 'ë' : 'e', 'ì' : 'i', 'í' : 'i', 'î' : 'i', 'ï' : 'i', 'ð' : 'o', 'ñ' : 'n', 'ò' : 'o', 'ó' : 'o', 'ô' : 'o', 'õ' : 'o', 'ö' : 'o', 'ø' : 'o', 'ù' : 'u', 'ú' : 'u', 'û' : 'u', 'ý' : 'y', 'ý' : 'y', 'þ' : 'b', 'ÿ' : 'y', 'Ŕ' : 'R', 'ŕ' : 'r'}
    for key, value in str_map.items():
        note = note.replace(key, value)
    asciidata = unicodedata.normalize('NFKD', note).encode('ascii', 'ignore')
    return asciidata.decode('UTF-8')

def getImagesByPageNumber(pageNumber = 1):
    URL = 'https://sexpositions.club/positions/page/' + str(pageNumber)

    req = requests.get(URL)
    soup = BeautifulSoup(req.text, 'html.parser')
    cards = soup.find_all('div', class_='post-card')

    images = [];
    for card in cards:
        title = convertUnicodeToText(card.find('div', class_='post-card__title').find('a').text).replace('.', '').replace('  ', ' ').replace('Position ', '')
        imageContainer = card.find('div', class_='post-card__thumbnail')
        image = imageContainer.find('img', class_='wp-post-image')
        level = convertUnicodeToText(imageContainer.find('div').text)
        imageSrc = image['data-src']
        imageAlt = convertUnicodeToText(image['alt'].replace(' Kamasutra - Photo, picture, image', ''))

        fileName = title.lower().replace(' ', '-') + '.png'
        imageId = int(fileName[:fileName.index('-')])
        imageDownloader(imageSrc, fileName)

        images.append({
            'id': imageId,
            'title': title[title.index(' ') + 1:],
            'level': level,
            'fileName': fileName,
            'imageAlt': imageAlt,
            'originalSrc': imageSrc
        })
        print('Image {} Generated.'.format(imageId))
    return images;


# APP
END_PAGE = 11
START_PAGE = 1
IMAGE_FOLDER = os.path.join(os.getcwd(), 'images');

try:
    os.mkdir(IMAGE_FOLDER)
except:
    pass
os.chdir(IMAGE_FOLDER)

result = []
for pageNumber in range(START_PAGE, END_PAGE + 1):
    result.extend(getImagesByPageNumber(pageNumber))

jsonContent = {
    'developer': 'Ramin Rezaei',
    'created': str(datetime.now()),
    'pages': '{} - {}'.format(START_PAGE, END_PAGE),
    'data': result
}

with open('../data.json', 'w') as jsonFile:
    jsonFile.write(json.dumps(jsonContent, indent=4))
