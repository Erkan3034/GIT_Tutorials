import requests

response = requests.get("https://github.com/Erkan3034")

print(f"STATUS CODE: {response.status_code}")
#print(f"RESPONSE: {response.json()}")

for i in response.json():
    print(i)

