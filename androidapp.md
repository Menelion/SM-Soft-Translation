# TRANSLATE ANDROID APPS (SM MUSIC READER AND SM BRAILLE VIEWER)
We will take SM Music Reader app for Android as an example for quick translation instruction below. This is the first fully accessible and free Android app to help both blind and sighted people read sheet music. You can download [SM Music Reader](https://play.google.com/store/apps/details?id=org.saomaicenter.music.reader) from the Google Play Store.
## TRANSLATE SM MUSIC READER
Some notes for translators:

- Translators should be familiar with musical terms in both English and translated languages.
- Should save in UTF-8.
- Can use any regular text editors or any translation tools. Recommended free text editor for windows is [Notepad++](https://notepad-plus-plus.org/).

In the XML language resource file that we will send to you after receiving your translation request form. It contains English text strings as the source language. Then, you need to translate these English strings into your local language. There are three types of entries: string, string-array, and plurals.
### STRING TYPE EXAMPLE

```
Source English strings:
<resources>
    <string name="menu_sheet_info">Sheet info</string>
    <string name="menu_accessibility_options">Accessibility options</string>
    <string name="menu_settings">App settings</string>
</resources>
Translated into Vietnamese:

<resources>
   <string name="menu_sheet_info">Thông tin bản nhạc</string>
  <string name="menu_accessibility_options">Tùy chọn tiếp cận</string>
    <string name="menu_settings">Cài đặt ứng dụng</string>
</resources>
```
### STRING-ARRAY TYPE EXAMPLE

```
Note: with this string-array type, between the opening and closing “item” tag, there will have a pair of data separated by the vertical-bar sign (|). On the left of the vertical sign is the key value and on the right is the text to translate into your language. If no translation text is provided on the right part, the app will use the value on the left part. So, there might be many cases you just want to keep the original musical terms in English instead of translating into your local language.

English source strings:

<resources>
  <string-array name="accidentals">
       <item>sharp|</item>
       <item>natural|</item>
       <item>flat|</item>
   </string-array>
</resources>
Translated into Vietnamese:

<resources>
  <string-array name="accidentals">
       <item>sharp|thăng</item>
       <item>natural|bình</item>
      <item>flat|giáng</item>
   </string-array>
</resources>
```
### PLURALS TYPE
Currently, we don’t have this type in our source strings translation file. So we will update you when this plurals type is applied in our app.

## LOCALIZATION REQUEST FORM
Please fill out the form [here](https://www.saomaicenter.org/en/smsoft/localization/translate-android-apps) to request for localization files.