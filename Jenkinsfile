pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t calculator-frontend ./frontend'
                sh 'docker build -t calculator-backend ./backend'
            }
        }

        stage('Run') {
            steps {
                sh 'docker run -d --name calculator-backend -p 5000:5000 calculator-backend || true'
                sh 'docker run -d --name calculator-frontend -p 8081:80 calculator-frontend || true'
            }
        }
    }
}