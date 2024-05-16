pipeline {
    agent any

    tools {
        nodejs 'Node'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/vamandeshmukh/ibm-ng-demo-april-2014.git'
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build --prod'
            }
        }
    }
}

// pipeline {
//     agent any

//     tools {
//         nodejs 'Node'
//     }

//     environment {
//         CI = 'true'
//     }

//     stages {
//         stage('Checkout') {
//             steps {
//                 git branch: 'main',
//                 url: 'https://github.com/vamandeshmukh/ibm-ng-demo-april-2014.git'
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }

//         stage('Build') {
//             steps {
//                 sh 'npm run build --prod'
//             }
//         }

//         stage('Test') {
//             steps {
//                 sh 'npm test'
//             }
//         }
//                 stage('Deploy') {
//     steps {
//         script {
//             sh 'npm install -g http-server'
//             sh 'http-server ./dist -p 4000'
//         }
//     }
// }

//     }

//     post {
//         always {
//             archiveArtifacts artifacts: 'dist/**/*',
//             allowEmptyArchive: true
//             cleanWs()
//         }
//         success {
//             echo 'Build and Deploy Successful!'
//         }
//         failure {
//             echo 'Build or Deploy Failed!'
//         }
//     }
// }
