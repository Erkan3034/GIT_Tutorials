# Notlar ve Kaynaklar

## Önemli Notlar

### Git Best Practices

1. **Commit Mesajları**
   - İlk satır: 50 karakter veya daha az
   - Açıklayıcı ve net olmalı
   - İngilizce tercih edilir
   - Örnek: "Add user authentication feature"

2. **Branch İsimlendirme**
   - `feature/kullanici-girisi`
   - `bugfix/header-sorunu`
   - `hotfix/kritik-hata`

3. **Commit Sıklığı**
   - Küçük ve sık commit'ler
   - Her commit çalışır durumda olmalı
   - Bir özellik = bir commit değil

### Sık Karşılaşılan Hatalar

1. **Büyük dosyaları commit etme**
   - Çözüm: .gitignore kullan
   - Git LFS kullan (büyük dosyalar için)

2. **Merge conflict'leri**
   - Sabırlı ol, dikkatli çöz
   - Test et, sonra commit et

3. **Yanlış branch'te çalışma**
   - `git stash` kullan
   - Doğru branch'e geç
   - `git stash pop` ile devam et

## Yararlı Kaynaklar

### Resmi Dokümantasyon
- [Git Official Documentation](https://git-scm.com/docs)
- [Pro Git Book](https://git-scm.com/book)

### Online Kurslar
- [GitHub Learning Lab](https://lab.github.com/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

### İnteraktif Öğrenme
- [Learn Git Branching](https://learngitbranching.js.org/)
- [Git Immersion](http://gitimmersion.com/)

### Video Kaynaklar
- YouTube: "Git and GitHub for Beginners"
- Udemy: Git kursu önerileri

### Kitaplar
- "Pro Git" - Scott Chacon ve Ben Straub
- "Git Pocket Guide" - Richard E. Silverman

## Cheat Sheet

### Temel Komutlar
```bash
git init                    # Repo oluştur
git add .                   # Tüm dosyaları ekle
git commit -m "mesaj"       # Commit yap
git status                  # Durum kontrol
git log                     # Geçmiş görüntüle
```

### Branch Komutları
```bash
git branch                  # Branch'leri listele
git branch <name>           # Yeni branch
git checkout <name>         # Branch'e geç
git merge <name>            # Merge yap
git branch -d <name>        # Branch sil
```

### Remote Komutları
```bash
git remote add origin <url> # Remote ekle
git push origin main        # Push yap
git pull origin main        # Pull yap
git clone <url>             # Clone yap
```

## Sorun Giderme

### Sık Sorulan Sorular

**S: Commit'i nasıl geri alırım?**
A: `git reset --soft HEAD~1` (değişiklikleri koru) veya `git reset --hard HEAD~1` (her şeyi sil)

**S: Conflict nasıl çözülür?**
A: Dosyayı aç, `<<<<<<<`, `=======`, `>>>>>>>` işaretlerini temizle, düzenle, `git add`, `git commit`

**S: Branch nasıl silinir?**
A: `git branch -d branch-name` (güvenli) veya `git branch -D branch-name` (zorla)

## İleriye Dönük Hedefler

- [ ] Git hooks öğren
- [ ] CI/CD pipeline'larında Git kullanımı
- [ ] Git submodules
- [ ] Git LFS (Large File Storage)
- [ ] Advanced Git workflows (GitFlow, GitHub Flow)

---
*Son güncelleme: Eylül 2025*
