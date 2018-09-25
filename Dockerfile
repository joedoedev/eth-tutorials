# docker build -t ubuntu-udemy .
# incldes: node 8.3.11, npm 5.6.0, truffle 4.0.6, web3 ?
FROM ubuntu:14.04
RUN apt-get update
RUN apt-get install -y sudo
RUN apt-get update
RUN sudo apt-get install -y curl wget nano git tree && sudo apt-get update
RUN sudo apt-get install -y gcc g++ make && sudo apt-get update
RUN sudo apt-get install -y software-properties-common build-essential make && sudo apt-get update
RUN sudo add-apt-repository -y ppa:ethereum/ethereum
RUN sudo apt-get update
RUN sudo apt-get install -y ethereum
RUN ln -s /usr/bin/geth ~
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
#
RUN sudo npm i -g solc
RUN sudo npm i -g ganache-cli
RUN sudo npm i -g --unsafe-perm web3@1.0.0-beta.26
#
#RUN sudo apt-get install -y software-properties-common build-essential make
#RUN sudo npm i -g --unsafe-perm web3@1.0.0-beta.30
#RUN (cd /root && npm init --yes)
#RUN (cd /root && sudo npm i --save web3@1.0.0-beta.30) #beta18 or 0.19.0
# gcc g++ make
RUN mkdir ~/.global_node_modules
RUN ln -s /usr/lib/node_modules/ ~/.global_node_modules/
RUN mkdir ~/myprj/
#
WORKDIR /root/myprj/
# [[ $(docker ps -a|grep udemy) ]] && docker rm udemy
# docker run -it -v $PWD/myprj/:/root/myprj/ -h udemy --name udemy ubuntu-udemy
# if [[ $(docker ps -a | grep udemy) ]]; then docker rm udemy; fi && docker run -it -v $PWD/myprj/:/root/myprj/ -h udemy --name udemy ubuntu-udemy
# cd eth-tutorials && npm install
