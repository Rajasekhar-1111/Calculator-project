pipeline {
agent any

```
stages {

    stage('Build') {
        steps {
            sh 'docker build -t calculator-frontend ./frontend'
            sh 'docker build -t calculator-backend ./backend'
        }
    }

    stage('Deploy') {
        steps {
            sh 'docker rm -f calculator-frontend || true'
            sh 'docker rm -f calculator-backend || true'

            sh 'docker run -d --name calculator-backend -p 5000:5000 calculator-backend'
            sh 'docker run -d --name calculator-frontend -p 8081:80 calculator-frontend'
        }
    }
}
```

}
