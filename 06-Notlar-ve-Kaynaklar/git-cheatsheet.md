# Git Cheat Sheet

## Temel Komutlar
| Komut | Açıklama |
|-------|----------|
| `git init` | Yeni repository oluştur |
| `git clone <url>` | Repository'yi kopyala |
| `git status` | Çalışma dizini durumu |
| `git add <file>` | Dosyayı staging area'ya ekle |
| `git commit -m "msg"` | Değişiklikleri commit et |
| `git log` | Commit geçmişini görüntüle |

## Branch Komutları
| Komut | Açıklama |
|-------|----------|
| `git branch` | Branch'leri listele |
| `git branch <name>` | Yeni branch oluştur |
| `git checkout <name>` | Branch'e geç |
| `git checkout -b <name>` | Branch oluştur ve geç |
| `git merge <name>` | Branch'i merge et |
| `git branch -d <name>` | Branch'i sil |

## Remote Komutları
| Komut | Açıklama |
|-------|----------|
| `git remote -v` | Remote'ları listele |
| `git remote add origin <url>` | Remote ekle |
| `git push origin <branch>` | Branch'i push et |
| `git pull origin <branch>` | Branch'i pull et |
| `git fetch` | Remote değişiklikleri getir |

## Geri Alma Komutları
| Komut | Açıklama |
|-------|----------|
| `git reset --soft HEAD~1` | Son commit'i geri al (değişiklikleri koru) |
| `git reset --hard HEAD~1` | Son commit'i tamamen geri al |
| `git revert <commit>` | Commit'i güvenli şekilde geri al |
| `git checkout -- <file>` | Dosya değişikliklerini geri al |

## Stash Komutları
| Komut | Açıklama |
|-------|----------|
| `git stash` | Değişiklikleri geçici olarak sakla |
| `git stash list` | Stash listesini görüntüle |
| `git stash pop` | Son stash'i uygula ve sil |
| `git stash apply` | Stash'i uygula (silme) |
| `git stash drop` | Stash'i sil |
