#! python3
"""
Little program to get information about instrument types
Written by Dang Manh Cuong for adding music sheet to Sao Mai Center for the blind site, also written for practicing programming skill using Python.
Date created: Monday, January 6, 2020
#Modification:
Monday, January 6, 2020: get instrument type by given name
 Monday, January 13, 2020: added feature for formatting text info get from musescore: incomplete
 Tuesday, January 14, 2020: added feature to edit the url of error sheets (get url from clipboard, and modified one by one)
 Wednesday, January 15, 2020: added url to clipboard after editting
Wednesday, January 22, 2020: added feature to modify multiple url from clipboard instead of modifying one by one
 """
import pyperclip #for using clipboard
import re #regular expression
from tkinter import Tk #for getting clipboard content
#import webbrowser #for opening site links

def get_instrument_type ():
    # Store the instrument's name and type in dictionary:
    instrument_type = {
    "piano": "keyboard",
    "organ": "keyboard",
    "guitar": "string",
    "harp": "string",
    "violin": "string",
    "viola": "string",
    "cello": "string",
    "contrabass": "string",
    "voice": "vocal",
    "Bassoon": "wind",
    "trombone": "win",
    "flute": "wind",
    "obo": "wind"}

    name = input ("Type your instrument's name: ")
    name = name.lower ()
    result = instrument_type [name]
    print (result)
    
    
def FormatData ():
    durationRegex = re.compile (r"\d\d:\d\d") #create rex to get the duration info from text
    musescore_data = Tk ().clipboard_get () #get musescore's data from clipboard using tk modules
    mo=durationRegex.search (musescore_data)
    #print (mo) #debug
    musescore_data.replace (str (mo), "")
    print (musescore_data) #debug


def format_url ():
#reformat url of error sheet on Sao Mai's site for faster editting
    old_url = "http" #the error urls generated as http://www so it must be changed to https for editting
    new_url = "https" #changed url
    edit_url = "/edit\n" #will be added at the end of each url
#    url = input ("Type or paste your URL: ")
    url = Tk ().clipboard_get () #get error urls from clipboard using tk module
    format_url = url.replace (old_url, new_url) #replace http by https
    format_url = format_url.replace ("\n", edit_url) #add /edit at the end of each url so we just copy and paste in to a browser, and press enter to go to its edit page
    format_url = format_url.replace ("/vi/", "/en/") # set language of editting page to English,
    print (format_url) #debug
    pyperclip.copy (format_url) #add urls into the clipboard after editing
    

format_url ()
#FormatData ()