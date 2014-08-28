Swap
========

Enable a swap disk for extra memory.

Requirements
------------

The mkswap and swapon commands should be available and some disk space should be available

Role Variables
--------------

For now, the memory is fixed to 2GB.

Dependencies
------------


Example Playbook
-------------------------

Yust add the swap role and swap will be enabled.

    - hosts: servers
      roles:
         - { role: openearth.swap }

License
-------

GPLv3

Author Information
------------------

Fedor Baart
