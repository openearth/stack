# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.


  config.vm.define "mmi" do |mmi|
    mmi.vm.network "private_network", type: "dhcp"
    mmi.vm.box = "ubuntu/trusty64"
  end
  config.vm.define "wps" do |wps|
    wps.vm.network "private_network", type: "dhcp"
    wps.vm.box = "ubuntu/trusty64"
  end
  config.vm.define "ckan" do |ckan|
    ckan.vm.network "private_network", type: "dhcp"
    ckan.vm.box = "ubuntu/trusty64"
  end
  config.vm.define "lizard" do |lizard|
    lizard.vm.network "private_network", type: "dhcp"
    lizard.vm.box = "ubuntu/trusty64"
  end
  config.vm.define "shiny" do |shiny|
    shiny.vm.network "private_network", type: "dhcp"
    shiny.vm.box = "ubuntu/trusty64"
  end
  config.vm.define "swapp" do |swapp|
    swapp.vm.network "private_network", type: "dhcp"
    swapp.vm.box = "ubuntu/trusty64"
  end
  config.vm.define "space" do |space|
    space.vm.network "private_network", type: "dhcp"
    space.vm.box = "ubuntu/trusty64"
  end
  config.vm.define "default" do |default|
    default.vm.box = "ubuntu/trusty64"
  end


  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network "forwarded_port", guest: 5984, host: 15984

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # If true, then any SSH connections made will enable agent forwarding.
  # Default value: false
  # config.ssh.forward_agent = true

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
    # Boot with headless mode
    vb.gui = false

    # Use VBoxManage to customize the VM. For example to change memory:
    vb.customize ["modifyvm", :id, "--memory", "1024"]
  end
  #
  # View the documentation for the provider you're using for more
  # information on available options.
  # Run from command line like this:
  # ansible-playbook -i .vagrant/provisioners/ansible/inventory/vagrant_ansible_inventory --private-key=~/.vagrant.d/insecure_private_key -u vagrant playbook.yml
  config.vm.provision "ansible" do |ansible|
    ansible.groups = {
      "mmi" => ["mmi-machine"],
      "wps" => ["wps-machine"],
      "ckan" => ["ckan-machine"],
      "lizard" => ["lizard-machine"],
      "shiny" => ["shiny-machine"],
      "swapp" => ["swapp-machine"],
      "space" => ["space-machine"]
    }
    ansible.playbook = "playbook.yml"
  end

end
