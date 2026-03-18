## 4.1 Checkout

Checkout = Git’te **branch değiştirmek veya belirli bir commit’e gitmek**

### Kullanım:

```bash
git checkout main
```

→ main branch’ine geçer

```bash
git checkout feature_branch
```

→ feature_branch’e geçer

```bash
git checkout <commit_id>
```

→ belirli commit’e gider (**detached HEAD olur**)

### Mantık:

“Çalışma alanımı başka bir branch/commit’e taşıyorum”

---

## 4.2 Reset vs Revert

### Reset (geçmişi değiştirir ⚠️)

Commit’i geri alır ve **history’yi değiştirir**

```bash
git reset --hard HEAD~1
```

→ son commit’i siler (geri alınamaz)

Türleri:

* `--soft` → commit silinir, değişiklikler durur
* `--mixed` → staging temizlenir
* `--hard` → her şey silinir

### Revert (güvenli ✔️)

Commit’i silmez, **tersini yapan yeni commit oluşturur**

```bash
git revert <commit_id>
```

### Mantık farkı:

* reset → geçmişi değiştirir (riskli)
* revert → geçmişi korur (güvenli)

---

## 4.3 Git Diff

Diff = “Ne değişti?” sorusunun cevabı

### Kullanım:

```bash
git diff
```

→ henüz commit edilmemiş değişiklikleri gösterir

```bash
git diff HEAD
```

→ son commit ile fark

```bash
git diff branch1 branch2
```

→ iki branch farkı

### Mantık:

“Satır satır değişiklik karşılaştırma”

---

## 4.4 Rebase

Rebase = commit’leri **başka bir branch’in üzerine taşımak**

### Örnek:

```bash
git checkout feature_branch
git rebase main
```

### Öncesi:

```
main: A---B
           \
feature:    C---D
```

### Sonrası:

```
main: A---B
             \
feature:      C'---D'
```

→ commit’ler yeniden yazılır (ID değişir)

### Mantık:

“Branch’i daha temiz, düz bir geçmişe taşımak”

---

## 4.5 Rebase Pratik (neden kullanılır?)

### Amaç:

* Merge commit karmaşasını önlemek
* Daha temiz history

### Rebase vs Merge

**Merge:**

```
A---B-------M
     \     /
      C---D
```

**Rebase:**

```
A---B---C'---D'
```

### Önemli kural ⚠️

* Public (paylaşılmış) branch’lerde rebase yapma
* Sadece kendi local branch’inde kullan

---

## Kısa Özet

* checkout → branch/commit değiştir
* reset → commit sil (tehlikeli)
* revert → commit’i geri al (güvenli)
* diff → değişiklikleri gör
* rebase → geçmişi düzleştir
