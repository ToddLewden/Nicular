# I want to collect information and the icons of the top 10 apps of Google and Apple
# Downloads
# Ratings
# Reviews
# Size
# Last Update
# etc.

import requests as request
from re import findall

class Downloader():
    #This will just get all 20 apps' data
    def __init__(self):
        self.base_urls = ['https://play.google.com/store/apps/top?hl=en_US']
        self.cur_source = ''
        self.cur_url = ''

    def get_page(self,url):
        self.cur_url = url
        reply = request.get(self.cur_url)
        self.cur_source = reply.content

    def initiate_collection(self):
        for base_url in self.base_urls:
            self.get_page(base_url)
            if 'google' in self.cur_url.lower():
                self.google_track()
    
    def get_top_free_url(self):
        result = findall(r'Free Apps.*href="([a-zA-Z0-9\%\:\-\&\\\/\?\=\;]*)',str(self.cur_source))
        top_free_url = 'https://play.google.com'+result
        self.get_page(top_free_url)

    def google_track(self):
        self.get_top_free_url()

d = Downloader()
d.initiate_collection()