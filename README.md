# Free_Novel


### Backend 
#### CentOS 7 Deploy 
##### **Install Python 3.7**

1. Download Dependancies 

  `yum install -y openssl-devel openssl-static zlib-devel lzma tk-devel xz-devel bzip2-devel ncurses-devel gdbm-devel readline-devel sqlite-devel gcc libffi-devel`
  
2. Install `epel`   -> i dont know what that for but it works 

  `yum -y install epel-release`
  
3. Install python-pip

  `yum install epel-release`
  
4. install wget (used for download python 3.7 zip file)  -> You may need to upgrade your pip (pip install --upgrade pip)

  `pip install wget`
  
5. Make new directory witin '/user'

  `mkdir /usr/Downloads`
  
6.  Go to the new directory 

  `cd /usr/Downloads`
  
 7. Download the python 3.7 
 
  `wget https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tgz`
  
 8. unzip the tgz file 
 
  `tar -xvf Python-3.7.0.tgz`
  
 9. Some extra step if you want to do 
  
  `mv Python-3.7.0 /usr/local`   and  `cd /usr/local/Python-3.7.0/`
  
 10. Run the config file 
 
  `./configure`
  
  11. install to the system 
  
      `make`   or  `make install`
  
  12. Make soft link (软链接 做就对了)
  
  `ln -s /usr/local/Python-3.7.0/python /usr/bin/python3`
  
  13. You are good to go (test)
  
    `Python3 -V`   or  'pip3 -V'
