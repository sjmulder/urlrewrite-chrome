URL Rewrite for Chrome
======================

An extension that lets you redirect Chrome for specific URLs.


Usage
-----

To install from sources:

 1. Go to chrome://extensions/.
 2. Click Load unpacked extension.
 3. Select the `extension` directory.

To configure:

 1. Go to chrome://extensions/ and click the Options link.
 2. In Source URL, enter the URL that should be rewritten, e.g. `http://jira.example.com/`
 3. In Destination URL, enter the URL that should replace the Source URL, e.g. `http://example.myvpn.com/jira/`
 4. Now, any link that begins with Source URL will have that replaced with Destination URL. In the example above, `http://jira.example.com/PROJ-123` would be rewritten to `http://example.myvpn.com/jira/PROJ-123`

Notes:
 
 * Make sure to include the protocol, like `http://`.
 * There is no wildcard support, just a prefix match.


Licence
-------

I, the copyright holder of this work, hereby release it into the public domain. This applies worldwide.

In case this is not legally possible: I grant anyone the right to use this work for any purpose, without any conditions, unless such conditions are required by law.


Author
------

By Sijmen Mulder (ik@sjmulder.nl).
