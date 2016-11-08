<?php

/*
Description: Came up with this idea of having random favicon on personal website (crazy right?), and here is the PHP script which can do that simple task.
*/

$favicon = array(
                 "https://www.python.org/static/favicon.ico",
                 "http://php.net/favicon.ico",
                 "https://www.ansible.com/hs-fs/hub/330046/file-448313641-png/favicon.png",
                 "https://facebook.github.io/react/favicon.ico",
                 "https://github.com/favicon.ico",
                 "https://opensource.org/favicon.ico",
                 "https://www.rabbitmq.com/favicon.ico",
                 "http://twitter.com/favicon.ico",
                 "http://www.google.com/favicon.ico",
                 "http://www.android.com/favicon.ico",
                 "http://bit.ly/favicon.ico",
                 "https://www.defcon.org/favicon.ico",
                 "https://greatscottgadgets.com/favicon.ico",
                 "https://www.cloudflare.com/favicon.ico",
                 "https://www.apple.com/favicon.ico",
                 "http://www.ubuntu.com/sites/default/themes/ubuntu10/favicon.ico",
                 "http://www.imdb.com/favicon.ico");

// Randomize array
shuffle($favicon);

// To attain (sigh) randomness, HTTP Header with no-cache and redirect to random favicon.
header("Pragma: public");
header("Cache-Control: no-store, no-cache, must-revalidate"); // HTTP/1.1
header("Expires: -1"); // Date in the past
header("Location: $favicon[0]");


exit();
