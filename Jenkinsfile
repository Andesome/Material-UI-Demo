pipeline {
    agent {
        docker {
            image 'node:8-alpine'
        }
    }
    environment {
       CI = 'true'
   }
    stages {
        stage('prepare') { 
            steps {
                sh 'whoami'
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install yarn --registry=https://registry.npm.taobao.org'
                sh 'yarn --version'
                sh 'yarn install --registry=https://registry.npm.taobao.org'
            }
        }
        stage('build') { 
            steps {
                sh './jenkins/scripts/build.sh' 
            }
        }
        stage('deploy') { 
            steps {
              sh './jenkins/scripts/deliver.sh'
            }
        }
    }
}