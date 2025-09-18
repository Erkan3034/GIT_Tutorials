import requests

response = requests.get("https://api.github.com/")

print(f"STATUS CODE: {response.status_code}")
#print(f"RESPONSE: {response.json()}")

for i in response.json():
    print(i)