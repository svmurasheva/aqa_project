#AQA_PROJECT
1. Project uses nvm to manage node versions.  
 - Type 'nvm install v18.16.1' (or whatever is specified in .nvmrc)  
 - Type 'nvm use' to apply the right node version (v18.16.1) - specified in .nvmrc  
Note:  
 - if when running 'nvm use v18.16.1' in PowerShell you are observing:  
PS ~\..\aqa_project> nvm use v18.16.1      
exit status 1: Access is denied.  
You might have to run PowerShell or your entire IDE as admin.  
2. The test app utilizes yarn classic (version 1.x.x), but you can also use npm. To instal yarn:  
 - to install type 'npm install yarn -g'
 - to verify yarn instalation available and check its version run: 'yarn -v' > shoud display version <2.0.0
3. To run the test app locally execute:
 - 'cd cypress-realworld-app' change to test app dir
 - 'yarn' to install depedencies 
 - 'yarn dev' to run backend in watch mode on port 3001 and frontend on port 3000 or,
 - 'yarn start' to run without watch
 - 'yarn list:dev:users' to list avaliable users
 - refer to cypress-realworld-app/README.md for more details.
 4. To run the app and cypress:
  - cd cypress-tests
  - npm run app:cypress:open
