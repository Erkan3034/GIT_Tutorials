# İleri Seviye Git İşlemleri

## Rebase İşlemleri

Rebase, commit geçmişini yeniden düzenlemenizi sağlar.

```bash
# Interactive rebase (son 3 commit)
git rebase -i HEAD~3

# Branch'i ana dal üzerine rebase etme
git checkout feature-branch
git rebase main
```

## Cherry-pick

Belirli bir commit'i başka bir branch'e kopyalama:

```bash
git cherry-pick <commit-hash>
```

## Stash İşlemleri

Geçici değişiklikleri saklama:

```bash
# Değişiklikleri stash'e alma
git stash
git stash -m "Açıklama"

# Stash listesini görüntüleme
git stash list

# Stash'i geri uygulama
git stash pop
git stash apply stash@{0}

# Stash'i silme
git stash drop stash@{0}
```

## Reset ve Revert

```bash
# Soft reset (commit'i geri al, değişiklikleri koru)
git reset --soft HEAD~1

# Hard reset (her şeyi geri al)
git reset --hard HEAD~1

# Commit'i güvenli şekilde geri alma
git revert <commit-hash>
```

## Git Hooks

Belirli Git olaylarında otomatik çalışan scriptler:

- `pre-commit`: Commit öncesi
- `post-commit`: Commit sonrası
- `pre-push`: Push öncesi

## Submodules

Bir repository içinde başka repository'leri kullanma:

```bash
# Submodule ekleme
git submodule add <repository-url> <path>

# Submodule'leri güncelleme
git submodule update --init --recursive
```

## Pratik Alıştırmalar

1. [ ] Interactive rebase dene
2. [ ] Cherry-pick işlemi yap
3. [ ] Stash kullanarak değişiklikleri sakla
4. [ ] Reset ve revert farkını öğren
5. [ ] Basit bir hook oluştur

## Notlar

- Bu komutlar tehlikeli olabilir, dikkatli kullan
- Rebase'i public branch'lerde kullanma
- Stash geçici çözümdür, uzun süre saklanmamalı
