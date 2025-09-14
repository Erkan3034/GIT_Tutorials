# Git Komut Referansı

## Kurulum ve Konfigürasyon
```bash
git config --global user.name "İsim Soyisim"
git config --global user.email "email@domain.com"
git config --global init.defaultBranch main
```

## Repository İşlemleri
```bash
git init                    # Yeni repo oluştur
git clone <url>             # Repo'yu kopyala
git status                  # Durum kontrol et
```

## Dosya İşlemleri
```bash
git add <dosya>             # Dosyayı stage'e ekle
git add .                   # Tüm dosyaları ekle
git commit -m "mesaj"       # Commit oluştur
git commit -am "mesaj"      # Add + commit
```

## Geçmiş ve Log
```bash
git log                     # Commit geçmişi
git log --oneline           # Kısa format
git log --graph             # Grafik görünüm
git show <commit-id>        # Commit detayı
```

## Dosya Karşılaştırma
```bash
git diff                    # Working directory vs staging
git diff --staged           # Staging vs last commit
git diff HEAD               # Working directory vs last commit
```
