<h1 style="text-align:center; color:green">
Git Stash
</h1>

`stash`, Git’te yaptığın ama henüz commit etmediğin değişiklikleri **geçici olarak saklamanı** sağlar.

---

**Neden kullanılır?**

* Üzerinde çalıştığın işi yarım bırakman gerektiğinde
* Branch değiştirmek istediğinde ama değişikliklerin commit’e hazır değilse
* Çalışmanı kaybetmeden temiz bir çalışma alanı elde etmek için

---

**Nasıl kullanılır?**

Değişiklikleri sakla:

```bash
git stash
```

Saklananları listele:

```bash
git stash list
```

Geri yükle:

```bash
git stash pop
```

Sadece uygula (silmeden):

```bash
git stash apply
```

---

**Mantık**

Stash = “Değişiklikleri geçici çekmeceye koymak”

İstediğinde geri alırsın, ama repo geçmişine (commit history) girmez.
**Git Stash Nedir?**

`stash`, Git’te yaptığın ama henüz commit etmediğin değişiklikleri **geçici olarak saklamanı** sağlar.

---

**Neden kullanılır?**

* Üzerinde çalıştığın işi yarım bırakman gerektiğinde
* Branch değiştirmek istediğinde ama değişikliklerin commit’e hazır değilse
* Çalışmanı kaybetmeden temiz bir çalışma alanı elde etmek için

---

**Nasıl kullanılır?**

Değişiklikleri sakla:

```bash
git stash
```

Saklananları listele:

```bash
git stash list
```

Geri yükle:

```bash
git stash pop
```

Sadece uygula (silmeden):

```bash
git stash apply
```

---

**Mantık**

Stash = “Değişiklikleri geçici çekmeceye koymak”

İstediğinde geri alırsın, ama repo geçmişine (commit history) girmez.
