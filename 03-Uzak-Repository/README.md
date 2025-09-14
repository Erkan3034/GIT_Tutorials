# Uzak Repository İşlemleri

## Remote Repository Kavramı

Remote repository, kodunuzun bulut tabanlı bir kopyasıdır. GitHub, GitLab, Bitbucket gibi platformlarda barındırılır.

## Remote İşlemleri

```bash
# Remote repository'leri listeleme
git remote -v

# Remote repository ekleme
git remote add origin <repository-url>

# Remote repository bilgilerini görüntüleme
git remote show origin
```

## Push ve Pull İşlemleri

```bash
# Değişiklikleri remote'a gönderme
git push origin main
git push -u origin main  # İlk push için

# Remote'dan değişiklikleri alma
git pull origin main

# Sadece bilgileri getirme (merge etmeden)
git fetch origin
```

## Clone İşlemleri

```bash
# Repository'yi klonlama
git clone <repository-url>

# Belirli branch'i klonlama
git clone -b <branch-adı> <repository-url>
```

## GitHub Workflow

1. **Fork** - Projeyi kendi hesabınıza kopyalayın
2. **Clone** - Yerel makinenize indirin
3. **Branch** - Yeni özellik için branch oluşturun
4. **Commit** - Değişikliklerinizi commit edin
5. **Push** - Branch'i GitHub'a gönderin
6. **Pull Request** - Değişikliklerinizi önerinin

## Pratik Alıştırmalar

1. [ ] GitHub'da yeni repository oluştur
2. [ ] Yerel repository'yi remote'a bağla
3. [ ] İlk push işlemini gerçekleştir
4. [ ] Remote'dan değişiklik çek
5. [ ] Başka bir repository'yi fork et
6. [ ] Pull request oluştur

## Notlar

- Push etmeden önce pull yapmayı unutma
- Hassas bilgileri (şifreler, API keys) commit etme
- README dosyası her repository'de bulunmalı
