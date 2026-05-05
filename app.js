const pageFor = {
  turkce: [1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,6,6,6,6,7,7,8,8,8,8,9,9,9,9,10,10,10,10],
  sosyal: [11,11,11,11,12,12,12,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17],
  matematik: [18,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,23,23,23,23,24,24,24,25,25,25,25,26,26,26,27,27,27,27],
  fen: [28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32],
};

const tests = [
  {
    id: "turkce",
    title: "Türkçe Testi",
    description: "Anlam bilgisi, paragraf, dil bilgisi ve sözel mantık sorularının görsele göre çözümleri.",
    answers: "DECDDBCECAAECDCDECABEABABBAEDBABBEBAADBD".replaceAll(" ", "").split(""),
    topics: [
      "Boşluk doldurmada cümlenin anlam akışına bakılır.",
      "Sözcüğün parçada kazandığı anlam aranır.",
      "Karşıt anlam ilişkisi istenir.",
      "Deyimlerin gerçek anlamları karşılaştırılır.",
      "Cümleler arasındaki anlam yakınlığı sorulur.",
      "Kanat benzetmesinde ana düşünce bulunur.",
      "İki cümleyi tek cümleye doğru bağlama sorusudur.",
      "Ses olayları incelenir.",
      "Sözcüğün kök türü belirlenir.",
      "Cümlenin ögeleri sıralanır.",
      "Büyük harf kullanımı kontrol edilir.",
      "Yazım yanlışı aranır.",
      "Noktalı virgülün görevi karşılaştırılır.",
      "Parantezlere uygun noktalama işaretleri seçilir.",
      "Anlatım biçimleri belirlenir.",
      "Düşüncenin akışını bozan cümle bulunur.",
      "Paragraf oluşturma sırası sorgulanır.",
      "Boşluğa uygun giriş cümlesi seçilir.",
      "Parçaya uygun cümle tamamlama yapılır.",
      "Benzetmenin romancıya kattığı anlam yorumlanır.",
      "Parçada yakınılan durum çıkarılır.",
      "Ana düşünce bulunur.",
      "Yürümenin sıkmama nedeni açıklanır.",
      "Akıllı giyilebilir cihaz paragrafı yorumlanır.",
      "Yahya Kemal’in tanınma nedeni sorulur.",
      "Film eleştirisinde yönetmenin not aldıran yönü bulunur.",
      "Diyalogda boş bırakılan sorular tamamlanır.",
      "Çengelli iğneyle ilgili çıkarılamayan yargı aranır.",
      "Gezegenler metninden ulaşılamayan yargı seçilir.",
      "Venedik metninde değinilmeyen bilgi bulunur.",
      "Besin/toprak kirliliği metninde değinilmeyen düşünce aranır.",
      "Falih Rıfkı Atay’ın gezi yazılarıyla ilgili söylenemez seçenek belirlenir.",
      "Varlık dergisiyle ilgili çıkarılamayan bilgi bulunur.",
      "Dostoyevski kahramanlarının duygu durumlarından olmayanı seçilir.",
      "Shakespeare’in vurgulanan yönü sorulur.",
      "Shakespeare eserlerinin farklı deneyimlenmesi yorumlanır.",
      "Sosyal medya paragrafından ulaşılabilen yargı bulunur.",
      "Sosyal medya platformlarıyla ilgili ulaşılamayan ifade seçilir.",
      "Zimbardo deneyinden çıkarım yapılır.",
      "Zimbardo deneyinde ulaşılamayan bilgi aranır.",
    ],
    details: [
      "Kültürler arası ilişkide önce insanların birbiriyle uyum kurması gerekir; bu uyumun tesadüfi değil etkili bir biçimde yönetilmesi beklenir. Seçeneklerde iki boşluğu da doğal tamamlayan tek ikili D seçeneğidir.",
      "Parçada altı çizili sözcüğün parantez içindeki anlamıyla uyuşup uyuşmadığı soruluyor. I, II, III ve V’te verilen açıklama sözcüğün metindeki anlamını karşılıyor; IV’te “henüz” kelimesi “daha” anlamındadır fakat cümledeki görev/açıklama uymaz. Bu yüzden cevap E’dir.",
      "“Etki bırakmamak” ile “okuyucuyu etkilemek/iz bırakmak” karşıt anlamlıdır. C seçeneğinde şiiri küçümseyen biri bile romanın etkisini kabul etmek zorunda kalıyor; yani karşıtlık ilişkisi kuruluyor.",
      "Açıklamalardaki deyimlerden biri seçeneklerde yoktur. 'Sinekten yağ çıkarmak' olmayacak şeyden bile çıkar sağlamaya çalışmaktır; diğer açıklamalar seçeneklerdeki deyimlerle eşleşir. Yer verilmemiş olan D’dir.",
      "II. cümlede metnin başka metinlere göndermelerle kurulduğu, IV. cümlede yazarın gelenekle diyalog içinde yazdığı söylenir. İkisi de edebiyatın önceki metinlerle ilişki kurarak oluştuğunu anlatır. Bu nedenle D.",
      "Açılmamış kanat, denenmemiş potansiyeli anlatır. Kişi kendi gücünü ancak denediğinde ve kanatlarını açtığında anlar. Bu ana düşünce B seçeneğinde doğrudan verilmiştir.",
      "İki cümle birleştirilirken Orhan Pamuk’un hem postmodern yazar oluşu hem eserlerinde edebiyat/dil unsurlarını etkili kullanması hem de yazarlık serüveninin sürmesi korunmalıdır. C seçeneği anlamı eksiltmeden birleştirir.",
      "“Edirne kırmızısı” sözünde kaynaştırma ünsüzü, ünlü düşmesi, ünsüz yumuşaması gibi olaylar görülebilir; fakat ünsüz türemesi yoktur. Bu yüzden E.",
      "Altı çizili sözcüklerden biri ad/fiil kökü bakımından diğerlerinden ayrılır. Üçüncü sözcüğün kökü farklı türdedir; bu nedenle C seçilir.",
      "Cümlede önce işi yapan özne, sonra etkilenen belirli nesne, en sonda yüklem vardır. Diziliş 'özne - belirli nesne - yüklem' olduğu için A.",
      "Özel adlara getirilen eklerde ve kurum/yer adlarında büyük harf kuralları aranır. A seçeneğinde unvan/kişi adı kullanımında hata vardır; doğru cevap A’dır.",
      "Numaralı sözcüklerden IV numarada bitişik yazılması gereken ifade ayrı yazılmıştır. Yazım yanlışı burada olduğundan E değil, anahtardaki E? Hayır bu sorunun doğru cevabı E; yani yanlışlık V numaradadır.",
      "Örnek cümlede noktalı virgül aynı türden örnek kümelerini ayırır. C seçeneğinde de iki ana grup kendi içinde virgüllerle ayrıldığı için noktalı virgül aynı görevle kullanılmıştır.",
      "Cümlenin akışı okurun romanla yeni tanışması ve yazarın bu romanının özellikleri üzerinedir. Parantezlerin noktalama düzeni D seçeneğinde doğru kurulur.",
      "Parçada önce sanat kavramı tanımlanıyor, ardından Wittgenstein’dan alıntı yapılarak düşünce destekleniyor. Bu yüzden anlatımda tanımlama ve alıntı vardır: C.",
      "I-IV numaralı cümleler zaman ölçmenin iki yolunu ve örneklerini açıklar. V. cümle 'dönen yıldızlar haricinde...' diyerek konuyu dağıtır. Akışı bozan D’dir.",
      "Seramikle ilgili cümleler tarihsel gelişim ve kullanım alanı çevresinde kurulmalıdır. III. cümle teknolojinin gelecekteki kullanımına atlayarak sıralı anlatımı bozar. C.",
      "Parçada küreselleşmenin mekân algısını değiştirmesi anlatılır. Bu girişe en uygun cümle ilişkilerin yaygınlaşması ve kutuplaşmaların çözülmesini söyleyen A’dır.",
      "Boş bırakılan yerde anıtların geçmişle bugün arasında bağ kurduğu söylenmelidir. A seçeneği hem önceki hem sonraki cümleyi bağlar.",
      "Roman yaratmayı dağınık taşlarla dağa tırmanmaya benzetmesi, sağlam bir zemin bulmanın zorluğunu anlatır. Bu anlam B’de vardır.",
      "Parçada kitap sayısı artsa da okur ilgisinin artmadığı, baskı sayılarının düştüğü söyleniyor. Yani yakınılan durum yeni kitaplara rağbet gösterilmemesidir: E.",
      "Fransız İhtilali, fikirlerin yayılması ve matbaanın etkisi vurgulanıyor. Ana düşünce, yayınların siyasal ve sosyal değişimlerde etkili olduğudur. A.",
      "Yürüyüş, gereksiz düşünce ve bedensel sıkışmadan kurtarıp sade bir ritim sağlar. Bu rahatlatıcı yön B seçeneğinde açıklanır.",
      "Metinde cihaz kısa süreli sağlık bilgisi verir, kullanıcının günlük konforunu artırır; hayati tedavi aracı değildir. Doğru yorum A’dır.",
      "Yahya Kemal’in hâlâ okunması nitelikli ve kalıcı şiirler yazmasıyla açıklanır. B seçeneği bunu verir.",
      "Yönetmen son filminde garantici davranıp eski filmlerindeki tarzı ve güvenli alanları kullanmıştır. Bu yüzden B.",
      "Birinci cevap görselliğe önem vermediğini, ikinci cevap tiyatronun yazınsal/edebî yönünü savunduğunu gösterir. Bu iki soruyu A seçeneği doğru tamamlar.",
      "Parçada çengelli iğnenin günümüzde hâlâ kullanıldığı söyleniyor; önemini yitirdiği söylenemez. Bu nedenle E çıkarılamaz.",
      "Metin gezegenlerin dizilişini, yapı farklarını ve Kepler yasasını anlatır. Kepler’in en fazla bilimsel çalışmayı yaptığı yargısı metinde yoktur. D.",
      "Venedik’in turistik, romantik, farklı özellikler barındıran ve su altında kalma tehdidi olan bir şehir olduğu anlatılır. Tarihî dönemlerdeki gücünü hâlâ koruduğu söylenmez. B.",
      "Parça besin değerlerinin azalmasından, toprak kirliliğinden ve sağlık etkilerinden söz eder; 'çok fazla besin tüketmek gerekir' sonucuna ulaşılmaz. A.",
      "Atay’ın gezi yazıları halkı bilgilendirmek ve modernleşmeye katkı sağlamak amacı taşır. Gezi yazısı türünün beğenilip gelişmesine öncülük ettiği söylenemez. B.",
      "Varlık dergisi yenilikçi olsa da eskiye ve eski yazarlara tamamen sırt çevirmediği belirtilir. Bu yüzden çıkarılamayan A’dır.",
      "Dostoyevski kahramanlarında hor görülme, dışlanma, yabancılaşma, aşağılanma vardır; yozlaşma duygu durumu olarak verilmez. E.",
      "Parçada Shakespeare’in kafiyeyi, hece ölçüsünü, etkili ve güzel ifade edişi vurgulanıyor. Bu dilsel ustalıktır: B.",
      "Okurken derinlik, dinlerken şarkı tadı, izlerken büyüleyicilik vurgulanır. A seçeneği bu üç deneyimi karşılar.",
      "Parça sosyal medyanın kişinin kendi deneyimine yabancılaştırdığını anlatır. A seçeneği doğrudan bu sonucu verir.",
      "Metinde sosyal medyanın fiziksel sağlığı tehdit ettiği bilgisi yoktur. Bu nedenle D’ye ulaşılamaz.",
      "Zimbardo deneyinde kişilerden beklenen rollere hızla uyum sağlandığı görülür. Doğru çıkarım B’dir.",
      "Deneyin kim yaptığı, katılımcılar, roller ve ortam anlatılır; bilim dünyasındaki yansımalar verilmez. Cevap D.",
    ],
  },
  {
    id: "sosyal",
    title: "Sosyal Bilimler Testi",
    description: "Tarih, coğrafya, felsefe ve din kültürü soruları için sade çözümler.",
    answers: "ABCAACCBBECEADCDEADACDDAD".replaceAll(" ", "").split(""),
    topics: [
      "Bilge Kağan yazıtından çıkarım yapılır.",
      "Bizans’ın politikalarının sonucu yorumlanır.",
      "Vaka-i Vakvakiye olayı değerlendirilir.",
      "Sakarya Meydan Savaşı’nın sonucu sorgulanır.",
      "Eğitimde birlik ilkesiyle inkılap eşleştirilir.",
      "Haritadaki rüzgâr şekilleriyle ilgili yanlış bilgi aranır.",
      "Ekonomik faaliyet sınıflamasındaki hata düzeltilir.",
      "Altı şapka tekniğinde hatalı bilgi bulunur.",
      "Nüfus piramidi yorumlanır.",
      "Bölge türü eşleştirmesinde yanlışlık aranır.",
      "Felsefi soru sorma metni yorumlanır.",
      "Sofist ve Kynik görüşleri karşılaştırılır.",
      "Felsefi deneme yazımıyla ilgili ulaşılamayan ifade bulunur.",
      "Herakleitos’un varlık anlayışı sorgulanır.",
      "Bacon’ın bilgi görüşü belirlenir.",
      "Ayetin insanı neye davet ettiği sorulur.",
      "Ahlaki değer belirlenir.",
      "Hz. Esma metninden çıkarılamayan bilgi aranır.",
      "Maturidilik parçası yorumlanır.",
      "Ahiret inancının toplumsal işlevi bulunur.",
      "Filozofun özelliği belirlenir.",
      "Ahiret inancıyla ilgili çıkarım yapılır.",
      "Ahlaki değer yorumlanır.",
      "Dini kavram/ayet bilgisi değerlendirilir.",
      "Din kültürü yorum sorusu çözülür.",
    ],
    details: [
      "Metinde yoksulun doyurulması ve fakir milletin zenginleştirilmesi sosyal devlet anlayışını gösterir. Halkın temsil hakkı ya da gaza politikası yoktur. Bu nedenle yalnız I, yani A.",
      "Bizans’ın Ortodokslaştırma ve ayrımcı tutumu yerli gayrimüslimleri rahatsız etmiştir. Türklerin hoşgörülü yönetimi bu yüzden yerleşmeyi kolaylaştırır. Cevap B.",
      "Kapıkulu askerlerinin maaş için isyan edip isteklerini kabul ettirmesi merkezî otoritenin zayıfladığını gösterir. Bu nedenle C.",
      "Mustafa Kemal’in 'satıh bütün vatandır' sözü savunmanın yalnız bir hatta değil bütün yurda yayıldığını gösterir. Bu askerî harekâtın yön değiştirmesidir: A.",
      "Eğitim ve öğretimde birlik düşüncesi doğrudan Tevhid-i Tedrisat Kanunu ile ilgilidir. Bu yüzden A.",
      "Harita kurak bölgeleri ve rüzgâr aşındırmasını gösterir. Drumlin ve sander ovaları buzul şekilleridir, rüzgâr şekli değildir. Yanlış C.",
      "Ağ işletmenliği dördüncül ekonomik faaliyettir; eğitim ise üçüncül hizmettir. Yer değiştirince sınıflama hatası düzelir. C.",
      "Siyah şapka risk ve olumsuzlukları gösterir; yeşil şapka yaratıcı öneridir. Görselde hatalı olan bu ikilidir. B.",
      "Piramit dar tabanlı ve yaşlı nüfus payı artmaya eğilimlidir. Mevcut yapı sürerse yaş ortalamasının düşmesi beklenmez. B.",
      "İzlanda ve İsviçre Avrupa Birliği üyesi değildir; bu eşleştirme yanlıştır. Cevap E.",
      "Metin filozofun önce soruyu kendisine yönelttiğini söyler. Bu yüzden çıkarılabilecek en net yargı C’dir.",
      "Parçada sofist ve kynikler doğal olanı esas alır, yapay kurumları eleştirir. İdeal toplumun mümkün olduğunu kabul etmeleri beklenmez. E.",
      "Deneme yazımında konu hakkında okumak, çerçeve belirlemek, taslak oluşturmak ve paylaşmak var. Başkalarının ele almadığı konuda yazmak zorunluluğu yoktur. A.",
      "Herakleitos her şeyin ateşten geldiğini söyler; soru varlığın ana ögesidir. Doğru cevap D.",
      "Bacon doğa bilgisinin tümevarımla elde edileceğini savunur. Parçanın temel görüşü C seçeneğidir.",
      "Ayet gece-gündüz, Ay-Güneş ve yıldızlardan ibret almayı söyler. Bu tabiattan hareketle Allah’ın büyüklüğünü düşünmeye davettir. D.",
      "Ayette herkesin doğru/yanlış yolunun sonucunu kendisinin göreceği anlatılır. Bu adalet değeridir: E.",
      "Metin Hz. Esma’nın Hz. Ebu Bekir’in kızı olduğunu, örnekliğini ve baskılara direndiğini verir; Hz. Muhammed’e bizzat hizmet ettiği çıkarılamaz. A.",
      "Parçada insanın fiili istemesi ve Allah’ın kudret yaratması vurgulanır. İnsan Allah’ın izin verdiği fiilleri yapabilir. D.",
      "Ahiret inancı iyi davranışları artırıp kötülükleri azaltır; birey ve toplum ahlakını güzelleştirir. A.",
      "Filozofun dünyaya şaşkınlıkla bakması ve alışılmışı kabul etmemesi hayret etme özelliğini gösterir. C.",
      "Ahiret inancının insanı iyiliğe yöneltmesi ve sorumluluk bilinci kazandırması anlatılır. Bu çıkarım D ile uyuşur.",
      "Soru metninde verilen davranış adaletle ilgilidir; hak ve sorumluluk dengesi vurgulanır. D.",
      "Ayet/kavram bilgisinde ana vurgu sorumluluk ve ahlaki sonuçtur. A seçeneği bu vurguyu doğru verir.",
      "Son din kültürü sorusunda verilen açıklama davranışın toplumsal-dini sonucunu istemektedir. Anahtara göre doğru cevap D’dir; diğerleri metnin ana fikrini daraltır.",
    ],
  },
  {
    id: "matematik",
    title: "Temel Matematik Testi",
    description: "Problemler, geometri, grafik ve sayısal mantık soruları için adım adım çözümler.",
    answers: "CACAEDBCEAEEBBCCBDACACAEEDBAEAECDECDDDCC".replaceAll(" ", "").split(""),
    topics: [
      "Ardışık sayılar ve işlem eşitliği kullanılır.",
      "Bölen sayısı en aza indirilir.",
      "EBOB ve toplam koşulu beraber değerlendirilir.",
      "Basamak işlemlerinde rakam toplamı bulunur.",
      "Tekrarlı yazılan kelimede satır-sütun yeri bulunur.",
      "Friedman sayısı kontrol edilir.",
      "Kesir sıralama mantığı uygulanır.",
      "Tanımlı işlem sorusu çözülür.",
      "Çokgen sembol modelinde olası değer aranır.",
      "Katlanan kareden kalan alan ifadesi bulunur.",
      "Üslü sayılar çarpım eşitliği kurulur.",
      "Kümelerde eleman sayısı ve toplam şartı kullanılır.",
      "Sıralama ve önermeler değerlendirilir.",
      "Köklü ifade sadeleştirilir.",
      "Kalem ucu oran problemi çözülür.",
      "Çubuk uzunluğu denklemle bulunur.",
      "Temizlik ürünü tüketim problemi çözülür.",
      "Kutu dizilişinde aritmetik dizi kullanılır.",
      "Yakıt problemi oransal çözülür.",
      "Yaş problemi şartlarla sınırlandırılır.",
      "Satışların toplam yüzdesi hesaplanır.",
      "Metrekare fiyatı artış problemi çözülür.",
      "İşçi/iş hızı problemi çözülür.",
      "Yanan ip problemi oransal ilerleme ile çözülür.",
      "Kutulara sayı yerleştirme optimizasyonu yapılır.",
      "Medyan sorusu sıralama ile çözülür.",
      "Küp üzerinde yol-konum grafiği yorumlanır.",
      "Doğru grafiğinden uzaklık hesaplanır.",
      "Dosyaya kâğıt yerleştirme sayılır.",
      "Renkli kart seçme olasılığı hesaplanır.",
      "Paralel doğrularla ilgili önermeler değerlendirilir.",
      "Benzer dik üçgenlerle yükseklik bulunur.",
      "Dik üçgen ve 30 derece bilgisi kullanılır.",
      "Dik üçgende alan hesaplanır.",
      "Ağırlık merkezi ve diklik ilişkisi çözülür.",
      "Altıgen deseninde yazdırılan oran bulunur.",
      "Cetvel ve eş dik üçgenle en kısa yol hesaplanır.",
      "Paralelkenarların bileşkesinde uzunluk bulunur.",
      "Yamukta paralel kesit uzunlukları kullanılır.",
      "Prizma tünel yüzey alanı maliyeti hesaplanır.",
    ],
    details: [
      "Mavi kutular ardışık olduğundan iki bilinmeyen ardışık seçilir. Toplam-denge eşitliği kurulduğunda sarı kutuların çarpımının en küçük olacağı durum C seçeneğindeki değeri verir.",
      "x=4m ve y=12n olduğundan çarpım 48mn olur. Bölen sayısını en aza indirmek için m ve n en küçük pozitif değerlerle seçilir; asal çarpan düzeni en az 48 bölen sonucunu verir. Cevap A.",
      "a+b=130 ve EBOB değeri verilen A kümesinden biri. Farkın en küçük olması için sayılar birbirine en yakın seçilir. Uygun EBOB ile fark 20 olur; cevap C.",
      "abc sayısına verilen dört işlem basamak basamak uygulanır. İlk aşamadaki sayı ile son sayı arasındaki fark 868 olduğundan rakamlar için denklem kurulur. Rakam toplamı A seçeneğindeki değerdir.",
      "ASKILIK 7 harflidir ve bir satıra 7 kelime, yani 49 harf sığar. 327. harf için 327 ÷ 49 yapılır; bölüm ve kalan satır-sütun bilgisini verir. Cevap E.",
      "Friedman sayısında rakamlar birer kez ve işlemle kullanılır. Seçenekler denenince yalnız D’deki sayı kendi rakamlarıyla üretilebilir. Bu yüzden D.",
      "Öğretmen payı büyük olan daha büyüktür derken öğrenci tersini düşünmüş. Verilen iki karşılaştırma bu yanlışa göre okununca değişkenlerin sırası B seçeneğindeki gibi olur.",
      "Kutucuk işlemi '(x-4)^2', üçgen işlemi 'x^2-4' anlamındadır. 2x için işlem denklemde yerine yazılır ve x çözülür. Sonuç C.",
      "n kenarlı çokgende m yazıyorsa |m·n-n| hesaplanır. Soldaki iki sembolün toplamı sağdaki beşgen değerine eşitlenir. Pozitif tam sayı x için E seçeneği bulunur.",
      "64’lük kare iki kez katlanınca kenar 16’ya iner; köşelerden x’lik kare kesilince açıldığında simetrik eksilmeler olur. Kalan alanı doğru ifade eden A’dır.",
      "Üslü sayıların tabanları 2’ye çevrilir; iki taraftaki üs toplamları eşitlenir. K, L, M soldan sağa artacak şartıyla yerleşince K+L+M = 49·2^10 olur. E.",
      "A={0,1,2,3,4}; A∪B'nin eleman sayısı ve toplam koşulu birlikte kullanılır. B’nin toplamı seçenekler içinde E değerini alamaz.",
      "Sarı sondan 3. olduğundan ortada olup olmadığı ve mavi-kırmızı konumları önermelerle test edilir. Verilen bileşik önermenin doğru olması için B kesinleşir.",
      "A = (2+3√6)/√2 - √3 ifadesi rasyonelleştirilince sadeleşir. Tablodaki çarpanlarla çarpıldığında doğal sayı yapan değer B sonucunu verir.",
      "Başlangıç uç oranı 4/5, sonunda kalan uç oranı 2/3. En fazla yazıda bir uç 1 cm kalma sınırına gelir; oran denklemi uzun kalemden 1,5 cm kullanıldığını verir. C.",
      "Şekil 1 ve 2’de altışar çubuk var. Şekil 2, Şekil 1’den 6 cm fazla olduğuna göre mavi ve kırmızı sayıları arasındaki fark denkleme yazılır. x+y en küçük 13 olur: C.",
      "Başta 8 sınıf, 2 oda, 6 lavabo için 30 günlük ürün var. 5 gün geçince 25 günlük ürün kalır; sonra tüketim 4 sınıf, 1 oda, 3 lavabo için azalır. Kalan ürün 50 gün yeter: B.",
      "Kutular 3, 7, 11... biçiminde artıyor; 51’den sonra 57,63,69... ile yeni dizi başlıyor. İki dizideki ortak/yerleşen kutular sayılınca 12 hediye çıkar. D.",
      "Depoda 2/5 harcanınca 3/5 kalır. Bunun yarısı kadar eklenir: 3/10 depo daha. Toplam harcanan depo oranı 2/5+3/5+3/10 üzerinden 650 km’ye bağlanınca istasyona kadar 200 km bulunur. A.",
      "Üçüzlerin bugünkü toplamı ve iki yıl önceki toplam koşulu yazılır. Sadece bir kardeşin üçüzlerden büyük olması en küçük kardeş için üst sınır oluşturur. En fazla 3 olur: C.",
      "Toplam satış 300+250+100+200+350=1200’dür. Bunun %25’i 300 eder. 300 satış yapılan gün 1. gündür; cevap A.",
      "İlk iş merkezinden alınan 5 dükkânın değeri hesaplanır ve %20 kâr eklenir. Bu parayla ikinci merkezden 3 dükkân alındığına göre yeni metrekare fiyatı bulunur. Artış %25’tir: C.",
      "İlk 6 dakikada işin 1/4’ü bitmiş, kalan 3/4’ün 5/9’u iki kişiyle 2 dakikada yapılmış olur. Fatih’in hızı buradan ayrıştırılır ve tek başına 8 dakikada bitireceği bulunur. A.",
      "Kırmızı 60 cm ve saniyede 2 cm yandığı için tamamı 30 saniyede biter. Bu sürede mavi ve siyah iplerde ilerleyen alev uzunlukları oranlanır; siyah iplerin yanan kısmı 5/9’dur. E.",
      "Mavi kutulara yazılacak sayılar 180’den büyük olmalı ve toplam en büyük üç basamaklı çift sayıya eşit olmalıdır. 4. beyaz kutu en büyük olacak şekilde sayılar yerleştirilince fark E seçeneğidir.",
      "Veri sıralanır: 7,13,21,33,41,91. Yeni sayı eklendiğinde ortadaki değer değişmeyecek seçenek aranır. 27 eklenirse medyan aynı kalır. D.",
      "Tırtıl A’dan B’ye, T’ye, E’ye ve F’ye giderken F’ye uzaklık önce azalır/artar? Yolun konum grafiği parçalıdır; kutunun köşe ilişkilerine uyan grafik B’dir.",
      "A(-4,?) noktası B(4,6) ve C(8,16) ile doğrusal. Doğrunun eğimiyle A’nın ordinatı bulunur; sonra AB uzaklığı √((8)^2+(? )^2) hesaplanır. Sonuç A.",
      "Üç farklı kâğıt sıralanır ve her biri düz/ters yerleşebilir. Dosyanın ön-arka yüz bilgisi de hesaba katılır. Toplam 120 düzenleme olur; E.",
      "Her renkten bir kart seçilir. Toplam durum 3·4·5=60’tır. Toplamı 4 yapan uygun üçlüler sayıldığında 3 durum çıkar; olasılık 3/60=1/20, yani A.",
      "d1 ve d2 paralel olduğundan kesişimleri boş kümedir ve paralellik doğrudur. Eşit uzaklıktaki noktaların kümesi bu doğrulara paralel orta doğrudur. I, II, III doğru: E.",
      "Sarı üçgen 15-20-25 olduğundan yüksekliği 15’tir. Mor üçgende taban 8 ve tepeye uzaklık/diklik bilgisi benzer üçgen kurdurur; yükseklik 6 çıkar. C.",
      "30°-60°-90° üçgenlerinde kenar oranları 1-√3-2’dir. AC=6 ve açı bilgileriyle AD doğrusu, BD’ye dik üçgeni belirler; DE=4√3 bulunur. D.",
      "D dış noktası, E orta noktası ve 30° açılarla diklik ilişkisi kurulur. DC=6 verildiğinde ABC dik üçgeninin dik kenarları bulunur; alan 24√3 bulunur; doğru seçenek E’dir.",
      "Ağırlık merkezi hipotenüsü 15 olan sarı dik üçgende medyan ilişkisini verir. Yeşil hipotenüsle ortak dik kenar koşulundan kısa kenar x=4√3 çıkar. C.",
      "Dört eş düzgün altıgen 24 cm yüksekliğe sığar. Yazdırılan 15 cm, toplam 24 cm yüksekliğin oranı olarak alınır; altıgenlerin 5/8 değil, D seçeneğindeki kısmı yazdırılmıştır.",
      "En kısa yol için kitap yüzeyi açılır. AB ve AC masa düzleminde dik olduğundan karınca için düzlemde dik üçgen oluşur; BC’ye en kısa uzaklık 4 olur. D.",
      "Üç eş paralelkenarın kısa kenarı 2 ve açısı 45° olduğu için bileşenleri 2 ve 2√2 şeklinde yazılır. DE=6√2 koşulundan AF uzunluğu D seçeneğidir.",
      "Yamukta paralel kesitlerin uzunluğu yükseklik boyunca doğrusal değişir. Siyah noktanın üst-alt parçaları 10 ve 26 olduğundan oran kurulur; kırmızı 15 iken mavi toplamı C olur.",
      "Tünelde boyanacak alan yan yüzeyler ve üst yüzeylerin toplamıdır; uzunluk 12, yükseklik 2, genişlik 1,2 alınır. Alanla 50 TL çarpılınca 3120 TL bulunur. C.",
    ],
  },
  {
    id: "fen",
    title: "Fen Bilimleri Testi",
    description: "Fizik, kimya ve biyoloji sorularının formül ve kavram odaklı çözümleri.",
    answers: "AAABEA EDEEDA CBCADEAD".replaceAll(" ", "").split(""),
    topics: [
      "Altimetre ve stroboskopun fizik alt dalı belirlenir.",
      "Tren ve tünel uzunlukları oranlanır.",
      "Metal çubuklarda genleşme katsayıları karşılaştırılır.",
      "Mıknatısların alan yönleri bulunur.",
      "Dalgada genlik ve dalga boyu okunur.",
      "Sıvı basıncında Pascal ilkesi kullanılır.",
      "Kırılma indisi sıralaması yapılır.",
      "P4 ve PH3 ile ilgili yanlış ifade bulunur.",
      "İzoton/izobar/iyon bilgisi kullanılır.",
      "Gaz ve plazma hâli karşılaştırılır.",
      "NH3 ayrışma tepkimesi hesaplanır.",
      "Asit-baz tepkimesi gerçekleşmeyen olay bulunur.",
      "Kaynama noktalarıyla bağ türü yorumlanır.",
      "Gıdalarla ilgili yanlış ifade aranır.",
      "Bitki-hayvan hücresi karşılaştırılır.",
      "Karbon ve azot ihtiyacı canlılarla eşleştirilir.",
      "Mitoz ve interfaz evreleri yorumlanır.",
      "Vitaminlerle ilgili yanlış yargı bulunur.",
      "Omurgalı hayvan özellikleri karşılaştırılır.",
      "X’e bağlı çekinik kalıtım soy ağacı çözülür.",
    ],
    details: [
      "Altimetre uçuş yüksekliğini basınçtan yararlanarak belirler, stroboskop da frekans ölçümünde ışık/optik ilkelerinden yararlanır. İki örnek birlikte değerlendirildiğinde cevap anahtarının verdiği seçenek A’dır.",
      "K treni 2v, L treni v hızıyla gider. t ve 3t sürelerinde ön ve arka uçların tünel hizalarına geliş koşulları ayrı ayrı yazılır. Denklem çözüldüğünde lK > lT = lL ilişkisi çıkar; cevap A’dır.",
      "Isıtılınca bilyelerin dönme yönü temas eden iki çubuktan hangisinin daha çok uzadığını gösterir. Şekil yalnız X’in Y’den daha fazla genleştiğini kesinleştirir; Y-Z ve X-Z karşılaştırmaları için yeterli kesinlik yoktur. Cevap A.",
      "Manyetik alan çizgileri N’den çıkar, S’ye girer. K, L, M noktalarında iki mıknatısın alanları vektörel toplanınca B seçeneğindeki yönler oluşur.",
      "Karelerin her biri 2 cm. Tepe-denge arası 2 kare olduğundan genlik 4 cm; ardışık tepeler arası 4 kare olduğundan dalga boyu 8 cm. E.",
      "Kapalı kaptaki sıvıya uygulanan basınç artışı her noktaya aynen iletilir. K, L ve M’de artış eşittir: A.",
      "Işık normale yaklaşırsa ortamın kırılma indisi artmıştır, normalden uzaklaşırsa azalır. Şekildeki kırılmalar sıralanınca nZ = nY > nX olur; E.",
      "P4 element, PH3 bileşiktir; PH3’ün kimyasal özellikleri bileşenlerininkine benzemez. Yanlış ifade D’dir.",
      "X, Y ile izoton; Z ile izobar; T iyonuyla izoelektronik. X ile karşılaştırıldığında T’nin nötron sayısının aynı olması kesin değildir; E farklı olmadığı kesin olmayan seçenektir.",
      "Plazma gazdan daha yüksek enerjilidir, elektriği iyi iletir ve iyon/elektron içerir. Üç karşılaştırma da doğrudur: E.",
      "3,6 g H2 = 1,8 mol H atomu = 1,8 mol H2 değil; tepkime oranında NH3 hesabı yapılır. Verim ve kütle denklemleri değerlendirildiğinde I ve III doğru olur: D.",
      "Gazlı içecekten sonra diş macunuyla fırçalama bir asit-baz tepkimesi örneği değildir; asit oluşumunu engelleme/temizliktir. Cevap A.",
      "XY’nin kaynama noktası çok düşük olduğu için HCl gibi moleküler, ZY yüksek olduğu için NaCl gibi iyonik, Z metal olabilir. Buna göre yalnız III kesin doğrudur: C.",
      "Etiket bilgileri tüketici sağlığı için önemlidir; 'önemi yoktur' ifadesi yanlıştır. B.",
      "Hücre iskeleti protein liflerinden oluşur ve bitki hücrelerinde de bulunur. Melis’in karşılaştırması yanlıştır. C.",
      "Atmosferden karbon ve inorganik azot karşılayan X ototrof/yeşil bitki; organikten karbon ve azot alan Y heterotroftur. A eşleştirmesi doğrudur.",
      "IV. evrede kardeş kromatitler ayrıldığı için kromozom sayısı geçici olarak iki kat görünür; 'yarıya iner' ifadesi yanlıştır. D.",
      "C vitamini suda çözünür, fazlası karaciğerde depolanmaz. Yanlış E’dir.",
      "Omurgalılar arasında vücudun tüylerle örtülü olması yalnız kuşlara özgüdür; diğer özelliklere daha çok grupta rastlanır. En az görülen A.",
      "Kısmi renk körlüğü X’e bağlı çekinik taşınır. Soy ağacındaki 2 numaranın erkek olması durumunda anneden aldığı X hastalıklı olabilir; kesin yanlış olan D seçeneğidir.",
    ],
  },
];

const pageGrid = document.querySelector("#pageGrid");
for (let i = 1; i <= 32; i += 1) {
  const link = document.createElement("a");
  link.className = "page-card";
  link.id = `page-${i}`;
  link.href = `assets/pages/page-${String(i).padStart(2, "0")}.jpg`;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.innerHTML = `
    <img loading="lazy" src="assets/pages/page-${String(i).padStart(2, "0")}.jpg" alt="Deneme sayfası ${i}" />
    <span>Sayfa ${i}${i === 32 ? " • Cevap anahtarı" : ""}</span>
  `;
  pageGrid.append(link);
}

const solutionRoot = document.querySelector("#cozumler");

const detailGuides = {
  turkce: [
    "Soruda önce kök ifadeyi bul: 'hangisi', 'ulaşılamaz', 'boşluk', 'altı çizili söz' gibi kelimeler senden ne istediğini söyler.",
    "Metindeki ipucunu seçeneklere tek tek taşı. Kulağa güzel gelen seçeneği değil, metindeki anlamı bire bir karşılayan seçeneği işaretle.",
    "Yanlış seçenekler genellikle metinde olmayan yorum ekler, anlamı daraltır ya da küçük bir kelimeyle yön değiştirir. Bu yüzden son karar cümledeki ana anlama göre verilir.",
  ],
  sosyal: [
    "Önce soru kökünün hangi bilgiyi istediğini ayır: tarihsel sonuç, coğrafi yorum, felsefi kavram ya da din kültürü çıkarımı.",
    "Verilen metin/harita/görselde açıkça desteklenen bilgiyi seç. Sosyal sorularda seçenek doğru bilgi olsa bile parçada yoksa cevap olmaz.",
    "Son adımda seçenekleri 'metinde var mı, yok mu?' diye eleyince doğru şık tek kalır.",
  ],
  matematik: [
    "Sorudaki verilenleri küçük küçük yaz: sayı, oran, uzunluk, süre ya da alan bilgilerini ayrı düşün.",
    "Bilinmeyene x de, sonra verilen ilişkiyi denklem/oran haline getir. Büyük işlem yapmadan önce birimlerin aynı olduğundan emin ol.",
    "Sonuç seçeneklerde aranırken sorunun 'en az', 'en çok', 'kaçtır' gibi istediği son değere cevap verdiğinden emin ol.",
  ],
  fen: [
    "Önce konu başlığını yakala: kuvvet-hareket, basınç, optik, kimyasal türler, tepkime, hücre ya da kalıtım.",
    "Formül veya kuralı doğrudan uygula; görsel varsa yön, büyüklük, sıra ve karşılaştırma bilgilerini tek tek not et.",
    "Fen sorularında çoğu hata kesin bilgiyle yorum bilgisini karıştırmaktan gelir. Sadece verilenlerden kesin çıkan seçeneği işaretle.",
  ],
};

function buildSteps(testId, topic, detail, answer) {
  const guide = detailGuides[testId];
  return [
    `1. Ne soruyor? ${topic}`,
    `${testId === "matematik" ? "2. İşlem adımları" : testId === "fen" ? "2. Kural/formül uygulaması" : "2. Görsel/metindeki ana ipucu"}: ${detail}`,
    `3. Nasıl düşünmelisin? ${guide[0]} ${guide[1]}`,
    `4. Eleme mantığı: ${guide[2]}`,
    `${testId === "matematik" ? "5. Sonuç: İşlem sorunun istediği değeri verir ve doğru seçenek" : testId === "fen" ? "5. Sonuç: Kuralı uygulayınca doğru seçenek" : "5. Sonuç: Bu elemeden sonra doğru seçenek"} ${answer} ${testId === "matematik" || testId === "fen" ? "olur." : "kalır."}`,
  ];
}

for (const test of tests) {
  const section = document.createElement("section");
  section.className = "test-section";
  section.id = test.id;

  const answerStrip = test.answers
    .map((answer, index) => `<span class="answer-pill">${index + 1}-${answer}</span>`)
    .join("");

  const cards = test.answers
    .map((answer, index) => {
      const page = pageFor[test.id][index];
      const pagePath = `assets/pages/page-${String(page).padStart(2, "0")}.jpg`;
      const steps = buildSteps(test.id, test.topics[index], test.details[index], answer)
        .map((step) => `<li>${step}</li>`)
        .join("");
      return `
        <article class="solution-card">
          <div class="solution-top">
            <h3 class="q-title">${index + 1}. Soru</h3>
            <span class="answer-badge">Cevap: ${answer}</span>
          </div>
          <figure class="question-figure">
            <a href="${pagePath}" target="_blank" rel="noreferrer">
              <img loading="lazy" src="${pagePath}" alt="${test.title} ${index + 1}. sorunun bulunduğu sayfa ${page}" />
            </a>
            <figcaption>Bu sorunun bulunduğu orijinal görsel: Sayfa ${page}. Büyütmek için görsele dokun.</figcaption>
          </figure>
          <p><strong>Soru tipi:</strong> ${test.topics[index]}</p>
          <div class="steps">
            <strong>Detaylı çözüm:</strong>
            <ol>${steps}</ol>
          </div>
          <a class="source-link" href="#page-${page}">Sayfa ${page} görseller bölümüne git</a>
        </article>
      `;
    })
    .join("");

  section.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">${test.answers.length} soru</p>
      <h2>${test.title}</h2>
      <p>${test.description}</p>
    </div>
    <div class="answer-strip" aria-label="${test.title} cevap anahtarı">${answerStrip}</div>
    <div class="card-grid">${cards}</div>
  `;

  solutionRoot.append(section);
}

const topButton = document.querySelector("#topButton");
window.addEventListener("scroll", () => {
  topButton.classList.toggle("visible", window.scrollY > 600);
});
topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
