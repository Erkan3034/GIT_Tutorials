import requests

# GitHub API endpoint for user information (returns JSON)
response = requests.get("https://api.github.com/users/Erkan3034")

print(f"STATUS CODE: {response.status_code}")
print("--------------------------------")
try:
    # Check if the response content type is JSON
    content_type = response.headers.get('content-type', '')
    if 'application/json' not in content_type:
        print(f"Uyarı: Beklenen JSON formatı değil. Content-Type: {content_type}")
    
    data = response.json()
    print("GitHub kullanıcı bilgileri:")
    print(f"Kullanıcı adı: {data.get('login')}")
    print(f"İsim: {data.get('name')}")
    print(f"Bio: {data.get('bio')}")
    print(f"Takipçi sayısı: {data.get('followers')}")
    print(f"Takip edilen: {data.get('following')}")
    print(f"Repo sayısı: {data.get('public_repos')}")
    
except requests.exceptions.JSONDecodeError as e:
    print("JSON decode hatası:", e)
    print("Response içeriği:")
    print(response.text[:200] + "..." if len(response.text) > 200 else response.text)
except Exception as e:
    print("Genel hata:", e)
