## Linux Komutları

``pwd`` : Bulunulan dizini gösterir  
``ls`` : Bulunulan klasördeki dosya ve klasörleri listeler  
``ls -la`` : Gizli dosyalar dahil detaylı listeleme yapar  
``cd KlasorIsmi`` : İlgili klasöre geçiş yapar  
``cd ..`` : Bir üst klasöre çıkar  
``mkdir KlasorIsmi`` : Yeni klasör oluşturur  
``rm -rf KlasorIsmi`` : Klasörü ve içeriğini siler  
``touch dosya.txt`` : Yeni dosya oluşturur  
``cat dosya.txt`` : Dosya içeriğini görüntüler  
``cp kaynak hedef`` : Dosya veya klasörü kopyalar  
``mv eskiAdi yeniAdi`` : Dosya veya klasörü taşır ya da yeniden adlandırır  
``find . -name dosya.txt`` : Belirtilen isimde dosya arar  
``grep "kelime" dosya.txt`` : Dosya içinde kelime veya ifade arar  
``chmod +x dosya.sh`` : Dosyaya çalıştırma izni verir  
``chown kullanici:grup dosya.txt`` : Dosyanın sahibini ve grubunu değiştirir  
``df -h`` : Disk kullanım durumunu okunabilir formatta gösterir  
``du -sh klasor`` : Klasörün toplam boyutunu gösterir  
``ps aux`` : Çalışan işlemleri listeler  
``top`` : Sistem kaynak kullanımını canlı gösterir  
``sudo komut`` : Komutu yönetici yetkisiyle çalıştırır  

## Git Komutları

``git init`` : Bulunulan klasörde yeni bir Git deposu başlatır  
``git status`` : Çalışma alanındaki değişikliklerin durumunu gösterir  
``git add .`` : Tüm değişiklikleri stage alanına ekler  
``git add dosyaAdi`` : Belirtilen dosyayı stage alanına ekler  
``git commit -m "mesaj"`` : Değişiklikleri açıklama mesajı ile kaydeder  
``git log`` : Commit geçmişini listeler  
``git log --oneline`` : Commit geçmişini kısa formatta gösterir  
``git diff`` : Henüz commit edilmemiş değişiklikleri gösterir  
``git branch`` : Branch listesini gösterir  
``git branch yeni-branch`` : Yeni branch oluşturur  
``git checkout yeni-branch`` : Belirtilen branch'e geçiş yapar  
``git switch yeni-branch`` : Belirtilen branch'e geçiş yapar  
``git checkout -b yeni-branch`` : Yeni branch oluşturup o branch'e geçer  
``git merge branch-adi`` : Belirtilen branch'i mevcut branch ile birleştirir  
``git remote -v`` : Uzak depo bağlantılarını gösterir  
``git remote add origin url`` : Uzak depo ekler  
``git push origin main`` : Commit'leri uzak depoya gönderir  
``git pull origin main`` : Uzak depodaki değişiklikleri alır ve birleştirir  
``git clone url`` : Uzak depoyu bilgisayara kopyalar  
``git fetch`` : Uzak depodaki güncellemeleri indirir fakat birleştirmez  
``git reset --hard HEAD`` : Son commit durumuna geri döner ve tüm yerel değişiklikleri siler  
``git rm dosyaAdi`` : Dosyayı Git takibinden ve klasörden siler  
``git mv eskiAdi yeniAdi`` : Dosyanın adını değiştirir
