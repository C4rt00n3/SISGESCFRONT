import requests
import time

# URL base
base_url = "http://localhost:5000"

# Token de autenticação
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoidGVzdEBlbWFpbC5jb20iLCJpYXQiOjE3MTQzOTMzOTksImV4cCI6MTcxNDk5ODE5OX0.cNdDiK5ebR2Gc2jmqAi3mQAzmhlwC1Ltm1dKT-R2oeI"

# Loop de 50 requisições
for _ in range(50):
    try: 
        # Requisição GET para /test
        response_test = requests.get(f"{base_url}/test")
        result = response_test.json() if response_test.status_code == 200 else {}
        
        # Requisição POST para /matricula
        headers = {"Authorization": f"Bearer {token}"}
        response_matricula = requests.post(f"{base_url}/matricula", json=result, headers=headers)
        
        # Verifica se a requisição foi bem-sucedida
        if response_matricula.status_code == 201:
            print("Matrícula realizada com sucesso!")
        else:
            print("Erro ao realizar matrícula.")
    except Exception as e: 
        print(f"Erro: {e}")
    
    # Adiciona um tempo de espera entre as requisições
    time.sleep(1)  # Espera 1 segundo
