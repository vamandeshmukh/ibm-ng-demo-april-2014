/* groovylint-disable CompileStatic, NestedBlockDepth */
pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = 'vamandeshmukh/ibm-ng-demo-april-2014'
        DOCKER_HUB_CREDENTIALS_ID = '59bf9b2c-2a1e-4afa-84c8-874c32e0b9b3'
        KUBECONFIG_CREDENTIALS_ID = '48d22aab-6f63-4d35-987a-223fe329d0ea'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/vamandeshmukh/ibm-ng-demo-april-2014.git'
            }
        }
        stage('Build Angular App') {
            steps {
                script {
                    docker.image('node:latest').inside {
                        sh 'npm install'
                        sh 'npm run build --prod'
                    }
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${env.DOCKER_HUB_REPO}:${env.BUILD_NUMBER}")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', env.DOCKER_HUB_CREDENTIALS_ID) {
                        docker.image("${env.DOCKER_HUB_REPO}:${env.BUILD_NUMBER}").push()
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    kubernetesDeploy(
                        configs: 'deployment.yaml',
                        kubeconfigId: env.KUBECONFIG_CREDENTIALS_ID
                    )
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}

