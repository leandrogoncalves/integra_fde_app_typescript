#! /bin/bash
## iniciar novo projeto React native
npx react-native init <nome do projeto> --template react-native-template-typescript

#rodar react-native
npx react-native start

#buildar projeto
cd android && ./gradlew clean && cd .. && npx react-native run-android

##configurar editorconfig
vim .editorconfig

#instalar eslint
yarn add eslint -D

##iniciar confg do eslink
yarn eslint --init

##reconfig yarn
yarn

##instalar estensões de configuração do editor
# babel-eslint
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

## Instalar extensões de configuração do typescript
yarn add -D eslint-plugin-react@7.19.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.20.1 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^2.5.0 @typescript-eslint/parser@latest

yarn add eslint-import-resolver-typescript -D

## Intall watchman for live reaload
sudo apt install -y autoconf automake build-essential libtool pkg-config libssl-dev python-dev

cd ~ &&  git clone https://github.com/facebook/watchman.git
cd watchman
git checkout v4.9.0
./autogen.sh
./configure --enable-lenient
make
make install

## Install reactotron
cd ~ && wget https://github.com/infinitered/reactotron/releases/download/v2.17.1/reactotron-app_2.17.1_amd64.deb
sudo dpkg -i reactotron-app_2.17.1_amd64.deb
reactotron-app_2

yarn add reactotron-react-native reactotron-redux reactotron-redux-saga

## instalação rotas
yarn add @react-navigation/native
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add @react-navigation/stack
yarn add react-navigation-stack @react-native-community/masked-view react-native-safe-area-context

## NO MAC INSTALAR O COCOAPODS E RODAR O CODIGO ABAIXO
npx pod-install ios

##IOS
#instalar cocoapods
cd ios && npx pod-install ios

## Install styled components
yarn add styled-components
yarn add @types/styled-components -D

## Install icons
yarn add react-native-vector-icons
yarn add -D @types/react-native-vector-icons

##install axios http
yarn add axios

##install async storage
yarn add @react-native-community/async-storage

## install prop types
yarn add prop-types

## install toast
yarn add react-native-simple-toast

##configure port to connect to reactotron
adb reverse tcp:9090 tcp:9090

##configuranco o root import
yarn add babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D

##uso de .env
yarn add react-native-dotenv@0.2.0

##Lib para trabalhar com formularios
yarn add @unform/core @unform/mobile

##Lib para validação de formulários
yarn add yup

##splash screen
yarn add react-native-splash-screen

## Tabs navigation
yarn add @react-navigation/bottom-tabs

## Material UI
# yarn add react-native-material-ui

## Install Paper
##yarn add react-native-paper

## instal React Native elements
yarn add react-native-elements


##Start emulator
emulator -avd Pixel_2_API_29 -netdelay none -netspeed full

##Icons list
https://oblador.github.io/react-native-vector-icons/

##links
https://react-native-elements.github.io/react-native-elements/docs/card

https://origamid.com/projetos/flexbox-guia-completo/

https://callstack.github.io/react-native-paper/2.0/appbar.html
