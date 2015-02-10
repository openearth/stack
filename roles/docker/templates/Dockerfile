FROM ubuntu
MAINTAINER {{ ansible_ssh_user }}

RUN apt-get -y update && \
    apt-get install -y python-yaml python-jinja2 python-httplib2 python-keyczar python-paramiko python-setuptools python-pkg-resources git python-pip subversion
RUN mkdir /etc/ansible/
RUN echo '[local]\nlocalhost\n[{{ project }}-docker]\nlocalhost\n' > /etc/ansible/hosts
RUN mkdir /opt/ansible/
RUN git clone https://github.com/ansible/ansible.git /opt/ansible/ansible
WORKDIR /opt/ansible/ansible
RUN git submodule update --init
ENV PATH /opt/ansible/ansible/bin:/bin:/usr/bin:/sbin:/usr/sbin
ENV PYTHONPATH /opt/ansible/ansible/lib
ENV ANSIBLE_LIBRARY /opt/ansible/ansible/library

RUN git clone https://github.com/openearth/stack.git -b {{ project }} /tmp/{{ project }}
WORKDIR /tmp/{{ project }}
RUN ansible-playbook playbook.yml -c local

EXPOSE 8081 6020
CMD /home/root/.virtualenvs/main/bin/python /root/src/PyWPS/webservices/wsgi/wsgiwps.py