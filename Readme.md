# Randomize Favicon

## What is Favicon?

WiKi Definition: A favicon /ˈfæv.ɪˌkɒn/ (short for favorite icon), also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon, is a file containing one or more small icons, associated with a particular website or web page.

This: ![alt tag](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Wikipedia_favicon_in_Firefox_on_KDE.png/250px-Wikipedia_favicon_in_Firefox_on_KDE.png)

## Now what is favicon randomizer?

You can have random favicon each time users visit to your website.

Came up with this idea of having random favicon on personal website (crazy right?), and here is the simple code to do it.


## How it works?

Browser would try to check '/favicon.ico' if there's no custom meta tag assigned, and our code watching hits on favicon  simply redirect all the requests coming to /favicon.ico twards other website's favicon.

https://example.com/favicon.ico -> 302 Redirect -> https://opensource.org/favicon.ico


## PHP
Here is the PHP script

## Python

## Java

## JavaScript

## Example

* Website: https://mayur.pipaliya.com/
* Favicon Url: https://mayur.pipaliya.com/favicon.ico
