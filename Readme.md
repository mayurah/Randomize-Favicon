# Randomize Favicon

## What is Favicon?

WiKi Definition: A favicon /ˈfæv.ɪˌkɒn/ (short for favorite icon), also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon, is a file containing one or more small icons, associated with a particular website or web page.

This tiny icon in browser: ![alt tag](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Wikipedia_favicon_in_Firefox_on_KDE.png/250px-Wikipedia_favicon_in_Firefox_on_KDE.png)

## So, what is favicon randomizer?

Simple, You can have random favicon each time users visit your website.

Came up with this idea of having random favicon on personal website (crazy right?), and here is the simple code to do it.


## How it works?

Browser would try to check '/favicon.ico' if there's no custom meta tag assigned, and our code watching hits on favicon  simply redirect all the requests coming to /favicon.ico twards other website's favicon.

https://example.com/favicon.ico -> 302 Redirect -> https://opensource.org/favicon.ico

## Use case


* For animation/dynamic updates/notification via constant  changes such as Favicon array with numbers/indicator to show user that they've received some update
* If you don't have existing favicon, and wondering which one to use
* To showcase things you relate yourself to
* For fun, weird way to tweak your personal website
* Running out of words, can't think of more! Feel free to send pull requests!

## Sample Code

* PHP (Functional)

* Python

* Java

* JavaScript (Functional)


## Example


```html
<link rel="icon" href="https://mayur.pipaliya.com/favicon.ico">
```

* Website: https://mayur.pipaliya.com/
* Favicon Url: https://mayur.pipaliya.com/favicon.ico


## Contribution

Feel free to pull and/or distribute. \o/

