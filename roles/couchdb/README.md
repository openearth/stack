CouchDB
========

Setup a CouchDB server. CouchDB will run on 0.0.0.0:5984 (assumes a firewall is present).
The jsonp feature is turned on to allow for cross origin requests.

Requirements
------------

Tested with Ubuntu 14.04.

Role Variables
--------------

You can set the `couchdb_dir` to the configuration directory.

Example Playbook
-------------------------

    - hosts: servers
      roles:
         - { role: couchdb , tags: ['couchdb'] }

License
-------

GPLv3

Author Information
------------------

Fedor Baart
