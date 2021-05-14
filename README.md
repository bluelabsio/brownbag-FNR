# Full Stack Flask Node React Debugging Brown Bag

## Requirements:
#### Clone repo
```
git clone https://github.com/bluelabsio/brownbag-FNR.git
```

#### Create virtual env with your manager or choice (conda, pyenv)
```bash
conda create -n BBPY37 python=3.7 anaconda
```

#### Get NVM and a node version:
```
brew install nvm
```
```
export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm" 
```
```
nvm install v15.14.0
nvm use v15.14.0
```

### Install Yarn
```
npm install --global yarn
```

## Open Python Backend with VS Code
```
code py-backend
```
#### Download dependencies for python backend
```
pip install -r requirements.txt
```

## Open Client Service with VS Code
```
code client-service
```

#### Download dependencies for express server (in `client-side/server`)
```
yarn install
```

#### Download dependencies for front end (in `client-side`)
```
yarn install
```
