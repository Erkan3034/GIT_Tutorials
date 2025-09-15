# Temel Git Komutları

## Git Kurulumu ve İlk Ayarlar

```bash
# Git versiyonunu kontrol etme
git --version

# Kullanıcı bilgilerini ayarlama
git config --global user.name "İsminiz"
git config --global user.email "email@example.com"

# Ayarları görüntüleme
git config --list
```

## Repository İşlemleri

```bash
# Yeni repository oluşturma
`git init`

# Mevcut repository'yi klonlama
` git clone <repository-url> `
```

## Temel Komutlar

```bash
# Dosya durumunu kontrol etme
`git status`

# Dosyaları staging area'ya ekleme
` git add <dosya-adı> `
` git add .  # Tüm dosyalar `

# Commit oluşturma
` git commit -m "Commit mesajı" `

# Commit geçmişini görüntüleme
`git log`
git log --oneline  # Kısa format
```

## .gitignore Dosyası

```gitignore
# Örnek .gitignore içeriği
*.log
*.tmp
node_modules/
.env
.DS_Store
```


## Notlar

- Her commit anlamlı bir mesaj içermeli
- Küçük ve sık commit'ler tercih edilmeli
- .gitignore dosyası repository başında oluşturulmalı
