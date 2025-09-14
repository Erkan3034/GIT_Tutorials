# Dallar ve Merge İşlemleri

## Branch (Dal) Kavramı

Branch'ler, projede paralel geliştirme yapmanızı sağlar. Ana kod (main/master) üzerinde çalışmadan yeni özellikler geliştirebilirsiniz.

## Temel Branch Komutları

```bash
# Mevcut branch'leri listeleme
git branch

# Yeni branch oluşturma
git branch <branch-adı>

# Branch'e geçiş yapma
git checkout <branch-adı>
# veya (Git 2.23+)
git switch <branch-adı>

# Branch oluşturma ve geçiş yapma (tek komut)
git checkout -b <branch-adı>
# veya
git switch -c <branch-adı>
```

## Merge İşlemleri

```bash
# Branch'i ana dala merge etme
git checkout main
git merge <branch-adı>

# Branch'i silme
git branch -d <branch-adı>  # Güvenli silme
git branch -D <branch-adı>  # Zorla silme
```

## Conflict Çözümü

Merge sırasında çakışma olduğunda:

1. Çakışan dosyaları düzenle
2. `git add <dosya>` ile çözümü işaretle
3. `git commit` ile merge'ü tamamla

## Pratik Alıştırmalar

1. [ ] Yeni bir branch oluştur
2. [ ] Branch'te değişiklik yap ve commit et
3. [ ] Ana branch'e geri dön
4. [ ] Merge işlemi gerçekleştir
5. [ ] Conflict durumu oluştur ve çöz
6. [ ] Kullanılmayan branch'leri sil

## Notlar

- Her yeni özellik için ayrı branch kullan
- Branch isimleri açıklayıcı olmalı
- Merge'den önce branch'in güncel olduğundan emin ol
