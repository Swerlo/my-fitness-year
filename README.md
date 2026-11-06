# My Fitness Year v2.0

Türkçe, mobil öncelikli PWA. Tasarım: premium siyah/antrasit + neon yeşil.

## Kurulum
1. ZIP'i çıkar.
2. İçindeki `index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg` dosyalarını GitHub deposunun kök dizinine yükle.
3. GitHub > Settings > Pages > Deploy from a branch > main > /(root) > Save.
4. HTTPS adresini Android Chrome ile aç ve menüden "Ana ekrana ekle" / "Uygulamayı yükle" seç.

## Özellikler
- Fitness A/B/C haftalık programı ve 18 farklı egzersiz
- Set, tekrar, ağırlık kaydı
- Yüzme süresi ve mesafesi kaydı
- Ev core/mobilite kaydı
- Vücut ağırlığı ve çevre ölçümleri
- 365 günlük yolculuk takvimi
- İlerleme grafikleri
- JSON yedekleme / geri yükleme
- PWA kabuğu ve yerel kayıt

## 3D hareket kütüphanesi - dürüst durum
Three.js + GLTFLoader altyapısı eklendi. Egzersiz detay ekranı, gelecekte lisansı doğrulanmış `.glb` animasyonlarını yüklemek için hazırlandı. Bu pakette 18 egzersize özel gerçekçi insan animasyon dosyası bulunmuyor; uygulama bunları "3D animasyon bekliyor" olarak açıkça işaretler. Yanlış egzersiz animasyonu kullanılmaz.

Bir `.glb` dosyası eklemek için:
- `assets/exercises/` içine dosyayı koy.
- `index.html` içindeki ilgili egzersizin görüntüleme koduna GLTFLoader ile `assets/exercises/<id>.glb` yüklemesi eklenmeli.
- Kaynağın lisansı, atıf şartı ve dosyanın gerçekten aynı hareketi gösterdiği kontrol edilmeli.

OpenGym3D projesi (MIT kod lisansı) bir üretim/retarget pipeline'ı sunar; deposunun README'sinde gerçek anatomik insan modeli özelliğinin yol haritasında olduğu belirtilir. Bu nedenle mevcut kod veya prosedürel avatar gerçekçi insan animasyonu diye sunulmamıştır.
Kaynak: https://github.com/AssiamahS/opengym3d

## Önemli
- Veriler cihazdaki tarayıcı `localStorage` alanında saklanır. Tarayıcı verilerini temizlemek kayıtları silebilir. Düzenli JSON yedeği al.
- GitHub Pages adresi herkese açık olur; ancak egzersiz kayıtları GitHub'a gönderilmez, yalnızca kullandığın cihazda tutulur.
- Three.js modülü CDN üzerinden yüklenir; ilk açılışta ve 3D görüntüleyici altyapısında internet gerekir. Temel uygulama kabuğu önbelleğe alınır.
- Bu uygulama tıbbi öneri veya fizyoterapi programı değildir. Diz ağrısı, özellikle merdivende ani ağrı varsa egzersizleri hekim/fizyoterapist değerlendirmesiyle uyarlamak gerekir.


## Sürüm 2.2.0 prototip notu
Göğüs press hareketinde stilize CSS 3D sahne prototipi bulunur. Bu gerçek rig/GLB insan modeli değildir ve anatomik eğitim animasyonu olarak doğrulanmamıştır. Diğer egzersizlerde animasyon yoktur. Prototip harici 3D kütüphanesi gerektirmez.


## 2.2.0 notu
Göğüs press sahnesi daha anlaşılır oturma/makine yerleşimi, belirgin kol hareketi, tutacak ve hareket açıklamalarıyla güncellendi. Bu hâlâ katmanlı CSS 2.5D görsel prototiptir; gerçek 3D anatomik model veya biyomekanik doğrulaması değildir.
