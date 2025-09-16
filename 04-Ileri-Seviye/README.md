# İleri Seviye Git İşlemleri

## Rebase İşlemleri

Rebase, "commit geçmişini yeniden düzenleme".
```
Rebase (yeniden temel oluşturma), yazılım geliştirmede kullandığımız bir Git komutu. Asıl amacı, kendi çalıştığımız dalı, ana dalın en son haline getirmek ve bunu yaparken de karmaşık "birleştirme" (merge) commit'leri oluşturmadan, commit geçmişini daha temiz ve düz bir çizgi halinde tutmak.

-> Rebase Ne İşe Yarar?

Şöyle düşünelim: Biz main diye bir ana dalımızdan yeni bir özellik (feature) dalı oluşturduk. Biz bu yeni özellik üzerinde çalışırken, ekipteki diğer arkadaşlar da main dalına yeni değişiklikler eklediler. Şimdi, bizim feature dalımız main'den geri kalmış oldu.

Normalde bu durumu düzeltmek için merge yapardık. Ama merge yaptığımızda, Git bir "merge commit" oluşturur ve bu, commit geçmişimizi dallanmış, iç içe geçmiş bir hale getirir. Bu da geçmişi okumayı zorlaştırır.

İşte tam burada rebase devreye giriyor. Rebase, bizim o feature dalındaki commit'lerimizi alıyor, onları geçici olarak bir kenara koyuyor. Sonra main dalını en son haline güncelliyor ve bizim commit'lerimizi bu yeni, güncel main dalının üzerine tek tek, sırayla yeniden uyguluyor.

Sonuç olarak, bizim feature dalımız artık main dalının en son haliyle başlamış gibi görünüyor ve tüm commit'lerimiz sanki tek bir doğrultuda yapılmış gibi duruyor.

Özetle;
Rebase, commit geçmişini daha temiz, daha anlaşılır ve daha düz bir hale getirir.

Merge commit'lerinin karmaşasını ortadan kaldırır.

Çok önemli bir kural var: 
""Ortak kullandığımız ve yayınladığımız bir dalı asla rebase etmeyiz.""

 Rebase, sadece kendi yerel dallarımızı düzenlemek için kullanılır. Eğer bir başkasının da kullandığı bir dalı rebase edersek, onunla bizim aramızdaki senkronizasyon bozulur ve büyük bir karmaşa çıkar.
```

```bash
# Interactive rebase (son 3 commit)
git rebase -i HEAD~3

# Branch'i ana dal üzerine rebase etme.
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
