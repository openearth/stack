FROM ubuntu
MAINTAINER {{ ansible_ssh_user }}
RUN apt-get -y update
RUN apt-get install -y python-yaml python-jinja2 git
RUN git clone http://github.com/ansible/ansible.git -b v1.6.10 /tmp/ansible
WORKDIR /tmp/ansible
ENV PATH /tmp/ansible/bin:/sbin:/usr/sbin:/usr/bin
ENV ANSIBLE_LIBRARY /tmp/ansible/library
ENV PYTHONPATH /tmp/ansible/lib:$PYTHON_PATH
RUN git clone http://github.com/openearth/stack.git -b {{ project }} /tmp/{{ project }}
ADD inventory /etc/ansible/hosts
WORKDIR /tmp/{{ project }}
RUN ansible-playbook playbook.yml -c local
EXPOSE 8081 6020
CMD python ~/src/PyWPS/webservices/wsgi/wsgiwps.py